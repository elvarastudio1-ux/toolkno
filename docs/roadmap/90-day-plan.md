---
title: 90-Day Execution Plan
version: 1.0.0
status: approved
owner: Founder
last_updated: 2026-06-26
related_documents:
  - master-execution-plan.md
  - revenue-strategy.md
  - ../prd/PRD-backlog.md
---

# 90-Day Execution Plan

**Assumption:** One founder, 15–20 hours/week available for content. Product development continues in parallel. Goal: earn first affiliate commissions while building a long-term trust-first business.

**Format per week:** Product / Development / Content / SEO / Newsletter / Affiliate / Distribution / KPIs / Gate criteria.

---

## Week 1 (Days 1–7): Infrastructure Sprint

**Product:** Finalize PRD-002 (Newsletter System) requirements. Identify all environment variables needed. Spec the Prisma schema additions.

**Development:** Add `User.role` to Prisma schema. Create the 6 new newsletter Prisma models. Run database migration. Set up Resend sending domain (DKIM, SPF, DMARC). Delete `proxy.js`.

**Content:** Nothing to write this week. Read the Editorial Standards doc. Choose the first product to review (Grammarly or ProWritingAid). Begin product testing.

**SEO:** No changes. Audit the current sitemap for accuracy.

**Newsletter:** Nothing yet. Resend domain must be fully verified before first send.

**Affiliate:** Apply for Grammarly affiliate program. Apply for ProWritingAid affiliate program.

**Distribution:** No active distribution. Set up newsletter landing page shell at `/newsletter` (static, no form yet).

**KPIs:** Prisma migrations complete. Resend domain verified (mail-tester.com ≥ 9/10). Affiliate applications submitted.

**Gate:** Do not proceed to Week 2 until Resend domain passes mail-tester.com at 9/10 or above.

---

## Week 2 (Days 8–14): Newsletter API

**Product:** No new PRD work.

**Development:** Build `POST /api/newsletter/subscribe`. Build `GET /api/newsletter/confirm`. Build confirmation email template. Build welcome email template. Build `/newsletter/confirmed` and `/newsletter/confirm-error` pages.

**Content:** Continue Grammarly testing. Day 10: testing notes checkpoint — write down all observations so far.

**SEO:** No changes.

**Newsletter:** Internal test: subscribe with your own email, confirm, verify welcome email arrives.

**Affiliate:** Follow up on affiliate applications if not yet approved.

**Distribution:** Nothing this week.

**KPIs:** Subscribe → confirm → welcome flow works end-to-end. Emails render correctly in Gmail and Apple Mail.

**Gate:** The full subscription flow (subscribe, confirm, welcome) must work in production before the subscribe form is added to the homepage.

---

## Week 3 (Days 15–21): Newsletter Live + Homepage Form

**Product:** No new PRD work.

**Development:** Add newsletter subscribe form to homepage (PRD-001 newsletter section). Build `/newsletter` landing page. Build unsubscribe flow (`GET /api/newsletter/unsubscribe`, `/newsletter/unsubscribed` page). Add rate limiting to subscribe API.

**Content:** Continue Grammarly testing. Begin review outline.

**SEO:** Add `/newsletter` to sitemap.

**Newsletter:** The subscribe form is live. Test on production with real email addresses before announcing.

**Affiliate:** Affiliate programs approved (expected by now). Generate affiliate links. Add to affiliate registry doc.

**Distribution:** Announce the newsletter via social media. Share with personal network. Target: 10 confirmed subscribers by end of week.

**KPIs:** Subscribe form live on homepage. First 10 confirmed subscribers. Unsubscribe flow working.

---

## Week 4 (Days 22–28): First Editorial Content Prep

**Product:** Begin writing PRD-012 (Methodology Page).

**Development:** Build admin newsletter interface (draft, test send, send now). Build Resend webhook endpoint for bounce/complaint handling.

**Content:** Write the first draft of the Grammarly review. Target: 1,200–2,000 words. Rough draft only, no editing.

**SEO:** Nothing.

**Newsletter:** Send the first newsletter issue (Week 4 allows enough time to have content to talk about). Content: what ToolKno is building, what the first review will cover, one editorial finding from early Grammarly testing.

**Affiliate:** Build `/affiliate-disclosure` page.

**Distribution:** Share first newsletter issue on social. Target 25 confirmed subscribers by end of month.

