// Shared editorial section card. Used by /methodology and /affiliate-registry.
// Pure presentational server component — zero client JavaScript.
export default function ProseSection({ id, eyebrow, title, children }) {
  const headingId = `${id}-heading`;
  return (
    <section
      aria-labelledby={headingId}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="mt-3 font-heading text-2xl font-bold text-slate-900 sm:text-3xl"
      >
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">{children}</div>
    </section>
  );
}
