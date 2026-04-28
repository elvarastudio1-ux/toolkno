"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function LoginForm({ callbackUrl = "/dashboard", status = "" }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(
    status === "check-email" ? "Magic link sent. Check your inbox." : ""
  );

  async function handleEmailLogin(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await signIn("email", {
      email,
      callbackUrl,
      redirect: false
    });

    setLoading(false);

    if (result?.error) {
      setMessage(result.error);
      return;
    }

    setMessage("Magic link sent. Check your inbox.");
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-surface/80 p-6 sm:p-8">
      <h1 className="font-heading text-4xl font-bold text-text">Login to Toolkno</h1>
      <p className="mt-4 text-sm leading-7 text-muted">
        Sign in with Google or a secure email link to sync billing and unlock your dashboard.
      </p>

      <div className="mt-6">
        <Button
          className="w-full"
          onClick={() => signIn("google", { callbackUrl })}
        >
          Continue with Google
        </Button>
      </div>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-100" />
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Or</span>
        <div className="h-px flex-1 bg-slate-100" />
      </div>

      <form onSubmit={handleEmailLogin} className="space-y-4">
        <label className="block text-sm text-text">
          <span className="mb-2 block">Email address</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-text outline-none transition focus:border-accent"
            placeholder="you@example.com"
          />
        </label>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending link..." : "Send magic link"}
        </Button>
      </form>

      {message ? <p className="mt-4 text-sm text-accent">{message}</p> : null}
    </div>
  );
}
