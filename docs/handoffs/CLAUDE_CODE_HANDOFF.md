# Claude Code Handoff — Knead To Know Website v2

**Date:** June 22, 2026  
**From:** Grok Build (Skyler B. Brown)  
**To:** Claude Code  
**Client:** Wendy Mercado — Knead To Know (boutique home bakery, Daniel Island, SC, Est. 2026)  
**Live preview:** https://knead-to-know-website-v2.pages.dev  
**Repo:** https://github.com/marinerxdigital/knead-to-know-website.git (branch `main`)

---

## 0. Executive summary

This project is a **high-quality visual mockup with solid information architecture** — not a production business website yet.

| Dimension | Score (approx.) | Notes |
|-----------|---------------|-------|
| Design / IA | 7/10 | Coastal boutique direction is on-brand; homepage is template-heavy |
| Content / trust | 2/10 | All contact fields and prices are `[INSERT ...]` literals on live pages |
| Conversion | 3/10 | Contact form works; Custom Orders + Catering are **fake submits** |
| SEO | 4/10 | Good per-page meta; broken robots.txt, incomplete sitemap, no JSON-LD, wrong OG image |
| Technical | 7/10 | Build passes; lint clean except 3 `any` types + 6 warnings |

**Your job:** Pour Wendy’s real business into an already-built shell. **Start with data and forms, not a redesign.**

---

## 1. What this project is

### Business

- **Knead To Know** — small-batch **home bakery** on Daniel Island, South Carolina
- Owner: **Wendy Mercado** (name not yet in codebase — must be added)
- Products: 16 signature sourdough items (7 breads, 5 cookies, 4 bagels) + inquiry-driven pastries, boxes, catering, custom orders
- **Not** a wedding cake boutique — the Spilled Milk export was **code skeleton only**

### What Grok completed

1. Full K2K rebrand across all customer-facing pages (Home, About, Menu, Custom Orders, Catering, Gallery, FAQ, Contact, Header, Footer)
2. Replaced bulky PNG product-card **containers** with CSS boutique cards (`K2KProductCard`)
3. Generated **8 realistic home-bakery JPG photos** and wired them into menu/hero/gallery
4. Fixed `PRESS_FEATURE = null` SSR crash (unsafe `.publication` access)
5. Switched deployment from Vercel to **Cloudflare Pages** (`nitro.preset: "cloudflare-pages"`)
6. Ran `npm run format` — resolved **5,857 Prettier CRLF lint errors**; added `.editorconfig` for LF
7. Deployed to https://knead-to-know-website-v2.pages.dev

### Recent commits (newest first)

```
e782049 feat: add realistic home bakery product photos to menu and hero
b3f40d2 ui: replace PNG product card containers with premium CSS boutique cards
7325f56 deploy: Cloudflare Pages SSR preset, wrangler config, K2K canonical URL
75f17b7 fix: complete K2K homepage sections, nav, gallery, contact, custom orders
9276b38 feat: complete Knead To Know brand conversion
```

---

## 2. Tech stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR) `@tanstack/react-start` ^1.167 |
| Router | TanStack Router (file-based) `src/routes/` |
| UI | React 19 |
| Build | Vite 7 + Nitro 3 beta |
| Styling | Tailwind CSS v4 — tokens in `src/styles.css` (no `tailwind.config`) |
| Components | shadcn/ui + Radix (~45 primitives; most unused on routes) |
| Forms | react-hook-form + Zod; Web3Forms for Contact only |
| Deploy | **Cloudflare Pages** — `dist/` + `_worker.js` SSR |
| Fonts | Cormorant Garamond (display), Inter (body) — Google Fonts in `__root.tsx` |

### Commands

```bash
npm install
npm run dev
npm run build
npm run lint       # 9 issues remain (see §12)
npm run format

# Deploy
npm run build
npx wrangler pages deploy dist --project-name=knead-to-know-website-v2
```

### Environment variables

| Variable | Purpose |
|----------|---------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Contact form (and should be used for Custom Orders + Catering). **Set in Cloudflare Pages build env.** Hardcoded fallback exists in source — remove for production. |

---

## 3. Deployment

### Current (authoritative)

