# Grok Build Improvement Plan

## Knead To Know Website V2

This plan is the execution companion to `docs/KNEAD_TO_KNOW_SITE_AUDIT.md`. Read that file first for full reasoning — this file is the action list.

## Mission

Transform the current Knead To Know website from a well-designed but unfinished mockup into a polished, client-ready boutique bakery website that visibly belongs to Wendy Mercado's real business.

## Non-Negotiable Standards

The final site must:

- Feel real — no visible `[INSERT ...]` or bracketed placeholder text anywhere on a live page
- Feel premium — coastal blue/navy/white palette, serif display + clean sans pairing (already in place, preserve it)
- Feel local to Daniel Island — keep and extend existing local copy
- Feel handcrafted — Wendy Mercado must be named, pictured (or intentionally placeholder-styled), and quoted somewhere on the site
- Make customers want to order — every product needs a real price or intentional "ask for pricing" copy
- Use the existing Knead To Know brand identity (do not redesign the visual system — it already works)
- Remove orphaned old-brand assets (`alexandra-*`, `cake-*` files)
- Work beautifully on mobile and on standard laptop/desktop resolutions
- Have clear CTAs (already mostly true — preserve existing CTA patterns)
- Have strong local SEO (add what's missing — schema, real domain)
- Be client-presentable to Wendy without embarrassment

## Priority 1 — Critical Fixes

### 1.1 Replace all placeholder business data

- **File:** `src/lib/business.ts`
- **Current issue:** `owner`, `shortOwner`, `address`, `phone`, `email`, `hours`, `instagramHandle`, `instagramUrl`, `facebookUrl`, `mapsUrl`, `orderingUrl` are all literal `"[INSERT ...]"` strings rendered live on the Footer and Contact page.
- **Required change:** Replace every field with real data once Wendy provides it (see `CLIENT_READY_WEBSITE_REQUIREMENTS.md` for the exact list to request). If a field genuinely has no value yet (e.g., no Facebook page), remove that field's rendering from `Footer.tsx`/`contact.tsx` rather than showing a placeholder.
- **Acceptance criteria:** Zero instances of the string `[INSERT` anywhere in rendered HTML on any page.

### 1.2 Replace all `[INSERT PRICE]` product pricing

- **File:** `src/lib/products.ts` (`price: "[INSERT PRICE]"` on all 16 products)
- **Current issue:** Every product card on Home, Menu, Gallery, and Custom Orders shows the literal string `[INSERT PRICE]`.
- **Required change:** Replace with real prices once provided, OR replace with deliberate copy like `"Ask for pricing"` styled as a small pill/badge (not a bracketed placeholder) until real prices exist.
- **Acceptance criteria:** No product card renders a bracketed placeholder string.

### 1.3 Give the About page a real founder

- **File:** `src/routes/about.tsx`
- **Current issue:** No mention of Wendy Mercado anywhere; the "founder photo" slot (lines 53–60) is a static "K2K / EST. 2026" text block.
- **Required change:** Add Wendy's name and a first-person-adjacent founder story (2–3 paragraphs: why she started baking, why sourdough, her connection to Daniel Island). Replace the placeholder image block with a real photo of Wendy if available, or a clearly-intentional "photo coming soon" treatment matching the pattern already used in `K2KProductCard.tsx`'s `ProductPhotoArea`.
- **Acceptance criteria:** Wendy Mercado's name appears at least once on the About page; the founder image slot is either a real photo or an intentionally-styled placeholder (not a bare text block).

### 1.4 Fix mismatched product photography

- **File:** `src/lib/products.ts`
- **Current issue:** `cheese-jalapeno`, `chocolate-nutella`, and `olive-sourdough` reuse `BAKERY_PHOTOS.plainSourdough`/`.rosemarySourdough` photos that don't match the actual product.
- **Required change:** Either source distinct photos for all 16 products, or remove the `photo` field for unphotographed items so they fall back to the existing "Photo coming soon" state already built into `K2KProductCard.tsx`.
- **Acceptance criteria:** No product card shows a photo of a visually different product than what it's labeled.

### 1.5 Set the real production domain

- **File:** `src/lib/business.ts` line 4 (`SITE_URL`)
- **Current issue:** Canonical URLs, OG tags, and the sitemap all read from the temporary `.pages.dev` preview domain.
- **Required change:** Update `SITE_URL` to the real production domain once purchased/confirmed, before any public launch or search indexing.
- **Acceptance criteria:** `SITE_URL` is not a `.pages.dev`/preview domain at launch.

## Priority 2 — Major Design Improvements

- **Hero:** Keep current layout; once pricing exists, consider adding a "Loaves from $X" trust line under the CTA row.
- **Navigation:** In `src/components/layout/Header.tsx` line 37, change `hidden items-center gap-6 xl:flex` to `hidden items-center gap-6 lg:flex` so the real nav bar shows on standard 1024px+ laptop screens instead of forcing the hamburger menu on non-mobile devices. Adjust the mobile-toggle button's breakpoint (`xl:hidden` → `lg:hidden`) to match.
- **Menu/product presentation:** Replace the bracketed `[ASK FOR AVAILABILITY]` text in `src/routes/menu.tsx` line 113 with non-bracketed copy, e.g. `"Ask us about availability"`.
- **About/story section:** See 1.3 above — this is the single highest-leverage design change on the site.
- **Contact/order section:** Add a "we reply within 1 business day" expectation line to `src/routes/contact.tsx` (already exists on the Custom Orders success screen — make it consistent across both).
- **Footer:** Once real data exists, consider adding a one-line tagline in Wendy's voice next to the existing description paragraph.
- **Typography:** No change needed — Cormorant Garamond/Inter pairing already reads premium.
- **Spacing:** No change needed — current section rhythm and dividers are well executed.
- **Mobile layout:** No structural change needed beyond the nav breakpoint fix above; mobile responsiveness already works well.

## Priority 3 — Conversion Improvements

- **Order CTA:** Already strong and consistent — no structural change needed.
- **Contact flow:** Add the response-time line described above; confirm `mapsUrl`/`instagramUrl` resolve to real destinations once filled in.
- **Inquiry form:** `src/routes/custom-orders.tsx` is already well-built (allergy notes, GF disclaimer, pickup/delivery, contact preference) — no structural change needed. Note the `handleSubmit` currently only sets local state (`// In production: send to API or Web3Forms / email`) — wire this to a real submission endpoint (email service or form backend) before launch so inquiries actually reach Wendy.
- **Customer trust:** Add Wendy's name/story (1.3) and real contact info (1.1) — these are the two highest-leverage trust fixes available.
- **Product desire:** Fix photo mismatches (1.4); consider seeding more Gallery categories with real content so it doesn't read as 5/8 empty.
- **Local positioning:** Already strong throughout — no change needed.
- **Review/testimonial area:** None exists yet — add a placeholder-ready testimonial section structure (see `CLIENT_READY_WEBSITE_REQUIREMENTS.md`) that can be populated once Wendy has her first reviews; don't fabricate fake testimonials.
- **FAQs:** Already thorough and well-written (`src/routes/faq.tsx`) — no structural change needed.

## Priority 4 — SEO Improvements

- **Page titles/meta descriptions:** Already good across all routes checked — no change needed.
- **Local schema:** Add `LocalBusiness`/`Bakery` JSON-LD (address, hours, phone, geo, priceRange) to `src/routes/__root.tsx` or the homepage route's `head()`, once real business data exists (blocked by 1.1).
- **Bakery/Daniel Island keywords:** Already well covered — no change needed.
- **Product keywords:** Consider adding `Product`/`Offer` schema per item once pricing exists, for potential rich-result eligibility.
- **Image alt tags:** Already descriptive on real photos — extend the same quality bar to any newly added photography.
- **Internal linking:** Already strong — no change needed.
- **Sitemap/robots:** Verify `src/routes/sitemap[.]xml.ts` is reachable post-deploy on the real domain, and confirm a `robots.txt` exists and isn't blocking indexing.

## Priority 5 — Polish Pass

- **Microcopy:** Replace remaining bracketed placeholder strings site-wide (search for `[INSERT` and `[ASK FOR` before launch as a final sweep).
- **Hover states:** Already implemented consistently (card lift, button translate) — no change needed.
- **Button consistency:** Already consistent (filled blue pill / outline blue pill) — no change needed.
- **Section spacing:** Already consistent — no change needed.
- **Empty states:** Gallery's "Photo coming soon" placeholder grid is honest but currently covers 5 of 8 categories — either hide unpopulated categories from the category switcher or seed minimal content for each.
- **Footer credibility:** Once real contact info and Instagram exist, confirm all footer links resolve correctly (no dead `#` links).
- **Visual rhythm:** Already strong — no change needed.
- **Mobile details:** Fix the nav breakpoint (2.x above); otherwise mobile is solid.

## Page-by-Page Implementation Checklist

### Homepage

- [ ] Replace product preview cards' "[INSERT PRICE]" once real pricing exists (inherits from `products.ts` fix)
- [ ] Add a real or intentionally-placeholder photo/quote to the "About preview" section instead of the logo-only block
- [ ] Verify hero photo is either real or clearly the best available stock-style placeholder (current `hero-bakery-spread.jpg` is acceptable as a placeholder)
- [ ] No removal needed — page structure and copy are solid

### Menu Page

- [ ] Replace all 16 "[INSERT PRICE]" instances
- [ ] Replace "[ASK FOR AVAILABILITY]" with non-bracketed copy
- [ ] Fix photo-to-product mismatches (cheese-jalapeño, chocolate-nutella, olive-sourdough, etc.)
- [ ] Add real photos where available; fall back to "Photo coming soon" state otherwise (don't show a wrong photo)

### About Page

- [ ] Add Wendy Mercado's name
- [ ] Add a real founder story (2–3 paragraphs, specific not generic)
- [ ] Replace the "K2K / EST. 2026" placeholder image block with a real photo or intentional placeholder treatment
- [ ] Add at least one specific (non-generic) detail to the "Values that guide every bake" section tied to Wendy's actual process

### Contact / Order Page

- [ ] Replace all placeholder `BUSINESS` fields rendered on this page (address, phone, email, Instagram)
- [ ] Add a "we reply within 1 business day" expectation line matching the Custom Orders success screen
- [ ] Wire the Custom Orders form's `handleSubmit` to a real submission endpoint (email/API) instead of local-only state
- [ ] Verify Instagram/maps links resolve to real destinations

## Asset Usage Instructions

- **Use more:** The existing icon set (wheat, bread, cookie, gift box, calendar) is strong and on-brand — keep using it for trust strips and category labels.
- **Use more:** The thin `border-k2k-blue/15` card ring treatment — apply consistently to any new content blocks (testimonials, founder section).
- **Weak/needs replacement:** The 8 existing photo files in `public/assets/knead-to-know/photos/` are being stretched across 16 products with visible mismatches — either expand this set or rely more deliberately on the "Photo coming soon" placeholder state.
- **Remove:** `src/assets/alexandra-*.jpg.asset.json`, `cake-360-*.mp4.asset.json`, and the 14 `cake-*.png.asset.json` files, plus their backing files in `public/lovable-assets/<uuid>/` — confirmed unused by any active route or component.
- **Product cards:** Keep the current grid placement pattern (Home preview, full Menu, Gallery, Custom Orders selector) — it's used consistently and correctly.
- **Logo/brand elements:** Already appears in header, hero, footer, and About preview — do not add more placements; if anything, the About page placement should be replaced by Wendy's photo rather than a fifth logo instance.
- **Avoid making the site look fake:** Do not fabricate fake testimonials, fake review counts, or fake "as seen in" press logos. The existing `PRESS_FEATURE: null` pattern (intentionally empty rather than fake) is the correct approach — extend that discipline to testimonials and any other social proof until it's real.

## Copywriting Rewrite Instructions

- **Hero headline:** Keep "Fresh Bread, Cookies, and Bakes Worth Knowing" — it works and is on-brand. No rewrite needed.
- **Hero subheadline:** Current copy is fine; no rewrite needed.
- **CTA buttons:** Keep existing labels ("View Menu," "Request an Order," "Start a Custom Order") — they're already clear and action-first.
- **Product sections:** Keep existing per-product descriptions — they're a genuine strength (specific, sensory). Only fix the bracketed placeholder fields (price), not the descriptive copy.
- **About section:** Needs net-new copy — see 1.3 checklist above. Direction: first-person-adjacent, specific to Wendy, name Daniel Island specifically rather than "the Lowcountry community" generically every time.
- **Contact/order section:** Add one new line: response-time expectation, matching existing Custom Orders success copy ("Our team will confirm availability... within 1 business day").
- **Footer:** Keep existing description paragraph; once real data exists, no further rewrite required.
- **SEO metadata:** Already strong across all routes — no rewrite needed; only add structured data (JSON-LD), not new meta text.

## Final Acceptance Criteria

The website is finished only when:

- Zero `[INSERT ...]` or `[ASK FOR ...]` bracketed placeholder strings render on any live page
- Wendy Mercado is named and has a real or intentionally-styled photo on the About page
- Every product shows a real price or deliberate "ask for pricing" copy — never a bracketed placeholder
- No product card shows a photo that doesn't match its labeled product
- Desktop navigation displays correctly at standard laptop widths (1024px+), not just 1280px+
- The Custom Orders form actually delivers submissions to Wendy (real backend, not local-only state)
- `SITE_URL` points to the real production domain
- The site is good enough to show Wendy Mercado without caveats
