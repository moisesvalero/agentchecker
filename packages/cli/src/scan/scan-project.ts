import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import fg from 'fast-glob';
import type { AgentFile, AgentId } from '../types.js';
import { AGENT_FILE_PATTERNS, GLOBAL_AGENT_PATTERNS, IGNORE_PATTERNS } from './known-files.js';

async function exists(p: string): Promise<boolean> {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function scanGlobalFiles(agentFilter: AgentId[] | null): Promise<AgentFile[]> {
  const home = os.homedir();
  const files: AgentFile[] = [];
  const seen = new Set<string>();

  const entries = GLOBAL_AGENT_PATTERNS.filter(
    (entry) => !agentFilter || agentFilter.includes(entry.agent),
  );

  for (const entry of entries) {
    for (const relPath of entry.paths) {
      const absolutePath = path.join(home, relPath);
      if (seen.has(absolutePath)) continue;

      // Si es un directorio (p.ej. .cursor/rules), escanea con glob
      const s = await stat(absolutePath).catch(() => null);
      if (s?.isDirectory()) {
        const matches = await fg(['**/*.md', '**/*.mdc', '**/*.json'], {
          cwd: absolutePath,
          absolute: true,
          onlyFiles: true,
          dot: true,
        });
        for (const match of matches) {
          if (seen.has(match)) continue;
          seen.add(match);
          const content = await readFile(match, 'utf8');
          files.push({
            path: match,
            relativePath: `~/${path.relative(home, match).replace(/\\/g, '/')}`,
            agent: entry.agent,
            kind: 'global',
            content,
          });
        }
        continue;
      }

      // Archivo concreto
      if (!(await exists(absolutePath))) continue;
      seen.add(absolutePath);

      const content = await readFile(absolutePath, 'utf8');
      files.push({
        path: absolutePath,
        relativePath: `~/${relPath}`,
        agent: entry.agent,
        kind: 'global',
        content,
      });
    }
  }

  return files;
}

export async function scanProject(
  cwd: string,
  agentFilter: AgentId[] | null,
  includeGlobal = true,
): Promise<AgentFile[]> {
  const entries = AGENT_FILE_PATTERNS.filter(
    (entry) => !agentFilter || agentFilter.includes(entry.agent),
  );

  const files: AgentFile[] = [];
  const seen = new Set<string>();

  // Escaneo local (proyecto actual)
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

  if (includeGlobal) {
    const globalFiles = await scanGlobalFiles(agentFilter);

    for (const gf of globalFiles) {
      if (!seen.has(gf.path)) {
        seen.add(gf.path);
        files.push(gf);
      }
    }
  }

  return files.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
}
