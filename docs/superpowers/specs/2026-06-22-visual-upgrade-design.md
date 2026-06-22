# Knead To Know — Visual Upgrade, Form Wiring & SEO Fix Design

Date: 2026-06-22
Status: Approved by Skyler (Grok Build handoff in progress; Wendy has not yet supplied real business data)

## Context

Two audits already exist (`docs/KNEAD_TO_KNOW_SITE_AUDIT.md`, `docs/handoffs/CLAUDE_CODE_HANDOFF.md`) and agree on the same core finding: the site's visual system and IA are good, but it currently reads as an unfinished mockup — bracketed placeholder text rendered live, two of three order forms don't submit anywhere, and SEO basics (robots.txt, OG image, sitemap) still point at the old Spilled Milk skeleton.

Skyler has decided: do not wait on Wendy's real contact/pricing data. Proceed now with (1) a visual upgrade, (2) wiring the two broken forms, and (3) fixing SEO fundamentals — using honest, non-bracketed placeholder copy wherever real data is still missing. Real data drops in later without further redesign.

## Non-negotiables (carried over from `SOURCE_OF_TRUTH.md` / `BRAND_GUIDELINES.md`)

- Locked palette: white `#FFFFFF`, coastal blue `#4F7EA8`, harbor blue `#7FA7C7`, ink `#111111`, navy `#1F3447`
- No cartoon bakery styling, gradients, heavy textures, stock cupcake graphics
- No fabricated testimonials, press, reviews, or personal history not already known
- No Spilled Milk branding/imagery/copy anywhere customer-facing
- Cloudflare Pages remains the deploy target
- Known real facts we're allowed to use: owner name **Wendy Mercado**, location **Daniel Island, SC**, established **2026**, product line (16 sourdough items: 7 breads, 5 cookies, 4 bagels)

## 1. Visual design system

### Color tokens

| Token | Hex | Use |
|---|---|---|
| `white` | `#FFFFFF` | Background, cards |
| `coastal-blue` | `#4F7EA8` | Primary CTA, links, accent lines |
| `harbor-blue` | `#7FA7C7` | Secondary accents, soft borders |
| `ink` | `#111111` | Body text, headlines |
| `navy` | `#1F3447` | Dark accents, hover states |
| `wheat` (**proposed deviation — flag for Wendy**) | `#C2A878` | Pre-order badges, the scoring-line divider motif, small warm details only. Never backgrounds or CTAs. |

### Typography

- **Display:** Fraunces (replaces Cormorant Garamond) — warmer, more characterful serif; satisfies "elegant serif" brand direction without reading as generic wedding-template serif.
- **Body:** Inter, retained — clean, legible, already wired. Tighten eyebrow/label tracking for polish.
- **Loading:** self-hosted or `font-display: swap` via Google Fonts link in `__root.tsx`, replacing the Cormorant Garamond family request with Fraunces.

### Signature element

A thin **scoring-line motif** — the curved blade-score bakers cut into a sourdough loaf, doubling as a quiet tide-line reference — replaces the current generic PNG `SectionDivider` images. Implemented as inline SVG/CSS, colored in coastal blue or wheat, reusable as a section divider and under hero/section headlines.

### Photography direction

Use the user-supplied reference image (soft window light, white marble, linen napkin, scattered flour, wheat stalks as styling props) as the consistent mood for the hero and any future real product photography. This is a direction note for future photography, not a code change — no new photo assets are being generated in this pass.

### Homepage restructure (11 → 6 sections)

```
1. Hero — full bleed photo, headline, dual CTA, scoring-line accent
2. Trust strip — local / small-batch / pre-order icons
3. Featured products — 4 real K2KProductCard items
4. How to order — 3 steps (choose, submit inquiry, confirm)
5. About teaser — Wendy's name + styled photo-pending placeholder + 2 lines, link to /about
6. FAQ teaser + final CTA
```

Removes the duplicate menu-preview/gallery-preview overlap and the bakery-boxes/custom-orders/catering mid-page sections (those pages already exist and are linked from "How to order" and nav).

