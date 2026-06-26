/**
 * Normalises an email address for deduplication (FR-030).
 * - Lowercases the full address.
 * - For Gmail/Googlemail: strips dots and plus-tags from the local part.
 *   Example: F.o+tag@gmail.com → fo@gmail.com
 * The raw submitted address (not the normalised form) is stored as `email`.
 * The normalised form is stored as `emailNormalized` and used for uniqueness.
 */
export function normaliseEmail(email) {
  const lower = email.trim().toLowerCase();
  const atIndex = lower.indexOf("@");
  if (atIndex < 1) return lower;

  const local = lower.slice(0, atIndex);
  const domain = lower.slice(atIndex + 1);

  if (domain === "gmail.com" || domain === "googlemail.com") {
    const dedotted = local.replace(/\./g, "").split("+")[0];
    return `${dedotted}@${domain}`;
  }

  return lower;
}
