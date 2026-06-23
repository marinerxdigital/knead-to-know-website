# Design Resources for Developers (Cursor plugin)

Cursor plugin wrapper for [bradtraversy/design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers).

## Contents

- **Skill:** `design-resources` — agents search the curated resource list in `vendor/design-resources-for-developers/readme.md`
- **Upstream data:** git submodule at `vendor/design-resources-for-developers/`

## Enable in Cursor

1. **Project plugin:** Cursor should discover `.cursor/plugins/design-resources-for-developers/` in this workspace.
2. **Local install (optional):** Symlink or copy this folder to `~/.cursor/plugins/local/design-resources-for-developers`, then reload the window.
3. In **Settings → Rules**, set the `design-resources` skill to **Agent Decides** or **Always** as needed.

## Update upstream list

```bash
git submodule update --remote vendor/design-resources-for-developers
```