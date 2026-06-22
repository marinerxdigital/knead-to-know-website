---
name: source-of-truth
description: Use after any change that affects architecture, data model, routes, scope, or a key decision — keeps the /docs set consistent by appending to PROJECT_MEMORY and CHANGELOG and updating the relevant architecture doc. Not for routine code edits that don't change structure, data, or scope.
---

# Source Of Truth

The `/docs` folder is the project's memory. A qualifying change isn't done until the docs reflect it.

## After a qualifying change

1. **PROJECT_MEMORY.md** — append a dated entry: what changed and _why_ (the decision, not just the diff).
2. **CHANGELOG.md** — add a line under the current version; bump the version on a release.
3. **Update the architecture doc that matches the change:**
   - schema / RLS → `DATABASE_ARCHITECTURE.md`
   - new route or structural change → `TECHNICAL_ARCHITECTURE.md`
   - design token / component change → `DESIGN_SYSTEM.md`
   - content hierarchy change → `CONTENT_ARCHITECTURE.md`
   - new tracked event → `ANALYTICS_ARCHITECTURE.md`
4. If a doc was added, update `SOURCE_OF_TRUTH.md` so the index stays accurate.

## Rules of thumb

- Record the decision and its rationale, not a line-by-line code summary.
- Keep entries short and factual — this file is read often.
- If a change contradicts an earlier decision, note that you're superseding it and why.

## Avoid

- Letting the docs drift behind the code.
- Logging trivial edits (copy tweaks, spacing nits) that don't touch architecture, data, or scope.
- Rewriting history — append and supersede rather than deleting past decisions.
