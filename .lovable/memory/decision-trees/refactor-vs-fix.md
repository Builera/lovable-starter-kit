# Decision Tree: Refactor vs Quick Fix

When to do a proper refactor vs a quick fix. Use this to make consistent decisions.

---

## The Core Question

```
PROBLEM IDENTIFIED
       │
       ▼
┌──────────────────────────────────────┐
│  Is this a one-time fix or will we   │
│  encounter this pattern again?        │
└──────────────────────────────────────┘
       │
       ├─► One-time ────────► QUICK FIX
       │
       └─► Will recur ──────► Consider REFACTOR
                                    │
                                    ▼
                            [Evaluate factors below]
```

---

## Decision Factors

### Factor 1: Scope of Change

```
How many files need to change?
    │
    ├─► 1-2 files
    │       └─► Lean toward: QUICK FIX
    │           Low risk, easy to review
    │
    ├─► 3-5 files
    │       └─► Evaluate: Other factors
    │           Could go either way
    │
    └─► 6+ files
            └─► Lean toward: REFACTOR
                But break into smaller PRs
```

### Factor 2: Time Pressure

```
What's the urgency?
    │
    ├─► Production is down
    │       └─► QUICK FIX NOW
    │           Refactor later (create ticket)
    │
    ├─► User-facing bug
    │       └─► QUICK FIX preferred
    │           Unless fix is obviously wrong
    │
    ├─► Feature request
    │       └─► Either is fine
    │           Consider long-term value
    │
    └─► Tech debt cleanup
            └─► REFACTOR
                This is literally the time for it
```

### Factor 3: Risk Assessment

```
What could go wrong?
    │
    ├─► Low risk (isolated change)
    │       └─► Either approach is fine
    │           Quick fix is faster
    │
    ├─► Medium risk (affects multiple features)
    │       └─► REFACTOR with tests
    │           Proper testing needed
    │
    └─► High risk (core functionality)
            └─► REFACTOR carefully
                Add tests first
                Incremental changes
                Easy rollback plan
```

### Factor 4: Code Quality Impact

```
What happens to code quality?
    │
    ├─► Quick fix keeps code clean
    │       └─► QUICK FIX ✓
    │           Best of both worlds
    │
    ├─► Quick fix adds minor debt
    │       └─► QUICK FIX + TODO comment
    │           Document for later
    │
    ├─► Quick fix makes code worse
    │       └─► REFACTOR
    │           Don't make it harder for future
    │
    └─► This is the 3rd quick fix in same area
            └─► STOP. REFACTOR NOW.
                Pattern indicates structural issue
```

---

## Decision Matrix

| Urgency | Scope | Risk | Recommendation |
|---------|-------|------|----------------|
| High | Small | Low | Quick Fix |
| High | Small | High | Quick Fix + Rollback Plan |
| High | Large | Any | Quick Fix + Schedule Refactor |
| Low | Small | Low | Quick Fix |
| Low | Small | High | Refactor |
| Low | Large | Low | Refactor |
| Low | Large | High | Refactor (phased) |

---

## Quick Fix Checklist

If choosing QUICK FIX:

- [ ] Change is minimal and focused
- [ ] No new patterns introduced
- [ ] Existing tests still pass
- [ ] Code is still readable
- [ ] TODO added if debt introduced
- [ ] Ticket created for future refactor (if needed)

---

## Refactor Checklist

If choosing REFACTOR:

- [ ] Clear goal defined
- [ ] Scope is bounded (not endless)
- [ ] Tests exist or will be added
- [ ] Can be done incrementally
- [ ] Rollback plan exists
- [ ] Team/user informed if significant

---

## Refactor Patterns

### Safe Refactoring Steps

1. **Add tests first** (if missing)
2. **Make change transparent** (both old and new work)
3. **Switch to new** (update usages)
4. **Remove old** (clean up)
5. **Verify** (all tests pass)

### Red Flags - Stop Refactoring

- Scope keeps growing
- Breaking unrelated tests
- "While I'm here..." thoughts
- No clear end state
- Spending 2x estimated time

---

## Common Scenarios

### Scenario: Bug in component
```
Bug found in Button component
    │
    └─► Is the fix obvious?
        ├─► Yes → QUICK FIX
        └─► No, component is messy
            └─► Is Button used everywhere?
                ├─► Yes → QUICK FIX + schedule refactor
                └─► No → REFACTOR the component
```

### Scenario: New feature needs old code
```
New feature requires changes to legacy code
    │
    └─► Can feature work with current code?
        ├─► Yes (with small changes) → QUICK FIX
        └─► No (major changes needed)
            └─► Refactor ONLY what's needed
                Don't refactor entire legacy system
```

### Scenario: Copy-paste detected
```
Found duplicated code
    │
    └─► Is this the 2nd or 3rd+ occurrence?
        ├─► 2nd → Note it, don't refactor yet
        └─► 3rd+ → REFACTOR to shared utility
            "Rule of three"
```

### Scenario: Performance issue
```
Performance problem identified
    │
    └─► Is root cause clear?
        ├─► Yes → FIX the specific issue
        └─► No → PROFILE first, then decide
            Don't refactor based on guesses
```

---

## Golden Rules

1. **Never refactor without a test** (or ability to verify)
2. **Never refactor in a crisis** (fix first, refactor later)
3. **Never refactor "while you're there"** (stay focused)
4. **Always leave code better than you found it** (within reason)
5. **Small, reversible changes beat big rewrites**
