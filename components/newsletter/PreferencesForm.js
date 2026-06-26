"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { track, EVENTS } from "@/lib/analytics";

const FREQUENCY_OPTIONS = [
  {
    value: "every_issue",
    label: "Every issue",
    description: "Receive each issue as it's published — about twice a month.",
  },
  {
    value: "digest_only",
    label: "Digest only",
    description: "Receive a monthly digest summarising recent issues.",
  },
];

export default function PreferencesForm({ token, emailMasked, status, frequency: initialFrequency }) {
  const router = useRouter();
  const [frequency, setFrequency] = useState(initialFrequency ?? "every_issue");
  const [freqStatus, setFreqStatus] = useState("idle"); // "idle" | "saving" | "saved" | "error"
  const [unsubStatus, setUnsubStatus] = useState("idle"); // "idle" | "loading" | "error"

  useEffect(() => {
    track(EVENTS.NEWSLETTER_PREFERENCES_VIEW);
  }, []);

  async function handleFrequencyChange(newFrequency) {
    if (newFrequency === frequency || freqStatus === "saving") return;
    setFreqStatus("saving");

    try {
      const res = await fetch("/api/newsletter/preferences", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, frequency: newFrequency }),
      });

      if (res.ok) {
        setFrequency(newFrequency);
        setFreqStatus("saved");
        track(EVENTS.NEWSLETTER_PREFERENCES_UPDATE, { field: "frequency", value: newFrequency });
        setTimeout(() => setFreqStatus("idle"), 2000);
      } else {
        setFreqStatus("error");
      }
    } catch {
      setFreqStatus("error");
    }
  }

  async function handleUnsubscribe() {
    if (unsubStatus === "loading") return;
    setUnsubStatus("loading");

    try {
      const res = await fetch("/api/newsletter/preferences", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (res.ok) {
        router.push("/newsletter/unsubscribed");
      } else {
        setUnsubStatus("error");
      }
    } catch {
      setUnsubStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-sm">
      <h1 className="font-heading text-xl font-bold text-slate-900">
        Subscription preferences
      </h1>

      <div className="mt-5 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Account</p>
        <p className="mt-1 text-sm font-medium text-slate-700">{emailMasked}</p>
        <p className="mt-0.5 text-xs capitalize text-slate-400">{status}</p>
      </div>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-slate-900">Delivery frequency</legend>
        <p className="mt-1 text-xs text-slate-400">
          How often would you like to receive the newsletter?
        </p>
        <div className="mt-4 space-y-3">
          {FREQUENCY_OPTIONS.map(({ value, label, description }) => (
            <label
              key={value}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                frequency === value
                  ? "border-sky-400 bg-sky-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              } ${freqStatus === "saving" ? "cursor-not-allowed opacity-70" : ""}`}
            >
              <input
                type="radio"
                name="frequency"
                value={value}
                checked={frequency === value}
                onChange={() => handleFrequencyChange(value)}
                disabled={freqStatus === "saving"}
                className="mt-0.5 h-4 w-4 cursor-pointer accent-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              />
              <div>
                <p className="text-sm font-semibold text-slate-900">{label}</p>
                <p className="text-xs leading-5 text-slate-500">{description}</p>
              </div>
            </label>
          ))}
        </div>

        <p aria-live="polite" className="mt-3 min-h-5 text-xs">
          {freqStatus === "saving" && <span className="text-sky-500">Saving…</span>}
          {freqStatus === "saved" && <span className="text-green-600">Saved.</span>}
          {freqStatus === "error" && (
            <span className="text-red-500">Couldn&rsquo;t save. Please try again.</span>
          )}
        </p>
      </fieldset>

      <div className="mt-10 border-t border-slate-100 pt-8">
        <p className="text-sm font-semibold text-slate-900">Unsubscribe</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          You won&rsquo;t receive any further issues. You can resubscribe at any time.
        </p>
        <button
          type="button"
          onClick={handleUnsubscribe}
          disabled={unsubStatus === "loading"}
          className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {unsubStatus === "loading" ? "Unsubscribing…" : "Unsubscribe"}
        </button>
        {unsubStatus === "error" && (
          <p aria-live="assertive" className="mt-2 text-xs text-red-500">
            Couldn&rsquo;t unsubscribe. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
