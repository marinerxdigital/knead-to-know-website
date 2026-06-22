# Knead To Know Website V2 Audit

Audited: live site at `https://knead-to-know-website-v2.pages.dev/` and local source at `C:\Users\Skyler B. Brown\Desktop\Knead To Know Website v2`.
Build: `npm run build` — passes clean. `npm run lint` — passes clean. No TypeScript/build errors found.

## Executive Summary

**No, this is not client-ready.** Visually, the design system is genuinely good — clean coastal-blue-on-white layout, consistent rounded cards, a real component library, a sensible page structure (Home, Menu, About, Custom Orders, Catering, Gallery, FAQ, Contact). The bones of a premium boutique bakery site are here.

But the site as it stands today reads as **an unfinished construction site, not a business**. The single biggest problem: **there is no business behind this website yet.** Every piece of information a real customer needs to trust and order from a bakery — owner name, address, phone, email, hours, Instagram, pricing — is a literal `[INSERT ...]` placeholder string, and it renders that way on the live site right now. A visitor today sees "[INSERT EMAIL]," "[INSERT PHONE]," "[INSERT ADDRESS]" in the footer and contact page, and "[INSERT PRICE]" on all 16 products. Wendy Mercado does not exist anywhere in the copy — no name, no bio, no photo, no voice. The About page describes "a small-batch bakery" in the abstract with a logo placeholder instead of a founder.

This makes the site feel like a system Grok generated for a hypothetical bakery, not Wendy's bakery. It does not make someone want to order — it makes someone wonder if the business is real or if they stumbled onto a sandbox build.

- Does this look client-ready? **No.**
- Does it feel like a real bakery website? **Not yet — it feels like a high-quality template waiting for a business to be poured into it.**
- Does it feel premium? **The visual design, yes. The content, no — placeholder text undercuts premium instantly.**
- Does it make someone want to order? **No — there's no price, no way to actually reach the bakery, and no human behind it.**
- Biggest problem: **Missing real business identity** — no owner name/story, no real contact info, no real pricing, no real photography. This is a content/data problem, not a code or design problem, and it is fixable fast once Wendy provides the missing inputs (see `CLIENT_READY_WEBSITE_REQUIREMENTS.md`).

## Overall Scorecard

