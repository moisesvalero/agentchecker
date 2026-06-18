Output Width 900
Height 520
Theme "Catppuccin Mocha"
FontSize 16
TypingSpeed 40ms

Type "cd my-project"
Enter
Sleep 300ms
Type "npx agentcheck"
Enter
Sleep 800ms

Show
Sleep 500ms

Output `agent-check

Found:
  ✓ AGENTS.md (Shared)
  ✓ CLAUDE.md (Claude)
  ✓ .cursor/rules/global.mdc (Cursor)

⚠ 2 contradictions found:

Package manager
  AGENTS.md → pnpm
  CLAUDE.md → npm
  recommended: pnpm

Linter
  AGENTS.md → oxlint
  CLAUDE.md → eslint
  recommended: oxlint

Dry run complete. No files were changed.`

Sleep 2s
