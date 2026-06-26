---
title: ToolKno Operating System
version: 1.0.0
status: approved
owner: Founder
last_updated: 2026-06-26
related_documents:
  - ../constitution/toolkno-constitution.md
  - ../editorial/editorial-standards.md
  - ../engineering/code-standards.md
  - ../design/design-principles.md
  - ../growth/growth-flywheel.md
---

# ToolKno Operating System

This is the permanent company handbook. It describes how ToolKno operates across every function: editorial, product, engineering, design, growth, analytics, and AI usage. It does not describe timelines, roadmaps, or temporary plans. Those belong in `docs/roadmap/`.

The Operating System is the answer to the question: "How do we do things at ToolKno?" The Constitution answers: "What will we never do?" The PRDs answer: "What exactly are we building?" These three documents work as a system.

---

## 1. Company

### Mission

ToolKno helps people make better software decisions by publishing the most trustworthy software editorial content on the internet, supported by free browser-based productivity tools that demonstrate our competence in the domains we write about.

### Vision

ToolKno becomes the company a professional reaches for before spending money on any software subscription. Not because ToolKno appears first in Google, but because ToolKno has never led them wrong.

### Core Values

**Trust is the product.** Everything ToolKno builds — tools, articles, comparisons, newsletters — only has value if the person using it trusts that it is honest, accurate, and current. Every other value exists in service of this one.

**Specificity over coverage.** ToolKno does not publish content about every software category. It publishes deeply researched content about a specific niche. A single authoritative review of one product is worth more than shallow coverage of twenty products.

**Earned attention over purchased attention.** ToolKno grows through quality, not ad spend. Every subscriber, every backlink, every referral is earned by producing something genuinely useful. This is slower but produces a more defensible audience.

**Small, useful, and fast.** The free tools exist to be useful in themselves. They are not lead magnets. They are not upsell vehicles. They are small, private, fast solutions to real problems. This constraint — make it genuinely useful or don't ship it — applies to every product decision.

### Decision Framework

When facing a decision where the correct path is unclear, apply this hierarchy:

1. Does a constitutional rule address this? If yes, follow it. Stop.
2. Does the Operating System address this? If yes, follow it. Stop.
3. Does the relevant PRD address this? If yes, follow it. Stop.
4. What option best serves the reader/user's actual interest, independent of ToolKno's revenue interest?
5. What option best builds long-term trust?
6. Document the decision in `docs/decisions/` if it sets a precedent.

### What ToolKno Will Never Become

- A review aggregator that scrapes and repurposes other publications' findings
- A paid placement platform where vendors buy positive coverage
- A free tool platform that survives on dark-pattern upsells
- A newsletter that primarily forwards links to content published elsewhere
- A software directory that adds tools it has never evaluated
- A comparison engine where the "winner" is determined by affiliate commission rate

---

## 2. Editorial

*Full editorial standards live in `docs/editorial/editorial-standards.md`. This section contains the principles; that document contains the operational standards.*

### Editorial Philosophy

ToolKno publishes editorial content in three formats: reviews, comparisons, and buying guides. Every piece of editorial content exists to help a specific reader make a specific decision. It is not published for SEO, for content velocity, or for affiliate revenue alone.

### How Reviews Are Written

1. **Selection:** A product is selected for review when it is: (a) in a category ToolKno covers, (b) used by ToolKno's target audience, and (c) either has no existing honest independent review or existing reviews are outdated by more than 18 months.
2. **Testing period:** Minimum 21 days of active use. "Active use" means using the product for the tasks it is designed for, not periodic check-ins.
3. **Documentation:** Testing notes are kept throughout the period. Impressions formed in week 1 that change by week 3 are documented as changes, not smoothed into a single verdict.
4. **Drafting:** The review is drafted after the testing period ends. It is not drafted during testing to prevent the act of writing from shaping the test.
5. **Fact-checking:** All factual claims (pricing, feature names, company information) are verified against the product's current documentation at the time of publication.
6. **Affiliate disclosure:** Disclosed inline per Constitution Rule 2.
7. **Update cycle:** Reviews are audited every 12 months or within 30 days of a major product change (price change, feature removal, acquisition, major UI overhaul).

### How Comparisons Are Written

Comparisons follow the same testing standards as reviews — each product in the comparison receives the same minimum testing period. A comparison of five products requires five separate testing periods, not a side-by-side evaluation of first impressions.

The comparison structure: use case definition → criteria establishment → per-product evaluation against criteria → verdict with explicit reasoning. The verdict must name a winner for the specific use case. "It depends" without specifying what it depends on is not a verdict.

### How Buying Guides Are Written

Buying guides address a purchase decision, not a product evaluation. They answer: "I need to solve [problem]. What software category should I consider, and how do I evaluate my options?" Buying guides are category-level documents; reviews and comparisons are product-level documents.

