# MEMORY.md

Long-term project memory. Update after every meaningful session.

## Handoff Session (2026-06-22) — Lint fix + Claude Code handoff

- Agent: Grok Build
- Ran `npm run format` — fixed 5,857 Prettier CRLF lint errors project-wide
- Added `.editorconfig` (`end_of_line = lf`) to prevent CRLF regression on Windows
- Lint now: 3 `@typescript-eslint/no-explicit-any` errors + 6 `react-refresh` warnings (non-blocking)
- Created `docs/handoffs/CLAUDE_CODE_HANDOFF.md` — comprehensive Claude Code takeover document (4 parallel audit agents)
- Created `CLAUDE.md` — Claude entry point pointing to handoff
- Live preview: https://knead-to-know-website-v2.pages.dev (Cloudflare Pages)
- HEAD commit before this session: `e782049` (bakery photos)
- Next agent (Claude): start with `business.ts`, form wiring, SEO fixes, then UI/UX revamp per handoff §8–11

## Phase 2 Session (2026-06-22) — Brand Conversion

- Asset packages inspected and key PNGs (logo + product cards + UI refs) copied to public/assets/knead-to-know/ structure.
- Brand removal audit performed (see 07_QA/BRAND_REMOVAL_AUDIT.md).
- Core files updated: business.ts, Header.tsx, Footer.tsx, forms, \_\_root.tsx, about.tsx, index.tsx, site-data, squarespace.
- Homepage hero/meta updated to approved bakery copy and CTAs ("View Menu", "Request an Order").
- New required folders created (01_SOURCE to 08_DELIVERABLES) + many spec'd .md files.
- npm install + npm run build passed (using Phase 1 verified npm path).
- Brand audit: major Spilled Milk references removed from active UI/code paths.
- **BLOCKER:** No .git repository. git remote check failed. Preview branch/push not performed. Blocker report written.
- Reports self-saved: GROK_PHASE_2_REPORT.md, EXECUTION_LOG, BLOCKER_GIT_REMOTE, ASSET_INVENTORY, BRAND_REMOVAL_AUDIT, etc.
- Stopped before push per non-negotiable rules.

## Phase 1 Session (2026-06-22)

- Date: 2026-06-22
- Agent: Grok (following user Phase 1 instructions)
- Work completed:
  - Created intake structure: 00_SOURCE_PACKAGES, 00_BRAND_ASSETS, 00_PROJECT_NOTES, 00_TEMP_EXTRACT
  - Moved all 5 original ZIP packages into 00_SOURCE_PACKAGES (preserved)
  - Moved Knead_To_Know_Primary_Circular_Logo.png into 00_BRAND_ASSETS (preserved)
  - Consolidated prior temp*extract*\* folders into 00_TEMP_EXTRACT
  - Extracted spilled-milk-cake-boutique-export.zip to 00_TEMP_EXTRACT/spilled-milk-skeleton
  - Inspected inner "spilled-milk-export/" (confirmed package.json, bun.lock, vite.config.ts, src/, public/, components.json etc.)
  - Copied inner project contents **directly** to workspace root (no nesting)
  - Preserved without modification: .grok/, 00\_\* folders, all zips (in archive), logo (in brand assets)
  - Bun unavailable in PATH (Node v24 present)
  - Ran `npm install` (supported fallback) → exit 0
  - Ran `npm run build` → exit 0, produced dist/client + dist/server
  - Created control files: SOURCE_OF_TRUTH.md, MEMORY.md, GROK.md, CODEX.md, ERRORS.md, FIXED_ERRORS.md
- Files changed / created:
  - New dirs: 00\_\*
  - Zips relocated to archive
  - Logo relocated
  - Full source tree (src/, public/, package.json, etc.) now at root
  - New md control files at root
  - npm artifacts: node_modules/, package-lock.json, dist/
- Important decisions:
  - Use skeleton **only as structure** (per asset README)
  - Strict separation of intake vs working source
  - npm fallback documented (Bun preferred)
- User preferences / constraints:
  - Follow all 12 .grok/skills (esp. listed 5 for Phase 1)
  - No branding, no redesign, no secret touches, preserve zips
- Known constraints:
  - Bun missing on this machine
  - Skeleton contains Spilled Milk content + "lovable-assets" (will be replaced later)
  - .workspace/ arrived from skeleton (keep for reference; distinct from our .grok)
- Current status: Phase 1 complete. Build verified. Project root is now working app.
- Open questions:
  - Exact final domain for SITE_URL (to be set in Phase 5+)
  - Web3Forms access key (user to provide)
- Next recommended action: Proceed to Phase 2 only after user approval. Begin with brand token audit + foundation using brand-strategy... and design-system-token... skills. Update this file on every step.

## Prior State (pre-Phase 1)

Workspace contained only zips, logo, .grok/skills, and temporary extract folders from inspection. No editable source.

## Errors Encountered (Phase 1)

None blocking. Bun not in PATH (non-fatal; npm worked).
