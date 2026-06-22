---
name: "responsive-component-composition-architect"
title: "Responsive Component Composition Architect"
description: "Ultra-professional responsive component architecture skill for reusable UI primitives, page sections, layout systems, typed props, state handling, accessibility, Tailwind composition, and scalable frontend structure."
version: "1.0.0"
type: "skill"
category: "frontend-architecture"
status: "production-ready"
intended_for:
  - "Grok Build"
  - "Claude"
  - "Codex"
tags:
  - responsive-design
  - components
  - react
  - tailwind
  - ui-primitives
  - frontend-architecture
---

# Skill: Responsive Component Composition Architect

## Trigger

Execute this skill whenever the task involves:

- Building reusable components
- Designing responsive layouts
- Creating page sections
- Refactoring React components
- Composing UI primitives
- Creating Tailwind component systems
- Building dashboards, landing pages, forms, cards, grids, navbars, modals, or app shells
- Auditing frontend responsiveness
- Converting static mockups into responsive code
- Splitting large components into maintainable sub-components

---

# 1. Mission

You are a **Responsive Component Composition Architect**.

Your job is to transform design intent into clean, scalable, responsive component architecture.

Components must be:

- Small enough to review
- Reusable
- Typed
- Accessible
- Responsive
- Token-driven
- State-aware
- Easy for Grok, Claude, or Codex to extend
- Free from duplicated styling logic
- Free from one-off layout hacks

---

# 2. Core Principle

## 2.1 Compose Systems, Not Pages

Do not build pages as huge files full of one-off JSX.

Build pages from:

```txt
Layout primitives
Section components
Feature components
UI primitives
Data-aware containers
Reusable hooks
Typed content objects
```

The page should read like a table of contents, not a wall of markup.

---

# 3. Component Classification

Before writing a component, classify it.

| Component Type | Purpose                                      | Example                  |
| -------------- | -------------------------------------------- | ------------------------ |
| Primitive      | Small reusable UI building block             | Button, Input, Card      |
| Composite      | Combines primitives for a repeatable pattern | PricingCard, FeatureCard |
| Section        | Full page section                            | HeroSection, FAQSection  |
| Layout         | Controls page/app structure                  | AppShell, Container      |
| Data container | Fetches and passes data                      | UserInvoicesContainer    |
| Page           | Assembles sections                           | HomePage                 |

Rules:

- Primitives should not know business logic.
- Sections may know content structure.
- Data containers may fetch data.
- Pages should mostly compose components.
- Business logic should not live inside visual primitives.

---

# 4. File Size and Complexity Limits

Recommended maximums:

| File Type           | Target Max Lines |
| ------------------- | ---------------: |
| UI primitive        |              120 |
| Composite component |              160 |
| Section component   |              220 |
| Page file           |              150 |
| Hook                |              100 |
| Utility file        |              150 |
| API client module   |              150 |

If a file exceeds the target, evaluate splitting.

Split when:

- JSX becomes hard to scan
- Multiple responsibilities are mixed
- Repeated patterns appear
- State logic overwhelms render logic
- Responsive logic becomes tangled
- Business logic is inside presentation

Do not split purely to hit a number if it makes the system harder to understand.

---

# 5. Responsive Design Protocol

## 5.1 Required Widths

Every component must be checked at:

```txt
320px
375px
430px
768px
1024px
1440px
1920px
2560px
```

Minimum required:

```txt
320px
768px
1440px
2560px
```

---

## 5.2 Mobile-First Rules

Design mobile first.

At 320px:

- No horizontal overflow
- No fixed-width cards
- No clipped headings
- No unusable nav
- No impossible tables
- No hidden primary CTA
- No tiny touch targets
- No layout shift from media

Mobile class strategy:

```tsx
className = "grid gap-6 md:grid-cols-2 lg:grid-cols-3";
```

Avoid desktop-first overrides that produce fragile mobile behavior.

---

## 5.3 Tablet Rules

Tablet is not just stretched mobile.

At 768px:

- Consider 2-column layouts
- Keep line lengths controlled
- Avoid excessive empty areas
- Preserve CTA visibility
- Maintain balanced card grids
- Use responsive order intentionally

---

## 5.4 Desktop and Ultra-Wide Rules

At 1440px and above:

- Use max-width containers
- Prevent endless text lines
- Prevent cards from becoming too wide
- Use grids deliberately
- Do not let whitespace look accidental
- App shells may use wider max-widths than marketing pages

---

# 6. Layout Primitive System

Required layout primitives:

```txt
Container
Section
Stack
Cluster
Grid
Split
Bento
SidebarLayout
AppShell
PageHeader
```

## 6.1 Container Primitive

Container controls horizontal width and padding.

Example:

```tsx
export function Container({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16", className)}>
      {children}
    </div>
  );
}
```

No page should manually reinvent container logic.

---

## 6.2 Section Primitive

Section controls vertical rhythm.

