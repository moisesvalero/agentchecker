# Agent Instructions

Shared rules for all AI coding tools working on this monorepo.

## Stack

- **Package manager:** pnpm (never npm, yarn, or bun)
- **Runtime:** Node.js >= 20
- **Language:** TypeScript with strict mode
- **Linter:** oxlint (not ESLint)
- **Formatter:** prettier
- **Unit tests:** vitest (CLI package)
- **Web:** SvelteKit 5 with Svelte 5 runes, svelte-check

## Monorepo layout

- `packages/cli` — publishable `agentchecker` CLI
- `apps/web` — static landing (`@agentchecker/web`)

## Development commands

Run from the repository root:

```sh
pnpm install
pnpm lint
pnpm check
pnpm test
pnpm build
pnpm agent-check
```

## Conventions

- Conventional commits in English (`feat:`, `fix:`, `chore:`, etc.)
- Comments in code: Spanish, concise, only for non-obvious logic
- Minimize scope — match existing patterns, no over-engineering
- Do not commit secrets or `.env` files
