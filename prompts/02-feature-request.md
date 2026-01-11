# Prompt: Feature Request

> Use this template when requesting a new feature.
> Fill in the bracketed sections and send to Lovable.

---

```
## Feature Request

### Goal
[What should this feature accomplish?]

### Scope
[What specific functionality should be included?]

### Non-goals
[What is explicitly NOT part of this feature?]

### Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

### Related Files (if known)
- [File/module that might be affected]

---

## Process Requirements

You must follow the READ → PLAN → ACT → VERIFY → UPDATE workflow:

### READ (Required)
Read context files and output a 5-line Context Summary.

### PLAN (Required)
- List files to modify as a checklist
- State any assumptions
- Identify risks + rollback strategy

### ACT
- Implement within defined scope only
- No scope creep
- Follow project conventions

### VERIFY
- Run build/lint/tests
- Or document why not executed

### UPDATE (Required)
After implementation, update:
- [ ] CHANGELOG.md
- [ ] .lovable/memory/activeContext.md
- [ ] .lovable/memory/progress.md

---

## Important
- Keep scope tight
- If you need to make assumptions, list them explicitly
- Do not add features not explicitly requested
```

---

## Quick Version

```
Feature: [One-line description]

Goal: [What it should do]
Scope: [What's included]
Non-goals: [What's NOT included]

Acceptance:
- [ ] [Criterion 1]
- [ ] [Criterion 2]

Follow READ→PLAN→ACT→VERIFY→UPDATE.
Update CHANGELOG + activeContext + progress when done.
```