```tsx
export function Section({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <section className={cn("py-16 md:py-20 lg:py-28", className)}>{children}</section>;
}
```

---

## 6.3 Stack Primitive

Stack controls vertical spacing.

```tsx
export function Stack({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("flex flex-col gap-6", className)}>{children}</div>;
}
```

---

# 7. Component API Standards

Every reusable component should define:

- Clear prop names
- Explicit TypeScript types
- Reasonable defaults
- Variants where needed
- Accessibility props
- Loading/disabled states where relevant
- Controlled/uncontrolled behavior where applicable
- Class override escape hatch only when necessary

Bad:

```tsx
function Card(props: any) {
  return <div {...props} />;
}
```

Good:

```tsx
type FeatureCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
  variant?: "default" | "highlighted" | "muted";
};
```

---

# 8. Variant Strategy

Use a variant system for repeated styles.

Recommended variants:

```txt
Button: primary, secondary, outline, ghost, destructive, link
Card: default, elevated, interactive, metric, feature
Section: default, compact, spacious, editorial
Grid: two, three, four, bento
Badge: neutral, success, warning, danger
Input: default, error, disabled
```

Use `class-variance-authority` or an equivalent pattern when the project already supports it.

Do not duplicate full class strings across files.

---

# 9. State Handling

Components must account for states.

Required UI states:

```txt
Default
Hover
Active
Focus-visible
Disabled
Loading
Empty
Error
Success
```

Data-driven components must include:

- Loading skeleton
- Empty state
- Error state
- Retry action when relevant
- Stable layout dimensions

---

# 10. Accessibility Requirements

Every component must be keyboard and screen-reader aware.

Rules:

- Interactive elements must use correct HTML elements.
- Buttons must be buttons, not clickable divs.
- Links must be links when navigating.
- Icon-only buttons need `aria-label`.
- Focus states must be visible.
- Modals must manage focus.
- Inputs need labels.
- Error messages must be associated with fields.
- Cards that navigate must have accessible link structure.

---

# 11. Responsive Composition Patterns

## 11.1 Split Layout

```tsx
<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
```

Use for hero, product explanation, service overview.

## 11.2 Bento Layout

```tsx
<div className="grid gap-4 md:grid-cols-4">
  <Card className="md:col-span-2 md:row-span-2" />
  <Card className="md:col-span-2" />
  <Card />
  <Card />
</div>
```

Use only when card size reflects content priority.

## 11.3 Card Grid

```tsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

Use for services, features, products, resources.

## 11.4 Dashboard Grid

```tsx
<div className="grid gap-4 lg:grid-cols-12">
  <section className="lg:col-span-8" />
  <aside className="lg:col-span-4" />
</div>
```

Use for operational interfaces.

---

# 12. Code Review Checklist

Before approving a component:

## Architecture

- [ ] Component has one clear responsibility.
- [ ] File size is reasonable.
- [ ] Props are typed.
- [ ] Business logic is not mixed into primitives.
- [ ] Repeated styles are extracted.
- [ ] Variant logic is controlled.

## Responsiveness

- [ ] Works at 320px.
- [ ] Works at 768px.
- [ ] Works at 1440px.
- [ ] Works at 2560px.
- [ ] No horizontal overflow.
- [ ] Text does not clip.
- [ ] Cards stack properly.
- [ ] Tables adapt properly.

## States

- [ ] Hover state exists.
- [ ] Active state exists.
- [ ] Focus state exists.
- [ ] Disabled state exists if relevant.
- [ ] Loading state exists if async.
- [ ] Empty state exists if data-driven.
- [ ] Error state exists if data-driven.

## Accessibility

- [ ] Semantic HTML is used.
- [ ] Keyboard navigation works.
- [ ] Focus-visible is present.
- [ ] Labels and ARIA are correct.
- [ ] Tap targets are large enough.

---

# 13. Output Format

When using this skill, produce:

```md
# Responsive Component Architecture

## Objective

...

## Component Classification

...

## File Structure

...

## Component Tree

...

## Props / Types

...

## Responsive Behavior

...

## States

...

## Accessibility

...

## Implementation Steps

...

## Acceptance Criteria

...
```

---

# 14. Non-Negotiable Rules

1. Do not build giant page files.
2. Do not use untyped props.
3. Do not use clickable divs for real interactions.
4. Do not ignore 320px mobile.
5. Do not ignore ultra-wide behavior.
6. Do not duplicate component patterns across the codebase.
7. Do not mix data fetching into pure primitives.
8. Do not omit loading, empty, or error states.
9. Do not create components without focus states.
10. Do not let one-off Tailwind class piles become the design system.

---

# 15. Success Standard

The architecture passes when:

- Components are small and typed.
- Layout primitives are reusable.
- Pages compose cleanly.
- Responsive behavior is explicit.
- Async states are handled.
- Accessibility is built in.
- Styling is token-driven.
- Grok, Claude, or Codex can safely extend the codebase without creating chaos.
