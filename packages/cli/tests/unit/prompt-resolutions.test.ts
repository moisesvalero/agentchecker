import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Contradiction } from '../../src/types.js';

const confirm = vi.fn();
const select = vi.fn();
const isCancel = vi.fn();

vi.mock('@clack/prompts', () => ({
  confirm,
  select,
  isCancel,
}));

const { promptFixContradictions, confirmApplyChanges } =
  await import('../../src/ui/prompt-resolutions.js');

const sampleContradiction: Contradiction = {
  category: 'package-manager',
  recommendation: 'pnpm',
  values: [
    { value: 'pnpm', files: ['AGENTS.md'], evidence: ['pnpm'] },
    { value: 'npm', files: ['CLAUDE.md'], evidence: ['npm'] },
  ],
};

describe('promptFixContradictions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    isCancel.mockReturnValue(false);
  });

  it('returns null when user declines to fix', async () => {
    confirm.mockResolvedValueOnce(false);

    const result = await promptFixContradictions([sampleContradiction]);
    expect(result).toBeNull();
  });

  it('returns resolved choices when user confirms', async () => {
    confirm.mockResolvedValueOnce(true);
    select.mockResolvedValueOnce('pnpm');

    const result = await promptFixContradictions([sampleContradiction]);

    expect(result).toEqual([
      expect.objectContaining({
        category: 'package-manager',
        chosen: 'pnpm',
      }),
    ]);
  });

  it('returns null when user cancels selection', async () => {
    confirm.mockResolvedValueOnce(true);
    isCancel.mockReturnValueOnce(false).mockReturnValueOnce(true);
    select.mockResolvedValueOnce(Symbol('cancel'));

    const result = await promptFixContradictions([sampleContradiction]);
    expect(result).toBeNull();
  });
});

describe('confirmApplyChanges', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    isCancel.mockReturnValue(false);
  });

  it('returns true when user confirms', async () => {
    confirm.mockResolvedValueOnce(true);
    await expect(confirmApplyChanges()).resolves.toBe(true);
  });

  it('returns false when user declines', async () => {
    confirm.mockResolvedValueOnce(false);
    await expect(confirmApplyChanges()).resolves.toBe(false);
  });
});
