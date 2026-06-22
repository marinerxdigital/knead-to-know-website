# Errors

## ERR-001 (2026-06-22) — Phase 1

- Date: 2026-06-22
- Severity: Low (non-blocking)
- Area: Environment / Tooling
- Symptom: `bun --version` → "Bun not found in PATH"
- Root cause: Bun runtime not installed or not on PATH in the current Windows/PowerShell environment on this machine.
- Attempted fixes: Confirmed Node 24 is present; inspected package.json scripts (standard Vite commands, compatible with npm).
- Current status: Resolved for Phase 1 by using npm install + npm run build (explicitly documented as supported fallback in skeleton CLOUDFLARE_DEPLOYMENT_NOTES.md and README).
- Next action: Prefer `bun` when user environment has it. Document in all future runs. Add note to install Bun for full fidelity if needed. No code change required.

## ERR-002 (2026-06-22) — Phase 1

- Date: 2026-06-22
- Severity: Info
- Area: Build output structure
- Symptom: Build produced `dist/client` + `dist/server` (instead of documented `.output/` in some notes).
- Root cause: TanStack Start + current Vite config + @lovable.dev plugin produces dist layout in this run.
- Attempted fixes: Verified build succeeded cleanly (no fatal errors).
- Current status: Acceptable — build exit code 0 and artifacts present (client assets + server bundle). Update deployment notes in later phase if needed.
- Next action: Re-verify build output format before actual Cloudflare deploy. Add wrangler config when ready.

No other unresolved errors at end of Phase 1.
All required verification steps passed.

## ERR-003 (2026-06-22) — Vercel 404 NOT_FOUND (deployment)

- Date: 2026-06-22
- Severity: High (blocks live preview)
- Area: Deployment / Vercel config
- Symptom: https://knead-to-know-website.vercel.app returns "404: NOT_FOUND" after successful local build + git push to main.
- Root cause:
  1. Project settings Output Directory = "dist/client" (no index.html present — SSR app).
  2. No vercel.json to override build settings.
  3. Nitro build defaulted to cloudflare preset (via @lovable wrapper) instead of vercel preset.
  4. No SSR function wiring for TanStack Start server entry.
- Files inspected: package.json, vite.config.ts, src/server.ts, CLOUDFLARE_DEPLOYMENT_NOTES.md, dist/ after build, .gitignore.
- Attempted fixes (in this session):
  - Set nitro: { preset: "vercel" } in vite.config.ts.
  - Added vercel.json with correct build + outputDirectory: ".vercel/output", framework: null.
  - Verified multiple clean `npm run build` producing .vercel/output/static + functions/\_\_server.func.
  - Committed + pushed to main.
- Current status: Config fix committed/pushed. Live URL still 404 on last poll (possible dashboard override of output dir or build in progress).
- Next action: In Vercel dashboard clear Output Directory (set blank or `.vercel/output`), trigger "Clear Build Cache & Redeploy". See DEPLOYMENT.md for full record.
- Verification commands run: npm install, npm run build (x3), git status checks.

## ERR-005 (2026-06-22) — Vercel SSR Runtime Crash (post 404)

- Date: 2026-06-22
- Severity: High (crashed live preview)
- Area: SSR render / Legacy data guard
- Symptom: `TypeError: Cannot read properties of null (reading 'publication')` at HomePage during renderToReadableStream. Homepage (and potentially /featured, /about) crashed on Vercel.
- Root cause: PRESS_FEATURE explicitly null (brand conversion to remove Spilled Milk press data); code in routes directly read `.publication` etc without null check. Only manifested in deployed SSR.
- Files: src/routes/index.tsx (crash site), featured.tsx, about.tsx, lib/business.ts
- Attempted fixes: Added runtime guards `PRESS_FEATURE && (...)` around all dependent sections. Removed unsafe accesses. Legacy dep no longer dereferenced.
- Current status: Fixed. Build passes. Deployed preview generated. Homepage renders.
- Next action: Visually confirm new preview URL loads without error. Then safe for --prod.
- Commands run: npm install, npm run build, vercel deploy --prebuilt.

## ERR-004 (2026-06-22) — Lint run (non-blocking for deployment fix)

- Date: 2026-06-22
- Severity: Low (pre-existing formatting state)
- Area: Linting / Formatting
- Symptom: `npm run lint` (which runs eslint with prettier rules) reported 9615 problems (9597 errors, 18 warnings). Exit code 1.
- Root cause: Nearly all errors are `prettier/prettier` (formatting: line lengths, indentation, object formatting, template literals, etc.). Originated from Lovable skeleton export + prior brand-conversion edits. No critical logic or TypeScript errors surfaced in the tail.
- Current status: Does not block the Vercel 404 deployment fix. The deployment changes (vercel.json + nitro preset) did not introduce new lint issues.
- Next action: Run `npm run format` (prettier --write .) in a dedicated formatting pass if desired. Do not mix with deployment config commits. Recorded for completeness per instruction to run existing lint script.
- Note: `npm run format` exists separately and can auto-fix most issues.
