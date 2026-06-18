import type { AgentId } from '../types.js';

export const AGENT_LABELS: Record<AgentId, string> = {
  shared: 'AGENTS.md',
  cursor: 'Cursor',
  claude: 'Claude Code',
  copilot: 'GitHub Copilot',
};

export const AGENT_FILE_OWNERS: Record<string, AgentId[]> = {
  'AGENTS.md': ['shared'],
  'CLAUDE.md': ['claude'],
  '.claude/CLAUDE.md': ['claude'],
  '.cursorrules': ['cursor'],
  '.github/copilot-instructions.md': ['copilot'],
};

export function normalizeAgentFilter(input: string): AgentId | null {
  const key = input.toLowerCase().replace(/_/g, '-');
  const map: Record<string, AgentId> = {
    shared: 'shared',
    agents: 'shared',
    'agents-md': 'shared',
    cursor: 'cursor',
    claude: 'claude',
    'claude-code': 'claude',
    copilot: 'copilot',
    'github-copilot': 'copilot',
  };
  return map[key] ?? null;
}
