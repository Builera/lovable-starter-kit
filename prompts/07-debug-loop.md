# Debug Loop Protocol

Structured debugging workflow for systematic problem resolution.

---

## When to Use

- Application not behaving as expected
- Console shows errors or warnings
- Network requests failing
- UI not rendering correctly
- State not updating properly

---

## Debug Loop Structure

```
OBSERVE → HYPOTHESIZE → TEST → CONCLUDE → ITERATE
   ↑                                         ↓
   └─────────────────────────────────────────┘
              (max 3 iterations)
```

---

## Phase 1: OBSERVE

### 1.1 Gather Evidence

```markdown
## Debug Session: [Issue Title]
**Started:** [Timestamp]
**Reported Symptom:** [What user sees/reports]

### Console Logs
```
[Paste relevant console output]
```

### Network Requests
| Request | Status | Response |
|---------|--------|----------|
| GET /api/... | 200/404/500 | [Summary] |

### Current State
- Component: [Name]
- Props received: [Values]
- State values: [Values]

### Expected vs Actual
| Aspect | Expected | Actual |
|--------|----------|--------|
| [What] | [Should be] | [Is] |
```

### 1.2 Identify Error Category

- [ ] **Syntax Error**: Code won't compile
- [ ] **Type Error**: TypeScript complaints
- [ ] **Runtime Error**: Crashes during execution
- [ ] **Logic Error**: Wrong behavior, no crash
- [ ] **Network Error**: API/fetch issues
- [ ] **State Error**: State not updating correctly
- [ ] **Render Error**: UI not displaying correctly

---

## Phase 2: HYPOTHESIZE

### 2.1 Generate Hypotheses

List up to 3 possible causes (most likely first):

```markdown
### Hypotheses (Ranked by Likelihood)

**H1 (70%):** [Most likely cause]
- Evidence supporting: [What points to this]
- How to verify: [Quick test]

**H2 (20%):** [Second possibility]
- Evidence supporting: [What points to this]
- How to verify: [Quick test]

**H3 (10%):** [Less likely but possible]
- Evidence supporting: [What points to this]
- How to verify: [Quick test]
```

### 2.2 Quick Verification Checks

Before changing code, verify:

| Check | Result |
|-------|--------|
| File saved? | ✓/✗ |
| Correct file being edited? | ✓/✗ |
| Import paths correct? | ✓/✗ |
| Dependencies installed? | ✓/✗ |
| Dev server running? | ✓/✗ |
| Cache cleared? | ✓/✗ |

---

## Phase 3: TEST

### 3.1 Test Hypothesis (One at a Time)

```markdown
### Testing H1: [Hypothesis]

**Change Made:**
- File: [path]
- Before: [code snippet]
- After: [code snippet]

**Expected Result:** [What should happen]
**Actual Result:** [What happened]
**Conclusion:** Confirmed / Rejected
```

### 3.2 Minimal Change Principle

- Change ONE thing at a time
- Make smallest possible change
- Test immediately after change
- Revert if doesn't help

---

## Phase 4: CONCLUDE

### 4.1 Document Findings

```markdown
### Debug Conclusion

**Root Cause:** [What was actually wrong]
**Fix Applied:** [What change fixed it]
**Verification:** [How confirmed it works]

**Time Spent:** [Duration]
**Iterations:** [Number of test cycles]

**Confidence:** High / Medium / Low
```

### 4.2 Update Pattern Library

If this is a new pattern:

```markdown
**Pattern:** [Name this error pattern]
**Symptom:** [How it manifests]
**Cause:** [Why it happens]
**Fix:** [How to resolve]
**Prevention:** [How to avoid in future]
```

---

## Phase 5: ITERATE (If Needed)

### Iteration Limits

| Iteration | Action |
|-----------|--------|
| 1 | Test most likely hypothesis |
| 2 | Test second hypothesis |
| 3 | Test third hypothesis |
| 4+ | STOP - Escalate to user |

### Escalation Trigger

After 3 failed iterations:

```markdown
## Debug Escalation Required

**Issue:** [Problem description]
**Time Invested:** [Duration]
**Hypotheses Tested:**
1. ❌ [H1] - [Why rejected]
2. ❌ [H2] - [Why rejected]  
3. ❌ [H3] - [Why rejected]

**Current Best Guess:** [What I think now]
**Assistance Needed:** [Specific help required]
```

---

## Debug Checklists by Error Type

### Console Error Checklist
- [ ] Read full error message
- [ ] Check file and line number
- [ ] Look for typos
- [ ] Verify imports
- [ ] Check variable names

### Network Error Checklist
- [ ] Check URL spelling
- [ ] Verify method (GET/POST)
- [ ] Check authentication
- [ ] Inspect request payload
- [ ] Check CORS settings

### Render Error Checklist
- [ ] Check component mounting
- [ ] Verify props passed
- [ ] Check conditional rendering
- [ ] Inspect CSS/styling
- [ ] Check for key prop issues

### State Error Checklist
- [ ] Verify initial state
- [ ] Check setState calls
- [ ] Look for stale closures
- [ ] Verify dependency arrays
- [ ] Check for race conditions

---

## Quick Commands

| Situation | Action |
|-----------|--------|
| Can't reproduce | Add console.log at entry points |
| Intermittent issue | Check async timing, race conditions |
| Works locally, fails in prod | Check environment variables |
| Was working before | Check recent changes |
| Error message unclear | Search error message online |
