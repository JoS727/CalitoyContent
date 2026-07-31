# Calitoy Content

Calitoy Content is the owned SEO intelligence platform for CalitoyCorp: technical SEO, keyword and competitor research, rank tracking, backlink intelligence, site audits, AI visibility, and agent-assisted workflows.

## Product foundation

The application is based on the MIT-licensed OpenSEO project (copyright © 2026 Ben Senescu). Its original `LICENSE` is preserved in this repository and the platform has been brought into this owned codebase for Calitoy Content branding, operations, and deployment.

## What needs configuration before production deployment

This is a full-stack Cloudflare application, not a static brochure site. Deployment secrets belong only in the deployment provider's encrypted secret store; do not commit them.

Required for SEO data:

- `DATAFORSEO_API_KEY` — Base64-encoded `login:password` DataForSEO credential.

Required for secure Cloudflare Access deployment:

- `AUTH_MODE=cloudflare_access`
- `TEAM_DOMAIN`
- `POLICY_AUD`

Optional integrations:

- `OPENROUTER_API_KEY` for the in-app AI/SEO agent.
- Google OAuth credentials and `BETTER_AUTH_SECRET` for Search Console integration.

See `.env.example`, `docs/SELF_HOSTING_CLOUDFLARE.md`, and `docs/LOCAL_DEVELOPMENT.md` for the complete setup.

## Local build

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm run build
```