| Category            | Score / 10 | Notes                                                                                                                                                                                           |
| ------------------- | ---------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| First Impression    |          6 | Clean hero, real headline, but logo-only branding with no human face reads generic                                                                                                              |
| Brand Consistency   |          7 | Coastal blue/navy palette and serif display font applied consistently across every page                                                                                                         |
| Visual Design       |          7 | Genuinely well-built component system (cards, dividers, sections); let down by placeholder text breaking the polish                                                                             |
| Layout Quality      |          7 | Page rhythm (alternating white/beige sections, dividers) is well thought out                                                                                                                    |
| Typography          |          7 | Cormorant Garamond display + Inter sans is a good premium pairing; well applied                                                                                                                 |
| Color System        |          7 | Coastal blue (#4f7ea8) / navy (#1f3447) / white is clean and on-brief, if a little corporate-cool rather than warm                                                                              |
| Imagery / Assets    |          4 | Only 8 photo files exist and are reused across 16 different products (e.g., Cheese & Jalapeño bread shows the Plain Sourdough photo) — products are visually mislabeled                         |
| Copywriting         |          5 | Headlines and section copy are well-written; undermined by visible `[INSERT ...]` and `[ASK FOR AVAILABILITY]` strings throughout                                                               |
| Conversion Flow     |          4 | CTAs are clear and well-placed, but every product shows "[INSERT PRICE]" and the contact page has no real way to reach the business                                                             |
| Mobile Experience   |          6 | Responsive and functional, but desktop nav only appears at `xl` (1280px+) — most laptops see a hamburger menu, which feels unfinished on "desktop"                                              |
| Local SEO           |          5 | Good keyword targeting in titles/meta ("Daniel Island bakery"), but canonical URLs and OG tags point at the temporary `.pages.dev` preview domain, and there's no LocalBusiness structured data |
| Trust / Credibility |          2 | No owner name anywhere on the site, no real address, no real phone, no real reviews/testimonials, no real photos of actual bakes                                                                |
| Performance         |          7 | Clean Vite/TanStack Start build, lazy-loaded product images, no obvious bloat                                                                                                                   |
| Accessibility       |          6 | Decorative icons correctly use `aria-hidden`, alt text is present on product photos; but icon-only trust strip relies on small uppercase text and color-only active nav state                   |
| Client Readiness    |          2 | Cannot be shown to Wendy as "done" — it would visibly embarrass the business the moment she scrolled past the hero                                                                              |

## Highest Priority Problems

### 1. Every piece of real business information is a placeholder string, rendered live

- **Why it hurts the business:** A bakery website whose entire purpose is to generate orders cannot show "[INSERT EMAIL]" and "[INSERT PHONE]" where the contact info should be. No customer will trust or order from a business that looks like it forgot to finish setting up its own website.
- **Where it appears:** `src/lib/business.ts` (the single source of truth — `owner`, `shortOwner`, `address`, `phone`, `email`, `hours`, `instagramHandle`, `instagramUrl`, `facebookUrl`, `mapsUrl`, `orderingUrl` are ALL literal `"[INSERT ...]"` strings), which feeds `Footer.tsx`, `contact.tsx`, and any other component that reads `BUSINESS`.
- **How to fix it:** Get Wendy's real address (or "pickup by appointment, Daniel Island" if no public storefront), phone, email, hours, and Instagram handle, and replace every field in `BUSINESS`. This is a 10-minute fix once the data exists — the architecture is already correct (single source of truth).
- **Priority: Critical**

### 2. No pricing anywhere — every one of 16 products shows "[INSERT PRICE]"

- **Why it hurts the business:** Pricing is one of the top reasons people abandon a bakery site without ordering. Seeing a literal bracketed placeholder instead of a price reads as broken, not "boutique."
- **Where it appears:** `src/lib/products.ts`, rendered directly in `K2KProductCard.tsx` (`<p>{product.price}</p>`) on the Home, Menu, Gallery, and Custom Orders pages.
- **How to fix it:** Get real prices (or price ranges, e.g. "$8–$12") from Wendy for all 16 items, or temporarily replace the placeholder with "Ask for pricing" copy that reads intentionally rather than like an unfilled field.
- **Priority: Critical**

### 3. Wendy Mercado does not exist anywhere on the website

- **Why it hurts the business:** Boutique/home-bakery trust is built on the person behind the product. "A small-batch bakery on Daniel Island" with a logo-only About page and no founder name, photo, or story is indistinguishable from a faceless dropshipping site.
- **Where it appears:** `src/routes/about.tsx` — the About page hero image area is literally a text block reading "K2K / EST. 2026 • DANIEL ISLAND" inside a placeholder box, with zero personal narrative.
- **How to fix it:** Add Wendy's name, a short founder story (why she started baking, what makes her sourdough different, her connection to Daniel Island), and a real photo of her if she has one. See `about` checklist in the improvement plan.
- **Priority: Critical**

### 4. Product photography is reused across mismatched products

- **Why it hurts the business:** Showing the Plain Sourdough photo on the Cheese & Jalapeño, Chocolate Chip Nutella, and Olive Sourdough product cards (and the Rosemary photo standing in for three other breads) actively misleads customers about what they're ordering, and reads as low-effort once a customer notices the repetition.
- **Where it appears:** `src/lib/products.ts` lines 68–106 — `cheese-jalapeno`, `chocolate-nutella`, and `olive-sourdough` all reuse `BAKERY_PHOTOS.plainSourdough` or `.rosemarySourdough` instead of distinct photography. Only 8 photo files exist total (`public/assets/knead-to-know/photos/`) for 16 products.
- **How to fix it:** Either commission/shoot real photos of all 16 items, or switch unphotographed products to the existing "Photo coming soon" placeholder state already built into `K2KProductCard.tsx` (`ProductPhotoArea` already supports this gracefully) rather than showing a wrong photo.
- **Priority: High**

### 5. Gallery page is 5/8 categories of pure placeholder grids

- **Why it hurts the business:** A gallery's entire job is to build appetite and prove the bakery is real. Right now, clicking Pastries, Seasonal Bakes, Bakery Boxes, Catering/Events, or Custom Orders shows six identical grey circles labeled "Photo coming soon" — which is honest but makes over half the gallery feel empty.
- **Where it appears:** `src/routes/gallery.tsx` `getItemsForCategory()` only returns real data for Breads/Cookies/Bagels; everything else falls through to the placeholder grid.
- **How to fix it:** Either hide categories with no content yet (so the gallery feels curated, not empty) or seed each category with at least 2–3 real or stock-appropriate images before launch.
- **Priority: High**

### 6. Desktop navigation disappears between ~1024px and 1280px

- **Why it hurts the business:** A meaningful share of "desktop" visitors (1366×768 and 1280×800 are among the most common laptop resolutions) will see a hamburger icon instead of a real nav bar, which looks broken on a non-mobile device.
- **Where it appears:** `src/components/layout/Header.tsx` line 37 — `<nav className="hidden items-center gap-6 xl:flex">` only shows at `xl` (1280px+); the mobile hamburger button is shown below that.
- **How to fix it:** Drop the breakpoint to `lg` (1024px) so the full nav appears on standard laptop screens, and only collapse to the hamburger on tablet/phone widths.
- **Priority: Medium**

### 7. Canonical URLs and OG tags point at the temporary `.pages.dev` preview domain

- **Why it hurts the business:** If this site is indexed by Google or shared on social media before the real domain is live, all SEO equity and social previews attach to a throwaway preview URL instead of the bakery's real domain — and migrating later costs ranking.
- **Where it appears:** `src/lib/business.ts` line 4 — `SITE_URL` (with its own `// TODO (launch)` comment acknowledging this), consumed by every route's canonical link and `og:url` tag, plus `src/routes/sitemap[.]xml.ts`.
- **How to fix it:** Purchase/confirm the production domain (e.g. `kneadtoknowbakery.com`) and update `SITE_URL` before any public launch or indexing.
- **Priority: Medium (Critical once the domain is live and indexing begins)**

### 8. No structured data / LocalBusiness schema

- **Why it hurts the business:** Google's local pack and rich results for bakeries rely heavily on `LocalBusiness`/`Bakery` schema (hours, address, geo, price range). Without it, Knead To Know is competing for "Daniel Island bakery" searches with worse SERP real estate than competitors who have schema.
- **Where it appears:** No JSON-LD found anywhere in `src/routes/__root.tsx` or any route's `head()`.
- **How to fix it:** Add `Bakery`/`LocalBusiness` JSON-LD once real address/hours/phone exist (this is blocked by Critical Problem #1).
- **Priority: Medium**

### 9. Root project directory is cluttered with legacy/scratch material

- **Why it hurts the business:** Not visible to customers, but it makes the codebase hard for any future developer (or Grok) to navigate confidently. Numbered folders `00_BRAND_ASSETS` through `08_DELIVERABLES`, `00_SOURCE_PACKAGES`, `00_TEMP_EXTRACT`, plus loose root files (`CODEX.md`, `ERRORS.md`, `FIXED_ERRORS.md`, `GROK.md`, `SOURCE_OF_TRUTH.md`, `Knead_To_Know_Final_Master_Grok_Build_Prompt.md`) and a `terminals/` folder sit at the repo root alongside the actual app.
- **Where it appears:** Project root, untracked in git per `git status`.
- **How to fix it:** Move anything genuinely needed for reference into a single `docs/` or `_archive/` folder; delete the rest. Not urgent, but should happen before handing the repo to another developer.
- **Priority: Low**

### 10. Dead "Alexandra"/cake assets from the old brand still sit in the repo (not user-facing)

- **Why it hurts the business:** Not visible on the live site — `src/lib/cake-photos.ts` was already correctly rewritten to use only K2K assets, and nothing imports the old files. But `src/assets/alexandra-*.jpg.asset.json`, `cake-360-*`, and `cake-*.png.asset.json` (16 files) plus their backing files in `public/lovable-assets/<uuid>/` are orphaned remnants of the prior brand/owner (likely the old "Spilled Milk" persona, "Alexandra"). They're dead weight, not a live bug.
- **Where it appears:** `src/assets/*.asset.json` (16 files referencing "alexandra" and "cake-" prefixed assets), `public/lovable-assets/` (27 UUID-named folders).
- **How to fix it:** Delete the unused `.asset.json` files and their corresponding `public/lovable-assets/` folders once confirmed unreferenced (confirmed via grep — zero imports found in `src/`).
- **Priority: Low**

## Page-by-Page Audit

### Homepage

#### Current Problems

- No real price, owner, or contact info anywhere on the page (inherited from global placeholders).
- Hero image is a single stock-style "spread" photo, not Wendy's actual product or kitchen.
- "About preview" section shows a logo + "Est. 2026" text block instead of any human element.

#### What This Page Should Do

Convert a cold visitor into either a Menu browser or a Custom Order inquiry within 5 seconds, while establishing this is a real, local, trustworthy bakery.

#### Recommended Improvements

- Replace the "About preview" placeholder block with a real (or at minimum staged) photo of Wendy or her workspace, plus one sentence in her voice.
- Add a short trust line under the hero CTA row, e.g. "Orders confirmed by Wendy within 1 business day" — humanizes the brand immediately.
- Once pricing exists, consider showing starting prices ("Loaves from $9") directly on the homepage product cards to pre-qualify interest.

#### Client Readiness Rating: 6/10

### Menu / Product Page

#### Current Problems

- All 16 product cards show "[INSERT PRICE]" instead of a price.
- 9 of 16 products show a photo that does not match the actual product (photo reuse across breads).
- The "Broader bakery menu" section (Pastries, Bakery Boxes, Custom) is plain bullet lists with "[ASK FOR AVAILABILITY]" — reads as an unfinished menu rather than intentional "ask about these."

#### What This Page Should Do

Function as the actual ordering reference customers screenshot or come back to — build appetite, communicate price expectations, and funnel into Custom Orders.

#### Recommended Improvements

- Get real prices before anything else — this page cannot do its job without them.
- Replace "[ASK FOR AVAILABILITY]" with intentional copy like "Ask us about current availability" (same meaning, doesn't look like a broken template tag).
- Fix photo-to-product mismatches; use the existing "Photo coming soon" placeholder state instead of a wrong photo for unphotographed items.

#### Client Readiness Rating: 4/10

### About Page

#### Current Problems

- Zero mention of Wendy Mercado by name anywhere in the codebase.
- "Founder photo" slot is a static "K2K / EST. 2026" text block — there is no image, real or placeholder-with-intent.
- The page describes "Knead To Know" in the third person as an abstract entity the entire time; never switches to first-person founder voice.

#### What This Page Should Do

Make a visitor believe a real, local, skilled person is making this food in Daniel Island — this is the single highest-leverage trust page on the site for a home bakery.

#### Recommended Improvements

- Add Wendy's name and a 2–3 paragraph founder story: how she started, why sourdough, what Daniel Island/Lowcountry means to the brand.
- Replace the logo placeholder block with a real photo of Wendy baking, or at minimum a styled "photo coming soon" treatment consistent with the rest of the site (the pattern already exists in `K2KProductCard`).
- Add a short pull-quote in her voice near the top, e.g. "I started Knead To Know because..." — directly addresses "does Wendy feel real."

#### Client Readiness Rating: 3/10

### Contact / Order Flow

#### Current Problems

- Every contact method on the page is a placeholder string rendered live: address, phone, email, Instagram handle and URL.
- No stated response-time expectation visible on the Contact page itself (it exists on the Custom Orders confirmation screen — "within 1 business day" — but not here).

#### What This Page Should Do

Be the lowest-friction path for a ready-to-order or curious customer to reach Wendy directly, with zero ambiguity about how and when they'll hear back.

#### Recommended Improvements

- Fill in `BUSINESS` with real data (blocks this entire page from being usable).
- Add the same "we reply within 1 business day" expectation-setting line that already exists on the Custom Orders success screen.
- Consider a simple map embed or "pickup by appointment" note if there's no public storefront, so customers aren't left guessing what "address" means for a home bakery.

#### Client Readiness Rating: 2/10

## Homepage Audit

- **Hero section:** Logo + eyebrow ("Daniel Island, South Carolina") + large serif headline + photo — well-composed, premium proportions.
- **Headline:** "Fresh Bread, Cookies, and Bakes Worth Knowing" — solid, on-brand pun on the business name, reads naturally rather than gimmicky.
- **Subheadline:** Clear list of product categories; functional but generic — doesn't yet differentiate from any other small bakery.
- **CTA:** "View Menu" (primary, filled) + "Request an Order" (secondary, outline) — correct hierarchy, both above the fold.
- **Logo placement:** Logo appears in hero, header, footer, and About preview — consistent, possibly slightly overused (4 placements with no other branded imagery).
- **Product presentation:** Featured offerings use icon + title + text cards (no photos) — clean, but six near-identical card layouts in a row gets repetitive without photographic variety.
- **Local Daniel Island positioning:** Strong — mentioned in eyebrow, trust strip, FAQ, About preview, and footer.
- **Trust signals:** The "trust strip" (location, small-batch, artisan, pre-orders) is icon-based but currently the only trust content on the page — no testimonials, no owner presence, no "as seen in" (correctly nulled out rather than left fake).
- **Visual credibility:** Undermined further down the page by "[INSERT PRICE]" appearing in the Menu Preview product cards.
- **Scroll flow:** 11 sections is a lot for a single homepage — flow is logical (offerings → menu → boxes → custom → catering → gallery → about → FAQ → CTA) but borders on showing every page's content rather than teasing it.

## Menu / Product Page Audit

- **Product card quality:** Component itself (`K2KProductCard.tsx`) is well-built — clean typography, category label, pre-order badge, hover lift. The container is premium; the data inside it is not ready.
- **Product descriptions:** Genuinely good — specific, sensory ("Tart cranberries and toasted walnuts for a perfect balance of sweet and nutty"), no generic filler.
- **Pricing clarity:** Worst score on the site — literally zero priced items.
- **Category organization:** Clear three-part split (Bread/Cookies/Bagels) backed by real product data, plus a secondary "broader menu" section for unbuilt categories — reasonable structure once filled in.
- **Ordering CTA:** "Start Your Pre-Order" at the bottom is clear and singular — good.
- **Seasonal/small-batch messaging:** Present and consistent ("small-batch," "naturally leavened," "fresh daily") throughout.
- **Realness/appetite appeal:** Held back hard by repeated/mismatched photography described above.

## About Page Audit

- **Does Wendy feel real?** No — she is not named or pictured anywhere.
- **Does the story feel believable?** The generic "we bake in small batches with care" copy is fine as filler but isn't yet a _story_ — no specific origin, no specific Daniel Island connection beyond the address.
- **Local Daniel Island connection:** Present in text ("Lowcountry community," "Daniel Island roots") but generic — could be true of any bakery in any coastal town with word substitution.
- **Founder photo:** None — text-only placeholder block.
- **Tone:** Warm and competent prose, but impersonal — reads like brand copy, not a founder's voice.
- **Trust-building content:** "Values that guide every bake" section (6 cards) is a nice structural idea but currently generic enough to belong to any artisan bakery — would benefit from at least one being specific to Wendy's actual process or philosophy.

## Contact / Order Flow Audit

- **Is it obvious how to order?** Yes structurally — Contact page clearly routes bigger orders to Custom Orders and events to Catering. Good information architecture.
- **Clear inquiry flow?** Yes — Custom Orders form is thorough (product multi-select, date, quantity, allergies, pickup/delivery, contact preference) and gives a clear confirmation screen with a same-day-ish response expectation.
- **Is the form too generic?** No — it's actually one of the strongest pieces of UX on the site; it's specific to a bakery's real ordering needs (allergy notes, GF disclaimer, pickup vs. delivery).
- **Enough customer-facing detail?** No — missing real hours, address, and response-time expectation on the Contact page itself.
- **Mobile contact friction:** Low — tap-to-call/email/Instagram links all present once real data exists.
- **Response expectations:** Stated only on the Custom Orders success screen, not on Contact — should be consistent across both.

## Navigation Audit

- **Menu labels:** Clear, conventional, no jargon (Home, About, Menu, Custom Orders, Catering, Gallery, FAQ, Contact).
- **Header layout:** Logo + wordmark left, nav center-right, primary CTA + mobile toggle right — standard, correct pattern.
- **CTA placement:** "Request an Order" persistent in header — good, consistent conversion anchor.
- **Mobile nav:** Functional slide-down panel with all items plus repeated CTA — works correctly.
- **Footer nav:** Duplicates main nav under "Explore" — fine, expected pattern.
- **Can users find what they need quickly?** Yes, once the `xl`-only desktop nav breakpoint bug (Problem #6) is fixed; today, a meaningful slice of "desktop" laptop users get the mobile hamburger experience on a non-mobile device.

## Visual Design Audit

- **Typography:** Cormorant Garamond (serif display) + Inter (sans body) is a strong, premium, legible pairing — correctly implemented via CSS variables (`--font-display`, `--font-sans`).
- **Spacing:** Generous, consistent section padding (`py-16`/`pt-24` patterns); good vertical rhythm.
- **Layout rhythm:** Alternating white/`#f8fafc` ("beige," actually a very light blue-grey) backgrounds with `SectionDivider` components between sections — thoughtful, premium pattern.
- **Color palette:** k2k-blue (#4f7ea8) / k2k-navy (#1f3447) / white — clean and coastal, though cooler and more corporate than "warm Lowcountry bakery." Could use one warm accent (wheat gold, terracotta) to avoid feeling like a fintech site.
- **Borders:** Thin `border-k2k-blue/15` rings used consistently on cards — matches the "thin decorative borders" brand direction well.
- **Decorative elements:** Icon set (wheat, bread, cookie, gift box) is used well in trust strip and category labels; banner/badge image assets add some boutique texture.
- **Visual hierarchy:** Strong — headline > eyebrow > body > CTA ordering is consistent across every page.
- **Button styles:** Two consistent patterns (filled blue pill, outline blue pill) used predictably for primary/secondary actions.
- **Asset quality:** The icon and card PNG assets are clean and on-brand; the photographic assets are the weak link (see Problems #4–5).
- **Premium or cheap?** The _system_ feels premium; the _content_ (placeholders, repeated photos) currently undercuts it. Fix the content and this scores much higher.

## Copywriting Audit

- **Headline quality:** Strong across the site — specific, on-brand, no generic "Welcome to our bakery!" filler.
- **Product copy:** Genuinely well-written, sensory, specific per item — a real strength.
- **Local positioning:** Consistent and natural ("Daniel Island," "Lowcountry," "Charleston area") without being repetitive to the point of keyword-stuffing.
- **CTAs:** Clear, action-first, varied appropriately by context ("View Menu," "Request an Order," "Start a Custom Order," "Explore Catering").
- **Empty/generic phrases:** "[ASK FOR AVAILABILITY]" and "[INSERT PRICE]" are the literal opposite of empty/generic — they're visible placeholder tags, which is worse than generic copy because it signals "unfinished" rather than just "bland."
- **Overused AI language:** Minimal — copy avoids "elevate," "journey," "curated experience" style filler almost entirely. This is a genuine strength of the current writing.
- **Missing customer-facing info:** Real prices, real hours, real owner name/story, real lead times beyond "confirmed on inquiry."

## SEO Audit

- **Page titles:** Good, keyword-rich, unique per page ("Menu | Knead To Know | Daniel Island Bakery Breads, Cookies & Bagels").
- **Meta descriptions:** Present and reasonably specific on every route checked.
- **Local SEO:** Keyword coverage for "Daniel Island bakery" is solid in titles/descriptions; missing the structured-data layer that actually wins local pack placement.
- **Daniel Island/bakery keywords:** Present consistently across Home, Menu, About, Contact, FAQ.
- **Structured data:** None found (`LocalBusiness`/`Bakery`/`Product` JSON-LD absent).
- **Image alt text:** Present and descriptive on hero and product images; some decorative icons correctly marked `aria-hidden` instead of given alt text — good practice.
- **Internal linking:** Strong — every page cross-links to Menu/Custom Orders/Catering appropriately.
- **Sitemap/robots:** `src/routes/sitemap[.]xml.ts` exists — good; verify it's reachable post-deploy and that a `robots.txt` exists and isn't blocking indexing prematurely (worth a build-time check before launch).
- **Would Google understand the business?** Mostly yes from title/meta text alone, but the missing `SITE_URL` (still `.pages.dev`) and missing schema mean Google has less to work with than competitors with full local business markup.

## Accessibility Audit

- **Contrast:** k2k-blue (#4f7ea8) on white passes for large text but is borderline for small text (10–11px uppercase labels used throughout for category tags) — worth a contrast-checker pass on the smallest text sizes.
- **Keyboard navigation:** Standard semantic `<button>`/`<a>` elements used throughout; mobile menu toggle has correct `aria-expanded`/`aria-label`.
- **Button labels:** Descriptive, not "click here" style — good.
- **Semantic headings:** `as="h1"` correctly used once per page via `SectionHeading`; heading hierarchy appears consistent.
- **Alt text:** Present on meaningful images; decorative images correctly use empty `alt=""` + `aria-hidden`.
- **Form labels:** Custom Orders and Contact forms use real `<label>` elements tied to inputs — good baseline accessibility.
- **Touch target sizes:** Buttons consistently use `h-11`/`h-12` (44–48px) — meets minimum touch target guidance.

## Mobile Audit

- **Header:** Hamburger menu functions correctly; logo scales down appropriately.
- **Hero:** Stacks cleanly to single column; logo, headline, CTAs all readable without horizontal scroll.
- **Product cards:** Grid drops to 2-up/1-up appropriately at smaller breakpoints.
- **Forms:** Custom Orders form's two-column grids correctly collapse to one column on mobile (`sm:grid-cols-2`).
- **Spacing:** Section padding scales down sensibly (`pt-16` mobile vs `sm:pt-24` desktop).
- **Typography scale:** Headline sizes step down appropriately (`text-5xl` → `sm:text-6xl` → `lg:text-7xl`).
- **CTA visibility:** Sticky header keeps "Request an Order" accessible while scrolling on mobile too, once it's shown there (currently mobile-only nav bar omits it from the always-visible row — it's inside the hamburger panel).
- **Scroll experience:** Long homepage (11 sections) is a heavier scroll on mobile than desktop relatively speaking — worth monitoring engagement/drop-off once real analytics exist.

## Performance Audit

- **Image sizes:** Product/icon PNGs are reasonably sized; hero/product photos are lazy-loaded (`loading="lazy"`) on `K2KProductCard` — good practice already in place.
- **Unused assets:** ~16 orphaned "Alexandra"/cake `.asset.json` references and their backing files in `public/lovable-assets/` are dead weight (not affecting runtime, but bloating the repo/deploy artifact unnecessarily).
- **Unused code:** None obvious in the actively-routed pages; the legacy `cake-photos.ts` module has already been correctly rewritten to avoid old-brand data.
- **Bundle concerns:** Build output is reasonably distributed across per-route chunks (TanStack Start route-based code splitting is working as intended) — largest single chunk is `react-dom` at ~500KB, which is expected and not a Knead To Know-specific issue.
- **Font loading:** Cormorant Garamond + Inter — confirm these are loaded via `font-display: swap` or self-hosted/preloaded rather than a blocking Google Fonts request, to protect Largest Contentful Paint.
- **Core Web Vitals risk:** Low overall; the largest risk is the hero image's load priority on first paint — confirm it isn't competing with web font loading for LCP.

## Spilled Milk / Template Remnant Audit

- **Spilled Milk content:** None found anywhere in active `src/routes`, `src/components`, or `src/lib` files — a targeted search for "spilled," "ice cream," and "milk" found zero brand remnants (the one "milk" hit is "Chocolate Chip Cookies + Milk" in a flavor-pairing list, which is correct K2K copy, not a remnant).
- **Old brand content:** Confirmed clean in all user-facing code. `src/lib/business.ts` even contains an explicit comment confirming `PRESS_FEATURE` was intentionally nulled out during the brand conversion to prevent unsafe access to old data.
- **Orphaned old-brand assets (not user-facing):** `src/assets/alexandra-*.jpg.asset.json`, `cake-360-*.mp4.asset.json`, and 14 `cake-*.png.asset.json` files, plus their backing files under `public/lovable-assets/<uuid>/`, are leftovers from a previous brand/owner ("Alexandra") and are not imported or referenced by any active route or component (verified via search). Dead weight, zero live-site impact.
- **Placeholder sections:** Multiple — see Problems #1–5 above ([INSERT ...] strings, "Photo coming soon" placeholders, "[ASK FOR AVAILABILITY]").
- **Generic demo content:** None found beyond the placeholders already cataloged — the actual written copy is K2K-specific throughout, which is a genuine strength to build on.
- **Unused old assets:** See orphaned assets above; safe to delete once confirmed (already confirmed via grep in this audit).

## Final Verdict

**Is this client-ready right now? No.** The visual system and information architecture are good enough to show as a "this is the direction" preview, but not as a finished deliverable — the moment Wendy scrolls past the hero she will see "[INSERT PRICE]," "[INSERT EMAIL]," and a description of herself with no name attached.

**What would embarrass the client?** Showing her a site that doesn't know her own contact information or name. A bakery client reviewing her own "About" page and finding no mention of herself, and a product menu with no prices, will read this as incomplete work — regardless of how good the underlying design is.

**What needs to change before showing Wendy?** At minimum: real `BUSINESS` contact data, real or intentionally-placeholder pricing copy (not literal `[INSERT PRICE]`), and _something_ personal on the About page with her name attached. These three changes alone would move Client Readiness from a 2 to roughly a 6–7 with zero new design work.

**Top 10 fixes that would create the biggest improvement (ranked):**

1. Fill in `src/lib/business.ts` with Wendy's real contact info (address/phone/email/hours/Instagram).
2. Get real pricing (or intentional "ask for pricing" copy) for all 16 products — eliminate every visible `[INSERT PRICE]`.
3. Add Wendy's name, photo, and a real founder story to the About page.
4. Fix mismatched product photography (don't show Plain Sourdough's photo on Cheese & Jalapeño bread).
5. Replace `[ASK FOR AVAILABILITY]` with intentional, non-bracketed copy.
6. Fix the desktop nav breakpoint (`xl:flex` → `lg:flex`) so standard laptops see the real nav bar.
7. Reduce the Gallery's placeholder-to-real-content ratio (currently 5 of 8 categories are pure placeholder grids).
8. Replace `SITE_URL` with the real production domain before any public launch/indexing.
9. Add `LocalBusiness`/`Bakery` JSON-LD structured data (once #1 is done).
10. Clean up orphaned old-brand assets (`alexandra-*`, `cake-*`) and the cluttered root-level scratch folders for repo hygiene.
