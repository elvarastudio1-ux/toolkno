import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { getCategoryLabel } from "@/lib/tools";

const categoryColors = {
  counters: "bg-sky-50 text-sky-500",
  case: "bg-green-50 text-green-500",
  remove: "bg-red-50 text-red-500",
  generators: "bg-amber-50 text-amber-500",
  sort: "bg-purple-50 text-purple-500",
  split: "bg-purple-50 text-purple-500",
  developer: "bg-indigo-50 text-indigo-500",
  analyze: "bg-teal-50 text-teal-500",
  privacy: "bg-rose-50 text-rose-500",
  utilities: "bg-slate-100 text-slate-500",
  audio: "bg-fuchsia-50 text-fuchsia-500"
};

export default function ToolCard({ tool, compact = false }) {
  const iconClass = categoryColors[tool.category] || "bg-sky-50 text-sky-500";

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-sky-400"
    >
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg font-heading text-lg font-bold ${iconClass}`}>
          {tool.icon}
        </div>
        <Badge tone="accent">FREE</Badge>
      </div>
      <h3 className="mt-4 text-[13px] font-medium text-slate-900">{tool.name}</h3>
      <p className={`mt-1.5 text-[11px] leading-5 text-slate-400 ${compact ? "min-h-[2.5rem]" : ""}`}>
        {tool.description}
      </p>
      <div className="mt-4 flex items-center justify-between gap-4">
        <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {getCategoryLabel(tool.category)}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-500 transition group-hover:translate-x-1">Open</span>
      </div>
    </Link>
  );
}
