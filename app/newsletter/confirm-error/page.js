import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return buildMetadata({
    title: "Confirmation Failed",
    description: "Your ToolKno newsletter confirmation link is invalid or has expired.",
    path: "/newsletter/confirm-error",
    noIndex: true,
  });
}

const MESSAGES = {
  expired: {
    heading: "This link has expired.",
    body: "Confirmation links are valid for 48 hours. Submit your email again below to receive a fresh link.",
    cta: "Re-subscribe",
  },
  invalid: {
    heading: "This link is invalid.",
    body: "The confirmation link may have been copied incorrectly or has already been used. Submit your email again to receive a new link.",
    cta: "Try again",
  },
};

export default async function ConfirmErrorPage({ searchParams }) {
  const params = await searchParams;
  const reason = params?.reason === "expired" ? "expired" : "invalid";
  const { heading, body, cta } = MESSAGES[reason];

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <div
            aria-hidden="true"
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-50"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <h1 className="font-heading text-2xl font-bold text-slate-900">
            {heading}
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">{body}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/#newsletter"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              {cta}
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
