---
title: "PRD-001: Homepage"
version: 1.0.0
status: approved
owner: Founder
last_updated: 2026-06-26
related_documents:
  - PRD-002-newsletter.md
  - PRD-backlog.md
  - ../operating-system/toolkno-os.md
  - ../architecture/tech-stack.md
---

# PRD-001: Homepage

**Document status:** Approved
**Version:** 1.0.0
**Product area:** Core / Discovery
**Priority:** P0 — Foundation surface for all other features
**Depends on:** None

---

## 1. Purpose

The homepage is the primary trust-building and tool discovery surface for ToolKno. It serves two audiences simultaneously: first-time visitors who arrive through search or referral and need to understand what ToolKno is, and returning users who arrive with a specific tool task in mind.

The homepage is also the first surface where ToolKno's editorial mission becomes visible to free tool users. As editorial content is published, the homepage evolves to reflect it — automatically, without architectural changes.

---

## 2. Business Goals

**BG-001:** Convert organic tool traffic into newsletter subscribers via a friction-free subscribe form positioned between the hero and the featured tools.

**BG-002:** Communicate the ToolKno editorial value proposition (honest, tested software recommendations) to free tool users who have not yet encountered the editorial content.

**BG-003:** Maximize AdSense revenue from homepage traffic through correctly positioned ad units without compromising the user experience.

**BG-004:** Drive tool engagement — the primary metric for the free tool layer — by surfacing featured and popular tools above the fold.

**BG-005:** Establish the URL structure and structured data foundation for the editorial content layer before that content exists.

---

## 3. User Goals

**Primary:** Find and immediately use a specific text tool without friction.

**Secondary:** Discover tools they did not know existed that solve problems they have.

**Tertiary:** Understand what editorial content ToolKno publishes and subscribe to the newsletter.

---

## 4. User Personas

### The Task-Focused Tool User
Arrives via a Google search for a specific tool. Has no interest in ToolKno as a brand. Needs to find the tool in under 5 seconds or will bounce. The homepage hero must communicate the tool inventory immediately.

### The Browser
Arrives via social share or a colleague's recommendation. Open to exploring. Will scroll if the above-the-fold content is compelling. Converts to newsletter subscriber if the editorial value proposition resonates.

### The Returning Subscriber
Already subscribed to the newsletter. Arrives from a newsletter link or bookmark. Looks for the tool they need and leaves. No friction is their requirement.

### The Editorial Reader
Found ToolKno through a review or comparison (typically via search). Uses the homepage to understand the full product offering. Highest conversion potential for newsletter subscription.

### The Mobile User
~55% of tool page traffic. The homepage must be fully functional and uncluttered on viewports as small as 375px.

---

## 5. User Stories

**US-001:** As a first-time visitor, I want to understand what ToolKno offers within 5 seconds of landing on the homepage so I can decide whether to stay.

**US-002:** As a tool user, I want to access any of ToolKno's tools from the homepage without clicking more than once.

**US-003:** As a tool user who doesn't know what tool they need, I want to search or filter the tool directory from the homepage so I can find the right tool.

**US-004:** As a newsletter subscriber, I want the homepage to recognize that I'm already subscribed and not show me the subscribe form again.

**US-005:** As a potential newsletter subscriber, I want to subscribe from the homepage in under 10 seconds without leaving the page.

**US-006:** As an editorial reader, I want to see ToolKno's most recent editorial content on the homepage so I can discover reviews I have not read.

**US-007:** As a mobile user, I want all homepage interactions to work correctly with touch and at 375px viewport width.

**US-008:** As a returning user, I want the page to load in under 2 seconds so tool discovery is fast.

**US-009:** As a user with a screen reader, I want the homepage to be fully navigable with keyboard and screen reader so I can access all tool content.

**US-010:** As a user encountering ToolKno for the first time, I want to understand the privacy commitment ("your text never leaves your device") before using a tool.

**US-011:** As a user who wants to subscribe but enters an invalid email, I want a clear inline error message that tells me what is wrong.

---

## 6. Homepage States

The homepage exists in two states. The state is determined by the existence of published editorial content.

### State A: Tools-Primary (current state)

**Condition:** Zero published reviews, comparisons, or buying guides exist.

**Behavior:** The editorial content section does not render. The newsletter subscribe section renders with a tools-focused value proposition: "Get notified when we publish honest software reviews." The hero, trust strip, featured tools, popular tools, and tool explorer render normally.

### State B: Editorial-Active

