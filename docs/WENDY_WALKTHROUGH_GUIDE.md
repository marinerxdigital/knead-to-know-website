# Knead To Know Sweet & Sour — Wendy Review Walkthrough

**Prepared for:** Wendy Mercado  
**Prepared by:** Skyler B. Brown / Grok Build team  
**Date:** June 22, 2026  
**Your live preview:** https://knead-to-know-website-v2.pages.dev  
**Branch:** `main` (Revamp #5 — final client-review polish)

---

## Before You Start

This is your **mock website** — a full preview of how Knead To Know will look and work online. It is **not** a checkout site. Customers browse, build a tray, then **text or call you** to place orders.

**What to use:** Phone or computer browser. Try both if you can — many neighbors will visit on their phone.

**Your verified info on the site:**
- Business name: **Knead To Know Sweet & Sour**
- Owner: **Wendy Mercado**
- Phone: **(843) 973-0309**
- Location: **Daniel Island, SC** (pickup by appointment)
- Model: **Pre-orders only · Freshly baked to order**

---

## Quick 10-Minute Tour

| Step | Page | What to check |
|------|------|---------------|
| 1 | [Homepage](https://knead-to-know-website-v2.pages.dev/) | Hero photo, logo size, 3D product carousel, neighbor stories |
| 2 | [Menu](https://knead-to-know-website-v2.pages.dev/menu) | All 16 items, prices, pre-order tray, Text Wendy button |
| 3 | [About](https://knead-to-know-website-v2.pages.dev/about) | Your story, Daniel Island positioning |
| 4 | [Contact](https://knead-to-know-website-v2.pages.dev/contact) | Phone number, contact form, map area |
| 5 | [FAQ](https://knead-to-know-website-v2.pages.dev/faq) | Ordering answers feel right |
| 6 | Mobile | Open on your phone — nav menu, bottom bar, menu tray |

---

## Page-by-Page Walkthrough

### 1. Homepage — `/`

**URL:** https://knead-to-know-website-v2.pages.dev/

**What you'll see:**
1. **Top navigation** — Logo, wordmark (*Knead To Know* in black, *Sweet & Sour* in coastal blue), links to Menu, About, FAQ, Contact, and a blue **Pre-Order** button.
2. **Hero section** — Your bakery spread photo, large circular logo, headline about Daniel Island sourdough and sweets, and two buttons: **View Menu** and **Our Story**.
3. **3D Product Carousel** — Seven featured bakes rotate in a coverflow-style showcase. Swipe on mobile or use arrow buttons. Dot indicators at the bottom let you jump to a product.
4. **Neighbor Stories** — Three cards with honest “testimonial coming soon” copy (we did not invent reviews). Icons and text are black for readability.
5. **Call-to-action band** — Blue section inviting visitors to browse the menu or reach out.

**What to approve:**
- [ ] Hero photo represents your bakery well
- [ ] Headlines and subtext sound like *you*
- [ ] Featured products in the carousel are the right ones to spotlight
- [ ] Overall feel: boutique coastal bakery, not generic template

**Try this:** Tap **View Menu** → you should land on the interactive menu builder.

---

### 2. Menu — `/menu` ⭐ Most Important Page

**URL:** https://knead-to-know-website-v2.pages.dev/menu

This is your **digital menu + pre-order builder**. There is no online checkout.

**What you'll see:**
1. **Category filters** — Bread, Cookies, Bagels, Pastries, Bakery Boxes, Custom. Tap to filter.
2. **Search bar** — Type a product name to find it quickly.
3. **Product cards** — Each shows name, price, category, and **Add to Tray** (or quantity controls once added).
4. **Pre-Order Tray** (right side on desktop, bottom drawer on phone):
   - Lists items you added with quantities
   - Shows an **estimated total** (bread uses listed price; cookies = $5 per order of 2; bagels = $3 each)
   - **Text Wendy** — Opens your phone’s Messages app with a prefilled order summary
   - **Call Wendy** — Dials (843) 973-0309

**Your 16 menu items (verify every price):**

| Item | Price |
|------|-------|
| Plain Sourdough | $12 |
| Rosemary Sourdough | $15 |
| Rosemary & Roasted Garlic | $15 |
| Cheese & Jalapeño | $15 |
| Chocolate Chip Nutella | $20 |
| Cranberry & Walnut | $15 |
| Everything Sourdough | $15 |
| Chocolate Chip Cookies (2) | $5 |
| Mango Macadamia Cookies (2) | $5 |
| Everything Bagel | $3 |
| Sesame Bagel | $3 |
| Cinnamon Roll | $5 |
| Lemon Blueberry Scone | $5 |
| Banana Bread | $12 |
| Bakery Box (assorted) | $35 |
| Custom Order | Quote on request |

**What to approve:**
- [ ] Every item name matches your physical menu
- [ ] Every price is correct
- [ ] Estimated total math makes sense for typical orders
- [ ] SMS prefill text is something you’d actually want to receive
- [ ] “Pre-orders only” messaging is clear

**Try this (on your phone):**
1. Add Plain Sourdough ×1 and Chocolate Chip Cookies ×1
2. Tap **Text Wendy**
3. Confirm the message lists your items and estimated total
4. You can edit the message before sending — nothing sends automatically

---

### 3. About — `/about`

**URL:** https://knead-to-know-website-v2.pages.dev/about

**What you'll see:**
- Your founder story and Daniel Island home-bakery positioning
- Timeline of how you bake (pre-order → bake fresh → pickup)
- Photo placeholder for a founder image (honest “coming soon” — not a stock photo of a stranger)
- Values section with wheat/blue accent styling

**What to approve:**
- [ ] Story tone feels warm and accurate
- [ ] You’re comfortable with “home bakery on Daniel Island” positioning
- [ ] Ready to send a founder photo when you have one you like

---

### 4. Gallery — `/gallery`

**URL:** https://knead-to-know-website-v2.pages.dev/gallery

**What you'll see:**
- Masonry-style photo grid of real bakes where we have photos
- Placeholder cards for items still needing photography
- Lightbox — tap a photo to view larger

**What to approve:**
- [ ] Existing photos look accurate and appetizing
- [ ] List any products that still need photos

---

### 5. Custom Orders — `/custom-orders`

**URL:** https://knead-to-know-website-v2.pages.dev/custom-orders

**What you'll see:**
- Step-by-step explanation of how custom orders work
- Inquiry form: occasion, date, servings, flavors, dietary notes, contact info
- Form submits via Web3Forms (needs operator setup before emails reach you — see checklist below)

**What to approve:**
- [ ] Form fields ask the right questions
- [ ] Custom order language matches how you actually work with clients

---

### 6. Catering — `/catering`

**URL:** https://knead-to-know-website-v2.pages.dev/catering

**What you'll see:**
- Service tiers (Popular, Gifting, Bespoke-style groupings)
- How-it-works timeline (01 → 02 → 03)
- Catering inquiry form (same Web3Forms backend)

**What to approve:**
- [ ] Service descriptions match what you offer for events and gifting
- [ ] Catering form captures what you need to quote an event

---

### 7. FAQ — `/faq`

**URL:** https://knead-to-know-website-v2.pages.dev/faq

**What you'll see:**
- Accordion Q&A grouped by topic (Ordering, Pickup, Pricing, etc.)
- Quick links to Custom Orders, Catering, Contact, Menu

**What to approve:**
- [ ] Answers match how you actually handle orders and pickup
- [ ] Nothing promises same-day or walk-in if you don’t offer that

---

### 8. Contact — `/contact`

**URL:** https://knead-to-know-website-v2.pages.dev/contact

**What you'll see:**
- Large clickable phone number: **(843) 973-0309**
- Quick-action chips (Custom Orders, Menu, Catering, FAQ)
- Contact form (name, email, phone, message)
- Map placeholder for Daniel Island pickup area
- “What happens next” steps after someone reaches out

**What to approve:**
- [ ] Phone number displays correctly and taps to call on mobile
- [ ] Contact form fields are what you want
- [ ] Pickup-by-appointment language is accurate

**Note:** Email, hours, and Instagram are **hidden** until you provide them — we did not guess.

---

### 9. Privacy — `/privacy`

**URL:** https://knead-to-know-website-v2.pages.dev/privacy

Standard privacy policy for form submissions and site analytics. Readable layout for legal peace of mind.

---

## Mobile Experience Checklist

On your phone, verify:

- [ ] **Hamburger menu** opens smoothly; links are easy to tap
- [ ] **Pre-Order** button in header works
- [ ] **Bottom bar** (Text / Call) appears on most pages — hidden on Menu (menu has its own tray bar)
- [ ] **Menu tray** slides up from bottom; doesn’t cover content awkwardly
- [ ] **No sideways scrolling** — everything fits the screen width
- [ ] **Buttons** feel big enough to tap (minimum 44px touch targets)

---

## Design Notes (Revamp #5)

**Color palette — Harbor Deep coastal blue:**
| Color | Hex | Where you see it |
|-------|-----|------------------|
| Primary blue | `#3B6E91` | Buttons, Sweet & Sour tagline, accents |
| Harbor blue | `#6A9EC0` | Soft gradients, secondary accents |
| Navy | `#1F3447` | Headings, hover text |
| Ink black | `#111111` | Text, borders on every card and button |
| Cream | `#F8F4ED` | Warm section backgrounds |
| Wheat | `#C2A878` | Small badge accents only |

**Visual rules:**
- Thin **black borders** on cards, buttons, and containers
- **Fraunces** font for headings; **Inter** for body text
- Calm, boutique layout — not loud ecommerce

---

## What Still Needs You (Before True Launch)

| Item | Status | Your action |
|------|--------|-------------|
| Menu prices | On site — please verify | Confirm or send corrections |
| Phone number | Live | Confirm (843) 973-0309 |
| Business email | Not shown yet | Send when ready |
| Hours | Not shown yet | Send hours or confirm “by appointment only” |
| Instagram | Not shown yet | Send handle/URL |
| Founder photo | Placeholder | Send photo you approve |
| Real testimonials | Placeholder cards | Send 1–3 neighbor quotes (optional) |
| Missing product photos | Some placeholders | Send photos for remaining items |
| Contact/Catering forms → your inbox | Needs operator setup | Skyler sets Web3Forms key |
| Custom domain | Preview URL only | Choose domain after you approve design |

---

## How to Give Feedback

Send Skyler:
1. **Yes / No** on overall design direction
2. **Price or menu corrections** (item name → correct price)
3. **Copy changes** (exact wording you prefer)
4. **Photos** (founder, products, hero alternatives)
5. **Anything that feels “not me”** — we’ll adjust

**Do not worry about:** technical jargon, code, or hosting details — that’s handled on the operator side.

---

## One-Paragraph Summary for Wendy

> *This is your Knead To Know Sweet & Sour website preview. Browse the menu, add items to a tray, and tap Text Wendy to see how a neighbor would place a pre-order. Every price and product name came from your physical menu. The site looks like a boutique Daniel Island bakery — black-bordered cards, coastal blue accents, your real hero photo — and it works on phones. A few things are intentionally waiting on you (email, hours, Instagram, founder photo, real testimonials). Review the live link, try the menu on your phone, and send Skyler any corrections. Once you approve, we wire up forms and your custom domain for launch.*

---

**Live site:** https://knead-to-know-website-v2.pages.dev  
**Technical reference:** `docs/WENDY_MOCK_TO_PRODUCTION_MASTER_GUIDE.md`