### Component/UI fixes bundled into this pass

| Fix | File(s) |
|---|---|
| Nav breakpoint `xl` → `lg` so standard laptops see the real nav | `Header.tsx` |
| Unify the three competing button patterns into one button treatment using the locked tokens | `styles.css`, button usages |
| Add visible `focus-visible` rings globally | `styles.css` |
| Stop showing wrong-product photos — unset `photo` so cards fall back to the existing "Photo coming soon" state | `products.ts` (cheese-jalapeno, chocolate-nutella, olive-sourdough, poppy-bagel) |
| Gallery: hide categories with zero real products instead of showing placeholder grids | `gallery.tsx` |
| Wire existing `Lightbox.tsx` into the Gallery's populated categories | `gallery.tsx`, `Lightbox.tsx` |
| Fix bagel category icon (currently reuses the bread icon) | `K2KProductCard.tsx` |
| Custom Orders: fix nested mobile scroll (`max-h-[620px] overflow-auto`) → natural single-column flow on mobile | `custom-orders.tsx` |
| Skip-to-content link, active-nav indicator beyond color alone | `__root.tsx` / `Header.tsx` |
| Replace decorative banner/badge/divider PNGs with HTML/CSS built from the new tokens | `index.tsx`, `menu.tsx`, `SectionDivider.tsx` |

Explicitly **not** doing this pass: fabricating testimonials, inventing Wendy's personal story beyond known facts, adding new product photography, redesigning Menu/Custom Orders/Catering/Gallery page structure beyond the fixes listed above.

## 2. Data layer — honest placeholders, not brackets

`src/lib/business.ts` and `src/lib/products.ts` get every literal `"[INSERT ...]"` replaced with intentional, styled copy — never a bracket on a live page:

| Field | From | To |
|---|---|---|
| `owner` | `[INSERT OWNER NAME]` | `Wendy Mercado` (known fact) |
| `address` | `[INSERT ADDRESS]` | `"Pickup by appointment — Daniel Island, SC"` |
| `phone` | `[INSERT PHONE]` | Hidden from render until provided (component conditionally omits the row) |
| `email` | `[INSERT EMAIL]` | Hidden from render until provided; Contact page CTA instead reads "Send us a message below" |
| `hours` | `[INSERT HOURS]` | `"By appointment"` |
| `instagramHandle`/`instagramUrl` | `[INSERT INSTAGRAM]` | Hidden from render until provided |
| `facebookUrl`, `mapsUrl`, `orderingUrl` | brackets | Hidden from render until provided |
| `products[].price` | `[INSERT PRICE]` | `"Ask for pricing"` styled as a small pill, matching the existing pre-order badge treatment |
| `menu.tsx` broader-menu sections | `[ASK FOR AVAILABILITY]` | `"Ask us about availability"` |
| `custom-orders.tsx` budget field placeholder | `[PRICE TBD]` | `"Share your range — we'll confirm exact pricing"` |
| `ContactForm.tsx` phone input placeholder | `[INSERT PHONE]` | `"(843) 555-0123"` (generic example format, not a real number) |

`Footer.tsx` and `contact.tsx` are updated to conditionally render each contact row only when the underlying `BUSINESS` field has real content — no placeholder row, no bracket, just an absent row until Wendy provides it.

### About page (`about.tsx`)

Add Wendy Mercado's name and known facts only (location, established 2026, product focus, small-batch philosophy already in approved copy). Replace the static "K2K / EST. 2026" placeholder block with a styled photo-pending treatment (matching `K2KProductCard`'s existing "Photo coming soon" pattern) plus a labeled space for her real quote later. **Do not invent a personal origin story, quotes, or biographical details** — that would violate the "no invented owner details" rule. The founder-story paragraphs stay close to current approved copy; only the name and photo slot change.

## 3. Form wiring (Priority: forms must work)

### Custom Orders (`custom-orders.tsx`)

