# Spilled Milk Cake Boutique — Self-Hosting & Cloudflare Deployment Notes

This export is a complete, portable copy of the Spilled Milk Cake Boutique
website built on **TanStack Start v1 + Vite 7 + React 19 + Tailwind v4**.
It has been prepared to run **outside of Lovable**.

---

## 1. What's inside

```
.
├── public/                     # Static assets served at site root
│   ├── favicon.ico, apple-touch-icon.png, favicon-32.png, robots.txt
│   └── lovable-assets/{asset_id}/{filename}   # All previously-CDN images/videos, now local
├── src/
│   ├── assets/*.asset.json     # Pointer files (now pointing to /lovable-assets/...)
│   ├── components/             # forms, layout, sections, media, ui (shadcn)
│   ├── hooks/                  # usePrefersReducedMotion, use-mobile
│   ├── lib/                    # business.ts, squarespace.ts, cake-photos.ts, utils, etc.
│   ├── routes/                 # File-based routes (index, about, contact, inquiry,
│   │                           #   gallery, featured, flavors, privacy, sitemap[.]xml)
│   ├── router.tsx, start.ts, server.ts, styles.css
│   └── routeTree.gen.ts        # Auto-generated; rebuilt by Vite plugin on dev/build
├── package.json, bun.lock      # Bun lockfile (npm/pnpm can re-resolve)
├── vite.config.ts              # Vite + TanStack Start + Tailwind v4 plugin
├── tsconfig.json
├── components.json             # shadcn config
├── eslint.config.js, .prettierrc, .prettierignore
└── CLOUDFLARE_DEPLOYMENT_NOTES.md
```

No Tailwind config file is needed — Tailwind v4 reads tokens from
`src/styles.css` via `@import "tailwindcss"` and `@theme`.

---

## 2. Local development

Requires Node 20+ and Bun (recommended) or npm/pnpm.

```bash
bun install        # or: npm install
bun run dev        # vite dev — http://localhost:3000
bun run build      # production build
bun run preview    # preview the built output
```

---

## 3. Environment variables

Create a `.env` file in the project root:

```
VITE_WEB3FORMS_ACCESS_KEY=replace_with_actual_key
```

