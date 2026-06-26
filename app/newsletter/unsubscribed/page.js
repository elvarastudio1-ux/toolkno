import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return buildMetadata({
    title: "Unsubscribed",
    description: "You have been unsubscribed from the ToolKno newsletter.",
    path: "/newsletter/unsubscribed",
    noIndex: true,
  });
}

export default async function UnsubscribedPage({ searchParams }) {
  const params = await searchParams;
  const hasError = params?.error === "invalid";

  if (hasError) {
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
              Invalid link.
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              This unsubscribe link is invalid or has already been used. If you
              are still receiving emails, contact us at{" "}
              <a
                href="mailto:hello@toolkno.com"
                className="text-sky-600 hover:underline"
              >
                hello@toolkno.com
              </a>
              .
            </p>
            <div className="mt-8">
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

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <div
            aria-hidden="true"
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-slate-50"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">
            You&rsquo;re unsubscribed.
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            You&rsquo;ve been removed from the ToolKno newsletter. You
            won&rsquo;t receive any further issues.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Changed your mind? You can resubscribe at any time.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/#newsletter"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Resubscribe
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
