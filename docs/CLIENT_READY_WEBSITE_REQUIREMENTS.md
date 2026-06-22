# Client-Ready Website Requirements

## Knead To Know Bakery

## Client-Ready Definition

The Knead To Know website is "client-ready" when Wendy Mercado can view every page of the live site and find nothing that looks unfinished, generic, or factually wrong about her own business. Concretely: no bracketed placeholder text (`[INSERT ...]`), her name and story appear somewhere, every product has real pricing or intentional "ask" copy, and she has a working way to actually receive order inquiries. Visual polish is already largely there — "client-ready" right now is blocked almost entirely by missing real business content, not by design or code quality.

## Business Goals

The website must help Knead To Know:

- Look legitimate — a real business, not a template
- Build local trust with Daniel Island and Charleston-area customers
- Showcase bakery products clearly, with accurate photography and pricing
- Explain how ordering works (pre-order, custom order, catering) without ambiguity
- Generate inquiries through working contact and custom-order forms
- Rank locally on Google for "Daniel Island bakery" and related searches
- Feel premium enough to justify boutique, small-batch pricing

## Customer Journey

1. Visitor lands on the homepage.
2. Within 5 seconds, understands: this is Knead To Know, a small-batch sourdough bakery on Daniel Island, SC.
3. Sees appealing, accurately-photographed products with real prices.
4. Trusts the bakery — sees Wendy's name/story, real contact info, and clear local positioning.
5. Understands how to order — Menu for browsing, Custom Orders for pre-orders/special requests, Catering for events.
6. Contacts Wendy or submits an inquiry through a form that actually reaches her, and knows when to expect a reply.

Today, step 4 fails (no owner identity, no real contact info) and step 6 is incomplete (the Custom Orders form does not yet submit anywhere — see Priority 3 in the improvement plan).

## Required Website Sections

| Section                            | Why it matters                                       |
| ---------------------------------- | ---------------------------------------------------- |
| Hero with clear value prop         | First-impression credibility; already strong         |
| Local trust strip                  | Establishes "real, local, small-batch" immediately   |
| Menu/product grid with real prices | The actual commercial core of the site               |
| About / founder story              | Builds the personal trust a home bakery depends on   |
| Custom Orders form                 | Primary conversion path for most real orders         |
| Catering page                      | Captures higher-value event/office orders            |
| Gallery                            | Builds appetite and proves the bakery is active      |
| FAQ                                | Reduces friction/support load for common questions   |
| Contact page with real info        | Catch-all trust + lowest-friction reach-out path     |
| Footer with real business details  | Persistent trust signal and navigation on every page |

## Required Trust Signals

- Local Daniel Island positioning — **already present and strong**
- Owner/founder story (Wendy Mercado, named) — **missing, required**
- Product quality language ("small-batch," "naturally leavened") — **already present and strong**
- Ordering expectations (lead time, response time) — **partially present** (exists on Custom Orders success screen, missing from Contact page)
- Fresh/small-batch messaging — **already present and strong**
- Photos or believable branded visuals — **partially present**, undermined by mismatched product photography
- Contact clarity — **missing, required** (all fields are placeholders)
- Social proof / testimonial structure — **not present**; build the structure now, populate honestly once real reviews exist (do not fabricate)

## Required Content (to collect from Wendy before launch)

- [ ] Real product photos for all 16 signature items (or confirmed plan to use "Photo coming soon" honestly for unphotographed items)
- [ ] Final menu — confirm the 16 products in `products.ts` match what she's actually selling
- [ ] Pricing for all 16 products (or price ranges)
- [ ] Ordering policies (minimum order size, deposit requirements for large/event orders, cancellation policy)
- [ ] Lead time expectations (the FAQ currently states "24 hours" for everyday items and "48 hours" for larger orders — confirm these are accurate)
- [ ] Pickup details (where, when, by appointment?) and delivery details (radius, fee, minimum order)
- [ ] Allergy/dietary disclaimer language (confirm current "we bake with wheat, dairy, and nuts" language is accurate and complete)
- [ ] Preferred contact method and real contact info: phone, email, address (or "pickup by appointment, Daniel Island")
- [ ] Hours of operation (or "by appointment" if there are no fixed hours)
- [ ] Real Instagram handle/URL, and Facebook URL if applicable
- [ ] Google Maps / pickup location link
- [ ] Owner bio / founder story in Wendy's own words
- [ ] A real photo of Wendy (baking, in the kitchen, or a simple portrait) — or explicit sign-off to use a styled placeholder until one exists
- [ ] Testimonials, once available (do not fabricate placeholders that look like real quotes)
- [ ] Confirmation of the production domain name to replace the current `.pages.dev` preview URL
- [ ] Decision on how Custom Orders/Contact form submissions should actually reach her (email forwarding service, dedicated inbox, etc.) so the form can be wired to a real backend

## Launch Readiness Checklist

- [ ] Zero `[INSERT ...]` or bracketed placeholder strings anywhere on the live site
- [ ] All 16 products have real prices or deliberate "ask for pricing" copy
- [ ] Wendy Mercado is named and has a real or intentionally-styled photo on the About page
- [ ] No product shows a photo mismatched to a different product
- [ ] `BUSINESS` object in `src/lib/business.ts` contains 100% real data
- [ ] `SITE_URL` points to the real production domain
- [ ] Custom Orders and Contact forms actually deliver submissions somewhere Wendy will see them
- [ ] Desktop nav displays correctly at 1024px+ (not just 1280px+)
- [ ] `LocalBusiness`/`Bakery` JSON-LD structured data added once real business data exists
- [ ] Sitemap and robots.txt verified reachable on the production domain
- [ ] Orphaned old-brand assets (`alexandra-*`, `cake-*`) removed
- [ ] Final full-site read-through by Skyler and Wendy together, page by page, before going live
