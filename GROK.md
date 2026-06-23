# GROK.md — Grok Build Instructions

**Project:** Knead To Know Sweet & Sour Website v2  
**Client:** Wendy Mercado, Daniel Island, SC  
**Current phase:** Client-review mockup — **DEPLOYED TO MAIN** (2026-06-23)

---

## Mission Status: COMPLETE (visual + interactive shell)

The site is ready for Wendy to review. Content gaps (email, hours, social, testimonials) are intentional placeholders until she provides real info.

**Live URL:** https://knead-to-know-website-v2.pages.dev  
**Git:** `main` @ `850cdcb`

---

## What Grok Built (Revamp #1–#4)

| Deliverable | Status |
|-------------|--------|
| Full-site UI revamp (all 9 primary routes) | Done |
| Black-bordered boutique design system | Done |
| Homepage 3D product carousel | Done |
| Interactive Menu Builder + Pre-Order Tray | Done |
| SMS prefilled order to Wendy | Done |
| Contact page interactions + blue accents | Done |
| Verified 16-item menu + pricing | Done |
| Web3Forms wiring (contact, custom-orders, catering) | Done (needs env key) |
| Cloudflare Pages deploy | Done |

---

## Read First (every new Grok session)

1. `MEMORY.md` — what was done
2. `docs/FULL_SITE_STATUS_REPORT.md` — page-by-page audit
3. `SOURCE_OF_TRUTH.md` — brand rules
4. `docs/CLIENT_READY_WEBSITE_REQUIREMENTS.md` — Wendy checklist

---

## Non-Negotiables

- **Knead To Know only** — never Spilled Milk on customer surfaces
- **No invented** prices, testimonials, Wendy bio details, email, hours, social
- **Cloudflare Pages** deploy target
- **Do not delete** `00_*` intake folders or `.grok/skills`
- Update `MEMORY.md` after meaningful work

---

## Key Components

| Component | Where used |
|-----------|------------|
| `Product3DCarousel` | Homepage featured products |
| `InteractiveMenuBuilder` | `/menu` |
| `PreOrderTray` | `/menu` (sidebar + mobile) |
| `BrandLogo` | Header, footer, hero |
| `PageHero` | All inner pages |
| `K2KProductCard` | Custom orders, carousel cards |
| `ContactForm` | Contact page |

---

## Data Authority

- `src/lib/business.ts` — phone `tel:8439730309`, sms `sms:8439730309`
- `src/lib/products.ts` — 16 products
- `src/data/menu.ts` — builder schema (derived, no duplicate prices)

---

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npx wrangler pages deploy dist --project-name=knead-to-know-website-v2
```

Set `VITE_WEB3FORMS_ACCESS_KEY` in Cloudflare before production forms.

---

## Parallel Subagent Pattern (used successfully)

1. **Architecture** — data layer, component structure
2. **Animation/UI** — CSS motion, carousel, interactions
3. **Page polish** — per-route accents and ScrollReveal
4. **QA** — build, lint, status report

Invoke `.grok/skills/superpowers` for brainstorming and verification-before-completion.

---

## What's Left (not Grok UI work)

- Wendy provides: email, hours, Instagram, founder photo, testimonials
- Operator sets Web3Forms key in Cloudflare
- Codex: orphan route cleanup, custom domain, typecheck script
- Final launch approval from Skyler + Wendy

---

## Handoff to Claude / Codex

- `CLAUDE.md` + `docs/handoffs/CLAUDE_CODE_HANDOFF.md` for Claude Code
- `CODEX.md` for Codex deployment and refactor
- `docs/FULL_SITE_STATUS_REPORT.md` for complete audit