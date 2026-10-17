/*
 * TaxFlow service worker. Hand-written, no dependencies.
 *
 * - Precaches the app shell listed in sw-precache.js, which the build writes (vite.config.ts) with the build's
 *   version and every file it emitted. A new build changes that file, so the browser installs this worker again.
 * - One cache per build ("taxflow-app-<version>"); older ones are deleted when the new worker takes over.
 * - A new worker waits until the page asks it to take over (the "Update available" prompt), so an open
 *   session never mixes files from two builds.
 * - Every URL is relative to this file, so the app works at "/" and under a sub-path.
 * - Only same-origin GET requests are answered. Price lookups and other origins go straight to the network.
 */
/* eslint-env serviceworker */
importScripts('./sw-precache.js');

const PRECACHE = self.TAXFLOW_PRECACHE || { version: 'dev', files: [] };
const PREFIX = 'taxflow-app-';
const CACHE = PREFIX + PRECACHE.version;
const SCOPE = new URL('./', self.location.href).href;
const INDEX = new URL('./index.html', SCOPE).href;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // Fetch past the HTTP cache so the precache holds exactly this build.
      cache.addAll(PRECACHE.files.map((f) => new Request(new URL(f, SCOPE).href, { cache: 'reload' }))),
    ),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(SCOPE)) return;

  // Pages: the cached app shell (hash routes all live in index.html), falling back to the network.
  if (request.mode === 'navigate') {
    const path = url.href.split(/[?#]/)[0];
    if (path === SCOPE || path === INDEX) {
      event.respondWith(caches.match(INDEX, { cacheName: CACHE, ignoreVary: true }).then((hit) => hit || fetch(request)));
    }
    return;
  }

  // Build files: cache first (their names change with their contents). Anything else: network, then cache.
  // ignoreVary: a host that answers with "Vary: Origin" (CORS-enabled servers and CDNs) would otherwise never match
  // the page's module-script requests, which carry an Origin header the precache requests did not, and the app
  // would not start offline.
  event.respondWith(
    caches.match(request, { cacheName: CACHE, ignoreSearch: true, ignoreVary: true }).then(
      (hit) =>
        hit ||
        fetch(request).catch(() =>
          caches.match(request, { ignoreSearch: true, ignoreVary: true }).then((old) => old || Response.error()),
        ),
    ),
  );
});
