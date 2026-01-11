# AI Project Operating System

A complete template for running Lovable projects with AI assistance. This system ensures consistent workflows, knowledge retention, and learning from mistakes.

---

## 🚀 Quick Start

### For New Projects

1. **Clone/Fork this template** to your new project
2. **Fill in the project brief**: `.lovable/memory/projectbrief.md`
3. **Document your tech stack**: `.lovable/memory/techContext.md`
4. **Start building** using the prompts in `prompts/`

### For Existing Projects

1. Copy the `.lovable/`, `docs/`, and `prompts/` directories to your project
2. Copy `.github/PULL_REQUEST_TEMPLATE.md`
3. Create `CHANGELOG.md` if it doesn't exist
4. Fill in the memory files with your project's context

---

## 📁 Directory Structure

```
.
├── .lovable/
│   ├── rules.md                 # AI Constitution (workflow rules)
│   └── memory/
│       ├── projectbrief.md      # What is this project?
│       ├── techContext.md       # Tech stack & conventions
│       ├── activeContext.md     # Current state (update often)
│       ├── progress.md          # Sprint/weekly tracking
│       ├── systemPatterns.md    # Code patterns used
│       └── patterns/
│           ├── successes.md     # What worked well
│           └── mistakes.md      # Bugs & lessons learned
│
├── docs/
│   ├── architecture/
│   │   └── overview.md          # System architecture (SSOT)
│   ├── adr/
│   │   ├── 000-template.md      # ADR template
│   │   └── 001-example-adr.md   # Example ADR
│   └── errors/
│       └── 000-error-template.md # Post-mortem template
│
├── prompts/
│   ├── 00-setup-os.md           # Install OS on new project
│   ├── 01-boot-prompt.md        # Context loading prompt
│   ├── 02-feature-request.md    # Feature request template
│   ├── 03-bug-fix.md            # Bug fix template
│   ├── 04-architecture-change.md # Architecture change template
│   └── 05-weekly-update.md      # Weekly review template
│
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md # PR checklist
│
└── CHANGELOG.md                 # Project changelog
```

---

## 🔄 The Workflow: READ → PLAN → ACT → VERIFY → UPDATE

Every task must follow this workflow:

### Step 1: READ (Required)

Before any work, AI must read:
- `.lovable/memory/projectbrief.md`
- `.lovable/memory/techContext.md`
- `.lovable/memory/activeContext.md`

Output: **Context Summary** (5 lines max)

### Step 2: PLAN

- Checklist of files to modify
- Assumptions (if any)
- Risks + rollback strategy

### Step 3: ACT

- Implement within scope
- Follow conventions
- No scope creep

### Step 4: VERIFY

- Run build/lint/tests
- Or document why not executed

### Step 5: UPDATE (Required)

Always update:
- `CHANGELOG.md`
- `.lovable/memory/activeContext.md`
- `.lovable/memory/progress.md`

If bug fix:
- `.lovable/memory/patterns/mistakes.md`

If architecture decision:
- Create ADR in `docs/adr/`

---

## 📋 Definition of Done

A task is DONE when:

- [ ] Meets acceptance criteria
- [ ] VERIFY completed (or reason documented)
- [ ] CHANGELOG.md updated
- [ ] activeContext.md updated
- [ ] progress.md updated
- [ ] If bug: mistakes.md has entry + guardrail
- [ ] If architecture change: ADR created

---

## 💡 Using the Prompts

### Daily Use

1. **Starting a session**: Use `01-boot-prompt.md` to load context
2. **New feature**: Use `02-feature-request.md`
3. **Fixing a bug**: Use `03-bug-fix.md`
4. **Architecture change**: Use `04-architecture-change.md`

### Weekly

- Use `05-weekly-update.md` to update progress and learnings

### New Project Setup

- Use `00-setup-os.md` to install this system on a new repo

---

## 📚 Memory Bank Files

### projectbrief.md
Foundation document describing what the project is, why it exists, who it's for, and success metrics.

### techContext.md
Technical stack, conventions, coding standards, and architectural decisions.

### activeContext.md
**Update frequently!** Current focus, recent changes, blockers, and next steps.

### progress.md
Sprint/weekly tracking with done, in-progress, blocked items and learnings.

### systemPatterns.md
Code patterns and conventions used in this specific project.

### patterns/successes.md
What worked well — replicate these patterns.

### patterns/mistakes.md
Bugs and lessons learned — avoid repeating these.

---

## 🏗️ Architecture Decision Records (ADRs)

Use ADRs to document significant technical decisions:

- **When to create**: Choosing technologies, changing patterns, major refactors
- **Template**: `docs/adr/000-template.md`
- **Example**: `docs/adr/001-example-adr.md`

Structure:
1. Context — Why are we deciding?
2. Decision — What did we choose?
3. Alternatives — What else did we consider?
4. Consequences — What are the trade-offs?

---

## 🐛 Error Documentation

For medium/high severity incidents, create detailed post-mortems:

- **Template**: `docs/errors/000-error-template.md`
- **When to use**: Production bugs, security issues, data loss

For all bugs, add an entry to `mistakes.md` with:
- Symptom
- Root cause
- Fix
- Guardrail (test/lint rule/type constraint)

---

## ✅ PR Checklist

Every PR must include:

- [ ] CHANGELOG.md updated
- [ ] activeContext.md updated
- [ ] progress.md updated
- [ ] If bug: mistakes.md entry + guardrail
- [ ] If architecture: ADR created

See `.github/PULL_REQUEST_TEMPLATE.md` for full checklist.

---

## 🎯 Best Practices

### Do

- ✅ Keep activeContext.md current
- ✅ Add guardrails for every bug fix
- ✅ Create ADRs for significant decisions
- ✅ Update CHANGELOG with every change
- ✅ Follow the READ → PLAN → ACT → VERIFY → UPDATE workflow

### Don't

- ❌ Skip the UPDATE step
- ❌ Fix bugs without documenting in mistakes.md
- ❌ Make architecture changes without ADRs
- ❌ Expand scope without explicit justification
- ❌ Write docs that don't provide value

---

## 📖 Further Reading

- [Keep a Changelog](https://keepachangelog.com/)
- [Architecture Decision Records](https://adr.github.io/)
- [Lovable Documentation](https://docs.lovable.dev/)

---

## License

MIT — Use freely for your projects.
