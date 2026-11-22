# SysAdmin Toolkit

Small web tools for system and network administrators (HTML, CSS, JavaScript).
Pipeline: GitHub Actions (lint, test, site-check run in parallel) then Vercel deploy.

## Tools

| Tool | File | Status |
| --- | --- | --- |
| chmod calculator | `public/tools/chmod.js` | Done |
| IP address checker | `public/tools/ip.js` | Done |
| Subnet calculator | | Coming soon |
| Password checker | | Coming soon |
| Cron helper | | Coming soon |

To add a tool: create `public/tools/<name>.js`, a test in `tests/<name>.test.js`,
and a card in `public/index.html`.

## Run locally

```
npm install
npm run lint
npm test
npm run check
npx serve public
```

## Setup for deployment (once)

1. Create an empty GitHub repo and push this folder to `main`.
2. Run `vercel link` in this folder (new project, do not connect Git).
3. Copy `orgId` and `projectId` from `.vercel/project.json`.
4. GitHub repo, Settings, Secrets and variables, Actions, Secrets tab, add:
   `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
5. Push to `main`. All 4 jobs should turn green and the site goes live.

*Some Error to fail a pipeline*

lint -> Saari .js files ->	Code ki style aur chhoti galtiyan (unused variable, semicolon, double quotes)
public/app.js -> semicolon remove ;

test -> tests/*.test.js ->	Code sahi jawab deta hai ya nahi
public/tools/ip.js -> <= 255 ko < 255 (line 12)

site-check -> scripts/check-site.js -> dekhta hai Zaroori files maujood hain aur vercel.json sahi hai
scripts/check-site.js -> style.css ka naam badal kar styles.css

deploy -> .github/workflows/ci.yml -> Vercel tak pahunchna aur site publish karna
.github/workflows/ci.yml -> replace TOKEN with TOKN