- **`vite.config.ts`:** `nitro.preset: "cloudflare-pages"`
- **`wrangler.toml`:** `pages_build_output_dir = "dist"`, project `knead-to-know-website-v2`
- **`SITE_URL`:** `https://knead-to-know-website-v2.pages.dev` in `src/lib/business.ts`

### Legacy (do not use unless explicitly switching)

- `vercel.json` still exists — expects `.vercel/output` and Vercel preset
- `CLOUDFLARE_DEPLOYMENT_NOTES.md` is **outdated** (still says Spilled Milk)
- Previous Vercel URL: `https://knead-to-know-website.vercel.app`

### Custom domain (Phase 3)

1. Add domain in Cloudflare Pages → Custom domains
2. Update `SITE_URL` in `business.ts`
3. Update `public/robots.txt` sitemap URL
4. Set `VITE_WEB3FORMS_ACCESS_KEY` in Cloudflare env
5. Verify forms, OG preview, sitemap

---

## 4. Route map

### Primary (in Header nav)

| Route | File | Status |
|-------|------|--------|
| `/` | `index.tsx` | Mockup — 11 sections, product previews, hero photo |
| `/about` | `about.tsx` | No Wendy identity; logo placeholder instead of photo |
| `/menu` | `menu.tsx` | 16 products; no prices; 9/16 wrong/reused photos |
| `/custom-orders` | `custom-orders.tsx` | **Form does not submit** — mock success only |
| `/catering` | `catering.tsx` | **Form does not submit** — mock success only |
| `/gallery` | `gallery.tsx` | 3/8 categories populated; 5 show empty placeholders |
| `/faq` | `faq.tsx` | Good — confirm lead times with Wendy |
| `/contact` | `contact.tsx` | Web3Forms works; all BUSINESS fields are placeholders |
| `/privacy` | `privacy.tsx` | OK; mentions Formspree but app uses Web3Forms |

### Legacy / orphan (not in nav)

| Route | File | Action |
|-------|------|--------|
| `/inquiry` | `inquiry.tsx` | Redirects → `/custom-orders` — remove from sitemap |
| `/flavors` | `flavors.tsx` | Soft “menu moved” page — consider hard redirect to `/menu` |
| `/flavors-pricing` | `flavors-pricing.tsx` | Redirects → `/flavors` |
| `/featured` | `featured.tsx` | “Coming soon” stub — hide or finish |
| `/sitemap.xml` | `sitemap[.]xml.ts` | Incomplete route list |

---

## 5. Data layer (start here)

### `src/lib/business.ts` — **single source of truth for contact**

All fields are `[INSERT ...]` placeholders rendered live in Footer and Contact:

```ts
owner: "[INSERT OWNER NAME]"      // → Wendy Mercado
phone: "[INSERT PHONE]"
email: "[INSERT EMAIL]"
address: "[INSERT ADDRESS]"
hours: "[INSERT HOURS]"
instagramHandle / instagramUrl
facebookUrl, mapsUrl, orderingUrl
SITE_URL → production domain when ready
```

### `src/lib/products.ts` — **16-product catalog (used by all routes)**

- Every product: `price: "[INSERT PRICE]"`
- `photo` — 8 JPG paths; several products share wrong photos
- `cardAsset` — paths to 16 branded `KTK_Product_Card_*.png` files — **defined but NOT rendered** (`K2KProductCard` only uses `photo`)

### Dead / duplicate modules (consolidate or delete)

| File | Issue |
|------|-------|
| `src/lib/k2k-products.ts` | Duplicate catalog with hardcoded `$12` prices — **zero imports** |
| `src/lib/cake-photos.ts` | Legacy; 2 `any` types; zero imports |
| `src/lib/squarespace.ts` | Payment links hidden; zero imports |
| `src/lib/site-data.ts` | Mostly unused; `ORDER_TYPES` missing (breaks dead `InquiryForm`) |
| `src/components/forms/InquiryForm.tsx` | Complete Web3Forms form — **never mounted**; TS error |

---

## 6. Critical problems (P0)

### 6.1 Placeholder content visible on live site

Grep `src/` for `[INSERT` and `[ASK FOR` — **zero should render** before Wendy sees the site.

