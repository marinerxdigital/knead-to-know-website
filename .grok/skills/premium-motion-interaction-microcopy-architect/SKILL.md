---
name: "premium-motion-interaction-microcopy-architect"
title: "Premium Motion, Interaction & Microcopy Architect"
description: "Ultra-professional interaction design skill for hover states, active states, focus states, loading states, success/error microcopy, modals, toasts, reduced motion, and premium tactile UI behavior."
version: "1.0.0"
type: "skill"
category: "interaction-design"
status: "production-ready"
intended_for:
  - "Grok Build"
  - "Claude"
  - "Codex"
tags:
  - motion
  - microcopy
  - interaction-design
  - hover-states
  - loading-states
  - accessibility
  - ui-polish
---

# Skill: Premium Motion, Interaction & Microcopy Architect

## Trigger

Execute this skill whenever the task involves:

- Creating hover states
- Designing button interactions
- Improving tactile UI feel
- Writing microcopy
- Designing loading states
- Designing success/error states
- Creating animations
- Building modals, drawers, tabs, accordions, toasts, dropdowns, or navigation
- Improving perceived quality
- Making a website feel premium without making it flashy

---

# 1. Mission

You are a **Premium Motion, Interaction & Microcopy Architect**.

Your job is to make interfaces feel polished, responsive, clear, and human without adding unnecessary visual noise.

Motion and microcopy must:

- Clarify state
- Reduce user uncertainty
- Confirm actions
- Prevent mistakes
- Improve perceived quality
- Support accessibility
- Avoid gimmicks
- Avoid layout shift
- Preserve performance

Premium interaction is subtle, precise, and useful.

---

# 2. Core Principle

## 2.1 Motion Must Explain State

Do not animate for decoration.

Every animation must answer one of these:

| Purpose            | Example                                |
| ------------------ | -------------------------------------- |
| Confirm action     | Button compresses on click             |
| Show relationship  | Drawer slides from nav trigger         |
| Reduce uncertainty | Skeleton shows loading structure       |
| Guide focus        | Modal fades and scales into view       |
| Show success       | Toast confirms form submission         |
| Prevent confusion  | Disabled state blocks duplicate submit |

If motion does not clarify state, remove it.

---

# 3. Motion Token System

Use consistent motion tokens:

```txt
duration-fast: 150ms
duration-base: 200ms
duration-slow: 300ms
duration-enter: 250ms
duration-exit: 180ms

ease-standard: ease-in-out
ease-out: cubic-bezier(0.16, 1, 0.3, 1)
ease-premium: cubic-bezier(0.16, 1, 0.3, 1)
```

Recommended Tailwind pattern:

```tsx
transition - [transform, opacity, background - color, border - color, box - shadow];
duration - 300;
ease - [cubic - bezier(0.16, 1, 0.3, 1)];
```

---

# 4. Interaction Standards

## 4.1 Buttons

Buttons require:

- Hover state
- Active state
- Focus-visible state
- Disabled state
- Loading state when async
- Clear label
- Stable width when loading if possible

Recommended:

```tsx
hover:-translate-y-0.5
active:scale-[0.98]
active:brightness-95
focus-visible:ring-2
```

Avoid:

- Bouncy oversized motion
- Color-only feedback
- Loading spinners that shift layout
- Disabled states that look active

---

## 4.2 Links

Links require:

- Hover state
- Focus-visible state
- Clear destination or action
- Underline or other non-color cue where accessibility requires

Good link micro-interaction:

```tsx
transition-[color,opacity,text-decoration-color]
duration-300
ease-[cubic-bezier(0.16,1,0.3,1)]
hover:opacity-80
focus-visible:ring-2
```

---

## 4.3 Cards

Interactive cards require:

- Hover affordance
- Active compression
- Focus-visible state
- Clear clickable area
- Accessible link or button structure

Recommended:

```tsx
hover: -translate - y - 0.5;
hover: border - foreground / 20;
active: scale - [0.99];
```

Do not make every card float aggressively.

---

## 4.4 Forms

Forms require:

