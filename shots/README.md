# App screenshots used by the site

Real screenshots of the TaxFlow web app running the sample portfolio, written by
`apps/site/scripts/capture-shots.mjs` (`pnpm --filter @taxflow/site shots:app`). WebP, 2x, captured at 1100 x 720 CSS px.
The site crops each one to a fixed frame, so a recapture at the same names needs no code change.

## v3.1 shots (landing bento and features page)

One desktop image per screen, light and dark: `<name>-light.webp` and `<name>-dark.webp`.

| Name | App route | What it shows |
| --- | --- | --- |
| `dashboard` | `#/` | Portfolio value vs net invested chart and the KPI row |
| `flow` | `#/flow` | Flow map: wallets, exchanges, the unknown node and its dashed edge |
| `review` | `#/review` | Review stepper with dollar impact on each item |
| `transactions-drawer` | `#/transactions` with the first disposal open | Detail drawer with the cost-base trail |
| `optimise` | `#/optimise` | Sale simulator and discount-maturity planner |
| `reports` | `#/reports` | Report centre cards |

Until the v3.1 app is rebuilt and recaptured, these files are copies of the closest v3 screens
(dashboard and flow from the v3 Overview, transactions-drawer from Import, optimise from BAS).

## Legacy v3 shots (features page)

`overview` (now the `#/tax` figures screen), `import` and `bas`, each `-desktop-` and `-mobile-`, light and dark.
The capture script also records the sample's myTax figures into `src/data/sample-figures.json` from the `overview` capture.
