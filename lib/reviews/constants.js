// Shared review constants (PRD-003 M13 — data foundation only).
// No business logic, no validation, no API. These mirror the Prisma enums and
// the PRD-003 thresholds so later milestones (M14 template, M17 admin) share a
// single source of truth instead of redefining values.

// Mirrors enum ReviewStatus in prisma/schema.prisma.
export const REVIEW_STATUSES = ["draft", "published", "archived"];

// Mirrors enum ReviewUpdateType in prisma/schema.prisma (Editorial Standards §8).
export const REVIEW_UPDATE_TYPES = [
  "correction",
  "verdict_change",
  "price_update",
  "feature_change",
  "audit",
];

// The nine mandated review sections (Editorial Standards §4; PRD-003 §8).
// `field` is the corresponding Review column; alternatives and updateHistory are
// stored in their own models (ReviewAlternative, ReviewUpdate).
export const REVIEW_SECTIONS = [
  { key: "verdict", field: "verdict", label: "Verdict", aboveFold: true },
  { key: "whoFor", field: "whoFor", label: "Who this review is for" },
  { key: "testing", field: "testingSummary", label: "What I tested and how" },
  { key: "whatWorks", field: "whatWorks", label: "What works" },
  { key: "whatDoesntWork", field: "whatDoesntWork", label: "What doesn't work", required: true },
  { key: "pricing", field: "pricingNotes", label: "Pricing" },
  { key: "alternatives", field: null, label: "Alternatives to consider" },
  { key: "verdictExpanded", field: "verdictExpanded", label: "The verdict, expanded" },
  { key: "updateHistory", field: null, label: "Update history" },
];

// Review section fields that must be non-empty to publish (PRD-003 PW-002.1).
export const REVIEW_REQUIRED_TEXT_FIELDS = [
  "verdict",
  "whoFor",
  "testingSummary",
  "whatWorks",
  "whatDoesntWork",
  "pricingNotes",
  "verdictExpanded",
  "excerpt",
];

// Publish-gate thresholds (Constitution Rule 1; Editorial Standards §1, §4.7).
export const MIN_TESTING_DAYS = 21;
export const MIN_ALTERNATIVES = 2;

// Slug format (PRD-003 FR-001 / PW-002.4; OS naming conventions).
export const REVIEW_SLUG_REGEX = /^[a-z0-9-]+$/;

// Public review URL base (OS content architecture).
export const REVIEW_URL_BASE = "/reviews";
