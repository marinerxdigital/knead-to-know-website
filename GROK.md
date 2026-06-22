# GROK.md

Instructions specifically for Grok Build.

## Build Objective (current phase)

Phase 1 complete: safe bootstrap of editable source from spilled-milk skeleton into clean project root + verified build. No visual or branding work performed.

## Folder / File Creation Rules

- Never create nested copies of the skeleton (e.g. no "spilled-milk-export/" folder at root).
- Intake organization lives only in 00\_\* folders. Working source (src/, public/, config) stays at root.
- All new top-level docs (SOURCE_OF_TRUTH.md etc.) go at root.
- .grok/skills must never be touched or overwritten.
- When adding assets later: follow guidance in asset system READMEs (public/assets/... or equivalent).

## Design Direction (do not apply until Phase 2+)

See SOURCE_OF_TRUTH.md. Skeleton is reference for layout/spacing/hierarchy only.

## Asset Usage (intake only so far)

- Original zips live in 00_SOURCE_PACKAGES (never delete).
- Primary logo in 00_BRAND_ASSETS.
- When implementing later: use PNG component references as visual guides only; rebuild buttons/forms/cards in real code (not as images).

## Pages / Components to Generate (future)

Follow skeleton routes for now (index, about, contact, inquiry, etc.). Re-skin only after brand tokens and content are locked.

## Do-not-use Patterns (active)

- No generic AI slop (per anti-ai-slop skill).
- No premature branding replacement.
- No direct edits to skeleton Spilled Milk copy, owner, email, instagram, or images.
- Do not run visual polish before Phase 2-4 gates.

## Expected Outputs (Phase 1)

- Organized 00\_ intake
- Working package.json + src/ + public/ at root
- Successful `npm run build` (or bun)
- Memory + source-of-truth docs

## Commands (use consistently)

Preferred (when Bun available): bun install, bun run dev, bun run build
Current environment: npm install, npm run build (Bun absent — see MEMORY)

## After Any Work

- Update MEMORY.md
- Re-run build verification
- Confirm protected items (.grok, 00\_\*, zips) untouched

## Phase 1 Results (recorded)

- ZIP extracted: spilled-milk-cake-boutique-export.zip (from 00_SOURCE_PACKAGES)
- Files placed: direct copy of inner project contents to root
- package.json at root: YES
- bun install: N/A (Bun missing)
- npm install + build: both succeeded (exit 0)
- Errors: none blocking
- Safe for Phase 2: YES (per final report)

## Phase 2 Summary

- Assets inspected + copied.
- Brand conversion (removal of Spilled Milk + Knead To Know identity + approved copy/colors).
- npm build passed.
- **Git remote missing — push blocked. See BLOCKER_GIT_REMOTE.md**
- Reports self-saved.
- Ready for preview once git resolved.

Read SOURCE_OF_TRUTH.md and MEMORY.md before any further action.
