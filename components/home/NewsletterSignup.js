"use client";

import { useState } from "react";

export default function NewsletterSignup({
  inputId = "newsletter-email",
  placeholder = "Enter your email",
  buttonLabel = "Subscribe"
}) {
  const [statusMessage, setStatusMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatusMessage("Placeholder signup only. Email integration will be connected in a future update.");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <input
            id={inputId}
            name="email"
            type="email"
            autoComplete="email"
            placeholder={placeholder}
            className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          {buttonLabel}
        </button>
      </div>

      <p aria-live="polite" className="mt-3 min-h-6 text-sm text-slate-500">
        {statusMessage}
      </p>
    </form>
  );
}
