# codexmemory.md — Technical Codebase State

**Updated:** 2026-06-23  
**Latest commit:** `85c0f60`

## Animated Wave Divider (2026-06-23)

- `src/components/decor/CoastalWaveDivider.tsx` — 3-layer SVG (blue/gold/blue), seamless `k2k-wave-flow` CSS drift
- `SectionDivider.tsx` — now renders `CoastalWaveDivider` (PNG retired in component; asset remains in `KTK_DECOR.sectionDivider`)
- CSS: `.k2k-wave-flow-track`, `.k2k-wave-layer-slow|gold|fast` in `styles.css`; disabled under `prefers-reduced-motion`
- Menu tray pad: `.k2k-main-menu-tray-pad`, `.k2k-footer-menu-tray-pad` on `/menu` via `__root.tsx`

## UI/UX Verification Pass (2026-06-23)

- `CTASection.tsx` — `useId()` for `headingId`; optional `headingId` prop override
- `MobileOrderBar.tsx` — exports `isMobileOrderBarVisible(pathname)`; hides on `/custom-orders`, `/contact`, `/menu`
- `__root.tsx` — conditional `k2k-main-mobile-pad` on `<main>`; passes `showMobileBarOffset` to `Footer`
- `Footer.tsx` — `k2k-footer-mobile-pad` when mobile bar visible
- `styles.css` — `.k2k-footer-mobile-pad` mirrors main mobile pad; clears at `md`
- Routes with new/updated `CTASection`: `custom-orders.tsx`, `privacy.tsx`; fixes in `catering.tsx`, `faq.tsx`, `menu.tsx`, `about.tsx`

## Asset Paths & Conventions

```
public/assets/knead-to-know/
├── logo/
│   ├── KTK_NEW_LOGO_FINAL.png      ← official logo
│   └── og-image-1200x630.png       ← social/JSON-LD
├── design/                         ← 19-asset design system
│   ├── 01_section_dividers/
│   ├── 02_corner_flourishes/
│   ├── 03_background_accents/
│   ├── 04_wheat_sprigs/
│   ├── 05_icons/individual/
│   ├── 05_icons/master_grid/       ← reference only
│   └── 06_product_placeholders/
├── photos/                         ← real product photography (unchanged)
├── icons/                          ← legacy icons (retired in src, not deleted)
└── ...

public/_archive_legacy_logos/       ← superseded logos
public/site.webmanifest
public/favicon*.png, favicon.ico, apple-touch-icon.png, icon-512.png
```

## Central Module

`src/lib/design-assets.ts` — import `KTK_ICONS`, `KTK_DECOR`, `KTK_CATEGORY_ICONS`, `LOGO_SRC`, `LOGO_ALT`. Never hardcode legacy icon paths in new code.

## CSS Utilities (styles.css)

- `.ktk-corner-flourish` — absolute bottom-left, clamp(140px, 22vw, 320px), opacity 0.75
- `.ktk-flour-wash` — behind headlines, z-index 0, opacity 0.55

## Components Touched

- `BrandLogo.tsx` — new logo + alt
- `SectionDivider.tsx` — PNG wave divider
- `Section.tsx` / `SectionHeading` — flour wash when `decorative`
- `K2KProductCard.tsx`, `MenuBuilderCard.tsx` — product placeholders
- `Footer.tsx` — corner flourish; mobile bar bottom offset
- `CTASection.tsx` — white CTA band; unique heading IDs
- `FAQPanel.tsx` — shared FAQ wrapper (`.k2k-faq-panel*`)
- All route files — `KTK_ICONS` imports
- `__root.tsx` — OG image, manifest link, favicon sizes

## Scripts

- `scripts/generate-logo-derivatives.mjs` — regenerates favicons + OG from logo (requires `sharp`)

## Build

```bash
npm run build   # PASS (2026-06-23, commit c5e2f18)
```

## Deployment

```bash
npm run build
npx wrangler pages deploy dist --project-name=knead-to-know-website-v2
```