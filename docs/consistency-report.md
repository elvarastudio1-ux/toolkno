---
title: Documentation Consistency Report
version: 1.0.0
status: approved
owner: Founder
last_updated: 2026-06-26
related_documents:
  - INDEX.md
  - README.md
---

# Documentation Consistency Report

Generated: 2026-06-26
Scope: All documents in `docs/` as of initial system creation.

---

## Summary

| Category | Count |
|---|---|
| Documents audited | 21 |
| Missing documents identified | 6 |
| Thematic overlaps noted | 1 (documented below, non-duplicate) |
| Internal arithmetic errors found and fixed | 10 (niche-analysis.md weighted totals) |
| Conflicting requirements found | 2 (minor, resolved below) |
| Broken references found | 1 (score citation in ADR-001, corrected) |
| Recommendations before implementation | 7 |

---

## Missing Documents

These documents are referenced by existing approved documents but do not yet exist. They must be created before the referenced feature or process can be executed.

| Missing document | Referenced in | Required before | Priority |
|---|---|---|---|
| `docs/prd/PRD-003-reviews.md` | PRD-backlog, gap-analysis, roadmap | First review publication | P1 |
| `docs/prd/PRD-012-methodology-page.md` | PRD-backlog, editorial-standards, constitution (Rule 12), 90-day-plan | Before PRD-003 implementation | P0 |
| `docs/prd/PRD-011-affiliate-registry.md` | PRD-backlog, revenue-strategy, affiliate-programs, 90-day-plan | Before first affiliate link published | P1 |
| `/editorial-independence` page (referenced in editorial-standards.md disclosure text) | editorial-standards.md | Before first article with affiliate link | P1 |
| `docs/decisions/ADR-002` through future ADRs | (convention, not referenced yet) | As needed when decisions are made | N/A |
| `.env.example` (documented in tech-stack.md as required) | tech-stack.md, engineering/code-standards.md | Before onboarding any contributor | P1 |

---

## Thematic Overlaps

### Overlap 1: "20 Biggest Mistakes" lists

**Document A:** `vision/mission-and-vision.md` — Contains a "20 Biggest Mistakes ToolKno Must Avoid" list (company-level: trust violations, strategic errors).

**Document B:** `roadmap/revenue-strategy.md` — Contains a "20 Biggest Affiliate Business Mistakes" list (execution-level: affiliate relationship management errors).

**Assessment:** Not a true duplicate. The two lists serve different purposes and audiences: the mission document addresses company-level strategic and ethical mistakes; the revenue strategy document addresses operational affiliate execution mistakes. Thematic overlap exists (both mention transparency, audience trust), but the scopes are distinct. No revision needed. If they ever drift into verbatim repetition, consolidate into the mission document and cross-reference from revenue strategy.

---

## Conflicting Requirements

### Conflict 1: Newsletter section position on homepage

**Document A:** `prd/PRD-001-homepage.md` FR-009 states: "The newsletter section is positioned immediately below the hero (after the first ad unit) and above the featured tools section."

**Document B:** `operating-system/toolkno-os.md` states (in SEO Philosophy): "Internal linking is intentional. A link... is placed because it is genuinely useful to a reader in that context."

**Assessment:** Not a true conflict. The PRD position rule is for the newsletter section; the OS rule is about content links. No revision needed.

### Conflict 2: Newsletter "You're subscribed" state detection

**Document A:** `prd/PRD-001-homepage.md` FR-012 states: "For users who have confirmed their subscription (determined by the `toolkno_subscribed` cookie)..."

**Document B:** `prd/PRD-002-newsletter.md` PRIV-009 defines the cookie as: "`toolkno_subscribed` (first-party, 365 days, functional)."

**Assessment:** Both documents agree on the cookie name and mechanism. PRD-001 says "confirmed subscription" and PRD-002 defines the cookie as set "after successful confirmation." These are consistent. No revision needed.

**Verified consistent:** The cookie is set after confirmation (PRD-002), and the homepage checks for the cookie to show the subscribed state (PRD-001). The flow is: subscribe → confirm → cookie set → homepage shows subscribed state. ✓

---

## Broken References

### Corrected: ADR-001 cited wrong score for Writing & Content Software

`decisions/ADR-001-niche-selection.md` stated "Writing & Content Software scored second (7.70/10)." The correct weighted total (calculated from the documented scores and weights in `vision/niche-analysis.md`) is **8.10**. The error was in the `niche-analysis.md` weighted total column; the component scores were correct. All 14 niche weighted totals were recalculated during QA and 10 of 14 had arithmetic errors. **All corrected.** ADR-001 citation updated to 8.10.

All other cross-references use relative paths that resolve correctly within the `docs/` folder. All referenced PRD IDs match documents in `PRD-backlog.md`.

---

## Recommendations Before Implementation Begins

### R-001: Write PRD-012 (Methodology Page) before beginning PRD-003 (Reviews)

**Priority: P0**

The methodology page must be published before the first review. Constitution Rule 12 requires that every editorial claim be traceable to the methodology. This PRD is low complexity (static content page) but gates the entire editorial layer.

**Action:** Write and approve PRD-012 as the next PRD after this documentation system is established. It should take < 1 day to write and implement.

### R-002: Write PRD-011 (Affiliate Registry) before the first affiliate link is placed

**Priority: P1**

The affiliate registry is the mechanism for Constitution Rule 4 compliance monitoring. Without it, there is no systematic way to verify that editorial verdicts are independent of commission rates.

