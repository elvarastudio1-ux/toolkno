import { getToolContent } from "@/lib/tools";

export default function ToolInfoSections({ slug }) {
  const tool = getToolContent(slug);

  if (!tool) return null;

  return (
    <div className="space-y-10">
      {/* What is / Intro */}
      <section className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <h2 className="font-heading text-3xl font-bold text-text">What is {tool.name}?</h2>
        <div className="mt-6 space-y-4 text-sm leading-8 text-muted">
          {tool.whatIs.split(/\n\s*\n/).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <h2 className="font-heading text-3xl font-bold text-text">How to use {tool.name}</h2>
        <p className="mt-2 text-sm text-muted">Four steps. No setup, no signup.</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {tool.howToUse.map((item, index) => (
            <li key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Step {index + 1}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Example */}
      {tool.example ? (
        <section className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
          <h2 className="font-heading text-3xl font-bold text-text">Example</h2>
          <p className="mt-2 text-sm text-muted">{tool.example.caption || "See exactly what this tool does."}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Input</p>
              <pre className="mt-3 whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">{tool.example.input}</pre>
            </div>
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-600">Output</p>
              <pre className="mt-3 whitespace-pre-wrap break-words text-sm leading-6 text-sky-900">{tool.example.output}</pre>
            </div>
          </div>
        </section>
      ) : null}

      {/* Benefits */}
      {tool.benefits && tool.benefits.length ? (
        <section className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
          <h2 className="font-heading text-3xl font-bold text-text">Why {tool.name} is useful</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {tool.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-600">✓</span>
                <p className="text-sm leading-6 text-slate-700">{benefit}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <h2 className="font-heading text-3xl font-bold text-text">Common questions</h2>
        <div className="mt-6 space-y-4">
          {tool.faqs.slice(0, 4).map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-text">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{faq.answer}</p>
              {faq.tip ? (
                <p className="mt-3 rounded-lg border border-sky-100 bg-sky-50 px-3 py-2 text-xs leading-6 text-sky-700">
                  <span className="font-semibold">Tip:</span> {faq.tip}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <p className="text-center text-xs text-slate-400">
        Last reviewed: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })} · Free, browser-based, no signup.
      </p>
    </div>
  );
}
