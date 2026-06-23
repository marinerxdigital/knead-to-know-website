# MEMORY.md

Long-term project memory. Update after every meaningful session.

## Final Data Integration Session (2026-06-22) — Verified menu + phone + client tracking

- Agent: Grok Build (4-workstream parallel execution)
- `business.ts`: full name "Knead To Know Sweet & Sour", phone `(843) 973-0309`, `tel:8439730309`, hours/email/social remain null (conditionally hidden)
- `products.ts`: all 16 verified menu items with real pricing; removed invented descriptions and fake `BROADER_MENU` section from menu page
- Homepage hero/ordering/about updated per client brief; phone CTAs on index, menu, about, contact, footer, custom-orders
- About page: conservative safe copy only — no invented Wendy biography
- `CLIENT_DELIVERABLES.md` created — confirmed vs still-needed checklist for Wendy
- Build passes; lint 0 errors (9 pre-existing warnings); no `typecheck` script in package.json
- Still outstanding from Wendy: email, hours, social links, founder story, founder photo

## Visual Upgrade Session (2026-06-22) — Forms, SEO, homepage restructure

- Agent: Grok Build (14-task wave execution on `visual-upgrade-2026-06-22`)
- Visual upgrade: Fraunces display font, wheat `#C2A878` accent token, scoring-line `SectionDivider` motif, focus-visible rings
- Homepage restructured from 11 sections to 6 (hero, trust strip, featured products, how-to-order, about teaser, FAQ + CTA)
- `business.ts`: Wendy Mercado name, honest placeholders; null phone/email/social with conditional Footer/Contact rendering
- Products: all 16 prices → "Ask for pricing" wheat pill; removed 4 mismatched product photos
- About page: Wendy Mercado name + styled photo-pending slot
- Gallery: 3 populated categories only, Lightbox wired
- Forms: Custom Orders + Catering wired to Web3Forms (fallback key pattern from ContactForm) — functionally demo-ready, not production-keyed
- SEO: robots.txt/sitemap fixed, OG image → real K2K hero photo, Bakery JSON-LD added
- Deleted 25 orphaned Spilled Milk `.asset.json` pointers + backing `lovable-assets` folders
- Build + lint pass; placeholder bracket sweep clean in `src/`
- Still outstanding per `docs/CLIENT_READY_WEBSITE_REQUIREMENTS.md`: Wendy's real phone, email, address, hours, social links, pricing, founder photo/story, testimonials
- Live preview: https://knead-to-know-website-v2.pages.dev
- `VITE_WEB3FORMS_ACCESS_KEY`: verify/set in Cloudflare Pages build env before real customer traffic

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
