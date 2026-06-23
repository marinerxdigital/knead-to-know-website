# CODEX.md — Codex Agent Memory & Instructions

**Project:** Knead To Know Sweet & Sour Website v2  
**Stack:** TanStack Start + React 19 + Tailwind v4 + Nitro (Cloudflare Pages)  
**Status as of 2026-06-23:** Client-review mockup on `main` @ `850cdcb`  
**Live:** https://knead-to-know-website-v2.pages.dev

---

## Your Role

Codex handles: TypeScript hardening, refactor cleanup, deployment prep, orphan route removal, form production wiring, and final launch gate.

**Do not** redesign the UI unless Wendy requests changes. The visual revamp (#1–#4) is complete.

---

## Start Here

1. `docs/FULL_SITE_STATUS_REPORT.md` — every page/feature status
2. `MEMORY.md` — session history
3. `SOURCE_OF_TRUTH.md` — brand non-negotiables
4. `src/lib/business.ts` + `src/lib/products.ts` — data authority

---

## Architecture Map

```
src/
  routes/           # File-based TanStack routes (primary pages)
  components/
    brand/          # BrandLogo
    layout/         # Header, Footer, MobileOrderBar
    sections/       # PageHero, Section, CTASection, SectionDivider
    menu/           # InteractiveMenuBuilder, PreOrderTray, cards
    products/       # Product3DCarousel (homepage only)
    forms/          # ContactForm (Web3Forms)
    motion/         # ScrollReveal
  data/menu.ts      # MenuProduct schema (derived from products.ts)
  lib/
    business.ts     # Wendy, phone, tel, sms, null placeholders
    products.ts     # 16 verified products
    product-copy.ts # Descriptions + ingredients
    preorder-tray.ts # Cart reducer, SMS body builder
  styles.css        # k2k-* design system tokens
```

---

## Key Features (do not break)

### Interactive Menu Builder (`/menu`)
- Category filter + search
- Add to tray with quantity
- Estimated total: bread (unit price), cookies ($5 per 2-cookie order), bagels ($3)
- SMS: `BUSINESS.phoneSms` + `buildSmsHref(lines)` from `preorder-tray.ts`
- Phone: `BUSINESS.phoneTel`
- **No checkout**

### Homepage 3D Carousel
- `Product3DCarousel` uses `HOME_FEATURED_PRODUCTS` (7 items)
- CSS 3D transforms only — no Framer Motion

### Forms (Web3Forms)
- Contact, Custom Orders, Catering
- Pattern: `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`
- **Production blocker:** key not set in Cloudflare env

---

## Type Safety Rules

- Fix 3 `@typescript-eslint/no-explicit-any` in `cake-photos.ts` when touching that file
- `MenuProduct`, `TrayLine`, `Product` types are canonical — extend, don't duplicate
- Guard `null` fields in `business.ts` (email, hours, social) with conditional render

---

## Deployment (Cloudflare Pages)

```bash
npm run build
npx wrangler pages deploy dist --project-name=knead-to-know-website-v2
```

- Preset: `cloudflare-pages` in vite config (Nitro)
- Output: `dist/` with `_worker.js`
- Set `VITE_WEB3FORMS_ACCESS_KEY` in Cloudflare dashboard before launch
- Update `SITE_URL` in `business.ts` when custom domain is live

**Do not** use Vercel static fallback — this is SSR.

---

## PR / Launch Checklist

- [ ] `npm run build` pass
- [ ] `npm run lint` 0 errors
- [ ] No Spilled Milk strings in `src/`
- [ ] Orphan routes removed or redirected
- [ ] Web3Forms key set + test submission
- [ ] Wendy content filled (email, hours, social, photo)
- [ ] Real testimonials replace placeholders
- [ ] Lighthouse pass (optional, use web-perf skill)
- [ ] Custom domain + SITE_URL update

---

## Files Safe to Delete (document first)

- `src/lib/cake-photos.ts` — Spilled Milk legacy
- `src/routes/flavors.tsx`, `flavors-pricing.tsx`, `featured.tsx`, `inquiry.tsx` — orphans
- `src/components/forms/InquiryForm.tsx` — if unused
- Duplicate `k2k-products.ts` if still present

**Never delete:** `00_*` folders, `.grok/skills`, brand asset packages

---

## Testing Commands

```bash
npm run build
npm run lint
npm run dev   # preview at localhost:8080
```

No `typecheck` script — add `"typecheck": "tsc --noEmit"` if desired.

---

## Codex-Specific Next Tasks (priority order)

1. Set Web3Forms env + verify form delivery
2. Remove orphan routes + dead imports
3. Fill Wendy nulls when client provides data
4. Add `typecheck` script + fix any TS issues
5. Custom domain deployment
6. Consolidate `cake-photos.ts` removal

---

## Session Log Reference

See `MEMORY.md` § Revamp #4 for full file list and commit `850cdcb`.