| Location | Placeholder |
|----------|-------------|
| `business.ts` | All contact/social fields |
| `products.ts` ×16 | `[INSERT PRICE]` |
| `menu.tsx` ×5 | `[ASK FOR AVAILABILITY]` |
| `ContactForm.tsx` | `placeholder="[INSERT PHONE]"` |
| `custom-orders.tsx` | `[PRICE TBD]` in budget field |

**Fix:** Replace with Wendy’s real data OR styled copy like “Contact us for pricing” / “Ask about availability” — never raw brackets.

### 6.2 Forms that don’t work

| Form | Status |
|------|--------|
| Contact (`ContactForm.tsx`) | ✅ Posts to Web3Forms |
| Custom Orders (`custom-orders.tsx`) | ❌ `setSubmitted(true)` only — no API call |
| Catering (`catering.tsx`) | ❌ Same mock pattern |
| InquiryForm | Dead code — could be reused for Custom Orders |

```ts
// custom-orders.tsx — current (broken)
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true); // no data sent
};
```

**Fix:** Wire Custom Orders + Catering to Web3Forms (mirror `ContactForm.tsx`). Include selected products in payload.

### 6.3 SEO / legacy Spilled Milk artifacts

| Issue | File | Current |
|-------|------|---------|
| Wrong sitemap URL | `public/robots.txt` | `spilled-milk-cake-builder.lovable.app` |
| Wrong OG image | `__root.tsx` + `og-image.jpg.asset.json` | `/lovable-assets/.../og-image.jpg` (old cake boutique) |
| Preview canonicals | `business.ts` SITE_URL | `.pages.dev` preview domain |
| Incomplete sitemap | `sitemap[.]xml.ts` | Missing `/menu`, `/custom-orders`, `/catering`, `/faq` |
| No JSON-LD | anywhere | Need `Bakery` / `LocalBusiness` schema |

### 6.4 Product photo mismatches

8 AI placeholder photos mapped to 16 products. Examples:
- `cheese-jalapeno`, `chocolate-nutella` → plain sourdough photo
- `olive-sourdough` → rosemary photo
- `poppy-bagel` → everything bagel photo

**Fix:** Use `photo: ""` to trigger “Photo coming soon” in `K2KProductCard` until Wendy provides real photos. **Never show the wrong bake.**

### 6.5 Deployment config conflict

- `vite.config.ts` → Cloudflare Pages ✅
- `vercel.json` → still present (legacy)
- `DEPLOYMENT.md` / docs may reference Vercel preset

**Pick one target.** User explicitly chose Cloudflare Pages.

---

## 7. Design system (locked — do not redesign)

### Colors (`src/styles.css`)

| Token | Hex | Use |
|-------|-----|-----|
| `k2k-blue` | `#4F7EA8` | Primary CTA, accents |
| `k2k-harbor` | `#7FA7C7` | Secondary |
| `k2k-navy` | `#1F3447` | Dark text, hovers |
| `ink` | `#111111` | Body text |
| Background | `#FFFFFF` | Page |
| Muted sections | `#F8FAFC` | Alternating bands |

### Typography

- Display: Cormorant Garamond (`font-display`)
- Body: Inter
- Eyebrow pattern: `text-xs uppercase tracking-[0.22em] text-k2k-blue`

### Brand components

- `.k2k-button` / `.k2k-button-primary` / `.k2k-button-outline`
- `.k2k-product-card` — CSS boutique product cards
- `K2KProductCard.tsx` — primary product UI

### Prohibitions

- No cartoon bakery, cupcake graphics, loud gradients, heavy textures
- No fake testimonials, press, or review counts
- No Spilled Milk colors, copy, or cake-boutique positioning
- No random stock images — Wendy’s photos or honest placeholders only

### Legacy token debt

Pages still mix `forest` / `k2k-blue` (same color, two names from skeleton). `cream`/`blush` section tokens render as white. **Migrate to `k2k-*` naming** during polish pass.

### Three competing button patterns

1. `.k2k-button-*` (brand) — used sparingly
2. Inline `rounded-full bg-k2k-blue` — most pages
3. shadcn `Button` — barely used

