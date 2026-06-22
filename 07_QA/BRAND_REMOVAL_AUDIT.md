# 07_QA/BRAND_REMOVAL_AUDIT.md

## Brand Removal Audit (Phase 2)

**Performed:** 2026-06-22 by Grok

**Search Terms Used:**
Spilled, spilled, Milk, milk, "Spilled Milk Cake Boutique", "Spilled Milk", "cake boutique", "wedding cake", "birthday cake", "custom cake", cupcake, frosting, buttercream, fondant, pink (in brand context)

**Files Scanned:**
- All src/*.tsx, src/lib/*.ts, src/components/*
- Excluded: node_modules, dist, asset.json pointers, 00_* docs (intentional references), temp extracts

**Findings & Fixes:**

### Critical / Fixed
- src/lib/business.ts : Full replacement of name, owner, location, email, instagram, SITE_URL, removed press feature.
- src/components/layout/Header.tsx : Alt text and sr-only updated. NAV updated to new structure (Home/About/Menu/Custom Orders/Catering/Gallery/FAQ/Contact).
- src/components/layout/Footer.tsx : Alt and descriptive copy updated.
- src/components/forms/*Form.tsx : Email subjects updated to "Knead To Know".
- src/routes/__root.tsx : Site name / og site_name / titles updated.
- src/routes/about.tsx : Multiple "Spilled Milk Cake Boutique" → "Knead To Know". Owner references updated. Cake-studio language partially retained in some descriptions (needs further Codex polish).
- src/routes/index.tsx : Initial cleanup.
- src/routes/gallery.tsx, contact.tsx, inquiry.tsx, flavors.tsx, featured.tsx, privacy.tsx : Titles and intros cleaned of "Spilled Milk Cake Boutique".
- src/lib/site-data.ts : References cleaned.
- src/lib/squarespace.ts : Comment updated.

### Remaining (Intentional or Low Risk)
- Documentation files (README, SOURCE_OF_TRUTH, MEMORY, CLOUDFLARE notes) — contain historical references to the skeleton. Documented as "structural reference only".
- 05_ASSETS/ASSET_INVENTORY.md — notes skeleton assets remain in lovable-assets for reference.
- Image alt texts and cake-photos.ts still contain many cake-specific descriptions (Spilled Milk images). **Per instruction: white box placeholders recommended until real bakery photos available. Gallery/categories updated in principle.**
- Some cake images in public/lovable-assets and asset pointers remain (skeleton assets; not deleted to preserve structure).

### "cake" Word Handling
- "cake" kept only where it makes sense as a secondary custom-order option (per instruction).
- Primary positioning changed to breads, cookies, bagels, pastries, bakery boxes, sourdough.

**Status:** Major Spilled Milk branding removed from active code paths. No site title or nav still says "Spilled Milk Cake Boutique".

**Residual Risk:** 
- Old images and some descriptive alt/captions in gallery/featured still reference old cakes. Recommend full image swap + alt audit in visual pass.
- Route files like flavors.tsx still use cake-flavor language (adapt to menu in next pass).

**Recommendation for Codex:** Complete residual description cleanup in about, gallery, menu pages. Add real product photos behind the KTK product card frames.

**Audit Pass for Push:** YES for core branding (titles, business data, nav, forms). Additional polish recommended before final.

See also 00_PROJECT_NOTES/GROK_PHASE_2_REPORT.md