Replace the mock `handleSubmit` (`setSubmitted(true)` only) with a real submission mirroring `ContactForm.tsx`'s Web3Forms pattern:
- POST to `https://api.web3forms.com/submit` with `access_key` from `VITE_WEB3FORMS_ACCESS_KEY`
- Payload includes all form fields plus the selected product names (joined string)
- Honeypot field (mirroring `ContactForm`'s `botcheck`)
- Loading state on submit button (`isSubmitting` equivalent), error state with fallback-email message matching `ContactForm`'s `ERROR_MESSAGE` pattern
- Keep the existing success screen, but only show it after a confirmed successful POST

### Catering (`catering.tsx`)

Same treatment: replace mock submit with real Web3Forms POST, honeypot, loading/error states, success screen only after confirmed success.

### Shared

Both forms reuse the same `ACCESS_KEY` constant pattern already in `ContactForm.tsx` (env var with documented fallback) — no new env plumbing needed.

## 4. SEO fixes

| Item | Current | Fix |
|---|---|---|
| `public/robots.txt` | `Sitemap: https://spilled-milk-cake-builder.lovable.app/sitemap.xml` | `Sitemap: ${SITE_URL}/sitemap.xml` (current `.pages.dev` domain — correct domain, not yet the production one) |
| `src/routes/sitemap[.]xml.ts` | Missing `/menu`, `/custom-orders`, `/catering`, `/faq`; includes orphan `/flavors`, `/inquiry`, `/featured` | Rebuild `ENTRIES` to list only real nav routes: `/`, `/menu`, `/about`, `/custom-orders`, `/catering`, `/gallery`, `/faq`, `/contact`, `/privacy` |
| OG image | `src/assets/og-image.jpg.asset.json` → `/lovable-assets/<uuid>/og-image.jpg` (old Spilled Milk cake image) | Point `__root.tsx`'s `og:image`/`twitter:image` at the real K2K hero photo (`/assets/knead-to-know/photos/hero-bakery-spread.jpg`) instead of the asset-json/lovable-assets path |
| JSON-LD | None | Add `Bakery` (schema.org) JSON-LD to `__root.tsx` head, populated **only with facts we actually know**: `name`, `url`, `description`, `image`, `areaServed: "Daniel Island, SC"`, `founder: { "@type": "Person", "name": "Wendy Mercado" }`. Omit `address`/`telephone`/`openingHours` until real data exists — emitting placeholder schema data is worse than omitting the field. |

`SITE_URL` itself stays as the `.pages.dev` preview domain in this pass — there is no production domain to switch to yet; that's a Phase 3 item per the handoff, blocked on Skyler/Wendy purchasing a domain.

## 5. Repo hygiene (low-risk, bundled in)

- Delete orphaned old-brand assets confirmed to have zero imports: `src/assets/alexandra-*.jpg.asset.json`, `src/assets/cake-360-*.mp4.asset.json`, `src/assets/cake-*.png.asset.json`, and their backing files in `public/lovable-assets/<uuid>/`
- Leave `00_*` intake folders, `.grok/skills`, zips untouched per non-negotiable rules

## Out of scope for this pass

- Wendy's real contact info, pricing, founder story, founder photo, testimonials (blocked on her intake)
- Custom production domain / `SITE_URL` change
- Full product photography
- Deleting dead modules (`k2k-products.ts`, `cake-photos.ts`, `squarespace.ts`, `InquiryForm.tsx`) — flagged for a later cleanup pass, not touched now to limit blast radius
- Deleting orphan route files (`/inquiry`, `/flavors`, `/flavors-pricing`, `/featured`) — only removed from the sitemap, not deleted, in this pass

## Acceptance criteria

- `npm run build` and `npm run lint` pass clean
- Zero `[INSERT` or `[ASK FOR` strings anywhere in rendered output
- Fraunces display font + wheat accent visible and consistent across pages
- Homepage has 6 sections, no duplicate product grids
- Custom Orders and Catering forms POST to Web3Forms and show success only on confirmed delivery
- `robots.txt`, sitemap, and OG image no longer reference Spilled Milk/lovable-assets
- `Bakery` JSON-LD present and valid, with no fabricated address/phone/hours
- No product card shows a mismatched photo
- Desktop nav visible at 1024px+