**Revamp:** Unify into one `K2KButton` component with `focus-visible` rings.

---

## 8. UI/UX audit — what to revamp

### What’s working

- Coastal blue/white direction matches brand guidelines
- `K2KProductCard` is a solid CSS-native foundation
- Section rhythm (`py-20`, `max-w-7xl`) is premium-capable
- ContactForm pattern is production-ready
- FAQ accordion, mobile touch targets generally ≥44px

### Anti-patterns / “AI slop” to fix

1. **Homepage = entire sitemap** — 11 sections each previewing a nav destination. Cut to 5–6: Hero, Featured Products, How to Order, About teaser, FAQ, CTA.
2. **Duplicate product grids** — same products shown in menu preview AND gallery preview on homepage.
3. **Decorative PNG cards** instead of real photography in content sections.
4. **Visible `[INSERT ...]` strings** — screams unfinished.
5. **Gallery dead-ends** — 5/8 category tabs show only “Photo coming soon”.
6. **Nav breakpoint too high** — full nav only at `xl` (1280px); laptops get hamburger. Lower to `lg` (1024px).
7. **No focus-visible styles** on route-level links/buttons — WCAG gap.
8. **Custom orders nested scroll** on mobile (`max-h-[620px] overflow-auto`) — confusing UX.

### UI/UX revamp priorities

#### P0 — Trust + conversion
1. Fill `business.ts` + `products.ts` with real data or intentional copy
2. Fix photo mapping — no wrong-product images
3. Unify buttons + add global `focus-visible` rings
4. Wire Custom Orders + Catering forms

#### P1 — Structure + polish
5. Shorten homepage (remove duplicate previews)
6. Lower Header nav breakpoint to `lg`
7. Gallery: hide empty categories until photos exist
8. Wire existing `Lightbox.tsx` to gallery product photos
9. Custom orders: single-column mobile flow; migrate form to shadcn like ContactForm

#### P2 — Brand distinction
10. Add testimonials section (asset exists: `Knead_To_Know_Testimonial_Card.png`) — **only with real reviews**
11. Replace PNG promo banner with responsive HTML announcement bar
12. Register `--font-display` / `--font-sans` in `@theme inline`
13. Fix bagel category icon (currently uses bread icon)
14. Mobile menu → Radix Sheet with focus trap + animation

#### P3 — Enhancement
15. Skip-to-content link
16. Active nav indicator beyond color
17. Prune unused shadcn components (bundle size)
18. Optional warm cream accent sections (`#FFFDF8`) for boutique warmth
19. Image skeleton/blur-up loading for product photos

### Motion gaps

Existing: product card hover lift, image scale, reduced-motion respected.  
Missing: gallery lightbox, mobile menu animation, form loading spinners, selection feedback on custom-orders cards, `aria-live` for “N items selected”.

---

## 9. Assets

### Deployed (`public/assets/knead-to-know/`)

| Folder | Contents | Used? |
|--------|----------|-------|
| `logo/` | Circular primary logo | ✅ Header, Footer, Hero |
| `photos/` | 8 AI placeholder JPGs | ✅ Hero + product cards |
| `product-cards/` | 16 `KTK_Product_Card_*.png` | ❌ Data only, not rendered |
| `icons/` | 10 brand icons | ✅ Trust strip, offerings |
| `banners/` | Promo strip PNG | ✅ Home + Menu |
| `badges/` | Divider + label tag | ✅ Menu section headers |
| `cards/` | Container, feature, testimonial | ⚠️ Partially decorative |
| `buttons/` | PNG button refs | ❌ CSS buttons used instead |

### Brand source packages (untracked in git)

- `00_BRAND_ASSETS/Knead_To_Know_Website_Design_Asset_Package/` — brand guidelines, asset maps
- `00_BRAND_ASSETS/Knead_To_Know_Product_Cards_Package/` — product card manifest
- `00_BRAND_ASSETS/Knead_To_Know_Website_Asset_System/` — UI tokens CSS

### Orphan skeleton assets (delete in Phase 4)

- `public/lovable-assets/` — 26 Spilled Milk files (cakes, Alexandra photos, old OG)
- `src/assets/*.asset.json` — pointer files to lovable-assets
- `src/components/media/CakeImage.tsx`, `Lightbox.tsx` (Lightbox is useful — wire it first)

