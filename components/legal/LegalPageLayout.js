export default function LegalPageLayout({ eyebrow, title, intro, sections }) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-[#f0ede6] sm:text-5xl">{title}</h1>
        <p className="mt-6 text-base leading-8 text-slate-500">{intro}</p>
      </section>

      <div className="mt-8 space-y-6">
        {sections.map((section) => (
          <section key={section.heading} className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold text-[#f0ede6]">{section.heading}</h2>
            {section.subheading ? <h3 className="mt-4 text-lg font-semibold text-[#5DCAA5]">{section.subheading}</h3> : null}
            {section.body?.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-8 text-slate-500">
                {paragraph}
              </p>
            ))}
            {section.list?.length ? (
              <ul className="mt-4 space-y-2 text-sm leading-8 text-slate-500">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
