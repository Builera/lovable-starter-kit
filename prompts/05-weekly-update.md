# Prompt: Weekly Update

> Use this prompt at the end of each week to update progress and learnings.
> This maintains the knowledge trail and helps plan next week.

---

```
## Weekly Update Request

Please update the project's progress tracking for this week.

### Tasks to Complete

1. **Update progress.md** with:
   - What was completed this week (Done ✅)
   - What's still in progress (In Progress 🔄)
   - What's blocked and why (Blocked 🚫)
   - Key learnings from this week
   - Items carried over to next week

2. **Review and update activeContext.md** with:
   - Current focus going into next week
   - Recent changes summary
   - Any pending decisions
   - Next steps prioritized

3. **Review mistakes.md** and ensure:
   - All bugs fixed this week have entries
   - Guardrails are documented
   - No missing root cause analyses

4. **Review CHANGELOG.md** and ensure:
   - All changes from this week are logged
   - Entries are clear and descriptive

5. **Update metrics.md** with:
   - Tasks completed count
   - Bugs fixed / introduced counts
   - ADRs created count
   - Calculate bug ratio
   - Rate reflection quality (1-5)

6. **Optional - Update systemPatterns.md** if:
   - New patterns were established this week
   - Existing patterns were refined

---

## Weekly Summary Template

Add this to progress.md:

```markdown
### Week of [Date]

**Done ✅**
- [Completed item 1]
- [Completed item 2]

**In Progress 🔄**
- [Item 1] — [% complete or status]
- [Item 2] — [% complete or status]

**Blocked 🚫**
- [Item] — Reason: [why blocked]

**Learnings 📚**
- [Key learning 1]
- [Key learning 2]

**Carried Over**
- [Item not completed, moving to next week]

**Next Week Focus**
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]
```

---

## Metrics to Track (Optional)

| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| Tasks Completed | [N] | [N] | ↑/↓/→ |
| Bugs Fixed | [N] | [N] | ↑/↓/→ |
| Bugs Introduced | [N] | [N] | ↑/↓/→ |
| ADRs Created | [N] | [N] | ↑/↓/→ |
| Bug Ratio | [N] | [N] | ↑/↓/→ |
| Reflection Score | [1-5] | [1-5] | ↑/↓/→ |

> Update `.lovable/memory/metrics.md` with these values.
```

---

## Quick Version

```
Weekly update:

1. Update progress.md:
   - Done / In Progress / Blocked / Learnings

2. Update activeContext.md:
   - Current focus / Next steps

3. Review mistakes.md:
   - All bugs this week have entries?

4. Review CHANGELOG.md:
   - All changes logged?

5. Update metrics.md:
   - Tasks/Bugs/ADRs counts + bug ratio

Add week summary to progress.md.
```
