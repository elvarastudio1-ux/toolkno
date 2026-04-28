import clsx from "clsx";

export default function Badge({ children, tone = "default" }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
        tone === "accent"
          ? "border-green-200 bg-green-50 text-green-700"
          : tone === "warning"
            ? "border-amber-200 bg-amber-50 text-amber-700"
            : tone === "blue"
              ? "border-sky-200 bg-sky-50 text-sky-700"
              : "border-slate-200 bg-white text-slate-700"
      )}
    >
      {children}
    </span>
  );
}
