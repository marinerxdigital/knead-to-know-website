---
name: design-system
description: Use when building, styling, or restyling any page, section, or component — enforces the MARINERX visual conventions (tokens, components, spacing, type, states) so the product feels like one premium app instead of a patchwork. Not for content/copy decisions, data modeling, or backend logic.
---

# Design System

Every surface should feel like one premium, maritime product — the polish of Linear / Stripe, the clarity of Duolingo. Apply these rules to anything you build or restyle. All concrete values live in Project Knowledge; use them, never invent.

## Tokens
- Color, spacing, radius, shadow, and type come only from the theme tokens in Project Knowledge. If a value isn't a token, don't use it.
- Navy is the brand; teal is the single primary action color; gold is reserved for premium / achievement accents only. Never let a second accent compete within one section.
- No default AI blues, greens, or grays. No pure black or pure white.

## Layout & type
- Mobile-first: lay out for 375px, then scale to 768 / 1280. Keep spacing generous and consistent.
- Headings in Sora, body in Inter — no third font. No more than two heading sizes per screen.
- Body text must be readable on a phone without zooming.

## Components
- Reuse the shared primitives (Button, Card, Input, etc.). Never build a second version of something that already exists.
- New components inherit the family: same corner radius, same subtle shadow weight, same hover/transition behavior (150–200ms ease-out).
- Cards: white, `rounded-2xl`, soft shadow, 24px padding. Buttons: 44px minimum touch target.

## States & accessibility
- Every interactive or data-driven view has visible focus and explicit loading / empty / error states.
- Maintain AA contrast; respect `prefers-reduced-motion`.

## Avoid
- Hardcoded hex / spacing / radius values instead of tokens.
- Mixing rounded and sharp corners, or heavy / floaty drop shadows.
- Skeuomorphic nautical kitsch or dense legacy-software tables.
- A second competing accent color in a single view.
