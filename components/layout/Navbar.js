"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderSearch from "@/components/layout/HeaderSearch";

const navLinks = [
  { href: "/", label: "Home", matchers: ["/"] },
  { href: "/tools", label: "All Tools", matchers: ["/tools"] },
  { href: "/pricing", label: "Pricing", matchers: ["/pricing"] }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActiveLink(link) {
    return link.matchers.some((matcher) => pathname === matcher || pathname.startsWith(`${matcher}/`));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="ToolKno home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500 font-heading text-sm font-bold text-white">
            Tk
          </div>
          <div className="font-heading text-xl font-semibold tracking-tight text-slate-900">
            Tool<span className="text-sky-500">kno</span>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={isActiveLink(link) ? "page" : undefined}
              className={`text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                isActiveLink(link) ? "text-sky-600" : "text-slate-500 hover:text-sky-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <HeaderSearch />
          <Link
            href="/tools"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-green-500 px-4 text-sm font-semibold text-white transition hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            Get Started Free
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-sky-500 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-primary-navigation"
        >
          <span className="text-xl leading-none">{open ? "X" : "="}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav id="mobile-primary-navigation" aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            <HeaderSearch mobile />
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActiveLink(link) ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  isActiveLink(link) ? "bg-sky-50 text-sky-600" : "text-slate-600 hover:bg-slate-100 hover:text-sky-500"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tools"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-lg bg-green-500 px-4 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            >
              Get Started Free
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
