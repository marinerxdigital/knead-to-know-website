# Client Deliverables — Knead To Know Sweet & Sour

**Internal tracking document for Wendy Mercado deliverables before final production launch.**  
**Last updated:** June 22, 2026

---

## Confirmed information (verified — do not mark as missing)

| Field           | Value                             | Status    |
| --------------- | --------------------------------- | --------- |
| Business name   | Knead To Know Sweet & Sour        | Confirmed |
| Owner           | Wendy Mercado                     | Confirmed |
| Established     | 2026                              | Confirmed |
| Phone           | (843) 973-0309                    | Confirmed |
| Phone link      | `tel:8439730309`                  | Confirmed |
| Ordering model  | Pre-orders only                   | Confirmed |
| Fulfillment     | Freshly baked to order            | Confirmed |
| Customer action | DM or call to place your order    | Confirmed |
| Menu pricing    | Verified from physical menu photo | Confirmed |

### Verified menu pricing

**Sourdough Bread**

| Item                      | Price |
| ------------------------- | ----: |
| Plain                     |   $12 |
| Rosemary                  |   $15 |
| Rosemary & Roasted Garlic |   $15 |
| Cheese & Jalapeño         |   $15 |
| Chocolate Chip Nutella    |   $20 |
| Cranberry & Walnut        |   $15 |
| Olive                     |   $15 |

**Sourdough Cookies** — 2 for $5

- Chocolate Chip
- Cranberry & Chocolate Chip
- Cranberry & Walnut
- Mango & Macadamia
- Apricot & Mango

**Sourdough Bagels** — $3 each

- Plain
- Everything
- Sesame
- Poppy

---

## Still needed from Wendy (production launch blockers)

Do **not** publish fake values for any item below. Do **not** use AI-generated founder photos or stock photos pretending to be Wendy.

### 1. Business email — Missing

**Needed for:**

- Contact form routing
- Footer contact information
- Inquiry handling
- Professional credibility

**Rule:** Do not invent an email address. Do not use placeholder emails on the client-facing site.

---

### 2. Business hours — Missing

**Needed for:**

- Contact section
- Footer
- Local SEO
- Customer expectations

**Acceptable future formats:**

- Full weekly hours
- Pickup/order windows
- "Orders accepted daily by phone, text, or DM"
- "Pre-order availability varies weekly"

**Rule:** Do not invent hours. Do not place fake hours on the live website.

---

### 3. Social media links — Missing

**Needed for:**

- Footer
- Contact section
- Social proof
- Future marketing

**Potential platforms:** Instagram, Facebook, TikTok, Pinterest

**Rule:** Do not create fake links. Do not add broken placeholder social URLs.

---

### 4. Founder story / About Wendy — Missing

**Needed for:**

- About section
- Homepage trust section
- Local brand story
- Search-friendly content

**Need from Wendy:**

- Why she started baking
- How Knead To Know Sweet & Sour began
- What makes her sourdough special
- Connection to Daniel Island / Charleston area
- Baking philosophy
- Family or personal inspiration, if she wants included

**Target length:** 150–400 words

**Rule:** Do not invent Wendy's biography. Use only the conservative safe About copy until she provides her story.

---

### 5. Founder photo — Missing

**Needed for:**

- About section
- Homepage trust section
- Local credibility

**Preferred assets:**

- Professional headshot
- Kitchen/baking photo
- Lifestyle portrait
- High-resolution image

**Rule:** Do not use fake founder photos. Do not use AI-generated Wendy photos. Do not use stock photos pretending to be Wendy.

---

## Production launch notes

- **Pricing is no longer missing** — verified from physical menu photo.
- **Phone number is no longer missing** — (843) 973-0309.
- **Web3Forms access key** — set `VITE_WEB3FORMS_ACCESS_KEY` in Cloudflare Pages build env before forms go live in production.
- **Custom domain** — update `SITE_URL` in `src/lib/business.ts` when final domain is assigned.

---

## Developer checklist before client handoff

- [x] Verified menu pricing in `src/lib/products.ts`
- [x] Verified phone in `src/lib/business.ts` with `tel:8439730309` links
- [x] No fake email, hours, or social links on public pages
- [x] No invented founder biography
- [ ] Wendy provides business email
- [ ] Wendy provides hours or order-window copy
- [ ] Wendy provides social media URLs
- [ ] Wendy provides founder story (150–400 words)
- [ ] Wendy provides founder photo
- [ ] `npm run build` passes
- [ ] Cloudflare Pages env configured for forms
