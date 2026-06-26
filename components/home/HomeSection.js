import Link from "next/link";

export default function HomeSection({
  id,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  className = ""
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mb-8">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        ) : null}
        <h2 id={headingId} className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{description}</p>
        ) : null}
        {primaryAction || secondaryAction ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {primaryAction ? (
              <Link
                href={primaryAction.href}
                className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                {primaryAction.label}
              </Link>
            ) : null}
            {secondaryAction ? (
              <Link
                href={secondaryAction.href}
                className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-sky-500 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
      {children}
    </section>
  );
}
