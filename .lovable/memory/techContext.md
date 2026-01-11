# Technical Context

> Technical stack, conventions, and constraints for this project.

---

## Tech Stack

### Frontend

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | React | 18.x |
| Build Tool | Vite | 5.x |
| Styling | Tailwind CSS | 3.x |
| Language | TypeScript | 5.x |
| UI Components | shadcn/ui | latest |

### Backend

| Layer | Technology | Notes |
|-------|------------|-------|
| Backend | Lovable Cloud / Supabase | [Details] |
| Database | PostgreSQL | [Details] |
| Auth | [Provider] | [Details] |

---

## Conventions

### File Naming

- Components: `PascalCase.tsx` (e.g., `UserCard.tsx`)
- Hooks: `use-kebab-case.ts` (e.g., `use-auth.ts`)
- Utils: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `types.ts` or `*.types.ts`

### Code Style

- Use functional components with hooks
- Prefer named exports
- Use explicit TypeScript types (avoid `any`)
- Keep components under 200 lines

### Git Conventions

- Branch naming: `feature/`, `fix/`, `refactor/`
- Commit format: `type: short description`
- PR requires: changelog + memory updates

---

## Architecture Decisions

> Reference ADRs in `docs/adr/` for major decisions

| Decision | ADR | Status |
|----------|-----|--------|
| [Decision 1] | [ADR-XXX] | Accepted |

---

## External Dependencies

| Service | Purpose | Docs |
|---------|---------|------|
| [Service] | [Purpose] | [Link] |

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_*` | [Description] | Yes/No |

---

## Known Technical Debt

| Item | Priority | Notes |
|------|----------|-------|
| [Debt item] | High/Med/Low | [Notes] |

---

*Last updated: [Date]*
