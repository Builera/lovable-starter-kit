# Project Metrics

> Track project health and AI OS effectiveness over time.

---

## Weekly Metrics Log

| Week | Tasks Done | Bugs Fixed | Bugs Introduced | ADRs Created | Reflection Score | Bug Ratio |
|------|------------|------------|-----------------|--------------|------------------|-----------|
| 2026-W02 | 8 | 0 | 0 | 0 | N/A | 0.00 |

> **How to update:** Add a new row at the end of each week during weekly update.

---

## Metric Definitions

| Metric | Definition | How to Count |
|--------|------------|--------------|
| **Tasks Done** | Items moved to "Done ✅" in progress.md | Count checkboxes marked [x] this week |
| **Bugs Fixed** | Entries added to mistakes.md | Count new entries in mistakes.md |
| **Bugs Introduced** | New bugs discovered this week | Count bugs reported/found |
| **ADRs Created** | New ADR files created | Count new files in docs/adr/ |
| **Reflection Score** | Self-rated quality of reflections (1-5) | Rate after weekly reflection |
| **Bug Ratio** | Bugs Introduced / Tasks Done | Lower is better (target: < 0.3) |

---

## Targets & Thresholds

| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| Bug Ratio | < 0.2 | 0.2 - 0.4 | > 0.4 |
| ADR Coverage | 100% arch changes | 80-99% | < 80% |
| Reflection Score | 4+ | 3-4 | < 3 |
| Weekly Tasks | 5+ | 3-5 | < 3 |

---

## Monthly Summary

### January 2026

| Week | Highlight | Challenge |
|------|-----------|-----------|
| W02 | Initial OS setup complete | Learning curve with new workflow |
| W03 | | |
| W04 | | |
| W05 | | |

**Month Totals:**
- Tasks completed: 8
- Bugs fixed: 0
- ADRs created: 0
- Average bug ratio: 0.00

---

## Trend Analysis

### Last 4 Weeks Trend

```
Tasks Done:    [████████░░] 8
Bug Ratio:     [░░░░░░░░░░] 0.00 ✅ Excellent
ADR Coverage:  [░░░░░░░░░░] N/A
```

### Observations

- **Week 02:** Initial setup week, focused on documentation and OS structure.

---

## How This Helps

1. **Visibility:** See project health at a glance
2. **Trends:** Identify patterns (e.g., bug spikes after large features)
3. **Accountability:** Track follow-through on process
4. **Improvement:** Data-driven decisions about workflow

---

## Quick Update Template

Copy this when adding a new week:

```markdown
| 2026-WXX | [tasks] | [fixed] | [introduced] | [adrs] | [1-5] | [ratio] |
```

Calculate bug ratio: `Bugs Introduced / Tasks Done`

---

*Last updated: 2026-01-12*
