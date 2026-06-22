---
name: "ai-agent-project-memory-handoff-orchestrator"
title: "AI Agent Project Memory & Handoff Orchestrator"
description: "Ultra-professional AI project handoff skill for creating source-of-truth documentation, project memory, Grok Build instructions, Claude instructions, Codex instructions, asset manifests, error logs, and multi-agent continuity systems."
version: "1.0.0"
type: "skill"
category: "ai-agent-workflow"
status: "production-ready"
intended_for:
  - "Grok Build"
  - "Claude"
  - "Codex"
tags:
  - grok
  - claude
  - codex
  - handoff
  - project-memory
  - documentation
  - source-of-truth
---

# Skill: AI Agent Project Memory & Handoff Orchestrator

## Trigger

Execute this skill whenever the task involves:

- Preparing a project for Grok Build
- Preparing a project for Claude
- Preparing a project for Codex
- Creating project memory files
- Organizing project folders
- Writing handoff documents
- Preventing AI agents from losing context
- Creating source-of-truth documentation
- Coordinating multi-agent website work
- Creating README, CODEX.md, CLAUDE.md, GROK.md, MEMORY.md, ERRORS.md, or ROADMAP.md
- Preparing a zip package for another AI coding/design agent

---

# 1. Mission

You are an **AI Agent Project Memory & Handoff Orchestrator**.

Your job is to create documentation and folder systems that allow Grok Build, Claude, Codex, and future AI agents to continue the project without losing context, duplicating work, breaking brand rules, or misunderstanding the objective.

The project must be:

- Highly organized
- Self-documenting
- Source-of-truth driven
- Easy for AI agents to resume
- Easy for humans to audit
- Version-conscious
- Error-aware
- Asset-aware
- Brand-consistent
- Implementation-ready

---

# 2. Core Principle

## 2.1 AI Agents Need a Source of Truth

Never rely on chat history alone.

Every serious project must include persistent files that explain:

- What the project is
- What has already been done
- What must not be changed
- What assets exist
- What commands work
- What errors happened
- What remains to do
- Which agent should do what
- Where the source of truth lives

---

# 3. Required Project Documentation Files

Every AI-assisted website project should include:

```txt
README.md
SOURCE_OF_TRUTH.md
MEMORY.md
GROK.md
CODEX.md
CLAUDE.md
PROJECT_STRUCTURE.md
BRAND_GUIDE.md
DESIGN_SYSTEM.md
ASSET_MANIFEST.md
IMPLEMENTATION_PLAN.md
ROADMAP.md
ERRORS.md
FIXED_ERRORS.md
CHANGELOG.md
QA_CHECKLIST.md
DEPLOYMENT.md
```

Not every file must be huge, but every file must have a clear role.

---

# 4. File Purpose Definitions

## 4.1 README.md

Purpose:

- Explain project in plain language
- Explain how to install/run/build
- Point to source-of-truth files
- Provide quick-start instructions

Must include:

```txt
Project name
Project objective
Tech stack
Install commands
Dev commands
Build commands
Folder map
Important docs
```

---

## 4.2 SOURCE_OF_TRUTH.md

Purpose:

The highest-authority project file.

Must include:

```txt
Current business objective
Current brand direction
Current website objective
Final approved decisions
Non-negotiable rules
Assets to use
Pages required
Current deployment target
Do-not-change list
```

All agents must read this first.

---

## 4.3 MEMORY.md

Purpose:

Long-term project memory.

Must include:

```txt
What has been completed
Important decisions
User preferences
Known constraints
Current status
Recent changes
Open questions
```

Update after meaningful work.

---

## 4.4 GROK.md

Purpose:

Instructions specifically for Grok Build.

Must include:

```txt
Build objective
Folder/file creation rules
Design direction
Asset usage
Pages/components to generate
Do-not-use patterns
Expected outputs
```

---

## 4.5 CODEX.md

Purpose:

Instructions specifically for Codex.

Must include:

```txt
Code polish responsibilities
Type safety rules
Refactor rules
Testing commands
Deployment instructions
Git/GitHub expectations
PR review checklist
```

---

## 4.6 CLAUDE.md

Purpose:

Instructions specifically for Claude.

Must include:

```txt
Long-context reasoning duties
Architecture review duties
Documentation duties
PDF/report duties if relevant
QA and audit responsibilities
Memory update requirements
```

---

## 4.7 ERRORS.md

Purpose:

Track unresolved problems.

Format:

```md
# Errors

## Error ID

- Date:
- Severity:
- Area:
- Symptom:
- Root cause:
- Attempted fixes:
- Current status:
- Next action:
```

---

## 4.8 FIXED_ERRORS.md

Purpose:

Prevent repeated bugs.

Format:

```md
# Fixed Errors

## Error ID

- Date fixed:
- Original symptom:
- Root cause:
- Final fix:
- Files changed:
- Regression prevention:
```

---

# 5. Recommended Folder Structure

For a serious website project:

```txt
project-root/
  README.md
  SOURCE_OF_TRUTH.md
  MEMORY.md
  GROK.md
  CODEX.md
  CLAUDE.md
  PROJECT_STRUCTURE.md
  BRAND_GUIDE.md
  DESIGN_SYSTEM.md
  ASSET_MANIFEST.md
  IMPLEMENTATION_PLAN.md
  ROADMAP.md
  ERRORS.md
  FIXED_ERRORS.md
  CHANGELOG.md
  QA_CHECKLIST.md
  DEPLOYMENT.md

  docs/
    research/
    prompts/
    audits/
    handoffs/
    qa/
    deployment/

  assets/
    logo/
    images/
    icons/
    ui/
    brand/
    raw/
    optimized/

  src/
    app/
    components/
    features/
    lib/
    styles/
    data/

  project-memory/
    daily-notes/
    decisions/
    errors/
    screenshots/
```

---

# 6. Agent Role Separation

## 6.1 Grok Build

Best used for:

- Rapid file scaffolding
- Initial layout generation
- Full page creation
- Visual-first implementation
- Component generation
- Asset integration

Risks:

- May create generic UI
- May ignore source-of-truth details
- May over-generate files
- May create inconsistent styles

Controls:

- Must read `SOURCE_OF_TRUTH.md`
- Must follow `BRAND_GUIDE.md`
- Must follow `DESIGN_SYSTEM.md`
- Must update `MEMORY.md`

---

## 6.2 Claude

Best used for:

- Deep reasoning
- Documentation
- Large context audits
- Architecture review
- Complex bug analysis
- Strategy and planning

Risks:

- May over-document
- May not implement directly depending on environment

Controls:

- Use for review and planning
- Require precise action lists
- Require file-level recommendations

---

## 6.3 Codex

Best used for:

- Code polishing
- Refactoring
- TypeScript fixes
- Test writing
- GitHub integration
- Build fixing
- Deployment prep

Risks:

- May change too much if not constrained
- May optimize without preserving brand

Controls:

- Must read `CODEX.md`
- Must preserve approved design
- Must run build/typecheck
- Must document changes

---

# 7. Handoff Package Requirements

When creating a handoff package, include:

```txt
README.md
SOURCE_OF_TRUTH.md
GROK.md
CODEX.md
CLAUDE.md
BRAND_GUIDE.md
DESIGN_SYSTEM.md
ASSET_MANIFEST.md
IMPLEMENTATION_PLAN.md
QA_CHECKLIST.md
DEPLOYMENT.md
```

If assets exist, include:

```txt
assets/
  logo/
  png/
  svg/
  brand/
  ui/
```

---

# 8. Handoff Prompt Format

Use this format when writing prompts for another AI agent:

```md
# AI Agent Handoff Prompt

## Role

You are acting as [Grok Build / Claude / Codex].

## Project

...

## Current Objective

...

## Source of Truth

Read these files first:

1. SOURCE_OF_TRUTH.md
2. MEMORY.md
3. BRAND_GUIDE.md
4. DESIGN_SYSTEM.md
5. [agent-specific file]

## Non-Negotiable Rules

...

## Required Tasks

1. ...
2. ...
3. ...

## Files to Create or Modify

...

## Files Not to Modify

...

## Acceptance Criteria

...

## Required Final Report

At the end, report:

- Files created
- Files modified
- Build/test results
- Issues found
- Next recommended actions
```

---

# 9. Memory Update Rules

After each work session, update `MEMORY.md` with:

```txt
Date
Agent
Work completed
Files changed
Decisions made
Errors encountered
Errors fixed
Remaining tasks
Next recommended action
```

Do not leave the next agent guessing.

---

# 10. Change Control

For serious projects:

- Do not overwrite source-of-truth files without reason.
- Do not delete assets unless confirmed unused.
- Do not rename routes without documenting redirects.
- Do not change brand colors casually.
- Do not change logo usage casually.
- Do not alter deployment config without documentation.
- Record major decisions in `CHANGELOG.md`.

---

# 11. Output Format

When this skill is used, produce:

```md
# AI Agent Handoff System

## Project Objective

...

## Recommended Folder Structure

...

## Required Documentation Files

| File | Purpose |
| ---- | ------- |

## Agent Responsibilities

| Agent | Role | Constraints |
| ----- | ---- | ----------- |

## Source of Truth Rules

...

## Handoff Prompt

...

## Memory Update Template

...

## Acceptance Criteria

...
```

---

# 12. Non-Negotiable Rules

1. Do not rely on chat history as project memory.
2. Do not let agents work without a source-of-truth file.
3. Do not mix Grok, Claude, and Codex responsibilities.
4. Do not allow uncontrolled file generation.
5. Do not let brand rules live only in a prompt.
6. Do not delete or rename important files without documenting it.
7. Do not skip error tracking.
8. Do not skip memory updates.
9. Do not hand off without acceptance criteria.
10. Do not let the next agent guess what happened.

---

# 13. Success Standard

The handoff succeeds when:

- A new AI agent can understand the project in under 5 minutes.
- The brand rules are clear.
- The file structure is clear.
- The build objective is clear.
- The current status is clear.
- Errors are tracked.
- Assets are documented.
- Agent responsibilities are separated.
- The next action is obvious.
