# Knead To Know — Asset Inventory

**Updated:** 2026-06-23  
**Authority:** `src/lib/design-assets.ts` + `design_integration_manifest.json`

## Official Logo

| Asset | Path | Usage |
|-------|------|-------|
| KTK NEW LOGO FINAL | `/public/assets/knead-to-know/logo/KTK_NEW_LOGO_FINAL.png` | Header, footer, hero, all BrandLogo instances |
| OG image (1200×630) | `/public/assets/knead-to-know/logo/og-image-1200x630.png` | og:image, twitter:image, JSON-LD |
| Favicon ICO | `/public/favicon.ico` | Browser tab |
| Favicon 32 | `/public/favicon-32.png` | `<link rel="icon">` |
| Favicon 48 | `/public/favicon-48.png` | Manifest |
| Apple touch | `/public/apple-touch-icon.png` | iOS home screen |
| Icon 512 | `/public/icon-512.png` | PWA manifest |

**Alt text (standardized):** `Knead To Know — Sweet & Sour`

**Archived:** `public/_archive_legacy_logos/Knead_To_Know_Primary_Circular_Logo.png`

## Design System (19 production assets)

**Base path:** `/public/assets/knead-to-know/design/`

### Section Dividers
- `01_section_dividers/ktk_section_divider_waves_blue_gold_1920x200.png` — full-width between major sections

### Corner Flourishes
- `02_corner_flourishes/ktk_corner_wheat_flourish_bottom_left_800x800.png` — bottom-left accent on cards/footer

### Background Accents
- `03_background_accents/ktk_soft_watercolor_flour_wash_1400x900.png` — behind headline groups only

### Wheat Sprigs
- `04_wheat_sprigs/ktk_wheat_sprig_sheet_4_variants_2000x2000.png` — 2×2 sheet; crop quadrants as needed

### Icons (individual — use in production UI)
| File | Key | Suggested context |
|------|-----|-------------------|
| ktk_icon_01_wheat_stalk | `wheat` | Trust strip, category "All", accents |
| ktk_icon_02_sourdough_loaf | `bread` | Bread category, product cards |
| ktk_icon_03_cookie | `cookie` | Cookie category |
| ktk_icon_04_swirled_dough | `dough` | Bagel category, process steps |
| ktk_icon_05_calendar_check | `calendar` | Pre-order, scheduling |
| ktk_icon_06_envelope | `envelope` / `contact` | Contact, messaging |
| ktk_icon_07_location_pin | `location` | Daniel Island, pickup |
| ktk_icon_08_pickup_bag | `pickup` | Pickup details |
| ktk_icon_09_heart | `heart` | Testimonials, community |
| ktk_icon_10_gift_box | `gift` | Custom orders, catering |
| ktk_icon_11_wall_clock | `clock` | Hours (when Wendy provides) |
| ktk_icon_12_chefs_whisk | `whisk` | About/baking process |

**Reference only:** `05_icons/master_grid/ktk_bakery_icon_grid_12_icons_2400x1800.png`

### Product Placeholders
- `06_product_placeholders/ktk_product_placeholder_sourdough_primary_1200x1200.png` — default missing-photo card
- `06_product_placeholders/ktk_product_placeholder_sourdough_alternate_blue_accent_1200x1200.png` — optional coastal-blue accent

## Brand Palette (locked)

| Token | Hex |
|-------|-----|
| Wheat gold | `#C18A4B` |
| Warm brown | `#B07D3F` |
| Crust brown | `#7A5230` |
| Wave blue | `#2E6DB4` |
| Soft cream | `#FFFDF8` |

## Usage Rules

1. Import paths from `src/lib/design-assets.ts` — never hardcode legacy `/icons/Knead_To_Know_*` paths.
2. Decorative assets: `alt=""`, `aria-hidden="true"`, `pointer-events-none`, `loading="lazy"`, `decoding="async"`.
3. Icons in the same section: uniform CSS size (32 / 40 / 48 / 64px).
4. Placeholders only where `product.photo` is absent — never replace real client photography.
5. Logo side-sprig symmetry and curved-text baseline are from source raster art; native vector rebuild is out of scope.