A buying guide references reviews and comparisons published on ToolKno rather than replicating their content. It links to them and summarizes the relevant finding. It does not repeat the full review within the buying guide.

### Evidence Requirements

Every claim in an editorial article requires evidence of one of the following types:

- **Direct observation:** The reviewer observed this during testing. Phrased in first person: "During three weeks of testing, the import function failed twice without warning."
- **Verified documentation:** Taken directly from the vendor's official documentation, pricing page, or changelog. The source must be linkable.
- **Third-party data:** From a named, primary source (e.g., G2 review count, Statista dataset). Not from a secondary source citing the primary.
- **User interview:** The reviewer spoke with at least three independent users of the product and quotes or paraphrases their specific experience.

Anecdotal inference ("users generally find"), generic claims ("the tool is easy to use"), and unattributed statistics are not permitted.

### Affiliate Disclosure Standard

Every article that contains affiliate links includes this disclosure at the top of the article, before the first affiliate link: *"ToolKno earns a commission if you purchase products through some links in this article. This does not affect which products we recommend or how we evaluate them. See our [Editorial Independence Policy](/editorial-independence)."*

Additionally, each individual affiliate link includes an inline marker per Constitution Rule 2.

The commission rate for any product does not influence its editorial position. This is documented in the editorial independence policy and verified via the affiliate registry in `docs/growth/affiliate-programs.md` — the registry records commission rates for all affiliate relationships, and editorial verdicts are compared against commission rates on a quarterly basis to check for correlation.

### Editorial Independence

The editor (currently the founder) makes all editorial decisions. No vendor has approval rights over reviews of their product before or after publication. No affiliate manager can request changes to editorial content as a condition of partnership.

If a vendor requests a factual correction: the fact is verified, and if incorrect, it is corrected and documented as a correction at the bottom of the article. The verdict is not changed as a result of vendor communication unless the testing evidence independently supports a change.

### Update Policy

| Trigger | Action |
|---|---|
| 12 months since publication | Full review audit — re-test key features, update all factual claims, update pricing |
| Major price change by vendor | Update pricing section within 7 days; note change date |
| Major feature removed | Update within 7 days; reconsider verdict if feature was cited as a recommendation driver |
| Product acquired | Add acquisition notice within 7 days; flag for full audit within 90 days |
| ToolKno testing methodology changes | Re-evaluate the verdict under the new methodology |

---

## 3. Product

### Product Philosophy

ToolKno builds two types of products: free tools and editorial content. The free tools are utility-first — they solve one problem per tool, they are fast, and they require no account. The editorial content is trust-first — it takes a position, it names sources, and it updates when facts change.

The product never tries to do everything. A tool that does one thing well is better than a tool that tries to do ten things adequately. An editorial article that makes one specific recommendation with a clearly explained rationale is better than an article that covers all options without reaching a conclusion.

### UX Principles

**The tool is the interface.** On a free tool page, the tool itself is visible above the fold without scrolling on any common viewport. Nothing is between the user and the tool — no newsletter modal, no cookie banner (beyond what is legally required), no interstitial.

**No friction before value.** Free tools provide their full functionality without requiring: account creation, email submission, social sharing, or any interaction beyond using the tool. If a feature requires an account, that requirement is disclosed before the user invests time in the tool.

**Predictable interactions.** Every tool on ToolKno works the same way: paste or type → tool processes → result appears. Keyboard shortcuts are consistent. Copy-to-clipboard is consistent. Error messages are specific about what went wrong and how to resolve it.

**Accessible by default.** Every tool page meets WCAG 2.1 AA. This is not a compliance checkbox — it is a product quality standard. A text tool that fails keyboard navigation is broken for a meaningful segment of the people who need text tools most.

### Performance Standards

These are hard requirements, not targets:

| Metric | Threshold | Applies to |
|---|---|---|
| LCP | < 2.5s | All pages |
| CLS | < 0.1 | All pages |
| INP | < 200ms | All interactive tool pages |
| Time to Interactive | < 3.5s | Tool pages on 3G |
| Bundle size (per page JS) | < 150KB parsed | All pages |

Performance is verified in Lighthouse before every production deployment. A deployment that degrades performance below these thresholds is reverted.

### SEO Philosophy

ToolKno's SEO strategy is to earn rankings through content quality, not through technical manipulation. The practical consequence: every tool page has unique, specific, useful content. No two tool pages have the same meta description. The FAQ on every tool page contains questions that real users ask, not questions generated to match keyword patterns.

Internal linking is intentional. A link from one ToolKno page to another is placed because it is genuinely useful to a reader in that context — not because an internal linking audit identified a keyword opportunity. Programmatic internal linking without editorial review is not permitted.

