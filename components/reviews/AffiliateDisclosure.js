import Link from "next/link";

// Affiliate disclosure (Constitution Rule 2; Editorial Standards §7; PRD-003 §18).
// The affiliate registry is the source of truth for disclosures.

// Inline marker rendered beside an individual affiliate link (AD-003).
export function InlineAffiliateMarker() {
  return (
    <span className="text-xs text-slate-500">
      {" "}
      (affiliate link &mdash; ToolKno earns a commission if you purchase through this link)
    </span>
  );
}

// Article-level disclosure rendered at the top of a review, before the first
// affiliate link (AD-002). Exact language per Editorial Standards §7.
export default function AffiliateDisclosure() {
  return (
    <aside
      aria-label="Affiliate disclosure"
      className="mt-6 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
    >
      ToolKno earns a commission if you purchase products through some links in this article.
      This does not affect which products we recommend or how we evaluate them. See our{" "}
      <Link
        href="/affiliate-registry"
        className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      >
        affiliate registry
      </Link>
      .
    </aside>
  );
}
