# AI Operating System - Auto Boot Instruction

> Copy this entire content into Lovable's **Project Knowledge** setting.
> This ensures AI automatically follows the rules without manual prompts.

---

## MANDATORY: Before ANY Code Changes

You are working on a project with an **AI Operating System** installed.

### Step 1 — READ First
Before writing any code, read these files:
- `.lovable/rules.md` (full workflow rules)
- `.lovable/memory/activeContext.md` (current project state)
- `.lovable/memory/projectbrief.md` (project overview)

### Step 2 — OUTPUT Context Summary
After reading, output a **Context Summary** (5 lines max) proving you understood:
- What the project is
- Current focus/state
- Any relevant constraints

### Step 3 — PROPOSE a PLAN
Before implementing, list:
- Checklist of files to modify
- Assumptions (if any)
- Risks + rollback strategy

---

## MANDATORY: After Completing Work

Update these files:
| File | When |
|------|------|
| `CHANGELOG.md` | Always |
| `.lovable/memory/activeContext.md` | Always |
| `.lovable/memory/progress.md` | Always |
| `.lovable/memory/patterns/mistakes.md` | If bug fix |
| `docs/adr/` | If architecture decision |

---

## Workflow

**READ → PLAN → ACT → VERIFY → UPDATE**

No task is DONE until UPDATE is complete.

---

## Self-Healing Protocol

If the same error occurs **3+ times**:
1. STOP trying the same approach
2. READ `prompts/06-self-healing.md`
3. Follow the escalation protocol

---

## Quick Rules

- ✅ Stay within defined scope (no scope creep)
- ✅ Follow repo conventions
- ✅ Add guardrails for bug fixes
- ❌ Never guess without documenting assumptions
- ❌ Never skip the UPDATE step
