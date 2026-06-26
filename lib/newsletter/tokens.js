import { randomBytes } from "crypto";

/**
 * Generates a secure 64-character hex token (FR-007).
 * crypto.randomBytes(32) produces 32 bytes → 64 hex chars.
 */
export function generateToken() {
  return randomBytes(32).toString("hex");
}

/**
 * Returns a Date that is `hours` hours from now.
 * Used to set SubscriberToken.expiresAt (default 48h per FR-007).
 */
export function tokenExpiresAt(hours = 48) {
  const d = new Date();
  d.setHours(d.getHours() + hours);
  return d;
}
