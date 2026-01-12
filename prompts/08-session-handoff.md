# Session Handoff Protocol

Use this template at the end of each session to preserve context for the next session.

---

## When to Use

- End of work session
- Before switching to different AI model
- Before long break (>24 hours)
- When context window is getting full
- Before major pivot or direction change

---

## Handoff Report Template

```markdown
# Session Handoff Report

**Session Date:** [YYYY-MM-DD]
**Session Duration:** [Approximate time]
**AI Model Used:** [If relevant]

---

## 1. Session Summary

### What Was Accomplished
[2-3 sentence summary of main achievements]

### Key Decisions Made
| Decision | Rationale | Impact |
|----------|-----------|--------|
| [Decision 1] | [Why] | [What it affects] |
| [Decision 2] | [Why] | [What it affects] |

---

## 2. Task Status

### ✅ Completed Tasks
- [x] [Task 1] - [Brief note if needed]
- [x] [Task 2]

### 🔄 In Progress Tasks
- [ ] [Task 3] - [Current state: X% done]
  - **Blocked by:** [If applicable]
  - **Next step:** [Immediate next action]

### 📋 Pending Tasks
- [ ] [Task 4] - [Priority: High/Medium/Low]
- [ ] [Task 5]

---

## 3. Critical Context

### Files Modified This Session
| File | Change Type | Notes |
|------|-------------|-------|
| [path/file.tsx] | Created/Modified/Deleted | [Brief description] |

### Important Discoveries
- [Discovery 1]: [What was learned and why it matters]
- [Discovery 2]: [What was learned and why it matters]

### Gotchas Encountered
- ⚠️ [Gotcha 1]: [What to watch out for]
- ⚠️ [Gotcha 2]: [What to watch out for]

### Technical Debt Introduced
- [Debt 1]: [What was compromised and why]
  - **Should fix:** [When/Priority]

---

## 4. Current System State

### Build Status
- [ ] Passing
- [ ] Failing: [Error summary]
- [ ] Unknown: [Reason]

### Key Dependencies
| Dependency | Version | Notes |
|------------|---------|-------|
| [Package] | [Version] | [Any issues or notes] |

### Environment Notes
- [Any environment-specific info]

---

## 5. Recommended Next Steps

### Immediate (Next Session Start)
1. [First thing to do]
2. [Second thing to do]

### Short-term (This Week)
1. [Priority task]
2. [Priority task]

### Can Wait
1. [Lower priority item]

---

## 6. Open Questions

Questions that need answers from user or further research:

1. ❓ [Question 1]
   - Context: [Why this matters]
   - Options: [Possible answers if known]

2. ❓ [Question 2]
   - Context: [Why this matters]

---

## 7. Links & References

### Relevant Files to Read First
- `.lovable/memory/activeContext.md` - Always read first
- [Other specific files relevant to next session]

### External Resources
- [Link 1]: [What it's for]
- [Link 2]: [What it's for]

---

## 8. Session Notes

[Any additional context that doesn't fit above categories]

---

**Handoff Created By:** [AI/Human]
**Handoff Reviewed:** [ ] Yes / [ ] No
```

---

## Quick Handoff (Abbreviated Version)

For shorter sessions or quick context switches:

```markdown
# Quick Handoff - [DATE]

**Done:** [1-2 items]
**In Progress:** [Current task, % complete]
**Blocked:** [If any]
**Next:** [Immediate next step]
**Watch Out:** [Key gotcha]
**Read First:** [Most important file for context]
```

---

## Handoff Checklist

Before ending session:

- [ ] All changes saved
- [ ] Build is passing (or failure documented)
- [ ] activeContext.md updated
- [ ] progress.md updated
- [ ] CHANGELOG.md updated (if applicable)
- [ ] Handoff report created
- [ ] Critical discoveries documented
- [ ] Next steps are clear and actionable

---

## Recovery from Poor Handoff

If starting a new session with missing context:

1. Read these files in order:
   - `.lovable/memory/projectbrief.md`
   - `.lovable/memory/techContext.md`
   - `.lovable/memory/activeContext.md`
   - `.lovable/memory/progress.md`

2. Check for recent checkpoints:
   - `.lovable/memory/checkpoints/`

3. Review recent reflections:
   - `.lovable/memory/reflections.md`

4. Ask user:
   - "What were we working on?"
   - "What's the current priority?"
   - "Any blockers I should know about?"
