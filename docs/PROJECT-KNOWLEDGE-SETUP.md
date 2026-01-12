# Project Knowledge Setup Guide

> Step-by-step instructions to make Lovable AI automatically follow the AI Operating System.

---

## 🎯 Goal

After setup, Lovable AI will **automatically**:
- Read context files before coding
- Output a Context Summary
- Propose a Plan before implementing
- Update memory files after completion

---

## 📋 Setup Steps

### Step 1: Open Project Settings

1. Open your project in Lovable
2. Click on the **project name** in the top-left corner
3. Select **"Settings"** from the dropdown menu

### Step 2: Access Project Knowledge

1. In Settings, find the **"Knowledge"** or **"Project Knowledge"** section
2. Click to open the editor

### Step 3: Copy Boot Instruction

1. Open the file `.lovable/boot-instruction.md` in your project
2. Copy **all contents** (from "# AI Operating System" to the end)
3. Paste into the Project Knowledge editor

### Step 4: Save Settings

1. Click **"Save"** or **"Apply"**
2. Close the Settings dialog

---

## ✅ Verify Setup Success

After setup, send a simple request like:

```
Add a console.log to the main file
```

AI should respond with:
1. **Context Summary** (5-line project summary)
2. **Plan** (list of files to modify)
3. After implementation: updates to CHANGELOG and memory files

If AI doesn't do this, verify that Project Knowledge was saved correctly.

---

## 🔧 Troubleshooting

### AI doesn't read context files

**Cause:** Project Knowledge wasn't saved properly

**Solution:**
1. Re-open Settings → Knowledge
2. Verify the content was pasted completely
3. Make sure you clicked Save

### AI reads but doesn't output Context Summary

**Cause:** Instruction may conflict with system prompt

**Solution:** 
Try adding this line at the top of Project Knowledge:
```
IMPORTANT: Always follow these instructions for every request.
```

### AI doesn't update memory files

**Cause:** AI may skip the UPDATE step

**Solution:** 
Add a reminder at the end of your requests:
```
Remember to update CHANGELOG and memory files after completing.
```

---

## 📝 Customization

You can customize `.lovable/boot-instruction.md` as needed:

### Add Project-Specific Rules

```markdown
## Project-Specific Rules

- Always use TypeScript strict mode
- Follow the component naming convention: PascalCase
- Use Tailwind CSS for styling
```

### Add Forbidden Actions

```markdown
## Forbidden

- ❌ Never modify the database schema without approval
- ❌ Never use inline styles
- ❌ Never commit console.log statements
```

---

## 🔄 Updating

When rules change:
1. Update `.lovable/boot-instruction.md`
2. Copy the new content to Project Knowledge
3. Save Settings

---

## 📚 References

- [Lovable Project Knowledge Docs](https://docs.lovable.dev/)
- `.lovable/rules.md` - Full rules documentation
- `QUICK-REFERENCE.md` - One-page cheat sheet

---

*Setup only needs to be done once. After that, AI will automatically follow the rules!*
