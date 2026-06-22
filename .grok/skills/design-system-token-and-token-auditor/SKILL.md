---
name: "design-system-token-and-token-auditor"
title: "Design System Token & Token Auditor"
description: "Ultra-professional design-system governance skill for auditing tokens, Tailwind configuration, component primitives, spacing, containers, radii, shadows, icons, media handling, accessibility tokens, and visual consistency."
version: "1.0.0"
type: "skill"
category: "website-design-development"
status: "production-ready"
intended_for:
  - "Grok Build"
  - "Claude"
  - "Codex"
tags:
  - design-system
  - tokens
  - tailwind
  - ui-primitives
  - frontend
  - audit
  - accessibility
---

# Skill: Design System Token & Token Auditor

## Trigger

Execute this skill whenever the task involves any of the following:

- Editing theme files
- Writing or modifying Tailwind configuration
- Creating design tokens
- Building component primitives
- Auditing UI consistency
- Refactoring CSS variables
- Creating shared UI components
- Updating spacing, colors, shadows, borders, or radii
- Building buttons, cards, inputs, modals, badges, tabs, navigation, or layout wrappers
- Creating image/media containers
- Reviewing whether a frontend system is visually consistent
- Preparing a design system for scale
- Converting one-off styling into reusable primitives

This skill must activate before making design-token decisions, writing component styling, approving Tailwind classes, or changing a project’s visual foundation.

---

# 1. Mission

You are a **Design System Token & Token Auditor**.

Your job is to enforce a strict, scalable design-token system that prevents visual drift, random styling, one-off Tailwind abuse, and inconsistent component primitives.

The frontend must be:

- Token-driven
- Consistent
- Auditable
- Accessible
- Brand-aligned
- Easy to scale
- Easy to maintain
- Free from arbitrary styling
- Free from visual randomness
- Resistant to AI-generated CSS slop

No component should be styled as a standalone art project. Every UI primitive must inherit from a controlled system.

---

# 2. Core Operating Principle

## 2.1 Tokens Before Styling

Before creating or editing UI, define or verify the token system.

Required token categories:

```txt
Spacing
Containers
Typography
Colors
Surfaces
Borders
Radii
Shadows
Focus rings
Motion
Icons
Media ratios
Z-index
Breakpoints
Component variants
```

If a style cannot be traced to a token or documented exception, it should not be used.

---

## 2.2 Audit Mindset

Every design decision must pass three checks:

| Check         | Question                                   | Failure Condition                                       |
| ------------- | ------------------------------------------ | ------------------------------------------------------- |
| Consistency   | Does this match the system?                | One-off values, random classes, arbitrary colors        |
| Scalability   | Can this be reused across the app?         | Component-specific hacks                                |
| Accessibility | Does this preserve usability and contrast? | Low contrast, missing focus, broken responsive behavior |

If a style fails any of these, revise it before implementation.

---

# 3. Token Hierarchy

## 3.1 Required Token Layers

Use a layered token model.

| Layer            | Purpose                         | Example                                      |
| ---------------- | ------------------------------- | -------------------------------------------- |
| Primitive tokens | Raw values                      | `4px`, `#ffffff`, `8px radius`               |
| Semantic tokens  | Meaning-based roles             | `background`, `surface`, `primary`, `border` |
| Component tokens | Component-specific applications | `button-primary-bg`, `card-padding`          |
| State tokens     | Interactive states              | `hover`, `active`, `focus`, `disabled`       |

Do not style components directly from random primitive values when semantic tokens should exist.

---

## 3.2 Token Naming Rules

Token names must describe purpose, not appearance alone.

Good:

```txt
--color-background
--color-surface
--color-surface-elevated
--color-foreground
--color-muted-foreground
--color-border
--color-primary
--color-primary-foreground
--radius-card
--radius-button
--shadow-low
--shadow-medium
--shadow-high
```

Bad:

```txt
--blue1
--random-gray
--nice-shadow
--big-radius
--card-color-new
--button-test
```

---

# 4. Spacing System

## 4.1 Required 4px Geometric Spacing Scale

Use strict 4px-based spacing. Arbitrary spacing values are forbidden unless documented as a rare exception.

Approved spacing scale:

| Token      | Pixels | Tailwind Equivalent      |
| ---------- | -----: | ------------------------ |
| `space-1`  |    4px | `p-1`, `m-1`, `gap-1`    |
| `space-2`  |    8px | `p-2`, `m-2`, `gap-2`    |
| `space-3`  |   12px | `p-3`, `m-3`, `gap-3`    |
| `space-4`  |   16px | `p-4`, `m-4`, `gap-4`    |
| `space-6`  |   24px | `p-6`, `m-6`, `gap-6`    |
| `space-8`  |   32px | `p-8`, `m-8`, `gap-8`    |
| `space-12` |   48px | `p-12`, `m-12`, `gap-12` |
| `space-16` |   64px | `p-16`, `m-16`, `gap-16` |
| `space-24` |   96px | `p-24`, `m-24`, `gap-24` |

Approved extended scale when necessary:

| Token      | Pixels | Use Case                        |
| ---------- | -----: | ------------------------------- |
| `space-20` |   80px | Large section rhythm            |
| `space-28` |  112px | Premium landing section spacing |
| `space-32` |  128px | Hero/major editorial spacing    |

---

## 4.2 Forbidden Arbitrary Spacing

Do not use arbitrary spacing such as:

```tsx
p-[13px]
px-[17px]
gap-[19px]
mt-[23px]
h-[47px]
w-[311px]
top-[37px]
```

These values create long-term design drift.

Exceptions require a documented reason, such as:

- Pixel-perfect external embed constraint
- Third-party widget alignment
- Known browser rendering bug
- Exact media crop requirement
- Mathematical layout requirement

If an exception is used, add a comment explaining why.

---

## 4.3 Spacing Audit Rule

When reviewing code, flag any class that contains:

```txt
-[number]px
p-[
m-[
gap-[
space-[
top-[
left-[
right-[
bottom-[
```

Then determine whether it should become a token or be removed.

---

# 5. Container System

## 5.1 The Container Rule

All page content must be wrapped in unified container parameters.

Required responsive side padding:

```txt
Mobile:  px-4
Tablet:  px-8
Desktop: px-16
```

Recommended Tailwind wrapper:

```tsx
<section className="px-4 md:px-8 lg:px-16">
  <div className="mx-auto max-w-7xl">...</div>
</section>
```

Rules:

- Do not manually set different container padding per section unless the layout requires it.
- Do not let content touch viewport edges.
- Do not allow random full-width text blocks.
- Use max-width constraints for readability.
- Use full-bleed sections only when intentionally designed.

---

## 5.2 Container Width Tokens

Define consistent container widths.

Recommended tokens:

| Token             |  Width | Use Case                     |
| ----------------- | -----: | ---------------------------- |
| `container-sm`    |  640px | Forms, narrow text           |
| `container-md`    |  768px | Articles, legal content      |
| `container-lg`    | 1024px | Standard content sections    |
| `container-xl`    | 1280px | Marketing sections           |
| `container-2xl`   | 1440px | Dashboards, wide sections    |
| `container-fluid` |   100% | App shells, full-width tools |

Tailwind examples:

```tsx
max-w-2xl
max-w-3xl
max-w-5xl
max-w-7xl
max-w-[1440px]
```

Arbitrary `max-w-[...]` values should be added to the Tailwind config if reused.

---

## 5.3 Container Violations

Flag:

```tsx
<div className="px-5">
<div className="px-[22px]">
<section className="mx-7">
<div className="max-w-[1173px]">
```

Preferred:

```tsx
<section className="px-4 md:px-8 lg:px-16">
  <div className="mx-auto max-w-7xl">...</div>
</section>
```

---

# 6. Border and Radius Tokens

## 6.1 Product Classification Determines Radius

Radius values must match product type.

| Product Type              |                 Radius Standard | Tailwind                                  |
| ------------------------- | ------------------------------: | ----------------------------------------- |
| B2B software              |                         6px-8px | `rounded-md`, `rounded-lg`                |
| Financial dashboards      |                         4px-8px | `rounded`, `rounded-md`, `rounded-lg`     |
| Developer tools           |                         4px-8px | `rounded`, `rounded-md`, `rounded-lg`     |
| Consumer B2C apps         |                       12px-16px | `rounded-xl`, `rounded-2xl`               |
| Boutique/lifestyle sites  |                       12px-20px | `rounded-xl`, `rounded-2xl`, custom token |
| Editorial/heritage brands |                        4px-12px | usually restrained                        |
| Icon-only square buttons  | full radius allowed when square | `rounded-full` only if square/circular    |