**Condition:** One or more published editorial items exist.

**Trigger:** Automatic — no code change required. The editorial section renders when the database contains at least one published editorial item.

**Behavior:** The editorial content section renders below the popular tools section, showing the three most recent editorial items. The newsletter subscribe section updates its value proposition to emphasize editorial content.

The transition from State A to State B must require no architectural change — only a database entry. This is enforced in the implementation.

---

## 7. Functional Requirements

### 7.1 Global Navigation

**FR-001:** Navigation contains exactly these links when in State A: Logo → /, Tools → /tools, Pricing → /pricing, About → /about, Login/Dashboard (auth-dependent).

**FR-002:** No navigation links to /reviews, /compare, /guides, /newsletter, or /methodology until those pages exist and contain content. Adding a nav link to a non-existent page is a Constitution Rule 3 violation.

**FR-003:** Navigation is sticky on scroll. The height of the sticky nav is consistent and does not cause CLS.

### 7.2 Hero Section

**FR-004:** The hero section contains: badge ("60+ free tools · No signup · Works offline in your browser"), H1 headline, supporting paragraph, two CTAs, and three stats.

**FR-005:** H1 headline: "Fix your text in seconds — no signup, no uploads". The headline is not changed without a documented rationale.

**FR-006:** Primary CTA: "Try Word Counter — free" → /tools/word-counter. Secondary CTA: "Browse all 60 tools" → /tools.

**FR-007:** Stats: 60+, 0, 100% (free tools, signup needed, in your browser).

**FR-008:** The hero renders entirely as HTML with no client-side JavaScript dependency. It is server-rendered and statically generated.

### 7.3 Newsletter Subscribe Section

**FR-009:** The newsletter section is positioned immediately below the hero (after the first ad unit) and above the featured tools section.

**FR-010:** The subscribe form: one email input, one submit button, one inline disclosure. No name field. No checkbox.

**FR-011:** On successful submission, the form is replaced in-place by: "Check your email to confirm your subscription." No page navigation.

**FR-012:** For users who have confirmed their subscription (determined by the `toolkno_subscribed` cookie), the section renders: "You're subscribed. New editorial content lands in your inbox biweekly." No subscribe form is shown.

**FR-013:** State A copy: "Get notified when we publish our first honest software review." State B copy: "Join [N] readers getting honest software takes, biweekly."

### 7.4 Featured Tools Section

**FR-014:** Exactly three tools are featured, defined in `featuredSlugs` in `app/page.js`. Each features a tool name, a use-case sentence, and a "Try free →" CTA.

**FR-015:** Current featured tools: Word Counter, Remove Duplicate Lines, Text Compare Tool. These are changed only via a documented editorial decision.

**FR-016:** Featured tool cards link directly to the tool page. No intermediate step.

### 7.5 Trust Signal Strip

**FR-017:** Below the featured tools: three trust signals in a card grid. Content: "Free, every tool" (all 60 tools are free, no paywall), "Your text stays yours" (client-side only), "No signup, ever" (open, paste, result).

**FR-018:** Trust signals are text-only. No icons, no illustrations. Plain language.

### 7.6 Popular Tools Section

**FR-019:** Eight popular tools displayed in a 4-column grid on desktop, 2-column on tablet, 1-column on mobile.

**FR-020:** Current popular tools: character-counter, case-converter, remove-extra-spaces, title-case-converter, find-and-replace-text, readability-checker, lorem-ipsum-generator, text-to-binary-converter. These are defined in `popularSlugs` in `app/page.js`.

**FR-021:** "See all 60 →" link to /tools is positioned at the top-right of the section header.

### 7.7 Tool Explorer

**FR-022:** Below popular tools: the `<ToolExplorer>` component renders the full tool directory with search and category filter. This is the same component used on /tools.

**FR-023:** The Tool Explorer is a client component (includes a search input). It is the only significant client-side JavaScript on the homepage.

### 7.8 Editorial Content Section (State B only)

**FR-024:** This section renders only when State B is active. In State A, no empty container or placeholder renders.

**FR-025:** Displays the three most recent published editorial items, ordered by publication date descending.

**FR-026:** Each editorial card shows: type label (Review / Comparison / Buying Guide), title, summary (one sentence), publication date, and a "Read →" CTA linking to the editorial URL.

**FR-027:** Below the three items: a "See all reviews →" link to /reviews.

### 7.9 Brand Values Section

