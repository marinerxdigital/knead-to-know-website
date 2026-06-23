# Knead To Know Sweet & Sour — Mock Site Master Guide

**Prepared for:** Wendy Mercado (client review)  
**Prepared by:** Skyler B. Brown / Grok Build team  
**Date:** 2026-06-23  
**Repository:** https://github.com/marinerxdigital/knead-to-know-website  
**Live mock URL:** https://knead-to-know-website-v2.pages.dev  
**Git branch:** `main`

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [What This Mock Site Is](#2-what-this-mock-site-is)
3. [Mock → Real Website Roadmap](#3-mock--real-website-roadmap)
4. [Technology Stack (Frontend + Backend)](#4-technology-stack-frontend--backend)
5. [Deployment Architecture](#5-deployment-architecture)
6. [Complete File & Folder Structure](#6-complete-file--folder-structure)
7. [Live Routes & Navigation](#7-live-routes--navigation)
8. [Component Library (K2K Custom)](#8-component-library-k2k-custom)
9. [Data Layer & Business Rules](#9-data-layer--business-rules)
10. [Interactive Features Built for Wendy](#10-interactive-features-built-for-wendy)
11. [Forms, SMS, and Phone Ordering](#11-forms-sms-and-phone-ordering)
12. [Design System](#12-design-system)
13. [SEO & Accessibility](#13-seo--accessibility)
14. [What Is Complete vs Placeholder](#14-what-is-complete-vs-placeholder)
15. [Wendy Action Checklist](#15-wendy-action-checklist)
16. [Operator Launch Checklist (Skyler)](#16-operator-launch-checklist-skyler)
17. [Session History (Revamp #1–#4)](#17-session-history-revamp-14)
18. [Agent Handoff Files](#18-agent-handoff-files)

---

## 1. Executive Summary

This repository contains a **client-review mockup** of the **Knead To Know Sweet & Sour** website — a boutique home bakery on Daniel Island, South Carolina, owned by **Wendy Mercado**.

The mock is **visually production-grade** and **functionally interactive** (menu builder, SMS pre-orders, phone CTAs, forms). It is **not** a final production launch until Wendy supplies remaining business content and the operator configures form delivery secrets.

| Dimension | Status |
|-----------|--------|
| Visual design / UI revamp | ✅ Complete |
| 16-item verified menu + pricing | ✅ Complete |
| Interactive menu + pre-order tray | ✅ Complete |
| Homepage 3D product showcase | ✅ Complete |
| All primary pages | ✅ Complete |
| Orphan Spilled Milk routes | ✅ Removed (301 redirects in place) |
| Web3Forms live delivery | ⏳ Needs env key |
| Wendy email / hours / social | ⏳ Awaiting client |
| Real testimonials | ⏳ Placeholder structure only |
| Custom domain | ⏳ Post-approval |

---

## 2. What This Mock Site Is

### Purpose
- Let **Wendy Mercado** experience her brand online before launch
- Demonstrate ordering flows: **browse menu → build tray → text/call Wendy**
- Show premium coastal bakery aesthetic aligned with brand guidelines
- Validate menu pricing, product names, and Daniel Island positioning

### What it is NOT
- ❌ E-commerce / online checkout
- ❌ Payment processing
- ❌ Inventory management
- ❌ Automated scheduling / delivery booking
- ❌ A site with invented reviews, hours, or social links

### Origin
Built on a **structural skeleton** exported from a prior project (Spilled Milk). All customer-facing copy, colors, products, and branding were replaced with **Knead To Know only**. Spilled Milk positioning was fully removed from live routes.

---

## 3. Mock → Real Website Roadmap

### Phase A — Mock Review (NOW)
**Wendy reviews:** https://knead-to-know-website-v2.pages.dev

Wendy should verify:
- Menu items and prices match her physical menu
- Phone number `(843) 973-0309` is correct
- Ordering language ("pre-orders only", "freshly baked to order") feels right
- Photos represent her bakes accurately (some items show honest "photo coming soon")
- Overall look feels like *her* bakery

### Phase B — Content Collection (Wendy + Skyler)
Wendy provides:
- [ ] Business email
- [ ] Operating hours (or "by appointment" confirmation)
- [ ] Instagram handle / URL
- [ ] Facebook URL (if any)
- [ ] Founder photo
- [ ] Short founder story (optional depth beyond current safe copy)
- [ ] 1–3 real neighbor testimonials (optional at launch)
- [ ] Google Maps link for pickup area (optional)
- [ ] Remaining product photos for items without images
- [ ] Approval of all menu prices

### Phase C — Operator Wiring (Skyler / Codex)
- [ ] Set `VITE_WEB3FORMS_ACCESS_KEY` in Cloudflare Pages environment
- [ ] Test Contact, Custom Orders, and Catering form delivery to Wendy
- [ ] Point custom domain (e.g. `kneadtoknowbakery.com`) to Cloudflare
- [ ] Update `SITE_URL` in `src/lib/business.ts`
- [ ] Submit sitemap to Google Search Console
- [ ] Final Lighthouse / accessibility pass

### Phase D — Production Launch
- [ ] Replace testimonial placeholders with real quotes (or keep honest "coming soon")
- [ ] Remove any remaining "mock" language in internal docs only
- [ ] Announce site to Daniel Island / Charleston audience
- [ ] Monitor form submissions and SMS order volume

### Phase E — Future Enhancements (post-launch, optional)
- Online order dashboard for Wendy
- Instagram feed embed (when handle provided)
- Seasonal menu sections
- Email newsletter (footer placeholder exists)
- Blog / baking tips

---

## 4. Technology Stack (Frontend + Backend)

### Frontend
| Layer | Technology |
|-------|------------|
| Framework | **React 19** |
| Routing | **TanStack Router** (file-based routes) |
| SSR framework | **TanStack Start** |
| Styling | **Tailwind CSS v4** + custom `k2k-*` design tokens in `src/styles.css` |
| UI primitives | **Radix UI** (accordion, dialog, etc.) via shadcn-style components |
| Forms | **React Hook Form** + **Zod** validation |
| Icons | **Lucide React** + brand PNG icons |
| Fonts | **Fraunces** (display) + **Inter** (body) via Google Fonts in `__root.tsx` |
| Build tool | **Vite 7** |

### Backend / Server
| Layer | Technology |
|-------|------------|
| SSR runtime | **Nitro** (Cloudflare Pages preset) |
| Deploy target | **Cloudflare Pages** + Workers (`dist/_worker.js`) |
| API routes | TanStack Start server handlers (e.g. `sitemap.xml`) |
| Form backend | **Web3Forms** (external HTTPS API — no custom server DB) |
| SMS / Phone | Native device links (`sms:`, `tel:`) — no backend |

### There is NO
- Custom database (Postgres, D1, etc.)
- User authentication
- Payment gateway (Stripe, Square checkout)
- CMS (WordPress, Sanity) — content is in TypeScript files

### Environment Variables
| Variable | Required | Purpose |
|----------|----------|---------|
| `VITE_WEB3FORMS_ACCESS_KEY` | **Yes for live forms** | Web3Forms API key for Contact, Custom Orders, Catering |

Set in: **Cloudflare Pages → Project → Settings → Environment variables**

---

## 5. Deployment Architecture

```
Developer machine
    npm run build
        ↓
    dist/                    ← Cloudflare Pages output
      _worker.js             ← SSR Worker bundle
      assets/                ← Hashed JS/CSS
      _routes.json           ← Cloudflare routing rules
      _redirects             ← Legacy URL redirects
        ↓
    npx wrangler pages deploy dist --project-name=knead-to-know-website-v2
        ↓
    https://knead-to-know-website-v2.pages.dev  (production alias)
```

### Key config files
| File | Role |
|------|------|
| `vite.config.ts` | Nitro preset `cloudflare-pages` |
| `src/server.ts` | SSR entry wrapper |
| `public/_redirects` | 301 redirects for removed orphan routes |
| `src/routes/sitemap[.]xml.ts` | Dynamic XML sitemap |

### Commands
```bash
npm install
npm run dev          # Local preview (typically http://localhost:8080)
npm run build        # Production build → dist/
npm run lint         # ESLint
npx wrangler pages deploy dist --project-name=knead-to-know-website-v2
```

---

## 6. Complete File & Folder Structure

### Repository root
```
Knead To Know Website v2/
├── src/                          # Application source (PRIMARY)
├── public/                       # Static assets served as-is
│   ├── assets/knead-to-know/     # Brand images, icons, product cards, photos
│   └── _redirects                # Cloudflare legacy URL redirects
├── dist/                         # Build output (generated, deploy this)
├── docs/                         # Documentation & handoffs
├── 00_BRAND_ASSETS/              # Original brand ZIP contents (DO NOT DELETE)
├── 00_SOURCE_PACKAGES/           # Original intake ZIPs (DO NOT DELETE)
├── 00_PROJECT_NOTES/             # Phase reports & execution logs
├── 00_TEMP_EXTRACT/              # Extraction staging
├── 01_SOURCE/ … 08_DELIVERABLES/ # Intake pipeline folders
├── .grok/skills/                 # AI agent skills (DO NOT DELETE)
├── vendor/                       # Git submodules (design resources)
├── node_modules/                 # Dependencies (not committed)
├── package.json                  # Scripts & dependencies
├── vite.config.ts                # Vite + Nitro + Cloudflare config
├── eslint.config.js              # Lint rules
├── SOURCE_OF_TRUTH.md            # Brand authority document
├── MEMORY.md                     # Grok project memory
├── GROK.md                       # Grok Build instructions
├── CODEX.md                      # Codex agent instructions
├── CLAUDE.md                     # Claude Code entry point
└── tsconfig.json                 # TypeScript config
```

### `src/` application structure
```
src/
├── routes/                       # File-based pages (TanStack Router)
│   ├── __root.tsx                # App shell, Header, Footer, 404, JSON-LD
│   ├── index.tsx                 # Homepage
│   ├── menu.tsx                  # Interactive menu builder
│   ├── about.tsx
│   ├── faq.tsx
│   ├── contact.tsx
│   ├── custom-orders.tsx
│   ├── catering.tsx
│   ├── gallery.tsx
│   ├── privacy.tsx
│   └── sitemap[.]xml.ts          # SEO sitemap handler
├── components/
│   ├── brand/BrandLogo.tsx
│   ├── layout/Header.tsx, Footer.tsx, MobileOrderBar.tsx
│   ├── sections/PageHero.tsx, Section.tsx, CTASection.tsx, SectionDivider.tsx
│   ├── menu/                     # Interactive menu builder suite
│   │   ├── InteractiveMenuBuilder.tsx
│   │   ├── MenuBuilderCard.tsx
│   │   ├── PreOrderTray.tsx
│   │   ├── ProductDetailDialog.tsx
│   │   └── QuantityControl.tsx
│   ├── products/Product3DCarousel.tsx
│   ├── motion/ScrollReveal.tsx
│   ├── forms/ContactForm.tsx
│   ├── media/Lightbox.tsx, CakeImage.tsx, ImagePlaceholder.tsx
│   └── ui/                       # shadcn primitives + K2KProductCard, FAQAccordion
├── data/menu.ts                  # MenuProduct schema for builder
├── lib/
│   ├── business.ts               # Wendy, phone, ordering model (DATA AUTHORITY)
│   ├── products.ts               # 16 products (DATA AUTHORITY)
│   ├── product-copy.ts           # Descriptions + ingredients
│   ├── preorder-tray.ts          # Cart math + SMS body builder
│   ├── utils.ts                  # cn() Tailwind merge helper
│   └── [legacy files — cleanup candidates]
│       ├── cake-photos.ts        # Spilled Milk legacy
│       ├── k2k-products.ts       # Duplicate — cleanup candidate
│       └── site-data.ts          # Legacy FAQ fragments
├── hooks/usePrefersReducedMotion.ts, use-mobile.tsx
├── styles.css                    # K2K design system tokens + animations
├── router.tsx                    # Router bootstrap
├── server.ts                     # SSR server entry
└── routeTree.gen.ts              # Auto-generated route tree (do not hand-edit)
```

### `public/assets/knead-to-know/` asset folders
```
public/assets/knead-to-know/
├── logo/                         # Primary circular logo PNG
├── icons/                        # Wheat, bread, cookie, pin, envelope, etc.
├── product-cards/                # 16 official product card PNGs (KTK_Product_Card_01–16)
├── photos/                       # Real bakery photography (hero, breads, cookies, bagels)
├── banners/                      # Promo banner strip
├── buttons/                      # UI reference PNGs (rebuilt in CSS, not used as images)
├── cards/                        # UI reference PNGs
├── badges/                       # Section dividers, labels
└── ui/                           # Form field reference
```

### `docs/` documentation
```
docs/
├── WENDY_MOCK_TO_PRODUCTION_MASTER_GUIDE.md   ← THIS FILE
├── FULL_SITE_STATUS_REPORT.md                 ← Page-by-page audit
├── CLIENT_READY_WEBSITE_REQUIREMENTS.md       ← Launch checklist
├── handoffs/CLAUDE_CODE_HANDOFF.md            ← Architecture handoff
└── superpowers/specs/2026-06-22-full-site-revamp-plan.md
```

---

## 7. Live Routes & Navigation

### Primary routes (in navigation)
| Path | Page | Purpose |
|------|------|---------|
| `/` | Homepage | Hero, 3D carousel, trust, how-it-works, teasers |
| `/menu` | Menu | **Interactive menu builder + pre-order tray** |
| `/about` | About | Philosophy, process, values |
| `/faq` | FAQ | Grouped accordion Q&A |
| `/contact` | Contact | Phone CTA, map placeholder, ContactForm |
| `/custom-orders` | Custom Orders | Full order form + product picker |
| `/catering` | Catering | Event tiers + inquiry form |
| `/gallery` | Gallery | Masonry photos + lightbox |
| `/privacy` | Privacy | Policy text |

### Utility routes
| Path | Purpose |
|------|---------|
| `/sitemap.xml` | XML sitemap for search engines |

### Removed orphan routes (301 redirects)
| Old path | Redirects to |
|----------|--------------|
| `/inquiry` | `/custom-orders` |
| `/flavors` | `/menu` |
| `/flavors-pricing` | `/menu` |
| `/featured` | `/menu` |

Configured in: `public/_redirects`

### Header navigation
- **Desktop center:** Menu · About · FAQ · Contact
- **Mobile drawer:** Home + all pages + Pre-Order CTA
- **Always visible:** Phone + Pre-Order Now button

---

## 8. Component Library (K2K Custom)

### Layout
| Component | File | Description |
|-----------|------|-------------|
| `Header` | `layout/Header.tsx` | Sticky nav, logo, wordmark, phone, pre-order |
| `Footer` | `layout/Footer.tsx` | Links, contact, newsletter placeholder |
| `MobileOrderBar` | `layout/MobileOrderBar.tsx` | Sticky mobile Pre-Order + Call |
| `BrandLogo` | `brand/BrandLogo.tsx` | Responsive circular logo sizes |

### Sections
| Component | File | Description |
|-----------|------|-------------|
| `PageHero` | `sections/PageHero.tsx` | Inner-page hero with eyebrow, image, stagger |
| `Section` | `sections/Section.tsx` | Page section wrapper + ScrollReveal |
| `SectionHeading` | `sections/Section.tsx` | Eyebrow + title + intro |
| `SectionDivider` | `sections/SectionDivider.tsx` | Wheat/blue decorative band |
| `CTASection` | `sections/CTASection.tsx` | Bottom conversion band |

### Interactive / Product
| Component | File | Description |
|-----------|------|-------------|
| `Product3DCarousel` | `products/Product3DCarousel.tsx` | Homepage 3D CSS coverflow carousel |
| `InteractiveMenuBuilder` | `menu/InteractiveMenuBuilder.tsx` | Full menu page experience |
| `PreOrderTray` | `menu/PreOrderTray.tsx` | Sidebar (desktop) + drawer (mobile) |
| `MenuBuilderCard` | `menu/MenuBuilderCard.tsx` | Product card with qty + add |
| `ProductDetailDialog` | `menu/ProductDetailDialog.tsx` | Radix dialog for product details |
| `QuantityControl` | `menu/QuantityControl.tsx` | Accessible +/- stepper |
| `K2KProductCard` | `ui/K2KProductCard.tsx` | Standard product card (custom-orders, etc.) |
| `FAQAccordion` | `ui/FAQAccordion.tsx` | Grouped FAQ with smooth expand |
| `ScrollReveal` | `motion/ScrollReveal.tsx` | Intersection Observer fade-up |
| `ContactForm` | `forms/ContactForm.tsx` | Web3Forms contact submission |
| `Lightbox` | `media/Lightbox.tsx` | Gallery fullscreen viewer |

### CSS design classes (`src/styles.css`)
| Class | Purpose |
|-------|---------|
| `k2k-button`, `k2k-button-primary`, `k2k-button-outline` | Pill buttons, black border |
| `k2k-surface`, `k2k-card`, `k2k-product-card` | White containers, 1px #111 border |
| `k2k-nav-link` | Bold black nav text |
| `k2k-wordmark-title`, `k2k-wordmark-tagline` | Logo wordmark (black + blue) |
| `k2k-accent-rail`, `k2k-blue-accent-top` | Coastal blue accent lines |
| `k2k-reveal`, `k2k-stagger-*` | Entrance animations |
| `k2k-3d-carousel-*` | Homepage carousel |
| `k2k-tray-add-pulse` | Menu add-to-tray feedback |

---

## 9. Data Layer & Business Rules

### `src/lib/business.ts` — Single source of truth for business info
```typescript
name: "Knead To Know Sweet & Sour"
owner: "Wendy Mercado"
phone: "(843) 973-0309"
phoneTel: "tel:8439730309"
phoneSms: "sms:8439730309"
orderingModel: "Pre-orders only"
fulfillment: "Freshly baked to order"
city: "Daniel Island, SC"
serviceArea: "Daniel Island and Charleston area"
email: null        // Hidden until Wendy provides
hours: null        // Hidden until Wendy provides
instagramUrl: null // Hidden until Wendy provides
```

### `src/lib/products.ts` — 16 verified menu items

**Sourdough Bread (7)**
| Item | Price |
|------|------:|
| Plain | $12 |
| Rosemary | $15 |
| Rosemary & Roasted Garlic | $15 |
| Cheese & Jalapeño | $15 |
| Chocolate Chip Nutella | $20 |
| Cranberry & Walnut | $15 |
| Olive | $15 |

**Sourdough Cookies — 2 for $5 (5 items)**
Chocolate Chip · Cranberry & Chocolate Chip · Cranberry & Walnut · Mango & Macadamia · Apricot & Mango

**Sourdough Bagels — $3 each (4 items)**
Plain · Everything · Sesame · Poppy

### `src/data/menu.ts` — Builder schema
Derived from `products.ts`. Adds numeric `price` for cart math:
- Cookies: `price: 5` per order unit (= 2 cookies)
- Bagels: `price: 3` each
- Bread: parsed from `$12`–`$20` strings

### `src/lib/preorder-tray.ts` — Cart logic
- `trayReducer` — add/set/remove/clear line items
- `estimatedTotal` — sum of line totals
- `buildSmsHref` — prefilled SMS body for Wendy

---

## 10. Interactive Features Built for Wendy

### Homepage 3D Product Carousel
- 7 featured products rotate in CSS 3D coverflow
- Autoplay every 4s, pause on hover, swipe on mobile
- Keyboard ← → navigation
- Reduced-motion: static single card fallback

### Interactive Menu Builder (`/menu`)
1. **Category tabs:** All · Sourdough Bread · Cookies · Bagels
2. **Search** across names, descriptions, ingredients
3. **Product cards** with quantity selector + "Add to Pre-Order"
4. **Product detail dialog** on card click
5. **Pre-Order Tray:**
   - Desktop: sticky right sidebar
   - Mobile: collapsible bottom bar → expand drawer
6. **Estimated total** with disclaimer
7. **Text Wendy** — opens SMS with formatted order
8. **Call Wendy** — `tel:8439730309`

### Motion & polish (site-wide)
- ScrollReveal on sections and cards
- Icon hover micro-motion (`k2k-icon-hover`)
- Hero ken-burns on homepage photo
- FAQ accordion smooth height
- Contact page phone pulse, map pin pulse, quick-action chips

---

## 11. Forms, SMS, and Phone Ordering

### Web3Forms (needs production key)
| Form | Page | Fields |
|------|------|--------|
| `ContactForm` | `/contact` | Name, email, phone, message |
| Custom Orders form | `/custom-orders` | Products, pickup date/time, contact |
| Catering form | `/catering` | Event details, guest count, contact |

All use: `fetch('https://api.web3forms.com/submit', { ... })`  
Env: `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`

### SMS pre-order (works now — no backend)
Example generated body:
```
Hi Wendy, I would like to place a pre-order with Knead To Know Sweet & Sour.

Order:
- Plain Sourdough Bread x1 — $12
- Chocolate Chip Cookies x1 order / 2 cookies — $5

Estimated Total: $17

Name:
Preferred pickup/order timing:
Notes:
```

Opens via: `sms:8439730309?body=...` (URL-encoded)

### Phone (works now)
All CTAs use `tel:8439730309` → `(843) 973-0309`

---

## 12. Design System

### Brand palette (locked)
| Token | Hex | Usage |
|-------|-----|-------|
| Coastal blue | `#4F7EA8` | Primary buttons, accents, Sweet & Sour tagline |
| Harbor blue | `#7FA7C7` | Secondary, gradients |
| Navy | `#1F3447` | Headings, hover states |
| Ink / black | `#111111` | Body text, borders |
| Cream | `#F8F4ED` | Section backgrounds |
| Wheat | `#C2A878` | Small accents only |
| White | `#FFFFFF` | Cards, surfaces |

### Typography
- **Fraunces** — headings, buttons, wordmark
- **Inter** — body, labels, forms

### Visual rules
- Thin **black borders** on all containers and buttons
- No loud ecommerce styling
- Boutique, calm, coastal editorial layout
- Real photos where available; honest placeholders otherwise

---

## 13. SEO & Accessibility

### SEO
- Per-route `<title>`, `<meta description>`, Open Graph tags
- Canonical URLs via `SITE_URL`
- `/sitemap.xml` with 9 public routes
- `robots.txt` in public/
- JSON-LD `Bakery` schema in `__root.tsx`

### Accessibility
- Focus-visible rings on all interactive elements
- `aria-label` on carousel, tray, quantity controls
- `aria-expanded` on mobile tray drawer
- `aria-live` on carousel active product
- `prefers-reduced-motion` disables animations

---

## 14. What Is Complete vs Placeholder

### ✅ Complete & verified
- All 16 menu items with real prices
- Wendy name + phone number
- Pre-order / fulfillment messaging
- Full visual revamp all pages
- Interactive menu + SMS tray
- 3D homepage carousel
- Gallery with real photos (partial set)
- FAQ content (ordering, pickup, pricing)
- Privacy policy page
- Mobile responsive layout
- Cloudflare deployment

### ⏳ Intentional placeholders (awaiting Wendy)
| Item | Current state |
|------|---------------|
| Email | `null` — not shown |
| Hours | `null` — not shown |
| Instagram / social | `null` — footer links hidden |
| Founder photo | Styled "photo coming soon" slot on About |
| Testimonials | 3 neighbor story cards with honest "coming soon" copy |
| Some product photos | Gradient placeholder with category icon |
| Google Maps embed | SVG map placeholder on Contact |
| Newsletter signup | "Coming soon" in footer |

### ❌ Explicitly NOT included
- Checkout / payments
- User accounts
- Inventory tracking
- Fake reviews or press mentions
- Invented pricing

---

## 15. Wendy Action Checklist

Please review the live site and confirm:

- [ ] Business name displays correctly: **Knead To Know Sweet & Sour**
- [ ] Phone number is correct: **(843) 973-0309**
- [ ] All 16 menu items are listed with correct names
- [ ] All prices are correct ($12–$20 breads, 2/$5 cookies, $3 bagels)
- [ ] "Pre-orders only" / "Freshly baked to order" language is accurate
- [ ] Daniel Island / Charleston service area is correct
- [ ] Photos look like your bakes (flag any that need replacing)
- [ ] Try the menu builder: add items → tap **Text Wendy** — does the SMS look right on your phone?
- [ ] Overall design feels like your bakery brand

**Please send Skyler:**
- Email address
- Business hours (or confirm appointment-only)
- Instagram handle
- Founder photo (optional for launch)
- Any real customer quotes for testimonials
- Approval to go live on custom domain

---

## 16. Operator Launch Checklist (Skyler)

- [x] Merge Revamp #4 to `main`
- [x] Deploy to Cloudflare Pages
- [x] Remove orphan routes + add redirects
- [x] Create this master guide
- [ ] Set `VITE_WEB3FORMS_ACCESS_KEY` in Cloudflare
- [ ] Test all 3 forms deliver to Wendy's inbox
- [ ] Configure custom domain
- [ ] Update `SITE_URL` in `business.ts`
- [ ] Google Search Console + Analytics (optional)
- [ ] Clean up legacy lib files (`cake-photos.ts`, `k2k-products.ts`)

---

## 17. Session History (Revamp #1–#4)

| Phase | Date | Deliverables |
|-------|------|--------------|
| Phase 1 | 2026-06-22 | Skeleton extraction, npm build verified |
| Phase 2 | 2026-06-22 | Spilled Milk → K2K brand conversion |
| Data integration | 2026-06-22 | 16 products, phone, product-copy.ts |
| Revamp #1–#2 | 2026-06-22 | Full-site UI, PageHero, cream palette, hero photo |
| Revamp #3 | 2026-06-22 | Black borders, motion, nav/wordmark polish |
| Revamp #4 | 2026-06-23 | 3D carousel, interactive menu, blue accents, deploy |
| Cleanup | 2026-06-23 | Orphan routes removed, master guide, redirects |

**Latest commit:** `main` branch (post orphan removal)

---

## 18. Agent Handoff Files

| File | Audience | Purpose |
|------|----------|---------|
| `docs/WENDY_MOCK_TO_PRODUCTION_MASTER_GUIDE.md` | Wendy + Skyler | **This document** |
| `docs/FULL_SITE_STATUS_REPORT.md` | Developers | Technical page audit |
| `MEMORY.md` | Grok Build | Session memory |
| `GROK.md` | Grok Build | Build instructions |
| `CODEX.md` | Codex | Deploy + refactor guide |
| `CLAUDE.md` | Claude Code | Entry point |
| `SOURCE_OF_TRUTH.md` | All agents | Brand non-negotiables |
| `docs/CLIENT_READY_WEBSITE_REQUIREMENTS.md` | All | Launch definition |

---

## Quick Links for Wendy

| Resource | URL |
|----------|-----|
| **Live mock site** | https://knead-to-know-website-v2.pages.dev |
| Menu (interactive) | https://knead-to-know-website-v2.pages.dev/menu |
| Custom orders | https://knead-to-know-website-v2.pages.dev/custom-orders |
| Contact | https://knead-to-know-website-v2.pages.dev/contact |

---

*This mock was built with care for Wendy Mercado and the Daniel Island community. No fake data. No checkout. Just a beautiful, honest doorway to order fresh sourdough from a neighbor who bakes it to order.*