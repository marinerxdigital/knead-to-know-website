# Knead To Know Design Assets Handoff

This package contains the newly generated Knead To Know decorative website assets, organized for direct use by Claude Code, Grok Build, Codex, or a human developer.

## Package Summary

- **Total normalized production assets:** 19 PNG files
- **Format:** PNG with RGBA transparency
- **Brand palette used:** wheat gold `#C18A4B`, warm brown `#B07D3F`, crust brown `#7A5230`, wave blue `#2E6DB4`, soft cream `#FFFDF8`
- **Primary use case:** Knead To Know boutique bakery website design system

## Recommended Project Placement

Place the normalized assets here:

```txt
/public/assets/knead-to-know/design/
```

Suggested final structure:

```txt
/public/assets/knead-to-know/design/
├── 01_section_dividers/
├── 02_corner_flourishes/
├── 03_background_accents/
├── 04_wheat_sprigs/
├── 05_icons/
│   ├── individual/
│   └── master_grid/
└── 06_product_placeholders/
```

## Implementation Rules

1. Use these assets as **brand support elements**, not primary content.
2. Keep backgrounds white / warm white so the wheat-gold and brown palette stays premium.
3. Do not recolor unless the site theme system explicitly maps the same approved brand colors.
4. Decorative assets should use `aria-hidden="true"` and empty alt text.
5. Functional icons should receive meaningful accessible labels via the surrounding button/link, not embedded text.
6. For production performance, create optimized WebP/AVIF derivatives if needed, but keep these PNGs as the source masters.

## Key Files

- `asset_manifest.json` — machine-readable list of all normalized assets.
- `source_exports_manifest.json` — list of original generator exports included/skipped.
- `docs/CLAUDE_GROK_BUILD_NOTES.md` — implementation instructions for build agents.
- `docs/ASSET_MANIFEST.md` — human-readable asset inventory.
