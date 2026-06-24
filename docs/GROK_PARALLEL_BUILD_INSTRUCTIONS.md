# Grok Build — Parallel Execution Instructions (Visual Upgrade, Forms, SEO)

**Audience:** Grok Build and its 4 parallel superagents.
**Plan source of truth:** `docs/superpowers/plans/2026-06-22-visual-upgrade-implementation.md`
**This file:** a parallel execution schedule layered on top of that plan. It does not replace the plan — every task's exact code, file paths, and verification commands live in the plan file. This file only tells you _which tasks are safe to run at the same time_ and in _what order_.

---

## 0. Read this first

1. Open `docs/superpowers/plans/2026-06-22-visual-upgrade-implementation.md` and read it in full once. It contains 14 tasks (Task 1 – Task 14), each with complete code blocks, exact file paths/line numbers, and a verify + commit step. Treat that file as the literal source of every line of code you write — do not improvise or invent code beyond what it specifies.
2. Read the **Global Constraints** section near the top of that plan file before touching anything. The most important ones, repeated here because they govern every agent:
   - Locked palette: white `#FFFFFF`, coastal blue `#4F7EA8`, harbor blue `#7FA7C7`, ink `#111111`, navy `#1F3447`. One approved deviation: wheat `#C2A878` — small accents only (badges, divider motif), never backgrounds or CTAs.
   - Display font: **Fraunces**. Body font: Inter (unchanged).
   - Never render a literal `[INSERT ...]` or `[ASK FOR ...]` string on any page.
   - Never fabricate Wendy's personal story, testimonials, press, address, phone, email, hours, or social links. Known real facts only: name "Wendy Mercado", location "Daniel Island, SC", established 2026, the 16-item product catalog.
   - No Spilled Milk branding/imagery/copy anywhere customer-facing.
   - `npm run build` and `npm run lint` must pass after **every single task**, not just at the end.
   - Do not delete `00_*` folders, `.grok/skills`, or zips.
   - Do not touch `k2k-products.ts`, `cake-photos.ts`, `squarespace.ts`, `InquiryForm.tsx`, or orphan route files (`inquiry.tsx`, `flavors.tsx`, `flavors-pricing.tsx`, `featured.tsx`) — out of scope for this pass.
3. Each task in the plan ends with its own `git commit` step with a specific message — use that exact message. One commit per task, not one giant commit at the end.

---

## 1. Why this isn't a free-for-all 14-way parallel run

Several tasks edit the **same file** as another task, or depend on output from an earlier task (a CSS token, a component prop, a data field). If two agents edit the same file at the same time you will get merge conflicts or silently overwrite each other's work. The schedule below groups the 14 tasks into **sequential waves**; within a wave, up to 4 tasks run in parallel (one per superagent) because they touch disjoint files and have no unmet dependencies. Do not start a wave until every task in the previous wave has committed and passed `npm run build` + `npm run lint`.

**Known file/dependency conflicts baked into the schedule:**

- `src/routes/__root.tsx` is touched by Task 1 (fonts), Task 3 (skip-link/nav), and Task 12 (OG image + JSON-LD) — these three never run in the same wave.
- `src/routes/custom-orders.tsx` is touched by Task 6 (copy fix) and Task 10 (form wiring) — Task 6 must commit before Task 10 starts.
- Task 2 (wheat divider) and Task 5 (wheat pricing pill) both consume the `--color-wheat` token and `.k2k-badge-wheat` class added in Task 1 — both wait for Task 1.
- Task 8 (homepage rewrite) consumes Task 2's new `accent` prop on `SectionDivider` and Task 5's updated product data — Task 8 waits for both.
- Task 12 (OG image path) and Task 13 (deleting the old OG asset pointer) — Task 13 waits for Task 12 to land first.
- Task 14 is full-site verification — it runs alone, last, after everything else.

---

## 2. Wave schedule (assign one task per superagent per wave)

### Wave 1 — solo (foundation)

| Agent   | Task                                                                         |
| ------- | ---------------------------------------------------------------------------- |
| Agent A | **Task 1** — Design tokens: Fraunces font, wheat accent, focus-visible rings |

Wait for Task 1's commit and a green `npm run build` before opening Wave 2. Every later wave depends on Task 1's tokens.

### Wave 2 — 4 parallel (no shared files, no dependency on anything but Task 1)

