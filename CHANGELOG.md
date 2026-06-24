# Changelog

## 2026-06-23 — Design System Integration & Logo Replacement

**Commit message:** `feat(branding): integrate KTK design-asset system, replace all logos, add dividers/flourishes/icons/placeholders, update favicons+OG+manifest`

### Added

- 19 production design assets under `/public/assets/knead-to-know/design/`
- Official logo `KTK_NEW_LOGO_FINAL.png` site-wide
- Central asset module `src/lib/design-assets.ts`
- Favicon suite (16/32/48/180/512), `site.webmanifest`, OG image 1200×630
- `design_integration_manifest.json`, `ASSET_INVENTORY.md`
- Agent memory files: `codexmemory.md`, `claudememory.md`, `grokmemory.md`, `projectmemory.md`

### Changed

- All legacy icon paths → new KTK individual icon family
- `SectionDivider` → wave/gold PNG divider asset
- `SectionHeading` decorative mode → flour-wash background accent
- Product/menu cards without photos → branded sourdough placeholder
- Corner flourishes on testimonial, founder, contact, footer sections
- OG/Twitter/JSON-LD images → logo-based 1200×630 composite

### Archived

- `Knead_To_Know_Primary_Circular_Logo.png` → `public/_archive_legacy_logos/`

### Build

- `npm run build`: PASS
