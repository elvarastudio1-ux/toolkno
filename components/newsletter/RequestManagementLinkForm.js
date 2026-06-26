"use client";

import { useState } from "react";

export default function RequestManagementLinkForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success"
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter/management-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("idle");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("idle");
      setError("No connection. Please check your internet and try again.");
    }
  }

  if (status === "success") {
    return (
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
        <h1 className="font-heading text-xl font-bold text-slate-900">Check your inbox.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          If that email is on our list, a management link is on its way. Check your spam
          folder if it doesn&rsquo;t arrive within a few minutes.
        </p>
        <p className="mt-2 text-xs text-slate-400">The link expires in 4 hours.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-sm">
      <h1 className="font-heading text-xl font-bold text-slate-900">
        Manage your subscription
      </h1>
      <p className="mt-3 text-sm leading-6 text-slate-500">
        Enter your email address and we&rsquo;ll send you a link to manage your newsletter
        preferences.
      </p>
      <form onSubmit={handleSubmit} noValidate className="mt-6">
        <div>
          <label htmlFor="pref-email" className="block text-sm font-medium text-slate-700">
            Email address
          </label>
          <input
            id="pref-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-describedby="pref-email-error"
            aria-invalid={error ? "true" : "false"}
            className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          />
          <p
            id="pref-email-error"
            aria-live="assertive"
            className="mt-2 min-h-4 text-xs text-red-500"
          >
            {error}
          </p>
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-lg bg-sky-500 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send management link"}
        </button>
      </form>
    </div>
  );
}
