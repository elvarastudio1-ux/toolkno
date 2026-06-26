import Link from "next/link";

export default function EditorialCard({ type, title, summary, publishedAt, href }) {
  return (
    <article className="h-full">
      <Link
        href={href}
        className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">{type}</span>
          {publishedAt ? (
            <time
              dateTime={new Date(publishedAt).toISOString().split("T")[0]}
              className="text-xs text-slate-400"
            >
              {new Date(publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </time>
          ) : null}
        </div>
        <h3 className="mt-4 font-heading text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
          Read
          <span aria-hidden="true" className="transition group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </Link>
    </article>
  );
}
