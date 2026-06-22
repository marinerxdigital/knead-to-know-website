# GROK PHASE 2 — BRAND CONVERSION, ASSET INTEGRATION, BUILD VERIFICATION, AND PREVIEW BRANCH PUSH

## Project

**Knead To Know Bakery Website v2**

## Project Root

```text
C:\Users\Skyler B. Brown\Desktop\Knead To Know Website v2
```

## Phase 2 Objective

Proceed to **Phase 2: Knead To Know Brand Conversion, Asset Integration, Build Verification, and Preview Branch Push**.

Phase 1 is complete. The Spilled Milk skeleton has been safely extracted into the project root, the editable app source is now at root, and the build has been verified.

Now convert the working app from the **Spilled Milk** skeleton into the **Knead To Know Bakery** website mockup.

This phase is allowed to update:

- Branding
- Design system
- Logo usage
- Asset usage
- Content
- Pages
- Product/menu structure
- Preorder flow
- SEO metadata
- Documentation
- QA files
- Git preview branch

Do **not** rebuild from scratch.

Use the verified extracted website source as the working app skeleton.

---

# 1. Phase 1 Status Already Confirmed

Grok Phase 1 completed with these confirmed results:

- Source was extracted safely.
- Editable app source now exists at the project root.
- No nested `spilled-milk-export/` folder was left as the active app root.
- `.grok/skills` was preserved and untouched.
- ZIP packages were moved into `00_SOURCE_PACKAGES/` and preserved intact.
- Primary logo was moved into `00_BRAND_ASSETS/`.
- `package.json` exists at root.
- `src/` exists at root.
- `public/` exists at root.
- `bun.lock`, `bunfig.toml`, `vite.config.ts`, `components.json`, and TypeScript configs exist at root.
- Bun was **not** available in PATH.
- Node v24.16.0 was present.
- The skeleton docs explicitly supported npm as a fallback.
- `npm install` passed with exit code 0.
- `npm run build` passed with exit code 0.
- Build output was generated into `dist/client/` and `dist/server/`.
- Phase 1 control files were created/updated:
  - `SOURCE_OF_TRUTH.md`
  - `MEMORY.md`
  - `GROK.md`
  - `CODEX.md`
  - `ERRORS.md`
  - `FIXED_ERRORS.md`
  - `README.md`

Phase 2 must respect this current project state.

---

# 2. Required Grok Skills

Use these skills:

- AI Agent Project Memory & Handoff Orchestrator
- Senior Full-Stack Engineering Principles
- Production QA, Bugfix & Deployment Gatekeeper
- Design System Token & Token Auditor
- Responsive Component Composition Architect
- Brand Systems & UI Conversion Architect
- Local SEO Website Structuring Specialist

---

# 3. Critical Phase 2 Rules

These rules are non-negotiable.

1. Do not rebuild the website from scratch.
2. Do not delete any ZIP packages.
3. Do not delete or overwrite `.grok/skills`.
4. Do not remove or overwrite Phase 1 control files.
5. Do not touch production secrets.
6. Do not force push.
7. Do not push directly to `main`.
8. Do not run `vercel --prod`.
9. Do not connect a custom domain.
10. Do not deploy production manually.
11. Do not use random internet images.
12. Do not use generic bakery clip art.
13. Do not leave Spilled Milk branding anywhere.
14. Do not continue to Git push if install, lint, typecheck, or build fails.
15. Do not invent final business contact details, addresses, phone numbers, social links, or unavailable pricing.
16. Do not ask the user to save reports manually.
17. Grok must save all reports it generates directly into the required Markdown report files.
18. Grok must update the project documentation itself after each major step.
19. Grok must stop and report blockers instead of guessing.
20. Because Phase 1 verified npm as the working fallback, use npm for Phase 2 verification unless Bun becomes available and is explicitly verified first.

---

# 4. Phase 2 Preflight Verification

Before doing any conversion work, read the Phase 1 final report and current project notes.

Expected Phase 1 report location:

```text
00_PROJECT_NOTES\GROK_PHASE_1_REPORT.md
```

If the Phase 1 report file does not exist, create it from the Phase 1 output already generated, then continue only after documenting the Phase 1 facts listed above.

Confirm these are true before continuing:

- [ ] Project root contains `package.json`.
- [ ] Project root contains the actual editable app source.
- [ ] Project root contains `src/`.
- [ ] Project root contains `public/`.
- [ ] Project root contains `vite.config.ts`.
- [ ] Project root contains `components.json`.
- [ ] `.grok/skills` still exists and is untouched.
- [ ] ZIP packages are preserved in `00_SOURCE_PACKAGES/`.
- [ ] Primary logo is preserved in `00_BRAND_ASSETS/`.
- [ ] `npm install` passed in Phase 1.
- [ ] `npm run build` passed in Phase 1.
- [ ] No messy nested repo structure was created.
- [ ] The working app root is the real project root.

If any of those are false, stop and write the blocker report to:

```text
00_PROJECT_NOTES\GROK_PHASE_2_BLOCKER.md
```

Do not proceed with visual conversion until the blocker is resolved.

