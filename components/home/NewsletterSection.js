import NewsletterSignup from "@/components/home/NewsletterSignup";

// State A: renders when no published editorial content exists (FR-013).
// When editorial content exists (State B), the heading copy updates to reflect subscriber count.
// No architectural change is needed for that transition — only the copy prop changes.
export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Newsletter</p>
        <h2
          id="newsletter-heading"
          className="mt-3 font-heading text-2xl font-bold text-text sm:text-3xl"
        >
          Get notified when we publish our first honest software review.
        </h2>
        <div className="mt-6">
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
}
