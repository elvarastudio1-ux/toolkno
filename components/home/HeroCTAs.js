"use client";

import Link from "next/link";
import { track, EVENTS } from "@/lib/analytics";

export default function HeroCTAs() {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <Link
        href="/tools/word-counter"
        onClick={() => track(EVENTS.HERO_CTA_CLICK, { cta: "primary" })}
        className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      >
        Try Word Counter — free
      </Link>
      <Link
        href="/tools"
        onClick={() => track(EVENTS.HERO_CTA_CLICK, { cta: "secondary" })}
        className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-sky-500 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      >
        Browse all 60 tools
      </Link>
    </div>
  );
}
