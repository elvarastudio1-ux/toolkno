---
title: The ToolKno Constitution
version: 1.0.0
status: approved
owner: Founder
last_updated: 2026-06-26
related_documents:
  - ../operating-system/toolkno-os.md
  - ../vision/mission-and-vision.md
  - ../editorial/editorial-standards.md
---

# The ToolKno Constitution

These are the 15 non-negotiable rules of ToolKno. They cannot be overridden by a business case, a revenue target, a sponsor, a deadline, or a growth metric. Any decision that would require violating a constitutional rule is the wrong decision.

A constitutional rule may only change via a documented decision record in `docs/decisions/` with explicit justification and a major version bump to this document. Minor iterations are not constitutional changes.

---

## Rule 1: Never recommend a tool you have not tested.

A recommendation without testing is an ad. ToolKno publishes editorial content. The minimum testing period for any reviewed product is three weeks of active use. No exceptions for sponsored content, affiliate commission rate, or editorial schedule pressure.

## Rule 2: Disclose every affiliate relationship at the point of recommendation.

Affiliate disclosure appears inline, adjacent to the affiliate link, every time. Not in a footer. Not in a generic "disclosure policy" page linked from the nav. At the exact moment the reader might click a link that earns ToolKno money, they know it earns ToolKno money. Format: `(affiliate link — ToolKno earns a commission if you purchase through this link)`.

## Rule 3: Never link navigation to content that does not exist.

If a nav item, hero CTA, or internal link points to a URL that returns a 404 or renders empty content, it is removed immediately. Navigation is a promise. Breaking it destroys trust faster than any SEO signal can rebuild it.

## Rule 4: If editorial verdict and affiliate income conflict, publish the editorial verdict.

If testing reveals that a high-commission product is mediocre or inferior to a no-commission alternative, the editorial verdict reflects that finding and recommends the better product. The affiliate income from the high-commission product is zero. The trust from an honest recommendation is compounding.

## Rule 5: No user text or data leaves the device in any free tool.

Every free text tool processes content client-side. Nothing is uploaded, transmitted, logged, or cached on ToolKno servers. If a new tool cannot be built client-side without transmitting user content, it is either not built, or it is clearly labelled as a server-processed tool with explicit disclosure of what is transmitted and why.

## Rule 6: No dark patterns in the product or newsletter.

ToolKno will not use countdown timers with fake urgency, pre-checked consent boxes, hidden unsubscribe flows, guilt-trip copy on opt-outs ("No thanks, I don't want to save money"), fake scarcity, or misleading free trial terms. These patterns produce short-term conversion lifts and permanent trust destruction.

## Rule 7: Unsubscribe in one click, no confirmation, no reason required.

A subscriber who wants to leave leaves immediately when they click the unsubscribe link. No confirmation page. No reason dropdown. No "are you sure?" No email asking why they left. A clean list of people who genuinely want the newsletter is worth more than a padded list of people who couldn't find the unsubscribe button.

## Rule 8: Never change a published editorial verdict without documentation.

If a published review changes its recommendation — because the product has improved, degraded, or been acquired — the change is documented explicitly in the article with: the original verdict, the new verdict, the date of change, and the reason. The original publication date is preserved. Readers who bookmarked the old verdict deserve to know it changed.

## Rule 9: The newsletter is editorial content, not a digest or marketing channel.

Every newsletter issue contains original editorial content — a position, a finding, an analysis — that could not be obtained by reading the ToolKno website. It is not a list of links published elsewhere. It is not a product announcement. It is not a forwarded press release. If there is nothing genuinely original to say in a given period, the issue does not go out.

## Rule 10: Every engineering decision prioritizes user privacy over implementation convenience.

When there is a choice between a simpler implementation that collects more data and a more complex implementation that collects less, choose the privacy-preserving implementation. IP addresses are hashed before storage. Email addresses are not sold, rented, or shared beyond the email service provider. Session data is not used for ad targeting.

## Rule 11: Core Web Vitals are a deployment gate, not an aspiration.

No production deployment ships with LCP > 2.5s, CLS > 0.1, or INP > 200ms on a representative page under normal conditions. These are hard gates in the definition of done, not performance targets to be tracked on a dashboard and optimized "later."

## Rule 12: Every claim in an editorial article is verifiable against the published methodology.

The methodology page at `/methodology` describes exactly how ToolKno tests software: what criteria are evaluated, how they are weighted, what time period constitutes a valid test, and how conflicts of interest are identified and handled. Every editorial claim must be traceable to a methodology criterion. If the methodology does not cover the claim, either add it to the methodology or remove the claim.

## Rule 13: No feature is built without a PRD in approved status.

Before implementation begins on any product feature, the PRD for that feature must be in `approved` status in `docs/prd/`. This rule exists to prevent building the wrong thing quickly. The cost of a PRD is one or two days of writing. The cost of building the wrong feature is weeks of implementation plus the opportunity cost of what was not built instead.

## Rule 14: External dependencies must have documented migration paths.

Every third-party service ToolKno uses — Resend, Neon, Vercel, Razorpay, Google AdSense, Google Analytics — has a documented exit strategy in `docs/architecture/`. The documentation describes: what data would need to be migrated, what the alternative service options are, and what the estimated migration effort is. This prevents vendor lock-in from being discovered at the worst possible moment.

## Rule 15: Revenue decisions are made after editorial decisions, not instead of them.

The editorial plan determines what content ToolKno publishes. The revenue strategy determines how to monetize content that is already editorially justified. The sequence is always: is this content true, useful, and consistent with ToolKno standards → then, does it have revenue potential? The sequence is never: does this content have revenue potential → then, can we justify publishing it?

---

## Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Initial constitution established | Founder |
