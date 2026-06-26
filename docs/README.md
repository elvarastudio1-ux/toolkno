---
title: ToolKno Documentation System
version: 1.0.0
status: active
owner: Founder
last_updated: 2026-06-26
related_documents:
  - INDEX.md
  - constitution/toolkno-constitution.md
  - operating-system/toolkno-os.md
---

# ToolKno Documentation

This directory is the single source of truth for every decision, standard, and requirement in the ToolKno product. It exists so that any future developer, contributor, or AI agent can understand exactly what ToolKno is, why it exists, what has been decided, and how things should be built.

## Purpose

The documentation system exists to solve three problems:

1. **Decision drift.** Without a written record, earlier decisions get revisited, overturned by habit, or forgotten. Every significant decision in this project is documented with its rationale so it cannot be re-litigated without explicitly acknowledging the original reasoning.

2. **Contributor ramp-up.** A new developer or AI agent working on this codebase should be able to read the PRD for a feature and implement it without asking clarifying questions. Every PRD is written to be self-contained and unambiguous.

3. **Product coherence.** The product vision, editorial standards, engineering standards, and design principles live in one place. When these things are scattered across Notion pages, Slack threads, and mental models, the product becomes incoherent over time.

## How to Use This Documentation

### Before building any feature
Read the relevant PRD in `docs/prd/`. If a PRD does not exist for the feature you are building, stop and write one. Do not start implementation without a PRD in at least `draft` status.

### Before making any editorial decision
Read `docs/editorial/editorial-standards.md` and `docs/constitution/toolkno-constitution.md`. Every editorial decision must be consistent with these two documents.

### Before changing any architectural decision
Document it as an Architecture Decision Record in `docs/decisions/`. Use the ADR format. State what was decided, why, what alternatives were considered, and what the consequences are.

### When a document becomes outdated
Update it immediately. Outdated documentation is worse than no documentation — it actively misleads. Every document has a `last_updated` field and a Change History section. Use them.

## Document Status Values

| Status | Meaning |
|---|---|
| `draft` | Being written. Not ready for use. |
| `review` | Complete, awaiting approval. |
| `approved` | Approved and authoritative. Use this to make decisions. |
| `active` | Operational document. Updated as the project evolves. |
| `superseded` | Replaced by a newer document. Link to the replacement. |
| `deprecated` | No longer applies. Kept for historical record only. |

## Documentation Rules

1. **No placeholder content.** Every section contains real, actionable content. If you cannot write the content yet, do not create the section.
2. **No duplication.** If the same decision appears in two documents, one must reference the other. Delete the duplicate.
3. **Every decision has a rationale.** Stating what was decided without stating why makes the document useless when circumstances change.
4. **Every PRD follows the standard format.** See `docs/prd/PRD-001-homepage.md` as the canonical example.
5. **Update documents when implementation diverges.** If the built product differs from the PRD, update the PRD to reflect reality, not the other way around.
6. **Cross-reference, do not copy.** Use `See: [document]` rather than repeating content from another document.

## Versioning Rules

- **Minor version bump (1.0 → 1.1):** Additive changes, clarifications, corrections.
- **Major version bump (1.0 → 2.0):** A fundamental decision changes. Requires explicit approval from the founder and a note in Change History explaining why.
- PRDs are versioned independently. PRD-001 v1.0 → v1.1 for refinements; v1.0 → v2.0 for scope changes.
- The ToolKno Constitution does not have minor versions. Any change to a constitutional rule is a major change requiring explicit decision documentation in `docs/decisions/`.

## Folder Structure

```
docs/
├── README.md                    — this file
├── INDEX.md                     — complete navigation tree
├── constitution/                — non-negotiable operating rules
├── operating-system/            — permanent company handbook
├── vision/                      — mission, niche, market analysis
├── architecture/                — technical decisions and stack
├── audits/                      — past audits and inventories
├── roadmap/                     — execution plans and timelines
├── prd/                         — product requirement documents
├── editorial/                   — content and editorial standards
├── engineering/                 — code, deployment, git standards
├── design/                      — visual and UX principles
├── growth/                      — SEO, newsletter, distribution
├── decisions/                   — architecture decision records
└── assets/                      — shared diagrams, images, exports
```

---

## Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Documentation system established | Founder |
| 1.0.1 | 2026-06-26 | Added Change History section for consistency with all other documents | QA Review |

*This documentation system was established 2026-06-26. The ToolKno Constitution and Operating System predate this system and are canonical from their original creation date.*
