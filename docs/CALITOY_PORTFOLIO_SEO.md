# Calitoy Portfolio SEO Operations

One Calitoy Content deployment can run SEO operations for every Calitoy property. The platform is organization-aware and project-aware: each site receives its own project, domain, market, keyword set, rank history, audits, backlinks, Search Console connection, and agent context while remaining visible from one project switcher.

## Initial project roster

Create one project per independently ranked domain or audience. Do not merge unrelated domains into a single project.

| Project | Primary domain | Initial market | Operating focus |
| --- | --- | --- | --- |
| Tarosyn Marketing | `tarosyn.com` | United States / English | Tarot, astrology, spiritual guidance, branded discovery |
| Tarosyn App | `tarosyn.app` | United States / English | Product-led search, app landing pages, readings and features |
| XCalitoy | `xcalitoy.com` | United States / English | Portfolio navigation, Joseph Calitoy identity, culture and projects |
| Calitoy Content | `content.xcalitoy.com` | United States / English | AI-powered SEO consulting and qualified client leads |
| Calitoy Custom | `custom.xcalitoy.com` | United States / English | Custom skateboards, design work, local and product intent |
| Calitoy Cues | Confirm production domain | United States / English | Music discovery, creative work, branded queries |
| CalitoyCorp | Confirm production domain | United States / English | Holding-company credibility and portfolio discovery |
| Kurced | `kurced.com` | United States / English | Music, lyrics, visual identity, releases and merchandise |
| Endof8 | `endof8.com` | San Diego / English | Ocean Beach news, culture, events and merchandise |
| Jeremy Dean Music | `jeremydeanmusic.com` | United States / English | Artist discovery, live shows, booking and music |
| Joseph Calitoy | `josephcalitoy.com` | United States / English | Artist/founder knowledge graph, music and portfolio identity |
| Wicked Youth Goods | Confirm production domain | United States / English | Skin products, product/category discovery and branded search |
| SpaX | Confirm production domain | United States / English | Product/service intent after market and domain confirmation |
| Field Trip | Confirm production domain | Confirm before tracking | Brand/product intent after market and domain confirmation |

A subdomain should be its own project when it has a separate audience, conversion, Search Console property, or content strategy. That is why Calitoy Content and Calitoy Custom should not be hidden inside the general XCalitoy project.

## Launch sequence

1. Deploy Calitoy Content behind Cloudflare Access.
2. Configure `DATAFORSEO_API_KEY`; optionally add OpenRouter and Google OAuth/Search Console credentials.
3. Create the projects above. Confirm unknown production domains before creating their records.
4. Connect the matching Google Search Console property to each project.
5. Run a baseline site audit and domain overview for every confirmed domain.
6. Build one saved keyword set per project, tagged by funnel stage:
   - Brand
   - Commercial
   - Product/service
   - Informational
   - Local
   - Competitor
   - AI-answer opportunity
7. Enable rank tracking only after keywords, location, and language are reviewed. Rank checks use paid API capacity.
8. Record baseline metrics before changing pages: indexed pages, technical errors, branded/non-branded queries, conversions, rank distribution, backlinks, and AI visibility.
9. Work in 30-day sprints and report changes by project, not as an undifferentiated portfolio total.

## Portfolio operating rhythm

### Weekly

- Check failed audits and ranking losses.
- Review new Search Console queries and pages.
- Triage technical regressions introduced by deployments.
- Identify high-impression/low-click pages and conversion leaks.
- Review local and event opportunities for location-dependent brands.

### Monthly

- Refresh priority keyword metrics and competitors.
- Run full technical audits on active properties.
- Review backlinks and harmful/lost-link changes.
- Produce a project-level performance report and a portfolio executive summary.
- Update the next content sprint based on actual query demand.
- Check visibility in Google and AI-assisted search; never present AI citations as guaranteed or stable rankings.

## Guardrails

- Do not reuse the same target keyword across multiple Calitoy properties unless the pages serve clearly different intent. Prevent internal portfolio cannibalization.
- Do not automatically publish AI-generated articles. Use AI for research, briefs, outlines, first drafts, schema suggestions, and QA; require editorial review before release.
- Do not promise rankings, traffic, or AI citations.
- Do not run backlink automation that buys links, spams outreach, or fabricates placements.
- Keep each Search Console connection and reporting view scoped to its correct project.
- Treat police reports, community posts, and social feeds on Endof8 as attributed sources, not verified facts unless independently confirmed.
- Keep DataForSEO and model usage budgeted. Cache results and avoid refreshing every property unnecessarily.

## What the current platform supports

- Multiple projects under one organization
- Project-specific domains and geographic/language markets
- Saved keyword lists, tagging, metrics, and rank tracking
- Site audits and issue triage
- Domain, competitor, and backlink research
- Search Console connection per project
- AI/agent workflows and MCP tools
- Project archiving without losing historical data

## Remaining production work

The code is build-ready, but operating the portfolio requires deployment resources and secrets. Complete Cloudflare Access, database/storage bindings, DataForSEO, and optional OpenRouter/Google OAuth setup before calling it operational. Then create the confirmed projects through the UI or MCP tools rather than hard-coding production records into source control.
