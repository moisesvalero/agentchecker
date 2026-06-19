import type { AgentId } from '../types.js';

export const AGENT_LABELS: Record<AgentId, string> = {
  shared: 'AGENTS.md',
  cursor: 'Cursor',
  claude: 'Claude Code',
  copilot: 'GitHub Copilot',
  codex: 'Codex App',
  antigravity: 'Antigravity 2.0',
  opencode: 'OpenCode',
  windsurf: 'Windsurf',
  cline: 'Roo Cline',
  aider: 'Aider',
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
    codex: 'codex',
    antigravity: 'antigravity',
    gemini: 'antigravity',
    opencode: 'opencode',
    windsurf: 'windsurf',
    cline: 'cline',
    'roo-cline': 'cline',
    'roo-code': 'cline',
    aider: 'aider',
  };
  return map[key] ?? null;
}
