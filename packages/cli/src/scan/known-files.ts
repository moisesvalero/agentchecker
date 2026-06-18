import type { AgentId } from '../types.js';

export type AgentFilePattern = {
  agent: AgentId;
  kind: 'shared' | 'tool-specific' | 'legacy';
  patterns: string[];
};

export const AGENT_FILE_PATTERNS: AgentFilePattern[] = [
  {
    agent: 'shared',
    kind: 'shared',
    patterns: ['AGENTS.md'],
  },
  {
    agent: 'claude',
    kind: 'tool-specific',
    patterns: ['CLAUDE.md', '.claude/CLAUDE.md'],
  },
  {
    agent: 'cursor',
    kind: 'tool-specific',
    patterns: ['.cursor/rules/*.mdc', '.cursorrules'],
  },
  {
    agent: 'copilot',
    kind: 'tool-specific',
    patterns: [
      '.github/copilot-instructions.md',
      '.github/instructions/*.instructions.md',
    ],
  },
];

export const IGNORE_PATTERNS = [
  '**/node_modules/**',
  '**/.git/**',
  '**/dist/**',
  '**/.svelte-kit/**',
  '**/build/**',
];
