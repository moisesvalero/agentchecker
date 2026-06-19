import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { scanProject } from '../../src/scan/scan-project.js';

describe('scanProject global files', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('includes global agent files from home when includeGlobal is true', async () => {
    const fakeHome = await mkdtemp(path.join(os.tmpdir(), 'agentchecker-home-'));
    const projectDir = await mkdtemp(path.join(os.tmpdir(), 'agentchecker-proj-'));

    const cursorRules = path.join(fakeHome, '.cursor', 'rules');
    await mkdir(cursorRules, { recursive: true });
    await writeFile(path.join(cursorRules, 'demo.mdc'), 'Use npm.\n', 'utf8');

    vi.spyOn(os, 'homedir').mockReturnValue(fakeHome);

    const files = await scanProject(projectDir, null, true);
    const globalPaths = files.filter((f) => f.kind === 'global').map((f) => f.relativePath);

    expect(globalPaths.some((p) => p.includes('.cursor/rules/demo.mdc'))).toBe(true);
  });

  it('excludes global files when includeGlobal is false', async () => {
    const fakeHome = await mkdtemp(path.join(os.tmpdir(), 'agentchecker-home2-'));
    const projectDir = await mkdtemp(path.join(os.tmpdir(), 'agentchecker-proj2-'));

    const cursorRules = path.join(fakeHome, '.cursor', 'rules');
    await mkdir(cursorRules, { recursive: true });
    await writeFile(path.join(cursorRules, 'demo.mdc'), 'Use npm.\n', 'utf8');

    vi.spyOn(os, 'homedir').mockReturnValue(fakeHome);

    const files = await scanProject(projectDir, null, false);
    expect(files.filter((f) => f.kind === 'global')).toHaveLength(0);
  });
});
