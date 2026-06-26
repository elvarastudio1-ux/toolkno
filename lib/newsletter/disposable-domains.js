/**
 * Known disposable email domains (FR-032).
 * PRD-002 AC-017 requires: mailinator.com, tempmail.com, guerrillamail.com.
 * Extended with additional common services to reduce junk signups.
 */
const DISPOSABLE_DOMAINS = new Set([
  // PRD-002 AC-017 required
  "mailinator.com",
  "tempmail.com",
  "guerrillamail.com",
  // Guerrilla Mail aliases
  "guerrillamail.info",
  "guerrillamail.biz",
  "guerrillamail.de",
  "guerrillamail.net",
  "guerrillamail.org",
  "guerrillamailblock.com",
  "grr.la",
  "sharklasers.com",
  "spam4.me",
  // Trash Mail
  "trashmail.com",
  "trashmail.me",
  "trashmail.net",
  "trashmail.at",
  "trashmail.io",
  "trashmail.org",
  // Yop Mail
  "yopmail.com",
  "yopmail.fr",
  // Misc common disposable services
  "throwaway.email",
  "throwam.com",
  "dispostable.com",
  "mailnull.com",
  "maildrop.cc",
  "mintemail.com",
  "jetable.fr.nf",
  "spamgourmet.com",
  "fakeinbox.com",
  "getairmail.com",
  "discard.email",
  "spamhereplease.com",
  "spamherelots.com",
  "10minutemail.com",
  "10minutemail.net",
  "tempinbox.com",
  "emailondeck.com",
  "mailexpire.com",
  "getnada.com",
  "filzmail.com",
  "spambox.us",
  "nwytg.com",
  "crazymailing.com",
  "mohmal.com",
]);

/**
 * Returns true if the email address uses a known disposable domain.
 * @param {string} email — must be pre-lowercased
 */
export function isDisposableEmail(email) {
  const atIndex = email.indexOf("@");
  if (atIndex < 0) return false;
  const domain = email.slice(atIndex + 1);
  return DISPOSABLE_DOMAINS.has(domain);
}
