# Validation Scripts

This directory contains scripts to validate your AI Project Operating System setup.

---

## Available Scripts

### `validate-structure.js`

Checks that all required files and directories exist.

```bash
node scripts/validate-structure.js
```

**What it checks:**
- All required directories exist (`.lovable/`, `docs/`, `prompts/`, etc.)
- All required files exist (memory files, templates, prompts)
- Reports missing items with fix suggestions

**Exit codes:**
- `0` = All valid
- `1` = Missing required files
- `2` = Missing required directories

---

### `validate-templates.js`

Checks that memory files have real content, not just placeholders.

```bash
node scripts/validate-templates.js
```

**What it checks:**
- `projectbrief.md` has project-specific content
- `techContext.md` has real tech stack info
- `activeContext.md` has current state info
- `progress.md` has tracking entries
- Detects placeholder patterns like `[Description]`, `[Name]`, etc.

**Exit codes:**
- `0` = All templates have content
- `1` = Templates still have placeholder content

---

## Running Both Scripts

Run structure validation first, then content validation:

```bash
# Check structure
node scripts/validate-structure.js

# Check content (only if structure is valid)
node scripts/validate-templates.js
```

---

## Common Issues & Fixes

### "Missing directories"

Create the missing directories:
```bash
mkdir -p .lovable/memory/checkpoints
mkdir -p examples
```

### "Missing files"

Copy from template or create:
```bash
# Copy from examples
cp examples/projectbrief-example.md .lovable/memory/projectbrief.md

# Or create empty file
touch .lovable/memory/metrics.md
```

### "Contains placeholders"

Replace placeholder text with real content:
```markdown
# Before
- **Primary users:** [Description]

# After
- **Primary users:** Small development teams (3-10 people) at startups
```

### "Low content"

Add more detail to your documentation. See `examples/` folder for reference.

---

## CI/CD Integration

You can add these scripts to your CI pipeline:

```yaml
# .github/workflows/validate.yml
name: Validate OS Structure
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: node scripts/validate-structure.js
      - run: node scripts/validate-templates.js
```

---

## Customization

To add/remove required files, edit the `REQUIRED_FILES` array in `validate-structure.js`.

To adjust placeholder detection, edit the `TEMPLATE_FILES` array in `validate-templates.js`.

---

*Scripts version: 1.0.0*
