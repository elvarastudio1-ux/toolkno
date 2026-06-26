---
title: Architecture — Tech Stack and Infrastructure
version: 1.0.0
status: active
owner: Founder
last_updated: 2026-06-26
related_documents:
  - gap-analysis.md
  - ../engineering/code-standards.md
  - ../prd/PRD-002-newsletter.md
---

# Tech Stack and Infrastructure

## Core Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Framework | Next.js | 15 (App Router) | Full-stack React framework; static generation, API routes, server components |
| UI | React | 18 | Component rendering |
| Styles | Tailwind CSS | 3.x | Utility-first styling; no custom CSS files |
| Database | PostgreSQL (Neon) | Serverless | Primary data store; Neon is the hosted provider |
| ORM | Prisma | Latest | Type-safe database access; schema-as-code |
| Auth | NextAuth.js | v4 | Session management, Google OAuth, email magic link |
| Email | Resend | Latest | Transactional email (auth) and newsletter sending |
| Payments | Razorpay | Latest | Payment order creation, HMAC verification, plan upgrade |
| Ads | Google AdSense | — | Revenue from free tool traffic |
| Deployment | Vercel | — | Hosting, edge CDN, serverless functions |
| Analytics | Google Analytics 4 | — | Traffic and event tracking |

## Key Files and Their Roles

### `lib/tools.js` — Tool Registry (187KB)

The central data module for all 65 tools. Contains:
- `tools` array — all tool definitions (slug, name, category, description)
- `categories` and `categoryMeta` — category definitions and metadata
- `slugContentOverrides` — per-tool extended content (intro, benefits, worked example, FAQ)
- `contextualToolMap` — related tools per tool
- `slugSeoOverrides` — per-tool SEO customization
- Functions: `getToolContent()`, `buildMetadata()`, `buildToolMetadata()`, `buildToolSchemas()`, `getToolBySlug()`, `getAllCategorySlugs()`, `getToolsByCategory()`

**Known issue:** This file is too large and has too many responsibilities. See `docs/architecture/gap-analysis.md` Gap #6 for the refactor plan.

### `lib/metadata.js`

Exports `buildMetadata()` — the canonical function for generating Next.js metadata objects including OG tags, canonical URL, and robots directives.

### `lib/site.js`

Exports `siteConfig` — the site-wide configuration object including URL, ad slot IDs, and site name.

### `prisma/schema.prisma` — Database Schema

Current models:
```
User          — id, name, email, plan String, planExpiresAt
Payment       — Razorpay payment records
Account       — NextAuth OAuth accounts
Session       — NextAuth sessions
VerificationToken — NextAuth email magic link tokens
```

**Missing models (to be added as PRDs are implemented):**

| Model | Required by PRD | Priority |
|---|---|---|
| Subscriber | PRD-002 Newsletter | P0 |
| SubscriberToken | PRD-002 Newsletter | P0 |
| SubscriberEvent | PRD-002 Newsletter | P0 |
| NewsletterIssue | PRD-002 Newsletter | P0 |
| NewsletterSend | PRD-002 Newsletter | P0 |
| NewsletterClick | PRD-002 Newsletter | P0 |
| RateLimitEntry | PRD-002 Newsletter | P0 |
| Review | PRD-003 Reviews | P1 |
| SoftwareProduct | PRD-006 Software Database | P1 |
| PriceSnapshot | PRD-006 Software Database | P1 |
| AffiliateLink | PRD-011 Affiliate Registry | P2 |
| Author | PRD-013 Author Profiles | P2 |

`User.role` field also needs to be added for admin access (PRD-002 Admin Requirements).

### `app/sitemap.js`

Static sitemap. Generates entries for: homepage, /tools, static pages, category pages, all tool pages. Does not yet include: /reviews, /compare, /guides, /newsletter (these are added as the relevant PRDs are implemented).

### `proxy.js` — Dead Code

Contains `withAuth` middleware but Next.js only reads `middleware.js`. This file never executes. It should be deleted.

## Structured Data Schemas in Use

| Schema | Pages |
|---|---|
| WebApplication | All tool pages |
| FAQPage | All tool pages |
| BreadcrumbList | Tool pages, category pages |
| ItemList | Category pages |
| WebSite + SearchAction | Homepage |
| Organization | Homepage |

## Environment Variables

All environment variables are documented in `.env.example`.

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes | Neon PostgreSQL connection string |
| `NEXTAUTH_URL` | Yes | Auth callback URL |
| `NEXTAUTH_SECRET` | Yes | Session signing key |
| `GOOGLE_CLIENT_ID` | Yes | OAuth provider |
| `GOOGLE_CLIENT_SECRET` | Yes | OAuth provider |
| `RAZORPAY_KEY_ID` | Yes | Payment provider (public) |
| `RAZORPAY_KEY_SECRET` | Yes | Payment provider (secret) |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Yes | Payment provider (client-visible) |
| `RESEND_API_KEY` | Yes | Email sending |
| `EMAIL_FROM` | Yes | Email from address |
| `NEXT_PUBLIC_ADSENSE_ID` | Yes | Google AdSense publisher ID |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL |
| `NEXT_PUBLIC_SITE_NAME` | Yes | Site name for metadata |
| `RESEND_WEBHOOK_SECRET` | Needed for PRD-002 | Webhook signature verification |
| `NEWSLETTER_FROM_EMAIL` | Needed for PRD-002 | Newsletter sending address |

## Third-Party Service Exit Strategies

| Service | Lock-in Risk | Migration Path |
|---|---|---|
| Neon (PostgreSQL) | Medium | Standard PostgreSQL — any Postgres host accepts the same Prisma schema. Export via pg_dump. |
| Vercel | Medium | Next.js is portable. Self-host on Railway, Render, or Fly.io. The only Vercel-specific feature in use is Vercel Cron (once added) — replace with an external cron service. |
| Resend | Low | Resend uses standard SMTP. Subscriber data is in our database. Migration = update API key and sending domain config. |
| Razorpay | Medium | Payment history is in our database. New payments use the new provider. Active subscriptions require manual migration or a grace period. |
| NextAuth v4 | Medium | Session data is in our database. Migration to v5 (Auth.js) is documented in the Auth.js migration guide. |
| Google AdSense | High | Ad revenue disappears. Alternatives: Carbon Ads, Ethical Ads, Ezoic, direct sponsorships. This is an existential risk if AdSense terminates the account — the mitigation is newsletter sponsorships as a second revenue stream. |

---

## Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Initial tech stack documentation | Founder |
