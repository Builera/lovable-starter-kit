# Releases - Lovable Starter Kit

All notable changes to the Starter Kit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- None

### Changed

- None

---

## [1.1.0] - 2026-01-12

### Added

- **Smart Update System**: New workflow for safely updating to newer versions
  - `update-starter-kit.yml`: GitHub Actions workflow with pre-flight checks
  - `template-manifest.json`: Tracks file hashes and update policies
  - `generate-manifest.js`: Script to generate/update manifest
  - `parse-releases.js`: Script to parse release notes and detect breaking changes
- **File Classification**: Three-tier update policy (always, smart-merge, never)
- **Conflict Resolution**: Creates `.new` files for customized templates
- **Dry Run Mode**: Preview updates without applying changes

### Changed

- Renamed `CHANGELOG_1.md` to `RELEASES.md` for clarity
- Updated `install-starter-kit.yml` to generate manifest and copy update workflow
- Enhanced `scripts/README.md` with new script documentation
- Updated `README.md` with "Updating the Starter Kit" section
- Updated `QUICK-REFERENCE.md` with update commands

---

## [1.0.0] - 2026-01-12

### Added

- Initial project setup with AI Project Operating System
- `.lovable/` directory with rules and memory bank
- `docs/` directory with architecture and ADR templates
- `prompts/` directory with reusable AI prompts (9 prompts)
- **Self-Healing System**: `prompts/06-self-healing.md` for autonomous error recovery
- **Debug Loop Protocol**: `prompts/07-debug-loop.md` for structured debugging
- **Session Handoff**: `prompts/08-session-handoff.md` for context preservation
- **Reflection System**: `.lovable/memory/reflections.md` for post-task learnings
- **Checkpoint System**: `.lovable/memory/checkpoints/` for milestone snapshots
- **Decision Trees**: `.lovable/memory/decision-trees/` with 3 guides
- **Quick Reference Card**: `QUICK-REFERENCE.md` one-page cheat sheet
- **Auto-Enforce System**: `.lovable/boot-instruction.md` for Project Knowledge setup
- **Setup Guide**: `docs/PROJECT-KNOWLEDGE-SETUP.md` with step-by-step instructions
- **Versioning System**: `VERSION.md` with semantic versioning policy
- **Example Templates**: `examples/` directory with 5 filled templates
- **Validation Scripts**: `scripts/` directory with structure and content validators
- **Metrics Tracking**: `.lovable/memory/metrics.md` for project health metrics
- PR template enforcing changelog and memory updates

---

## [0.0.1] - 2026-01-01

### Added

- Project initialized

---

<!-- 
## Template for new releases:

## [X.Y.Z] - YYYY-MM-DD

### Added
- New features

### Changed
- Changes in existing functionality

### Deprecated
- Soon-to-be removed features

### Removed
- Removed features

### Fixed
- Bug fixes

### Security
- Security fixes
-->
