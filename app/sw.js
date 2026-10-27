/*
 * TaxFlow service worker. No dependencies. Documents pin their exact HTML build across peer updates.
 * Only the accepting tab reloads. Unknown legacy clients retain old builds conservatively.
 * Cache maintenance is coordinated across worker instances; unrelated origin caches never supply app code.
 */
/* eslint-env serviceworker */
importScripts('./sw-precache.js');

const PRECACHE = self.TAXFLOW_PRECACHE || { version: 'dev', files: [] };
const PREFIX = 'taxflow-app-';
const CACHE = PREFIX + PRECACHE.version;
const SCOPE = new URL('./', self.location.href).href;
const INDEX = new URL('./index.html', SCOPE).href;
const META = 'taxflow-build-clients-' + SCOPE;
const metaURL = (kind, id) => new URL('./__sw_metadata__/' + kind + '/' + encodeURIComponent(id), SCOPE).href;
const matchOptions = { ignoreSearch: true, ignoreVary: true };
let maintenance = Promise.resolve();
const assetURL = request => { const url = new URL(typeof request === 'string' ? request : request.url); url.search = ''; url.hash = ''; return url.href; };

// Call under maintain(): opening an existing build must not race its retirement and recreate an empty cache.
async function buildCaches() {
  const builds = [];
  for (const name of (await caches.keys()).filter(key => key.startsWith(PREFIX))) {
    const cache = await caches.open(name);
    if (await cache.match(INDEX, { ignoreVary: true })) builds.push(name);
  }
  return builds;
}
async function matchBuild(meta, name, request) {
  if (!name || !await caches.has(name)) return undefined;
  const manifest = await meta.match(metaURL('assets', name));
  if (!manifest || !(await manifest.json()).includes(assetURL(request))) return undefined;
  return (await caches.open(name)).match(request, matchOptions);
}

// A worker's URL is shared by successive deployments. Ask the actual registered worker for its cache,
// rather than treating every historical "installed" record as a permanently live waiting worker.
function workerBuild(worker) {
  if (!worker || worker.state === 'redundant') return Promise.resolve(null);
  return new Promise(resolve => {
    const channel = new MessageChannel();
    let finished = false;
    const finish = value => {
      if (finished) return; finished = true; clearTimeout(timer);
      channel.port1.close(); channel.port2.close(); resolve(value);
    };
    const timer = setTimeout(() => finish(null), 2000);
    channel.port1.onmessage = event => {
      const info = event.data;
      finish(info?.scope === SCOPE && typeof info.cache === 'string' && info.cache.startsWith(PREFIX) ? info.cache : null);
    };
    try { worker.postMessage({ type: 'BUILD_PROBE' }, [channel.port2]); }
    catch { finish(null); }
  });
}
async function prune() {
  if (!self.navigator?.locks) return;
  const meta = await caches.open(META);
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  const live = clients.filter(client => client.url.startsWith(SCOPE));
  const pins = new Set();
  const active = await meta.match(metaURL('active', 'build'));
  pins.add(active ? await active.text() : CACHE);
  for (const client of live) {
    const record = await meta.match(metaURL('client', client.id));
    if (!record) return;
    pins.add(await record.text());
  }
  let unknownWorker = false;
  // Activation changes registration.active before the new worker can acquire this lock and publish metadata.
  const activating = self.registration.active?.state === 'activating' ? self.registration.active : null;
  for (const worker of [self.registration.installing, self.registration.waiting, activating]) {
    if (!worker || worker.state === 'redundant') continue;
    const build = await workerBuild(worker);
    if (build) pins.add(build);
    else if (worker.state !== 'redundant') unknownWorker = true;
  }
  for (const name of await buildCaches()) {
    const state = await meta.match(metaURL('build', name));
    if (pins.has(name) || !state) continue;
    const status = await state.text();
    if (status === 'installed' && unknownWorker) continue;
    const cache = await caches.open(name);
    const entries = await cache.keys();
    if (entries.some(request => request.url.endsWith('/index.html') && request.url !== INDEX)) continue;
    await caches.delete(name);
    await meta.delete(metaURL('build', name));
    await meta.delete(metaURL('assets', name));
  }
  const ids = new Set(live.map(client => metaURL('client', client.id)));
  for (const request of await meta.keys()) {
    if (request.url.startsWith(metaURL('client', '')) && !ids.has(request.url)) await meta.delete(request);
  }
}
function maintain(operation = prune) {
  const work = maintenance.then(() => self.navigator?.locks
    ? self.navigator.locks.request(META, operation)
    : operation());
  maintenance = work.catch(() => undefined);
  return work;
}

