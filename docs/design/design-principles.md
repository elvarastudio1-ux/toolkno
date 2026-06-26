---
title: Design Principles
version: 1.0.0
status: approved
owner: Founder
last_updated: 2026-06-26
related_documents:
  - ../operating-system/toolkno-os.md
  - ../prd/PRD-001-homepage.md
---

# Design Principles

---

## 1. Core Visual Philosophy

ToolKno's visual design communicates two things: competence and honesty. Competence through consistency, precision, and visual clarity. Honesty through restraint — no decorative elements that overstate what the product does, no imagery that sets false expectations.

**The design serves the content.** On a tool page, the design serves the tool. On a review page, the design serves the editorial content. The design is never a destination in itself.

---

## 2. Tailwind Design Tokens

All styling uses the semantic Tailwind tokens defined in the project configuration. Do not use arbitrary values (`text-[#3b82f6]`) when a semantic token exists.

### Color System

| Token | Usage | Example element |
|---|---|---|
| `text-slate-900` | Primary headings, high-emphasis text | H1, H2, body strong |
| `text-slate-500` | Body text, supporting copy | Paragraphs, descriptions |
| `text-slate-400` | Muted labels, metadata | Dates, secondary labels |
| `text-sky-500` | Accent, interactive, brand | Links, CTAs, badges |
| `text-sky-100` | Inverted text on sky background | Text on sky CTA banner |
| `bg-white` | Primary surface | Cards, page background |
| `bg-slate-50` | Secondary surface | Info panels, feature strips |
| `bg-sky-500` | Primary CTA background | Hero button, bottom banner |
| `border-slate-200` | Default border | Cards, inputs |
| `text-green-700` / `bg-green-50` | Status badge (positive) | "Free" badge, "Verified" |
| `text-warning` | Warning accent | Custom semantic token |
| `text-accent` | Brand accent | Custom semantic token (maps to sky-500) |
| `text-muted` | Muted text | Custom semantic token (maps to slate-500) |
| `text-text` | Primary text | Custom semantic token (maps to slate-900) |
| `bg-surface` | Surface background | Custom semantic token (maps to white) |

### Typography Scale

| Usage | Tailwind class | Notes |
|---|---|---|
| Page H1 (hero) | `text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-tight` | |
| Page H1 (editorial) | `text-3xl sm:text-4xl font-bold` | |
| Section H2 | `text-3xl sm:text-4xl font-bold` | |
| Card heading | `text-lg font-semibold` or `text-xl font-bold` | |
| Body paragraph | `text-sm leading-7` or `text-base leading-7` | |
| Label / eyebrow | `text-xs uppercase tracking-[0.2em]` | |
| Small muted | `text-xs text-slate-400` or `text-slate-500` | |
| CTA button text | `text-sm font-semibold` | |

### Spacing

- Section padding: `py-10 sm:py-12 px-4 sm:px-6 lg:px-8`
- Max width: `max-w-7xl mx-auto`
- Card padding: `p-6` (compact) or `p-8 sm:p-12` (featured)
- Card border radius: `rounded-xl` (small), `rounded-2xl` (medium), `rounded-[2rem]` (feature)
- Gap between grid items: `gap-5`

---

## 3. Component Visual Patterns

### Cards

Standard card:
```
rounded-2xl border border-slate-200 bg-white p-6
```

Feature card:
```
rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-12
```

Hover state on linked cards:
```
transition hover:border-sky-400
```

Cards do not have drop shadows by default. Shadow is used only when a card floats above page content (modals, dropdowns).

### Buttons

Primary CTA:
```
inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600
```

Secondary / ghost:
```
inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-sky-500 hover:text-sky-500
```

There are exactly two button styles in ToolKno. Any variation is added here before being used in a component.

### Eyebrow Labels

Every major section has an eyebrow label above the heading:
```
text-xs uppercase tracking-[0.2em] text-accent
```

The eyebrow label is a short phrase (2–4 words) that contextualizes the section. It is not the heading — it precedes the heading.

---

## 4. Trust Signals

Trust signals communicate ToolKno's editorial and product commitments in verifiable, specific language.

**Permitted trust signals:**
- "60+ free tools" — verifiable by visiting /tools
- "Your text never leaves your device" — verifiable by inspecting network requests
- "No signup required" — verifiable by using any tool
- "Tested for [X] weeks" — verifiable via the methodology page
- "Affiliate disclosure on every recommendation" — verifiable by reading any editorial article

**Not permitted:**
- "Trusted by X users/writers/professionals" — unless the number is accurate and current and can be verified
- Stock photography of "real users"
- Generic badges ("Editor's Choice," "Top Rated") without a specific source
- Countdown timers on pricing
- "Limited time offer" without a genuine end date

---

## 5. Form Design

Forms on ToolKno follow these rules:

- Labels are visible and above the input. Placeholder text is not a label substitute.
- Error messages appear below the input, in `text-sm text-red-500`.
- Success states replace the form in-place (no page reload).
- Loading states disable the submit button and show a visual indicator.
- Required fields are not labelled with asterisks — if everything in the form is required, nothing needs a special marker.
- One form, one primary action. If a form has two submit buttons with different actions, it is two forms.

---

## 6. Email Template Design

Email templates follow a constrained set of design rules because email clients are not browsers:

- Max width 600px, centered.
- No web fonts. System font stack only.
- No CSS Grid or Flexbox. Use table-based layout for email clients that require it.
- No background images.
- All links are underlined in the ToolKno accent color.
- The unsubscribe link in the footer is always the lowest-contrast element — never hidden, but not competing with the primary content.
- Every email template is tested in Gmail (Web), Apple Mail, and Outlook Web before going to production.

---

## 7. Accessibility Design Standards

- Color contrast: all text meets WCAG AA (4.5:1 for body text, 3:1 for large text)
- Focus states: all interactive elements have a visible focus ring. Do not use `outline: none` without replacing it with an equivalent visual indicator.
- Touch targets: all interactive elements on mobile are at least 44×44px
- Motion: no autoplay animations that last more than 3 seconds. Respect `prefers-reduced-motion`.
- Images: all images have descriptive `alt` text. Decorative images have empty `alt=""`.

---

## Change History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Initial design principles established | Founder |
