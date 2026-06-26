---
title: "PRD-002: Newsletter System"
version: 1.0.0
status: approved
owner: Founder
last_updated: 2026-06-26
related_documents:
  - PRD-001-homepage.md
  - PRD-backlog.md
  - ../architecture/tech-stack.md
  - ../architecture/gap-analysis.md
  - ../growth/growth-flywheel.md
---

# PRD-002: Newsletter System

**Document status:** Approved
**Version:** 1.0.0
**Product area:** Growth / Relationships
**Priority:** P0 — Highest priority feature not yet built
**Depends on:** PRD-001 (Homepage) — newsletter CTA surfaces defined there

---

## 1. Purpose

The ToolKno newsletter is the primary long-term business asset. It is the only audience channel ToolKno owns outright — not rented from Google, not borrowed from a social platform, not contingent on an algorithm. A newsletter subscriber who confirms their subscription has made an explicit choice to receive ToolKno's editorial content. That relationship is worth more per person than any organic visitor.

This PRD defines the complete newsletter system: subscriber acquisition, double opt-in confirmation, welcome sequence, issue management, unsubscribe and resubscribe flows, admin controls, analytics, and all supporting infrastructure. Every component is designed to serve one long-term outcome: a subscriber list of people who genuinely want ToolKno's editorial content and continue to receive it.

The system is built on Resend (already integrated for transactional auth emails), Prisma + PostgreSQL, and Next.js API routes. It is entirely self-hosted — no third-party newsletter platform (Beehiiv, ConvertKit, Mailchimp) is used for subscriber management. External newsletter platforms are a future consideration; they are not part of this PRD.

---

## 2. Business Goals

**BG-001:** Capture email addresses from the existing organic tool traffic and convert them into subscribers who will receive editorial content and affiliate-eligible recommendations.

**BG-002:** Build a first-party owned audience that remains reachable independent of Google algorithm changes, social platform policy changes, or any other external dependency.

**BG-003:** Create the distribution mechanism for editorial content (reviews, comparisons, buying guides) that drives affiliate revenue. A subscriber who reads a review recommendation in the newsletter converts at 4–6× the rate of a cold organic visitor.

**BG-004:** Establish the data infrastructure that enables newsletter sponsorships — a second revenue stream that becomes viable at approximately 2,000 confirmed subscribers in a targeted niche.

**BG-005:** Maintain a clean, high-quality subscriber list with verified email addresses and genuine opt-in consent, ensuring high deliverability rates and long-term list health.

---

## 3. User Goals

**Primary:** Subscribe to receive ToolKno's editorial content without friction, with confidence that the subscription is safe, private, and easily cancellable.

**Secondary:** Manage subscription preferences without requiring direct communication with the team.

**Tertiary:** Easily and immediately unsubscribe at any point, without barriers, confirmations, or explanations required.

---

## 4. User Personas

### Persona 1: The Tool Regular
Uses ToolKno's free tools multiple times per week. Discovers the newsletter via an in-context CTA. Subscribes with mild curiosity. Will unsubscribe if the first issue is a link digest. Will stay if the first issue contains a genuine editorial finding that saves them time or money. **Critical moment:** The welcome email.

### Persona 2: The Active Decision Maker
Found ToolKno through a software review. Has high editorial intent. Subscribes to receive future editorial content. **Critical moment:** The first issue relevant to their current software decision.

### Persona 3: The Privacy-Conscious Professional
Skeptical of newsletter signups. Reads the disclosure text carefully before submitting an email. **Critical moment:** The disclosure line below the signup form.

### Persona 4: The Reluctant Subscriber
Subscribed months ago. Has stopped opening. Represents list hygiene risk. **Critical moment:** Re-engagement email after 90 days of no opens.

---

## 5. User Stories

**US-001:** As a tool user who has decided to subscribe, I want to enter my email and receive confirmation without navigating away from my current page.

**US-002:** As a new subscriber, I want the confirmation email to arrive within 2 minutes so I can complete confirmation while still thinking about it.

**US-003:** As a new confirmed subscriber, I want to receive a welcome email immediately after confirming, explaining what I've subscribed to and what to expect.

**US-004:** As a subscriber who no longer wants the newsletter, I want a single click to unsubscribe — no confirmation, no reason required.

