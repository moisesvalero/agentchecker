import * as p from '@clack/prompts';
import type { Contradiction } from '../types.js';
import { CATEGORY_LABELS } from '../types.js';

type ResolvedContradiction = Contradiction & { chosen: string };

export async function promptFixContradictions(
  contradictions: Contradiction[],
): Promise<ResolvedContradiction[] | null> {
  const shouldFix = await p.confirm({
    message: 'Fix contradictions?',
    initialValue: true,
  });

  if (p.isCancel(shouldFix) || !shouldFix) return null;

  const resolved: ResolvedContradiction[] = [];

  for (const contradiction of contradictions) {
    const options = contradiction.values.map((entry) => ({
      value: entry.value,
      label:
        entry.value === contradiction.recommendation ? `${entry.value} (recommended)` : entry.value,
    }));

    const chosen = await p.select({
      message: `${CATEGORY_LABELS[contradiction.category]}: which do you prefer?`,
      options,
      initialValue: contradiction.recommendation,
    });

    if (p.isCancel(chosen)) return null;

    resolved.push({
      ...contradiction,
      chosen: String(chosen),
    });
  }

  return resolved;
}

export async function confirmApplyChanges(): Promise<boolean> {
  const confirmed = await p.confirm({
    message: 'Apply changes?',
    initialValue: true,
  });

  if (p.isCancel(confirmed)) return false;
  return Boolean(confirmed);
}
