---
name: supabase-table
description: Use when creating a new database table or adding columns in Supabase — enforces uuid primary keys, timestamps, the project's row-level-security pattern, and regenerated types. Not for writing queries against existing tables, building UI, or configuring auth.
---

# Supabase Table

Create tables so security and conventions are never an afterthought.

## Every table
- `id uuid primary key default gen_random_uuid()`.
- `created_at timestamptz default now()` and `updated_at timestamptz default now()`.
- `snake_case` names; foreign keys with an explicit, intentional `on delete` rule.
- **Enable Row-Level Security.** A table shipped without RLS is a bug.

## Choose the RLS pattern
- **User-scoped data** (each row belongs to one user): allow access only where `user_id = auth.uid()` (or `id = auth.uid()` for the profile table). Use for progress, learner state, notifications, subscriptions, feedback, analytics, AI sessions.
- **Shared / reference content** (catalog the whole app reads): any authenticated user may `select`; only admins (`role = 'admin'`) may `insert / update / delete`. Use for modules, topics, subtopics, questions, answers, explanations, flashcards.
- If a table fits neither pattern cleanly, ask before guessing.

## Finish
- Regenerate the Supabase TypeScript types and update anything affected in `src/types`.
- Surface the change so it can be logged via the Source Of Truth skill.

## Avoid
- Shipping a table with RLS disabled, or with a blanket public read/write policy.
- `serial` / integer primary keys — use uuid.
- Cascading deletes that could silently erase user history without clear intent.
- Seeding content that hasn't been authored yet (e.g., questions).
