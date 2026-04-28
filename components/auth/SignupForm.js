"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignup(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to create your account.");
      }

      await signIn("email", {
        email,
        callbackUrl: "/dashboard",
        redirect: false
      });

      setMessage("Account ready. Check your inbox for the sign-in link.");
      setName("");
      setEmail("");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-surface/80 p-6 sm:p-8">
      <h1 className="font-heading text-4xl font-bold text-text">Create your Toolkno account</h1>
      <p className="mt-4 text-sm leading-7 text-muted">
        Start free now, then upgrade later for ad-free usage and upcoming premium tools.
      </p>

      <form onSubmit={handleSignup} className="mt-6 space-y-4">
        <label className="block text-sm text-text">
          <span className="mb-2 block">Full name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-text outline-none transition focus:border-accent"
            placeholder="Aarav Sharma"
          />
        </label>
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
          {loading ? "Creating account..." : "Create free account"}
        </Button>
      </form>

      {message ? <p className="mt-4 text-sm text-accent">{message}</p> : null}
    </div>
  );
}