| Agent   | Task                                                                                  |
| ------- | ------------------------------------------------------------------------------------- |
| Agent A | **Task 4** — `business.ts` honest placeholders + conditional Footer/Contact rendering |
| Agent B | **Task 7** — `about.tsx`: Wendy Mercado's name + styled photo-pending slot            |
| Agent C | **Task 9** — Gallery: hide empty categories, wire Lightbox                            |
| Agent D | **Task 11** — Wire Catering form to Web3Forms                                         |

### Wave 3 — 4 parallel (depend only on Task 1; no shared files with each other)

| Agent   | Task                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------ |
| Agent A | **Task 2** — Scoring-line signature divider (`SectionDivider.tsx`)                               |
| Agent B | **Task 5** — `products.ts` pricing/photo fixes + price pill + bagel icon                         |
| Agent C | **Task 3** — Header nav breakpoint, skip-to-content, active nav indicator (touches `__root.tsx`) |
| Agent D | **Task 6** — Copy fixes in `menu.tsx`, `custom-orders.tsx`, `ContactForm.tsx`                    |

### Wave 4 — 3 parallel (depend on Wave 3 results)

| Agent   | Task                                                                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Agent A | **Task 8** — Homepage restructure, 11 sections → 6 (needs Task 2's `accent` prop + Task 5's product data)                                  |
| Agent B | **Task 10** — Wire Custom Orders form to Web3Forms (needs Task 6's `custom-orders.tsx` commit landed first)                                |
| Agent C | **Task 12** — SEO fixes: `robots.txt`, sitemap, OG image, JSON-LD (touches `__root.tsx` — needs Task 3's `__root.tsx` commit landed first) |

(4th agent idle this wave — nothing else is unblocked yet.)

### Wave 5 — solo

| Agent   | Task                                                                                                                                         |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent A | **Task 13** — Delete orphaned old-brand assets (needs Task 12's OG-image swap committed first, since that orphans `og-image.jpg.asset.json`) |

### Wave 6 — solo (final gate)

| Agent   | Task                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------- |
| Agent A | **Task 14** — Full-site verification: placeholder sweep, Spilled Milk sweep, build+lint, `MEMORY.md` update |

---

## 3. Per-task discipline (every agent, every task)

1. Pull the task's exact code blocks from the plan file — do not paraphrase or "improve" the supplied code.
2. After making the change, run the task's own **Verify** step from the plan (usually `npm run build`, sometimes a targeted `grep`) before committing.
3. Commit with the exact message given in the task's **Commit** step.
4. If `npm run build` or `npm run lint` fails, fix it within your own task's files before reporting done — do not hand a broken build to the next wave.
5. If a task's instructions are ambiguous or conflict with something you observe in the live file (different line numbers than the plan expects, etc.), stop and report rather than guessing — the plan was written from a direct file read but the codebase may have drifted.

## 4. After Wave 6

Confirm:

- `npm run build` exits 0
- `npm run lint` exits 0
- `grep -rn "\[INSERT\|\[ASK FOR\|\[PRICE TBD\]" src/` returns nothing
- `grep -rln "spilled-milk\|lovable-assets" src/ public/robots.txt` returns nothing
- `MEMORY.md` has a new top entry describing this session's work, per Task 14 Step 4.

Report back per-wave commit hashes and final build/lint status.

## 5. Deployment

This is a client-preview mockup for Wendy Mercado, not a finalized public launch — the existing Cloudflare Pages URL (`https://knead-to-know-website-v2.pages.dev`) is already a preview link, not a marketed production domain. After Wave 6 passes its verification, you are authorized to push the branch and deploy:

```bash
npm run build
npx wrangler pages deploy dist --project-name=knead-to-know-website-v2
```

Stay on the current working branch (do not deploy from or merge into `main` without being told to). Note in your final report whether `VITE_WEB3FORMS_ACCESS_KEY` is set in the Cloudflare Pages build environment — Tasks 10/11 wire Custom Orders and Catering using the same fallback Web3Forms key already hardcoded in `ContactForm.tsx`'s pattern; that key is a working placeholder for demoing the forms to the client, not a final production credential, so flag it rather than silently treating "form submits successfully" as "ready for real customer traffic."

---

## Message to give Grok directly

See the message block at the bottom of this repo's handoff thread, or regenerate it from this file's §1–§5 if it drifts. Kept in sync with this file as of the last edit.

---

_Generated alongside `docs/superpowers/plans/2026-06-22-visual-upgrade-implementation.md`. If that plan file changes, re-derive this wave schedule from its updated file/dependency list before resuming a Grok run._