**US-005:** As a subscriber who unsubscribed accidentally, I want to resubscribe from the unsubscribe confirmation page.

**US-006:** As a subscriber who wants to receive the newsletter less frequently, I want to set a preference without unsubscribing.

**US-007:** As the newsletter editor, I want to draft an issue, preview it, send a test to myself, and schedule it for a future date.

**US-008:** As the newsletter editor, I want to see open rate, click rate, and unsubscribe rate per issue.

**US-009:** As a subscriber who submitted an email with a typo, I want to resubmit my correct email without being blocked by a "duplicate email" error.

**US-010:** As a mobile email reader, I want confirmation and welcome emails to be fully readable and functional on my phone.

---

## 6. Functional Requirements

### 6.1 Subscribe Flow

**FR-001:** Subscribe form entry points: homepage newsletter section, tool page in-content CTA, newsletter landing page at `/newsletter`, footer link.

**FR-002:** The form contains exactly one required field: email address. No name, no preference fields, no CAPTCHA at launch.

**FR-003:** Source is captured automatically based on entry point: `"homepage"`, `"tool_page:[slug]"`, `"newsletter_landing"`, `"footer"`.

**FR-004:** Client-side validation on submit (not on blur): non-empty, contains `@`, contains `.` after `@`, max 254 chars.

**FR-005:** Submit to `POST /api/newsletter/subscribe`. Button disabled during request. On success: form replaced in-place with confirmation message. On error: form returns to interactive state with inline error.

### 6.2 Double Opt-In

**FR-006:** Double opt-in is mandatory and permanent. A subscriber is not active until they click the confirmation link in a confirmation email. This is not configurable.

**FR-007:** Confirmation token: `crypto.randomBytes(32)` hex-encoded (64 chars). Single-use. 48-hour expiry.

**FR-008:** Re-submission of the same pending email invalidates the previous token and sends a new confirmation email.

**FR-009:** Re-submission of an already-confirmed email returns a success-equivalent response without modification or email send (prevents enumeration).

**FR-010:** Re-submission of an unsubscribed email initiates a new pending + confirmation flow.

**FR-011:** Re-submission of a bounced or complained email returns a success-equivalent response but takes no action (permanent suppression).

### 6.3 Confirmation Email

**FR-012:** Sent within 10 seconds of successful subscribe API response. Via Resend.

**FR-013:** From: `ToolKno <hello@toolkno.com>`. Subject: "Confirm your ToolKno subscription". Preheader: "One click to confirm — takes 2 seconds."

**FR-014:** Content: one explanatory sentence, one "Confirm my subscription" button, plain-text link fallback, disclosure ("If you didn't request this, ignore this email."), 48-hour expiry notice.

**FR-015:** Confirmation link: `https://toolkno.com/newsletter/confirm?token=[64-char-hex]`

**FR-016:** Confirmation page at `/newsletter/confirm` validates token server-side. On success: renders confirmation success page and triggers welcome email. Confirmation is an intermediate rendering step + POST to prevent email client pre-fetch from accidentally confirming (see EC-002).

### 6.4 Welcome Email

**FR-017:** Sent within 30 seconds of successful confirmation.

**FR-018:** Subject: "You're in. Here's what to expect." Preheader: "Honest software takes, twice a month. No affiliate pressure."

