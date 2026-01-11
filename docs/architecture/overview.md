# System Architecture Overview

> Single Source of Truth for system architecture. Keep this updated.

---

## What This System Is

<!-- 3-7 sentences describing the product -->

[Describe what the system does, its core purpose, and primary value proposition]

---

## Core Modules

| Module | Responsibility | Key Files |
|--------|---------------|-----------|
| **Auth** | User authentication & authorization | `src/auth/*` |
| **UI** | Shared components & design system | `src/components/*` |
| **Pages** | Route-level components | `src/pages/*` |
| **Hooks** | Shared logic & state | `src/hooks/*` |
| **API** | Backend communication | `src/api/*` |

---

## Data Flow (Happy Path)

```
User Action
    ↓
UI Component (React)
    ↓
Hook / Handler
    ↓
API Client (React Query)
    ↓
Backend (Lovable Cloud / Supabase)
    ↓
Database (PostgreSQL)
    ↓
Response → UI Update
```

---

## Key Contracts

### API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/resource` | GET | List resources |
| `/api/resource/:id` | GET | Get single resource |
| `/api/resource` | POST | Create resource |

### Database Tables

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `users` | User accounts | id, email, created_at |
| `[table]` | [Purpose] | [Fields] |

### Events / Messages

| Event | Trigger | Payload |
|-------|---------|---------|
| `user.created` | New signup | `{ userId, email }` |

---

## External Integrations

| Service | Purpose | Integration Point |
|---------|---------|-------------------|
| [Service] | [Purpose] | [How integrated] |

---

## Security Model

### Authentication

- [Auth method description]

### Authorization

- [Permission model description]

### Data Access

- RLS policies on all tables
- [Other security measures]

---

## Operational Notes

### Deployment

- Frontend: [Deployment method]
- Backend: [Deployment method]
- Database: [Management approach]

### Monitoring

- [Monitoring tools/approach]

### Backup

- [Backup strategy]

---

## Architecture Diagrams

### High-Level System Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   API       │────▶│  Database   │
│   (React)   │◀────│   (Edge)    │◀────│  (Postgres) │
└─────────────┘     └─────────────┘     └─────────────┘
```

---

*Last updated: [Date]*
*Related ADRs: [List relevant ADRs]*