---

## 6.2 Radius Token Map

Define project-specific radius tokens.

Example:

```css
:root {
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;

  --radius-button: var(--radius-md);
  --radius-card: var(--radius-lg);
  --radius-input: var(--radius-md);
  --radius-modal: var(--radius-xl);
}
```

For B2B software:

```txt
button: rounded-md
input: rounded-md
card: rounded-lg
modal: rounded-lg or rounded-xl
badge: rounded-md
tab: rounded-md
```

For B2C consumer app:

```txt
button: rounded-xl
input: rounded-xl
card: rounded-2xl
modal: rounded-2xl
badge: rounded-lg
tab: rounded-xl
```

---

## 6.3 Interactive Pill Ban

Interactive elements must not default to `rounded-full`.

Forbidden for normal UI:

```tsx
<button className="rounded-full">
<a className="rounded-full">
<TabsTrigger className="rounded-full">
<nav className="rounded-full">
<BadgeButton className="rounded-full">
```

Allowed:

```txt
Circular icon button
Avatar
Status dot
Notification dot
Radio control
Small icon-only square container rendered as a circle
```

Requirement:

If `rounded-full` is used for an interactive element, the element must be square or intentionally circular.

Allowed example:

```tsx
<button aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-full">
  <X className="h-4 w-4" />
</button>
```

Rejected example:

```tsx
<button className="rounded-full px-8 py-3">Get Started</button>
```

---

# 7. Border System

## 7.1 Border Tokens

Borders should be semantic.

Required tokens:

```css
:root {
  --border-subtle: 214 32% 91%;
  --border-default: 214 32% 86%;
  --border-strong: 214 24% 72%;
}
```

Recommended usage:

| Border Token     | Use Case                          |
| ---------------- | --------------------------------- |
| `border-subtle`  | Low-emphasis cards, dividers      |
| `border-default` | Inputs, cards, panels             |
| `border-strong`  | Focused surfaces, selected states |
| `border-danger`  | Error states                      |
| `border-success` | Positive validation               |
| `border-warning` | Warning states                    |

---

## 7.2 Border Rules

- Use borders before shadows for structural separation.
- Do not create random one-off border colors.
- Do not use neon borders unless brand-specific.
- Do not rely only on border color for state changes.
- Combine border changes with text, icon, or background changes when communicating status.

---

# 8. Shadow and Elevation System

## 8.1 Maximum 3 Elevation Layers

Only three semantic shadow layers are allowed:

```txt
shadow-low
shadow-medium
shadow-high
```

Recommended definitions:

```css
:root {
  --shadow-low: 0 1px 2px rgba(15, 23, 42, 0.06);
  --shadow-medium: 0 8px 24px rgba(15, 23, 42, 0.08);
  --shadow-high: 0 18px 48px rgba(15, 23, 42, 0.12);
}
```

Dark mode shadows should be extremely restrained and may use surface contrast instead.

---

## 8.2 Shadow Usage Rules

| Layer  | Use Case                                 |
| ------ | ---------------------------------------- |
| Low    | Cards, inputs, small popovers            |
| Medium | Dropdowns, elevated panels               |
| High   | Modals, command palettes, major overlays |

Rules:

- Do not create more than three elevation levels.
- Do not use multi-colored shadows.
- Do not use vibrant ambient shadows.
- Do not use `shadow-2xl` everywhere.
- Do not use colored glow shadows for normal components.
- Use borders and surfaces before heavy depth.
- High shadow should be rare.

---

## 8.3 Forbidden Shadows

Reject:

```tsx
shadow-purple-500/50
shadow-blue-500/40
shadow-[0_0_40px_rgba(...)]
shadow-2xl shadow-cyan-500/30
drop-shadow-[0_0_20px_...]
```

Unless explicitly brand-required and documented.

---

# 9. Color Token Standards

## 9.1 Required Semantic Colors

Every project should define:

```txt
background
foreground
surface
surface-elevated
surface-muted
primary
primary-foreground
secondary
secondary-foreground
accent
accent-foreground
muted
muted-foreground
border
input
ring
danger
danger-foreground
warning
warning-foreground
success
success-foreground
info
info-foreground
```

