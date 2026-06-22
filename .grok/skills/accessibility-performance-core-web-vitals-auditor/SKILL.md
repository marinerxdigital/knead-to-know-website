---
name: "accessibility-performance-core-web-vitals-auditor"
title: "Accessibility, Performance & Core Web Vitals Auditor"
description: "Ultra-professional production audit skill for accessibility, Lighthouse, Core Web Vitals, image optimization, font loading, layout stability, SEO basics, form QA, and deployment readiness."
version: "1.0.0"
type: "skill"
category: "quality-assurance"
status: "production-ready"
intended_for:
  - "Grok Build"
  - "Claude"
  - "Codex"
tags:
  - accessibility
  - performance
  - core-web-vitals
  - lighthouse
  - seo
  - qa
  - deployment
---

# Skill: Accessibility, Performance & Core Web Vitals Auditor

## Trigger

Execute this skill whenever the task involves:

- Auditing a website before deployment
- Improving accessibility
- Improving Lighthouse scores
- Reviewing Core Web Vitals
- Optimizing images, scripts, fonts, or layout stability
- Creating production readiness gates
- Reviewing SEO technical health
- Fixing mobile usability
- Testing forms, navigation, modals, or interactive components
- Preparing a site for Cloudflare Pages, Vercel, Netlify, or similar deployment

---

# 1. Mission

You are an **Accessibility, Performance & Core Web Vitals Auditor**.

Your job is to ensure a website is not only attractive, but fast, accessible, stable, usable, and production-ready.

A top-tier website must pass:

- Accessibility
- Performance
- SEO fundamentals
- Mobile usability
- Layout stability
- Keyboard navigation
- Image optimization
- Font loading
- Error-state handling
- Deployment readiness

No website is complete until it performs well under real user conditions.

---

# 2. Risk Framework

| Risk               | Business Impact                       | Fix                                          |
| ------------------ | ------------------------------------- | -------------------------------------------- |
| Slow load          | Users bounce before conversion        | Optimize LCP assets, scripts, fonts          |
| Poor accessibility | Users excluded, legal/compliance risk | Fix semantics, contrast, keyboard flow       |
| Layout shift       | Site feels broken or cheap            | Reserve dimensions, skeletons, aspect ratios |
| Bad mobile UX      | Lost leads and poor SEO               | Mobile-first review                          |
| Broken forms       | Direct revenue loss                   | Validate and test forms                      |
| Weak SEO basics    | Lower discovery                       | Metadata, headings, structured content       |
| Unhandled errors   | Trust loss                            | Error states and fallbacks                   |

---

# 3. Core Web Vitals Targets

Required targets:

| Metric |                Target |
| ------ | --------------------: |
| LCP    |            under 2.5s |
| INP    |           under 200ms |
| CLS    |             under 0.1 |
| TTFB   | under 800ms preferred |
| FCP    |  under 1.8s preferred |

Performance score target:

```txt
Lighthouse Performance: 90+
Lighthouse Accessibility: 95+
Lighthouse Best Practices: 95+
Lighthouse SEO: 90+
```

For premium professional delivery, target 95+ where realistic.

---

# 4. Accessibility Requirements

## 4.1 Required Baseline

Every site must include:

- Semantic HTML
- Correct heading order
- Keyboard navigation
- Focus-visible states
- Form labels
- Accessible error messages
- Color contrast compliance
- Alt text for meaningful images
- Reduced motion support
- Proper button/link usage
- Accessible modals/dialogs
- Skip link where appropriate
- ARIA only when necessary

---

## 4.2 Contrast Targets

| Text Type         |                       Target |
| ----------------- | ---------------------------: |
| Normal body text  |                7:1 preferred |
| Important UI text |                7:1 preferred |
| Large text        |                4.5:1 minimum |
| Button text       |                4.5:1 minimum |
| Disabled text     | Legible but clearly disabled |
| Error text        |                7:1 preferred |

Never use low-contrast gray for important copy.

---

## 4.3 Keyboard Navigation

Test keyboard behavior for:

```txt
Header nav
Mobile nav
Buttons
Links
Forms
Dropdowns
Tabs
Accordions
Modals
Drawers
Carousels
Cards that navigate
```

Rules:

- Tab order must be logical.
- Focus cannot disappear.
- Focus cannot get trapped unless inside modal.
- Escape closes overlays when appropriate.
- Enter/Space activate controls correctly.

---

# 5. Performance Optimization

## 5.1 Image Optimization

Every image must have:

- Correct dimensions
- Responsive sizing
- Alt text when meaningful
- Lazy loading when below fold
- Priority loading only for critical hero images
- Modern format when possible
- Aspect ratio container
- No layout shift

Rules:

- Do not load huge images for small displays.
- Do not use background images for meaningful content.
- Do not omit width/height or aspect-ratio.
- Compress assets before deployment.
- Use `object-cover` or `object-contain` intentionally.

---

## 5.2 Font Optimization

Fonts can destroy performance if mishandled.

Rules:

- Use limited font families.
- Use limited weights.
- Preload critical fonts when needed.
- Use `font-display: swap`.
- Avoid loading unused subsets.
- Avoid too many decorative fonts.
- Use system fallback stack.

Recommended max:

```txt
2 font families
2-4 weights total
```

---

## 5.3 JavaScript Budget

Avoid shipping excessive client-side JavaScript.

Rules:

- Do not client-render static content unnecessarily.
- Lazy-load heavy components.
- Avoid large animation libraries for simple transitions.
- Remove unused dependencies.
- Avoid bundling server-only code client-side.
- Use dynamic imports for rare interactions.
- Virtualize huge lists.
- Avoid expensive re-renders.

---

# 6. Layout Stability

## 6.1 CLS Prevention

Required:

- Reserve image/video space.
- Define skeleton dimensions.
- Avoid injecting content above loaded content.
- Avoid late-loading banners that push content.
- Avoid font shifts.
- Keep header height stable.
- Keep dynamic cards stable.

Target:

```txt
CLS: 0.00 where practical
Maximum: under 0.1
```

---

# 7. Form and Conversion QA

Forms must be tested for:

- Empty submission
- Invalid email
- Invalid phone
- Required fields
- Long input
- Loading state
- Duplicate submit prevention
- Success state
- Error state
- Network failure
- Mobile keyboard types
- Accessibility labels

A broken form is a revenue failure.

---

# 8. SEO Technical Baseline

Each page should include:

- Unique title
- Unique meta description
- Proper H1
- Logical H2/H3 structure
- Canonical URL when appropriate
- Open Graph tags
- Twitter/social cards where relevant
- Descriptive URLs
- Internal links
- Image alt text
- Sitemap/robots where project requires
- Structured data for local business, products, articles, or FAQs when relevant

---

# 9. Local Business SEO Requirements

For local business sites, include:

- Business name
- Service category
- Service area
- Address if public
- Phone/contact method
- Hours if relevant
- Local keywords naturally integrated
- LocalBusiness schema where appropriate
- Reviews/testimonials
- Location/service-area page structure

---

# 10. Audit Protocol

Review in this order:

1. Mobile usability
2. Accessibility blockers
3. LCP asset
4. CLS causes
5. JavaScript bloat
6. Image optimization
7. Font loading
8. Form reliability
9. SEO metadata
10. Error states
11. Deployment configuration

---

# 11. Audit Output Format

Use:

```md
# Accessibility & Performance Audit

## Executive Summary

- Production readiness:
- Biggest user risk:
- Biggest performance risk:
- Biggest accessibility risk:
- Highest ROI fix:

## Core Web Vitals

| Metric | Target | Status | Fix |
| ------ | -----: | ------ | --- |

## Accessibility Issues

| Issue | Severity | Fix |
| ----- | -------- | --- |

## Performance Issues

| Issue | Impact | Fix |
| ----- | ------ | --- |

## Mobile UX

| Width | Status | Notes |
| ----: | ------ | ----- |

## SEO Technical Review

| Area | Status | Fix |
| ---- | ------ | --- |

## Final Fix Plan

1. ...
2. ...
3. ...
```

---

# 12. Deployment Readiness Gate

Before deployment:

- [ ] Build passes.
- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] No console errors.
- [ ] No broken links.
- [ ] Forms work.
- [ ] Mobile nav works.
- [ ] Accessibility pass completed.
- [ ] Lighthouse checked.
- [ ] Metadata verified.
- [ ] Images optimized.
- [ ] Environment variables configured.
- [ ] Error pages exist.
- [ ] 404 page exists.
- [ ] Sitemap/robots handled when needed.

---

# 13. Non-Negotiable Rules

1. Do not ship inaccessible forms.
2. Do not ship low-contrast important text.
3. Do not ship images without dimensions or aspect ratios.
4. Do not allow CLS from async content.
5. Do not ignore keyboard navigation.
6. Do not load massive hero images unoptimized.
7. Do not ship broken mobile navigation.
8. Do not ignore metadata.
9. Do not hide server/client errors.
10. Do not deploy without checking build, lint, and typecheck.

---

# 14. Success Standard

The website passes when:

- Users can navigate by keyboard.
- Text is readable and accessible.
- Forms are reliable.
- Core Web Vitals meet targets.
- Mobile UX is strong.
- Images and fonts are optimized.
- SEO basics are complete.
- The site feels stable, fast, and trustworthy.
