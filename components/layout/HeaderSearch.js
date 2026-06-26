"use client";

export default function HeaderSearch({ mobile = false }) {
  return (
    <button
      type="button"
      aria-label="Search software, AI tools, guides, and free tools"
      aria-disabled="true"
      className={`inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-500 transition hover:border-sky-400 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
        mobile ? "w-full justify-start px-3 py-2.5" : "h-10 px-3"
      }`}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4 shrink-0"
      >
        <circle cx="8.5" cy="8.5" r="5.25" />
        <path d="M12.5 12.5 16.25 16.25" strokeLinecap="round" />
      </svg>
      <span className={mobile ? "" : "hidden lg:inline"}>Search software, AI tools, guides...</span>
      {!mobile ? <span className="lg:hidden">Search</span> : null}
    </button>
  );
}
