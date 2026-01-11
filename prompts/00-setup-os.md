# Prompt: Setup AI Operating System

> Use this prompt when setting up a NEW project with the AI Operating System.
> Copy and paste this entire prompt to Lovable.

---

```
You are working on my Lovable project repository.

Goal: Install a reusable "AI Project Operating System" into this repo so that any future AI coding work follows strict rules and leaves a knowledge trail.

## Tasks (must do all)

1) Create the following structure and files (if missing):
- CHANGELOG.md
- .lovable/rules.md
- .lovable/memory/projectbrief.md
- .lovable/memory/techContext.md
- .lovable/memory/activeContext.md
- .lovable/memory/progress.md
- .lovable/memory/systemPatterns.md
- .lovable/memory/patterns/successes.md
- .lovable/memory/patterns/mistakes.md
- docs/architecture/overview.md
- docs/adr/000-template.md
- docs/errors/000-error-template.md
- .github/PULL_REQUEST_TEMPLATE.md

2) Fill these files with actionable templates:
- rules.md must include: READ→PLAN→ACT→VERIFY→UPDATE workflow, mandatory UPDATE step, and Definition of Done checklist.
- mistakes.md must include the structured bug template (Symptom/Root cause/Fix/Guardrail/Related files).
- ADR template must include Context/Decision/Alternatives/Consequences.
- architecture/overview.md must be Single Source of Truth template.

3) Enforce usage via PR template:
- PR template must require: CHANGELOG update + activeContext/progress updates + mistakes (if bug) + ADR (if architecture).

## Behavior Rules for you

- Do not change product code logic in this setup task; only add the operating system files/templates.
- Keep templates concise but actionable.
- Use consistent headings and checklists.

Deliverable: commit-ready file changes.
```
