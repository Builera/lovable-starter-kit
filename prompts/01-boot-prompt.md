# Prompt: Boot Prompt (Context Loading)

> Use this prompt at the START of any coding session to ensure AI reads context first.
> Prepend this to any feature/bug request.

---

```
Before you write any code, you must:

1) Read these files:
   - .lovable/memory/projectbrief.md
   - .lovable/memory/techContext.md
   - .lovable/memory/activeContext.md

2) Output a "Context Summary" (maximum 5 lines) showing you understand:
   - What the project is
   - Current focus/state
   - Any relevant constraints

3) Then propose a PLAN:
   - Checklist organized by files to modify
   - Any assumptions you're making
   - Risks and rollback strategy (if applicable)

Only after completing steps 1-3 may you implement.

After implementation, you must update:
- CHANGELOG.md (always)
- .lovable/memory/activeContext.md (always)
- .lovable/memory/progress.md (always)
- .lovable/memory/patterns/mistakes.md (if this was a bug fix)
- docs/adr/ (if this involved an architecture decision)
```

---

## Ultra-Compact Version (10 lines)

> For quick use, copy this shorter version:

```
BEFORE CODING:
1. Read: .lovable/memory/projectbrief.md, techContext.md, activeContext.md
2. Output: Context Summary (5 lines max)
3. Output: PLAN checklist by files + assumptions

AFTER CODING:
Update: CHANGELOG.md, activeContext.md, progress.md
If bug: add to mistakes.md
If architecture decision: create ADR
```