**FR-019:** Content: what you just signed up for (100–150 words, founder's voice), three specific editorial commitments, what's coming next in the pipeline (specific, not vague), navigation links. No affiliate links. No promotional content.

**FR-020:** Two variants: `welcome-new` (first-time subscribers) and `welcome-returning` (subscribers who previously unsubscribed, adding "Welcome back").

**FR-021:** Welcome email has no tracking pixel or link click tracking. It is a trust-building communication.

### 6.5 Unsubscribe Flow

**FR-022:** Clicking the unsubscribe link in any email: immediate status change to `"unsubscribed"`. No confirmation step. No reason required.

**FR-023:** Unsubscribe tokens do not expire. A subscriber can always unsubscribe from any historical email.

**FR-024:** Unsubscribe confirmation page: acknowledgment + resubscribe option.

**FR-025:** `List-Unsubscribe` header on every issue per RFC 8058:
```
List-Unsubscribe: <https://toolkno.com/newsletter/unsubscribe?token=[token]>, <mailto:unsubscribe@toolkno.com?subject=unsubscribe>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

### 6.6 Subscriber Status Model

| Status | Receives issues? | Next valid status |
|---|---|---|
| `pending` | No | `confirmed`, cleaned up after 7 days |
| `confirmed` | Yes | `unsubscribed`, `bounced`, `complained`, `inactive` |
| `unsubscribed` | No | `pending` (via resubscribe) |
| `bounced` | No | Permanently suppressed |
| `complained` | No | Permanently suppressed |
| `inactive` | No (excluded from regular sends) | `confirmed` (via re-engagement), `unsubscribed` |

`inactive`: confirmed subscriber who has received ≥ 3 issues and not opened any in 90 days. Applied weekly by scheduled job.

### 6.7 Preferences

**FR-026:** Preferences page at `/newsletter/preferences`. Authentication via management link sent to subscriber's email (4-hour expiry).

**FR-027:** Preferences at launch: `frequency` (every_issue | digest_only).

**FR-028:** Preferences page also shows: subscription status, subscribe date, email address update (triggers new confirmation to new address), unsubscribe button (no confirmation step).

### 6.8 Email Validation

**FR-029:** Server-side: single `@`, `.` after `@`, max 254 chars, lowercase normalized, not in disposable domain blocklist.

**FR-030:** Gmail normalization for deduplication: `First.Last+tag@gmail.com` → `firstlast@gmail.com`. Store as submitted; use normalized form only for duplicate detection.

**FR-031:** No MX record lookup during subscribe (latency risk). Deliverability assessed via Resend webhooks post-send.

**FR-032:** Disposable email blocklist in `lib/newsletter/disposable-domains.js`. Returns 422 for blocked domains.

---

## 7. Database Requirements

### Subscriber
```prisma
model Subscriber {
  id              String           @id @default(cuid())
  email           String           @unique
  emailNormalized String           @unique
  status          SubscriberStatus @default(pending)
  source          String
  frequency       EmailFrequency   @default(every_issue)
  subscribedAt    DateTime         @default(now())
  confirmedAt     DateTime?
  unsubscribedAt  DateTime?
  bouncedAt       DateTime?
  complainedAt    DateTime?
  lastOpenedAt    DateTime?
  lastClickedAt   DateTime?
  openCount       Int              @default(0)
  clickCount      Int              @default(0)
  issuesReceived  Int              @default(0)
  ipAddressHash   String?
  userAgent       String?
  createdAt       DateTime         @default(now())
  updatedAt       DateTime         @updatedAt

  tokens  SubscriberToken[]
  events  SubscriberEvent[]
  sends   NewsletterSend[]
}

enum SubscriberStatus { pending confirmed unsubscribed bounced complained inactive }
enum EmailFrequency   { every_issue digest_only }
```

### SubscriberToken
```prisma
model SubscriberToken {
  id           String     @id @default(cuid())
  subscriberId String
  subscriber   Subscriber @relation(fields: [subscriberId], references: [id], onDelete: Cascade)
  token        String     @unique
  type         TokenType
  expiresAt    DateTime?
  usedAt       DateTime?
  createdAt    DateTime   @default(now())
}

enum TokenType { confirmation unsubscribe resubscribe management }
```

### SubscriberEvent
```prisma
model SubscriberEvent {
  id             String            @id @default(cuid())
  subscriberId   String
  subscriber     Subscriber        @relation(fields: [subscriberId], references: [id], onDelete: Cascade)
  eventType      String
  previousStatus SubscriberStatus?
  newStatus      SubscriberStatus?
  metadata       Json?
  actor          String
  createdAt      DateTime          @default(now())
}
```

### NewsletterIssue
```prisma
model NewsletterIssue {
  id           String        @id @default(cuid())
  issueNumber  Int           @unique @autoincrement()
  slug         String        @unique
  subject      String
  preheader    String?
  htmlContent  String        @db.Text
  textContent  String        @db.Text
  status       IssueStatus   @default(draft)
  audienceType AudienceType  @default(all_confirmed)
  scheduledAt  DateTime?
  sentAt       DateTime?
  sentCount    Int           @default(0)
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt

  sends NewsletterSend[]
}

enum IssueStatus  { draft scheduled sending sent cancelled }
enum AudienceType { all_confirmed segment }
```

### NewsletterSend
```prisma
model NewsletterSend {
  id              String          @id @default(cuid())
  issueId         String
  issue           NewsletterIssue @relation(fields: [issueId], references: [id])
  subscriberId    String
  subscriber      Subscriber      @relation(fields: [subscriberId], references: [id])
  emailSnapshot   String
  status          SendStatus      @default(pending)
  resendMessageId String?
  sentAt          DateTime?
  openedAt        DateTime?
  lastOpenedAt    DateTime?
  openCount       Int             @default(0)
  clickedAt       DateTime?
  bouncedAt       DateTime?
  complainedAt    DateTime?
  failedAt        DateTime?
  failureReason   String?
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  clicks NewsletterClick[]
  @@unique([issueId, subscriberId])
}

enum SendStatus { pending sent opened clicked bounced complained failed }
```

### NewsletterClick
```prisma
model NewsletterClick {
  id            String         @id @default(cuid())
  sendId        String
  send          NewsletterSend @relation(fields: [sendId], references: [id])
  url           String
  clickedAt     DateTime       @default(now())
  ipAddressHash String?
  userAgent     String?
}
```

### RateLimitEntry
```prisma
model RateLimitEntry {
  id          String   @id @default(cuid())
  key         String
  attempts    Int      @default(1)
  windowStart DateTime @default(now())
  expiresAt   DateTime

  @@index([key])
  @@index([expiresAt])
}
```

**Also add to User model:**
```prisma
role String @default("user")  // "user" | "admin"
```

---

## 8. API Requirements

### POST /api/newsletter/subscribe

**Auth:** None. Rate limited.
**Rate limits:** 5/IP/hour, 3/email/hour.

**Request:**
```json
{ "email": "user@example.com", "source": "homepage" }
```

**Success response (new, pending re-send, confirmed, bounced/complained — all identical):**
```json
{ "success": true, "message": "Check your email to confirm your subscription." }
```

**Error responses:**
```json
// 400
{ "error": { "code": "VALIDATION_ERROR", "message": "Please enter a valid email address.", "field": "email" } }
// 422
{ "error": { "code": "DISPOSABLE_EMAIL", "message": "Please use a non-temporary email address." } }
// 429
{ "error": { "code": "RATE_LIMIT_EXCEEDED", "message": "Too many requests. Please wait a moment and try again.", "retryAfter": 3600 } }
// 500
{ "error": { "code": "INTERNAL_ERROR", "message": "Something went wrong. Please try again." } }
```

---

### GET /api/newsletter/confirm?token=[token]

Validates token, marks subscriber confirmed, triggers welcome email, redirects to `/newsletter/confirmed`.

- Invalid/expired token → redirect to `/newsletter/confirm-error?reason=invalid` or `?reason=expired`
- Already-used token → redirect to `/newsletter/confirmed` (idempotent)

---

### GET /api/newsletter/unsubscribe?token=[token]

Also accepts POST for `List-Unsubscribe-Post` compatibility. Immediately sets `status: "unsubscribed"`. Redirects to `/newsletter/unsubscribed`.

---

### POST /api/newsletter/resubscribe

Same logic as subscribe. Resets pending, sends new confirmation.

---

### POST /api/newsletter/management-link

Sends a management link email to subscriber. Returns identical response whether email exists or not.

---

### GET /api/newsletter/preferences?token=[token]

Returns subscriber preferences. Returns 401 for invalid/expired management token.

---

### PATCH /api/newsletter/preferences

Updates `frequency`. Returns updated subscriber object.

---

### DELETE /api/newsletter/preferences

Unsubscribes via management token. Returns `{ "success": true }`.

---

### GET /api/newsletter/open?sid=[sendId]

Returns 1×1 transparent GIF immediately. Async database write: updates `openedAt`, `openCount`, `lastOpenedAt`, subscriber's `lastOpenedAt`.

---

### GET /api/newsletter/click?sid=[sendId]&url=[encoded-url]

Validates URL against allowlist. Records click in `NewsletterClick`. Redirects (302) to destination URL.

**Security:** `url` parameter validated against domain allowlist. Prevents open redirect abuse.

---

### POST /api/newsletter/webhook/resend

Verifies Resend webhook signature (HMAC-SHA256). Handles:
- `email.delivered` → `NewsletterSend.status = "sent"`
- `email.bounced` (hard) → subscriber `status = "bounced"`
- `email.complained` → subscriber `status = "complained"`

Returns 200 for all event types (including unhandled — prevents Resend retry loops).

---

### Admin Endpoints (all require `session.user.role === "admin"`)

| Method | Path | Purpose |
|---|---|---|
| POST | `/api/admin/newsletter/issues` | Create draft issue |
| PATCH | `/api/admin/newsletter/issues/[id]` | Update draft |
| POST | `/api/admin/newsletter/issues/[id]/test` | Send test email |
| POST | `/api/admin/newsletter/issues/[id]/schedule` | Schedule issue |
| POST | `/api/admin/newsletter/issues/[id]/send` | Send immediately |
| DELETE | `/api/admin/newsletter/issues/[id]/schedule` | Cancel schedule |
| GET | `/api/admin/newsletter/issues` | List issues with stats |
| GET | `/api/admin/newsletter/issues/[id]/analytics` | Per-issue analytics |
| GET | `/api/admin/newsletter/subscribers` | Paginated subscriber list |
| GET | `/api/admin/newsletter/subscribers/export` | CSV export |
| POST | `/api/admin/newsletter/subscribers/[id]/status` | Manual status override |

---

## 9. Email System

**ES-001:** All email sent via Resend. Dedicated sending domain. DKIM, SPF, DMARC configured before first send. mail-tester.com score target: 10/10.

**ES-002:** From: `ToolKno <hello@toolkno.com>`. Consistent across all emails.

**ES-003:** Newsletter issue links are wrapped in click-tracking redirect at send time. Tracking pixel embedded before footer. Both are per-subscriber (use `NewsletterSend.id`).

**ES-004:** Every newsletter issue is multipart/alternative (HTML + plain text). Plain text is written as a real plain-text email, not stripped HTML.

**ES-005:** Newsletter batch sends use Resend batch API (up to 100 per call). 100ms delay between batch calls to avoid rate limiting.

**ES-006:** Email footer required elements: unsubscribe link, preferences link, physical mailing address, "You received this because you subscribed at toolkno.com", privacy policy link.

---

## 10. Admin Requirements

**AR-001:** Admin at `/admin/newsletter`. Protected by session middleware checking `role: "admin"`.

**AR-002:** Subscriber list: partial email display by default (`u***@example.com`). Full email reveal is a logged action.

**AR-003:** Issue creation: subject, preheader, HTML content (textarea at launch), plain text content.

**AR-004:** Issue preview: renders HTML in iframe at 600px.

**AR-005:** Test send: prepends "[TEST]" to subject. Max 5 recipients. No `NewsletterSend` record created.

**AR-006:** Send confirmation dialog: "Type SEND to confirm." Prevents accidental sends.

**AR-007:** Analytics per issue: sent, delivered, bounced, unique opens, open rate, unique clicks, click rate, unsubscribes, top links.

---

## 11. Analytics Events

**Client-side:**
- `newsletter_form_impression` — form enters viewport
- `newsletter_form_interaction` — first keystroke in email input
- `newsletter_signup_attempt` — submit clicked
- `newsletter_signup_success` — successful API response
- `newsletter_signup_error` — error response (includes `error_code`)
- `newsletter_confirm_success` — subscriber lands on `/newsletter/confirmed`
- `newsletter_unsubscribe` — subscriber lands on `/newsletter/unsubscribed`
- `newsletter_resubscribe_attempt` — resubscribe clicked on unsubscribed page
- `newsletter_preferences_view` — preferences page viewed
- `newsletter_preferences_update` — preference changed (includes `field`, `value`)

---

## 12. SEO Considerations

- `/newsletter` — indexable, targets "ToolKno newsletter" queries
- `/newsletter/confirmed`, `/newsletter/unsubscribed`, `/newsletter/confirm-error` — `noindex`
- `/newsletter/confirm?token=...` — `noindex`
- `/newsletter/issues/[slug]` — indexable, future enhancement (FE-004)

---

## 13. Accessibility

- Subscribe form: associated `<label>`, error via `aria-describedby`, success via `aria-live="polite"`
- Unsubscribe and preferences pages: fully keyboard-navigable
- All email templates: heading hierarchy, descriptive link text, minimum 16px body, WCAG AA contrast
- Admin: all form controls labelled, keyboard navigable

---

## 14. Security

- Tokens: `crypto.randomBytes(32)` hex. Never `Math.random()`.
- IP addresses: SHA-256 hashed before storage. Raw IPs never persisted.
- Admin routes: role check in middleware, not in route handlers.
- Webhook: HMAC-SHA256 signature verification on every Resend webhook request.
- Click redirect: URL validated against domain allowlist before redirecting (prevents open redirect).
- Email enumeration: subscribe API returns identical response for existing/non-existing emails.

---

## 15. Privacy & GDPR

- Consent recorded in `SubscriberEvent` with timestamp, IP hash, source.
- Subscribe form disclosure: "By subscribing, you agree to receive our newsletter. We will not share your email with third parties. Unsubscribe at any time."
- Right to erasure: email replaced with SHA-256 hash. Event log retained for operational integrity.
- Right of access: export all subscriber data as JSON within 30 days.
- Data minimization: no name field, no location. IP hashed immediately.
- Pending subscriber cleanup: records with `status: "pending"` older than 7 days are deleted by scheduled job.
- Cookie: `toolkno_subscribed` (first-party, 365 days, functional — described in Privacy Policy).
- CAN-SPAM: every issue contains sender info, physical address, unsubscribe link.
- `List-Unsubscribe` header: complies with Google/Yahoo bulk sender requirements (2024).

---

## 16. Edge Cases

**EC-001:** Confirmation token expired (48h) → error page with re-subscribe option.

**EC-002:** Email client pre-fetches confirmation link → confirmation page renders intermediate UI requiring a POST before confirming (prevents accidental confirmation via pre-fetch).

**EC-003:** Subscriber unsubscribes during an active send → send job checks status per-subscriber at send time, skips if not confirmed.

**EC-004:** Gmail alias clash (`first.last@gmail.com` = `firstlast@gmail.com`) → normalized form used for deduplication.

**EC-005:** Send to empty list → exits cleanly, `status: "sent"`, `sentCount: 0`.

**EC-006:** Admin cancels send in progress → remaining `pending` sends marked `failed: "send_cancelled"`. Already-sent emails cannot be recalled.

**EC-007:** Resend API fails during send → sends marked `failed`, admin alerted via dashboard.

**EC-008:** Confirmation token already used → redirect to `/newsletter/confirmed` (idempotent, no error).

---

## 17. Error States

| Scenario | HTTP | Code | User message |
|---|---|---|---|
| Empty email | Client | — | "Please enter your email address." |
| Invalid format | Client | — | "Please enter a valid email address." |
| Disposable email | 422 | `DISPOSABLE_EMAIL` | "Please use a non-temporary email address." |
| Rate limit (IP) | 429 | `RATE_LIMIT_EXCEEDED` | "Too many requests. Please wait a moment and try again." |
| Server error | 500 | `INTERNAL_ERROR` | "Something went wrong. Please try again." |
| Network failure | — | — | "No connection. Please check your internet and try again." |
| Expired confirmation token | — | — | Page: "This link expired. Please re-subscribe." + form |
| Invalid confirmation token | — | — | Page: "This link is invalid. Please re-subscribe." + link |
| Invalid unsubscribe token | — | — | Page: enter email to receive management link |

---

## 18. Success Metrics

| Metric | 30-day | 90-day | 180-day |
|---|---|---|---|
| Subscriber confirmation rate | > 40% | > 50% | > 55% |
| Newsletter open rate | > 30% | > 35% | > 35% |
| Newsletter click rate | > 5% | > 8% | > 10% |
| Unsubscribe rate per issue | < 3% | < 2% | < 1.5% |
| Bounce rate | < 2% | < 1% | < 0.5% |
| Homepage → subscribe conversion | > 0.5% | > 1% | > 1.5% |
| Deliverability score (mail-tester.com) | 9/10 before first send | Maintain | Maintain |

---

## 19. Acceptance Criteria

**AC-001:** Full subscribe → confirm → welcome flow works end-to-end: form submit → email received < 2 min → confirmation click → `/newsletter/confirmed` → welcome email < 30 sec → `status: "confirmed"` in DB.

**AC-002:** Unsubscribe flow: click link → `/newsletter/unsubscribed` → `status: "unsubscribed"` in DB → no further emails.

**AC-003:** Resubscribe: "Resubscribe" on unsubscribed page → new confirmation → confirm → returning welcome email.

**AC-004:** Duplicate email: submit same email twice → one subscriber record → one confirmation email (second invalidates first).

**AC-005:** Rate limiting: 6th subscribe from same IP within 1 hour → 429 response.

**AC-006:** Resend webhook: invalid signature → 401, no processing. Valid webhook → correct DB update.

**AC-007:** Admin can create draft, send test (with "[TEST]" prefix), receive formatted email at test address.

**AC-008:** Admin can schedule and cancel before send. Issue returns to `draft`.

**AC-009:** Admin sends newsletter. Analytics dashboard shows sent count, open rate, click rate within 10 minutes.

**AC-010:** DKIM, SPF, DMARC verified. mail-tester.com score ≥ 9/10.

**AC-011:** `List-Unsubscribe` header present in sent newsletters. One-click Gmail unsubscribe works.

**AC-012:** All 10 client-side analytics events fire correctly.

**AC-013:** `/newsletter` is indexable, Lighthouse SEO ≥ 95. Confirmation/error/unsubscribed pages return `noindex`.

**AC-014:** Subscribe form: zero critical axe-core violations, keyboard-operable, error states announced via aria-live.

**AC-015:** Consent audit trail complete: `subscribedAt`, `confirmedAt`, `source`, IP hash, `SubscriberEvent` log with "subscribed" and "confirmed" events.

**AC-016:** Management link flow: enter email → receive link → click → preferences page → update frequency → unsubscribe.

**AC-017:** Disposable email blocklist rejects `test@mailinator.com`, `test@tempmail.com`, `test@guerrillamail.com`.

**AC-018:** Pending subscriber cleanup job deletes unconfirmed records older than 7 days.

---

## 20. Future Enhancements

**FE-001:** Content preference segmentation (tools updates, writing reviews, creator platform reviews).

**FE-002:** Newsletter archive at `/newsletter/issues/[slug]` — indexable web pages for each sent issue.

**FE-003:** Reader referral program — subscriber referral link, 5 confirmed referrals = early guide access.

**FE-004:** Public subscriber count API for social proof display.

**FE-005:** Welcome drip sequence (3 emails over 7 days instead of single welcome).

**FE-006:** Inactive re-engagement campaign (2 emails 30 days apart before auto-unsubscribe).

**FE-007:** Migration path to dedicated newsletter platform (Beehiiv/ConvertKit) at 10,000+ subscribers.

**FE-008:** Rich text newsletter editor replacing raw HTML textarea.

**FE-009:** A/B subject line testing with 4-hour winner determination.

---

## 21. Dependencies

| Dependency | Status | Blocking? |
|---|---|---|
| Resend API key + verified sending domain | Must configure | Yes |
| Prisma migrations (all 6 new models + User.role) | Not written | Yes |
| `/newsletter/confirmed` page | Not built | Yes |
| `/newsletter/confirm-error` page | Not built | Yes |
| `/newsletter/unsubscribed` page | Not built | Yes |
| `/newsletter` landing page | Not built | No — forms work first |
| `/admin/newsletter` UI | Not built | No — API can exist without UI |
| Cron infrastructure (scheduled sends, cleanup) | May not exist | Yes for scheduled sends |
| `RESEND_WEBHOOK_SECRET` env var | Not set | Yes |
| `NEWSLETTER_FROM_EMAIL` env var | Not set | Yes |

---

## 22. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Confirmation emails landing in spam | Medium | High | Configure DKIM/SPF/DMARC. Verify with mail-tester.com before first send. |
| Low confirmation rate (< 30%) | Medium | High | Show subscriber's email in pending message. Optimize confirmation email subject. |
| Admin triggers accidental send | Low | Very High | "Type SEND to confirm" dialog. Preview step showing recipient count. |
| Open tracking inaccuracy (Apple MPP) | High | Low | Document this. Use click rate as primary engagement signal. |
| Vercel function timeout during large sends | Medium | Medium | Batching with resumable job design — check pending `NewsletterSend` records on restart. |
| Bounce spike on first send | Medium | Medium | Confirmed double opt-in significantly reduces bounce risk. Resend webhook integration suppresses bounced addresses immediately. |

---

## 23. Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Initial PRD approved | Founder |
