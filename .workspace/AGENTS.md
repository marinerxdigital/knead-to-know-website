Workspace Knowledge
These are cross-project engineering standards that apply to every app in the workspace. Keep it short — Lovable applies concise rules more reliably. Project-specific context (purpose, schema, design tokens, domain terms) lives in each project’s Project Knowledge, which overrides these defaults on conflict.
Default stack (use unless a project’s knowledge says otherwise)
• React + TypeScript on a Vite-based toolchain
• Tailwind CSS (mobile-first) + shadcn/ui (Radix) + Lucide icons
• Routing: React Router by default, or TanStack Router / TanStack Start where a project is scaffolded on it — TanStack Query for server state
• Supabase for auth, Postgres, Row-Level Security, and storage
• Don’t swap the UI kit or state library on a whim. If a project is scaffolded on a different framework or router, follow the project’s scaffold and record the choice in that project’s knowledge rather than fighting it.
Code standards
• TypeScript strict mode. Never use any — use unknown and narrow.
• Prefer const; never var. Prefer named exports over default exports.
• Naming: PascalCase components & types · camelCase variables & functions · kebab-case file names · snake_case database columns.
• No console.log in committed code. No deprecated React patterns (no class components).
Architecture
• Think in components, not pages. One component = one responsibility. Extract anything reused twice.
• Style only through design tokens / Tailwind theme — no magic color, spacing, radius, or shadow values.
• Every data-driven view needs explicit loading, empty, and error states. Never ship a blank screen.
• Use route-level code splitting; lazy-load heavy views; avoid unnecessary re-renders.
Design & accessibility baseline
• Mobile-first: design at 375px, then verify at 768px and 1280px.
• AA contrast, semantic HTML, labeled controls, visible focus rings, full keyboard navigation.
• Minimum 44px touch targets. Respect prefers-reduced-motion.
Backend & security
• Enable Row-Level Security on every table. Default to deny; scope user data to auth.uid().
• uuid primary keys via gen_random_uuid(); created_at + updated_at on every table.
• Never expose secrets in client code or commit them.
Workflow
• Start non-trivial tasks in Plan Mode: present the file/route tree and assumptions for approval before generating code.
• Prefer small, reviewable changes over sweeping rewrites; reuse existing components and tokens.
• Do not change the stack, architecture, or design tokens without an explicit instruction.
• Run a basic responsiveness + functionality check before declaring a task done.
