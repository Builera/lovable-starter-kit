# Mistakes & Bug Patterns

> Learn from mistakes. Every bug fixed should have a guardrail to prevent recurrence.

---

## Entry Template

```markdown
## [BUG] Short Title

**Date:** YYYY-MM-DD
**Severity:** Low | Medium | High | Critical

### Symptom
What did we observe?

### Root Cause
Why did it happen?

### Fix
What did we change?

### Guardrail
What prevents this from happening again?
- [ ] Test added
- [ ] Lint rule added
- [ ] Type constraint added
- [ ] Documentation updated

### Related Files
- `path/to/file.ts`
```

---

## Recorded Mistakes

### [BUG] Example: Unhandled Promise Rejection

**Date:** 2024-01-10
**Severity:** Medium

**Symptom:**
App crashed when API returned 500 error.

**Root Cause:**
Missing try/catch in async function.

**Fix:**
Added error handling with user-friendly error message.

```tsx
// Before
const data = await fetchData();

// After
try {
  const data = await fetchData();
} catch (error) {
  toast.error('Failed to load data');
  console.error(error);
}
```

**Guardrail:**
- [x] Added ESLint rule for unhandled promises
- [x] Created error handling utility
- [x] Added to code review checklist

**Related Files:**
- `src/hooks/use-data.ts`
- `src/utils/error-handling.ts`

---

<!-- Add more mistakes below -->
