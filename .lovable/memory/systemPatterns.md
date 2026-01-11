# System Patterns

> Documented patterns, conventions, and architectural decisions used in this project.

---

## Component Patterns

### Standard Component Structure

```tsx
// imports
import { useState } from 'react';
import { ComponentProps } from './types';

// types (if not in separate file)
interface Props extends ComponentProps {
  // props
}

// component
export const MyComponent = ({ prop1, prop2 }: Props) => {
  // hooks first
  const [state, setState] = useState();
  
  // handlers
  const handleAction = () => {};
  
  // render
  return (
    <div>
      {/* content */}
    </div>
  );
};
```

### Container/Presenter Pattern

- **Container:** Handles logic, data fetching, state
- **Presenter:** Pure UI, receives props, no side effects

---

## Data Flow Patterns

### State Management

- Local state: `useState` for component-specific state
- Shared state: [Context/Zustand/etc.]
- Server state: React Query for async data

### API Calls

```tsx
// Use React Query for data fetching
const { data, isLoading } = useQuery({
  queryKey: ['resource', id],
  queryFn: () => fetchResource(id),
});
```

---

## Error Handling Patterns

### Component Level

```tsx
// Use error boundaries for component trees
<ErrorBoundary fallback={<ErrorFallback />}>
  <Component />
</ErrorBoundary>
```

### API Level

```tsx
// Consistent error handling
try {
  const result = await apiCall();
  return { data: result, error: null };
} catch (error) {
  console.error('API Error:', error);
  return { data: null, error };
}
```

---

## Form Patterns

### Using React Hook Form

```tsx
const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: {},
});
```

---

## Testing Patterns

### Unit Tests

- Test components in isolation
- Mock external dependencies
- Test user interactions

### Integration Tests

- Test feature flows
- Use realistic data

---

## Performance Patterns

### Memoization

- Use `useMemo` for expensive computations
- Use `useCallback` for stable function references
- Use `React.memo` for pure components

### Lazy Loading

```tsx
const LazyComponent = lazy(() => import('./HeavyComponent'));
```

---

## Security Patterns

- Never expose secrets in frontend code
- Validate all user inputs
- Use RLS policies for database access

---

*Last updated: [Date]*