---

# 5. Required Input Packages and Assets

## 5.1 Skeleton Already Extracted in Phase 1

The working app source has already been extracted from:

```text
spilled-milk-cake-boutique-export.zip
```

The original ZIP is now preserved in:

```text
00_SOURCE_PACKAGES\spilled-milk-cake-boutique-export.zip
```

## 5.2 Knead To Know Asset Packages to Inspect and Use

Inspect and use these three packages from `00_SOURCE_PACKAGES/`:

```text
Knead_To_Know_Website_Asset_System.zip
Knead_To_Know_Website_Design_Asset_Package.zip
Knead_To_Know_Product_Cards_Package.zip
```

If the exact filenames contain suffixes, spaces, or minor variations, identify them safely inside `00_SOURCE_PACKAGES/`, document the exact filenames, and proceed only if they are clearly the intended Knead To Know packages.

## 5.3 Primary Logo

Use this logo as the primary visual source of truth:

```text
00_BRAND_ASSETS\Knead_To_Know_Primary_Circular_Logo.png
```

---

# 6. Asset Intake Requirements

Grok must:

1. Preserve all original ZIP packages.
2. Extract or inspect the three Knead To Know asset packages.
3. Read included README files, manifests, CSS token files, Grok handoff notes, Codex implementation notes, and product manifests.
4. Copy production-ready visual assets into the correct app public/static asset directory.
5. Preserve the original asset organization under project notes/assets.
6. Do not clutter the app with duplicate or unused copies.
7. Preserve PNG transparency.
8. Do not distort, recolor, stretch, or crop branded assets unless required for responsive display.
9. Use the asset packages as the visual source of truth.
10. Document all extracted assets in `05_ASSETS/ASSET_INVENTORY.md`.
11. Document all asset decisions in `DECISIONS.md`.

---

# 7. Recommended Asset Structure

Use this structure unless the detected framework requires a different static asset convention:

```text
public/assets/knead-to-know/logo/
public/assets/knead-to-know/buttons/
public/assets/knead-to-know/cards/
public/assets/knead-to-know/forms/
public/assets/knead-to-know/icons/
public/assets/knead-to-know/dividers-and-badges/
public/assets/knead-to-know/banners/
public/assets/knead-to-know/product-cards/
public/assets/knead-to-know/placeholders/
```

If the detected framework uses a different static asset folder, follow the framework convention and document the final path in:

```text
05_ASSETS\ASSET_INVENTORY.md
06_DEVELOPMENT\TECHNICAL_AUDIT.md
GROK.md
```

---

# 8. Brand Conversion Objective

Convert the website from:

- Spilled Milk
- Spilled Milk Cake Boutique
- cake boutique
- custom cake shop
- wedding cake brand
- birthday cake-heavy business
- pink/frosting/cake-first aesthetic
- old client identity

Into:

- Knead To Know
- premium local home bakery
- artisan bread bakery
- sourdough bread bakery
- sourdough cookie bakery
- bagel bakery
- pastry bakery
- bakery box and custom order business
- Daniel Island / Charleston-area local bakery
- bright white, coastal, refined, boutique bakery website

---

# 9. Business Identity

## Business Name

```text
Knead To Know
```

## Business Type

```text
Premium local home bakery focused on artisan breads, sourdough breads, cookies, sourdough cookies, bagels, pastries, seasonal baked goods, bakery boxes, custom bakery orders, preorder items, and catering/event bakery orders.
```

## Location

```text
Daniel Island, South Carolina / Charleston area
```

## Established

```text
2026
```

## Visual Source of Truth

The attached **Knead To Know circular logo** and all three attached design asset packages.

---

# 10. Required Visual Language

The final site must use this visual language:

- Bright white website theme
- Coastal blue linework
- Deep navy typography
- Soft black premium text
- White backgrounds
- Fine artisan illustrations
- Thin decorative borders
- Wheat motifs
- Botanical flourishes
- Heritage bakery styling
- Elegant serif typography
- Premium boutique bakery styling
- Daniel Island / Lowcountry coastal visual identity
- High whitespace
- Clean component hierarchy
- Refined cards and buttons
- Mobile-first layout

---

# 11. Official Color Palette

Use these colors as the site foundation:

| Token                   |       Hex | Usage                                               |
| ----------------------- | --------: | --------------------------------------------------- |
| Bright White            | `#FFFFFF` | Primary background, cards, forms                    |
| Lowcountry Coastal Blue | `#4F7EA8` | CTA fill, borders, accent lines, badges             |
| Soft Harbor Blue        | `#7FA7C7` | Secondary accents, subtle lines, softer UI          |
| Soft Black              | `#111111` | Primary text, headlines, high-contrast details      |
| Deep Navy Accent        | `#1F3447` | Premium dark text/accent when black feels too harsh |
| Light Mist Background   | `#F7FAFC` | Very light section contrast only                    |
| Border Mist             | `#DCE7EF` | Thin borders, dividers, placeholder outlines        |

The website should be primarily bright white. Use blue as a controlled brand accent, not as a heavy background. Use black/deep navy for premium typography and readability.

