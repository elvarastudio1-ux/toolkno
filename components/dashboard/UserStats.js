export default function UserStats({ stats }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-[2rem] border border-slate-200 bg-surface p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">{stat.label}</p>
          <p className="mt-3 font-heading text-3xl font-bold text-text">{stat.value}</p>
          <p className="mt-2 text-sm text-muted">{stat.helper}</p>
        </div>
      ))}
    </section>
  );
}
