import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { applyFixes, previewFixes } from '../../src/fix/apply-fixes.js';
import { applyChangesToContent } from '../../src/fix/plan-fixes.js';
import type { FileChange } from '../../src/types.js';

describe('previewFixes', () => {
  it('formats diff output per file', () => {
    const output = previewFixes([
      {
        filePath: '/proj/AGENTS.md',
        line: 3,
        oldText: 'use npm',
        newText: 'use pnpm',
      },
    ]);

    expect(output).toContain('AGENTS.md');
    expect(output).toContain('use npm');
    expect(output).toContain('use pnpm');
  });
});

describe('applyFixes', () => {
  it('writes planned replacements to disk', async () => {
    const dir = await mkdtemp(path.join(tmpdir(), 'agentchecker-apply-'));
    const filePath = path.join(dir, 'AGENTS.md');
    await writeFile(filePath, '# Rules\n\nUse npm and eslint.\n', 'utf8');

    const changes: FileChange[] = [
      {
        filePath,
        line: 3,
        oldText: 'Use npm and eslint.',
        newText: 'Use pnpm and oxlint.',
      },
    ];

    const updated = await applyFixes(changes);
    const content = await readFile(filePath, 'utf8');

    expect(updated).toEqual([filePath]);
    expect(content).toContain('pnpm');
    expect(content).toContain('oxlint');
  });

  it('applyChangesToContent skips lines that no longer match', () => {
    const result = applyChangesToContent('use npm\n', [
      { filePath: 'x', line: 1, oldText: 'stale line', newText: 'use pnpm' },
    ]);
    expect(result).toBe('use npm\n');
  });

  it('skips write when content is unchanged', async () => {
    const dir = await mkdtemp(path.join(tmpdir(), 'agentchecker-skip-'));
    const filePath = path.join(dir, 'AGENTS.md');
    await writeFile(filePath, 'already pnpm\n', 'utf8');

    const changes: FileChange[] = [{ filePath, line: 1, oldText: 'use npm', newText: 'use pnpm' }];

    const updated = await applyFixes(changes);
    expect(updated).toHaveLength(0);
  });
});
