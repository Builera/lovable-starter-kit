# Self-Healing Protocol

Use this prompt when AI encounters errors or gets stuck in a loop.

---

## Trigger Conditions

Use this protocol when:
- Build/lint fails after 2+ attempts
- Same error appears 3+ times
- AI is unsure how to proceed
- User reports "it's not working"

---

## Step 1: Error Analysis

```markdown
## Error Analysis Report

**Error Type:** [Build | Runtime | Type | Network | Logic]
**Error Message:** 
```
[Paste exact error here]
```

**First Occurrence:** [When did this first appear?]
**Frequency:** [How many times has this occurred?]

**Affected Files:**
- [ ] File 1
- [ ] File 2

**Initial Hypothesis:**
[What I think is causing this]

**Confidence Level:** [High | Medium | Low]
```

---

## Step 2: Diagnostic Checklist

Before attempting fix, verify:

### For Build Errors
- [ ] All imports are correct
- [ ] No circular dependencies
- [ ] All required packages installed
- [ ] TypeScript types are valid

### For Runtime Errors
- [ ] Props are passed correctly
- [ ] State is initialized properly
- [ ] Async operations have error handling
- [ ] Event handlers are bound correctly

### For Type Errors
- [ ] Interface definitions match usage
- [ ] Optional vs required properties correct
- [ ] Generic types properly constrained
- [ ] Import paths for types correct

### For Network Errors
- [ ] API endpoint URL correct
- [ ] Authentication headers present
- [ ] Request payload format correct
- [ ] CORS configuration valid

---

## Step 3: Retry Strategy

### Attempt 1: Minimal Fix
- Change only the exact line causing error
- Do not refactor or improve
- Test immediately

### Attempt 2: Context Fix
- Expand scope to related code
- Check for upstream causes
- Verify assumptions

### Attempt 3: Alternative Approach
- Try different implementation
- Use alternative library/method
- Simplify the solution

---

## Step 4: Escalation Rules

### Escalate to User When:
- 3 attempts have failed
- Error requires external action (API keys, permissions)
- Multiple valid solutions exist (need preference)
- Error is outside project scope

### Escalation Template:
```markdown
## 🚨 Assistance Needed

**Issue:** [Brief description]

**What I've Tried:**
1. [Attempt 1 and result]
2. [Attempt 2 and result]
3. [Attempt 3 and result]

**Blocker:** [What's preventing progress]

**Options:**
A) [Option A with trade-offs]
B) [Option B with trade-offs]

**Recommended:** [A or B] because [reason]

**What I Need From You:**
- [ ] [Specific action or decision]
```

---

## Step 5: Rollback Protocol

If fix attempts make things worse:

### Safe Rollback Steps
1. Identify last known good state
2. List all changes made since then
3. Revert changes in reverse order
4. Verify build passes after each revert
5. Document what was rolled back and why

### Rollback Report:
```markdown
## Rollback Executed

**Rolled Back To:** [State/commit description]
**Changes Reverted:**
- [Change 1]
- [Change 2]

**Reason:** [Why rollback was necessary]
**Current Status:** [Build passing | Still broken]
**Next Steps:** [What to try differently]
```

---

## Step 6: Post-Recovery

After successfully fixing:

1. **Document in mistakes.md:**
   - Error pattern
   - Root cause
   - Successful fix
   - Prevention strategy

2. **Update decision trees if applicable:**
   - New error → approach mapping
   - Gotcha to remember

3. **Create checkpoint:**
   - Save current stable state
   - Note what was fixed

---

## Quick Reference

```
ERROR LOOP DETECTED
       ↓
   ANALYZE (Step 1)
       ↓
   DIAGNOSE (Step 2)
       ↓
   RETRY x3 (Step 3)
       ↓
  ┌─────────────┐
  │ Fixed?      │
  └─────────────┘
    Yes ↓    No ↓
  POST-FIX   ESCALATE
  (Step 6)   (Step 4)
               ↓
          [If worse]
               ↓
           ROLLBACK
           (Step 5)
```