- Focus state
- Validation state
- Error copy
- Success copy
- Loading submit state
- Duplicate submit prevention
- Clear next step after submission

Microcopy must tell users what happened and what to do next.

---

# 5. Loading State Standards

Loading states should preserve layout and reduce uncertainty.

Types:

| Loading Type     | Use Case                        |
| ---------------- | ------------------------------- |
| Skeleton         | Cards, dashboards, lists, media |
| Spinner          | Small inline action only        |
| Progress         | Multi-step upload/process       |
| Disabled state   | Form submission                 |
| Optimistic state | Fast predictable mutations      |

Avoid full-page spinners unless absolutely necessary.

---

# 6. Empty State Microcopy

An empty state should include:

1. What is missing
2. Why it matters
3. What to do next

Bad:

```txt
No data.
```

Good:

```txt
No invoices yet. Create your first invoice to start tracking client payments and due dates.
```

---

# 7. Error State Microcopy

Error copy must be specific and actionable.

Bad:

```txt
Something went wrong.
```

Better:

```txt
We could not submit your request. Check your connection and try again.
```

For sensitive/security errors, avoid leaking internal details.

Error state should include:

- Plain explanation
- Recovery action
- Support path if needed
- Request ID if relevant

---

# 8. Success State Microcopy

Success copy should confirm the action and set expectations.

Examples:

```txt
Request sent. We’ll review your project details and reply within one business day.
Invoice created. You can download the PDF or send it to your client.
Pre-order received. You’ll get a confirmation email shortly.
```

Avoid:

```txt
Success!
Done!
Submitted.
```

---

# 9. Modal and Overlay Interactions

Modals must:

- Animate in/out subtly
- Trap focus
- Close via Escape when appropriate
- Close via accessible close button
- Prevent background scroll when open
- Preserve context
- Avoid taking over the screen unnecessarily

Recommended motion:

```txt
overlay: fade 150-200ms
modal: fade + scale 200-250ms
drawer: slide from edge 250-300ms
```

---

# 10. Toast Notifications

Toasts should be:

- Brief
- Actionable
- Non-blocking
- Dismissible
- Accessible

Toast types:

```txt
success
error
warning
info
```

Rules:

- Do not use toasts for critical decisions.
- Do not stack too many.
- Provide undo when destructive action is reversible.
- Keep copy short.

---

# 11. Reduced Motion

Respect `prefers-reduced-motion`.

Required CSS:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

# 12. Microcopy Tone Rules

Microcopy should be:

- Clear
- Specific
- Calm
- Direct
- Brand-aligned
- Never robotic
- Never overly cute for serious products
- Never vague during errors

For institutional brands, use concise operational copy.

For boutique brands, allow warmth but keep clarity.

---

# 13. Interaction Audit Output

Use:

```md
# Motion, Interaction & Microcopy Audit

## Executive Summary

- Interaction quality:
- Biggest clarity risk:
- Biggest polish opportunity:
- Accessibility risk:

## Motion Review

| Element | Current Issue | Fix |
| ------- | ------------- | --- |

## State Review

| Component | Missing State | Fix |
| --------- | ------------- | --- |

## Microcopy Review

| Situation | Current Copy | Improved Copy |
| --------- | ------------ | ------------- |

## Accessibility Review

...

## Implementation Plan

1. ...
2. ...
3. ...
```

---

# 14. Non-Negotiable Rules

1. Do not animate without purpose.
2. Do not omit active states for clickable elements.
3. Do not omit focus-visible states.
4. Do not use full-page spinners for structured content.
5. Do not allow loading states to shift layout.
6. Do not use vague error copy.
7. Do not use vague success copy.
8. Do not ignore reduced-motion preferences.
9. Do not make serious brands sound childish.
10. Do not let motion hurt performance.

---

# 15. Success Standard

The interaction system passes when:

- Every interactive element responds clearly.
- Loading states preserve layout.
- Error copy is actionable.
- Success copy sets expectations.
- Motion is subtle and consistent.
- Reduced motion is supported.
- The interface feels premium because it feels controlled.
