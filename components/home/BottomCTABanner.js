"use client";

import Link from "next/link";
import { track, EVENTS } from "@/lib/analytics";

export default function BottomCTABanner() {
  return (
    <div className="flex flex-col items-center gap-5 rounded-2xl bg-sky-500 px-6 py-12 text-center sm:flex-row sm:justify-between sm:px-12 sm:text-left">
      <div>
        <h2 className="font-heading text-[22px] font-semibold text-white">Pick a tool. Get back to work.</h2>
        <p className="mt-1 text-sm text-sky-100">60 free tools. No signup. Your text never leaves your browser.</p>
      </div>
      <Link
        href="/tools"
        onClick={() => track(EVENTS.BOTTOM_CTA_CLICK)}
        className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-sky-500 transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-500"
      >
        Browse all tools →
      </Link>
    </div>
  );
}
