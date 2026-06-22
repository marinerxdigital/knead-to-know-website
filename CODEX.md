# CODEX.md

Instructions specifically for Codex (code polish, refactor, deployment prep).

## Code Polish Responsibilities (future phases)
- Enforce strict TypeScript (no implicit any, proper narrowing).
- Keep components small (see responsive-component-composition-architect limits).
- Run `npm run lint` / typecheck equivalents before any commit of changes.
- After any structural copy or later edits, run full build and verify no new errors.
- Prefer npm/bun scripts that exist in package.json.
- Document every change in MEMORY.md + FIXED_ERRORS.md when applicable.

## Type Safety Rules
- Project uses TS + strict expectations (from senior-full-stack skill).
- Validate external inputs (forms, env, route data).
- No `any` unless truly unavoidable and commented.

## Refactor Rules
- Do not refactor UI or design tokens until brand + design system skills have been applied (Phase 2+).
- Preserve skeleton routing and component structure during bootstrap.
- When later rebranding: update lib/business.ts, routes, metadata, assets carefully.

## Testing Commands
- `npm run build`
- `npm run lint`
- Manual: dev server + form submissions + responsive checks (see production-qa skill)

## Deployment Instructions
- Target: Cloudflare Workers (see CLOUDFLARE_DEPLOYMENT_NOTES.md and skeleton notes).
- After build: dist/ (client + server) or .output/ equivalent.
- Environment: VITE_WEB3FORMS_ACCESS_KEY (never commit; set in platform secrets).
- Do not deploy until production-qa gatekeeper checklist passes.

## Git / GitHub Expectations
- Record major bootstrap steps.
- Do not commit node_modules or secrets.

## PR Review Checklist (for later)
- Build + lint + typecheck clean.
- No accidental Spilled Milk strings or assets left after rebrand.
- Protected folders untouched.
- Follows all loaded .grok skills.

Phase 1 note: No code changes performed beyond source extraction. All verification passed via npm path.

Phase 2 updates:
- Brand conversion + asset integration completed (see GROK_PHASE_2_REPORT).
- Product card manifest available for Menu/Product components.
- Use npm run build for verification.
- Git push not performed (no repo).
- Focus next: real ProductCard impl, new route pages (menu/custom/catering/faq), image placeholders swap.
