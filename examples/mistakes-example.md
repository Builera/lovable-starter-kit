# Mistakes & Lessons Learned — TaskFlow Pro

> This is a **filled example** of mistakes.md for reference.
> Every bug fix should have an entry with symptom, root cause, fix, and guardrail.

---

## Mistake Log

### 2026-01-08: Safari Drag-Drop Z-Index Bug

**Symptom:**
Tasks being dragged would disappear behind other columns on Safari 17. Users reported "cards vanishing" during drag operations.

**Root Cause:**
Safari handles `transform` and `z-index` differently. The dragged element's `transform: translate()` was creating a new stacking context, but the parent column had `overflow: hidden` which clipped the transformed element.

**Fix:**
```tsx
// Before - in BoardColumn.tsx
<div className="overflow-hidden rounded-lg">

// After
<div className="overflow-visible rounded-lg">
// Added overflow-hidden only to the inner scroll container
```

**Guardrail:**
- [ ] Added Safari to manual test checklist
- [x] Created `BROWSER_COMPAT.md` noting Safari stacking context quirks
- [x] Added comment in BoardColumn.tsx explaining the overflow requirement

**Severity:** Medium (12% of users affected)
**Time to fix:** 2 hours
**ADR:** N/A

---

### 2026-01-05: Race Condition in Task Creation

**Symptom:**
Occasionally, newly created tasks would show "undefined" as the title for a split second before correcting. Happened ~5% of task creations.

**Root Cause:**
Optimistic update was using `Date.now()` as temporary ID, but the mutation callback was comparing against `task.id` which was `undefined` until server response. The optimistic cache update and server response were racing.

**Fix:**
```tsx
// Before
const tempId = Date.now();
queryClient.setQueryData(['tasks'], (old) => [...old, { id: tempId, ...newTask }]);

// After - using onMutate properly
onMutate: async (newTask) => {
  await queryClient.cancelQueries({ queryKey: ['tasks'] });
  const previousTasks = queryClient.getQueryData(['tasks']);
  const tempTask = { ...newTask, id: `temp-${Date.now()}`, _isOptimistic: true };
  queryClient.setQueryData(['tasks'], (old) => [...old, tempTask]);
  return { previousTasks, tempTask };
},
onSuccess: (serverTask, _, context) => {
  // Replace temp task with server response
  queryClient.setQueryData(['tasks'], (old) => 
    old.map(t => t.id === context.tempTask.id ? serverTask : t)
  );
}
```

**Guardrail:**
- [x] Added `_isOptimistic` flag pattern to systemPatterns.md
- [x] Created custom `useOptimisticMutation` hook that handles this pattern
- [ ] TODO: Add unit test for race condition scenario

**Severity:** Low (cosmetic, self-correcting)
**Time to fix:** 3 hours
**ADR:** N/A

---

### 2026-01-02: Auth Token Expiry Causing Silent Failures

**Symptom:**
Users logged in for >1 hour would see API calls fail silently. Tasks wouldn't save, but no error shown. Required page refresh to fix.

**Root Cause:**
Supabase access token expires after 1 hour by default. Our API client wasn't refreshing the token, and error handling was swallowing 401 errors instead of triggering re-auth.

**Fix:**
```tsx
// Added to src/lib/supabase/client.ts
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'TOKEN_REFRESHED') {
    console.log('Token refreshed automatically');
  }
  if (event === 'SIGNED_OUT') {
    // Clear query cache and redirect
    queryClient.clear();
    window.location.href = '/login';
  }
});

// Added global error handler
queryClient.setDefaultOptions({
  queries: {
    retry: (failureCount, error) => {
      if (error?.status === 401) {
        supabase.auth.signOut();
        return false;
      }
      return failureCount < 3;
    }
  }
});
```

**Guardrail:**
- [x] Added auth token handling to techContext.md
- [x] Created `AuthProvider` component that handles token lifecycle
- [x] Added toast notification for session expiry
- [x] Integration test: user stays logged in for simulated 2 hours

**Severity:** High (data loss risk, frustrating UX)
**Time to fix:** 4 hours
**ADR:** ADR-006 (Auth Token Strategy)

---

## Pattern Recognition

### Common Root Causes (Last 30 Days)

| Category | Count | Notes |
|----------|-------|-------|
| Race conditions | 2 | Usually async/optimistic updates |
| Browser compatibility | 1 | Safari stacking contexts |
| Auth/session issues | 1 | Token expiry handling |
| Type mismatches | 0 | TypeScript catching these |

### Prevention Checklist (Updated)

Before merging, verify:
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested with slow network (DevTools throttling)
- [ ] Tested after 1+ hour session
- [ ] Optimistic updates have proper rollback
- [ ] Error states have user-visible feedback

---

*Last updated: 2026-01-08*
