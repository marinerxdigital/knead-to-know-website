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