---

## 10. Content needed from Wendy

Use `docs/CLIENT_READY_WEBSITE_REQUIREMENTS.md` as intake form.

### Critical (blocks client review)

- Owner name: Wendy Mercado
- Email, phone, address, hours
- Instagram handle + URL
- Pricing for 16 products (or approve “Ask for pricing” styling)
- Founder story (2–3 paragraphs in her voice)
- Founder photo

### High (before public launch)

- Menu confirmation (16 items accurate?)
- Lead times, pickup/delivery policy, allergy disclaimer
- Facebook URL or remove link
- Google Maps link
- Production domain name
- Web3Forms account / delivery email preference

### Medium (post-launch)

- Real product photos (16 items)
- Gallery content for pastries, seasonal, boxes, catering
- Real testimonials (do not fabricate)
- Squarespace payment link if desired (`squarespace.ts`)

---

## 11. Phased rollout plan

### Phase 1 — Client-safe preview (1–2 days after Wendy intake)

- [ ] Fill `business.ts`
- [ ] Replace prices or style “Ask for pricing”
- [ ] Add Wendy to `about.tsx`
- [ ] Fix photo mismatches
- [ ] Replace `[ASK FOR AVAILABILITY]` copy
- [ ] Lower nav breakpoint `xl` → `lg`
- [ ] Fix `robots.txt` sitemap URL
- [ ] Zero `[INSERT` visible on live site

### Phase 2 — Working conversion (3–5 days)

- [ ] Wire Custom Orders + Catering to Web3Forms
- [ ] Set `VITE_WEB3FORMS_ACCESS_KEY` in Cloudflare
- [ ] Remove hardcoded Web3Forms key from source
- [ ] Test all 3 form paths end-to-end
- [ ] Trim gallery to populated categories only

### Phase 3 — Production launch (1 week)

- [ ] Custom domain on Cloudflare Pages
- [ ] Update `SITE_URL` + `robots.txt`
- [ ] Add Bakery JSON-LD to `__root.tsx`
- [ ] Complete sitemap
- [ ] Replace OG image with K2K hero photo
- [ ] Google Search Console sitemap submit
- [ ] Full QA with Skyler + Wendy

### Phase 4 — Growth & polish (ongoing)

- [ ] Full product photography
- [ ] Expand gallery categories
- [ ] Testimonials with real reviews
- [ ] Google Business Profile
- [ ] Analytics (Plausible/GA4)
- [ ] Delete `lovable-assets/`, dead modules, consolidate `k2k-products.ts`
- [ ] Product schema once prices final
- [ ] UI/UX revamp items from §8

---

## 12. Lint status (post auto-fix)

**Grok ran `npm run format`** — resolved 5,857 Prettier CRLF errors. Added `.editorconfig` (`end_of_line = lf`).

**Remaining (9 issues in 8 files):**

| Rule | Count | Files |
|------|-------|-------|
| `@typescript-eslint/no-explicit-any` | 3 | `cake-photos.ts` (×2), `custom-orders.tsx` (×1) |
| `react-refresh/only-export-components` | 6 | shadcn ui files (warnings, non-blocking) |

**No `typecheck` script** in `package.json` — run `npx tsc --noEmit` manually.  
`InquiryForm.tsx` has TS error (`ORDER_TYPES` missing) if ever mounted.

---

## 13. Files to touch first

### Highest leverage

| File | Why |
|------|-----|
| `src/lib/business.ts` | Contact truth layer |
| `src/lib/products.ts` | Prices + photos |
| `src/routes/about.tsx` | Wendy identity |
| `src/routes/custom-orders.tsx` | Form submission |
| `src/routes/catering.tsx` | Form submission |
| `src/components/forms/ContactForm.tsx` | Web3Forms key cleanup |
| `src/routes/contact.tsx` | Trust copy |
| `src/components/layout/Header.tsx` | Nav breakpoint |
| `src/routes/menu.tsx` | Availability copy |
| `src/routes/gallery.tsx` | Category visibility |
| `src/routes/sitemap[.]xml.ts` | Complete routes |
| `public/robots.txt` | Fix sitemap URL |
| `src/routes/__root.tsx` | JSON-LD + OG image |
| `src/routes/index.tsx` | Homepage deduplication |

