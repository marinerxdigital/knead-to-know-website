# ChatGPT / DALL·E — Complete Asset Generation Master Guide

**Brand:** Knead To Know Sweet & Sour  
**Owner:** Wendy Mercado · Daniel Island, SC  
**Prepared for:** Skyler B. Brown + Grok Build / superagent web team  
**Date:** June 23, 2026  
**Live site:** https://knead-to-know-website-v2.pages.dev

---

## How to Use This Document

1. Read **Section 0** (brainstorm summary) to decide what to generate first.
2. Copy the **GLOBAL PREFIX** into every ChatGPT image prompt.
3. Copy a full **START PROMPT … END PROMPT** block into ChatGPT.
4. Save outputs to `public/assets/knead-to-know/` using the naming convention in Section 12.
5. Tell the web team which files landed — we wire them into `products.ts`, `__root.tsx`, components.

**Companion file (logo only):** `docs/CHATGPT_LOGO_PROMPT.md` (also included below as Prompt #1).

---

## Section 0 — Superagent Brainstorm Summary

Four parallel agents evaluated every asset type the site could use. Below is the consensus: **why**, **pros**, **cons**, **priority**, and **code vs image**.

### Priority Tiers

| Tier | Meaning | Generate when |
|------|---------|---------------|
| **Must** | Blocks polish, trust, or shareability | Before Wendy review or launch |
| **Should** | Strong uplift; site works without it | After Must tier |
| **Nice** | Seasonal / future channel | After client approves core brand |

### Master Priority List (Top 15)

| # | Asset | Priority | Best tool |
|---|-------|----------|-----------|
| 1 | Primary circular logo | **Must** | DALL·E → trace SVG |
| 2 | Favicon + Apple touch icon | **Must** | DALL·E icon source → ICO tooling |
| 3 | Open Graph card 1200×630 | **Must** | DALL·E background + Figma/code text |
| 4 | Missing product photos (breads) | **Must** | DALL·E interim → Wendy real photos |
| 5 | Pre-order only badge/seal | **Must** | DALL·E shape → Figma text overlay |
| 6 | Thank-you pickup card insert | **Must** | DALL·E border → print template |
| 7 | Empty menu tray illustration | **Should** | DALL·E spot illustration |
| 8 | Daniel Island stylized map | **Should** | DALL·E → verify geography |
| 9 | Logo on navy / reversed | **Should** | DALL·E comp → SVG |
| 10 | Monochrome stamp watermark | **Should** | DALL·E → SVG trace |
| 11 | Menu announcement graphic frame | **Should** | DALL·E frame → real menu text in Figma |
| 12 | Google Business Profile cover | **Should** | Real hero photo composite preferred |
| 13 | 404 spot illustration | **Nice** | DALL·E |
| 14 | Instagram post/story templates | **Nice** | DALL·E backgrounds → Canva |
| 15 | Coastal tileable texture | **Nice** | CSS first; DALL·E only if needed |

### What NOT to Generate (Hard Rules)

| Never generate | Why |
|----------------|-----|
| Wendy's face / AI founder portrait | No consent; trust risk |
| Fake customer testimonials or review cards | No verified quotes in data layer |
| Fake press logos or "As seen in" bars | `PRESS_FEATURE` is null |
| Invented Instagram handles | `instagramHandle` is null until Wendy provides |
| Invented email, hours, street address | All null in `business.ts` |
| AI logo with baked-in text as final file | Typography errors; use existing PNG + trace |
| Menu prices or item names inside images | Source of truth is `src/lib/products.ts` |
| Checkout / "Add to cart" UI | Site uses SMS pre-order tray only |
| Spilled Milk / cake-boutique luxury vibes | K2K brand only |
| PNG buttons, cards, form fields | Site uses CSS `k2k-surface` / `k2k-button` |

### Code vs Image — Team Decision Matrix

| Keep in **CODE** (CSS/SVG/React) | Generate as **IMAGE** |
|----------------------------------|------------------------|
| Buttons, cards, borders, forms | Product photos (interim gaps) |
| Harbor wave SVGs, wheat scoring marks | Spot illustrations (empty states, 404) |
| Section dividers (`SectionDivider.tsx`) | OG/social composite backgrounds |
| Wordmark in header/footer (Fraunces CSS) | Favicon / app icon simplified mark |
| Lucide utility icons (search, phone) | Stylized Daniel Island map base |
| Radial coastal washes | Print collateral borders (cards, stickers) |
| Black-bordered `k2k-*` design system | Founder **hands-only** lifestyle (not face) |

### Recommended Hybrid Workflow

```
DALL·E  →  background / illustration / icon shape (no text)
Figma   →  overlay real logo PNG + Fraunces type + verified phone
Web team →  optimize WebP, wire paths, update og:image meta
Wendy    →  approve or replace AI food photos with real bakes
```

---

## GLOBAL PREFIX (prepend to every prompt)

Copy this block at the top of every ChatGPT image request:

```
GLOBAL BRAND CONTEXT — Knead To Know Sweet & Sour
Boutique home bakery, Daniel Island South Carolina, Lowcountry coastal.
Pre-orders only, freshly baked to order, warm neighborly editorial aesthetic.
Strict palette only: white #FFFFFF, cream #F8F4ED, Harbor Deep blue #3B6E91,
harbor blue #6A9EC0, ink black #111111, navy #1F3447, wheat accent #C2A878 (small details only).
Typography feel: Fraunces-like elegant serif + clean sans body (if text area left blank for overlay).
Thin black borders, generous whitespace, bright and clean — NOT rustic farm, NOT cartoon bakery,
NOT pink/teal/neon, NOT 3D glossy, NOT cupcake mascots, NOT generic stock photo clutter.
No Spilled Milk branding. No invented business names. No fake reviews.
```

---

# PROMPT CATALOG

---

## 1. Primary Circular Logo

| | |
|---|---|
| **Why** | Header, footer, hero, packaging, social — central brand mark |
| **Pros** | Fast exploration of seal/monogram/loaf directions; mood boards for Wendy |
| **Cons** | Text in logo often misspelled; must trace to SVG/PNG; don't ship raw DALL·E as final |
| **Priority** | **Must** |
| **Output** | 1024×1024 PNG → trace → `public/assets/knead-to-know/logo/` |
| **Web team** | Replace `Knead_To_Know_Primary_Circular_Logo.png`; update `BrandLogo.tsx` |

### START PROMPT

Design a premium circular bakery logo for a real home bakery brand:

Brand name: Knead To Know Sweet & Sour  
Owner: Wendy Mercado  
Location: Daniel Island, South Carolina (Lowcountry coastal)  
Positioning: Boutique home bakery — sourdough breads, cookies, bagels, pastries. Pre-orders only.

LOGO FORMAT:
- Primary mark: circular badge / seal (legible at 48px favicon up to 500px hero)
- Must read on white AND cream #F8F4ED backgrounds
- Flat vector-style appearance, crisp edges, no muddy gradients
- Optional wordmark below circle: "Knead To Know" (bold black) + "Sweet & Sour" (Harbor Deep #3B6E91)

Pick ONE direction and execute fully:
A) Wheat + harbor wave in circular seal  
B) Elegant "K" monogram + small wheat accent  
C) Minimal sourdough loaf silhouette + thin circular border

