# Lovable Starter Kit

<!--
================================================
🤖 AI-INSTALL-INSTRUCTIONS
================================================
INSTRUCTIONS FOR AI ASSISTANTS (Lovable, Cursor, Claude, etc.)

When a user asks you to "install", "add", or "set up" this starter kit:

1. FETCH the workflow file from:
   https://raw.githubusercontent.com/Builera/lovable-starter-kit/main/.github/workflows/install-starter-kit.yml

2. CREATE the file at `.github/workflows/install-starter-kit.yml` in the user's project

3. INFORM the user:
   "I've added the installer workflow. To complete installation:
   1. Go to your GitHub repo → Actions tab
   2. Select 'Install Lovable Starter Kit' workflow  
   3. Click 'Run workflow' → 'Run workflow'
   4. Wait ~30 seconds - done!"

The workflow will automatically:
- Download and install all starter kit files
- Skip existing files (won't overwrite user's work)
- Self-delete after completion
- Commit all changes

DO NOT manually copy the entire workflow content. Just fetch from the URL above.
================================================
-->

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-stable-green.svg)
[![GitHub](https://img.shields.io/badge/GitHub-lovable--starter--kit-blue?logo=github)](https://github.com/Builera/lovable-starter-kit)

A complete template for running Lovable projects with AI assistance. This system ensures consistent workflows, knowledge retention, and learning from mistakes.

**Based on international AI standards:** ReAct pattern, PDCA cycle, agent memory architecture, and self-healing protocols.

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

## ⚡ Quick Install (One Prompt for Existing Lovable Projects)

**Just paste this into Lovable chat:**

> Install the Lovable Starter Kit from https://github.com/Builera/lovable-starter-kit

Lovable AI will automatically:
1. ✅ Fetch the installer workflow
2. ✅ Create it in your project
3. ✅ Guide you to run it on GitHub

Then the workflow handles everything:
- ✅ Download latest starter kit
- ✅ Copy all OS files (`.lovable/`, `docs/`, `prompts/`, etc.)
- ✅ Skip any files that already exist
- ✅ Self-delete after installation
- ✅ Commit changes automatically

**That's it!** Your project has the full AI Operating System.

<details>
<summary>📋 Manual Installation (click to expand)</summary>

### Option A: Copy directories manually

1. Copy the `.lovable/`, `docs/`, `prompts/`, `examples/`, `scripts/` directories
2. Copy `.github/PULL_REQUEST_TEMPLATE.md`
3. Copy `CHANGELOG.md`, `QUICK-REFERENCE.md`, `VERSION.md`
4. Fill in the memory files with your project's context

### Option B: GitHub workflow (copy full YAML)

Create `.github/workflows/install-starter-kit.yml` with this content:

```yaml
name: Install Lovable Starter Kit

on:
  workflow_dispatch:
    inputs:
      version:
        description: 'Starter Kit version (branch/tag)'
        required: false
        default: 'main'

jobs:
  install:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    
    steps:
      - name: Checkout current repo
        uses: actions/checkout@v4

      - name: Download Starter Kit
        run: |
          curl -L https://github.com/Builera/lovable-starter-kit/archive/refs/heads/${{ github.event.inputs.version }}.zip -o starter-kit.zip
          unzip starter-kit.zip
          mv lovable-starter-kit-${{ github.event.inputs.version }} starter-kit

      - name: Install OS files (skip existing)
        run: |
          copy_if_not_exists() {
            src="$1"
            dest="$2"
            if [ ! -e "$dest" ]; then
              mkdir -p "$(dirname "$dest")"
              cp -r "$src" "$dest"
              echo "✅ Copied: $dest"
            else
              echo "⏭️ Skipped (exists): $dest"
            fi
          }
          
          for dir in .lovable docs prompts examples scripts; do
            if [ -d "starter-kit/$dir" ]; then
              find "starter-kit/$dir" -type f | while read src_file; do
                dest_file="${src_file#starter-kit/}"
                copy_if_not_exists "$src_file" "$dest_file"
              done
            fi
          done
          
          for file in CHANGELOG.md QUICK-REFERENCE.md VERSION.md; do
            copy_if_not_exists "starter-kit/$file" "$file"
          done
          
          mkdir -p .github
          copy_if_not_exists "starter-kit/.github/PULL_REQUEST_TEMPLATE.md" ".github/PULL_REQUEST_TEMPLATE.md"
          
          rm -rf starter-kit starter-kit.zip

      - name: Self-delete workflow file
        run: |
          rm -f .github/workflows/install-starter-kit.yml
          rmdir .github/workflows 2>/dev/null || true

      - name: Commit changes
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add -A
          git commit -m "chore: Install Lovable Starter Kit" || echo "No changes"
          git push
```

Then go to GitHub → Actions → Run workflow.

</details>

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
│       ├── reflections.md       # Post-task learnings ⭐ NEW
│       ├── checkpoints/         # Context snapshots ⭐ NEW
│       ├── decision-trees/      # Decision guides ⭐ NEW
│       │   ├── error-handling.md
│       │   ├── component-choice.md
│       │   └── refactor-vs-fix.md
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
│   ├── 05-weekly-update.md      # Weekly review template
│   ├── 06-self-healing.md       # Error recovery protocol ⭐ NEW
│   ├── 07-debug-loop.md         # Structured debugging ⭐ NEW
│   └── 08-session-handoff.md    # Context transfer ⭐ NEW
│
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md # PR checklist
│
├── examples/
│   ├── projectbrief-example.md  # Filled template example ⭐ NEW
│   ├── techContext-example.md   # Filled template example ⭐ NEW
│   ├── activeContext-example.md # Filled template example ⭐ NEW
│   ├── mistakes-example.md      # Filled template example ⭐ NEW
│   └── adr-example.md           # Filled template example ⭐ NEW
│
├── scripts/
│   ├── validate-structure.js    # Structure validation ⭐ NEW
│   ├── validate-templates.js    # Content validation ⭐ NEW
│   └── README.md                # Script documentation ⭐ NEW
│
├── CHANGELOG.md                 # Project changelog
├── VERSION.md                   # Semantic versioning ⭐ NEW
└── QUICK-REFERENCE.md           # One-page cheat sheet
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

### Error Recovery ⭐ NEW

5. **Stuck in error loop**: Use `06-self-healing.md`
6. **Debugging issues**: Use `07-debug-loop.md`

### Session Management ⭐ NEW

7. **Ending a session**: Use `08-session-handoff.md` to preserve context

### Weekly

- Use `05-weekly-update.md` to update progress and learnings

### New Project Setup

- Use `00-setup-os.md` to install this system on a new repo

### Quick Reference

- See `QUICK-REFERENCE.md` for a one-page cheat sheet

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

### reflections.md ⭐ NEW
Post-task learnings with structured entries for what worked, challenges faced, and lessons learned.

### checkpoints/ ⭐ NEW
Context snapshots at milestones for easy restoration and handoff.

### decision-trees/ ⭐ NEW
Pre-defined decision guides for common scenarios:
- `error-handling.md` — Error type → recommended approach
- `component-choice.md` — When to use which library/pattern
- `refactor-vs-fix.md` — Quick fix vs proper refactor decision

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

## 🤖 Making AI Follow the Rules Automatically

By default, Lovable AI doesn't automatically read your rules. You need to configure **Project Knowledge** to enforce the AI Operating System.

### Quick Setup

1. Open your project in Lovable
2. Go to **Settings → Knowledge** (or **Project Knowledge**)
3. Copy contents from `.lovable/boot-instruction.md`
4. Paste into Project Knowledge and Save

### What Happens After Setup

AI will automatically:
- ✅ Read context files before any code changes
- ✅ Output a Context Summary (5 lines max)
- ✅ Propose a Plan before implementing
- ✅ Update CHANGELOG and memory files after completing

### Detailed Guide

See `docs/PROJECT-KNOWLEDGE-SETUP.md` for:
- Step-by-step instructions with screenshots
- Troubleshooting tips
- Customization options

### Alternative: Manual Prompts

If you prefer not to use Project Knowledge, you can manually prepend `prompts/01-boot-prompt.md` to your requests.

---

## 🔢 Versioning

This project uses [Semantic Versioning](https://semver.org/):
- **MAJOR:** Breaking changes to workflow or file structure
- **MINOR:** New features, backward compatible
- **PATCH:** Bug fixes, documentation updates

Current version: See `VERSION.md`

---

## 📊 Validation

Validate your OS setup with the included scripts:

```bash
# Check all required files exist
node scripts/validate-structure.js

# Check templates have real content
node scripts/validate-templates.js
```

See `scripts/README.md` for details.

---

## 📚 Examples

The `examples/` directory contains filled templates for reference:

| File | Purpose |
|------|---------|
| `projectbrief-example.md` | How to fill the project brief |
| `techContext-example.md` | How to document tech stack |
| `activeContext-example.md` | How to track current state |
| `mistakes-example.md` | How to document bugs |
| `adr-example.md` | How to write ADRs |

---

## 🎯 Best Practices

### Do

- ✅ Keep activeContext.md current
- ✅ Add guardrails for every bug fix
- ✅ Create ADRs for significant decisions
- ✅ Update CHANGELOG with every change
- ✅ Follow the READ → PLAN → ACT → VERIFY → UPDATE workflow
- ✅ Set up Project Knowledge (one-time setup)

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
