#!/usr/bin/env node

/**
 * Generate Template Manifest
 * 
 * Creates or updates .lovable/template-manifest.json with SHA256 hashes
 * of all tracked files. Used by both install and update workflows.
 * 
 * Usage:
 *   node scripts/generate-manifest.js [--update]
 * 
 * Options:
 *   --update    Update existing manifest hashes without changing policies
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// File classification
const FILE_POLICIES = {
  // Always update (system files)
  always: [
    '.lovable/rules.md',
    '.lovable/boot-instruction.md',
    '.lovable/memory/decision-trees/component-choice.md',
    '.lovable/memory/decision-trees/error-handling.md',
    '.lovable/memory/decision-trees/refactor-vs-fix.md',
    'prompts/00-setup-os.md',
    'prompts/01-boot-prompt.md',
    'prompts/02-feature-request.md',
    'prompts/03-bug-fix.md',
    'prompts/04-architecture-change.md',
    'prompts/05-weekly-update.md',
    'prompts/06-self-healing.md',
    'prompts/07-debug-loop.md',
    'prompts/08-session-handoff.md',
    'scripts/validate-structure.js',
    'scripts/validate-templates.js',
    'scripts/generate-manifest.js',
    'scripts/parse-releases.js',
    'scripts/README.md',
    'examples/projectbrief-example.md',
    'examples/techContext-example.md',
    'examples/activeContext-example.md',
    'examples/mistakes-example.md',
    'examples/adr-example.md',
    'QUICK-REFERENCE.md',
    'VERSION.md',
    '.github/workflows/update-starter-kit.yml',
  ],
  
  // Smart merge (customizable templates)
  'smart-merge': [
    'docs/adr/000-template.md',
    'docs/errors/000-error-template.md',
    'docs/architecture/overview.md',
    'docs/PROJECT-KNOWLEDGE-SETUP.md',
  ],
  
  // Never update (user data)
  never: [
    '.lovable/memory/projectbrief.md',
    '.lovable/memory/activeContext.md',
    '.lovable/memory/progress.md',
    '.lovable/memory/techContext.md',
    '.lovable/memory/systemPatterns.md',
    '.lovable/memory/reflections.md',
    '.lovable/memory/metrics.md',
    '.lovable/memory/patterns/mistakes.md',
    '.lovable/memory/patterns/successes.md',
    'CHANGELOG.md',
  ],
};

// Description templates
const DESCRIPTIONS = {
  always: {
    '.lovable/rules.md': 'AI Constitution - system file',
    '.lovable/boot-instruction.md': 'Boot instruction - system file',
    'prompts/': 'Prompt template - system file',
    'scripts/': 'Script - system file',
    'examples/': 'Example template - system file',
    '.lovable/memory/decision-trees/': 'Decision tree - system file',
    'QUICK-REFERENCE.md': 'Quick reference card - system file',
    'VERSION.md': 'Version tracking - system file',
    '.github/workflows/update-starter-kit.yml': 'Update workflow - system file',
  },
  'smart-merge': {
    'docs/adr/000-template.md': 'ADR template - customizable',
    'docs/errors/000-error-template.md': 'Error template - customizable',
    'docs/architecture/overview.md': 'Architecture overview - customizable',
    'docs/PROJECT-KNOWLEDGE-SETUP.md': 'Setup guide - customizable',
  },
  never: {
    default: 'User project data',
  },
};

function getDescription(filePath, policy) {
  const descriptions = DESCRIPTIONS[policy];
  if (!descriptions) return 'Unknown';
  
  // Check exact match first
  if (descriptions[filePath]) return descriptions[filePath];
  
  // Check prefix match
  for (const prefix of Object.keys(descriptions)) {
    if (filePath.startsWith(prefix)) return descriptions[prefix];
  }
  
  return descriptions.default || 'Unknown';
}

function calculateHash(filePath) {
  try {
    const content = fs.readFileSync(filePath);
    return crypto.createHash('sha256').update(content).digest('hex');
  } catch (error) {
    return null;
  }
}

function generateManifest(updateOnly = false) {
  const manifestPath = '.lovable/template-manifest.json';
  
  let manifest = {
    version: '1.0.0',
    installedAt: new Date().toISOString().split('T')[0],
    sourceRepo: 'Builera/lovable-starter-kit',
    updateWorkflow: '.github/workflows/update-starter-kit.yml',
    files: {},
  };
  
  // Load existing manifest if updating
  if (updateOnly && fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch (error) {
      console.error('Error reading existing manifest:', error.message);
    }
  }
  
  // Process all policy categories
  for (const [policy, files] of Object.entries(FILE_POLICIES)) {
    for (const filePath of files) {
      const hash = calculateHash(filePath);
      
      if (hash) {
        manifest.files[filePath] = {
          hash,
          policy,
          description: getDescription(filePath, policy),
        };
      } else if (!updateOnly) {
        // Include file in manifest even if it doesn't exist yet
        manifest.files[filePath] = {
          hash: null,
          policy,
          description: getDescription(filePath, policy),
        };
      }
    }
  }
  
  // Sort files alphabetically
  const sortedFiles = {};
  Object.keys(manifest.files).sort().forEach(key => {
    sortedFiles[key] = manifest.files[key];
  });
  manifest.files = sortedFiles;
  
  // Write manifest
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log(`✅ Manifest generated: ${manifestPath}`);
  console.log(`   Files tracked: ${Object.keys(manifest.files).length}`);
  console.log(`   - Always update: ${FILE_POLICIES.always.length}`);
  console.log(`   - Smart merge: ${FILE_POLICIES['smart-merge'].length}`);
  console.log(`   - Never update: ${FILE_POLICIES.never.length}`);
}

// CLI
const args = process.argv.slice(2);
const updateOnly = args.includes('--update');

generateManifest(updateOnly);
