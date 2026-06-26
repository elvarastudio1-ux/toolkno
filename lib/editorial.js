// Returns the most recent published editorial items for the homepage (FR-025).
//
// State A (current): returns [] — editorial section does not render (FR-024).
// State B (PRD-003): this function is updated to query the database; page.js
// becomes async at that point. No other homepage code changes are needed.
//
// Each item shape expected by EditorialCard:
//   { id, type, title, summary, publishedAt, href }
//   type: "Review" | "Comparison" | "Buying Guide"
export function getRecentEditorialItems() {
  return [];
}
