import { getToolContent } from "@/lib/tools";

export default function ToolInfoSections({ slug }) {
  const tool = getToolContent(slug);

  if (!tool) return null;

  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <h2 className="font-heading text-3xl font-bold text-text">How to Use This {tool.name}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {tool.howToUse.map((item, index) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Step {index + 1}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <h2 className="font-heading text-3xl font-bold text-text">What Is {tool.name}?</h2>
        <div className="mt-6 space-y-4 text-sm leading-8 text-muted">
          {tool.whatIs.split(/\n\s*\n/).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <h2 className="font-heading text-3xl font-bold text-text">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {tool.faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-text">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
              {faq.tip ? (
                <p className="mt-3 rounded-lg border border-sky-100 bg-sky-50 px-3 py-2 text-xs leading-6 text-sky-700">
                  <span className="font-semibold">Tip:</span> {faq.tip}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
