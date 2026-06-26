---
title: "ADR-001: Niche Selection — Creator Economy Tools via Writing & Content Entry"
version: 1.0.0
status: approved
owner: Founder
last_updated: 2026-06-26
related_documents:
  - ../vision/niche-analysis.md
  - ../vision/mission-and-vision.md
  - ../roadmap/master-execution-plan.md
---

# ADR-001: Niche Selection

## Status

Approved — 2026-06-26

## Context

ToolKno needed to select a primary software niche for its editorial content strategy. The initial assumption was "Writing & Content Software." This ADR documents the process of challenging that assumption and the resulting decision.

## Decision

**Long-term target niche:** Creator Economy Tools
**Entry niche (Months 1–6):** Writing & Content Software
**Second-stage expansion (Months 6–18):** Full Creator Economy Tools
**Third stage (Year 2+):** SEO Software

## Rationale

14 software niches were evaluated using a weighted decision matrix with 7 criteria. The full matrix is documented in `docs/vision/niche-analysis.md`.

Creator Economy Tools scored highest (8.40/10) due to:
1. **Affiliate economics:** Beehiiv (50% first year), Kajabi (30% lifetime), ConvertKit (30% recurring). These are the highest per-subscriber commission rates available in any B2C software category.
2. **Newsletter fit:** A newsletter about creator tools is read by the exact audience that buys creator tools. The newsletter is simultaneously the product and the distribution channel.
3. **First-mover position:** No credible, independent, editorially rigorous creator tool review publication exists at scale. This position is available.
4. **Market growth:** Creator economy tooling is the fastest-growing B2C software category in 2024–2026.

Writing & Content Software scored second (8.10/10) and was selected as the entry niche because:
1. It has the fastest time to authority (the free tool audience is already writing-focused)
2. It has the highest SEO opportunity of the top-3 niches
3. It overlaps with Creator Economy — writing tool users are a subset of the creator audience
4. Building credibility in writing tools provides a natural bridge to creator tool authority

## Alternatives Considered

**Option A: Enter Creator Economy Tools directly.**
Rejected. The creator economy audience requires the reviewer to have established creator credibility. Without an existing audience or publication history, early creator tool reviews would lack authority. The Writing & Content entry niche builds this credibility first.

**Option B: SEO Software as the primary niche.**
Rejected for Year 1. The SEO software category has excellent affiliate economics (Semrush: $200/conversion) but requires technical SEO expertise that takes time to establish credibility in. The audience skepticism is high. This is the right niche for Year 2, not Year 1.

**Option C: Stay with Writing & Content Software as the permanent niche.**
Rejected. The affiliate economics are capped compared to Creator Economy. A Grammarly commission ($12–$30/month × 20% = $2.40–$6/conversion) is substantially less than a Kajabi commission ($149–$399/month × 30% = $44.70–$119.70/conversion). As the audience grows, the ceiling of the Writing niche is lower than the Creator Economy niche.

## Consequences

- **Positive:** The entry strategy (Writing & Content) aligns perfectly with the existing free tool audience — word count tools, text tools, readability tools.
- **Positive:** The authority built in Writing & Content transfers directly to Creator Economy (writers are creators).
- **Positive:** The sequential expansion reduces the risk of authority dilution from covering too many niches simultaneously.
- **Negative:** It takes 6–12 months longer to reach the highest-revenue niche than an immediate jump.
- **Negative:** The Writing & Content niche has several well-established competitors (The Write Life, Reedsy, various marketing blogs). ToolKno must differentiate through testing rigor, not through coverage.

## Review Criteria

This decision should be revisited if:
1. The Writing & Content affiliate revenue significantly underperforms projections at Month 6 (< $150/month)
2. A credible independent creator tool review publication emerges and captures the first-mover position

---

## Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | ADR established | Founder |
| 1.0.1 | 2026-06-26 | Updated Writing & Content score to 8.10 (corrected from 7.70 — arithmetic error in niche analysis) | QA Review |
