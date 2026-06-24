---
name: superpowers
description: Use obra/superpowers skills for brainstorming, planning, TDD, debugging, and subagent-driven development on this project. Invoke before multi-step implementation or when user references superpowers workflows.
---

# Superpowers (project install)

Skills live in `.cursor/plugins/superpowers/skills/` (git submodule).

## When to use

- Starting creative or multi-step work → read `using-superpowers` and `brainstorming`
- Implementing a written plan in `docs/superpowers/` → `writing-plans`, `executing-plans`, or `subagent-driven-development`
- Bugs or test failures → `systematic-debugging`
- Claiming work complete → `verification-before-completion`

## Instructions

1. Read the relevant skill from `.cursor/plugins/superpowers/skills/<skill-name>/SKILL.md`.
2. Follow that skill exactly; user rules in `CLAUDE.md` and `SOURCE_OF_TRUTH.md` take precedence over skill defaults.
3. Update submodule: `git submodule update --remote .cursor/plugins/superpowers`
