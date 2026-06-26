---
title: Engineering Code Standards
version: 1.0.0
status: approved
owner: Founder
last_updated: 2026-06-26
related_documents:
  - ../operating-system/toolkno-os.md
  - ../architecture/tech-stack.md
  - ../architecture/gap-analysis.md
---

# Engineering Code Standards

Operational engineering standards for the ToolKno codebase. These rules apply to all code changes regardless of their scope.

---

## 1. File and Folder Organization

```
toolkno/
├── app/                        — Next.js App Router pages and API routes
│   ├── api/                    — API routes
│   │   ├── auth/               — NextAuth routes
│   │   ├── newsletter/         — Newsletter system routes
│   │   ├── payment/            — Payment routes
│   │   └── user/               — User routes
│   ├── tools/                  — Tool pages
│   ├── reviews/                — Editorial review pages (PRD-003)
│   ├── compare/                — Comparison pages (PRD-004)
│   ├── guides/                 — Buying guide pages (PRD-005)
│   ├── newsletter/             — Newsletter pages (confirm, unsubscribe, etc.)
│   ├── admin/                  — Admin area (protected by middleware)
│   └── (other static pages)/
├── components/
│   ├── home/                   — Homepage-specific components
│   ├── layout/                 — Global layout components (Navbar, Footer, AdUnit)
│   ├── tools/                  — Tool page components (ToolCard, Breadcrumbs, ToolInfoSections)
│   ├── newsletter/             — Newsletter-related components (SignupForm, etc.)
│   └── ui/                     — Generic, reusable UI primitives
├── lib/
│   ├── tools.js                — Tool registry (to be refactored; see gap-analysis.md Gap A1)
│   ├── metadata.js             — buildMetadata() function
│   ├── site.js                 — siteConfig
│   ├── newsletter/             — Newsletter service functions (added by PRD-002)
│   └── email/                  — Email send utility
├── prisma/
│   └── schema.prisma           — Database schema (source of truth)
├── public/                     — Static assets
├── docs/                       — Documentation (this folder)
└── scripts/                    — Build-time and maintenance scripts
```

---

## 2. Code Style Rules

### JavaScript / React

- **No TypeScript currently.** If TypeScript is adopted, it must be adopted across the entire project at once, not file-by-file. A mix of `.js` and `.ts` files is not permitted.
- Use `const` for variables that are not reassigned. Use `let` only when reassignment is necessary. `var` is not permitted.
- Arrow functions for React components and callbacks. Use function declarations only for named exports that benefit from hoisting.
- No inline styles. All styling is via Tailwind utility classes.
- Destructure props at the function signature. `function Component({ title, description })` not `function Component(props)`.

### Component Rules

- One component per file. File name = component name in PascalCase.
- If a component can be described in one sentence and does one thing, it is the right size.
- If a component manages state, makes API calls, AND renders complex layout, it is three components.
- Default exports for components. Named exports for utilities and constants.
- Components in `components/` are generic. Components in `app/` are page-specific.

### API Route Rules

- Every API route exports exactly: `export async function GET(request)` or `export async function POST(request)` etc.
- Route handler structure:
  ```
  1. Authenticate/authorize (middleware or early return)
  2. Validate input
  3. Call a service function in lib/
  4. Return response
  ```
- No business logic in route handlers. Business logic lives in `lib/` functions.
- All responses use consistent shapes:
  - Success: `{ success: true, ...data }` or the resource directly
  - Error: `{ error: { code: string, message: string } }`
- HTTP status codes are semantically correct (see PRD-002 for the standard set).

### Database Access

- All database access via Prisma client. No raw SQL queries in application code.
- The Prisma client is instantiated once and shared: `lib/prisma.js`.
- In development, use the global pattern to prevent client exhaustion during hot reload.
- All Prisma queries use `try/catch` and return structured errors.

---

