import { stripFrontmatter } from './strip-frontmatter.js';

export function normalizeMarkdown(content: string): string {
  return stripFrontmatter(content).replace(/\r\n/g, '\n');
}

export function getLines(content: string): string[] {
  return normalizeMarkdown(content).split('\n');
}
