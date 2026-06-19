import type { Fact, FactCategory, AgentFile } from '../types.js';
import { getLines } from './normalize-markdown.js';

type CheckDefinition = {
  category: FactCategory;
  values: string[];
  patterns: RegExp[];
};

const CHECK_DEFINITIONS: CheckDefinition[] = [
  {
    category: 'package-manager',
    values: ['pnpm', 'npm', 'yarn', 'bun'],
    patterns: [/\bpnpm\b/i, /\bnpm\b/i, /\byarn\b/i, /\bbun\b/i],
  },
  {
    category: 'linter',
    values: ['oxlint', 'eslint', 'biome'],
    patterns: [/\boxlint\b/i, /\beslint\b/i, /\bbiome\b/i],
  },
  {
    category: 'formatter',
    values: ['prettier', 'biome', 'dprint'],
    patterns: [/\bprettier\b/i, /\bbiome\b/i, /\bdprint\b/i],
  },
  {
    category: 'test-runner',
    values: ['vitest', 'jest', 'playwright'],
    patterns: [/\bvitest\b/i, /\bjest\b/i, /\bplaywright\b/i],
  },
  {
    category: 'shell-environment',
    values: ['wsl', 'wsl2', 'windows', 'macos', 'linux'],
    patterns: [/\bwsl2\b/i, /\bwsl\b/i, /\bwindows\b/i, /\bmacos\b/i, /\blinux\b/i],
  },
  {
    category: 'package-runner',
    values: ['npx', 'pnpm dlx', 'bunx', 'yarn dlx'],
    patterns: [/\bnpx\b/i, /\bpnpm\s+dlx\b/i, /\bbunx\b/i, /\byarn\s+dlx\b/i],
  },
];

function detectValueOnLine(line: string, def: CheckDefinition): string | null {
  const lower = line.toLowerCase();
  for (const value of def.values) {
    if (lower.includes(value)) {
      const pattern = new RegExp(`\\b${value}\\b`, 'i');
      if (pattern.test(line)) return value;
    }
  }
  return null;
}

function extractFactsFromFile(file: AgentFile): Fact[] {
  const facts: Fact[] = [];
  const lines = getLines(file.content);

  for (const def of CHECK_DEFINITIONS) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line.trim() || line.trim().startsWith('```')) continue;

      const value = detectValueOnLine(line, def);
      if (!value) continue;

      const duplicate = facts.some(
        (fact) =>
          fact.category === def.category &&
          fact.value === value &&
          fact.filePath === file.path &&
          fact.line === i + 1,
      );
      if (duplicate) continue;

      facts.push({
        category: def.category,
        value,
        filePath: file.path,
        line: i + 1,
        evidence: line.trim(),
      });
    }
  }

  return facts;
}

export function extractFacts(files: AgentFile[]): Fact[] {
  return files.flatMap(extractFactsFromFile);
}
