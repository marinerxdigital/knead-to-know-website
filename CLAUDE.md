# CLAUDE.md — Instructions for Claude Code

You are taking over **Knead To Know Website v2** from Grok Build. Read this file first, then the full handoff.

## Start here (in order)

1. **`docs/handoffs/CLAUDE_CODE_HANDOFF.md`** — **PRIMARY HANDOFF** (architecture, problems, UI/UX revamp plan, phased roadmap, file map, QA checklist)
2. **`SOURCE_OF_TRUTH.md`** — Non-negotiable brand rules and project authority
3. **`MEMORY.md`** — What Grok completed and current status
4. **`docs/CLIENT_READY_WEBSITE_REQUIREMENTS.md`** — Wendy Mercado intake checklist
5. **`00_BRAND_ASSETS/Knead_To_Know_Website_Design_Asset_Package/00_READ_ME/BRAND_GUIDELINES.md`** — Visual brand lock

## Your mission

Bring this **client-review mockup** to **production-ready** for **Wendy Mercado** (Knead To Know, Daniel Island, SC home bakery). The visual shell exists. Your job is **real business data, working forms, SEO, UI polish, and launch**.

## Non-negotiables

- **Knead To Know only** on any customer-facing surface — never Spilled Milk branding, copy, or cake-boutique positioning
- Spilled Milk export is **structural skeleton only**
- **Cloudflare Pages** is the deployment target (`vite.config.ts` → `nitro.preset: "cloudflare-pages"`)
- Do not invent prices, testimonials, press, or owner details — use Wendy’s real info or intentional placeholders styled as copy (not `[INSERT ...]` brackets on live pages)
- Do not delete `00_*` intake folders or `.grok/skills`
- Update `MEMORY.md` after meaningful work

## Commands

```bash
npm install
npm run dev          # local dev
npm run build        # → dist/ (Cloudflare Pages SSR)
npm run lint         # eslint (3 any-type errors + 6 react-refresh warnings remain)
npm run format       # prettier --write .

# Deploy
npm run build
npx wrangler pages deploy dist --project-name=knead-to-know-website-v2
```

Set `VITE_WEB3FORMS_ACCESS_KEY` in Cloudflare Pages build env before production forms go live.

## Live preview

https://knead-to-know-website-v2.pages.dev

## Claude-specific duties

- Deep architecture review before large refactors
- Prioritize **data layer** (`business.ts`, `products.ts`) and **form wiring** before cosmetic redesign
- Consolidate dead code (`k2k-products.ts`, `InquiryForm`, `cake-photos.ts`, orphan routes) — document deletions
- Run `npm run build` before declaring any phase complete
- Produce a short session report: files changed, build result, blockers, next steps