### Touch second

`K2KProductCard.tsx`, `styles.css`, `Footer.tsx`, `faq.tsx`, `CTASection.tsx`

### Avoid unless required

| Path | Why |
|------|-----|
| `00_*` intake folders | Preserved archives |
| `.grok/skills/` | Agent tooling |
| `src/components/ui/*.tsx` (shadcn) | High blast radius |
| `src/routeTree.gen.ts` | Auto-generated |
| `Knead_To_Know_Final_Master_Grok_Build_Prompt.md` | Historical reference only |

---

## 14. QA checklist before Wendy handoff

### Content & brand
- [ ] Grep: zero `[INSERT` / `[ASK FOR` in rendered output
- [ ] “Wendy Mercado” on About
- [ ] No Spilled Milk / Alexandra / cake-boutique language user-facing
- [ ] Logo correct everywhere

### Contact & forms
- [ ] Footer shows real phone, email, address, hours, Instagram
- [ ] Contact + Custom Orders + Catering submissions reach Wendy’s inbox
- [ ] Honeypot on all forms
- [ ] Error states show real fallback email

### Visual / UX
- [ ] No wrong-product photos
- [ ] Desktop nav at 1024px
- [ ] Mobile nav works
- [ ] `npm run build` exits 0

### SEO
- [ ] `SITE_URL` = production domain
- [ ] `robots.txt` correct
- [ ] Sitemap includes menu, custom-orders, catering, faq
- [ ] OG image is K2K (not lovable-assets)
- [ ] JSON-LD validates in Google Rich Results Test

---

## 15. Non-negotiable brand rules

1. **Knead To Know only** — zero Spilled Milk on customer-facing surfaces
2. Spilled Milk = structural skeleton; never visible branding
3. **Cloudflare Pages** deployment (not Vercel unless Skyler explicitly switches)
4. **No invented pricing** — real prices or approved “ask for pricing” copy
5. **No fake testimonials, press, or reviews**
6. **No bracket placeholders** visible on live pages
7. Coastal blue/white/navy palette locked — see `BRAND_GUIDELINES.md`
8. Product descriptions in `products.ts` are approved quality — preserve tone
9. Do not delete `00_*` folders or `.grok/skills`
10. Update `MEMORY.md` after each work session

---

## 16. Reference documents

| File | Purpose |
|------|---------|
| `SOURCE_OF_TRUTH.md` | Highest authority |
| `MEMORY.md` | Session history |
| `CLAUDE.md` | Claude entry point |
| `docs/CLIENT_READY_WEBSITE_REQUIREMENTS.md` | Wendy intake |
| `docs/KNEAD_TO_KNOW_SITE_AUDIT.md` | Prior audit |
| `Knead_To_Know_Final_Master_Grok_Build_Prompt.md` | Original build spec |
| `00_BRAND_ASSETS/.../BRAND_GUIDELINES.md` | Visual brand |
| `00_BRAND_ASSETS/.../DEVELOPER_HANDOFF_NOTES.md` | Asset usage |
| `07_QA/BRAND_REMOVAL_AUDIT.md` | Spilled Milk removal log |
| `DEPLOYMENT.md` | Deploy notes (may be Vercel-stale) |
| `CLOUDFLARE_DEPLOYMENT_NOTES.md` | Stale — needs rewrite |

---

## 17. Bottom line

The fastest path to a site Wendy can be proud of:

1. `business.ts` → real contact info  
2. `products.ts` → real prices + honest photos  
3. `about.tsx` → Wendy Mercado’s story  
4. Wire Custom Orders + Catering forms  
5. Fix `robots.txt` + sitemap + `SITE_URL` + OG image  
6. UI polish (homepage length, nav breakpoint, focus states, gallery)  
7. Custom domain on Cloudflare Pages  

**The mockup becomes production when a real person is behind the pixels and inquiries reach her inbox.**

---

*End of handoff. Questions → check `MEMORY.md` or ask Skyler for Wendy’s intake answers.*