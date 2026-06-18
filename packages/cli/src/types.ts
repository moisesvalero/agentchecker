export type FactCategory =
  | 'package-manager'
  | 'linter'
  | 'formatter'
  | 'test-runner';

export type AgentId =
  | 'shared'
  | 'cursor'
  | 'claude'
  | 'copilot'
  | 'codex'
  | 'antigravity'
  | 'opencode'
  | 'windsurf'
  | 'cline'
  | 'aider';

export type AgentFile = {
  path: string;
  relativePath: string;
  agent: AgentId;
  kind: 'shared' | 'tool-specific' | 'legacy';
  content: string;
};

export type Fact = {
  category: FactCategory;
  value: string;
  filePath: string;
  line: number;
  evidence: string;
};

export type ContradictionValue = {
  value: string;
  files: string[];
  evidence: string[];
};

export type Contradiction = {
  category: FactCategory;
  values: ContradictionValue[];
  recommendation: string;
};

export type FileChange = {
  filePath: string;
  line: number;
  oldText: string;
  newText: string;
};

export type CliOptions = {
  cwd: string;
  dryRun: boolean;
  checkOnly: boolean;
  yes: boolean;
  verbose: boolean;
  agents: AgentId[] | null;
};

export const EXIT_OK = 0;
export const EXIT_CONTRADICTIONS = 1;
export const EXIT_USAGE = 2;
export const EXIT_WRITE_ERROR = 3;

export const CATEGORY_LABELS: Record<FactCategory, string> = {
  'package-manager': 'Package manager',
  linter: 'Linter',
  formatter: 'Formatter',
  'test-runner': 'Test runner',
};
