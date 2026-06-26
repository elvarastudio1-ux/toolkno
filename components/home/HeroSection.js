import Link from "next/link";
import HeaderSearch from "@/components/layout/HeaderSearch";

const defaultTrustIndicators = [
  "60+ live free tools",
  "Reviews, comparisons, and practical guides",
  "Clear, ethical recommendations"
];

const defaultQuickStartLinks = [
  { label: "Word Counter", href: "/tools/word-counter" },
  { label: "Character Counter", href: "/tools/character-counter" },
  { label: "Text Compare", href: "/tools/text-compare-tool" },
  { label: "Readability Checker", href: "/tools/readability-checker" }
];

const defaultPathways = [
  { label: "Reviews", href: "/about#reviews" },
  { label: "Comparisons", href: "/about#comparisons" },
  { label: "AI Tools", href: "/about#ai-tools" },
  { label: "Free Tools", href: "/tools" }
];

export default function HeroSection({
  eyebrow = "Trusted software intelligence",
  title = "Free tools for today’s task. Trusted guidance for what comes next.",
  description = "ToolKno helps you solve quick software tasks with free browser tools, then go deeper with reviews, comparisons, and practical guidance that make software decisions easier.",
  primaryAction = { label: "Explore Reviews", href: "/about#reviews" },
  secondaryAction = { label: "Browse Free Tools", href: "/tools" },
  trustIndicators = defaultTrustIndicators,
  quickStartLinks = defaultQuickStartLinks,
  pathways = defaultPathways,
  utilityPanelTitle = "Search or jump in",
  utilityPanelDescription = "Start with a quick search, a popular free tool, or one of ToolKno’s main content paths."
}) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl"
          >
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">{description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={primaryAction.href}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              {primaryAction.label}
            </Link>
            <Link
              href={secondaryAction.href}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-sky-500 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              {secondaryAction.label}
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3" aria-label="Hero trust indicators">
            {trustIndicators.map((indicator) => (
              <li key={indicator} className="text-sm text-slate-500">
                <span className="font-semibold text-slate-900">{indicator}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-labelledby="hero-utility-heading"
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8"
        >
          <h2 id="hero-utility-heading" className="font-heading text-2xl font-bold text-text">
            {utilityPanelTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">{utilityPanelDescription}</p>

          <div className="mt-6">
            <HeaderSearch mobile />
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Popular quick starts</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {quickStartLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-sky-400 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <nav aria-label="Explore ToolKno pathways" className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Explore pathways</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {pathways.map((pathway) => (
                <li key={pathway.label}>
                  <Link
                    href={pathway.href}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-sky-400 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                  >
                    <span>{pathway.label}</span>
                    <span aria-hidden="true" className="text-sky-500">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </section>
  );
}
