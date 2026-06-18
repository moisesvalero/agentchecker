# Deploy

Landing deploys **only from GitHub** — no manual `vercel deploy`.

1. Vercel project: `agentchecker`
2. Repo: `moisesvalero/agentchecker`
3. Root directory: `apps/web`
4. Every push to `main` triggers production build

Local preview:

```bash
pnpm --filter @agentchecker/web dev
```
