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
  - Verified multiple clean `npm run build` producing .vercel/output/static + functions/__server.func.
  - Committed + pushed to main.
- Current status: Config fix committed/pushed. Live URL still 404 on last poll (possible dashboard override of output dir or build in progress). 
- Next action: In Vercel dashboard clear Output Directory (set blank or `.vercel/output`), trigger "Clear Build Cache & Redeploy". See DEPLOYMENT.md for full record.
- Verification commands run: npm install, npm run build (x3), git status checks.