**FR-028:** Two-column section: left panel ("Why people stay") with tool tag cloud linking to individual tools, right panel ("How ToolKno is different") with three value props (Built for speed, Private by design, Honest free tier).

### 7.10 Bottom CTA Banner

**FR-029:** Full-width sky-blue CTA banner: "Pick a tool. Get back to work." with "Browse all tools →" button.

**FR-030:** This is the last content section before the footer.

### 7.11 Ad Placements

**FR-031:** Ad unit 1: horizontal format, positioned after the hero section, above the newsletter section.

**FR-032:** Ad unit 2: rectangle format, positioned after the tool explorer section.

**FR-033:** Ad units use the `<AdUnit>` component with the correct slot IDs from `siteConfig.adSlots`. No inline ad code.

---

## 8. Non-Functional Requirements

**NF-001:** The homepage is statically generated (`export default function HomePage()` — no `async`, no server-side data fetching at request time).

**NF-002:** Featured tools and popular tools are resolved at build time using `getToolBySlug()`. If a slug is not found, it is filtered out silently (`.filter(Boolean)`).

**NF-003:** The newsletter subscription state (subscribed cookie check) is client-side. The form renders server-side as the subscribe form; the cookie check occurs client-side after hydration to update the UI. This means there is a brief flash where the form appears before being replaced by the subscribed state. This is acceptable behavior.

---

## 9. SEO Requirements

**SEO-001:** Page title: `"Free Text Tools, Software Reviews & AI Guides | ToolKno"`

**SEO-002:** Meta description: `"Toolkno gives you 60+ free browser-based text tools alongside honest software reviews, AI tool comparisons, and practical workflow guides. No signup, instant results."`

**SEO-003:** Canonical URL: `https://toolkno.com/`

**SEO-004:** OG image: the ToolKno default OG image. Dimensions: 1200×630px.

**SEO-005:** Structured data schemas on homepage:
- `WebSite` with `SearchAction` (sitelinks searchbox)
- `Organization` with `name`, `url`, `logo`
- `ReviewRating` aggregate (State B only — appears when reviews are published)

**SEO-006:** Homepage included in sitemap.js with `priority: 1.0`, `changeFrequency: "daily"`.

---

## 10. Analytics Requirements

| Event | Trigger |
|---|---|
| `homepage_hero_cta_click` | Click on primary or secondary hero CTA |
| `homepage_featured_tool_click` | Click on any featured tool card |
| `homepage_popular_tool_click` | Click on any popular tool card |
| `newsletter_form_impression` | Newsletter section enters viewport |
| `newsletter_signup_attempt` | Subscribe button clicked |
| `newsletter_signup_success` | Successful API response |
| `newsletter_signup_error` | Error API response |
| `homepage_editorial_card_click` | Click on an editorial content card (State B) |
| `tool_explorer_search` | User types in the Tool Explorer search input |
| `homepage_bottom_cta_click` | Click on the bottom CTA "Browse all tools" button |

---

## 11. Accessibility Requirements

**ACC-001:** All interactive elements are keyboard-accessible. Tab order follows the visual reading order.

**ACC-002:** The subscribe form input has an associated `<label>`. Error messages are linked via `aria-describedby`.

**ACC-003:** All links have descriptive text. No "click here" links.

**ACC-004:** Color is not the only differentiator for any information. All icons that convey meaning have text alternatives.

**ACC-005:** The Tool Explorer search input is labelled and announces results changes via `aria-live`.

**ACC-006:** The page passes axe-core with zero critical or serious violations.

---

## 12. Performance Requirements

| Metric | Threshold |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Lighthouse Performance | ≥ 90 (desktop), ≥ 80 (mobile) |
| JS payload | < 150KB parsed per page |

The homepage is statically generated. It should consistently score ≥ 95 on Lighthouse Performance on desktop. Mobile scores are depressed by the AdSense script.

---

## 13. Edge Cases

**EC-001: All featured tool slugs are invalid.** If none of the slugs in `featuredSlugs` match a tool in the registry, the featured section renders with zero cards. This should not cause a build error.

**EC-002: Newsletter API is down during subscribe attempt.** The form returns to its interactive state with the error message "Something went wrong. Please try again." The user's email value is preserved in the input.

**EC-003: User is already subscribed (cookie present) but form appears due to SSR.** After client-side hydration, the form is replaced by the subscribed state. A brief flash of the form is acceptable.

**EC-004: Editorial section in State B with exactly one editorial item.** The section renders one card, not three. The layout must not break with one or two items (use a flexible grid, not a hard three-column requirement).

