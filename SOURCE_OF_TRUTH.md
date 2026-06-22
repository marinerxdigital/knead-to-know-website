# SOURCE_OF_TRUTH.md

**Highest-authority project file. All agents must read this first.**

## Project
Knead To Know Website v2 (boutique small-batch home bakery, Daniel Island, South Carolina, established 2026).

## Current Business Objective
Rebuild / adapt the website using the provided Spilled Milk Cake Boutique export **strictly as structural skeleton and reference only**:
- Layout rhythm, page hierarchy, section order, spacing logic, menu/product flow, and customer journey.
- **Do NOT copy Spilled Milk branding, copywriting, photos, logos, colors, or proprietary content.**

Target: refined, premium, clean bright-white coastal Lowcountry boutique bakery identity.

## Current Brand Direction (locked, do not deviate in Phase 1+)
- Primary logo: Knead_To_Know_Primary_Circular_Logo.png (moved to 00_BRAND_ASSETS)
- Palette reference (from asset system): Bright White (#FFFFFF), Lowcountry Coastal Blue (#4F7EA8), Soft Harbor Blue (#7FA7C7), Soft Black (#111111), Deep Navy Accent (#1F3447)
- Tone: handcrafted, local, warm but professional, boutique/elevated (no rustic, cartoon, gradients, heavy textures)

## Current Website Objective (Phase 1 complete)
- Bootstrap the editable source from the skeleton into clean project root.
- Verify install + production build.
- Preserve all original packages, .grok/skills, and brand assets.
- Establish intake organization + agent memory files.
- **No visual redesign, no branding replacement, no content changes yet.**

## Final Approved Decisions (Phase 1)
- Source skeleton: spilled-milk-cake-boutique-export.zip (structural reference ONLY)
- Extraction: contents of inner "spilled-milk-export/" copied directly to project root (no nested folder)
- All ZIP packages moved (preserved) into 00_SOURCE_PACKAGES
- Logo moved (preserved) into 00_BRAND_ASSETS
- Old temp extracts consolidated into 00_TEMP_EXTRACT
- Bun unavailable on this environment → used npm (explicitly supported in skeleton notes) for install/build
- Protected: .grok/skills, all zips, logo, no secrets touched

## Non-Negotiable Rules (active)
- Do not redesign or restyle yet.
- Do not replace any Spilled Milk copy, owner name, URLs, emails, Instagram, images, or assets with Knead To Know yet.
- Do not delete any ZIP packages.
- Do not overwrite or remove .grok/skills.
- Do not touch production secrets / Web3Forms keys (configure only when ready).
- Do not create nested repo structures.
- Use skills before any further design/code work.
- Bun recommended; npm fallback used here only because Bun absent.
- All future work must update MEMORY.md.

## Assets to Use (intake)
- 00_SOURCE_PACKAGES/ (all original zips, including skeleton and Knead brand packages)
- 00_BRAND_ASSETS/Knead_To_Know_Primary_Circular_Logo.png
- Asset system docs inside zips (READMEs detail tokens, component references, CSS examples, folder placement)

## Pages Required (from skeleton, to be re-skinned later)
Homepage (index), About, Contact, Inquiry (order), Gallery, Flavors, Featured, Privacy, Sitemap.

## Current Deployment Target
Cloudflare Workers (Nitro/TanStack Start output). See CLOUDFLARE_DEPLOYMENT_NOTES.md (kept from skeleton). wrangler.toml will be needed later.

## Do-not-change List (Phase 1+)
- .grok/ and its skills (load before edits)
- The 00_* intake folders and their contents
- bun.lock, bunfig.toml (keep as-is even with npm)
- The fact that this is a skeleton adaptation — document all changes

## Status After Phase 1
Source bootstrapped and build verified. Safe to proceed to Phase 2 (brand foundation + token work using the specified skills).

## Status After Phase 2
- Brand conversion performed: all core identity, titles, hero, nav, forms updated to Knead To Know (Daniel Island bakery focus).
- Assets from 3 packages integrated.
- npm build passed.
- **Git blocker:** No .git / remote present. Preview push not executed. Blocker report saved.
- See 00_PROJECT_NOTES/GROK_PHASE_2_REPORT.md + 07_QA/BRAND_REMOVAL_AUDIT.md for details.
- All required reports and docs self-saved by Grok.

## Next
User: resolve git repo + remote. Then trigger preview push step or Codex polish. Visual inspection via Vercel preview once branch live.

## Non-Negotiable (updated)
- Preserve .grok/skills and 00_ folders.
- Use npm path for verification until Bun verified.
- No production deploy.
- Placeholders for unknown details.
