---
name: feature-route
description: Use when adding a new page or route to the app — creating the component, wiring it into navigation, and giving it the project's layout, styling, and loading/empty/error states. For deferred features, applies the standard "coming in a future phase" empty state. Not for restyling an existing page, writing copy, or backend/database work.
---

# Feature Route

Add a new route so it feels native to the app from the first commit. Follow these steps and conventions; pull visual specifics from the design tokens in Project Knowledge rather than inventing them.

## Steps
1. Create the page component under `src/pages`, and any feature-specific components under `src/components/<feature>`.
2. Register the route in the router and place it in the correct navigation group, matching the existing nav tree. Gate admin-only routes behind the project's `role = 'admin'` check.
3. Wrap content in the shared app layout (sidebar / top bar). Verify it works at 375px, 768px, and 1280px.
4. Build only with the shared UI primitives (Button, Card, Input, etc.). No one-off styling.
5. Add explicit loading, empty, and error states — a view with no data must still render intentionally.

## Deferred features
If the feature isn't being built this phase, render the standard empty state: one plain sentence saying what will live here and which phase it arrives, plus a primary action only if one genuinely exists. Do not stub fake functionality or mock interactivity.

## Avoid
- Hardcoded color, spacing, radius, or shadow values — always use the theme tokens.
- A route that exists but isn't reachable from navigation.
- Blank screens, or layouts that break below 768px.
- Duplicating a component that already exists instead of reusing it.
