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
  {
    agent: 'codex',
    kind: 'tool-specific',
    patterns: ['.codex/config.toml'],
  },
  {
    agent: 'antigravity',
    kind: 'tool-specific',
    patterns: ['.gemini.md', '.gemini/gemini.md', 'gemini.md', '.agents/AGENTS.md'],
  },
  {
    agent: 'opencode',
    kind: 'tool-specific',
    patterns: ['.opencode.json', '.opencode.jsonc'],
  },
  {
    agent: 'windsurf',
    kind: 'tool-specific',
    patterns: ['.windsurfrules', '.windsurf/rules/*.md'],
  },
  {
    agent: 'cline',
    kind: 'tool-specific',
    patterns: ['.clinerules', '.clinerules/*.md', '.roo/rules/*.md', '.clinerules-*'],
  },
  {
    agent: 'aider',
    kind: 'tool-specific',
    patterns: ['.aider.conf.yml', 'CONVENTIONS.md', '.aider.instructions.md'],
  },
];

export const IGNORE_PATTERNS = [
  '**/node_modules/**',
  '**/.git/**',
  '**/dist/**',
  '**/.svelte-kit/**',
  '**/build/**',
];
