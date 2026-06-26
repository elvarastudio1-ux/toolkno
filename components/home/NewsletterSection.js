import NewsletterSignup from "@/components/home/NewsletterSignup";

const defaultBenefits = [
  "Weekly software recommendations",
  "Honest reviews and comparisons",
  "AI tool discoveries",
  "Practical workflow guides"
];

export default function NewsletterSection({
  title = "Newsletter",
  description = "Get a steady stream of practical software insights, useful discoveries, and thoughtful guidance from ToolKno without the noise of a sales funnel.",
  benefits = defaultBenefits,
  trustNote = "No spam. Unsubscribe anytime. We respect your inbox."
}) {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8"
    >
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Relationship layer</p>
        <h2 id="newsletter-heading" className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted">{description}</p>

        <div className="mx-auto mt-8 max-w-2xl">
          <NewsletterSignup />
        </div>

        <p className="mt-2 text-sm text-slate-500">{trustNote}</p>

        <ul className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-2" aria-label="Newsletter benefits">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
