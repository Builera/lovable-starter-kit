# Decision Tree: Component & Library Choices

Quick reference for choosing the right approach for common implementation decisions.

---

## Form Implementation

```
NEED A FORM?
    │
    ├─► Simple form (1-3 fields, no validation)
    │       └─► Use: Basic React state
    │           useState + onChange handlers
    │
    ├─► Medium form (4-10 fields, basic validation)
    │       └─► Use: react-hook-form
    │           Simple registration, built-in validation
    │
    └─► Complex form (nested, dynamic, complex validation)
            └─► Use: react-hook-form + zod
                Schema validation, type inference
                useFieldArray for dynamic fields
```

---

## State Management

```
NEED STATE?
    │
    ├─► Component-only state
    │       └─► Use: useState
    │
    ├─► Shared between few components (parent-child)
    │       └─► Use: Lift state up + props
    │
    ├─► Shared across many components (same tree)
    │       └─► Use: React Context
    │           Create context + provider
    │
    ├─► Server state (API data)
    │       └─► Use: TanStack Query (react-query)
    │           Handles caching, loading, error states
    │
    ├─► Complex client state with actions
    │       └─► Use: useReducer
    │           Or Zustand for global
    │
    └─► URL-based state (filters, pagination)
            └─► Use: URL params + react-router
                useSearchParams hook
```

---

## Data Fetching

```
NEED TO FETCH DATA?
    │
    ├─► One-time fetch, no caching needed
    │       └─► Use: useEffect + fetch
    │           Simple, no dependencies
    │
    ├─► Cached data, refetching, loading states
    │       └─► Use: TanStack Query
    │           useQuery for GET
    │           useMutation for POST/PUT/DELETE
    │
    ├─► Real-time updates needed
    │       └─► Polling: TanStack Query with refetchInterval
    │           WebSocket: Native WebSocket or library
    │           Supabase: Real-time subscriptions
    │
    └─► Paginated/infinite data
            └─► Use: TanStack Query useInfiniteQuery
```

---

## Styling Approach

```
NEED STYLING?
    │
    ├─► Standard UI components
    │       └─► Use: shadcn/ui + Tailwind
    │           Pre-built, customizable
    │
    ├─► Custom component styling
    │       └─► Use: Tailwind classes
    │           Follow design system tokens
    │
    ├─► Dynamic styles based on props
    │       └─► Use: cn() utility + conditional classes
    │           Or cva() for variants
    │
    ├─► Complex animations
    │       └─► Use: Framer Motion
    │           Or Tailwind animate for simple
    │
    └─► Theme-aware colors
            └─► Use: CSS variables from index.css
                Never hardcode colors
```

---

## Modal/Dialog Implementation

```
NEED MODAL/POPUP?
    │
    ├─► Simple confirmation
    │       └─► Use: AlertDialog from shadcn/ui
    │
    ├─► Form in modal
    │       └─► Use: Dialog from shadcn/ui
    │           Controlled with useState
    │
    ├─► Slide-over panel
    │       └─► Use: Sheet from shadcn/ui
    │
    ├─► Tooltip/hover info
    │       └─► Use: Tooltip from shadcn/ui
    │
    └─► Context menu (right-click)
            └─► Use: ContextMenu from shadcn/ui
```

---

## Navigation Implementation

```
NEED NAVIGATION?
    │
    ├─► Simple page links
    │       └─► Use: Link from react-router-dom
    │
    ├─► Programmatic navigation
    │       └─► Use: useNavigate hook
    │
    ├─► Tab navigation
    │       └─► Use: Tabs from shadcn/ui
    │           Or URL-based with routes
    │
    ├─► Breadcrumbs
    │       └─► Use: Breadcrumb from shadcn/ui
    │
    └─► Mobile navigation
            └─► Use: Sheet for mobile menu
                Hide/show based on viewport
```

---

## List/Table Implementation

```
NEED TO DISPLAY DATA LIST?
    │
    ├─► Simple list (< 50 items)
    │       └─► Use: map() with Card components
    │
    ├─► Table with sorting/filtering
    │       └─► Use: Table from shadcn/ui
    │           Add custom sort/filter logic
    │
    ├─► Complex data table
    │       └─► Use: TanStack Table
    │           Full-featured data grid
    │
    ├─► Virtualized list (1000+ items)
    │       └─► Use: TanStack Virtual
    │           Only renders visible items
    │
    └─► Drag-and-drop list
            └─► Use: dnd-kit
                Or @hello-pangea/dnd
```

---

## Date/Time Handling

```
NEED DATE/TIME?
    │
    ├─► Display formatted date
    │       └─► Use: date-fns format()
    │
    ├─► Date picker input
    │       └─► Use: Calendar from shadcn/ui
    │           With Popover for dropdown
    │
    ├─► Date range picker
    │       └─► Use: Calendar with mode="range"
    │
    ├─► Relative time ("2 hours ago")
    │       └─► Use: date-fns formatDistanceToNow()
    │
    └─► Time zones
            └─► Use: date-fns-tz
                Store UTC, display local
```

---

## Quick Reference Table

| Need | Simple Solution | Advanced Solution |
|------|-----------------|-------------------|
| Form | useState | react-hook-form + zod |
| Local State | useState | useReducer |
| Shared State | Context | Zustand |
| Server State | useEffect + fetch | TanStack Query |
| Styling | Tailwind classes | cva() variants |
| Modal | Dialog | Sheet (slide-over) |
| Table | Basic Table | TanStack Table |
| Dates | date-fns | react-day-picker |
| Animation | Tailwind animate | Framer Motion |
| Icons | lucide-react | lucide-react |
