# Calitoy Content

Calitoy Content is CalitoyCorp’s owned SEO intelligence platform: technical audits, keyword and competitor research, rank tracking, backlink intelligence, site health, AI visibility, Search Console workflows, and agent-assisted research.

It is a full-stack application—not the static Calitoy Content sales page. The marketing page sells the service; this repository powers the operational software for delivering it.

## Capabilities

- Domain, keyword, competitor, and backlink research
- Rank tracking and project workspaces
- Technical site audits and issue triage
- Google Search Console workflows
- AI visibility, MCP tools, and optional OpenRouter-assisted analysis
- Team authentication and organization-aware projects

## Managing the Calitoy portfolio

Use one project per independently ranked property so keywords, audits, Search Console data, rankings, backlinks, and reporting remain isolated while still living in one Calitoy Content workspace. The initial roster, launch sequence, operating rhythm, and editorial safeguards are documented in [`docs/CALITOY_PORTFOLIO_SEO.md`](docs/CALITOY_PORTFOLIO_SEO.md).

## Provenance and license

This product started from the MIT-licensed [OpenSEO](https://github.com/JoS727/open-seo) codebase, then was incorporated into this owned Calitoy Content repository. The original `LICENSE` is preserved, as required by the MIT license. Runtime identifiers such as existing migration history and Worker object names are intentionally retained until the deployment migration is planned; this avoids breaking existing data or Cloudflare bindings during the code move.

## Local development

Prerequisites: Node 20+ and pnpm.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm run db:migrate:local
pnpm run dev
```

For a production-equivalent build check:

```sh
pnpm run build
```

## Production configuration

This app is designed for Cloudflare. Configure all credentials as encrypted deployment secrets—never commit them.

Required for SEO data:
- `DATAFORSEO_API_KEY` — Base64-encoded DataForSEO `login:password` credential.

Recommended for protected deployments:
- `AUTH_MODE=cloudflare_access`
- `TEAM_DOMAIN`
- `POLICY_AUD`

Optional integrations:
- `OPENROUTER_API_KEY` for the AI SEO agent
- Google OAuth credentials plus `BETTER_AUTH_SECRET` for Search Console

Start with `.env.example`, then follow `docs/SELF_HOSTING_CLOUDFLARE.md` for Cloudflare deployment or `docs/SELF_HOSTING_DOCKER.md` for local/private self-hosting.
