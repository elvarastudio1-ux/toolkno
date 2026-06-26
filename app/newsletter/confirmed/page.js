import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import ConfirmSuccessTracker from "@/components/newsletter/ConfirmSuccessTracker";

export function generateMetadata() {
  return buildMetadata({
    title: "You're Subscribed",
    description: "Your ToolKno newsletter subscription is confirmed.",
    path: "/newsletter/confirmed",
    noIndex: true,
  });
}

export default function ConfirmedPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      {/* Fires newsletter_confirm_success analytics event on mount */}
      <ConfirmSuccessTracker />

      <div className="mx-auto w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <div
            aria-hidden="true"
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-50"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="font-heading text-2xl font-bold text-slate-900">
            You&rsquo;re subscribed.
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Your subscription is confirmed. A welcome email is on its way to
            your inbox — check your spam folder if it doesn&rsquo;t arrive
            within a few minutes.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            The next issue goes out within the next two weeks. Until then,
            explore the free tools below.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/tools"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Browse all tools
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