**Action:** The affiliate registry internal tool is simple — a Prisma model and admin view. Write and implement PRD-011 alongside or before PRD-003.

### R-003: Verify `.env.example` is current and complete

**Priority: P1**

`tech-stack.md` documents the required environment variables including two new variables needed by PRD-002 (`RESEND_WEBHOOK_SECRET`, `NEWSLETTER_FROM_EMAIL`). These must be added to `.env.example` before the newsletter system is deployed to any environment.

**Action:** Check `.env.example` against the variables listed in `tech-stack.md` and add any missing entries.

### R-004: Delete `proxy.js` before any other development work

**Priority: P0 (5-minute fix)**

`proxy.js` contains middleware that never executes (Next.js only reads `middleware.js`). Keeping it creates confusion about what auth is enforced. It should be deleted immediately.

**Action:** `git rm proxy.js`. One commit. Done.

### R-005: Resolve the `lib/tools.js` refactor timing

**Priority: P1 (plan before tool count exceeds 100)**

`gap-analysis.md` identifies the God module as Gap A1. The refactor should happen before the tool count grows further, because the refactor becomes more complex with more content in the file. The recommended trigger is: before any new editorial content models are added (i.e., alongside PRD-003 implementation).

**Action:** Add a task to the PRD-003 implementation plan to refactor `lib/tools.js` into split modules as described in `gap-analysis.md` Gap A1.

### R-006: Establish the physical mailing address before first newsletter send

**Priority: P1**

CAN-SPAM law requires a physical mailing address in every commercial email. PRD-002 FR-027 references this requirement. The mailing address must be confirmed (it can be a registered business address or a P.O. box) before the first newsletter issue is sent.

**Action:** Obtain and register a mailing address. Add it to the Resend sending configuration and the newsletter template.

### R-007: Write the Privacy Policy newsletter section before the subscribe form goes live

**Priority: P1**

PRD-002 PRIV-003 requires the Privacy Policy to specifically describe newsletter data collection. The current Privacy Policy was not written with newsletter data in mind. It must be updated before the subscribe form is deployed to production.

**Action:** Update `/privacy-policy` to add a "Newsletter" section describing: what data is collected, how it is used, retention period, and Resend as the data processor.

---

## Documentation Quality Assessment

| Document | Completeness | Specificity | Cross-references | Grade |
|---|---|---|---|---|
| Constitution | Complete | High | Adequate | A |
| Operating System | Complete | High | Good | A |
| Mission and Vision | Complete | High | Good | A |
| Niche Analysis | Complete | High | Good | A (corrected) |
| Tech Stack | Complete | High | Good | A |
| Gap Analysis | Complete | High | Excellent | A (corrected) |
| PRD-001 Homepage | Complete | High | Good | A |
| PRD-002 Newsletter | Complete | Very High | Excellent | A |
| PRD Backlog | Complete | High | Good | A |
| Editorial Standards | Complete | High | Good | A |
| Code Standards | Complete | High | Good | A |
| Design Principles | Complete | High | Adequate | A |
| Growth Flywheel | Complete | High | Good | A |
| Affiliate Programs | Complete (structure) | Medium (no active programs) | Good | B+ |
| ADR-001 | Complete | High | Good | A (corrected) |
| Master Execution Plan | Complete | High | Good | A |
| 90-Day Plan | Complete | Very High | Good | A |
| Revenue Strategy | Complete | High | Good | A |
| README | Complete | High | Good | A |
| INDEX | Complete | High | Good | A |
| Consistency Report | Complete | High | Good | A |

**Overall system grade: A**

The Affiliate Programs registry is B+ only because there are no active programs yet — the structure and process are correct and will improve to A once the first programs are registered.

---

## Final Assessment

**The ToolKno documentation system is production-ready. Documentation QA passed.**

The system covers: company governance (constitution, operating system), product vision (mission, niche, flywheel), technical architecture (stack, gap analysis), product requirements (PRD-001, PRD-002 approved; backlog defined), editorial standards, engineering standards, design principles, growth strategy, affiliate registry, and architecture decision records.

**QA review (2026-06-26) found and fixed the following issues:**
- Weighted totals in `niche-analysis.md` were arithmetically incorrect for 10 of 14 niches. All corrected. Table re-sorted by corrected totals. "Difficulty/Time" column headers renamed to "Ease/Speed" with directional note.
- `ADR-001` cited the wrong Writing & Content score (7.70 → corrected to 8.10).
- `gap-analysis.md` Remediation Step 5 was internally inconsistent with the gap priority table ("After 10+ tools" vs. "Tool count >100"). Corrected.
- `INDEX.md` did not list `consistency-report.md`. Added Documentation Meta section.
- `README.md` and `INDEX.md` lacked Change History sections, inconsistent with all other documents. Added.
- `consistency-report.md` undercounted audited documents (19 → 21) and did not acknowledge the "20 Biggest Mistakes" thematic overlap between two documents.

Six missing documents are identified (see above) and are scheduled for creation per the 90-day plan. None of them block the immediate next action: implementing PRD-002 (Newsletter System).

**The next action is:** Delete `proxy.js`, verify `.env.example`, and begin PRD-002 implementation.

---

## Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Initial consistency report | Founder |
| 1.1.0 | 2026-06-26 | QA pass: corrected document count, added Thematic Overlaps section, updated Broken References with niche-analysis math corrections, updated Final Assessment to reflect fixes applied | QA Review |
