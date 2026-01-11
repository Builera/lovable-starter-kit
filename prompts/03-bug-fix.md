# Prompt: Bug Fix

> Use this template when requesting a bug fix.
> This ensures the fix includes guardrails to prevent recurrence.

---

```
## Bug Fix Request

### Symptom
[What is the observed behavior? Include error messages if any.]

### Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Expected Behavior
[What should happen instead?]

### Actual Behavior
[What actually happens?]

### Environment (if relevant)
- Browser: [e.g., Chrome 120]
- Device: [e.g., Desktop/Mobile]
- Other: [Any relevant context]

---

## Process Requirements

You must follow the READ → PLAN → ACT → VERIFY → UPDATE workflow:

### READ (Required)
Read context files and output a 5-line Context Summary.
Also read `.lovable/memory/patterns/mistakes.md` for similar past bugs.

### PLAN (Required)
- Identify root cause hypothesis
- List files to modify
- Propose guardrail (test/lint rule/type constraint)

### ACT
- Implement fix
- Implement guardrail
- Keep changes minimal

### VERIFY
- Confirm bug is fixed
- Confirm guardrail catches the issue
- Run build/lint/tests

### UPDATE (Required)
After fixing, update ALL of these:
- [ ] CHANGELOG.md — document the fix
- [ ] .lovable/memory/activeContext.md — update current state
- [ ] .lovable/memory/progress.md — mark as done
- [ ] .lovable/memory/patterns/mistakes.md — add entry with:
  - Symptom
  - Root cause
  - Fix
  - Guardrail
  - Date
  - Related files

If severity is Medium/High, also create:
- [ ] docs/errors/[date]-[slug].md — detailed post-mortem

---

## Important
- Every bug fix MUST have a guardrail
- Document in mistakes.md so we learn from it
- Check if similar bugs exist in mistakes.md first
```

---

## Quick Version

```
Bug: [One-line description]

Symptom: [What's happening]
Expected: [What should happen]
Steps: [How to reproduce]

Follow READ→PLAN→ACT→VERIFY→UPDATE.

REQUIRED after fix:
1. Update CHANGELOG
2. Update activeContext + progress
3. Add entry to mistakes.md with:
   - Symptom / Root cause / Fix / Guardrail / Related files
```
