"use client";

import Link from "next/link";
import { track, EVENTS } from "@/lib/analytics";

export default function FeaturedToolsGrid({ featured }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {featured.map(({ tool, useCase }) => (
        <Link
          key={tool.slug}
          href={`/tools/${tool.slug}`}
          onClick={() => track(EVENTS.FEATURED_TOOL_CLICK, { slug: tool.slug })}
          className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">Use case</div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{useCase}</p>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-heading text-lg font-semibold text-slate-900">{tool.name}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500 transition group-hover:translate-x-1">
              Try free →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
