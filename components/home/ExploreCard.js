import Link from "next/link";

export default function ExploreCard({
  title,
  description,
  href,
  ctaLabel
}) {
  return (
    <article className="h-full">
      <Link
        href={href}
        className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      >
        <h3 className="font-heading text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
          {ctaLabel}
          <span aria-hidden="true" className="transition group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </Link>
    </article>
  );
}