### Content Architecture

```
toolkno.com/                       — homepage
toolkno.com/tools/                 — all tools directory
toolkno.com/tools/[slug]/          — individual tool page
toolkno.com/tools/category/[slug]/ — category page
toolkno.com/reviews/[slug]/        — software review
toolkno.com/compare/[a]-vs-[b]/    — comparison
toolkno.com/guides/[slug]/         — buying guide
toolkno.com/software/[slug]/       — software database entry
toolkno.com/newsletter/            — newsletter landing
toolkno.com/methodology/           — editorial methodology
toolkno.com/about/                 — about ToolKno
toolkno.com/pricing/               — pricing
```

URL slugs are lowercase, hyphenated, human-readable. No IDs in URLs. URLs do not change after publication. If a URL must change, a permanent 301 redirect is put in place on the same day.

### Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Tool names | Title case, descriptive, no "Tool" suffix | "Word Counter" not "Word Counting Tool" |
| Review page titles | `[Product Name] Review: [year] Finding` | "Grammarly Review: 2026 Finding" |
| Comparison titles | `[Product A] vs [Product B]: [use case]` | "Grammarly vs Hemingway: Which Should Writers Use?" |
| Buying guide titles | `Best [Category] Software: [use case qualifier]` | "Best Grammar Checkers for Academic Writers" |
| API routes | `/api/[resource]/[action]` | `/api/newsletter/subscribe` |
| Component names | PascalCase, descriptive | `NewsletterSignupForm` not `Form` |

---

## 4. Engineering

*Full standards live in `docs/engineering/code-standards.md`. This section contains principles; that document contains operational rules.*

### Engineering Philosophy

The codebase serves the product. Engineering decisions exist to make the product better for users, not to explore interesting technical problems. The right technology choice for ToolKno is the boring, well-supported, well-documented choice that the team understands completely — not the most technically interesting option.

A codebase that the founder can fully understand, debug, and extend alone is better than a sophisticated codebase that requires a specialist to maintain.

### Code Standards

- Next.js App Router with static generation where possible
- Tailwind CSS for all styles — no custom CSS files, no CSS modules, no styled-components
- TypeScript is not currently used; if adopted, it must be adopted project-wide, not per-file
- Prisma for all database access — no raw SQL queries except for administrative migration scripts
- API routes are minimal — they validate, call a service function, return a response
- No business logic in route handlers; business logic lives in `lib/` functions

### Component Philosophy

Every component does one thing. A component that manages state, makes API calls, and renders a complex layout is three components. Extract until the responsibility of each component can be stated in one sentence.

Components in `components/` are generic and reusable. Components in `app/` are page-specific. If a page-specific component gets used in a second place, it moves to `components/`.

### API Philosophy

Every API route returns responses in a consistent shape. Errors return `{ error: { code: string, message: string } }`. Success returns `{ success: true, [data]: ... }` or the resource directly. HTTP status codes are semantically correct — 200 for success, 400 for client errors, 401 for unauthenticated, 403 for unauthorized, 422 for validation errors, 429 for rate limits, 500 for server errors.

Rate limiting is applied to every public-facing API endpoint before launch.

### Security

- User input is never used in database queries without Prisma parameterization
- Environment variables containing secrets are never logged, returned in API responses, or committed to git
- Webhook signatures are verified on every inbound webhook request
- Admin routes are protected by session middleware — not checked inside the route handler
- Open redirect vulnerabilities are prevented by validating redirect URLs against an allowlist

### Git Workflow

