import pc from 'picocolors';
import type { AgentFile, Contradiction } from '../types.js';
import { CATEGORY_LABELS } from '../types.js';
import { AGENT_LABELS } from '../scan/agent-map.js';

export function renderFoundFiles(files: AgentFile[]): string {
  if (files.length === 0) {
    return pc.yellow('No agent instruction files found in this project.');
  }

  const lines = files.map(
    (file) => `  ${pc.green('✓')} ${file.relativePath} ${pc.dim(`(${AGENT_LABELS[file.agent]})`)}`,
  );
  return ['Found:', ...lines].join('\n');
}

export function renderContradictions(contradictions: Contradiction[]): string {
  if (contradictions.length === 0) {
    return pc.green('✓ No contradictions found. All your agents agree.');
  }

  const lines = [
    pc.yellow(`⚠  ${contradictions.length} contradiction${contradictions.length === 1 ? '' : 's'} found:\n`),
  ];

  for (const contradiction of contradictions) {
    lines.push(pc.bold(CATEGORY_LABELS[contradiction.category]));
    for (const value of contradiction.values) {
      for (const file of value.files) {
        lines.push(`  ${pc.dim(file)} → ${pc.cyan(value.value)}`);
      }
    }
    if (contradiction.recommendation) {
      lines.push(pc.dim(`  recommended: ${contradiction.recommendation}`));
    }
    lines.push('');
  }

  return lines.join('\n');
}
