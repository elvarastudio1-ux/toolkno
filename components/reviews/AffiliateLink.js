"use client";

import { track, EVENTS } from "@/lib/analytics";
import { InlineAffiliateMarker } from "@/components/reviews/AffiliateDisclosure";

// Reusable outbound affiliate link for review content (PRD-003 AD-003 + AN-003).
// Renders the link, the inline disclosure marker beside it (Constitution Rule 2),
// and fires review_affiliate_click on click. This is the single mechanism for
// affiliate links inside reviews — disclosure and tracking cannot be separated.
//
// Not yet mounted: the M14 review template renders body sections as plain text,
// so there are no outbound affiliate links to wrap until review content does so.
// Kept isolated and reusable for that point.
export default function AffiliateLink({ href, product, slug, children }) {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        onClick={() => track(EVENTS.REVIEW_AFFILIATE_CLICK, { product, slug, href })}
        className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      >
        {children}
      </a>
      <InlineAffiliateMarker />
    </>
  );
}