- `main` is the production branch. All changes go through pull requests.
- Commits are atomic — one change per commit, with a descriptive message
- Commit messages follow conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`
- No direct commits to `main` except for emergency hotfixes, which must be documented

### Definition of Done

A feature is done when:
1. The PRD acceptance criteria are met and verified
2. Core Web Vitals pass on the affected pages
3. Accessibility passes axe-core with no critical or serious violations
4. Rate limiting is applied to any new public API endpoints
5. The relevant PRD status is updated to `implemented`
6. The sitemap is updated if new pages were added

---

## 5. Design

*Full standards live in `docs/design/design-principles.md`.*

### Visual Principles

ToolKno's visual design communicates two things: competence and honesty. Competence through consistency, precision, and intentionality. Honesty through restraint — no visual flourishes that overstate what the product does, no promotional imagery that sets false expectations.

The visual hierarchy on every page is: the primary user action first, then supporting context, then secondary actions. If a page has two equally prominent CTAs, one of them is wrong.

### Typography

- **Heading font:** Inter or the configured heading font, set to font-semibold or font-bold depending on hierarchy level
- **Body font:** System font stack, 14px–16px, line-height 1.6–1.7
- **Code font:** System monospace stack
- **Color:** `text-slate-900` for primary headings, `text-slate-500` for body, `text-sky-500` for accent and interactive

### Trust Signals

Trust signals on ToolKno are specific and verifiable, not generic. "Trusted by 10,000 writers" is a trust signal only if it is true and current. "Your text never leaves your device" is a trust signal only if it is architecturally true and publicly verifiable. Generic trust badges, unverifiable claim counts, and stock photography of diverse teams smiling are not used.

---

## 6. Growth

*Full strategies live in `docs/growth/growth-flywheel.md` and `docs/growth/affiliate-programs.md`.*

### SEO Philosophy

ToolKno's organic search strategy is keyword-last. Content is planned based on: is there a genuine editorial angle, is there a real user decision to be helped, does ToolKno have the authority to speak on this topic? Keyword volume informs the title and meta description after the content decision has been made — it does not drive the content decision.

### Newsletter Philosophy

The newsletter is the primary distribution channel for editorial content. It is published biweekly. It contains original editorial content — not a link digest, not a summary of articles published elsewhere. Growth metrics (subscriber count, open rate) are tracked but do not determine whether an issue is published. Quality determines whether an issue is published.

### Distribution Philosophy

ToolKno does not depend on a single distribution channel. Organic search, newsletter, social media, community participation, and direct backlinks are all cultivated simultaneously so that a change in any one channel does not eliminate ToolKno's ability to reach its audience. The priority order at launch: organic search → newsletter → community → social → direct.

---

## 7. AI Usage

### Permitted AI Uses

- Drafting initial outlines for editorial content (human writes the final version)
- Generating candidate FAQ questions for tool pages (human selects and edits)
- Summarizing testing notes into draft paragraphs (human verifies against raw notes)
- Writing and reviewing code (human reviews all output before commit)
- Generating structured data schema JSON (human validates against Schema.org spec)
- Drafting PRDs (human reviews against product vision before approval)

### AI Usage That Is Never Trusted Without Full Human Review

- Final editorial verdicts — AI cannot evaluate software; humans evaluate and AI may assist in structuring the findings
- Factual claims about vendor products, pricing, or features — all such claims are verified against primary sources
- Affiliate link placement — every affiliate link is placed by a human following the disclosure standard
- Database migrations — AI-generated schema changes are reviewed by a human before execution
- Any API key, secret, or environment variable handling

### Human Review Requirements

All AI-generated content that appears in a published ToolKno article, tool description, or newsletter is reviewed and substantially edited by a human before publication. "Reviewed" means: read word for word, verified against evidence, and edited for accuracy and voice. Not "glanced at for obvious errors."

---

## 8. Analytics

### Primary KPIs

| KPI | Definition | Target (Month 12) |
|---|---|---|
| Confirmed newsletter subscribers | Subscribers with status: confirmed | 2,000 |
| Affiliate revenue | Monthly commission income | $1,000+ |
| Organic sessions | Google Search Console sessions | 50,000/month |
| Tool page sessions | Sessions on /tools/* | Growing MoM |
| Newsletter open rate | Unique opens / sends | > 35% |
| Newsletter click rate | Unique clicks / sends | > 8% |

### Decision Rules

Analytics data informs decisions; it does not make decisions. The rules:

1. A single data point is not a trend. A decision requires at least 4 weeks of data.
2. Open rate is an unreliable signal due to email client image blocking. Click rate is the primary engagement signal.
3. A page's organic ranking is not sufficient evidence that the page serves users well. User satisfaction signals (time on page, return visits, email subscription from that page) are better evidence.
4. If affiliate revenue is growing but editorial quality is declining, editorial quality takes precedence. Revenue can recover; trust, once lost, does not.

---

## 9. Long-Term Company Moat

ToolKno's defensible competitive advantages, in order of compounding rate:

**1. The verified testing library.** Every published review represents testing time that cannot be faked or bought. A competitor can copy the format but cannot copy three weeks of hands-on product testing across fifty tools.

**2. The subscriber relationship.** A newsletter subscriber who has received ten honest recommendations and found them trustworthy will open the eleventh. This trust cannot be purchased. It accumulates through consistent performance over time.

**3. The editorial methodology.** A publicly documented, version-controlled methodology creates accountability that most competitors avoid. This transparency is a moat because it makes every ToolKno recommendation independently verifiable.

**4. The tool usage signal.** Organic tool traffic is a proprietary indicator of what problems ToolKno's audience is actively trying to solve. This signal — derived from actual tool usage, not keyword research — informs editorial direction in a way competitors cannot replicate.

**5. The trust brand.** Trust takes years to build and is destroyed in a single ethical lapse. A ToolKno that has maintained editorial independence for five years has an asset worth protecting that a new competitor cannot acquire regardless of budget.

---

## Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Initial Operating System established | Founder |
