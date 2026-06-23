# Superpowers (Cursor plugin)

Native Cursor plugin from [obra/superpowers](https://github.com/obra/superpowers) — TDD, debugging, brainstorming, planning, and subagent-driven development workflows.

## Contents

- **Plugin root:** `.cursor/plugins/superpowers/` (git submodule)
- **Skills:** brainstorming, writing-plans, executing-plans, subagent-driven-development, test-driven-development, systematic-debugging, and more
- **Project plans:** `docs/superpowers/plans/` and `docs/superpowers/specs/`

## Enable in Cursor

1. After clone, init submodules: `git submodule update --init --recursive`
2. Cursor should discover `.cursor/plugins/superpowers/` in this workspace.
3. **Developer: Reload Window** if skills do not appear.
4. Optional local install: junction or copy this folder to `~/.cursor/plugins/local/superpowers`, then reload.

## Update upstream

```bash
git submodule update --remote .cursor/plugins/superpowers
```

## Key skills for this project

- `using-superpowers` — bootstrap; agents check skills before acting
- `brainstorming` — design before code
- `writing-plans` / `executing-plans` / `subagent-driven-development` — implement specs in `docs/superpowers/`
- `verification-before-completion` — run build/lint before claiming done