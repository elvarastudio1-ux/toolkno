export default function TrustCard({
  icon = "TR",
  title,
  description
}) {
  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-500">
        <span aria-hidden="true">{icon}</span>
      </div>
      <h3 className="mt-5 font-heading text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
    </article>
  );
}
