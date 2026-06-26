/**
 * Server-side email format validation (FR-029).
 * Mirrors the client-side check in NewsletterSignup.js — both must agree.
 * Returns true if the email passes all format checks.
 */
export function isValidEmailFormat(email) {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim();
  if (trimmed.length > 254) return false;
  const atIndex = trimmed.indexOf("@");
  if (atIndex < 1) return false;
  const domain = trimmed.slice(atIndex + 1);
  if (!domain || !domain.includes(".")) return false;
  return true;
}
