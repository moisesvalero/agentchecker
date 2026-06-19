import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { scanProject } from '../../src/scan/scan-project.js';
import { extractFacts } from '../../src/extract/extract-facts.js';
import { findContradictions } from '../../src/compare/find-contradictions.js';
import { applyRecommendations } from '../../src/compare/recommend-resolution.js';
import { planFixes } from '../../src/fix/plan-fixes.js';

const fixturesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../fixtures');

describe('scanProject', () => {
  it('finds conflict fixture files', async () => {
    const files = await scanProject(path.join(fixturesDir, 'cursor-claude-conflict'), null, false);
    expect(files.map((f) => f.relativePath).sort()).toEqual(
      ['.cursor/rules/global.mdc', 'AGENTS.md', 'CLAUDE.md'].sort(),
    );
  });

  it('returns empty for no-agent-files', async () => {
    const files = await scanProject(path.join(fixturesDir, 'no-agent-files'), null, false);
    expect(files).toHaveLength(0);
  });

  it('finds only AGENTS.md in single-file fixture', async () => {
    const files = await scanProject(path.join(fixturesDir, 'only-agents-md'), null, false);
    expect(files.map((f) => f.relativePath)).toEqual(['AGENTS.md']);
  });
});

describe('contradictions', () => {
  it('detects pnpm vs npm and oxlint vs eslint', async () => {
    const cwd = path.join(fixturesDir, 'cursor-claude-conflict');
    const files = await scanProject(cwd, null, false);
    const facts = extractFacts(files);
    const contradictions = applyRecommendations(findContradictions(facts), facts);

    expect(contradictions).toHaveLength(2);
    expect(contradictions.map((c) => c.category).sort()).toEqual(
      ['linter', 'package-manager'].sort(),
    );
    expect(contradictions.find((c) => c.category === 'package-manager')?.recommendation).toBe(
      'pnpm',
    );
  });

  it('returns none for aligned copilot fixture', async () => {
    const cwd = path.join(fixturesDir, 'copilot-agents-ok');
    const files = await scanProject(cwd, null, false);
    const facts = extractFacts(files);
    const contradictions = findContradictions(facts);
    expect(contradictions).toHaveLength(0);
  });
});

describe('planFixes', () => {
  it('plans npm to pnpm replacements', async () => {
    const cwd = path.join(fixturesDir, 'cursor-claude-conflict');
    const files = await scanProject(cwd, null, false);
    const facts = extractFacts(files);
    const contradictions = applyRecommendations(findContradictions(facts), facts).map((c) => ({
      ...c,
      chosen: c.recommendation,
    }));
    const fileContents = new Map(files.map((f) => [f.path, f.content]));
    const changes = planFixes(contradictions, fileContents);

    expect(changes.some((c) => c.newText.includes('pnpm install'))).toBe(true);
    expect(changes.some((c) => c.newText.toLowerCase().includes('oxlint'))).toBe(true);
  });
});