Colors: #3B6E91, #6A9EC0, #C2A878 accents only, #111111 border/text, #1F3447 depth  
NO cartoon, NO 3D gloss, NO cupcakes with faces.

Deliver in response: full-color on white, on cream, monochrome black, favicon-simplified icon.  
Image: 1024×1024, centered, generous padding, professional brand mockup.

### END PROMPT

---

## 2. Favicon & Simplified App Icon

| | |
|---|---|
| **Why** | Browser tabs, bookmarks, iOS home screen — brand recall on repeat orders |
| **Pros** | Quick ultra-simple mark exploration (wheat, K, loaf icon) |
| **Cons** | Detail dies below 32px; needs ICO/PNG export pipeline; no text |
| **Priority** | **Must** |
| **Output** | 512×512 source → `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` (180×180 opaque) |
| **Web team** | `__root.tsx` already links these paths in `/public/` |

### START PROMPT

[GLOBAL PREFIX]

Ultra-minimal bakery icon for 16px favicon and mobile app icon.
Single focal symbol only: wheat stalk OR letter K OR small round loaf silhouette.
Maximum 2 colors: Harbor Deep #3B6E91 and ink #111111 on white background.
Thick strokes, high contrast, flat vector style, no text, no tagline, no thin harbor lines.
Centered in square 1024×1024 with generous padding.
Also describe how this simplifies from the full circular logo.