**KPIs:** Admin newsletter send working. First newsletter issue sent. Affiliate disclosure page live.

**Month 1 gate:** Newsletter live ✓. First issue sent ✓. Grammarly affiliate application approved ✓. Methodology page PRD in draft ✓.

---

## Week 5 (Days 29–35): First Review Published

**Product:** PRD-012 (Methodology Page) finalized and approved.

**Development:** Implement `/methodology` page. Implement basic review page template (`/reviews/[slug]`).

**Content:** Edit and finalize the Grammarly review. Publish it. Write the methodology page (technical writing, not editorial — explains the testing process).

**SEO:** Submit the review URL to Google Search Console for indexing. Add internal links from the most relevant tool pages to the Grammarly review.

**Newsletter:** Send newsletter issue: "The Grammarly verdict after 3 weeks of testing." Include the review finding as the main editorial content. Link to the full review. Target: first affiliate clicks this week.

**Affiliate:** Place Grammarly affiliate link in the review. Verify disclosure is correct per Constitution Rule 2.

**Distribution:** Share the review on Reddit (r/writing, r/freelancewriters). Reddit submission must be a genuine contribution, not a link drop — share the specific finding, not just the link.

**KPIs:** First review published. First newsletter issue linking to a review sent. First affiliate clicks tracked.

---

## Week 6 (Days 36–42): Begin Second Review

**Product:** Write PRD-003 (Reviews) draft.

**Development:** Bug fixes on review template if any. Add reviews to sitemap.

**Content:** Begin ProWritingAid testing (21-day minimum). Write the methodology page copy if not done.

**SEO:** Monitor Grammarly review indexing. Add `ReviewSnippet` structured data to review page.

**Newsletter:** Newsletter issue: first update on ProWritingAid testing (build anticipation, not full findings).

**Affiliate:** Apply for QuillBot affiliate program.

**Distribution:** Engage in writing communities on Twitter/X. Share one useful finding from newsletter publicly.

**KPIs:** Grammarly review indexed in Google Search Console. First affiliate commission earned (even $3 counts — proves the model). PRD-003 draft in progress.

---

## Week 7 (Days 43–49): Establish Newsletter Rhythm

**Product:** PRD-003 finalized and approved.

**Development:** Begin PRD-003 implementation (review content model in Prisma).

**Content:** Continue ProWritingAid testing. Write the second newsletter issue (original content — not a summary of what was published).

**SEO:** Internal linking audit: link from tool pages to editorial content where relevant. E.g., Readability Checker tool page → link to Hemingway Editor review (when published).

**Newsletter:** Second biweekly issue. Original editorial content: one finding from ProWritingAid testing that is shareable as a standalone insight.

**Affiliate:** Grammarly affiliate link report: how many clicks, how many trials, any conversions?

**Distribution:** Post to Indie Hackers (genuine progress post, not promotion): "Week 7 of building a trust-first software review site."

**KPIs:** Newsletter at 50+ confirmed subscribers. Second issue sent. PRD-003 approved.

---

## Week 8 (Days 50–56): Comparison Engine Foundation

**Product:** Write PRD-004 (Comparison Engine) draft.

**Development:** Complete review content model. Build review admin (create/edit/publish review).

**Content:** ProWritingAid testing continues (day 22+ — full testing period complete). Write ProWritingAid review first draft.

**SEO:** Check Grammarly review ranking position. Identify related keywords to target with comparison content.

**Newsletter:** Third biweekly issue.

**Affiliate:** Verify affiliate link tracking is working correctly for Grammarly.

**Distribution:** Nothing new this week.

**KPIs:** Review content model in production. First review fully editable via admin. Newsletter 60+ subscribers.

---

## Week 9 (Days 57–63): Second Review Published

**Product:** PRD-004 (Comparison Engine) finalized and approved.

**Development:** Build comparison page template (`/compare/[a]-vs-[b]/`).

**Content:** Edit and publish ProWritingAid review. Begin Grammarly vs. ProWritingAid comparison first draft (the test data already exists from both reviews).

**SEO:** Submit ProWritingAid review to Search Console. Add internal link from Grammarly review to ProWritingAid review (and vice versa).

**Newsletter:** Fourth biweekly issue: "The ProWritingAid verdict. How it compares to Grammarly." Include comparison preview.

