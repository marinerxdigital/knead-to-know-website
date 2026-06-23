# claudememory.md — Claude-Readable Project Context

**Updated:** 2026-06-23

## Project

Knead To Know Website v2 — pre-orders-only home bakery, Daniel Island SC. TanStack Start + React 19 + Tailwind v4 + Nitro → Cloudflare Pages.

## What Changed (2026-06-23 Design Integration)

The complete Knead To Know design-asset system from `00_BRAND_ASSETS/Knead_To_Know_Design_Assets_Handoff/` is now live:

- **Logo:** `/assets/knead-to-know/logo/KTK_NEW_LOGO_FINAL.png` everywhere (header, footer, hero, favicon, OG)
- **Design assets:** `/assets/knead-to-know/design/` (19 PNGs — dividers, flourishes, wash, sprigs, icons, placeholders)
- **Code authority:** `src/lib/design-assets.ts` exports `KTK_ICONS`, `KTK_DECOR`, `KTK_CATEGORY_ICONS`, `LOGO_SRC`, `LOGO_ALT`
- **Legacy logo archived:** `public/_archive_legacy_logos/Knead_To_Know_Primary_Circular_Logo.png`

## Read First

1. `ASSET_INVENTORY.md` — every asset, path, usage
2. `design_integration_manifest.json` — audit record
3. `docs/SESSION_COMPLETE_HANDOFF_LOG.md` — prior session history
4. `SOURCE_OF_TRUTH.md` — brand rules

## Non-Negotiables

- Knead To Know only on customer surfaces
- Do not invent business data
- Cloudflare Pages deploy target
- Run `npm run build` before declaring complete

## Production Blockers

- Web3Forms env key
- Wendy nulls (email, hours, social)
- Custom domain
- Product photos (4 missing, 5 wrong/reused)