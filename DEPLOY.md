# Deploy

Landing deploys **only from GitHub** — no manual `vercel deploy`.

1. Vercel project: `agentcheck`
2. Repo: `moisesvalero/agent-check`
3. Root directory: `apps/web`
4. Every push to `main` triggers production build

Local preview:

```bash
pnpm --filter @agent-check/web dev
```