**Affiliate:** ProWritingAid affiliate link placement in review. Verify commission tracking.

**Distribution:** Share ProWritingAid review in relevant communities.

**KPIs:** Two reviews published. First comparison drafted. Newsletter 80+ subscribers. Both reviews indexed.

**Month 2 gate:** Two reviews published ✓. Newsletter rhythm established (4 issues sent) ✓. Both affiliate programs generating clicks ✓.

---

## Week 10 (Days 64–70): First Comparison Published

**Product:** No new PRD.

**Development:** Comparison page template complete and production-ready.

**Content:** Finalize and publish the Grammarly vs. ProWritingAid comparison. Begin QuillBot testing.

**SEO:** Submit comparison URL. "Grammarly vs ProWritingAid" is a high-volume query — this page has ranking potential within 30–60 days with proper optimization.

**Newsletter:** Fifth issue: announce the comparison. Include the key finding ("Our verdict after testing both for 21 days each").

**Affiliate:** First comparison with two affiliate links. Verify both are disclosed correctly.

**Distribution:** Reddit posts: r/writing, r/freelancewriters (the comparison is directly useful to these communities).

**KPIs:** First comparison published and indexed. Newsletter 100+ confirmed subscribers (milestone).

---

## Week 11 (Days 71–77): SEO Compound Week

**Product:** Begin PRD-005 (Buying Guides) draft.

**Development:** Build internal linking automation: related editorial content displayed on tool pages.

**Content:** Write the first buying guide outline: "Best Grammar Checkers for Writers in 2026." Continue QuillBot testing.

**SEO:** Comprehensive internal linking pass: every relevant tool page links to at least one editorial content piece. Every editorial piece has a newsletter CTA.

**Newsletter:** Sixth issue.

**Affiliate:** Apply for Beehiiv affiliate program (Creator Economy expansion begins next month).

**Distribution:** Attempt first editorial backlink outreach: identify 5 writing blogs that could link to the Grammarly review. Personalize outreach.

**KPIs:** Internal linking complete. Backlink outreach sent. 110+ subscribers.

---

## Week 12 (Days 78–84): Buying Guide + Creator Expansion Prep

**Product:** PRD-005 approved.

**Development:** Build buying guide page template.

**Content:** Publish the first buying guide ("Best Grammar Checkers for Writers"). Begin researching Beehiiv for testing.

**SEO:** "Best grammar checkers" is a high-value keyword cluster. This guide targets it directly.

**Newsletter:** Seventh issue: announce buying guide. Survey subscribers: "What creator tools are you currently evaluating?"

**Affiliate:** First buying guide has multiple affiliate links (Grammarly, ProWritingAid, QuillBot). All disclosed.

**Distribution:** Share buying guide in writing communities. This is the most shareable format — it helps people make decisions.

**KPIs:** First buying guide live. Newsletter 130+ subscribers. Affiliate revenue: first non-trivial month (target > $50).

---

## Week 13 (Days 85–90): 90-Day Review

**Product:** Review all PRD statuses. Plan PRD-006 (Software Database) and PRD-011 (Affiliate Registry).

**Development:** Build `/affiliate-registry` internal admin. Address any technical debt accumulated in the sprint.

**Content:** Begin Beehiiv testing (21-day testing clock starts). Complete QuillBot review draft.

**SEO:** Audit all editorial pages for SEO health. Check rankings for all published content.

**Newsletter:** Eighth issue (end of 90 days). Content: reflect on what the newsletter has covered in its first 90 days and what's coming next. This issue establishes the long-term voice.

**Affiliate:** Affiliate registry doc current with all programs, rates, and active links.

**Distribution:** Indie Hackers post: 90-day update with honest numbers.

**KPIs at 90 days:**
- 3 reviews published (Grammarly, ProWritingAid, QuillBot)
- 1 comparison published (Grammarly vs. ProWritingAid)
- 1 buying guide published
- Newsletter: 150+ confirmed subscribers, 8 issues sent
- Affiliate: first commissions earned, 2+ programs active
- All editorial pages indexed by Google

**Month 3 gate:**
- ✓ Newsletter at ≥ 100 confirmed subscribers
- ✓ At least 2 reviews and 1 comparison published
- ✓ At least one affiliate commission earned
- ✓ Biweekly newsletter cadence maintained without missing an issue

---

## Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Initial 90-day plan documented | Founder |
