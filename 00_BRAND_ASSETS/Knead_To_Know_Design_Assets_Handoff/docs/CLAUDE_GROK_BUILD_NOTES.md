# Claude / Grok Build Implementation Notes

## Objective

Integrate the generated Knead To Know design assets into the website as a cohesive boutique bakery asset system. These are not random illustrations; they are brand-level supporting elements intended to make the site feel custom, handcrafted, local, coastal, and premium.

## Asset Usage Map

### 1. Section Divider

File:

```txt
assets/01_section_dividers/ktk_section_divider_waves_blue_gold_1920x200.png
```

Use between major homepage sections:

- Hero → Featured Products
- Featured Products → About / Story
- Menu Preview → Ordering CTA
- About → Footer

Implementation guidance:

```tsx
<img
  src="/assets/knead-to-know/design/01_section_dividers/ktk_section_divider_waves_blue_gold_1920x200.png"
  alt=""
  aria-hidden="true"
  className="w-full h-auto pointer-events-none select-none"
/>
```

### 2. Corner Flourish

File:

```txt
assets/02_corner_flourishes/ktk_corner_wheat_flourish_bottom_left_800x800.png
```

Use sparingly on premium sections:

- Client testimonial card
- About the baker section
- Order details card
- Footer background accent

Recommended CSS:

```css
.ktk-corner-flourish {
  position: absolute;
  left: 0;
  bottom: 0;
  width: clamp(140px, 22vw, 320px);
  opacity: 0.75;
  pointer-events: none;
}
```

### 3. Watercolor / Flour Wash Background

File:

```txt
assets/03_background_accents/ktk_soft_watercolor_flour_wash_1400x900.png
```

Use behind headline groups only. Do not place directly behind dense paragraphs.

Recommended CSS:

```css
.ktk-flour-wash {
  position: absolute;
  inset: auto;
  width: min(80vw, 900px);
  opacity: 0.55;
  z-index: 0;
  pointer-events: none;
}
```

### 4. Wheat Sprig Sheet

File:

```txt
assets/04_wheat_sprigs/ktk_wheat_sprig_sheet_4_variants_2000x2000.png
```

This is a 2x2 sheet. Crop individual quadrants if the build needs single sprig assets. Use for subtle small accents beside headings, menu cards, or empty states.

### 5. Icon Family

Individual icons:

```txt
assets/05_icons/individual/
```

Use these for structured UI rows:

- Ordering process cards
- Pickup details
- Location block
- Contact block
- Gift / custom order prompts
- Product category cards

Critical rule: keep all icons the same display size inside the same section. Recommended sizes: `32px`, `40px`, `48px`, or `64px`.

### 6. Product Placeholder

Primary file:

```txt
assets/06_product_placeholders/ktk_product_placeholder_sourdough_primary_1200x1200.png
```

Use when product photos are missing. This should prevent the site from looking unfinished while keeping the design on-brand.

## Build Agent Instructions

When integrating into the Knead To Know site:

1. Copy only the `assets/` folder into the website project.
2. Preserve folder names and filenames exactly.
3. Reference assets through `/assets/knead-to-know/design/...` after placing them in `/public/assets/knead-to-know/design/`.
4. Do not raster-stretch icons outside their aspect ratio.
5. Do not use these icons as a replacement for real product photography when final client photos are available.
6. Use the placeholder image only for products without actual photos.
7. Add lazy loading to non-critical images:

```tsx
loading = "lazy";
decoding = "async";
```

8. Keep decorative assets non-interactive:

```tsx
alt=""
aria-hidden="true"
```

## Quality Control Checklist

Before marking complete:

- [ ] Assets render without white boxes.
- [ ] Icons appear visually consistent at the same CSS size.
- [ ] Decorative assets do not interfere with text contrast.
- [ ] Mobile layout does not crop the divider or corner flourish awkwardly.
- [ ] Product placeholder sits centered inside square product cards.
- [ ] No text is embedded in any asset.
