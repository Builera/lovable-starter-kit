# Decision Tree: Error Handling

Quick reference for choosing the right approach based on error type.

---

## Error Type → Approach Matrix

```
ERROR DETECTED
      │
      ▼
┌─────────────────────────────────────────────────────────────┐
│                    What type of error?                       │
└─────────────────────────────────────────────────────────────┘
      │
      ├─► BUILD ERROR ──────────► Go to Section 1
      │
      ├─► RUNTIME ERROR ────────► Go to Section 2
      │
      ├─► TYPE ERROR ───────────► Go to Section 3
      │
      ├─► NETWORK ERROR ────────► Go to Section 4
      │
      ├─► STATE ERROR ──────────► Go to Section 5
      │
      └─► LOGIC ERROR ──────────► Go to Section 6
```

---

## Section 1: Build Errors

```
BUILD ERROR
    │
    ├─► "Cannot find module"
    │       └─► Check: Import path correct?
    │           ├─► Yes → Package installed? → npm install
    │           └─► No → Fix import path
    │
    ├─► "Unexpected token"
    │       └─► Check: Syntax error
    │           ├─► Missing bracket/parenthesis
    │           ├─► Unclosed string
    │           └─► Invalid JSX
    │
    ├─► "Module not found"
    │       └─► Check: File exists?
    │           ├─► Yes → Check case sensitivity
    │           └─► No → Create file or fix path
    │
    └─► Other build error
            └─► Read full error message
                Search error online
                Check recent changes
```

---

## Section 2: Runtime Errors

```
RUNTIME ERROR
    │
    ├─► "TypeError: Cannot read property of undefined"
    │       └─► Add null check: obj?.property
    │           Add default value: obj?.property ?? default
    │           Check data loading sequence
    │
    ├─► "TypeError: X is not a function"
    │       └─► Check: Import correct?
    │           Check: Named vs default export
    │           Check: Object method vs function
    │
    ├─► "ReferenceError: X is not defined"
    │       └─► Check: Variable declared?
    │           Check: Scope correct?
    │           Check: Import missing?
    │
    ├─► "Maximum call stack exceeded"
    │       └─► Check: Infinite loop?
    │           Check: Recursive call without base case?
    │           Check: useEffect dependencies?
    │
    └─► "ChunkLoadError"
            └─► Clear cache and rebuild
                Check code splitting configuration
```

---

## Section 3: Type Errors (TypeScript)

```
TYPE ERROR
    │
    ├─► "Property X does not exist on type Y"
    │       └─► Options:
    │           ├─► Add property to interface
    │           ├─► Use type assertion (as Type)
    │           ├─► Check if using wrong type
    │           └─► Use optional chaining
    │
    ├─► "Type X is not assignable to type Y"
    │       └─► Options:
    │           ├─► Fix the value to match type
    │           ├─► Update the type definition
    │           ├─► Use union type (X | Y)
    │           └─► Use generic type
    │
    ├─► "Argument of type X is not assignable"
    │       └─► Check function signature
    │           Check parameter order
    │           Check optional vs required
    │
    └─► Generic type errors
            └─► Read error carefully
                Check type definitions
                Consider using 'unknown' then narrowing
```

---

## Section 4: Network Errors

```
NETWORK ERROR
    │
    ├─► 400 Bad Request
    │       └─► Check: Request body format
    │           Check: Required fields
    │           Check: Data types
    │
    ├─► 401 Unauthorized
    │       └─► Check: Auth token present?
    │           Check: Token expired?
    │           Check: Token format correct?
    │
    ├─► 403 Forbidden
    │       └─► Check: User has permission?
    │           Check: Resource access rules
    │           Check: CORS configuration
    │
    ├─► 404 Not Found
    │       └─► Check: URL spelling
    │           Check: Resource exists
    │           Check: API version
    │
    ├─► 500 Internal Server Error
    │       └─► Check: Server logs
    │           Check: Request payload
    │           Try simpler request
    │
    └─► CORS Error
            └─► Check: Server CORS headers
                Check: Request origin
                Use proxy if development
```

---

## Section 5: State Errors

```
STATE ERROR
    │
    ├─► State not updating
    │       └─► Check: setState called correctly?
    │           Check: Immutable update? (spread operator)
    │           Check: Async timing?
    │           Check: Correct component re-rendering?
    │
    ├─► Stale state in callback
    │       └─► Use functional update: setState(prev => ...)
    │           Add to useCallback dependencies
    │           Use useRef for latest value
    │
    ├─► Infinite re-render loop
    │       └─► Check: useEffect dependencies
    │           Check: State update in render
    │           Check: Object/array in dependencies
    │
    └─► State lost on navigation
            └─► Lift state up
                Use context
                Use URL state
                Use persistent storage
```

---

## Section 6: Logic Errors

```
LOGIC ERROR (wrong behavior, no crash)
    │
    ├─► Wrong output/result
    │       └─► Add console.log at each step
    │           Check algorithm logic
    │           Check edge cases
    │           Verify input data
    │
    ├─► Condition not triggering
    │       └─► Log condition values
    │           Check comparison operators (== vs ===)
    │           Check truthy/falsy values
    │
    ├─► Timing issues
    │       └─► Check async/await usage
    │           Check Promise handling
    │           Consider race conditions
    │
    └─► Works sometimes, fails sometimes
            └─► Check for race conditions
                Check for random/time-based logic
                Check for order-dependent operations
```

---

## Quick Reference Table

| Error Type | First Check | Common Fix |
|------------|-------------|------------|
| Cannot find module | Import path | Fix path or install package |
| Cannot read undefined | Null check | Add optional chaining (?.) |
| Not a function | Import statement | Fix named/default import |
| Type not assignable | Type definition | Update interface or cast |
| 401 Unauthorized | Auth token | Refresh or re-authenticate |
| 404 Not Found | URL | Fix endpoint path |
| State not updating | setState call | Use immutable update |
| Infinite loop | useEffect deps | Fix dependency array |
