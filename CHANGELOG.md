# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [0.1.7] - 2026-06-19

### Added

- `--local-only` flag to scan project files without global home configs (CI-safe)
- Monorepo scripts: `lint`, `check`, `build`, `knip`, `agent-check` at root
- GitHub Actions CI workflow (quality + agent-check jobs)
- Husky pre-commit with lint-staged
- `AGENTS.md` for dogfooding in this repository
- `CONTRIBUTING.md`, `SECURITY.md`, `knip.json`

### Fixed

- Unit tests no longer depend on developer global agent config files
- Removed dead code: `preview-fixes.ts`, unused `AGENT_FILE_OWNERS` export

### Changed

- README: replaced misleading coverage badge with CI status badge
- README: updated CI/Husky examples with `--local-only`

## [0.1.6] - 2025

- CLI published to npm as `agentchecker`
- Landing page on Vercel
- Global agent config scanning (`~/.cursor`, `~/.codex`, etc.)
