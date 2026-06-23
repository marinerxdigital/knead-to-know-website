# MEMORY.md — Grok Build Project Memory

Long-term project memory. **Update after every meaningful session.**

---

## Orphan Cleanup + Master Guide (2026-06-23)

- Removed orphan routes: `/flavors`, `/flavors-pricing`, `/featured`, `/inquiry`
- Deleted `InquiryForm.tsx` (unused)
- Added `public/_redirects` — 301 to `/menu` and `/custom-orders`
- Created `docs/WENDY_MOCK_TO_PRODUCTION_MASTER_GUIDE.md` — full mock→production doc for Wendy
- Commit `f4bf5c5` pushed to `main`, Cloudflare deploy success

---

## Revamp #4 + Deploy Session (2026-06-23) — CLIENT REVIEW READY

**Agent:** Grok Build + 4 parallel subagents  
**Branch merged:** `ui-revamp-2026-06-22` → `main`  
**Commit:** `850cdcb`  
**Live:** https://knead-to-know-website-v2.pages.dev  
**Deploy preview:** https://07075fdd.knead-to-know-website-v2.pages.dev

### What was built

#### Revamp #3–#4 (full-site UI)
- Black borders on all containers (`k2k-surface`, `k2k-card`, `k2k-product-card`, buttons)
- Darker bold nav (Menu / About / FAQ / Contact)
- Wordmark: Knead To Know `font-weight 700` black; **Sweet & Sour blue** `#4F7EA8`
- Bolder primary buttons (54px min-height, font-weight 700)
- Blue accent rails + harbor lines site-wide
- ScrollReveal, icon hover, hero stagger, FAQ accordion motion
- Contact page: phone pulse, pin pulse, quick-action chips, accent rails

#### Homepage
- Full-bleed client hero photo
- **Product3DCarousel** — 3D CSS coverflow, 7 featured products, autoplay/swipe/a11y
- Neighbor stories: **black text**, **black icons** (`k2k-icon-black`)
- Hero location text: Daniel Island + service area in black

#### Menu page — Interactive Menu Builder
- `InteractiveMenuBuilder` — category tabs, search, product cards
- `PreOrderTray` — desktop sticky sidebar + mobile bottom drawer
- Quantity controls, product detail dialog
- Estimated total (bread × price, cookies × $5/order, bagels × $3)
- **Text Wendy:** `sms:8439730309?body=...` prefilled order
- **Call Wendy:** `tel:8439730309`
- Data: `src/data/menu.ts` + `src/lib/preorder-tray.ts`
- No checkout, no payment, no fake data

#### New files (key)
| File | Purpose |
|------|---------|
| `src/components/products/Product3DCarousel.tsx` | Homepage 3D carousel |
| `src/components/menu/InteractiveMenuBuilder.tsx` | Menu builder |
| `src/components/menu/PreOrderTray.tsx` | Order tray |
| `src/data/menu.ts` | MenuProduct schema |
| `src/lib/preorder-tray.ts` | Cart + SMS logic |
| `src/components/brand/BrandLogo.tsx` | Responsive logo |
| `src/components/sections/PageHero.tsx` | Inner page heroes |
| `src/components/motion/ScrollReveal.tsx` | Scroll animations |
| `docs/FULL_SITE_STATUS_REPORT.md` | Complete site audit |

### Verified business data (unchanged)
- **Knead To Know Sweet & Sour** — Wendy Mercado
- Phone: `(843) 973-0309` / `tel:8439730309` / `sms:8439730309`
- 16 menu items with verified pricing in `products.ts`
- Pre-orders only · Freshly baked to order

### Build / lint / deploy
- `npm run build` — **PASS**
- `npm run lint` — **0 errors**, 8 warnings (pre-existing shadcn + cake-photos)
- No `typecheck` script
- Pushed to `origin/main`
- Cloudflare Pages deploy — **SUCCESS**

### Still blocked on Wendy
- Email, hours, Instagram/social, founder photo, real testimonials, maps URL
- `VITE_WEB3FORMS_ACCESS_KEY` — operator must set in Cloudflare (forms wired but need key)

### Orphan routes (not in nav — consider removing)
- `/flavors`, `/flavors-pricing`, `/featured`, `/inquiry`

---

## UI Revamp Session (2026-06-22) — Revamp #1–#2

- Warm cream palette, PageHero all pages, product-copy.ts for all 16 items
- eslint.config.js ignores for intake folders
- Plan: `docs/superpowers/specs/2026-06-22-full-site-revamp-plan.md`
- Commits: `48706b8`, `f0c0cbf`, `2b79be6`

---

## Final Data Integration (2026-06-22)

- `business.ts`: full name, phone, null email/hours/social
- `products.ts`: all 16 verified items
- `CLIENT_DELIVERABLES.md` tracking checklist

---

## Visual Upgrade (2026-06-22)

- Homepage 6-section structure, Web3Forms on contact/custom-orders/catering
- Fraunces + wheat accent, SectionDivider motif

---

## Phase 2 — Brand Conversion (2026-06-22)

- Spilled Milk skeleton → Knead To Know rebrand
- Asset packages in `00_*` folders
- Git repo established, Cloudflare Pages target

---

## Phase 1 — Bootstrap (2026-06-22)

- Extracted TanStack Start skeleton to root
- `npm install` + `npm run build` verified
- Created SOURCE_OF_TRUTH.md, GROK.md, CODEX.md, MEMORY.md

---

## Commands

```bash
npm install
npm run dev          # http://localhost:8080
npm run build
npm run lint
npx wrangler pages deploy dist --project-name=knead-to-know-website-v2
```

## Handoff reading order

1. `docs/FULL_SITE_STATUS_REPORT.md` — full audit
2. `docs/handoffs/CLAUDE_CODE_HANDOFF.md` — architecture
3. `SOURCE_OF_TRUTH.md` — brand rules
4. `docs/CLIENT_READY_WEBSITE_REQUIREMENTS.md` — Wendy checklist
5. `CODEX.md` — Codex deployment/memory