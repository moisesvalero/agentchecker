import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import type { FileChange } from '../types.js';
import { applyChangesToContent } from './plan-fixes.js';
import pc from 'picocolors';

export function previewFixes(changes: FileChange[]): string {
  const byFile = new Map<string, FileChange[]>();
  for (const change of changes) {
    const list = byFile.get(change.filePath) ?? [];
    list.push(change);
    byFile.set(change.filePath, list);
  }

  const parts: string[] = [];
  for (const [filePath, fileChanges] of byFile) {
    parts.push(pc.bold(filePath));
    for (const change of fileChanges) {
      parts.push(`  ${pc.red(`- ${change.oldText.trim()}`)}`);
      parts.push(`  ${pc.green(`+ ${change.newText.trim()}`)}`);
    }
    parts.push('');
  }
  return parts.join('\n');
}

function hashContent(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}

export async function applyFixes(changes: FileChange[]): Promise<string[]> {
  const byFile = new Map<string, FileChange[]>();
  for (const change of changes) {
    const list = byFile.get(change.filePath) ?? [];
    list.push(change);
    byFile.set(change.filePath, list);
  }

  const updated: string[] = [];

  for (const [filePath, fileChanges] of byFile) {
    const before = await readFile(filePath, 'utf8');
    const beforeHash = hashContent(before);
    const after = applyChangesToContent(before, fileChanges);

    if (after === before) continue;

    const current = await readFile(filePath, 'utf8');
    if (hashContent(current) !== beforeHash) {
      throw new Error(`File changed during fix: ${filePath}`);
    }

    await writeFile(filePath, after, 'utf8');
    updated.push(filePath);
  }

  return updated;
}
