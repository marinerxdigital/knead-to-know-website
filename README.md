# Knead To Know Website v2

Boutique small-batch home bakery — Daniel Island, South Carolina.

**Status: Phase 1 (Safe Bootstrap & Verification) complete.**

This project was bootstrapped from the Spilled Milk Cake Boutique export **as a structural skeleton only**.

- Layout, routing, component organization, and flow patterns were used as reference.
- **Zero branding, copy, images, or colors from the skeleton have been retained or applied yet.**

## Quick Start (current environment)

Bun is recommended but was unavailable in this session.

```bash
# When Bun available
bun install
bun run dev

# Fallback (used for Phase 1 verification)
npm install
npm run build
```

## Organization (do not disturb)

- `00_SOURCE_PACKAGES/` — All original ZIPs (skeleton + Knead asset packages). Never delete.
- `00_BRAND_ASSETS/` — Primary logo and future brand assets.
- `00_PROJECT_NOTES/` — Future notes.
- `00_TEMP_EXTRACT/` — Temporary inspection extracts (clean as needed).
- `.grok/skills/` — Professional skills. Load before design/implementation work.
- `src/`, `public/`, `package.json` etc. — Working application source (skeleton structure).

## Key Control Files (read first)

- SOURCE_OF_TRUTH.md (highest authority)
- MEMORY.md (session history)
- GROK.md, CODEX.md (agent-specific)
- ERRORS.md / FIXED_ERRORS.md

## Build Results (Phase 1)

- npm install: success
- npm run build: success (dist/client + dist/server produced)
- package.json present at root
- Protected items preserved: .grok/, 00\_\* folders, all ZIPs, logo

See MEMORY.md for full Phase 1 record and next steps.

## Tech Stack

TanStack Start (React 19 + Vite + TanStack Router), TypeScript, Tailwind v4, shadcn/ui + Radix, Bun (preferred).

## Next

Phase 2 will begin brand foundation and token work using the required skills. No visual changes until then.

---

**Original skeleton README preserved below for reference during adaptation (do not use its content as final).**

---

# Spilled Milk Cake Boutique

Custom cake studio website for Alexandra Kowaleski in Charleston, SC.
Built on TanStack Start (React 19 + Vite 7) with Tailwind CSS and shadcn/ui.

(Full original content from skeleton follows in git history or archive if needed.)