---

# 12. Do Not Use

Do not use:

- Spilled Milk branding
- Spilled Milk colors
- cartoon bakery graphics
- generic clip art
- cluttered sections
- dark-heavy theme
- bright primary colors
- overly rustic farmhouse styling
- random unrelated colors
- low-quality UI
- cake boutique-first visuals
- pink/frosting-heavy design language

---

# 13. Required Brand Search Audit

Search the entire project for:

```text
Spilled
spilled
Milk
milk
Spilled Milk
Spilled Milk Cake Boutique
spilled-milk
spilled_milk
Cake Boutique
cake boutique
wedding cake
birthday cake
custom cake
cake tasting
cake consultation
cupcake
frosting
buttercream
fondant
pink
```

Remove or rewrite every inappropriate result.

Do not remove the word “cake” only if it makes sense as a secondary custom-order option, but the site must not position Knead To Know primarily as a cake business.

Document the final audit in:

```text
07_QA\BRAND_REMOVAL_AUDIT.md
```

Also summarize the audit in:

```text
00_PROJECT_NOTES\GROK_PHASE_2_REPORT.md
08_DELIVERABLES\FINAL_SUMMARY.md
```

---

# 14. Required Website Pages

Final website pages:

1. Home
2. About
3. Menu
4. Custom Orders
5. Catering / Events
6. Gallery
7. FAQ
8. Contact / Order Inquiry

Final navigation:

- Home
- About
- Menu
- Custom Orders
- Catering
- Gallery
- FAQ
- Contact

---

# 15. Page Mapping From Skeleton

Use the existing skeleton intelligently.

| Existing Spilled Milk Page | New Knead To Know Page                      |
| -------------------------- | ------------------------------------------- |
| Cakes page                 | Menu or Custom Orders                       |
| Wedding Cakes page         | Catering / Events or remove if not relevant |
| Birthday Cakes page        | Custom Orders, rewritten broadly            |
| Gallery page               | Bakery Gallery                              |
| Contact page               | Contact / Order Inquiry                     |
| FAQ page                   | Bakery FAQ                                  |
| About page                 | About Knead To Know                         |

Document routing changes in:

```text
06_DEVELOPMENT\ROUTE_MAP.md
```

---

# 16. Homepage Requirements

Refactor the homepage so it clearly represents Knead To Know.

## Homepage Section Order

1. Hero Section
2. Local Trust Strip
3. Featured Offerings
4. Menu Preview
5. Featured Product Cards / Best Sellers
6. Preorder Flow Preview
7. Custom Orders Section
8. Catering / Events Section
9. Gallery Preview
10. About Preview
11. FAQ Preview
12. Final CTA Section

## Homepage Hero

Use one of these headline directions:

- Fresh Bread, Cookies, and Bakes Worth Knowing
- A Local Bakery for Bread, Cookies, and Everyday Favorites
- Artisan Breads, Cookies, and Small-Batch Bakes
- Fresh Baked Goods with Lowcountry Charm

Approved hero subheadline:

```text
Knead To Know is a small-batch bakery on Daniel Island serving fresh breads, cookies, pastries, seasonal baked goods, bakery boxes, and custom orders for everyday treats, gatherings, and special occasions.
```

Primary CTA:

```text
View Menu
```

Secondary CTA:

```text
Request an Order
```

Other CTA options:

- Catering Inquiry
- Custom Order Inquiry
- Contact the Bakery
- Pre-Order

Featured offerings:

1. Artisan Breads
2. Sourdough Cookies
3. Sourdough Bagels
4. Pastries
5. Seasonal Bakes
6. Bakery Boxes
7. Custom Orders

Document final homepage copy in:

```text
03_CONTENT\HOME_COPY.md
```

---

# 17. Menu and Product Structure

The Menu page must be bakery-focused, not cake-focused.

Primary product-card categories:

1. Sourdough Bread
2. Sourdough Cookies
3. Sourdough Bagels

Use the product-card assets from:

```text
Knead_To_Know_Product_Cards_Package.zip
```

These are reusable branded product card frames, not product photos. They contain transparent product-image areas where actual bakery photos should later be placed.

---

# 18. Product-Card Assets to Map Into the Website

## Sourdough Bread

- `KTK_Product_Card_01_Plain_Sourdough_Bread.png`
- `KTK_Product_Card_02_Rosemary_Sourdough_Bread.png`
- `KTK_Product_Card_03_Rosemary_Roasted_Garlic_Sourdough_Bread.png`
- `KTK_Product_Card_04_Cheese_Jalapeno_Sourdough_Bread.png`
- `KTK_Product_Card_05_Chocolate_Chip_Nutella_Sourdough_Bread.png`
- `KTK_Product_Card_06_Cranberry_Walnut_Sourdough_Bread.png`
- `KTK_Product_Card_07_Olive_Sourdough_Bread.png`

## Sourdough Cookies