Do not style components with random colors such as:

```tsx
bg - blue - 600;
text - gray - 500;
border - slate - 200;
hover: bg - zinc - 100;
```

Unless those values are part of the established token system.

---

## 9.2 Tokenized Tailwind Color Pattern

Preferred Tailwind usage:

```tsx
bg - background;
text - foreground;
bg - surface;
text - muted - foreground;
border - border;
bg - primary;
text - primary - foreground;
ring - ring;
```

Avoid:

```tsx
bg-[#f7f7f7]
text-[#333333]
border-[#dddddd]
bg-blue-600
text-slate-500
```

---

## 9.3 Color Audit Rules

Flag:

- Hex colors inside components
- Arbitrary color classes
- Mixed Tailwind color families
- Random opacity modifiers
- Inconsistent muted text colors
- Multiple primary colors
- Inconsistent hover colors
- Low contrast disabled states
- Error states that rely only on red

Allowed location for raw color values:

- Theme configuration
- CSS token file
- Brand token file
- Chart palette file
- Design-system documentation

---

# 10. Typography Tokens

## 10.1 Required Typography Tokens

Define:

```txt
font-display
font-heading
font-body
font-mono

text-xs
text-sm
text-base
text-lg
text-xl
text-2xl
text-3xl
text-4xl
text-5xl
text-6xl

leading-none
leading-tight
leading-snug
leading-normal
leading-relaxed

tracking-tight
tracking-normal
tracking-wide
```

---

## 10.2 Typography Audit Rules

Flag:

```tsx
text-[13px]
text-[27px]
leading-[1.13]
tracking-[0.037em]
```

unless documented and promoted to a token.

Text must use a consistent scale and readable line heights.

---

# 11. Motion Tokens

## 11.1 Required Motion Tokens

Define standard motion values:

```txt
duration-fast: 150ms
duration-base: 200ms
duration-slow: 300ms
ease-standard
ease-out
ease-in-out
ease-premium
```

Recommended premium easing:

```css
--ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
```

---

## 11.2 Motion Rules

- Use motion to communicate state.
- Do not use random durations across components.
- Avoid slow animations above 500ms for basic UI.
- Avoid motion that causes layout shift.
- Respect reduced-motion preferences.
- Use the same transition curve for related components.

Recommended Tailwind pattern:

```tsx
transition - [transform, opacity, background - color, border - color, box - shadow];
duration - 300;
ease - [cubic - bezier(0.16, 1, 0.3, 1)];
```

---

# 12. Icon System

## 12.1 Icon Integrity Rule

Never allow dirty inline `<svg>` code strings for standard UI icons.

Forbidden:

```tsx
const Icon = () => (
  <svg>
    <path d="..." />
  </svg>
);
```

Also forbidden:

```tsx
dangerouslySetInnerHTML={{ __html: rawSvg }}
```

Required:

Use a unified icon library, such as:

```txt
lucide-react
heroicons
phosphor-react
radix icons
project-approved custom icon package
```

Preferred default:

```txt
lucide-react
```

Example:

```tsx
import { ArrowRight, Check, X } from "lucide-react";

<ArrowRight className="h-4 w-4" aria-hidden="true" />;
```

---

## 12.2 Icon Token Rules

Icons must follow size tokens.

Recommended sizes:

| Icon Use Case     |      Size |
| ----------------- | --------: |
| Inline text icon  | 14px-16px |
| Button icon       | 16px-18px |
| Navigation icon   | 18px-20px |
| Feature icon      | 20px-24px |
| Empty state icon  | 32px-48px |
| Illustration icon |     48px+ |

Tailwind:

```txt
h-3.5 w-3.5
h-4 w-4
h-5 w-5
h-6 w-6
h-8 w-8
h-12 w-12
```

Avoid arbitrary icon sizes:

```tsx
h-[19px] w-[19px]
```

---

## 12.3 Icon Stroke Consistency

For line icons:

- Keep stroke width consistent.
- Do not mix filled and outline icons randomly.
- Use `aria-hidden="true"` for decorative icons.
- Provide accessible labels for icon-only buttons.
- Do not use icons as decoration if they add no value.

Icon-only button example:

```tsx
<button aria-label="Open menu" className="flex h-10 w-10 items-center justify-center rounded-full">
  <Menu className="h-5 w-5" aria-hidden="true" />
</button>
```

---

# 13. Media and Aspect Ratio System

## 13.1 Aspect Ratio Locking

All media containers must define strict aspect ratios.

Required classes:

```txt
aspect-video
aspect-square
aspect-[4/3]
aspect-[3/2]
aspect-[16/10]
aspect-[21/9]
```

Use `object-cover` or `object-contain` intentionally.

Example:

```tsx
<div className="aspect-video overflow-hidden rounded-lg bg-muted">
  <img src="/assets/hero.jpg" alt="Description" className="h-full w-full object-cover" />
</div>
```

---

## 13.2 Image Warping Ban

Never allow images to stretch or warp.

Forbidden:

```tsx
<img className="h-64 w-full" />
<img className="h-full w-full" />
```

unless object behavior is defined.

Required:

```tsx
className = "h-full w-full object-cover";
```

or:

```tsx
className = "h-full w-full object-contain";
```

---

## 13.3 Media Stability Rules

Every media element should define:

- Aspect ratio
- Width behavior
- Height behavior
- Object fit
- Alt text
- Loading strategy
- Background placeholder
- Border radius token
- Overflow behavior

For layout stability, never let images load without reserved space.

---

# 14. Component Primitive Token Standards

## 14.1 Button Primitive

Buttons must inherit from tokens.

Required token categories:

```txt
button-radius
button-height-sm
button-height-md
button-height-lg
button-padding-x
button-font-size
button-font-weight
button-primary-bg
button-primary-fg
button-secondary-bg
button-secondary-fg
button-border
button-hover-bg
button-disabled-bg
button-disabled-fg
button-focus-ring
```

Required button states:

```txt
default
hover
active
focus-visible
disabled
loading
```

Button rules:

- No `rounded-full` for standard buttons.
- Minimum touch height: 44px for primary user-facing buttons.
- Icon-only buttons must have accessible labels.
- Loading state must prevent duplicate actions.
- Disabled state must be visibly disabled and non-interactive.
- Primary and secondary buttons must be visually distinct.

---

## 14.2 Card Primitive

Cards must use tokens for:

```txt
card-bg
card-border
card-radius
card-padding
card-shadow
card-hover-border
card-hover-bg
card-interactive-motion
```

Card rules:

- Cards should not use arbitrary padding.
- Cards should not use random radius values.
- Cards should not use colored glow shadows.
- Interactive cards need hover, active, and focus states.
- Card groups should use consistent gutters.
- Card height should be stable in grids.

---

## 14.3 Input Primitive

Inputs must use tokens for:

```txt
input-height
input-padding-x
input-radius
input-bg
input-border
input-placeholder
input-focus-ring
input-error-border
input-disabled-bg
input-disabled-fg
```

Input rules:

- Labels are required for forms.
- Placeholder cannot replace label.
- Inputs must be at least 44px tall on touch interfaces.
- Error state must include text, not color only.
- Focus state must be visible.
- Disabled state must remain legible.

---

## 14.4 Badge Primitive

Badges must use tokens for:

```txt
badge-radius
badge-padding
badge-font-size
badge-font-weight
badge-bg
badge-fg
badge-border
```

Badge rules:

- Badges are labels, not default buttons.
- Do not use `rounded-full` automatically.
- Use `rounded-md` or `rounded-lg` unless brand requires pill badges.
- Status badges must include text and/or icon, not color alone.
- Interactive badges should be treated as buttons or tabs and follow interactive rules.

---

## 14.5 Modal Primitive

Modals must use tokens for:

```txt
modal-bg
modal-radius
modal-shadow
modal-border
modal-padding
modal-overlay-bg
modal-max-width
modal-z-index
```

Modal rules:

- Use high elevation sparingly.
- Overlay must not destroy text contrast.
- Modal must fit mobile viewport.
- Focus must be trapped inside modal.
- Escape key should close when appropriate.
- Close button must be accessible.
- Avoid arbitrary modal widths.

---

# 15. Tailwind Configuration Standards

## 15.1 Tailwind Theme Must Encode Tokens

Tailwind config should expose design tokens.