### END PROMPT

---

## 3. Open Graph Social Share Card

| | |
|---|---|
| **Why** | iMessage/Facebook/LinkedIn link previews; current hero is wrong 1200×1500 aspect |
| **Pros** | Controlled first impression; coastal editorial bakery spread |
| **Cons** | Text in image garbles — composite logo/type in Figma or code; cache aggressively |
| **Priority** | **Must** |
| **Output** | 1200×630 JPG ≤250KB → `public/assets/knead-to-know/social/og-image.jpg` |
| **Web team** | Update `__root.tsx` og:image width/height to 1200/630 |

### START PROMPT

[GLOBAL PREFIX]

Open Graph social share card BACKGROUND ONLY (no text, no logo — team adds in Figma).

Dimensions: 1200×630 pixels landscape.
Layout: left 60% — soft-focus artisan bakery still life: sourdough loaves, cookies on linen, warm window light.
Right 40% — clean cream #F8F4ED panel with subtle wheat line accent at top edge, empty for text overlay.
Thin ink #111111 border around entire card optional.
Coastal Daniel Island morning light, premium boutique — not commercial storefront.
No words, no logos, no phone numbers, no watermarks.

### END PROMPT

**Post-production (Figma, not DALL·E):** Add circular logo, "Knead To Know Sweet & Sour", "Daniel Island · Pre-orders only", (843) 973-0309.

---

## 4. Logo on Navy / Reversed

| | |
|---|---|
| **Why** | Footer dark bands, navy heroes, email headers, social on dark templates |
| **Pros** | Tests cream-on-navy vs full-color seal contrast |
| **Cons** | Auto CSS invert destroys brand; needs dedicated file |
| **Priority** | **Should** |
| **Output** | SVG + PNG 1024×1024 transparent → `logo-on-navy.svg` |
| **Web team** | Optional `BrandLogo variant="on-dark"` |

### START PROMPT

[GLOBAL PREFIX]

Circular bakery logo mark optimized for dark navy #1F3447 background.
Cream #F8F4ED and harbor blue #6A9EC0 linework; wheat #C2A878 small accent.
Border ring in cream not black. No black fill that vanishes on navy.
Flat vector seal style matching Knead To Know boutique coastal brand.
Transparent PNG composition shown on navy #1F3447 swatch for preview.
1024×1024, no wordmark text (icon only).

### END PROMPT

---

## 5. Monochrome Stamp / Watermark

| | |
|---|---|
| **Why** | Gallery watermarks, printable inserts, single-ink labels |
| **Pros** | Vintage seal aesthetic fits farmers-market positioning |
| **Cons** | Micro text hallucinates; needs SVG trace; avoid grunge |
| **Priority** | **Should** |
| **Output** | SVG → `stamp-monochrome-black.svg`, `stamp-monochrome-cream.svg` |

### START PROMPT

[GLOBAL PREFIX]

Circular bakery certification stamp, single color ink black #111111 only.
Wheat wreath ring, empty center circle for optional text overlay later.
Clean line-art, NOT distressed grunge, NOT wax drip 3D.
Vintage editorial seal feel, Daniel Island boutique bakery.
Transparent background, 1024×1024, no letters, no numbers, no bakery name inside image.

### END PROMPT

---

## 6. Wordmark-Only Lockup (Reference / Print)

| | |
|---|---|
| **Why** | Email signatures, PDF menus, print labels where web fonts unavailable |
| **Pros** | Visualizes Fraunces + tracked "SWEET & SOUR" for client approval |
| **Cons** | DALL·E typography unreliable — production should be Figma/Fraunces export |
| **Priority** | **Should** for off-site; **Nice** for web (CSS wordmark already works) |
| **Output** | Mood comp only OR designer SVG 800×160 |