- `KTK_Product_Card_08_Chocolate_Chip_Cookies.png`
- `KTK_Product_Card_09_Cranberry_Chocolate_Chip_Cookies.png`
- `KTK_Product_Card_10_Cranberry_Walnut_Cookies.png`
- `KTK_Product_Card_11_Mango_Macadamia_Cookies.png`
- `KTK_Product_Card_12_Apricot_Mango_Cookies.png`

## Sourdough Bagels

- `KTK_Product_Card_13_Plain_Bagel.png`
- `KTK_Product_Card_14_Everything_Bagel.png`
- `KTK_Product_Card_15_Sesame_Bagel.png`
- `KTK_Product_Card_16_Poppy_Bagel.png`

Known product prices from manifest/user notes:

| Product                                   | Price |
| ----------------------------------------- | ----: |
| Plain Sourdough Bread                     | `$12` |
| Rosemary Sourdough Bread                  | `$15` |
| Rosemary & Roasted Garlic Sourdough Bread | `$15` |

For any product where the manifest does not clearly define price, do not invent pricing. Use:

```text
[PRICE TBD]
[ASK FOR AVAILABILITY]
[MARKET PRICE]
[INSERT PRICE]
```

Grok must read the product manifest and use manifest names, prices, categories, and filenames where available.

Additional menu categories may include:

- Pastries
- Bakery Boxes
- Seasonal Specials
- Custom / Pre-Order Items

Document menu/product structure in:

```text
03_CONTENT\MENU_COPY.md
06_DEVELOPMENT\COMPONENT_INVENTORY.md
```

---

# 19. Preorder Flow Requirements

The site should support a clean preorder flow, even if initially form-based.

## Flow

1. Customer views menu/product cards.
2. Customer selects product category.
3. Customer reviews product name, category, price, and availability.
4. Customer clicks Pre-Order or Request an Order.
5. Customer submits order inquiry form.
6. Confirmation message explains the bakery will confirm availability, pickup/delivery details, timing, and final total.

## Preorder Form Fields

- Name
- Email
- Phone
- Requested pickup/event date
- Product/category requested
- Product quantity
- Pickup or delivery preference
- Allergy notes
- Special instructions
- Preferred contact method

## Suggested Components

- ProductCard
- ProductGrid
- MenuSection
- FeaturedProductCard
- PreOrderProductSelector
- OrderInquiryForm
- CateringInquiryForm

## Suggested Product Data Shape

```ts
type Product = {
  id: string;
  name: string;
  category:
    | "sourdoughBread"
    | "sourdoughCookies"
    | "sourdoughBagels"
    | "pastries"
    | "bakeryBoxes"
    | "seasonal";
  price: string;
  cardAsset: string;
  photoAsset?: string;
  description?: string;
  cta: "Pre-Order" | "Request";
};
```

Document preorder/form requirements in:

```text
06_DEVELOPMENT\FORM_REQUIREMENTS.md
03_CONTENT\CONTACT_COPY.md
```

---

# 20. Custom Orders Page Requirements

Convert all cake-specific custom order language into broader bakery custom order language.

Focus on:

- Bakery boxes
- Cookie trays
- Bread orders
- Brunch assortments
- Seasonal specials
- Special occasion baked goods
- Custom bakery requests

Custom order form fields:

- Name
- Email
- Phone
- Requested pickup/event date
- Order type
- Estimated quantity
- Occasion/event type
- Budget range
- Allergy notes
- Message/details
- Preferred contact method

Document copy in:

```text
03_CONTENT\CUSTOM_ORDERS_COPY.md
```

---

# 21. Catering / Events Page Requirements

Convert wedding cake/event cake language into bakery catering language.

Focus on:

- Office breakfast
- Brunch spreads
- Cookie platters
- Pastry trays
- Bread baskets
- Local events
- Private gatherings
- Holiday orders
- Corporate gifting
- Neighborhood events

Catering form fields:

- Name
- Email
- Phone
- Event date
- Event type
- Guest count
- Requested items
- Delivery or pickup preference
- Budget range
- Allergy notes
- Message/details

Document copy in:

```text
03_CONTENT\CATERING_COPY.md
```

---

# 22. About Page Requirements

Rewrite the About page for Knead To Know.

Positioning:

```text
Knead To Know is a local Daniel Island bakery established in 2026, focused on small-batch baked goods, artisan bread, sourdough products, cookies, bagels, pastries, and fresh seasonal offerings.
```

Tone:

- Warm
- Professional
- Local
- Premium
- Trustworthy
- Southern coastal
- Clear
- Human

Avoid:

- Overly cute writing
- Generic “baked with love” language
- Cake boutique origin story
- Spilled Milk references

Document copy in:

```text
03_CONTENT\ABOUT_COPY.md
```

---

# 23. Gallery Requirements

Keep the gallery layout if useful, but update all categories and labels.

Gallery categories:

- Breads
- Cookies
- Bagels
- Pastries
- Seasonal Bakes
- Bakery Boxes
- Catering / Events
- Custom Orders

Image placeholder rule:

If final images are not available, use clean white box placeholders. Do not use random internet images. Do not use Spilled Milk images if they are clearly cake-specific or branded.

White box placeholders:

- Use white or off-white rectangles/blocks.
- Use subtle `#DCE7EF` borders if needed.
- Add short internal labels:
  - Bread Image Placeholder
  - Cookie Image Placeholder
  - Bagel Image Placeholder
  - Pastry Image Placeholder
  - Bakery Box Placeholder
  - Catering Image Placeholder
- Keep placeholders clean and premium.
- Do not make placeholders look broken.
- Do not use cartoon graphics.
- Do not use generic clip art.

All image alt text must describe Knead To Know baked goods, not Spilled Milk cakes.

Document placeholder rules in:

```text
05_ASSETS\IMAGE_PLACEHOLDERS.md
```

---

# 24. FAQ Page Requirements

Replace cake-specific FAQs with bakery-specific FAQs.

Include questions about:

- How to place an order
- How far in advance customers should order
- Whether pickup is available
- Whether catering is available
- Whether custom bakery boxes are available
- Whether allergens can be accommodated
- Whether seasonal items change
- Whether pricing is finalized after inquiry
- Whether large orders require a deposit
- Whether delivery is available or pickup-only
- How preorder availability works
- Whether product photos are final or placeholders

Document FAQ copy in:

```text
03_CONTENT\FAQ_COPY.md
```

---

# 25. Contact / Order Inquiry Page Requirements

Include:

- Contact form
- Order inquiry form or combined inquiry form
- Business contact placeholders
- Hours placeholder
- Location placeholder
- Social link placeholder
- Google Maps placeholder

Use placeholders if final business details are unknown:

```text
[INSERT ADDRESS]
[INSERT PHONE]
[INSERT EMAIL]
[INSERT HOURS]
[INSERT INSTAGRAM]
[INSERT FACEBOOK]
[INSERT GOOGLE MAPS LINK]
[INSERT ORDERING LINK]
[INSERT WEBSITE URL]
```

Document contact copy in:

```text
03_CONTENT\CONTACT_COPY.md
00_PROJECT_NOTES\FINAL_PLACEHOLDERS.md
```

---

# 26. SEO Requirements

Update all SEO metadata to Knead To Know.

Target keywords:

- Daniel Island bakery
- bakery Daniel Island SC
- Charleston bakery
- fresh bread Daniel Island
- cookies Daniel Island
- pastries Daniel Island
- custom bakery orders Charleston
- bakery catering Charleston
- local bakery Daniel Island
- bakery near Daniel Island
- artisan bread Charleston
- cookie bakery Charleston
- home bakery Daniel Island
- bakery boxes Charleston
- custom bakery orders Daniel Island
- sourdough bread Daniel Island
- sourdough cookies Charleston
- bagels Daniel Island
- preorder bakery Daniel Island

Update:

- Title tags
- Meta descriptions
- H1 tags
- H2 structure
- Open Graph metadata
- Twitter card metadata if present
- Schema markup
- LocalBusiness schema if present
- Bakery schema if supported
- Product schema if appropriate
- Breadcrumbs if present
- Sitemap if present
- `robots.txt` if present
- Image alt text
- Footer SEO text

Suggested homepage SEO title:

```text
Knead To Know | Daniel Island Bakery for Bread, Cookies & Pastries
```

Suggested homepage meta description:

```text
Knead To Know is a Daniel Island bakery serving fresh breads, cookies, pastries, seasonal baked goods, bakery boxes, and custom orders in the Charleston area.
```

Schema:

If schema exists, update it to:

- Business name: Knead To Know
- Type: Bakery or LocalBusiness
- Area served: Daniel Island, SC and Charleston area
- Established: 2026
- URL: `[INSERT WEBSITE URL]`
- Phone: `[INSERT PHONE]`
- Address: `[INSERT ADDRESS]`
- Email: `[INSERT EMAIL]`

Document SEO work in:

```text
04_SEO\SEO_PLAN.md
04_SEO\KEYWORDS.md
04_SEO\META_DATA.md
04_SEO\SCHEMA.md
04_SEO\LOCAL_SEO.md
07_QA\SEO_QA.md
```

---

# 27. Required Documentation and Control Files

Create or update these root files:

- `SOURCE_OF_TRUTH.md`
- `MEMORY.md`
- `PROJECT_MEMORY.md`, if already used
- `GROK.md`
- `CODEX.md`
- `CLAUDE.md`
- `ERRORS.md`
- `FIXED_ERRORS.md`
- `CHANGELOG.md`
- `TASKS.md`
- `DECISIONS.md`
- `QA_CHECKLIST.md`
- `DEPLOYMENT.md`
- `CLIENT_HANDOFF.md`

Create or update these project folders:

- `00_PROJECT_NOTES`
- `00_SOURCE_PACKAGES`
- `00_BRAND_ASSETS`
- `01_SOURCE`
- `02_BRAND`
- `03_CONTENT`
- `04_SEO`
- `05_ASSETS`
- `06_DEVELOPMENT`
- `07_QA`
- `08_DELIVERABLES`

---

# 28. Important Documentation Files

Create or update:

- `02_BRAND/BRAND_GUIDELINES.md`
- `02_BRAND/COLORS.md`
- `02_BRAND/TYPOGRAPHY.md`
- `02_BRAND/LOGO_NOTES.md`
- `02_BRAND/VISUAL_DIRECTION.md`
- `03_CONTENT/CONTENT_INVENTORY.md`
- `03_CONTENT/HOME_COPY.md`
- `03_CONTENT/ABOUT_COPY.md`
- `03_CONTENT/MENU_COPY.md`
- `03_CONTENT/CUSTOM_ORDERS_COPY.md`
- `03_CONTENT/CATERING_COPY.md`
- `03_CONTENT/FAQ_COPY.md`
- `03_CONTENT/CONTACT_COPY.md`
- `04_SEO/SEO_PLAN.md`
- `04_SEO/KEYWORDS.md`
- `04_SEO/META_DATA.md`
- `04_SEO/SCHEMA.md`
- `04_SEO/LOCAL_SEO.md`
- `05_ASSETS/ASSET_INVENTORY.md`
- `05_ASSETS/IMAGE_PLACEHOLDERS.md`
- `06_DEVELOPMENT/BUILD_NOTES.md`
- `06_DEVELOPMENT/COMPONENT_INVENTORY.md`
- `06_DEVELOPMENT/ROUTE_MAP.md`
- `06_DEVELOPMENT/FORM_REQUIREMENTS.md`
- `06_DEVELOPMENT/TECHNICAL_AUDIT.md`
- `07_QA/BRAND_REMOVAL_AUDIT.md`
- `07_QA/RESPONSIVE_QA.md`
- `07_QA/SEO_QA.md`
- `07_QA/FORM_QA.md`
- `07_QA/ACCESSIBILITY_QA.md`
- `07_QA/FINAL_REVIEW.md`
- `08_DELIVERABLES/CLIENT_REVIEW_NOTES.md`
- `08_DELIVERABLES/LAUNCH_CHECKLIST.md`
- `08_DELIVERABLES/FINAL_SUMMARY.md`

---

# 29. Required Report Files Grok Must Save Itself

Grok must save its own reports directly. Do not ask the user to save these reports manually.

Create or update these report files:

```text
00_PROJECT_NOTES\GROK_PHASE_2_REPORT.md
00_PROJECT_NOTES\GROK_EXECUTION_LOG.md
00_PROJECT_NOTES\GROK_PHASE_2_BLOCKER.md, only if blocked
08_DELIVERABLES\FINAL_SUMMARY.md
07_QA\FINAL_REVIEW.md
```

## 29.1 `GROK_PHASE_2_REPORT.md` Must Include

- Phase 1 status confirmed
- Framework detected
- Package manager detected
- Asset packages inspected
- Asset documentation read
- Logo asset placement
- Website assets copied and organized
- Product card assets copied and organized
- Files modified
- Pages converted
- Spilled Milk references removed
- Knead To Know content added
- Product/menu/preorder structure added
- Remaining placeholders
- Build command used
- Build result
- Lint/typecheck result, if available
- Errors found
- Errors fixed
- QA results
- Brand removal audit result
- Responsive QA result
- Accessibility QA result
- Git remote status
- Git branch created
- Commit hash, if committed
- GitHub push result, if pushed
- Whether Vercel preview should now be available
- Recommended next steps for visual inspection
- Recommended next steps for Codex polish

## 29.2 `GROK_EXECUTION_LOG.md` Must Include

Append each major action in chronological order:

```text
[YYYY-MM-DD HH:MM] Action:
Result:
Files affected:
Next step:
```

## 29.3 `FINAL_SUMMARY.md` Must Include

A client/developer-friendly final summary of:

- What was built
- What remains placeholder
- How to run the site
- How to inspect the Vercel preview
- What Codex should polish next

---

# 30. SOURCE_OF_TRUTH.md Requirements

`SOURCE_OF_TRUTH.md` must include:

- Correct business name
- Correct location
- Established year
- Business category
- Primary offerings
- Official colors
- Approved navigation
- Approved CTA language
- Placeholder rules
- Forbidden words/legacy brand references
- Asset package names
- Bright white theme rule
- Product-card package usage rule
- Codex handoff rule
- Git/Vercel preview workflow rule
- Phase 1 npm fallback verification note

---

# 31. CODEX.md Requirements

`CODEX.md` must include:

- Project overview
- Framework detected
- Package manager detected
- How to run locally
- How to install dependencies using npm fallback from Phase 1
- How to build using `npm run build`
- File/folder map
- Current completed work
- Remaining tasks
- Coding rules
- Brand rules
- Asset usage rules
- SEO rules
- QA requirements
- Do-not-break list
- Known placeholders
- GitHub handoff note
- Vercel preview note
- Final acceptance criteria

---

# 32. GROK.md Requirements

`GROK.md` must include:

- What Phase 1 completed
- What Phase 2 changed
- Asset packages inspected
- Build/test results
- Branch/commit status if pushed
- Warnings
- Recommended Codex next actions

---

# 33. ERRORS.md / FIXED_ERRORS.md Rule

If any command fails:

