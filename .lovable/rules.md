# AI Rules (Constitution) — Universal for Lovable Projects

## 0) Golden Rule

**No task is considered DONE until Step 5 (UPDATE) is complete.**

---

## 1) Mandatory Workflow

Every task must follow: **READ → PLAN → ACT → VERIFY → UPDATE**

### Step 1 — READ (Required)

Before writing any code, you must read:

- `.lovable/memory/projectbrief.md`
- `.lovable/memory/techContext.md`
- `.lovable/memory/activeContext.md`

If related to patterns/bugs, also read:

- `.lovable/memory/systemPatterns.md`
- `.lovable/memory/patterns/mistakes.md`

**Required Output:** "Context Summary" — maximum 5 lines summarizing current state.

### Step 2 — PLAN

- List a checklist organized by file/module to modify
- State assumptions (if data is incomplete)
- Identify risks + rollback strategy (if applicable)

### Step 3 — ACT

- Implement within defined scope only (no scope creep)
- Follow repo conventions and structure
- No "magic" — prefer explicit types and contracts

### Step 4 — VERIFY

- Run build/lint/test if available
- If cannot execute: document "Not executed" + reason

### Step 5 — UPDATE (Required)

After completing work, you must update:

| File | When to Update |
|------|----------------|
| `CHANGELOG.md` | Always |
| `.lovable/memory/activeContext.md` | Always |
| `.lovable/memory/progress.md` | Always |
| `.lovable/memory/patterns/mistakes.md` | If bug/incident |
| `docs/adr/*` | If architecture decision |

---

## 2) Non-negotiables

### Required

- ✅ All changes must be traceable (changelog + commit/PR)
- ✅ Direction changes require an ADR
- ✅ Bug fixes must include guardrails (test/check/pattern note)

### Forbidden

- ❌ Guessing without documenting assumptions
- ❌ Expanding scope without explicit justification
- ❌ Writing "junk docs" — only document decisions, trade-offs, API contracts, or operational rules

---

## 3) Definition of Done (DoD)

A task is DONE when:

- [ ] Meets acceptance criteria
- [ ] VERIFY completed (or reason documented)
- [ ] `CHANGELOG.md` updated
- [ ] `activeContext.md` updated
- [ ] `progress.md` updated
- [ ] If bug: `mistakes.md` has entry + guardrail
- [ ] If architecture change: ADR created

---

## 4) Quick Reference

```
READ    → Summarize context (5 lines max)
PLAN    → Checklist by file + risks + assumptions
ACT     → Implement within scope
VERIFY  → Build/lint/test or document why not
UPDATE  → Changelog + memory + ADR/mistakes if needed
```