### START PROMPT

[GLOBAL PREFIX]

Typographic logo lockup MOOD BOARD (expect post-production correction in Figma).
Horizontal layout: "Knead To Know" in bold elegant serif black #111111.
Below or beside: "SWEET & SOUR" in Harbor Deep #3B6E91, wide letter-spacing, smaller caps.
Generous whitespace, cream #F8F4ED background, boutique editorial bakery.
No circular icon, no cartoon, no script handwriting font.
1200×400 aspect, flat design presentation mockup.

### END PROMPT

**Note:** Web header/footer already use CSS `.k2k-wordmark-title` / `.k2k-wordmark-tagline`. Do not replace unless Wendy demands pixel parity with print.

---

## 7. Pre-Order Only Badge (Seal)

| | |
|---|---|
| **Why** | Matches `orderingModel: "Pre-orders only"` site-wide; packaging, IG, GBP |
| **Pros** | Round seal shape aligns with logo system |
| **Cons** | Text must be added in Figma — DALL·E misspells "Pre-order" |
| **Priority** | **Must** |
| **Output** | 800×800 PNG transparent → overlay text in Figma |

### START PROMPT

[GLOBAL PREFIX]

Circular bakery seal badge graphic, empty center for text overlay.
Harbor Deep #3B6E91 outer ring, white interior, thin wheat wreath motif #C2A878.
Premium boutique stamp style, flat clean vector appearance.
Transparent background, 800×800 pixels.
NO text, NO letters, NO words inside the image.

### END PROMPT

**Figma overlay text:** "Pre-order only" + subline "Freshly baked to order"

---

## 8. Empty Pre-Order Tray Illustration

| | |
|---|---|
| **Why** | `/menu` tray empty state — high-traffic UX moment |
| **Pros** | On-brand vs generic shopping cart icon |
| **Cons** | Must stay small in sidebar ~280px |
| **Priority** | **Should** |
| **Output** | 400×300 PNG/WebP → `illustrations/empty-tray.webp` |
| **Web team** | `PreOrderTray.tsx` empty state |

### START PROMPT

[GLOBAL PREFIX]

Elegant line-art illustration: empty wooden serving tray beside a single unscored sourdough loaf silhouette.
Coastal blue #3B6E91 lines, wheat accent #C2A878, transparent background.
Boutique bakery, calm inviting, minimal detail.
No text, no faces, no logos.
Aspect 4:3, 800×600 pixels.

### END PROMPT

---

## 9. Menu Search — No Results Illustration

| | |
|---|---|
| **Why** | `InteractiveMenuBuilder` empty search — currently text-only |
| **Pros** | Pairs with empty tray illustration style |
| **Cons** | Low frequency edge case |
| **Priority** | **Should** |
| **Output** | 400×300 → `illustrations/empty-search.webp` |

### START PROMPT

[GLOBAL PREFIX]

Line-art illustration: simple magnifying glass over an empty wire cooling rack with two crumbs.
Same stroke style as coastal bakery icon set, #3B6E91 lines, transparent PNG.
No text, no logos. 800×600 pixels, 4:3 aspect.

### END PROMPT

---

## 10. 404 Page Illustration

| | |
|---|---|
| **Why** | Memorable brand moment on rare 404 visits |
| **Pros** | "Lost loaf" storytelling without cartoon vibe |
| **Cons** | Low traffic |
| **Priority** | **Nice** |
| **Output** | 600×400 → `illustrations/illustration-404.webp` |
| **Web team** | `__root.tsx` NotFoundComponent |

### START PROMPT

[GLOBAL PREFIX]

Spot illustration for 404 page: single artisan sourdough loaf with one scoring line forming a gentle question-mark curve.
Small harbor wave line underneath. Premium line-art + soft flat fills.
Blue #3B6E91, wheat #C2A878, refined not cartoon.
No numbers, no "404" text, no logos. 1200×800 pixels, transparent PNG.

