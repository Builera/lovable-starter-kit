# Prompt: Architecture Change

> Use this template when requesting changes that affect system architecture.
> This ensures proper documentation via ADR.

---

```
## Architecture Change Request

### Problem Statement
[What problem are we trying to solve? Why is the current approach insufficient?]

### Constraints
- [Technical constraints]
- [Business constraints]
- [Timeline constraints]

### Proposed Approach
[High-level description of the proposed solution]

### Impact Areas
- [ ] Database schema
- [ ] API contracts
- [ ] Frontend architecture
- [ ] Authentication/Authorization
- [ ] External integrations
- [ ] Performance
- [ ] Security

---

## Process Requirements

You must follow the READ → PLAN → ACT → VERIFY → UPDATE workflow:

### READ (Required)
Read context files and output a 5-line Context Summary.
Also read:
- `docs/architecture/overview.md` — current architecture
- `docs/adr/` — existing architecture decisions

### PLAN (Required)
- List alternatives considered (at least 2-3)
- Pros/cons for each
- Recommended approach with justification
- Migration/rollback strategy
- Files to modify

### ACT
- Implement changes
- Update documentation
- Ensure backward compatibility (or document breaking changes)

### VERIFY
- Test affected functionality
- Verify no regressions
- Run build/lint/tests

### UPDATE (Required)
After implementation, update ALL of these:
- [ ] CHANGELOG.md — document the change
- [ ] .lovable/memory/activeContext.md — update current state
- [ ] .lovable/memory/progress.md — mark as done
- [ ] docs/adr/[NNN]-[slug].md — create new ADR with:
  - Context
  - Decision
  - Alternatives Considered
  - Consequences (positive, negative, neutral)
- [ ] docs/architecture/overview.md — update if system flow changed

---

## ADR Template

Create a new file: `docs/adr/[NNN]-[descriptive-slug].md`

```markdown
# ADR-[NNN]: [Title]

**Date:** [Today's date]
**Status:** Proposed
**Deciders:** [Who made this decision]

## Context
[Why are we making this decision?]

## Decision
[What are we doing?]

## Alternatives Considered
### Option 1: [Name]
Pros: ...
Cons: ...

### Option 2: [Name] (Selected)
Pros: ...
Cons: ...
Why selected: ...

## Consequences
### Positive
- ...

### Negative
- ...

### Neutral
- ...
```

---

## Important
- Architecture changes MUST have an ADR
- Consider backward compatibility
- Document migration path if breaking
```

---

## Quick Version

```
Architecture Change: [One-line description]

Problem: [What's not working]
Constraints: [Limits we must work within]
Proposed: [Solution approach]

Follow READ→PLAN→ACT→VERIFY→UPDATE.

REQUIRED:
1. Create ADR in docs/adr/ with:
   - Context / Decision / Alternatives / Consequences
2. Update docs/architecture/overview.md if system flow changes
3. Update CHANGELOG + activeContext + progress
```
