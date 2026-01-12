# Quick Reference Card

One-page cheat sheet for the AI Project Operating System.

---

## Workflow (Every Task)

```
READ → PLAN → ACT → VERIFY → UPDATE
```

| Step | Action | Time |
|------|--------|------|
| **READ** | Summarize context (5 lines max) | 1 min |
| **PLAN** | Checklist by file + risks | 2 min |
| **ACT** | Implement within scope | varies |
| **VERIFY** | Build/test or document why not | 1 min |
| **UPDATE** | Changelog + memory | 2 min |

---

## Memory Files

| File | Purpose | Update When |
|------|---------|-------------|
| `activeContext.md` | Current focus & state | Every task ✓ |
| `progress.md` | What's done/pending | Every task ✓ |
| `projectbrief.md` | Core requirements | Scope changes |
| `techContext.md` | Tech stack details | Stack changes |
| `systemPatterns.md` | Architecture patterns | New patterns |
| `mistakes.md` | Bug patterns & fixes | After bugs |
| `successes.md` | What works well | Good outcomes |
| `reflections.md` | Post-task learnings | After tasks |

---

## Prompts Quick Reference

| Situation | Use Prompt |
|-----------|------------|
| Starting fresh | `00-setup-os.md` |
| New session | `01-boot-prompt.md` |
| Add feature | `02-feature-request.md` |
| Fix bug | `03-bug-fix.md` |
| Architecture change | `04-architecture-change.md` |
| Weekly review | `05-weekly-update.md` |
| Error loop | `06-self-healing.md` |
| Debugging | `07-debug-loop.md` |
| End session | `08-session-handoff.md` |

---

## Decision Quick Reference

| Question | Check |
|----------|-------|
| Error handling? | `decision-trees/error-handling.md` |
| Component choice? | `decision-trees/component-choice.md` |
| Refactor or fix? | `decision-trees/refactor-vs-fix.md` |

---

## Emergency Procedures

### Stuck in Error Loop
1. Stop trying the same thing
2. Read `prompts/06-self-healing.md`
3. Follow the escalation protocol
4. Create checkpoint before major retry

### Lost Context
1. Read `activeContext.md` first
2. Check `progress.md` for status
3. Look in `checkpoints/` for snapshots
4. Ask user: "What were we working on?"

### Build Broken
1. Check console for error
2. Look at `decision-trees/error-handling.md`
3. Fix minimal change first
4. If stuck after 3 tries → rollback

### Major Decision Needed
1. Check if ADR exists in `docs/adr/`
2. If not, create one using template
3. Document decision + rationale
4. Update `systemPatterns.md` if architectural

---

## Definition of Done

A task is complete when:

- [ ] Meets requirements
- [ ] Build passes (or documented why not)
- [ ] `CHANGELOG.md` updated
- [ ] `activeContext.md` updated
- [ ] `progress.md` updated
- [ ] If bug: `mistakes.md` entry + guardrail
- [ ] If architecture: ADR created
- [ ] If session end: handoff created

---

## File Update Triggers

| Event | Files to Update |
|-------|-----------------|
| Any task | CHANGELOG, activeContext, progress |
| Bug fix | + mistakes.md |
| New pattern | + systemPatterns.md |
| Good outcome | + successes.md |
| Learned something | + reflections.md |
| Architecture decision | + docs/adr/xxx.md |
| Session end | + handoff report |
| Major milestone | + checkpoint |

---

## Common Gotchas

| Gotcha | Prevention |
|--------|------------|
| Forgot to update memory | Check DoD before declaring done |
| Scope creep | Stick to PLAN, document extras |
| Same bug twice | Always add to mistakes.md |
| Lost context | Create handoffs, checkpoints |
| Guessing without docs | Ask or research first |

---

## Key Principles

1. **No task done until UPDATE complete**
2. **Scope creep is forbidden without justification**
3. **Bugs need guardrails, not just fixes**
4. **Document decisions, not procedures**
5. **Ask if unsure, don't guess**

---

## Quick Start (New Session)

```markdown
1. Run boot prompt: prompts/01-boot-prompt.md
2. Read context summary from AI
3. Confirm current priority
4. Start work following workflow
```

## Quick End (Session Close)

```markdown
1. Finish current task or document state
2. Update CHANGELOG, activeContext, progress
3. Create handoff: prompts/08-session-handoff.md
4. Create checkpoint if major milestone
```