### END PROMPT

---

## 11. Daniel Island Stylized Map

| | |
|---|---|
| **Why** | Contact/About pickup area — current placeholder is abstract grid |
| **Pros** | Local trust signal without Google embed |
| **Cons** | Geographic accuracy — verify island shape after generation |
| **Priority** | **Should** |
| **Output** | 1200×750 WebP → `illustrations/daniel-island-map.webp` |
| **Web team** | `contact.tsx` MapPlaceholder; keep `mapsUrl` CTA in code |

### START PROMPT

[GLOBAL PREFIX]

Stylized illustrated map of Daniel Island South Carolina.
Simplified coastline and Cooper River, muted harbor blue #6A9EC0 water, cream #F8F4ED land.
Minimal street grid as thin #111111 lines at 15% opacity.
Single wheat-gold pin marker area center-island — no label text.
Editorial map poster style, NOT satellite, NOT 3D, NOT Google screenshot.
No city names, no street names, no text. 16:10 aspect, 1600×1000 pixels.

### END PROMPT

---

## 12. Catering Process Step Illustrations (3-Pack)

| | |
|---|---|
| **Why** | Clarifies 3-step catering flow beyond icon-in-box |
| **Pros** | Consistent series elevates catering page |
| **Cons** | 3 assets to maintain; scroll weight |
| **Priority** | **Should** |
| **Output** | 240×180 each → `illustrations/process/step-01.webp` etc. |

### START PROMPT — Step 1

[GLOBAL PREFIX]

Process step illustration 1 of 3: calendar and clipboard with checkmark, line-art coastal bakery style.
#3B6E91 lines, #C2A878 wheat accent, transparent PNG, 480×360 pixels. No text.

### END PROMPT

### START PROMPT — Step 2

[GLOBAL PREFIX]

Process step illustration 2 of 3: hands exchanging a bread basket (hands only, no faces).
Same line-art style series. No text. 480×360 transparent PNG.

### END PROMPT

### START PROMPT — Step 3

[GLOBAL PREFIX]

Process step illustration 3 of 3: platter with loaves and cookies, subtle harbor wave line at base.
Same series style. No text. 480×360 transparent PNG.

### END PROMPT

---

## 13. About Page — Kitchen Lifestyle (No Face)

| | |
|---|---|
| **Why** | About page uses cookie photo as stand-in — needs bakery atmosphere |
| **Pros** | Reinforces home-bakery story without founder photo |
| **Cons** | Generic AI kitchen may not match Wendy's real space |
| **Priority** | **Should** |
| **Output** | 1600×1200 JPG → `photos/bakery-kitchen-lifestyle.jpg` |

### START PROMPT

[GLOBAL PREFIX]

Lifestyle food photography: cozy home bakery kitchen counter.
Sourdough starter jar with cloth cover, light flour dust, fresh loaves cooling on wire rack.
Soft morning window light, cream cabinets soft focus background.
Daniel Island coastal home aesthetic. NO people, NO faces, NO text, NO logos.
4:3 aspect, 1600×1200.

### END PROMPT

---

## 14. Founder — Hands Only (Safe Interim)

| | |
|---|---|
| **Why** | About founder slot is "coming soon" — hands shot safer than AI face |
| **Pros** | Human warmth without likeness risk |
| **Cons** | Still not Wendy; real portrait is **Must** before launch |
| **Priority** | **Nice** interim · **Must** real photo for launch |
| **Output** | 1200×1500 → `photos/founder-baker-hands.jpg` |

### START PROMPT

[GLOBAL PREFIX]

Lifestyle photography: baker's hands gently shaping sourdough dough on floured wooden surface.
Warm natural window light, cozy home kitchen, soft background.
NO face visible, NO identifiable person, NO text, NO logos.
4:5 portrait aspect, 1200×1500.

### END PROMPT

**NEVER prompt:** "Portrait of Wendy Mercado" without her explicit consent.

---

## PRODUCT PHOTOGRAPHY PROMPTS

**Policy:** AI photos are **interim** only. FAQ states images are representative. Wendy must approve or replace with real bakes before production launch.

