# Full-Site Breathtaking Revamp — Superagent Plan

**Branch:** `ui-revamp-2026-06-22`  
**Status:** Ready for client review (not merged to `main`)

## Superagent brainstorm consensus

### Design pillars (all pages)

1. **PageHero** — cream wash, wheat scoring, optional side/background photo
2. **ScrollReveal** — sections and cards fade up on scroll
3. **k2k-surface / k2k-hover-lift** — elevated cards with tactile hover
4. **CTASection** — asymmetric closing band on every major page
5. **BrandLogo** — consistent scale: mobile 52px → desktop 84px header, 128px hero
6. **Motion** — ken-burns hero, breathe icons, line-grow dividers (respects reduced-motion)
7. **Buttons** — `k2k-button` with thin black border on all CTAs

### Page ownership (4 waves)

| Wave | Agent | Pages / files |
|------|-------|----------------|
| 1 | Shell | Header, Footer, PageHero, BrandLogo, __root 404/error, MobileOrderBar |
| 2 | Story | Home, About, Contact, FAQ |
| 3 | Commerce | Menu, Custom Orders, Catering, product copy |
| 4 | Media | Gallery, Privacy, forms polish |

### Logo scale tokens (`BrandLogo`)

| Variant | Mobile | Desktop (xl) |
|---------|--------|----------------|
| header | 52px | 84px |
| header-compact (scrolled) | 44px | 56px |
| footer | 64px | 80px |
| hero | 80px | 128px |

### Still from Wendy (placeholders only)

- Testimonials, Instagram link, email, hours, founder photo

### Approval gate

Client reviews `ui-revamp-2026-06-22` → approve → merge to `main` → deploy preview