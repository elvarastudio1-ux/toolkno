---
title: PRD Backlog — All Planned Product Requirements Documents
version: 1.0.0
status: active
owner: Founder
last_updated: 2026-06-26
related_documents:
  - PRD-001-homepage.md
  - PRD-002-newsletter.md
  - ../roadmap/master-execution-plan.md
  - ../architecture/gap-analysis.md
---

# PRD Backlog

Complete list of all planned PRDs for ToolKno. PRDs are written one at a time, approved before the next is written, and implemented only after approval. This list reflects the intended order but is subject to revision as each PRD reveals new dependencies.

---

## Approved PRDs

| ID | Title | Status | Version | Approved |
|---|---|---|---|---|
| PRD-001 | Homepage | Approved | 1.0.0 | 2026-06-26 |
| PRD-002 | Newsletter System | Approved | 1.0.0 | 2026-06-26 |

---

## Queued PRDs (in priority order)

| ID | Title | Status | Priority | Depends On | Notes |
|---|---|---|---|---|---|
| PRD-003 | Reviews | Not started | P1 | PRD-002 (newsletter infra for distribution) | Defines: review content model, review page template, ToolKno Score foundation, review admin CMS |
| PRD-004 | Comparison Engine | Not started | P1 | PRD-003 (needs review data model) | Defines: comparison page `/compare/[a]-vs-[b]/`, comparison template, comparison admin |
| PRD-005 | Buying Guides | Not started | P1 | PRD-003, PRD-004 | Defines: guide page template, guide content model, internal linking to reviews/comparisons |
| PRD-006 | Software Database | Not started | P2 | PRD-003 | Defines: `SoftwareProduct` model, `PriceSnapshot` model, software entry page at `/software/[slug]/` |
| PRD-007 | ToolKno Score | Not started | P2 | PRD-003, PRD-006 | Defines: the scoring algorithm, score display, score methodology, score update policy |
| PRD-008 | Search | Not started | P2 | PRD-003, PRD-004, PRD-006 | Defines: site-wide search across tools, reviews, comparisons, guides, software database |
| PRD-009 | User Accounts | Not started | P2 | PRD-002 (User.role added) | Defines: authenticated user features, saved tools, review bookmarks, premium access |
| PRD-010 | Saved Comparisons | Not started | P3 | PRD-004, PRD-009 | Defines: save and share comparison pages, user-created comparisons |
| PRD-011 | Affiliate Registry | Not started | P1 | None (standalone internal tool) | Defines: affiliate relationship tracking, commission rate registry, editorial/revenue conflict monitoring |
| PRD-012 | Methodology Page | Not started | P0 (pre-first-review) | None | Defines: `/methodology` page content and structure — must exist before first review is published |
| PRD-013 | Author Profiles | Not started | P3 | PRD-003 | Defines: author pages at `/authors/[slug]/`, author bio, byline display on editorial content |
| PRD-014 | Category Pages | Not started | P2 | PRD-003, PRD-004 | Defines: editorial category pages that list reviews + comparisons for a software category (distinct from tool category pages) |
| PRD-015 | Dashboard | Not started | P3 | PRD-009 | Defines: authenticated user dashboard — subscription status, saved items, reading history |
| PRD-016 | Admin CMS | Not started | P2 | PRD-003, PRD-004, PRD-005 | Defines: unified admin content management for reviews, comparisons, guides; extends newsletter admin from PRD-002 |

---

## PRD Process

1. The founder approves the priority order of the next PRD to be written.
2. The PRD is written in full, following the format established in PRD-001 and PRD-002.
3. The founder reviews and approves the PRD. Approval is recorded in the PRD's Change History.
4. Implementation begins only after approval.
5. When implementation is complete and acceptance criteria are verified, the PRD status is updated to `implemented`.
6. If implementation reveals a discrepancy from the PRD, the PRD is updated to reflect what was built (the PRD follows reality, not the other way around, after implementation is complete).

---

## Notes on Sequencing

**PRD-012 (Methodology Page)** has P0 priority despite being low complexity because the methodology page must exist before the first review is published. This is a Constitution Rule 12 requirement — every editorial claim must be traceable to a published methodology. Writing the methodology PRD and implementing the page takes ≤ 1 day; it should be done immediately before PRD-003 implementation begins.

**PRD-011 (Affiliate Registry)** is P1 because the affiliate relationships need to be tracked before the first affiliate link appears in any review. It is an internal tool (a simple admin view and data model) but it gates Constitution Rule 4 compliance monitoring.

**PRD-009 (User Accounts)** does not need to be implemented before editorial content is published. Editorial content is publicly accessible without authentication. User accounts add saved items, bookmarks, and premium access — none of which are prerequisites for launching the first review.

---

## Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Initial backlog established with PRDs 001–016 | Founder |