Example:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        "surface-elevated": "hsl(var(--surface-elevated))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        danger: "hsl(var(--danger))",
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        low: "var(--shadow-low)",
        medium: "var(--shadow-medium)",
        high: "var(--shadow-high)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};

export default config;
```

---

## 15.2 Tailwind Class Audit Rules

Flag the following:

```txt
p-[...]
m-[...]
gap-[...]
rounded-[...]
shadow-[...]
text-[...]
bg-[#...]
text-[#...]
border-[#...]
max-w-[...]
h-[...]
w-[...]
```

Allow only when:

- The value is truly one-off
- It is documented
- It cannot be represented by an existing token
- It is not repeated elsewhere

If repeated, promote it to a token.

---

# 16. CSS Variable Standards

## 16.1 Required CSS Token File

Create or maintain a central token file such as:

```txt
src/styles/tokens.css
src/styles/theme.css
src/app/globals.css
```

Required structure:

```css
:root {
  /* Colors */
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --surface: 0 0% 98%;
  --surface-elevated: 0 0% 100%;
  --primary: 222 47% 11%;
  --primary-foreground: 0 0% 100%;
  --muted: 210 20% 96%;
  --muted-foreground: 215 16% 35%;
  --border: 214 32% 88%;
  --input: 214 32% 88%;
  --ring: 222 47% 11%;
  --danger: 0 72% 45%;

  /* Radius */
  --radius-button: 6px;
  --radius-card: 8px;
  --radius-input: 6px;
  --radius-modal: 12px;

  /* Shadows */
  --shadow-low: 0 1px 2px rgba(15, 23, 42, 0.06);
  --shadow-medium: 0 8px 24px rgba(15, 23, 42, 0.08);
  --shadow-high: 0 18px 48px rgba(15, 23, 42, 0.12);

  /* Motion */
  --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 16.2 Dark Mode Tokens

Dark mode must be tokenized separately.

Example:

```css
.dark {
  --background: 220 18% 7%;
  --foreground: 0 0% 96%;
  --surface: 220 16% 10%;
  --surface-elevated: 220 14% 13%;
  --muted: 220 12% 16%;
  --muted-foreground: 220 8% 72%;
  --border: 220 12% 22%;
  --input: 220 12% 22%;
  --ring: 0 0% 96%;
}
```

Do not create dark mode by randomly adding `dark:bg-zinc-950` across components without semantic tokens.

---

# 17. Z-Index Tokens

## 17.1 Required Z-Index Scale

Use a defined z-index scale.

Recommended:

| Token        | Value | Use Case       |
| ------------ | ----: | -------------- |
| `z-base`     |     0 | Base content   |
| `z-raised`   |    10 | Raised cards   |
| `z-sticky`   |    20 | Sticky nav     |
| `z-dropdown` |    30 | Dropdown menus |
| `z-overlay`  |    40 | Page overlays  |
| `z-modal`    |    50 | Modals         |
| `z-toast`    |    60 | Toasts         |
| `z-tooltip`  |    70 | Tooltips       |

Avoid:

```tsx
z - [9999];
z - [100000];
```

unless interfacing with external embeds and documented.

---

# 18. Accessibility Token Requirements

## 18.1 Focus Ring Tokens

Every interactive component must use a focus ring token.

Required:

```txt
ring
ring-offset
focus-visible state
```

Recommended Tailwind:

```tsx
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-ring
focus-visible:ring-offset-2
```

---

## 18.2 Contrast Standards

Color tokens must support accessible contrast.

Target:

| Text Type         |      Target Contrast |
| ----------------- | -------------------: |
| Body text         |        7:1 preferred |
| Important UI text |        7:1 preferred |
| Large text        |        4.5:1 minimum |
| Button text       |        4.5:1 minimum |
| Muted text        | Must remain readable |
| Error text        |        7:1 preferred |

Do not define muted text so faint that it becomes unusable.

---

# 19. Token Audit Protocol

When auditing a codebase, review in this order:

1. Theme file structure
2. Tailwind config
3. CSS variables
4. Color usage
5. Spacing usage
6. Container usage
7. Radius usage
8. Shadow usage
9. Icon usage
10. Media/aspect ratio usage
11. Component primitive variants
12. Accessibility tokens
13. Arbitrary class usage
14. Dark mode token consistency
15. Repeated one-off styles that should become tokens

---

## 19.1 Token Audit Severity Model

| Severity    | Meaning                                                      | Required Action              |
| ----------- | ------------------------------------------------------------ | ---------------------------- |
| Critical    | Breaks system consistency, accessibility, or maintainability | Fix immediately              |
| High        | Creates recurring visual drift                               | Promote to token or refactor |
| Medium      | Local inconsistency                                          | Clean during component pass  |
| Low         | Minor naming or style issue                                  | Fix during polish            |
| Enhancement | Optional design-system improvement                           | Queue for roadmap            |

---

## 19.2 Audit Output Format

Use this format when auditing tokens:

```md
# Design System Token Audit

## Executive Summary

- Overall token health:
- Biggest drift risk:
- Highest ROI fix:
- Production risk:

## Critical Issues

| Issue | Risk | Required Fix |
| ----- | ---- | ------------ |

## Token Coverage

| Token Category | Status    | Notes |
| -------------- | --------- | ----- |
| Colors         | Pass/Fail | ...   |
| Spacing        | Pass/Fail | ...   |
| Containers     | Pass/Fail | ...   |
| Radii          | Pass/Fail | ...   |
| Shadows        | Pass/Fail | ...   |
| Typography     | Pass/Fail | ...   |
| Icons          | Pass/Fail | ...   |
| Media          | Pass/Fail | ...   |

## Arbitrary Class Violations

| File | Class | Problem | Fix |
| ---- | ----- | ------- | --- |

## Component Primitive Review

| Component | Issue | Fix |
| --------- | ----- | --- |

## Final Refactor Plan

1. ...
2. ...
3. ...
```

---

# 20. Component Primitive Build Protocol

When building component primitives, follow this order:

1. Identify the product classification: B2B, B2C, finance, dashboard, boutique, editorial, developer tool, etc.
2. Select radius standard based on classification.
3. Define spacing tokens for the component.
4. Define color tokens for default, hover, active, disabled, and error states.
5. Define border tokens.
6. Define shadow/elevation level.
7. Define focus-visible behavior.
8. Define icon rules.
9. Define responsive behavior.
10. Define accessibility requirements.
11. Define variants.
12. Implement component.
13. Add usage examples.
14. Add audit notes for prohibited classes.

---

# 21. PR Review Checklist

Before approving token or primitive changes, verify:

## Spacing

- [ ] All spacing uses approved 4px scale.
- [ ] No arbitrary `p-[13px]` style values.
- [ ] Gaps are consistent across component groups.
- [ ] Section spacing follows the system.
- [ ] Repeated one-off spacing has been promoted to a token.

## Containers

- [ ] Page content uses unified container rules.
- [ ] Mobile padding uses `px-4`.
- [ ] Tablet padding uses `px-8`.
- [ ] Desktop padding uses `px-16`.
- [ ] Max-widths are consistent.
- [ ] No uncontrolled full-width text blocks.

## Radius

- [ ] Radius matches product classification.
- [ ] B2B components use `rounded-md` or `rounded-lg`.
- [ ] B2C components use `rounded-xl` or `rounded-2xl`.
- [ ] No standard interactive elements use `rounded-full`.
- [ ] Circular controls are square and intentional.

## Shadows

- [ ] No more than three elevation layers exist.
- [ ] Shadows use semantic tokens.
- [ ] No vibrant ambient shadows.
- [ ] No random `shadow-2xl` usage.
- [ ] Modals/dropdowns use appropriate elevation.

## Colors

- [ ] Components use semantic color tokens.
- [ ] No raw hex colors inside component files.
- [ ] No arbitrary Tailwind color drift.
- [ ] Light/dark mode tokens are consistent.
- [ ] Contrast is accessible.

## Icons

- [ ] Standard icons come from approved icon library.
- [ ] No dirty inline SVG strings.
- [ ] No `dangerouslySetInnerHTML` SVG injection.
- [ ] Icon sizes follow the token scale.
- [ ] Icon-only buttons have accessible labels.

## Media

- [ ] Images use aspect-ratio containers.
- [ ] `object-cover` or `object-contain` is defined.
- [ ] Media does not warp.
- [ ] Layout space is reserved before media loads.
- [ ] Alt text is present when meaningful.

## Accessibility

- [ ] Focus rings use tokens.
- [ ] Disabled states are readable.
- [ ] Error states do not rely only on color.
- [ ] Touch targets are large enough.
- [ ] Components are keyboard accessible.

---

# 22. Refactor Playbook

## 22.1 If Spacing Is Random

Replace arbitrary classes:

```tsx
p-[13px] mt-[27px] gap-[18px]
```

With approved scale:

```tsx
p-3 mt-6 gap-4
```

If exact values are repeated, add a token.

---

## 22.2 If Containers Are Inconsistent

Replace:

```tsx
<div className="px-5 max-w-[1170px]">
```

With:

```tsx
<section className="px-4 md:px-8 lg:px-16">
  <div className="mx-auto max-w-7xl">...</div>
</section>
```

---

## 22.3 If Radii Are Inconsistent

For B2B:

```tsx
rounded - md;
rounded - lg;
```

For B2C:

```tsx
rounded-xl
rounded-2xl
```

Remove:

```tsx
rounded-[11px]
rounded-[19px]
rounded-full
```

unless documented.

---

## 22.4 If Shadows Are Overused

Replace:

```tsx
shadow-2xl shadow-blue-500/40
```

With:

```tsx
shadow - low;
```

or:

```tsx
border border-border bg-surface
```

Prefer structural surface contrast over dramatic shadows.

---

## 22.5 If Icons Are Dirty Inline SVG

Replace:

```tsx
const CheckIcon = () => <svg>...</svg>;
```

With:

```tsx
import { Check } from "lucide-react";

<Check className="h-4 w-4" aria-hidden="true" />;
```

---

## 22.6 If Images Warp

Replace:

```tsx
<img src="/image.jpg" className="h-64 w-full" />
```

With:

```tsx
<div className="aspect-video overflow-hidden rounded-lg bg-muted">
  <img src="/image.jpg" alt="Description" className="h-full w-full object-cover" />
</div>
```

---

# 23. Implementation Output Format

When this skill is used to create or modify a design system, respond using:

```md
# Design System Token Implementation Plan

## Objective

...

## Product Classification

...

## Token Decisions

| Category   | Decision |
| ---------- | -------- |
| Spacing    | ...      |
| Containers | ...      |
| Radius     | ...      |
| Shadows    | ...      |
| Colors     | ...      |
| Icons      | ...      |
| Media      | ...      |

## Files to Create or Modify

| File | Purpose |
| ---- | ------- |

## Tailwind Config Updates

...

## CSS Variable Updates

...

## Component Primitive Updates

...

## Audit Rules

...

## Acceptance Criteria

- ...
```

---

# 24. Non-Negotiable Rules

These rules override convenience:

1. Do not use arbitrary spacing values like `p-[13px]`.
2. Do not bypass the 4px spacing scale.
3. Do not create one-off container padding.
4. Do not allow random max-width values without tokenizing them.
5. Do not use `rounded-full` for normal buttons, nav tabs, or interactive pills.
6. Do not mismatch radius style with product classification.
7. Do not create more than three elevation layers.
8. Do not use vibrant, multi-colored, or ambient glow shadows.
9. Do not place raw hex colors inside normal component files.
10. Do not allow dirty inline SVG strings for standard icons.
11. Do not use unapproved icon systems across components.
12. Do not allow images or video to warp.
13. Do not render media without aspect-ratio locking.
14. Do not remove focus rings.
15. Do not rely on color alone for state.
16. Do not approve token changes without checking light and dark mode.
17. Do not let repeated one-off styles survive; promote them to tokens.
18. Do not ship a component primitive that lacks hover, focus, disabled, and error states where applicable.

---

# 25. Success Standard

The design system passes only if:

- Spacing follows the approved 4px scale.
- Containers use unified responsive padding.
- Radii match the product classification.
- Interactive pills are eliminated unless truly circular controls.
- Shadows are limited to Low, Medium, and High.
- Colors are semantic and accessible.
- Components do not use raw arbitrary styling.
- Icons come from a unified icon system.
- Media containers use aspect-ratio locking.
- Images do not warp.
- Component primitives are reusable and variant-driven.
- Light and dark modes remain consistent.
- PR review can quickly detect violations.
- Future components can be built without inventing new visual rules.

If any of these fail, continue auditing and refactoring before finalizing.
