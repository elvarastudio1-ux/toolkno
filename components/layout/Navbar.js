"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "All Tools" },
  { href: "/pricing", label: "Pricing" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500 font-heading text-sm font-bold text-white">
            Tk
          </div>
          <div className="font-heading text-xl font-semibold tracking-tight text-slate-900">
            Tool<span className="text-sky-500">kno</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-500 transition hover:text-sky-500">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/tools"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-green-500 px-4 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            Get Started Free
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-sky-500 hover:text-sky-500 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="text-xl leading-none">{open ? "X" : "="}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-sky-500"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tools"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-lg bg-green-500 px-4 text-sm font-semibold text-white"
            >
              Get Started Free
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