1. Record it in `ERRORS.md`.
2. Fix it.
3. Move resolved issue summary to `FIXED_ERRORS.md`.
4. Rerun the verification command.
5. Do not push if unresolved errors remain.

---

# 34. Technical Execution

1. Confirm current root is correct:

```text
C:\Users\Skyler B. Brown\Desktop\Knead To Know Website v2
```

2. Confirm `package.json` exists in root.
3. Confirm `.grok/skills` exists and is untouched.
4. Confirm ZIP packages are preserved in `00_SOURCE_PACKAGES/`.
5. Confirm current framework and build scripts.
6. Read all asset package documentation/manifests.
7. Copy required assets into framework-appropriate public/static path.
8. Convert branding and content.
9. Update routes/pages/navigation.
10. Update product/menu/preorder structure.
11. Update SEO metadata.
12. Update forms and confirmation copy.
13. Run brand removal audit.
14. Update documentation files.
15. Save Phase 2 report files.
16. Run verification commands.

---

# 35. Build Verification

Because Phase 1 confirmed Bun is not available in PATH and npm is the documented working fallback, use npm for Phase 2 verification.

Run:

```bash
npm install
npm run build
```

If `package.json` contains lint or typecheck scripts, run:

```bash
npm run lint
npm run typecheck
```

Only run scripts that actually exist in `package.json`.

If Bun becomes available later, do not switch to Bun unless you verify it explicitly and document the reason. For Phase 2, npm is the approved verified path based on Phase 1.

---

# 36. Responsive QA

Review or inspect responsive behavior for:

- Desktop
- Laptop
- Tablet
- Mobile

Document results in:

```text
07_QA\RESPONSIVE_QA.md
```

---

# 37. Accessibility QA

Requirements:

- All meaningful images have useful alt text.
- Product-card PNGs have meaningful alt text and supporting semantic product text outside the image.
- Buttons and links have accessible labels.
- Forms have proper labels.
- Color contrast is readable.
- Keyboard navigation remains usable.
- Mobile menu remains accessible.
- Focus states are visible and aligned with the blue logo palette.

Document results in:

```text
07_QA\ACCESSIBILITY_QA.md
```

---

# 38. Performance Requirements

- Do not add heavy packages.
- Do not use large unoptimized random images.
- Use placeholders until final photography is available.
- Preserve fast load behavior.
- Do not add unnecessary animation libraries.
- Avoid layout shift where possible.
- Ensure logo files are optimized for web display.
- Use appropriate image dimensions and lazy-loading where supported.
- Do not overuse PNG UI assets when CSS/components can recreate the same look more efficiently.

---

# 39. Git / Vercel Preview Workflow

Vercel is connected to the GitHub repository. The goal is to push a safe preview branch so Vercel can generate a preview deployment for visual inspection.

Do not push directly to `main`.

Do not force push.

Do not run:

```bash
vercel --prod
```

Do not connect a custom domain.

---

# 40. Required Git Checks Before Push

Before Git actions, run:

```bash
git status
git remote -v
```

Confirm the remote is the connected **MarinerX Digital GitHub repository**.

If the remote is missing or incorrect:

1. Stop.
2. Write a blocker report to:
   ```text
   00_PROJECT_NOTES\GROK_PHASE_2_BLOCKER_GIT_REMOTE.md
   ```
3. Include the exact `git remote -v` output.
4. Do not guess.
5. Do not push.

---

# 41. Preview Branch Requirements

If the remote is correct, create a preview branch.

Recommended branch:

```text
knead-to-know-preview
```

If it already exists, use:

```text
knead-to-know-preview-v2
```

or a timestamped branch:

```text
knead-to-know-preview-YYYYMMDD-HHMM
```

Before committing:

- Build must pass.
- Brand audit must pass.
- Docs must be updated.
- Grok report files must be saved.
- No unresolved errors may remain in `ERRORS.md`.
- Project must not contain exposed Spilled Milk branding.
- No production secrets may be committed.

Suggested Git commands:

```bash
git status
git checkout -b knead-to-know-preview
git add .
git commit -m "Build Knead To Know website preview"
git push -u origin knead-to-know-preview
```

If the branch already exists, do not overwrite carelessly. Report status and use a new safe branch name.

---

# 42. Final Acceptance Criteria for Phase 2

Phase 2 is complete only when:

1. The site remains in the correct project root.
2. The site uses the Spilled Milk skeleton, not a full rebuild.
3. All Spilled Milk branding is removed.
4. The site clearly says Knead To Know throughout.
5. The site follows the attached logo colors.
6. The site uses a bright white primary theme.
7. The site feels boutique, premium, coastal, Daniel Island, handcrafted, refined, and professional.
8. The homepage positions the business as bread, cookies, pastries, sourdough, bagels, bakery boxes, preorder, custom orders, and catering.
9. The menu is bakery-focused, not cake-focused.
10. Product-card assets are mapped into menu/product/preorder sections.
11. The custom orders page supports broad bakery requests.
12. The catering page supports bakery trays, brunch, events, cookie platters, pastry trays, bread baskets, and bakery boxes.
13. SEO metadata is updated.
14. Navigation, footer, forms, buttons, and confirmation messages are updated.
15. Unknown business information is marked with placeholders.
16. No exposed Spilled Milk text remains.
17. White box placeholders are used where final images are unavailable.
18. Documentation and memory files are updated.
19. `CODEX.md` is useful for Codex continuation.
20. `CLAUDE.md` is useful for copy/content continuation.
21. `GROK.md` records Grok’s work.
22. `SOURCE_OF_TRUTH.md` is complete.
23. `ERRORS.md` and `FIXED_ERRORS.md` are accurate.
24. `TASKS.md` and `CHANGELOG.md` are updated.
25. The site is responsive on desktop, tablet, and mobile.
26. `npm install` passes.
27. `npm run build` passes.
28. Preview branch is pushed only if all checks pass.
29. Project is ready for visual inspection through Vercel preview.
30. Project is ready for Codex polish after visual review.
31. Grok saved the Phase 2 report itself.
32. Grok saved the execution log itself.
33. Grok updated final delivery summary itself.

---

# 43. Non-Negotiable Failure Conditions

The build is not complete if:

1. Any exposed Spilled Milk branding remains.
2. Any Spilled Milk metadata, SEO, schema, footer, image alt text, file label, or form copy remains.
3. The website still reads primarily as a cake boutique.
4. The website does not follow the attached Knead To Know logo colors.
5. The website is not bright white themed.
6. The asset packages are not inspected.
7. The product-card assets are ignored.
8. The project documentation/memory files are missing.
9. `CODEX.md` is missing or weak.
10. `CLAUDE.md` is missing or weak.
11. `SOURCE_OF_TRUTH.md` is missing or incomplete.
12. Build fails.
13. Mobile layout is broken.
14. Forms are broken.
15. Placeholder details are undocumented.
16. Random colors, cartoon graphics, generic clip art, cluttered sections, or dark-heavy styling are used.
17. Git remote is guessed.
18. `main` is pushed without approval.
19. Production deployment is triggered.
20. The project is not ready for Codex polish.
21. Grok does not save its own reports to the required files.

---

# 44. Stop Conditions

Stop and report before pushing if:

- `npm install` fails
- `npm run build` fails
- lint/typecheck fails and cannot be fixed
- Git remote is missing or incorrect
- Spilled Milk branding remains after audit
- `.grok/skills` is missing or modified
- product asset packages cannot be found
- package manifests cannot be read
- project root is not the real app root
- unresolved errors remain
- Grok cannot save reports to the required files

If blocked, write the blocker report to the most relevant file:

```text
00_PROJECT_NOTES\GROK_PHASE_2_BLOCKER.md
00_PROJECT_NOTES\GROK_PHASE_2_BLOCKER_GIT_REMOTE.md
00_PROJECT_NOTES\GROK_PHASE_2_BLOCKER_BUILD_FAILED.md
00_PROJECT_NOTES\GROK_PHASE_2_BLOCKER_BRAND_AUDIT_FAILED.md
00_PROJECT_NOTES\GROK_PHASE_2_BLOCKER_ASSETS_MISSING.md
```

---

# 45. Final Report Required

At the end of Phase 2, Grok must save the complete final report into:

```text
00_PROJECT_NOTES\GROK_PHASE_2_REPORT.md
```

The report must include:

1. Phase 1 status confirmed
2. Framework detected
3. Package manager detected
4. Asset packages inspected
5. Asset documentation read
6. Logo asset placement
7. Website assets copied and organized
8. Product card assets copied and organized
9. Files modified
10. Pages converted
11. Spilled Milk references removed
12. Knead To Know content added
13. Product/menu/preorder structure added
14. Remaining placeholders
15. Build command used
16. Build result
17. Lint/typecheck result, if available
18. Errors found
19. Errors fixed
20. QA results
21. Brand removal audit result
22. Responsive QA result
23. Accessibility QA result
24. Git remote status
25. Git branch created
26. Commit hash, if committed
27. GitHub push result, if pushed
28. Whether Vercel preview should now be available
29. Recommended next steps for visual inspection
30. Recommended next steps for Codex polish

Also update:

```text
00_PROJECT_NOTES\GROK_EXECUTION_LOG.md
08_DELIVERABLES\FINAL_SUMMARY.md
07_QA\FINAL_REVIEW.md
GROK.md
CODEX.md
SOURCE_OF_TRUTH.md
TASKS.md
CHANGELOG.md
```

---

# 46. Begin Phase 2

Begin Phase 2 now by:

1. Reading or reconstructing the Phase 1 status into:
   ```text
   00_PROJECT_NOTES\GROK_PHASE_1_REPORT.md
   ```
   if the file is not already present.
2. Confirming the working app root.
3. Inspecting the asset packages in `00_SOURCE_PACKAGES/`.
4. Reading all asset package manifests and documentation.
5. Creating/updating all documentation files.
6. Converting the verified skeleton into the Knead To Know Bakery website.
7. Running npm-based build verification.
8. Saving Grok’s own reports.
9. Creating and pushing a preview branch only if all checks pass.
