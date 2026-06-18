import { readFile } from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import type { AgentFile, AgentId } from '../types.js';
import { AGENT_FILE_PATTERNS, IGNORE_PATTERNS } from './known-files.js';

export async function scanProject(
  cwd: string,
  agentFilter: AgentId[] | null,
): Promise<AgentFile[]> {
  const entries = AGENT_FILE_PATTERNS.filter(
    (entry) => !agentFilter || agentFilter.includes(entry.agent),
  );

  const files: AgentFile[] = [];
  const seen = new Set<string>();

  for (const entry of entries) {
    const matches = await fg(entry.patterns, {
      cwd,
      absolute: true,
      onlyFiles: true,
      dot: true,
      ignore: IGNORE_PATTERNS,
    });

    for (const absolutePath of matches) {
      if (seen.has(absolutePath)) continue;
      seen.add(absolutePath);

      const content = await readFile(absolutePath, 'utf8');
      files.push({
        path: absolutePath,
        relativePath: path.relative(cwd, absolutePath).replace(/\\/g, '/'),
        agent: entry.agent,
        kind: entry.kind,
        content,
      });
    }
  }

  return files.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
}
