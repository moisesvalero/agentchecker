# Contributing

Thanks for contributing to agentchecker!

## Prerequisites

- Node.js >= 20
- pnpm 10 (`corepack enable`)

## Setup

```sh
git clone https://github.com/moisesvalero/agentchecker.git
cd agentchecker
pnpm install
```

## Commands

Run from the repository root:

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `pnpm lint`        | oxlint on CLI and web                            |
| `pnpm check`       | TypeScript + svelte-check                        |
| `pnpm test`        | Vitest (CLI unit + e2e)                          |
| `pnpm build`       | Build CLI and landing                            |
| `pnpm knip`        | Dead code / unused dependency check              |
| `pnpm agent-check` | Dogfood: scan repo for agent rule contradictions |
| `pnpm dev:web`     | SvelteKit dev server                             |

## Pre-commit hooks

This repo uses Husky. After `pnpm install`, each commit runs lint-staged, type checks, tests, and `agent-check`.

## Pull requests

1. Create a feature branch from `main`
2. Keep changes focused and minimal
3. Ensure `pnpm lint && pnpm check && pnpm test && pnpm build` pass
4. Use [conventional commits](https://www.conventionalcommits.org/) in English

## Project structure

- `packages/cli` — publishable CLI (`agentchecker` on npm)
- `apps/web` — static landing deployed on Vercel
- `AGENTS.md` — shared AI agent instructions for this repo