self.addEventListener('install', event => {
  event.waitUntil(maintain(async () => {
    const existed = await caches.has(CACHE);
    const cache = await caches.open(CACHE);
    try {
      await cache.addAll(PRECACHE.files.map(file => new Request(new URL(file, SCOPE).href, { cache: 'reload' })));
      const meta = await caches.open(META);
      await meta.put(metaURL('assets', CACHE), new Response(JSON.stringify(PRECACHE.files.map(file => new URL(file, SCOPE).href))));
      await meta.put(metaURL('build', CACHE), new Response('installed'));
    } catch (error) { if (!existed) await caches.delete(CACHE); throw error; }
  }));
});
self.addEventListener('activate', event => {
  event.waitUntil(maintain(async () => {
    const meta = await caches.open(META);
    await meta.put(metaURL('active', 'build'), new Response(CACHE));
    for (const name of await buildCaches()) {
      if (name === CACHE || !await meta.match(metaURL('build', name))) await meta.put(metaURL('build', name), new Response('activated'));
      // Migrate complete app-scope caches left by pre-protocol workers, without using unrelated caches.
      if (!await meta.match(metaURL('assets', name))) {
        const entries = await (await caches.open(name)).keys();
        await meta.put(metaURL('assets', name), new Response(JSON.stringify(entries.map(request => assetURL(request)).filter(url => url.startsWith(SCOPE)))));
      }
    }
    await self.clients.claim();
    for (const client of await self.clients.matchAll({ type: 'window' })) {
      if (client.url.startsWith(SCOPE)) client.postMessage({ type: 'BUILD_REQUEST' });
    }
    await prune();
  }));
});
self.addEventListener('message', event => {
  if (event.data?.type === 'BUILD_PROBE') {
    // Respond without taking the maintenance lock: the requesting active worker may be holding it.
    event.ports?.[0]?.postMessage({ cache: CACHE, scope: SCOPE });
  } else if (event.data?.type === 'SKIP_WAITING') event.waitUntil(self.skipWaiting());
  else if (event.data?.type === 'WORKERS_CHANGED') event.waitUntil(maintain());
  else if (event.data?.type === 'BUILD_CLIENT' && event.source?.id && typeof event.data.entry === 'string' && typeof event.data.build === 'string') {
    const client = event.source, entry = event.data.entry, build = PREFIX + event.data.build;
    event.waitUntil(maintain(async () => {
      if (!client.url.startsWith(SCOPE) || !entry.startsWith(new URL('./assets/', SCOPE).href)) return;
      const meta = await caches.open(META);
      if ((await buildCaches()).includes(build) && await matchBuild(meta, build, entry)) await meta.put(metaURL('client', client.id), new Response(build));
      await prune();
    }));
  }
});

async function cachedAsset(event) {
  return maintain(async () => {
    const meta = await caches.open(META);
    const activeRecord = await meta.match(metaURL('active', 'build'));
    const active = activeRecord ? await activeRecord.text() : CACHE;
    const pin = event.clientId && await meta.match(metaURL('client', event.clientId));
    if (pin) return { hit: await matchBuild(meta, await pin.text(), event.request), active };
    // Legacy documents cannot report a build. Use only activated, app-scope manifests containing this
    // exact URL. Ambiguous content fails closed; no origin-wide or cache-creation-order selection.
    const matches = [];
    for (const name of await buildCaches()) {
      const state = await meta.match(metaURL('build', name));
      if (name !== active && (!state || await state.text() !== 'activated')) continue;
      const hit = await matchBuild(meta, name, event.request);
      if (hit) matches.push(hit);
    }
    if (matches.length > 1) {
      const first = matches[0];
      const bytes = new Uint8Array(await first.clone().arrayBuffer());
      for (const hit of matches.slice(1)) {
        const other = new Uint8Array(await hit.clone().arrayBuffer());
        if (hit.status !== first.status || hit.headers.get('content-type') !== first.headers.get('content-type') || bytes.length !== other.length || bytes.some((byte, index) => byte !== other[index])) return { hit: Response.error(), active };
      }
    }
    return { hit: matches[0], active };
  });
}
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(SCOPE)) return;
  if (request.mode === 'navigate') {
    const path = url.href.split(/[?#]/)[0];
    if (path === SCOPE || path === INDEX) event.respondWith(maintain(async () => {
      const meta = await caches.open(META), active = await meta.match(metaURL('active', 'build'));
      return await matchBuild(meta, active ? await active.text() : CACHE, INDEX);
    }).then(hit => hit || fetch(request)));
    return;
  }
  event.respondWith((async () => {
    const { hit, active } = await cachedAsset(event);
    if (hit) return hit;
    let network;
    try { network = await fetch(request); if (network.ok) return network; } catch { /* Offline: only the active managed build is a fallback. */ }
    const fallback = await maintain(async () => matchBuild(await caches.open(META), active, request));
    return fallback || network || Response.error();
  })());
});