| Variable                    | Used by                                                                        | Notes                                                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_WEB3FORMS_ACCESS_KEY` | `src/components/forms/InquiryForm.tsx`, `src/components/forms/ContactForm.tsx` | Public Web3Forms access key. If unset, both forms fall back to a hardcoded key currently inlined in those two files — search for `ACCESS_KEY` and replace if you want to rotate. |

No other env vars are required for the static/SSR build.

---

## 4. Deploying to Cloudflare

TanStack Start outputs a Nitro-style server bundle targeting a Workers/Edge
runtime. **Use Cloudflare Workers (with Static Assets / Workers Sites)** —
not Cloudflare Pages — because the app uses SSR routes (e.g.
`/sitemap.xml`) and TanStack server functions.

### Recommended: Cloudflare Workers via `wrangler`

1. `bun run build` — produces a `.output/` directory containing
   `server/index.mjs` and `public/` static assets.
2. Create a `wrangler.toml`:

   ```toml
   name = "spilled-milk-cake"
   main = ".output/server/index.mjs"
   compatibility_date = "2025-05-01"
   compatibility_flags = ["nodejs_compat"]

   [assets]
   directory = ".output/public"
   binding = "ASSETS"
   ```

3. Add the Web3Forms key as a Worker secret:
   `wrangler secret put VITE_WEB3FORMS_ACCESS_KEY`
   (Since it's a `VITE_*` var read at build time, prefer setting it as a
   build-time env in CI before `bun run build` — Cloudflare's build-env
   variables in the Pages/Workers dashboard work for this.)
4. `wrangler deploy`.

### Cloudflare Workers (Git-connected) build settings

- **Framework preset:** None (use custom). TanStack Start is not yet a
  one-click preset.
- **Build command:** `bun install && bun run build`
- **Deploy command:** `npx wrangler deploy`
- **Build output directory:** `.output/public` (static assets) — the
  Worker entry is `.output/server/index.mjs` referenced from `wrangler.toml`.
- **Node version:** 20+
- **Compatibility flags:** `nodejs_compat`

### Why not Cloudflare Pages (Functions)?

Pages Functions can host the server bundle, but the TanStack Start build
emits a single Worker entry that maps more cleanly to a Workers project
with the static-assets binding. If you do want Pages: set build command
to `bun run build`, output directory to `.output/public`, and add the
server as a Pages Function — this is more manual and not recommended.

---

## 5. Asset handling (important)

All images, videos, signature PNG, OG image, and the logo were originally
served from Lovable's CDN at `/__l5e/assets-v1/{asset_id}/{filename}`.

For this export they have been **downloaded into
`public/lovable-assets/{asset_id}/{filename}`** and every
`src/assets/*.asset.json` pointer file's `url` field has been rewritten to
the new local path (`/lovable-assets/{asset_id}/{filename}`).

Result: components that do

```ts
import hero from "@/assets/hero-cake.jpg.asset.json";
<img src={hero.url} />
```

continue to work unchanged, served from your own origin.

If you'd prefer to move assets into `src/assets/` and use Vite's normal
image imports, you can — but the current pointer-based setup works as-is
on Cloudflare with zero code changes.

---

## 6. Forms — Web3Forms

Both forms POST to `https://api.web3forms.com/submit`.

| Form          | File                                   | Notes                   |
| ------------- | -------------------------------------- | ----------------------- |
| Order Inquiry | `src/components/forms/InquiryForm.tsx` | Includes honeypot field |
| Contact       | `src/components/forms/ContactForm.tsx` | Includes honeypot field |

To test after deploy: submit each form and confirm an email arrives at
the address configured in the Web3Forms dashboard (currently
`alex@spilledmilkcake.com` — see `src/lib/business.ts`).

---

## 7. Squarespace integration

File: `src/lib/squarespace.ts`

```ts
export const SHOW_PAYMENT_SECTION = false;
export const SHOW_BOOKING_SECTION = false;
export const PAYMENT_URL = "https://..."; // Squarespace payment link
export const BOOKING_URL = "https://..."; // Squarespace booking link
```

- Flip `SHOW_PAYMENT_SECTION = true` to surface the payment CTA.
- Flip `SHOW_BOOKING_SECTION = true` to surface the booking CTA.
- Update `PAYMENT_URL` / `BOOKING_URL` to the real Squarespace URLs the
  client provides.

No other code changes are needed; the routes that read these flags will
render the corresponding CTAs.

---

## 8. Things to update before going live

1. `src/lib/business.ts` → `SITE_URL` should be set to the production
   domain (currently a Lovable preview URL). This drives canonical tags
   and the sitemap.
2. `public/robots.txt` → confirm the sitemap URL once the domain is set.
3. Web3Forms key → move out of inline fallback into
   `VITE_WEB3FORMS_ACCESS_KEY` env var.
4. Squarespace URLs and section flags (see above) once the client confirms.

---

## 9. Known Lovable-specific items removed/neutralized

- **Lovable CDN dependency:** Removed. All assets are local in
  `public/lovable-assets/`.
- **`.lovable/` folder:** Not included (project metadata only — not
  needed to run).
- **`src/lib/lovable-error-reporting.ts`, `src/lib/error-capture.ts`:**
  Included as-is. They report runtime errors to a Lovable endpoint when
  the app runs inside the Lovable preview iframe. They are no-ops in
  production environments and safe to leave; you can delete them and
  remove their imports from `src/routes/__root.tsx` and `src/start.ts`
  if you'd like a fully Lovable-free codebase.
- **`bunfig.toml`:** Generic Bun config, fine to keep.

No other Lovable-only files are required.

---

## 10. Quick verification checklist

- [ ] `bun install` succeeds
- [ ] `bun run build` succeeds, produces `.output/`
- [ ] `bun run preview` renders the home page with hero image
- [ ] Submit Inquiry form → confirmation email received
- [ ] Submit Contact form → confirmation email received
- [ ] `/sitemap.xml` returns XML with the production domain
- [ ] All gallery images and 360° videos load from `/lovable-assets/...`
