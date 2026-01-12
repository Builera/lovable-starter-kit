#!/usr/bin/env node

/**
 * AI Project Operating System - Structure Validator
 * 
 * Validates that all required files and directories exist.
 * Run with: node scripts/validate-structure.js
 * 
 * Exit codes:
 *   0 = All valid
 *   1 = Missing required files
 *   2 = Missing required directories
 */

const fs = require('fs');
const path = require('path');

// Configuration
const REQUIRED_FILES = [
  // Core OS files
  '.lovable/rules.md',
  '.lovable/boot-instruction.md',
  
  // Memory bank
  '.lovable/memory/projectbrief.md',
  '.lovable/memory/techContext.md',
  '.lovable/memory/activeContext.md',
  '.lovable/memory/progress.md',
  '.lovable/memory/systemPatterns.md',
  '.lovable/memory/reflections.md',
  '.lovable/memory/metrics.md',
  '.lovable/memory/patterns/mistakes.md',
  '.lovable/memory/patterns/successes.md',
  
  // Decision trees
  '.lovable/memory/decision-trees/error-handling.md',
  '.lovable/memory/decision-trees/component-choice.md',
  '.lovable/memory/decision-trees/refactor-vs-fix.md',
  
  // Documentation
  'docs/architecture/overview.md',
  'docs/adr/000-template.md',
  'docs/errors/000-error-template.md',
  'docs/PROJECT-KNOWLEDGE-SETUP.md',
  
  // Prompts
  'prompts/00-setup-os.md',
  'prompts/01-boot-prompt.md',
  'prompts/02-feature-request.md',
  'prompts/03-bug-fix.md',
  'prompts/04-architecture-change.md',
  'prompts/05-weekly-update.md',
  'prompts/06-self-healing.md',
  'prompts/07-debug-loop.md',
  'prompts/08-session-handoff.md',
  
  // Root files
  'CHANGELOG.md',
  'QUICK-REFERENCE.md',
  'README.md',
  'VERSION.md',
  
  // GitHub
  '.github/PULL_REQUEST_TEMPLATE.md',
];

const REQUIRED_DIRECTORIES = [
  '.lovable',
  '.lovable/memory',
  '.lovable/memory/patterns',
  '.lovable/memory/decision-trees',
  '.lovable/memory/checkpoints',
  'docs',
  'docs/architecture',
  'docs/adr',
  'docs/errors',
  'prompts',
  'examples',
  'scripts',
  '.github',
];

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  dim: '\x1b[2m',
};

function log(color, symbol, message) {
  console.log(`${color}${symbol}${colors.reset} ${message}`);
}

function validateStructure() {
  console.log('\n🔍 AI Project OS - Structure Validation\n');
  console.log('═'.repeat(50));
  
  let missingFiles = [];
  let missingDirs = [];
  let foundFiles = 0;
  let foundDirs = 0;

  // Check directories first
  console.log('\n📁 Checking directories...\n');
  
  for (const dir of REQUIRED_DIRECTORIES) {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
      log(colors.green, '✓', dir);
      foundDirs++;
    } else {
      log(colors.red, '✗', `${dir} ${colors.dim}(missing)${colors.reset}`);
      missingDirs.push(dir);
    }
  }

  // Check files
  console.log('\n📄 Checking files...\n');
  
  for (const file of REQUIRED_FILES) {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      log(colors.green, '✓', file);
      foundFiles++;
    } else {
      log(colors.red, '✗', `${file} ${colors.dim}(missing)${colors.reset}`);
      missingFiles.push(file);
    }
  }

  // Summary
  console.log('\n' + '═'.repeat(50));
  console.log('\n📊 Summary\n');
  
  console.log(`   Directories: ${foundDirs}/${REQUIRED_DIRECTORIES.length} found`);
  console.log(`   Files: ${foundFiles}/${REQUIRED_FILES.length} found`);

  if (missingDirs.length === 0 && missingFiles.length === 0) {
    log(colors.green, '\n✅', 'All structure checks passed!\n');
    return 0;
  }

  // Report issues
  if (missingDirs.length > 0) {
    console.log(`\n${colors.red}Missing directories:${colors.reset}`);
    missingDirs.forEach(dir => console.log(`   - ${dir}`));
    console.log(`\n   Fix: mkdir -p ${missingDirs.join(' ')}`);
  }

  if (missingFiles.length > 0) {
    console.log(`\n${colors.red}Missing files:${colors.reset}`);
    missingFiles.forEach(file => console.log(`   - ${file}`));
    console.log(`\n   Fix: Copy from template or create manually`);
  }

  console.log('');
  
  if (missingDirs.length > 0) return 2;
  if (missingFiles.length > 0) return 1;
  return 0;
}

// Run validation
const exitCode = validateStructure();
process.exit(exitCode);