**Match existing photos:** `plain-sourdough-bread.jpg`, `hero-bakery-spread.jpg` — soft window light, cream/marble, 4:3, no text/hands/logos.

| Product | Priority | Filename |
|---------|----------|----------|
| Cheese & Jalapeño bread | **Must** | `cheese-jalapeno-sourdough-bread.jpg` |
| Chocolate Chip Nutella bread | **Must** | `chocolate-chip-nutella-sourdough-bread.jpg` |
| Rosemary & Roasted Garlic | **Must** | `rosemary-garlic-sourdough-bread.jpg` |
| Everything Sourdough bread | **Must** | `everything-sourdough-bread.jpg` |
| Cinnamon Roll | **Should** | `cinnamon-roll.jpg` |
| Lemon Blueberry Scone | **Should** | `lemon-blueberry-scone.jpg` |
| Banana Bread | **Should** | `banana-bread.jpg` |
| Bakery Box assorted | **Should** | `bakery-box-assorted.jpg` |
| Custom order spread | **Nice** | `custom-order-spread.jpg` |

### START PROMPT — Cheese & Jalapeño Sourdough

[GLOBAL PREFIX]

Professional food photography: round artisan sourdough loaf with cheese and jalapeño baked into crust and crumb.
Golden crackling crust, flour dusting, melted cheddar pockets, green jalapeño flecks in partial slice.
Soft natural window light, 35° overhead angle, cream linen on pale marble.
NO text, logos, hands, labels. 4:3 aspect, 1600×1200.

### END PROMPT

### START PROMPT — Chocolate Chip Nutella Sourdough

[GLOBAL PREFIX]

Professional food photography: sweet sourdough loaf, thick slice showing chocolate chips and hazelnut-chocolate swirl in crumb.
Golden crust, rustic flour dusting, soft diffused daylight, 40° overhead, pale wood board.
NO text, logos, labels, hands. 4:3, 1600×1200.

### END PROMPT

### START PROMPT — Rosemary & Roasted Garlic Sourdough

[GLOBAL PREFIX]

Professional food photography: sourdough loaf with fresh rosemary and roasted golden garlic cloves in crust.
One slice showing garlic in crumb. 35° overhead, wooden board, cream background.
NO text, logos, hands. 4:3, 1600×1200.

### END PROMPT

### START PROMPT — Everything Sourdough Bread (not bagel)

[GLOBAL PREFIX]

Professional food photography: round sourdough LOAF (not a bagel) with everything seasoning on crust —
sesame, poppy, dried garlic/onion. Scoring on top, flour dusting.
35° overhead, cream linen, marble. NO text, logos, hands. 4:3, 1600×1200.

### END PROMPT

### START PROMPT — Cinnamon Roll

[GLOBAL PREFIX]

Professional food photography: single large cinnamon roll, tight spiral, golden dough, light cream cheese glaze drizzle.
Parchment on pale marble, 45° overhead, soft window light.
NO text, logos, packaging, hands. 4:3, 1600×1200.

### END PROMPT

### START PROMPT — Lemon Blueberry Scone

[GLOBAL PREFIX]

Professional food photography: triangular scone with blueberries, light lemon glaze, golden cracked surface.
Two scones on parchment, side window light, 40° overhead.
NO text, logos, hands. 4:3, 1600×1200.

### END PROMPT

### START PROMPT — Banana Bread

[GLOBAL PREFIX]

Professional food photography: banana bread loaf, partially sliced showing moist crumb with banana pieces.
Wooden cutting board, parchment, soft daylight, 35° overhead.
NO text, logos, hands, pan visible. 4:3, 1600×1200.

### END PROMPT

### START PROMPT — Bakery Box Assorted

[GLOBAL PREFIX]

Professional food photography: open gift bakery box on cream linen.
Assortment: small sourdough loaf, two cookies, one everything bagel, parchment lining.
Kraft box with NO printing, NO logos, NO text. 40° overhead. 4:3, 1600×1200.

### END PROMPT

### START PROMPT — Custom Order Spread (Abstract)

[GLOBAL PREFIX]