**EC-005: Homepage in State A when the first review is published.** The editorial section should appear immediately after the next build without any code change. The build is triggered automatically by Vercel on every git push. If editorial content is managed via a CMS, a revalidation hook triggers a rebuild.

---

## 14. Error States

**ES-001: Newsletter subscribe — network failure.** Error message below button: "No connection. Please check your internet and try again."

**ES-002: Newsletter subscribe — server error.** Error message: "Something went wrong. Please try again, or contact us if this continues."

**ES-003: Newsletter subscribe — invalid email.** Client-side error message: "Please enter a valid email address." No API call is made.

**ES-004: Newsletter subscribe — disposable email.** Server returns 422. Error message: "Please use a non-temporary email address."

**ES-005: Newsletter subscribe — rate limited.** Server returns 429. Error message: "Too many requests. Please wait a moment and try again."

---

## 15. Success Metrics

| Metric | 30-day target |
|---|---|
| Homepage → newsletter conversion rate | ≥ 0.5% of visitors |
| Homepage → tool click-through rate | ≥ 40% of visitors click a tool |
| Bounce rate (State A) | < 65% |
| Core Web Vitals — all green | Pass |
| Lighthouse Accessibility | ≥ 95 |

---

## 16. Acceptance Criteria

**AC-001:** The homepage renders with zero JavaScript errors in the browser console.

**AC-002:** The hero section, featured tools, trust strip, popular tools, and tool explorer are visible on a 375px mobile viewport without horizontal scroll.

**AC-003:** The newsletter subscribe form successfully submits to `/api/newsletter/subscribe`, receives a 200 response, and replaces the form with the confirmation message without page reload.

**AC-004:** A user with the `toolkno_subscribed` cookie sees the subscribed state instead of the subscribe form.

**AC-005:** All tool cards on the homepage link to valid tool pages (no 404s).

**AC-006:** The Tool Explorer search returns correct filtered results.

**AC-007:** Structured data validates with zero errors in Google's Rich Results Test.

**AC-008:** Lighthouse Performance score ≥ 90 on desktop.

**AC-009:** axe-core reports zero critical or serious accessibility violations.

**AC-010:** The editorial section does not render in State A (confirmed by inspecting the DOM).

**AC-011:** The editorial section renders in State B when at least one published editorial item exists in the database.

**AC-012:** All 10 analytics events fire correctly and appear in the analytics dashboard (verified in staging).

**AC-013:** The homepage is indexed by Google Search Console within 7 days of the first crawl after this implementation.

---

## 17. Future Enhancements

**FE-001:** Personalized tool suggestions based on which tools the user has previously used (requires client-side history, no account needed).

**FE-002:** Subscriber count display in the newsletter section ("Join 4,200 readers") — enabled when the count is large enough to be credible.

**FE-003:** Featured editorial content above the fold (State B: Promoted) — when three or more editorial items exist, the homepage homepage may feature one prominently in the hero area.

**FE-004:** Category quick-links in the hero section — pills for the most popular tool categories.

**FE-005:** "New tools" section — surfaces recently added tools for returning users.

**FE-006:** A/B test the hero CTA — "Try Word Counter — free" vs. "Start with any free tool →".

---

## 18. Dependencies

| Dependency | Status | Blocking? |
|---|---|---|
| `lib/tools.js` — tool registry | Exists | No |
| `components/home/ToolExplorer` | Exists | No |
| `components/tools/ToolCard` | Exists | No |
| `components/layout/AdUnit` | Exists | No |
| `/api/newsletter/subscribe` | Not built (PRD-002) | Yes — subscribe form will fail without it |
| `toolkno_subscribed` cookie logic | Not built | No — form renders correctly without it |
| Editorial content database model | Not built (PRD-003) | No — homepage degrades to State A gracefully |

---

## 19. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Newsletter API not built before homepage is shipped | Medium | Medium | Ship State A homepage without the subscribe form being live; add the form when the API exists |
| AdSense script degrading Core Web Vitals | High | Medium | Use `strategy="afterInteractive"` for AdSense script load; accept that mobile Lighthouse will be lower |
| Tool Explorer client component causing hydration mismatch | Low | High | Ensure Tool Explorer's initial server render matches client render exactly |
| Cookie-based subscription detection not working in private browsing | Medium | Low | The fallback (form appears) is the correct degraded experience |

---

## 20. Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Initial PRD approved | Founder |
