import Link from "next/link";
import AdUnit from "@/components/layout/AdUnit";
import { tools } from "@/lib/tools";

const footerLinks = [
  { href: "/tools", label: "All Tools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/dmca", label: "DMCA" }
];

const popularSlugs = [
  "word-counter",
  "character-counter",
  "case-converter",
  "remove-extra-spaces",
  "remove-duplicate-lines",
  "text-compare-tool",
  "readability-checker",
  "lorem-ipsum-generator",
  "text-to-binary-converter",
  "text-to-speech"
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <AdUnit slot="4100011104" format="horizontal" className="mb-10" />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="font-heading text-2xl font-semibold text-white">
              Tool<span className="text-sky-400">kno</span>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Free online text tools for counting, converting, cleaning, sorting, analyzing, and transforming content directly in your browser.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Popular tools</p>
            <ul className="mt-4 grid gap-3">
              {popularSlugs
                .map((slug) => tools.find((tool) => tool.slug === slug))
                .filter(Boolean)
                .map((tool) => (
                  <li key={tool.slug}>
                    <Link href={`/tools/${tool.slug}`} className="text-sm text-slate-300 transition hover:text-sky-400">
                      {tool.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Links</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-sky-400">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700/60 pt-6 text-sm text-slate-500">
          &copy; 2026 Toolkno.com &mdash; Free Online Text Tools
        </div>
      </div>
    </footer>
  );
}