Celebratory bakery spread: assorted breads, cookies on board, bagels, subtle floral napkin.
45° overhead, white marble, elegant small-batch home bakery.
NO text, signage, faces, branded packaging. 4:3, 1600×1200.

### END PROMPT

---

## MARKETING & PRINT PROMPTS

### 15. Menu Announcement Frame

| **Why** | Shareable when menu updates — IG, SMS, GBP |
| **Priority** | **Should** |
| **Cons** | Never put DALL·E-generated prices — use `products.ts` in Figma |

### START PROMPT

[GLOBAL PREFIX]

Menu announcement graphic TEMPLATE FRAME only.
Bright white background, #3B6E91 thin double-line border, wheat corner motifs.
Three empty column rectangles for text overlay, decorative header area blank.
NO words, NO prices, NO food photos, NO logos. 1080×1350 pixels.

### END PROMPT

---

### 16. Thank-You Card Insert (Pickup)

| **Why** | Physical touchpoint at pickup — drives repeat SMS orders |
| **Priority** | **Must** |

### START PROMPT

[GLOBAL PREFIX]

Printed thank-you card TEMPLATE, 4×6 vertical portrait.
Bright white card, coastal blue #3B6E91 thin border, wheat corner flourishes.
Large empty center for message overlay. Stationery mockup, flat lay.
NO text, NO logo, NO handwriting. 1200×1800 pixels.

### END PROMPT

---

### 17. Google Business Profile Cover

| **Why** | Local search discovery — must say pickup by appointment |
| **Priority** | **Should** when GBP claimed |
| **Better approach** | Composite real `hero-bakery-spread.jpg` + text in Figma |

### START PROMPT

[GLOBAL PREFIX]

Wide cinematic banner 1024×575: artisan bakery table, sourdough loaves soft-focus background.
Bright white negative space on left third for text overlay.
NO storefront facade, NO signage, NO text, NO logo. Pickup-by-appointment mood.

### END PROMPT

---

### 18. Instagram Post Template (1080×1080)

| **Priority** | **Nice** (when IG live) |

### START PROMPT

[GLOBAL PREFIX]

Square social post TEMPLATE 1080×1080.
White center safe zone, #3B6E91 thin border, wheat corner accents.
Upper 60% empty photo placeholder, lower third blank for text.
NO text, NO logo, NO food photography.

### END PROMPT

---

### 19. Instagram Story Template (1080×1920)

### START PROMPT

[GLOBAL PREFIX]

Vertical story TEMPLATE 1080×1920.
White main canvas, #6A9EC0 subtle top and bottom bands only.
Center 70% empty for overlay. Keep top 250px and bottom 350px relatively clear for UI safe zones.
NO text, NO logo.

### END PROMPT

---

### 20. Holiday Seasonal Banner

| **Priority** | **Nice** (Q4) |

### START PROMPT

[GLOBAL PREFIX]

Seasonal holiday bakery banner 1920×600, bright white base.
Subtle dried citrus and greenery at edges only, center clear for text.
Soft out-of-focus sourdough in background. #3B6E91 accent line.
Elegant NOT cartoon, NO snowmen, NO red/green candy colors. NO text.

### END PROMPT

---

### 21. Sticker Sheet for Packaging

### START PROMPT

[GLOBAL PREFIX]

Sheet of six blank bakery packaging sticker designs on white.
Mix of round seals and small rectangles, #3B6E91 linework, wheat motifs.
Empty centers for logo overlay. NO words, NO brand names. Print-ready flat illustration.

### END PROMPT

---

### 22. Email Newsletter Header

### START PROMPT

[GLOBAL PREFIX]

Wide email header banner 3:1 ratio (1200×400).
Mostly bright white, soft #6A9EC0 accent line along bottom edge only.
Subtle wheat corner ornaments, large empty center for headline overlay.
NO text, NO logo. Minimal.

### END PROMPT

---

### 23. Contact Map Texture (Abstract)

| **Priority** | **Nice** — alternative to full illustrated map |

### START PROMPT

[GLOBAL PREFIX]

