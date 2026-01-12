# Technical Context — TaskFlow Pro

> This is a **filled example** of techContext.md for reference.

---

## Tech Stack

### Frontend

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | React | 18.3 |
| Build Tool | Vite | 5.4 |
| Styling | Tailwind CSS | 3.4 |
| Language | TypeScript | 5.3 |
| UI Components | shadcn/ui | latest |
| State Management | Zustand | 4.5 |
| Data Fetching | TanStack Query | 5.x |
| Forms | React Hook Form + Zod | 7.x / 3.x |
| Drag & Drop | @dnd-kit/core | 6.x |
| Charts | Recharts | 2.x |

### Backend

| Layer | Technology | Notes |
|-------|------------|-------|
| Backend | Lovable Cloud (Supabase) | PostgreSQL + Edge Functions |
| Database | PostgreSQL 15 | With RLS policies |
| Auth | Supabase Auth | Email + Google OAuth |
| Storage | Supabase Storage | For file attachments |
| Realtime | Supabase Realtime | For live collaboration |

### Infrastructure

| Service | Purpose |
|---------|---------|
| Vercel | Frontend hosting (via Lovable) |
| Supabase | Backend infrastructure |
| Resend | Transactional emails |
| Stripe | Payment processing |

---

## Conventions

### File Naming

- Components: `PascalCase.tsx` (e.g., `TaskCard.tsx`, `BoardColumn.tsx`)
- Hooks: `use-kebab-case.ts` (e.g., `use-tasks.ts`, `use-board-state.ts`)
- Utils: `camelCase.ts` (e.g., `formatDate.ts`, `calculateDuration.ts`)
- Types: `types.ts` or `*.types.ts` (e.g., `task.types.ts`)
- Constants: `SCREAMING_SNAKE_CASE` in `constants.ts`

### Code Style

- Use functional components with hooks exclusively
- Prefer named exports over default exports
- Use explicit TypeScript types (never `any`, avoid `unknown` when possible)
- Keep components under 200 lines; extract sub-components
- Co-locate related files (component + hook + types in same folder)

### Component Structure

```tsx
// 1. Imports (external → internal → types)
// 2. Types/interfaces (if not in separate file)
// 3. Constants
// 4. Component function
//    - Hooks first
//    - Derived state
//    - Handlers
//    - Effects
//    - Render
```

### Git Conventions

- Branch naming: `feature/task-123-short-description`, `fix/issue-456-bug-name`
- Commit format: `type(scope): short description` (e.g., `feat(board): add drag-drop reordering`)
- PR requires: 
  - Changelog entry
  - Memory files updated
  - At least 1 approval

---

## Architecture Decisions

| Decision | ADR | Status |
|----------|-----|--------|
| Use Zustand for client state | ADR-002 | Accepted |
| Use Supabase Realtime for collaboration | ADR-003 | Accepted |
| Implement optimistic updates | ADR-004 | Accepted |
| Use edge functions for Stripe webhooks | ADR-005 | Accepted |

---

## External Dependencies

| Service | Purpose | Docs |
|---------|---------|------|
| Supabase | Database, Auth, Realtime | [docs.supabase.com](https://supabase.com/docs) |
| Stripe | Payments | [stripe.com/docs](https://stripe.com/docs) |
| Resend | Emails | [resend.com/docs](https://resend.com/docs) |

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Supabase project URL | Yes |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `VITE_STRIPE_PUBLIC_KEY` | Stripe publishable key | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret (Edge Function) | Yes |
| `RESEND_API_KEY` | Email API key (Edge Function) | Yes |

---

## Known Technical Debt

| Item | Priority | Notes |
|------|----------|-------|
| Migrate to React 19 | Low | Wait for ecosystem stability |
| Add E2E tests with Playwright | Medium | Currently only unit tests |
| Optimize bundle size | Medium | Some unused shadcn components |
| Add proper error boundaries | High | Only partial coverage |

---

*Last updated: 2026-01-10*
