# Global UI/UX Audit — QA Record (2026-06-23)

## Routes Inspected

| Route | Page | CTA | FAQ |
|-------|------|-----|-----|
| `/` | Homepage | Yes | Teaser |
| `/menu` | Menu + builder | Yes (added) | — |
| `/about` | About | Yes | — |
| `/faq` | FAQ | Yes | Full |
| `/contact` | Contact + form | Yes (added) | — |
| `/custom-orders` | Custom order form | — | — |
| `/catering` | Catering + form | Yes (×2) | — |
| `/gallery` | Gallery | Yes | — |
| `/privacy` | Privacy policy | — | — |
| 404 | Not found (`__root.tsx`) | — | — |

## Breakpoints Targeted

320 · 375 · 430 · 768 · 1024 · 1280 · 1440 · 1920 px (via responsive CSS tokens + component audit)

## Issues Found → Fixed

### P0 — FAQ container (global)

- **Problem:** Tight inner padding; accordion rows visually colliding with card borders; `overflow-hidden` + minimal `px-4` padding.
- **Fix:** New `FAQPanel` component + `.k2k-faq-panel-body` (24–32px padding); `.k2k-faq-accordion-list` gap spacing; removed hover translate on accordion rows; standardized trigger min-heights.

### P0 — Blue CTA page flow (global)

- **Problem:** `CTASection` had bottom-only padding, no dedicated section background, footer `mt-24` caused crowding/overlap feel.
- **Fix:** `CTASection` now renders as `.k2k-cta-section` with symmetric `py-16 sm:py-24`, white background, top border separator, centered `max-w-7xl` container. Footer `mt-24` → `mt-0` + `border-t`.

### P1 — Section rhythm (global)

- **Problem:** Inconsistent vertical spacing between major sections.
- **Fix:** Bumped `--k2k-section-y-sm` to 3.5rem, `--k2k-section-y-lg` to 7.5rem; added `--k2k-cta-y: 6rem`.

### P1 — Pages missing CTA/footer flow

- **Problem:** `/menu` and `/contact` ended abruptly before footer.
- **Fix:** Added compact `CTASection` to both routes.

### P2 — Accordion base styles

- **Problem:** Default `border-b` on `AccordionItem` conflicted with card-style FAQ items.
- **Fix:** Changed default to `border-b-0`.

## Files Changed

- `src/components/sections/CTASection.tsx`
- `src/components/sections/FAQPanel.tsx` (new)
- `src/components/ui/FAQAccordion.tsx`
- `src/components/ui/accordion.tsx`
- `src/components/layout/Footer.tsx`
- `src/routes/index.tsx`
- `src/routes/faq.tsx`
- `src/routes/menu.tsx`
- `src/routes/contact.tsx`
- `src/styles.css`

## Build / Lint

- `npm run build`: **PASS**
- `npm run lint`: Pre-existing prettier debt in unrelated files; changed files formatted

## Remaining Risks

- Product photo accuracy (9/16) — content, not layout
- Web3Forms env key — production blocker
- Custom-orders and privacy pages use inline CTAs instead of `CTASection` (acceptable; section padding provides footer separation)

## Client-Sellable Verdict

**PASS** for layout, spacing, FAQ, CTA page-flow, and footer separation. Site presents as a cohesive boutique bakery experience suitable for client sales review.