Abstract soft map texture: coastal marsh and waterways, pale cream and muted harbor blue watercolor.
Minimal cartographic lines, NO readable labels, NO street names, NO pins.
Suitable as UI background at 20–30% opacity. 16:10, 1600×1000.

### END PROMPT

---

## Section 12 — File Naming & Folder Structure

```
public/assets/knead-to-know/
├── logo/
│   ├── Knead_To_Know_Primary_Circular_Logo.png
│   ├── favicon-source.png
│   ├── logo-on-navy.svg
│   └── stamp-monochrome-black.svg
├── social/
│   ├── og-image.jpg                    (1200×630)
│   └── KTK_MKT_ig-post_1080x1080_v01.png
├── photos/
│   ├── cheese-jalapeno-sourdough-bread.jpg
│   └── bakery-kitchen-lifestyle.jpg
├── illustrations/
│   ├── empty-tray.webp
│   ├── empty-search.webp
│   ├── illustration-404.webp
│   ├── daniel-island-map.webp
│   └── process/step-01.webp
├── badges/
│   └── preorder-only-seal.png
└── patterns/
    └── pattern-wheat-seamless.svg      (prefer CSS/SVG over DALL·E)
```

**Naming convention:** `KTK_{category}_{name}_{WxH}_v01.{ext}`

---

## Section 13 — Web Team Integration Checklist

When assets arrive, notify the team with this list:

- [ ] **Logo** → replace primary PNG, regenerate favicon set
- [ ] **og-image.jpg** → `__root.tsx` meta `og:image` + height `630`
- [ ] **Product JPGs** → `BAKERY_PHOTOS` in `src/lib/products.ts` + `photo:` on each product
- [ ] **empty-tray.webp** → `PreOrderTray.tsx` empty state
- [ ] **daniel-island-map.webp** → `contact.tsx` / `about.tsx` map card
- [ ] **illustration-404.webp** → `__root.tsx` NotFoundComponent
- [ ] **founder-baker-hands.jpg** → `about.tsx` only with "interim" note until Wendy photo
- [ ] Run `npm run build` after all path updates
- [ ] Log AI interim photos in client docs for Wendy replacement queue

---

## Section 14 — ChatGPT COPY Prompts (Non-Image)

Use these alongside visuals — **not** for generating fake reviews.

### Caption pack

```
Write 3 Instagram captions for Knead To Know Sweet & Sour, Daniel Island SC home bakery.
Pre-orders only. Order by text/call (843) 973-0309.
Tone: premium, warm, local, neighborly — not salesy.
One caption for menu update, one for holiday pre-orders, one welcoming new customers.
No fake reviews. No invented hours. No Instagram handle until client provides one.
```

### SMS reminder

```
Write SMS-friendly pre-order reminder under 300 characters matching the website menu tray flow.
Include placeholders for customer name and pickup timing. Sign off as Wendy / Knead To Know.
```

---

## Section 15 — Agent Consensus: Skip DALL·E For These

| Asset | Do instead |
|-------|------------|
| Section dividers | Keep `SectionDivider.tsx` SVG |
| Buttons / cards / forms | Keep CSS `k2k-*` classes |
| FAQ category icons | Keep existing PNG icon set in `/icons/` |
| Hero homepage | Keep real `hero-bakery-spread.jpg` |
| Wordmark in header | Keep Fraunces CSS |
| Testimonial cards | Wait for Wendy's real quotes |
| Google Maps embed | Add real `mapsUrl` when Wendy provides |

---

## Related Documents

| File | Purpose |
|------|---------|
| `docs/CHATGPT_LOGO_PROMPT.md` | Logo-only quick reference |
| `docs/WENDY_WALKTHROUGH_GUIDE.md` | Client review tour |
| `docs/WENDY_MOCK_TO_PRODUCTION_MASTER_GUIDE.md` | Full technical site reference |
| `00_BRAND_ASSETS/.../BRAND_GUIDELINES.md` | Locked brand rules |
| `src/lib/products.ts` | Menu source of truth for any text overlays |

---

*Generated by 4 parallel superagent brainstorm passes — brand identity, product photography, UI illustrations, marketing collateral — synthesized June 23, 2026.*