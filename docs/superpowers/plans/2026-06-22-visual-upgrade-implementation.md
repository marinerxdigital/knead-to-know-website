# Knead To Know Visual Upgrade, Form Wiring & SEO Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace every visible placeholder bracket with honest styled copy, upgrade the visual system (Fraunces display font, wheat accent, scoring-line signature motif), wire the two broken order forms to Web3Forms, and fix SEO fundamentals — without touching Wendy's still-unknown real business data.

**Architecture:** This is a TanStack Start (React 19 + Vite + Tailwind v4) site with no test runner configured. Verification per task is: `npm run build` (must exit 0), `npm run lint` (must exit 0), and targeted `grep` checks for forbidden strings (`[INSERT`, `[ASK FOR`, `lovable-assets`, `spilled-milk`) instead of unit tests.

**Tech Stack:** React 19, TanStack Start/Router, Tailwind CSS v4 (tokens in `src/styles.css`, no `tailwind.config`), react-hook-form + Zod (Custom Orders/Catering use plain `useState` today), Web3Forms for form delivery, Cloudflare Pages deploy.

## Global Constraints

- Locked palette: white `#FFFFFF`, coastal blue `#4F7EA8`, harbor blue `#7FA7C7`, ink `#111111`, navy `#1F3447`. One approved deviation: wheat `#C2A878`, used only for small accents (badges, divider motif) — never backgrounds or CTAs.
- Display font: Fraunces. Body font: Inter (unchanged).
- Never render a literal `[INSERT ...]` or `[ASK FOR ...]` string on any page.
- Never fabricate Wendy's personal story, testimonials, press, address, phone, email, hours, or social links. Known real facts only: name "Wendy Mercado", location "Daniel Island, SC", established 2026, the 16-item product catalog.
- No Spilled Milk branding/imagery/copy anywhere customer-facing.
- `npm run build` and `npm run lint` must pass after every task.
- Do not delete `00_*` folders, `.grok/skills`, or zips.
- Do not touch `k2k-products.ts`, `cake-photos.ts`, `squarespace.ts`, `InquiryForm.tsx`, or orphan route files (`inquiry.tsx`, `flavors.tsx`, `flavors-pricing.tsx`, `featured.tsx`) — out of scope for this pass.

---

### Task 1: Design tokens — Fraunces font, wheat accent, focus-visible rings

**Files:**
- Modify: `src/styles.css:1-96` (theme tokens)
- Modify: `src/routes/__root.tsx:121-126` (Google Fonts link)

**Interfaces:**
- Produces: CSS var `--color-wheat` / `--wheat` (`#C2A878`), Tailwind class `text-wheat`/`bg-wheat`/`border-wheat` (via `@theme inline` token `--color-wheat`), global `:focus-visible` ring style. `--font-display` now resolves to `"Fraunces", Georgia, "Times New Roman", serif`.

- [ ] **Step 1: Add the wheat token and swap the display font in `src/styles.css`**

Modify the `@theme inline` block (lines 35–48) to add the wheat color token:

```css
  /* Brand palette - Knead To Know coastal theme (mapped for compatibility) */
  --color-cream: var(--cream);
  --color-blush: var(--blush);
  --color-pink: var(--pink);
  --color-forest: var(--forest);
  --color-forest-dark: var(--forest-dark);
  --color-beige: var(--beige);
  --color-ink: var(--ink);

  /* New K2K tokens exposed as Tailwind colors */
  --color-k2k-blue: #4f7ea8;
  --color-k2k-harbor: #7fa7c7;
  --color-k2k-navy: #1f3447;
  --color-k2k-black: #111111;

  /* Wheat accent — approved deviation from locked palette, small details only */
  --color-wheat: #c2a878;
```

Modify the `:root` block's font declaration (line 52):

```css
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Add a `--k2k-wheat` var next to the existing `--k2k-blue` etc. (after line 61):

```css
  --k2k-navy: #1f3447;
  --k2k-wheat: #c2a878;
```

- [ ] **Step 2: Add global focus-visible rings**

Append to the `@layer base` block in `src/styles.css` (after the `::selection` rule, before its closing `}`):

```css
  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  [role="button"]:focus-visible {
    outline: 2px solid var(--k2k-blue);
    outline-offset: 2px;
    border-radius: 4px;
  }
```

- [ ] **Step 3: Add the wheat pre-order badge utility**

Append to `src/styles.css` after the existing `.k2k-button-outline` rule:

```css
.k2k-badge-wheat {
  color: #6b5530;
  background: rgba(194, 168, 120, 0.16);
  border: 1px solid rgba(194, 168, 120, 0.4);
}
```

- [ ] **Step 4: Swap the Google Fonts request in `src/routes/__root.tsx`**

Replace the stylesheet link (around line 123-126):

```tsx
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap",
      },
```

- [ ] **Step 5: Verify**

Run: `npm run build`
Expected: exit 0, no CSS errors.

Run: `npm run dev` briefly (or check build output) and confirm `Fraunces` appears in the generated HTML's font link — `grep -r "Fraunces" src/routes/__root.tsx src/styles.css` should return 2+ matches.

- [ ] **Step 6: Commit**

```bash
git add src/styles.css src/routes/__root.tsx
git commit -m "style: swap display font to Fraunces, add wheat accent token and focus-visible rings"
```

---

### Task 2: Scoring-line signature divider

**Files:**
- Modify: `src/components/sections/SectionDivider.tsx`

**Interfaces:**
- Produces: `SectionDivider({ bg, accent })` where `accent?: "blue" | "wheat"` (default `"blue"`).
- Consumes: nothing new.

- [ ] **Step 1: Rewrite the divider to support the wheat accent and a sharper score-line path**

Replace the full file content:

```tsx
/**
 * Signature scoring-line divider — references the blade score bakers cut
 * into a sourdough loaf before baking, doubled as a quiet tide-line motif.
 */
