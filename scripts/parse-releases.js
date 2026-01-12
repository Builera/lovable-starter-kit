#!/usr/bin/env node

/**
 * Parse Releases
 * 
 * Parses RELEASES.md to extract version entries and detect breaking changes.
 * Used by the update workflow for pre-flight checks.
 * 
 * Usage:
 *   node scripts/parse-releases.js [--from <version>] [--to <version>] [--check-breaking]
 * 
 * Options:
 *   --from <version>     Starting version (exclusive)
 *   --to <version>       Ending version (inclusive)
 *   --check-breaking     Only output if there are breaking changes
 *   --json               Output as JSON
 */

const fs = require('fs');

const RELEASES_FILE = 'RELEASES.md';

function parseVersion(versionStr) {
  const match = versionStr.match(/(\d+)\.(\d+)\.(\d+)/);
  if (!match) return null;
  return {
    major: parseInt(match[1]),
    minor: parseInt(match[2]),
    patch: parseInt(match[3]),
    string: match[0],
  };
}

function compareVersions(a, b) {
  if (a.major !== b.major) return a.major - b.major;
  if (a.minor !== b.minor) return a.minor - b.minor;
  return a.patch - b.patch;
}

function parseReleases(content) {
  const releases = [];
  const lines = content.split('\n');
  
  let currentRelease = null;
  let currentSection = null;
  
  for (const line of lines) {
    // Match version headers: ## [1.0.0] - 2026-01-12
    const versionMatch = line.match(/^## \[([^\]]+)\](?:\s*-\s*(\d{4}-\d{2}-\d{2}))?/);
    if (versionMatch) {
      if (currentRelease) {
        releases.push(currentRelease);
      }
      currentRelease = {
        version: versionMatch[1],
        date: versionMatch[2] || null,
        sections: {},
        hasBreaking: false,
      };
      currentSection = null;
      continue;
    }
    
    // Skip unreleased
    if (line.includes('[Unreleased]')) {
      currentRelease = null;
      continue;
    }
    
    // Match section headers: ### Added, ### Changed, etc.
    const sectionMatch = line.match(/^### (.+)/);
    if (sectionMatch && currentRelease) {
      currentSection = sectionMatch[1].toLowerCase();
      currentRelease.sections[currentSection] = [];
      continue;
    }
    
    // Match list items
    const itemMatch = line.match(/^- (.+)/);
    if (itemMatch && currentRelease && currentSection) {
      const item = itemMatch[1].trim();
      currentRelease.sections[currentSection].push(item);
      
      // Check for breaking changes
      if (item.toLowerCase().includes('breaking') || 
          item.toLowerCase().includes('removed') ||
          currentSection === 'removed') {
        currentRelease.hasBreaking = true;
      }
    }
  }
  
  // Push last release
  if (currentRelease) {
    releases.push(currentRelease);
  }
  
  return releases;
}

function filterReleases(releases, fromVersion, toVersion) {
  const from = fromVersion ? parseVersion(fromVersion) : null;
  const to = toVersion ? parseVersion(toVersion) : null;
  
  return releases.filter(release => {
    const version = parseVersion(release.version);
    if (!version) return false;
    
    // After from version (exclusive)
    if (from && compareVersions(version, from) <= 0) return false;
    
    // Before or at to version (inclusive)
    if (to && compareVersions(version, to) > 0) return false;
    
    return true;
  });
}

function hasBreakingChanges(releases, fromVersion, toVersion) {
  const from = fromVersion ? parseVersion(fromVersion) : null;
  const to = toVersion ? parseVersion(toVersion) : null;
  
  // Check for major version bump
  if (from && to && to.major > from.major) {
    return true;
  }
  
  // Check for explicit breaking changes in releases
  return releases.some(r => r.hasBreaking);
}

function formatReleases(releases) {
  let output = '';
  
  for (const release of releases) {
    output += `\n## ${release.version}`;
    if (release.date) output += ` (${release.date})`;
    output += '\n';
    
    for (const [section, items] of Object.entries(release.sections)) {
      if (items.length === 0) continue;
      output += `\n### ${section.charAt(0).toUpperCase() + section.slice(1)}\n`;
      for (const item of items) {
        output += `- ${item}\n`;
      }
    }
  }
  
  return output.trim();
}

// CLI
function main() {
  const args = process.argv.slice(2);
  
  let fromVersion = null;
  let toVersion = null;
  let checkBreaking = false;
  let outputJson = false;
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--from' && args[i + 1]) {
      fromVersion = args[++i];
    } else if (args[i] === '--to' && args[i + 1]) {
      toVersion = args[++i];
    } else if (args[i] === '--check-breaking') {
      checkBreaking = true;
    } else if (args[i] === '--json') {
      outputJson = true;
    }
  }
  
  // Read releases file
  let content;
  try {
    content = fs.readFileSync(RELEASES_FILE, 'utf8');
  } catch (error) {
    console.error(`Error: Could not read ${RELEASES_FILE}`);
    process.exit(1);
  }
  
  const releases = parseReleases(content);
  const filtered = filterReleases(releases, fromVersion, toVersion);
  const breaking = hasBreakingChanges(filtered, fromVersion, toVersion);
  
  if (checkBreaking) {
    if (breaking) {
      console.log('BREAKING_CHANGES=true');
      process.exit(1);
    } else {
      console.log('BREAKING_CHANGES=false');
      process.exit(0);
    }
  }
  
  if (outputJson) {
    console.log(JSON.stringify({
      releases: filtered,
      hasBreakingChanges: breaking,
      fromVersion,
      toVersion,
    }, null, 2));
  } else {
    if (breaking) {
      console.log('⚠️  BREAKING CHANGES DETECTED\n');
    }
    console.log(formatReleases(filtered));
  }
}

main();
