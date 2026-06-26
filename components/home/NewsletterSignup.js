"use client";

import { useEffect, useRef, useState } from "react";
import { track, EVENTS } from "@/lib/analytics";

const ERRORS = {
  EMPTY: "Please enter your email address.",
  INVALID: "Please enter a valid email address.",
  DISPOSABLE: "Please use a non-temporary email address.",
  RATE_LIMIT: "Too many requests. Please wait a moment and try again.",
  SERVER: "Something went wrong. Please try again, or contact us if this continues.",
  NETWORK: "No connection. Please check your internet and try again.",
};

function validateEmail(email) {
  const trimmed = email.trim();
  if (!trimmed) return ERRORS.EMPTY;
  const atIndex = trimmed.indexOf("@");
  if (atIndex < 1) return ERRORS.INVALID;
  const domain = trimmed.slice(atIndex + 1);
  if (!domain || !domain.includes(".")) return ERRORS.INVALID;
  if (trimmed.length > 254) return ERRORS.INVALID;
  return null;
}

export default function NewsletterSignup({ source = "homepage" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success"
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRef = useRef(null);
  const impressionFiredRef = useRef(false);

  // Cookie check runs client-side after hydration (NF-003 — brief flash of form is acceptable)
  useEffect(() => {
    const isSubscribed = document.cookie
      .split(";")
      .some((c) => c.trim().startsWith("toolkno_subscribed="));
    if (isSubscribed) setSubscribed(true);
  }, []);

  // Viewport impression — fires once when the section enters viewport (newsletter_form_impression)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !impressionFiredRef.current) {
          impressionFiredRef.current = true;
          track(EVENTS.NEWSLETTER_IMPRESSION);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    track(EVENTS.NEWSLETTER_ATTEMPT);
    setError("");

    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), source }),
      });

      if (res.ok) {
        track(EVENTS.NEWSLETTER_SUCCESS);
        setStatus("success");
        return;
      }

      const data = await res.json().catch(() => ({}));
      const code = data?.error?.code;

      if (res.status === 422 || code === "DISPOSABLE_EMAIL") {
        setError(ERRORS.DISPOSABLE);
      } else if (res.status === 429 || code === "RATE_LIMIT_EXCEEDED") {
        setError(ERRORS.RATE_LIMIT);
      } else {
        setError(ERRORS.SERVER);
      }
      track(EVENTS.NEWSLETTER_ERROR, { status: res.status });
      setStatus("idle");
    } catch {
      setError(ERRORS.NETWORK);
      track(EVENTS.NEWSLETTER_ERROR, { status: "network" });
      setStatus("idle");
    }
  }

  const isLoading = status === "loading";

  return (
    <div ref={sectionRef}>
      {subscribed ? (
        <p className="text-sm leading-6 text-slate-600">
          You&#39;re subscribed. New editorial content lands in your inbox biweekly.
        </p>
      ) : status === "success" ? (
        <p className="text-sm leading-6 text-slate-600">
          Check your email to confirm your subscription.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-label="Newsletter subscription">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-describedby="newsletter-error"
                aria-invalid={error ? "true" : "false"}
                className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Subscribing…" : "Subscribe"}
            </button>
          </div>

          {/* Always in DOM so aria-describedby resolves and aria-live can announce changes (ACC-002) */}
          <p
            id="newsletter-error"
            aria-live="assertive"
            className="mt-2 min-h-5 text-sm text-red-500"
          >
            {error}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            By subscribing, you agree to receive our newsletter. We will not share your email. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
}