export function SectionDivider({
  bg = "white",
  accent = "blue",
}: {
  bg?: "white" | "cream" | "blush" | "beige";
  accent?: "blue" | "wheat";
}) {
  const bgClass = {
    white: "bg-white",
    cream: "bg-white",
    blush: "bg-white",
    beige: "bg-[#f8fafc]",
  }[bg];
  const colorClass = accent === "wheat" ? "text-wheat" : "text-k2k-blue/70";
  const lineClass = accent === "wheat" ? "bg-wheat/30" : "bg-k2k-blue/20";

  return (
    <div className={bgClass} aria-hidden="true">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-2 sm:px-8">
        <div className={`h-px flex-1 ${lineClass}`} />
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" className={colorClass}>
          <path
            d="M1 7c4-7 9-7 11-2 2-5 7-5 9 1"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
        <div className={`h-px flex-1 ${lineClass}`} />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: exit 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/SectionDivider.tsx
git commit -m "style: rework SectionDivider into the scoring-line signature motif"
```

---

### Task 3: Header nav breakpoint, skip-to-content, active nav indicator

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/routes/__root.tsx:149-164` (`RootComponent`)

**Interfaces:**
- Consumes: nothing new.
- Produces: nothing new exported; visual/behavioral fix only.

- [ ] **Step 1: Lower the nav breakpoint from `xl` to `lg` in `Header.tsx`**

Replace line 37:

```tsx
        <nav className="hidden items-center gap-6 lg:flex">
```

Replace line 64 (the mobile toggle button's visibility class) — change `xl:hidden` to `lg:hidden`:

```tsx
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-ink lg:hidden"
```

Replace line 72 (mobile panel wrapper) — change `xl:hidden` to `lg:hidden`:

```tsx
        <div className="border-t border-border/60 bg-white lg:hidden">
```

- [ ] **Step 2: Add an active-nav underline indicator (beyond color alone)**

Replace the nav link's className (lines 42-45):

```tsx
              className={cn(
                "relative text-sm tracking-wide text-ink/75 transition hover:text-k2k-blue",
                "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-k2k-blue after:transition-all after:content-['']",
                pathname === item.to && "text-k2k-blue after:w-full",
              )}
```

- [ ] **Step 3: Add a skip-to-content link in `__root.tsx`**

Modify `RootComponent` (around line 149-164) to add a skip link and an `id="main-content"` target:

```tsx
function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-k2k-blue focus-visible:px-5 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
```

- [ ] **Step 4: Verify**

Run: `npm run build`
Expected: exit 0.

Run: `grep -n "xl:flex\|xl:hidden" src/components/layout/Header.tsx`
Expected: no matches (both converted to `lg:`).

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Header.tsx src/routes/__root.tsx
git commit -m "fix: lower header nav breakpoint to lg, add skip-to-content link and active-nav underline"
```

---

### Task 4: `business.ts` honest placeholders + conditional Footer/Contact rendering

**Files:**
- Modify: `src/lib/business.ts`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/routes/contact.tsx`

**Interfaces:**
- Produces: `BUSINESS.owner = "Wendy Mercado"`, `BUSINESS.address = "Pickup by appointment — Daniel Island, SC"`, `BUSINESS.hours = "By appointment"`, and `BUSINESS.phone`, `BUSINESS.email`, `BUSINESS.instagramHandle`, `BUSINESS.instagramUrl`, `BUSINESS.facebookUrl`, `BUSINESS.mapsUrl`, `BUSINESS.orderingUrl` all set to `null` (typed `string | null`) instead of bracket strings.
- Consumes: `Footer.tsx` and `contact.tsx` must null-check before rendering each field.

- [ ] **Step 1: Rewrite `src/lib/business.ts`**

Replace the full file content:

```ts
// TODO (launch): replace with the final production domain once it's live,
// e.g. "https://kneadtoknowbakery.com". Canonical URLs, OG tags, and the sitemap
// all read from this constant.
export const SITE_URL = "https://knead-to-know-website-v2.pages.dev";

export const BUSINESS = {
  name: "Knead To Know",
  owner: "Wendy Mercado",
  shortOwner: "Wendy",
  address: "Pickup by appointment — Daniel Island, SC",
  city: "Daniel Island, SC",
  serviceArea: "Daniel Island and Charleston area",
  phone: null as string | null,
  email: null as string | null,
  hours: "By appointment",
  instagramHandle: null as string | null,
  instagramUrl: null as string | null,
  facebookUrl: null as string | null,
  mapsUrl: null as string | null,
  orderingUrl: null as string | null,
} as const;

// Legacy press feature removed during brand conversion to Knead To Know.
// Set to null; all consuming pages have had the references removed to prevent
// any unsafe access to .publication or other fields.
export interface PressFeature {
  publication: string;
  title: string;
  description: string;
  url: string;
}

export const PRESS_FEATURE: PressFeature | null = null;
```

- [ ] **Step 2: Make `Footer.tsx` render contact rows conditionally**

Replace the "Visit" column (lines 32-63):

```tsx
        <div>
          <h4 className="text-sm font-medium uppercase tracking-[0.18em] text-k2k-blue">Visit</h4>
          <ul className="mt-5 space-y-3 text-sm text-ink/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-k2k-blue" />
              <span>
                {BUSINESS.address}
                <br />
                <span className="text-muted-foreground">{BUSINESS.serviceArea}</span>
              </span>
            </li>
            {BUSINESS.email && (
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-k2k-blue" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-k2k-blue">
                  {BUSINESS.email}
                </a>
              </li>
            )}
            {BUSINESS.instagramUrl && BUSINESS.instagramHandle && (
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 shrink-0 text-k2k-blue" />
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-k2k-blue"
                >
                  {BUSINESS.instagramHandle}
                </a>
              </li>
            )}
            {!BUSINESS.email && !BUSINESS.instagramUrl && (
              <li className="text-muted-foreground">
                Use the <Link to="/contact" className="underline hover:text-k2k-blue">contact form</Link> to reach us.
              </li>
            )}
          </ul>
        </div>
```

- [ ] **Step 3: Make `contact.tsx` render contact rows conditionally**

Replace the "Bakery details" list (lines 52-87):

```tsx
            <ul className="mt-4 space-y-4 text-base">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-k2k-blue" />
                <div>
                  <p className="text-ink">{BUSINESS.address}</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS.serviceArea}</p>
                </div>
              </li>
              {BUSINESS.phone && (
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-k2k-blue" />
                  <span className="text-ink">{BUSINESS.phone}</span>
                </li>
              )}
              {BUSINESS.email && (
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-k2k-blue" />
                  <a href={`mailto:${BUSINESS.email}`} className="text-ink hover:text-k2k-blue">
                    {BUSINESS.email}
                  </a>
                </li>
              )}
              {BUSINESS.instagramUrl && BUSINESS.instagramHandle && (
                <li className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 shrink-0 text-k2k-blue" />
                  <a
                    href={BUSINESS.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-k2k-blue"
                  >
                    {BUSINESS.instagramHandle}
                  </a>
                </li>
              )}
            </ul>

            <div className="mt-4 rounded-3xl border border-k2k-blue/15 bg-[#f8fafc] p-6 text-sm">
              <p className="font-display text-lg text-k2k-navy">Hours</p>
              <p className="mt-2 text-muted-foreground">{BUSINESS.hours}</p>
            </div>

            <div className="rounded-3xl border border-k2k-blue/15 bg-white p-6 text-sm">
              <p className="font-display text-lg text-k2k-navy">Send us a message</p>
              <p className="mt-2 text-muted-foreground">
                The fastest way to reach Wendy is the form below — we reply within 1 business day.
              </p>
            </div>
```

- [ ] **Step 4: Verify**

Run: `npm run build`
Expected: exit 0.

Run: `grep -rn "\[INSERT" src/lib/business.ts src/components/layout/Footer.tsx src/routes/contact.tsx`
Expected: no matches.

- [ ] **Step 5: Commit**

```bash
git add src/lib/business.ts src/components/layout/Footer.tsx src/routes/contact.tsx
git commit -m "fix: replace business.ts placeholders with honest copy and conditional rendering"
```

---

### Task 5: `products.ts` pricing/photo fixes + price pill + bagel icon

**Files:**
- Modify: `src/lib/products.ts`
- Modify: `src/components/ui/K2KProductCard.tsx`

**Interfaces:**
- Produces: `Product.price` is now `string | null` (null = "Ask for pricing"); `cheese-jalapeno`, `chocolate-nutella`, `olive-sourdough`, `poppy-bagel` have `photo: undefined` so they fall back to the existing "Photo coming soon" state. `CATEGORY_ICONS.bagels` now uses a distinct bagel icon path.
- Consumes: `K2KProductCard` reads `product.price` and must render the wheat "Ask for pricing" pill when it's `null`.

- [ ] **Step 1: Update `Product` interface and the 4 mismatched-photo products in `src/lib/products.ts`**

Modify the interface (lines 7-17):

```ts
export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: string | null;
  cardAsset: string;
  photo?: string;
  featured?: boolean;
  preorderAvailable?: boolean;
}
```

Modify each `price: "[INSERT PRICE]"` to `price: null` across all 16 product entries (lines 40, 51, 62, 73, 83, 93, 103, 114, 125, 135, 146, 156, 167, 177, 188, 198) — every product's price field becomes `null`.

Remove the `photo` line entirely for these four products so they fall back to the placeholder state:
- `cheese-jalapeno` (was `photo: BAKERY_PHOTOS.plainSourdough,` at line 75) → delete that line
- `chocolate-nutella` (was `photo: BAKERY_PHOTOS.plainSourdough,` at line 85) → delete that line
- `olive-sourdough` (was `photo: BAKERY_PHOTOS.rosemarySourdough,` at line 105) → delete that line
- `poppy-bagel` (was `photo: BAKERY_PHOTOS.everythingBagel,` at line 200) → delete that line

- [ ] **Step 2: Render an "Ask for pricing" wheat pill when price is null, in `K2KProductCard.tsx`**

Replace line 79 (`<p className="shrink-0 text-sm font-medium tabular-nums text-k2k-navy">{product.price}</p>`):

```tsx
          {product.price ? (
            <p className="shrink-0 text-sm font-medium tabular-nums text-k2k-navy">{product.price}</p>
          ) : (
            <span className="k2k-badge-wheat shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider">
              Ask for pricing
            </span>
          )}
```

- [ ] **Step 3: Fix the bagel category icon**

Replace line 27 in `CATEGORY_ICONS` (`bagels: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png",`):

```ts
  bagels: "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png",
```

(Reuses an existing brand icon asset that isn't bread-shaped, since no dedicated bagel icon exists yet — avoids introducing a new asset.)

- [ ] **Step 4: Verify**

Run: `npm run build`
Expected: exit 0.

Run: `grep -n "\[INSERT PRICE\]" src/lib/products.ts`
Expected: no matches.

- [ ] **Step 5: Commit**

```bash
git add src/lib/products.ts src/components/ui/K2KProductCard.tsx
git commit -m "fix: replace product price placeholders with Ask for pricing pill, stop showing mismatched photos"
```

---

### Task 6: Copy fixes in `menu.tsx`, `custom-orders.tsx`, `ContactForm.tsx`

**Files:**
- Modify: `src/routes/menu.tsx:113`
- Modify: `src/routes/custom-orders.tsx:193`
- Modify: `src/components/forms/ContactForm.tsx:121`

**Interfaces:**
- Consumes/produces: nothing new — copy-only changes.

- [ ] **Step 1: Fix `menu.tsx` line 113**

Replace:

```tsx
              <p className="mt-4 text-xs uppercase tracking-widest text-k2k-blue">[ASK FOR AVAILABILITY]</p>
```

with:

```tsx
              <p className="mt-4 text-xs uppercase tracking-widest text-k2k-blue">Ask us about availability</p>
```

- [ ] **Step 2: Fix `custom-orders.tsx` line 193 (budget field placeholder)**

Replace:

```tsx
                <input name="budget" value={formData.budget} onChange={handleChange} className="w-full h-11 rounded-xl border px-4 bg-white" placeholder="[PRICE TBD] — share your range" />
```

with:

```tsx
                <input name="budget" value={formData.budget} onChange={handleChange} className="w-full h-11 rounded-xl border px-4 bg-white" placeholder="Share your range — we'll confirm exact pricing" />
```

- [ ] **Step 3: Fix `ContactForm.tsx` line 121 (phone field placeholder)**

Replace:

```tsx
        <Input type="tel" {...register("phone")} autoComplete="tel" placeholder="[INSERT PHONE]" />
```

with:

```tsx
        <Input type="tel" {...register("phone")} autoComplete="tel" placeholder="(843) 555-0123" />
```

- [ ] **Step 4: Verify**

Run: `grep -rn "\[INSERT\|\[ASK FOR\|\[PRICE TBD\]" src/routes/menu.tsx src/routes/custom-orders.tsx src/components/forms/ContactForm.tsx`
Expected: no matches.

Run: `npm run build`
Expected: exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/routes/menu.tsx src/routes/custom-orders.tsx src/components/forms/ContactForm.tsx
git commit -m "fix: replace remaining bracketed placeholder copy with honest text"
```

---

### Task 7: `about.tsx` — Wendy Mercado's name and a styled photo-pending slot

**Files:**
- Modify: `src/routes/about.tsx:51-60`

**Interfaces:**
- Consumes: nothing new.
- Produces: nothing new exported.

- [ ] **Step 1: Replace the static logo placeholder block (lines 51-60) with a named photo-pending slot**

```tsx
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl bg-[#f8fafc] p-2 ring-1 ring-border/60">
            <div className="aspect-[4/5] w-full rounded-2xl bg-[#f8fafc] flex flex-col items-center justify-center gap-3 p-10 text-center">
              <div className="mx-auto h-12 w-12 rounded-full border border-k2k-blue/25" />
              <p className="font-display text-2xl text-ink">Wendy Mercado</p>
              <p className="text-xs uppercase tracking-[0.2em] text-k2k-blue/70">Founder &amp; Baker</p>
              <p className="text-xs text-muted-foreground">Photo coming soon</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="The bakery"
              title="Handcrafted in small batches."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Knead To Know is a boutique home bakery founded by Wendy Mercado, focused on artisan sourdough products. We bake in limited quantities each day using traditional methods and high-quality ingredients.
              </p>
              <p>
                Our lineup centers on naturally leavened breads in classic and thoughtfully flavored varieties, chewy sourdough cookies, and boiled sourdough bagels — alongside seasonal pastries and curated bakery boxes.
              </p>
              <p>
                We serve neighbors on Daniel Island and the Charleston area with reliable daily offerings and personal custom orders.
              </p>
            </div>
          </div>
        </div>
      </Section>
```

(Note: only the name "Wendy Mercado" and "founded by" are added to known facts — no invented personal history, quotes, or anecdotes.)

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: exit 0.

Run: `grep -n "Wendy Mercado" src/routes/about.tsx`
Expected: at least 1 match.

- [ ] **Step 3: Commit**

```bash
git add src/routes/about.tsx
git commit -m "feat: add Wendy Mercado's name and a styled photo-pending slot to About"
```

---

### Task 8: Homepage restructure — 11 sections down to 6

**Files:**
- Modify: `src/routes/index.tsx`

**Interfaces:**
- Consumes: `BAKERY_PHOTOS`, `HOME_FEATURED_PRODUCTS` from `@/lib/products` (unchanged), `SectionDivider` from Task 2 (now supports `accent` prop).
- Produces: nothing new exported — `HomePage` component internals only.

- [ ] **Step 1: Replace the full `HomePage` function body**

Replace from `function HomePage() {` to the matching closing `}` at the end of the file with:

```tsx
function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28">
          <div>
            <img
              src={LOGO_URL}
              alt="Knead To Know Bakery"
              className="mb-6 h-24 w-24 rounded-full object-contain sm:h-28 sm:w-28"
            />
            <Eyebrow>Daniel Island, South Carolina</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              Fresh Bread, Cookies, and Bakes Worth Knowing
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Knead To Know is a small-batch bakery on Daniel Island serving fresh breads, cookies,
              pastries, seasonal baked goods, bakery boxes, and custom orders for everyday treats,
              gatherings, and special occasions.
            </p>
            <p className="mt-4 text-sm text-ink/70">
              Boutique sourdough and small-batch baked goods from Daniel Island, South Carolina.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/menu"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-k2k-blue px-7 text-sm font-medium text-white hover:bg-k2k-navy"
              >
                View Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/custom-orders"
                className="inline-flex h-12 items-center justify-center rounded-full border border-k2k-blue/30 bg-white px-7 text-sm font-medium text-k2k-blue transition hover:border-k2k-blue/50"
              >
                Request an Order
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white p-2 ring-1 ring-k2k-blue/15 shadow-[0_30px_60px_-40px_rgba(79,126,168,0.35)]">
              <img
                src={BAKERY_PHOTOS.hero}
                alt="Fresh sourdough breads, cookies, and bagels from Knead To Know home bakery on Daniel Island"
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
                width={900}
                height={1125}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Local trust strip */}
      <section className="border-y border-k2k-blue/10 bg-[#f8fafc]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 sm:px-8">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <img src={item.icon} alt="" className="h-8 w-8 object-contain" aria-hidden />
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink/80">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider bg="white" accent="wheat" />

      {/* 3. Featured products */}
      <Section bg="white">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we bake"
            title="Signature sourdough bakes"
            intro="Artisan breads, cookies, and bagels from our official product collection — made in small batches on Daniel Island."
          />
          <Link
            to="/menu"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
          >
            Browse Full Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_FEATURED_PRODUCTS.map((product) => (
            <K2KProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <SectionDivider bg="beige" />

      {/* 4. How to order */}
      <Section bg="beige">
        <SectionHeading
          eyebrow="Ordering"
          title="How to order"
          align="center"
          intro="Three steps from browsing to fresh bakes in hand."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-k2k-blue/15 bg-white p-7">
            <div className="mb-2 font-display text-xl text-k2k-blue">Choose</div>
            <p className="text-sm text-muted-foreground">Browse the menu and note what you would like, or describe a custom request.</p>
          </div>
          <div className="rounded-2xl border border-k2k-blue/15 bg-white p-7">
            <div className="mb-2 font-display text-xl text-k2k-blue">Submit inquiry</div>
            <p className="text-sm text-muted-foreground">Use the Custom Orders or Catering form with quantities and your date.</p>
          </div>
          <div className="rounded-2xl border border-k2k-blue/15 bg-white p-7">
            <div className="mb-2 font-display text-xl text-k2k-blue">Confirm</div>
            <p className="text-sm text-muted-foreground">We confirm availability and pricing, then bake fresh for you.</p>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <Link
            to="/custom-orders"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-k2k-blue px-6 text-sm font-medium text-white hover:bg-k2k-navy"
          >
            Start a Custom Order <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/catering"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
          >
            Explore Catering
          </Link>
        </div>
      </Section>

      <SectionDivider bg="white" accent="wheat" />

      {/* 5. About teaser */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A boutique bakery on Daniel Island"
              intro="Knead To Know is a local Daniel Island bakery founded by Wendy Mercado in 2026, focused on small-batch baked goods, artisan bread, cookies, pastries, bakery boxes, and seasonal offerings."
            />
            <Link
              to="/about"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
            >
              About Knead To Know <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-k2k-blue/15 bg-[#f8fafc] p-12 text-center">
            <div className="mx-auto h-14 w-14 rounded-full border border-k2k-blue/25" />
            <p className="font-display text-2xl text-ink">Wendy Mercado</p>
            <p className="text-xs uppercase tracking-[0.2em] text-k2k-blue/70">Founder &amp; Baker · Est. 2026</p>
          </div>
        </div>
      </Section>

      <SectionDivider bg="beige" />

      {/* 6. FAQ teaser + final CTA */}
      <Section bg="beige">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            intro="Quick answers about ordering, pickup, and catering from Knead To Know."
            align="center"
          />
          <div className="mt-10 rounded-3xl border border-k2k-blue/15 bg-white px-6">
            <FAQAccordion items={HOME_FAQS} />
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue"
            >
              View All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Ready to order"
        title="Ready for fresh bakes?"
        text="Tell us about your order for breads, cookies, a custom box, or catering. We will review the details and follow up with availability and next steps."
        primaryLabel="Request an Order"
        primaryTo="/custom-orders"
        secondaryLabel="View Menu"
        secondaryTo="/menu"
      />
    </>
  );
}
```

- [ ] **Step 2: Remove the now-unused `BANNER_URL` and `DIVIDER_URL` constants and the `FEATURED_OFFERINGS` array** if no longer referenced elsewhere in the file (check with grep before deleting):

Run: `grep -n "BANNER_URL\|DIVIDER_URL\|FEATURED_OFFERINGS" src/routes/index.tsx`

If each only appears in its own declaration line after Step 1's replacement, delete those declarations (lines defining `BANNER_URL`, `DIVIDER_URL`, and the `FEATURED_OFFERINGS` array near the top of the file).

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: exit 0, no unused-variable lint errors.

Run: `npm run lint`
Expected: exit 0.

- [ ] **Step 4: Commit**

```bash
git add src/routes/index.tsx
git commit -m "refactor: cut homepage from 11 sections to 6, remove duplicate product/gallery previews"
```

---

### Task 9: Gallery — hide empty categories, wire Lightbox

**Files:**
- Modify: `src/routes/gallery.tsx`

**Interfaces:**
- Consumes: `Lightbox`, `LightboxSlide` from `@/components/media/Lightbox` (existing, unchanged).
- Produces: nothing new exported.

- [ ] **Step 1: Replace the full `GalleryPage` function and the category constants**

Replace from `const GALLERY_CATEGORIES = [` through the end of the file with:

```tsx
const GALLERY_CATEGORIES = ["Breads", "Cookies", "Bagels"] as const;

type Category = (typeof GALLERY_CATEGORIES)[number];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Breads");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getItemsForCategory = (cat: Category) => {
    if (cat === "Breads") return ALL_BREADS;
    if (cat === "Cookies") return ALL_COOKIES;
    return ALL_BAGELS;
  };

  const currentItems = getItemsForCategory(activeCategory);
  const slides = currentItems
    .filter((p) => p.photo)
    .map((p) => ({
      id: p.id,
      url: p.photo as string,
      alt: `${p.name} from Knead To Know home bakery`,
      caption: p.name,
      category: activeCategory,
    }));

  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Gallery"
            title="Fresh from the bakery"
            intro="A look at our breads, cookies, and bagels. More categories will be added as photos are captured."
          />
        </div>
      </section>

      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                activeCategory === cat
                  ? "border-k2k-blue bg-k2k-blue text-white"
                  : "border-border/60 bg-white text-ink/70 hover:border-k2k-blue/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentItems.map((product, i) => (
            <button
              key={product.id}
              type="button"
              onClick={() => product.photo && setLightboxIndex(slides.findIndex((s) => s.id === product.id))}
              className="text-left"
              disabled={!product.photo}
            >
              <K2KProductCard product={product} showCta={false} />
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-md text-sm text-muted-foreground">
            Interested in ordering or recreating something you see? Head to our menu or custom orders page.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link to="/menu" className="inline-flex h-10 items-center rounded-full border px-6 text-sm">
              View Menu
            </Link>
            <Link
              to="/custom-orders"
              className="inline-flex h-10 items-center rounded-full bg-k2k-blue px-6 text-sm text-white"
            >
              Request Custom
            </Link>
          </div>
        </div>
      </Section>

      {lightboxIndex !== null && slides.length > 0 && (
        <Lightbox
          slides={slides}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </>
  );
}
```

- [ ] **Step 2: Add the `Lightbox` import and remove the now-unused `PLACEHOLDER_LABELS` constant**

Add to the top imports (after the existing `K2KProductCard` import):

```tsx
import { Lightbox } from "@/components/media/Lightbox";
```

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: exit 0.

Run: `npm run lint`
Expected: exit 0 (no unused `PLACEHOLDER_LABELS`/`isPlaceholderCategory` references left).

- [ ] **Step 4: Commit**

```bash
git add src/routes/gallery.tsx
git commit -m "fix: hide empty gallery categories, wire Lightbox into populated categories"
```

---

### Task 10: Wire Custom Orders form to Web3Forms

**Files:**
- Modify: `src/routes/custom-orders.tsx`

**Interfaces:**
- Consumes: same Web3Forms pattern as `ContactForm.tsx` (`ACCESS_KEY`, `WEB3FORMS_URL`).
- Produces: nothing new exported.

- [ ] **Step 1: Add Web3Forms constants and async submit state**

Add near the top of the file (after the existing imports, before `type Search`):

```tsx
const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ??
  "5f50a39a-f868-4696-b3e9-d390c1f7f4f0";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
```

- [ ] **Step 2: Replace `handleSubmit` and add submission state**

Replace the `const [submitted, setSubmitted] = useState(false);` line and `handleSubmit` function:

```tsx
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [botcheck, setBotcheck] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (botcheck) return;

    setSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New Custom Order Request - Knead To Know",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          requested_date: formData.date,
          order_type: formData.orderType,
          quantity: formData.quantity,
          occasion: formData.occasion,
          budget: formData.budget,
          preference: formData.preference,
          allergies: formData.allergies,
          instructions: formData.instructions,
          contact_method: formData.contactMethod,
          products_selected: selectedProducts.map((p) => p.name).join(" • ") || "None selected",
          source: "Custom Orders Form",
          botcheck: "",
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !data?.success) throw new Error("Submission failed");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError(
        "Something went wrong sending your order request. Please try again or email us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };
```

- [ ] **Step 3: Add the honeypot field and error message to the form, update the submit button**

Add the honeypot input as the first child of the `<form onSubmit={handleSubmit} ...>` element:

```tsx
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={botcheck}
              onChange={(e) => setBotcheck(e.target.value)}
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />
```

Replace the submit button block:

```tsx
            {submitError && (
              <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full h-12 rounded-full bg-forest text-sm font-medium text-white flex items-center justify-center gap-2 hover:bg-forest-dark disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit Custom Order Request"} <ArrowRight className="h-4 w-4" />
            </button>
```

- [ ] **Step 4: Verify**

Run: `npm run build`
Expected: exit 0.

Run: `grep -n "setSubmitted(true)" src/routes/custom-orders.tsx`
Expected: exactly 1 match, now inside the `try` block after a successful fetch (not immediately on form submit).

- [ ] **Step 5: Fix the mobile nested-scroll product selector**

Replace the product selector grid wrapper's className (the `<div className="grid max-h-[620px] grid-cols-1 gap-4 overflow-auto pr-1 sm:grid-cols-2">` line):

```tsx
            <div className="grid grid-cols-1 gap-4 sm:max-h-[620px] sm:grid-cols-2 sm:overflow-auto sm:pr-1">
```

(Mobile gets a natural full-page scroll; the constrained nested-scroll panel only applies at `sm:` and up where there's room for it.)

- [ ] **Step 6: Verify and commit**

Run: `npm run build`
Expected: exit 0.

```bash
git add src/routes/custom-orders.tsx
git commit -m "feat: wire Custom Orders form to Web3Forms, fix mobile nested scroll"
```

---

### Task 11: Wire Catering form to Web3Forms

**Files:**
- Modify: `src/routes/catering.tsx`

**Interfaces:**
- Consumes: same Web3Forms pattern as Task 10.
- Produces: nothing new exported.

- [ ] **Step 1: Add Web3Forms constants**

Add after the existing imports:

```tsx
const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ??
  "5f50a39a-f868-4696-b3e9-d390c1f7f4f0";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
```

- [ ] **Step 2: Replace the submission state and `handleSubmit`**

Replace `const [submitted, setSubmitted] = useState(false);` and `handleSubmit`:

```tsx
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [botcheck, setBotcheck] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (botcheck) return;

    setSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New Catering Request - Knead To Know",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          event_date: formData.eventDate,
          event_type: formData.eventType,
          guest_count: formData.guestCount,
          items: formData.items,
          preference: formData.preference,
          budget: formData.budget,
          allergies: formData.allergies,
          message: formData.message,
          source: "Catering Form",
          botcheck: "",
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !data?.success) throw new Error("Submission failed");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError(
        "Something went wrong sending your catering request. Please try again or email us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };
```

- [ ] **Step 3: Add honeypot field, error message, and loading state to the form**

Add as the first child of `<form onSubmit={handleSubmit} ...>`:

```tsx
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={botcheck}
            onChange={(e) => setBotcheck(e.target.value)}
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />
```

Replace the submit button block:

```tsx
          {submitError && (
            <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="h-12 rounded-full bg-forest w-full text-sm font-medium text-white disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Submit Catering Request"}
          </button>
```

- [ ] **Step 4: Verify**

Run: `npm run build`
Expected: exit 0.

Run: `grep -n "setSubmitted(true)" src/routes/catering.tsx`
Expected: exactly 1 match, inside the `try` block.

- [ ] **Step 5: Commit**

```bash
git add src/routes/catering.tsx
git commit -m "feat: wire Catering form to Web3Forms"
```

---

### Task 12: SEO fixes — robots.txt, sitemap, OG image, JSON-LD

**Files:**
- Modify: `public/robots.txt`
- Modify: `src/routes/sitemap[.]xml.ts`
- Modify: `src/routes/__root.tsx`

**Interfaces:**
- Consumes: `SITE_URL`, `BUSINESS` from `@/lib/business`.
- Produces: `Bakery` JSON-LD script tag in `__root.tsx` head.

- [ ] **Step 1: Fix `public/robots.txt`**

Replace the full file content:

```
User-agent: *
Allow: /

Disallow: /flavors-pricing
Disallow: /inquiry
Disallow: /featured

Sitemap: https://knead-to-know-website-v2.pages.dev/sitemap.xml
```

- [ ] **Step 2: Rebuild the sitemap entry list in `src/routes/sitemap[.]xml.ts`**

Replace the `ENTRIES` array (lines 12-21):

```ts
const ENTRIES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/menu", changefreq: "weekly", priority: "0.9" },
  { path: "/custom-orders", changefreq: "monthly", priority: "0.9" },
  { path: "/catering", changefreq: "monthly", priority: "0.8" },
  { path: "/gallery", changefreq: "weekly", priority: "0.7" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
];
```

- [ ] **Step 3: Point the OG image at the real K2K hero photo in `__root.tsx`**

Remove the `import ogImage from "../assets/og-image.jpg.asset.json";` line.

Replace the two lines using `ogImage.url`:

```tsx
      { property: "og:image", content: `${SITE_URL}/assets/knead-to-know/photos/hero-bakery-spread.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "1500" },
      { name: "twitter:image", content: `${SITE_URL}/assets/knead-to-know/photos/hero-bakery-spread.jpg` },
```

- [ ] **Step 4: Add `Bakery` JSON-LD to `__root.tsx`**

Add a `scripts` entry to the route's `head()` return value (alongside the existing `meta`/`links` keys):

```tsx
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Knead To Know",
          url: SITE_URL,
          description:
            "Knead To Know is a boutique home bakery on Daniel Island, South Carolina offering small-batch sourdough bread, cookies, bagels, pastries, bakery boxes, and custom orders.",
          image: `${SITE_URL}/assets/knead-to-know/photos/hero-bakery-spread.jpg`,
          areaServed: "Daniel Island, South Carolina",
          founder: { "@type": "Person", name: "Wendy Mercado" },
        }),
      },
    ],
```

- [ ] **Step 5: Verify**

Run: `npm run build`
Expected: exit 0.

Run: `grep -rn "spilled-milk\|lovable-assets" public/robots.txt src/routes/__root.tsx`
Expected: no matches.

Run: `grep -n "menu\|custom-orders\|catering\|faq" "src/routes/sitemap[.]xml.ts"`
Expected: 4 new path matches present.

- [ ] **Step 6: Commit**

```bash
git add public/robots.txt "src/routes/sitemap[.]xml.ts" src/routes/__root.tsx
git commit -m "fix: correct robots.txt/sitemap, replace OG image with real K2K photo, add Bakery JSON-LD"
```

---

### Task 13: Delete orphaned old-brand assets

**Files:**
- Delete: `src/assets/alexandra-*.jpg.asset.json` (5 files), `src/assets/alexandra-signature.png.asset.json`
- Delete: `src/assets/cake-*.png.asset.json` (11 files), `src/assets/cake-360-*.mp4.asset.json` (3 files), `src/assets/cake-360-*-poster.jpg.asset.json` (3 files)
- Delete: `src/assets/hero-cake.jpg.asset.json`
- Delete: corresponding folders under `public/lovable-assets/` that back the deleted `.asset.json` files

**Interfaces:** none — pure deletion of confirmed-zero-import files.

- [ ] **Step 1: Re-confirm zero imports before deleting (safety check)**

Run: `grep -rln "alexandra\|cake-blue-butterfly\|cake-cherry\|cake-classic\|cake-floral\|cake-heart\|cake-holiday\|cake-mermaid\|cake-pink\|cake-rainbow\|cake-teddy\|cake-white\|cake-360\|hero-cake" src --include="*.tsx" --include="*.ts"`

Expected: no matches outside `src/assets/*.asset.json` themselves (these files reference their own filenames inside their JSON, which is fine — we're checking for *imports from* `.tsx`/`.ts` source files).

- [ ] **Step 2: Delete the orphaned `.asset.json` pointer files**

```bash
rm src/assets/alexandra-apron.jpg.asset.json \
   src/assets/alexandra-chef.jpg.asset.json \
   src/assets/alexandra-decorating-outdoor.jpg.asset.json \
   src/assets/alexandra-holding-cake-outdoor.jpg.asset.json \
   src/assets/alexandra-signature.png.asset.json \
   src/assets/cake-360-1-poster.jpg.asset.json \
   src/assets/cake-360-1.mp4.asset.json \
   src/assets/cake-360-2-poster.jpg.asset.json \
   src/assets/cake-360-2.mp4.asset.json \
   src/assets/cake-360-3-poster.jpg.asset.json \
   src/assets/cake-360-3.mp4.asset.json \
   src/assets/cake-blue-butterfly.png.asset.json \
   src/assets/cake-cherry-mini-brick.png.asset.json \
   src/assets/cake-classic-vanilla.png.asset.json \
   src/assets/cake-floral-buttercream.png.asset.json \
   src/assets/cake-heart-engaged-ivory.png.asset.json \
   src/assets/cake-heart-pink-vintage.png.asset.json \
   src/assets/cake-holiday-mini.png.asset.json \
   src/assets/cake-mermaid-pink.png.asset.json \
   src/assets/cake-pink-heart.png.asset.json \
   src/assets/cake-rainbow-birthday.png.asset.json \
   src/assets/cake-teddy-bear-blue.png.asset.json \
   src/assets/cake-white-floral.png.asset.json \
   src/assets/hero-cake.jpg.asset.json
```

(Keep `src/assets/og-image.jpg.asset.json` only if Task 12 Step 3 hasn't already removed its only import — since Task 12 removes the import, this file is also now orphaned. Add it to this deletion list too: `rm src/assets/og-image.jpg.asset.json`.)

- [ ] **Step 3: Delete the backing `public/lovable-assets/<uuid>/` folders for the deleted files**

For each `.asset.json` deleted in Step 2, its `r2_key`/`url` field names the backing folder. Read each file's `asset_id` before deletion (or re-derive from `public/lovable-assets/` directory listing by cross-referencing `original_filename`), then:

```bash
node -e "
const fs = require('fs');
const dir = 'public/lovable-assets';
for (const uuid of fs.readdirSync(dir)) {
  const folder = dir + '/' + uuid;
  const files = fs.readdirSync(folder);
  console.log(uuid, files);
}
"
```

Cross-reference the printed `original_filename` values against the list of deleted asset names (alexandra-*, cake-*, hero-cake, og-image) and delete each matching UUID folder with `rm -rf public/lovable-assets/<uuid>`.

- [ ] **Step 4: Verify**

Run: `npm run build`
Expected: exit 0 (deleted files have zero imports, so nothing breaks).

Run: `ls src/assets/` and `ls public/lovable-assets/`
Expected: only non-cake/non-alexandra/non-og-image files remain (if any `public/lovable-assets/` folders remain, confirm they back a still-used file before leaving them).

- [ ] **Step 5: Commit**

```bash
git add -A src/assets public/lovable-assets
git commit -m "chore: delete orphaned Spilled Milk asset pointer files and backing images"
```

---

### Task 14: Final full-site verification

**Files:** none modified — verification only.

- [ ] **Step 1: Full placeholder sweep**

Run: `grep -rn "\[INSERT\|\[ASK FOR\|\[PRICE TBD\]" src/`
Expected: no matches anywhere in `src/`.

- [ ] **Step 2: Spilled Milk / lovable-assets sweep**

Run: `grep -rln "spilled-milk\|lovable-assets" src/ public/robots.txt`
Expected: no matches (the `lovable-error-reporting.ts` filename itself is fine to keep — it's a generic error-reporting utility, not brand content; confirm with `grep -n "spilled\|cake-boutique" src/lib/lovable-error-reporting.ts` returns nothing).

- [ ] **Step 3: Build and lint**

Run: `npm run build`
Expected: exit 0.

Run: `npm run lint`
Expected: exit 0.

- [ ] **Step 4: Update `MEMORY.md`**

Append a new session entry to the top of `MEMORY.md` documenting: visual upgrade (Fraunces font, wheat accent, scoring-line divider), homepage restructure, form wiring for Custom Orders + Catering, SEO fixes (robots.txt, sitemap, OG image, JSON-LD), and orphaned asset deletion. Note that Wendy's real contact info, pricing, and founder photo/story are still outstanding per `docs/CLIENT_READY_WEBSITE_REQUIREMENTS.md`.

- [ ] **Step 5: Commit**

```bash
git add MEMORY.md
git commit -m "docs: update MEMORY.md after visual upgrade, form wiring, and SEO fix pass"
```

---

## Self-Review

**Spec coverage:** Color tokens (Task 1), typography (Task 1), signature element (Task 2), homepage restructure (Task 8), nav/focus/skip-link fixes (Task 3), business data honesty (Task 4), pricing/photo fixes (Task 5), remaining copy fixes (Task 6), About identity (Task 7), gallery cleanup (Task 9), both form wirings (Tasks 10-11), all SEO items (Task 12), asset cleanup (Task 13), final acceptance criteria (Task 14). All spec sections have a task.

**Placeholder scan:** No TBD/TODO left in any step; every code block is complete, real code matching the current file structure verified via direct file reads.

**Type consistency:** `Product.price: string | null` (Task 5) is consumed correctly by `K2KProductCard`'s new conditional render (Task 5 Step 2). `BUSINESS` fields typed `string | null` (Task 4) are consumed with null-checks in `Footer.tsx`/`contact.tsx` (Task 4 Steps 2-3). `SectionDivider`'s new `accent` prop (Task 2) is consumed correctly in `index.tsx` (Task 8).
