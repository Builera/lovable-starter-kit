#!/usr/bin/env node

/**
 * AI Project Operating System - Template Content Validator
 * 
 * Checks that memory files have real content, not just placeholders.
 * Run with: node scripts/validate-templates.js
 * 
 * Exit codes:
 *   0 = All valid (templates have content)
 *   1 = Templates still have placeholder content
 */

const fs = require('fs');
const path = require('path');

// Files to check for real content
const TEMPLATE_FILES = [
  {
    path: '.lovable/memory/projectbrief.md',
    name: 'Project Brief',
    placeholders: [
      '[Describe the product',
      '[Explain the motivation',
      '[Description]',
      '[Metric 1]',
      '[Constraint 1]',
      '[Non-goal 1]',
      '[Name]',
    ],
    minContentLines: 20,
  },
  {
    path: '.lovable/memory/techContext.md',
    name: 'Tech Context',
    placeholders: [
      '[Details]',
      '[Provider]',
      '[Decision 1]',
      '[ADR-XXX]',
      '[Service]',
      '[Purpose]',
      '[Link]',
      '[Debt item]',
    ],
    minContentLines: 30,
  },
  {
    path: '.lovable/memory/activeContext.md',
    name: 'Active Context',
    placeholders: [
      '[Current focus]',
      '[What you\'re working on]',
      '[Recent change]',
      '[Pending decision]',
      '[Next step]',
    ],
    minContentLines: 15,
  },
  {
    path: '.lovable/memory/progress.md',
    name: 'Progress',
    placeholders: [
      '[Completed items]',
      '[What we learned]',
      '[Items that weren\'t completed]',
      '[Date]',
      '[Notes]',
    ],
    minContentLines: 20,
  },
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

function countContentLines(content) {
  // Count non-empty, non-comment lines
  return content
    .split('\n')
    .filter(line => {
      const trimmed = line.trim();
      return trimmed.length > 0 && 
             !trimmed.startsWith('#') && 
             !trimmed.startsWith('---') &&
             !trimmed.startsWith('|--') &&
             !trimmed.startsWith('> ') &&
             !trimmed.startsWith('<!--');
    })
    .length;
}

function findPlaceholders(content, placeholders) {
  const found = [];
  for (const placeholder of placeholders) {
    if (content.includes(placeholder)) {
      found.push(placeholder);
    }
  }
  return found;
}

function validateTemplates() {
  console.log('\n📝 AI Project OS - Template Content Validation\n');
  console.log('═'.repeat(50));
  
  let hasIssues = false;
  const results = [];

  for (const template of TEMPLATE_FILES) {
    const fullPath = path.join(process.cwd(), template.path);
    
    console.log(`\n📄 ${template.name}`);
    console.log(`   ${colors.dim}${template.path}${colors.reset}`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      log(colors.yellow, '   ⚠', 'File not found - run validate-structure.js first');
      results.push({ name: template.name, status: 'missing' });
      continue;
    }

    const content = fs.readFileSync(fullPath, 'utf-8');
    const issues = [];

    // Check for placeholders
    const foundPlaceholders = findPlaceholders(content, template.placeholders);
    if (foundPlaceholders.length > 0) {
      issues.push(`Contains ${foundPlaceholders.length} placeholder(s)`);
      foundPlaceholders.slice(0, 3).forEach(p => {
        console.log(`   ${colors.yellow}⚠${colors.reset} Placeholder: "${p}"`);
      });
      if (foundPlaceholders.length > 3) {
        console.log(`   ${colors.dim}   ...and ${foundPlaceholders.length - 3} more${colors.reset}`);
      }
    }

    // Check content length
    const contentLines = countContentLines(content);
    if (contentLines < template.minContentLines) {
      issues.push(`Only ${contentLines} content lines (minimum: ${template.minContentLines})`);
      console.log(`   ${colors.yellow}⚠${colors.reset} Low content: ${contentLines}/${template.minContentLines} lines`);
    }

    // Determine status
    if (issues.length === 0) {
      log(colors.green, '   ✓', 'Content looks good');
      results.push({ name: template.name, status: 'valid' });
    } else {
      hasIssues = true;
      results.push({ name: template.name, status: 'needs-content', issues });
    }
  }

  // Summary
  console.log('\n' + '═'.repeat(50));
  console.log('\n📊 Summary\n');
  
  const valid = results.filter(r => r.status === 'valid').length;
  const needsContent = results.filter(r => r.status === 'needs-content').length;
  const missing = results.filter(r => r.status === 'missing').length;

  console.log(`   ✅ Valid: ${valid}`);
  console.log(`   ⚠️  Needs content: ${needsContent}`);
  console.log(`   ❌ Missing: ${missing}`);

  if (!hasIssues && missing === 0) {
    log(colors.green, '\n✅', 'All templates have real content!\n');
    return 0;
  }

  if (needsContent > 0) {
    console.log(`\n${colors.yellow}Recommendation:${colors.reset}`);
    console.log('   Replace placeholder text with your project\'s actual information.');
    console.log('   See examples/ folder for reference.\n');
  }

  return hasIssues ? 1 : 0;
}

// Run validation
const exitCode = validateTemplates();
process.exit(exitCode);
