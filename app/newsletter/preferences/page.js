import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { validateManagementToken } from "@/lib/newsletter/management-token";
import PreferencesForm from "@/components/newsletter/PreferencesForm";
import RequestManagementLinkForm from "@/components/newsletter/RequestManagementLinkForm";

export function generateMetadata() {
  return buildMetadata({
    title: "Manage Subscription",
    description: "Update your ToolKno newsletter preferences or unsubscribe.",
    path: "/newsletter/preferences",
    noIndex: true,
  });
}

const TOKEN_REGEX = /^[a-f0-9]{64}$/;

function maskEmail(email) {
  const at = email.indexOf("@");
  if (at < 1) return "***@***";
  const local = email.slice(0, at);
  const domain = email.slice(at);
  const visible =
    local.length <= 2
      ? local[0] + "*"
      : local[0] + "*".repeat(Math.max(1, local.length - 2)) + local[local.length - 1];
  return `${visible}${domain}`;
}

export default async function PreferencesPage({ searchParams }) {
  const params = await searchParams;
  const token = String(params?.token ?? "").trim();

  if (!token || !TOKEN_REGEX.test(token)) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
        <div className="mx-auto w-full max-w-md">
          <RequestManagementLinkForm />
        </div>
      </main>
    );
  }

  const record = await validateManagementToken(token);

  if (!record) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
            <div
              aria-hidden="true"
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h1 className="font-heading text-2xl font-bold text-slate-900">Link expired.</h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              This management link has expired or already been used. Management links are valid
              for 4 hours.
            </p>
            <div className="mt-8">
              <Link
                href="/newsletter/preferences"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                Request a new link
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const { subscriber } = record;

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <PreferencesForm
          token={token}
          emailMasked={maskEmail(subscriber.email)}
          status={subscriber.status}
          frequency={subscriber.frequency}
        />
      </div>
    </main>
  );
}
