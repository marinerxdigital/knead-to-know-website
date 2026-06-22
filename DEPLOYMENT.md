# DEPLOYMENT.md

**Project:** Knead To Know Website
**Last Updated:** 2026-06-22
**Purpose:** Vercel deployment configuration, diagnostics, and fix history for 404 resolution.

## Current Deployment Target
- Platform: Vercel
- GitHub: https://github.com/marinerxdigital/knead-to-know-website
- Production URL (expected): https://knead-to-know-website.vercel.app
- Framework: TanStack Start (SSR via Nitro)

## Root Cause of 404 (2026-06-22)
- Vercel Project Settings (pre-fix):
  - Framework Preset: Other
  - Root Directory: ./
  - Install Command: npm install
  - Build Command: npm run build
  - Output Directory: dist/client
  - Node.js Version: 24.x
- Problem: `dist/client` contained only hashed JS/CSS + static assets from `public/` (no `index.html` because this is an SSR app using TanStack Start server entry).
- Build was using default Nitro target (cloudflare-module via lovable wrapper) instead of vercel preset.
- No `vercel.json` present to control/override settings or force correct Nitro preset.
- Result: static hosting tried to serve missing index.html -> 404 NOT_FOUND on all routes.

## Fix Applied
- Updated [vite.config.ts](vite.config.ts) to configure Nitro preset for Vercel:
  ```ts
  nitro: { preset: "vercel" }
  ```
- Created [vercel.json](vercel.json) (smallest deployment-only change):
  ```json
  {
    "$schema": "https://openapi.vercel.sh/vercel.json",
    "installCommand": "npm install",
    "buildCommand": "npm run build",
    "outputDirectory": ".vercel/output",
    "framework": null
  }
  ```
- Build now emits:
  - `.vercel/output/static/` (assets + public files)
  - `.vercel/output/functions/__server.func/` (SSR handler + bundles)
  - `.vercel/output/config.json` (routes: filesystem for assets + /__server for all paths)
- npm install + npm run build verified exit 0 multiple times.
- .grok/, node_modules/, dist/, 00_*/ zips, .vercel/ (build) never staged.
- Committed + pushed to `main`.

## Verification Steps Performed (post-fix)
1. npm install — success
2. npm run build — success (nitro:vercel log lines present: "Using nodejs24.x runtime")
3. Confirmed .vercel/output/static (no index.html, correct for SSR)
4. Confirmed .vercel/output/functions/__server.func/index.mjs exists
5. vercel.json valid JSON
6. git status before commit clean (only vercel + config)
7. Commit hash recorded
8. Pushed to origin main
9. .grok not committed

## Required Manual Vercel Dashboard Actions (if still 404 after push)
Because vercel.json overrides are per-deployment but dashboard Project Settings may take precedence on initial config:
- Go to Project Settings > General
- **Framework Preset:** Other
- **Output Directory:** (clear / leave blank, or explicitly `.vercel/output`)
- **Install Command:** npm install
- **Build Command:** npm run build
- Root Directory: ./
- Node.js Version: 24.x
- Redeploy the latest commit (or push again after settings change)
- Optionally: "Clear Build Cache & Redeploy"

## Build Output (SSR/Nitro Vercel)
- Full SSR deployment required (not static mockup). The app uses server-side rendering for routes, metadata (HeadContent), and dynamic elements (forms, router).
- Forcing static `dist/client` + SPA fallback would break functionality and was not used.

## Commit / Push Log
- Final fix commit: `5f99c4f Fix Vercel deployment 404 for Knead To Know preview`
- Push: `main -> main` (amended updates)

## Remaining / Notes
- Live verification of https://knead-to-know-website.vercel.app was 404 at time of last poll (build propagation / dashboard override suspected).
- Once dashboard Output Directory cleared and redeploy runs, the site should render correctly via the Nitro server function.
- No secrets, no content/brand changes made for this fix.
- Local `npm run preview` may not fully simulate SSR prod; use deployed URL for final test.
- Lint note: `npm run lint` was executed per instructions. Result: 9615 problems (almost entirely prettier formatting from skeleton + prior edits). Exit 1. Non-blocking for the deployment config fix. See ERRORS.md for details. Use `npm run format` separately if cleaning formatting.

## SSR Runtime Crash Fix (2026-06-22)
**Error:** `TypeError: Cannot read properties of null (reading 'publication')` at HomePage during renderToReadableStream on Vercel SSR.

**Root cause:** `PRESS_FEATURE = null` in business.ts (intentionally set during brand conversion to remove old Spilled Milk press data). Direct property access without guard in homepage render (and /about, /featured).

**Files fixed:**
- src/routes/index.tsx (primary homepage crash)
- src/routes/about.tsx
- src/routes/featured.tsx
- src/lib/business.ts (added interface + comment)

**Fix:** Guarded all accesses with `{PRESS_FEATURE && ( ... )}` / ternary so the section only renders when real press data present. Legacy dep safely removed from render path. No random data, no new content invented.

**Verification:**
- npm install + npm run build: success
- vercel deploy --prebuilt: success → https://knead-to-know-website-2bavvh34d-mariner-x-digital.vercel.app
- Homepage (and other routes) now safe for SSR even with null publication.

See also ERRORS.md / FIXED_ERRORS.md / GROK_* reports.

## Production Deployment (2026-06-22)
User explicitly instructed: "Yes — run vercel deploy --prebuilt --prod"

- Re-ran `npm run build` (exit 0) to ensure .vercel/output was fresh.
- Ran: `vercel deploy --prebuilt --prod`
- Result: Success ✓
  - Aliased to production: https://knead-to-know-website.vercel.app
  - Specific deployment: https://knead-to-know-website-hhxkc79yl-mariner-x-digital.vercel.app
- Verification:
  - Homepage (https://knead-to-know-website.vercel.app) serves full correct K2K content (hero "Fresh Bread, Cookies...", Daniel Island positioning, sections, product images, CTAs, etc.).
  - /about also serves correctly.
  - No SSR errors (the previous .publication crash is resolved).
- Git at time of deploy: clean for source (only ?? .grok/ untracked).

Production is now live.

## References
- Updated in: GROK_PHASE_2_REPORT.md, GROK_EXECUTION_LOG.md, ERRORS.md, FIXED_ERRORS.md, CODEX.md, 08_DELIVERABLES/FINAL_SUMMARY.md, this file.