## 3. Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| React components | PascalCase | `NewsletterSignupForm` |
| Files (components) | PascalCase | `NewsletterSignupForm.js` |
| Files (utilities, routes) | kebab-case | `subscribe.js`, `confirm.js` |
| Variables, functions | camelCase | `subscriberToken`, `sendConfirmationEmail()` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_RETRY_ATTEMPTS` |
| Prisma models | PascalCase | `Subscriber`, `NewsletterIssue` |
| Prisma fields | camelCase | `emailNormalized`, `confirmedAt` |
| URL slugs | lowercase-hyphenated | `/newsletter/confirm` |
| Environment variables | UPPER_SNAKE_CASE | `RESEND_WEBHOOK_SECRET` |

---

## 4. Security Standards

**Never do this:**
- Log `process.env` values containing secrets
- Return environment variable values in API responses
- Use `eval()` or `Function()` with user-provided strings
- Render user-provided HTML without sanitization
- Use `Math.random()` for tokens, IDs, or anything security-sensitive
- Build SQL queries with string concatenation (use Prisma parameterization)
- Add API keys to any client-side code (`NEXT_PUBLIC_*` variables are visible to all users)
- Commit `.env` files (`.env.local` must be in `.gitignore`)

**Always do this:**
- Use `crypto.randomBytes(n)` for any token generation
- Verify webhook signatures before processing webhook payloads
- Apply rate limiting before any database operations on public endpoints
- Hash IP addresses before storage: `crypto.createHash('sha256').update(ip).digest('hex')`
- Validate and sanitize all input at system boundaries (API routes, webhook handlers)
- Check authorization in middleware, not inside route handlers

---

## 5. Performance Standards

| Metric | Threshold | How to verify |
|---|---|---|
| LCP | < 2.5s | Lighthouse or PageSpeed Insights |
| CLS | < 0.1 | Lighthouse or PageSpeed Insights |
| INP | < 200ms | Chrome DevTools Performance tab |
| JS bundle (per page) | < 150KB parsed | Next.js Bundle Analyzer |
| Static generation | All pages that can be static, are static | `next build` output — verify no unexpected dynamic pages |

A deployment that causes any of these to regress below threshold is reverted before it is considered complete.

---

## 6. Git Workflow

**Branch naming:**
- `feat/[short-description]` — new feature
- `fix/[short-description]` — bug fix
- `chore/[short-description]` — maintenance, dependency updates
- `docs/[short-description]` — documentation changes

**Commit message format (Conventional Commits):**
```
feat: add newsletter subscribe API endpoint
fix: correct confirmation token expiry calculation
chore: update Prisma client to 5.14.0
docs: add PRD-003 Reviews to backlog
refactor: split lib/tools.js into separate modules
```

**Rules:**
- One logical change per commit. Do not bundle unrelated changes.
- Never commit directly to `main` except for emergency hotfixes (documented in `docs/decisions/`).
- Never skip pre-commit hooks (`--no-verify`). If a hook fails, fix the underlying issue.
- Never force-push to `main`.

---

## 7. Definition of Done

A feature is complete when ALL of the following are true:

| Criterion | Verified by |
|---|---|
| PRD acceptance criteria are all met | Manual verification against the PRD |
| Core Web Vitals pass on affected pages | Lighthouse audit |
| axe-core reports zero critical/serious violations on affected pages | axe-core in browser or CI |
| Rate limiting applied to any new public API endpoints | Manual test (6th request within window returns 429) |
| New environment variables documented in `.env.example` | File inspection |
| Sitemap updated for any new public pages | Manual check |
| PRD status updated to `implemented` | Update the PRD file |

---

## 8. Code Review Checklist

Before approving any code change (including self-review):

- [ ] Does the code match what the PRD specifies?
- [ ] Are there any SQL/Prisma queries with unparameterized user input?
- [ ] Are API responses following the standard shape (`{ success, ... }` or `{ error: { code, message } }`)?
- [ ] Are environment variable secrets accessed only server-side?
- [ ] Is rate limiting applied to any new public endpoints?
- [ ] Does any new component have multiple unrelated responsibilities?
- [ ] Are there any console.log statements that should not be in production?
- [ ] Does the change affect Core Web Vitals? (Any new client-side JS, new image, new font)
- [ ] Are new routes added to the sitemap?
- [ ] Are tests or verification steps documented if the change is complex?

---

## 9. Documentation Requirements

Code comments are used sparingly and only when the WHY is non-obvious. The WHAT is communicated by code and naming.

Acceptable comment:
```js
// Resend API has a 100-email batch limit — split larger lists
const batches = chunk(recipients, 100);
```

Not acceptable:
```js
// This function sends an email
async function sendConfirmationEmail(subscriber) {
```

When a comment references a specific bug, incident, or external constraint that may not be obvious from the codebase, it should link to the relevant documentation or issue.

New API endpoints are documented in their relevant PRD (the PRD is the API documentation). No separate API documentation file is maintained — the PRDs serve this purpose.

---

## Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Initial code standards established | Founder |
