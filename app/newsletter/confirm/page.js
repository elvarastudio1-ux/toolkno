import { redirect } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return buildMetadata({
    title: "Confirm Your Subscription",
    description: "Confirm your ToolKno newsletter subscription.",
    path: "/newsletter/confirm",
    noIndex: true,
  });
}

// 64-char lowercase hex — matches generateToken() output
const TOKEN_REGEX = /^[a-f0-9]{64}$/;

export default async function ConfirmPage({ searchParams }) {
  const params = await searchParams;
  const token = String(params?.token ?? "").trim();

  // If the token is missing or clearly malformed, go straight to the error page
  if (!token || !TOKEN_REGEX.test(token)) {
    redirect("/newsletter/confirm-error?reason=invalid");
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
          <div
            aria-hidden="true"
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>

          <h1 className="font-heading text-2xl font-bold text-slate-900">
            One click to confirm
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Click the button below to confirm your subscription to the ToolKno
            newsletter. You&rsquo;ll only receive honest software takes and
            workflow guides — no spam, no promotional blasts.
          </p>

          {/*
            Plain HTML form — no JavaScript required.
            POST to /api/newsletter/confirm with the token as a hidden field.
            Prevents email client pre-fetch from auto-confirming (EC-002).
          */}
          <form
            method="POST"
            action="/api/newsletter/confirm"
            className="mt-8"
          >
            <input type="hidden" name="token" value={token} />
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-sky-500 px-6 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Confirm my subscription
            </button>
          </form>

          <p className="mt-5 text-xs text-slate-400">
            Changed your mind? Simply ignore this page — you won&rsquo;t be
            subscribed.
          </p>
        </div>
      </div>
    </main>
  );
}
