"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { formatDate } from "@/lib/subscription";

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (document.getElementById("razorpay-checkout-script")) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "razorpay-checkout-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function BillingCard({ plan, planExpiresAt, email, name }) {
  const [cycle, setCycle] = useState("monthly");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function startCheckout() {
    setLoading(true);
    setMessage("");

    try {
      const scriptReady = await loadRazorpayScript();
      if (!scriptReady) {
        throw new Error("Unable to load Razorpay checkout.");
      }

      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ cycle })
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(orderData.error || "Unable to create payment order.");
      }

      const razorpay = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Toolkno",
        description: cycle === "yearly" ? "Toolkno Pro Yearly" : "Toolkno Pro Monthly",
        order_id: orderData.orderId,
        handler: async function (response) {
          const verifyResponse = await fetch("/api/payment/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature
            })
          });

          const verifyData = await verifyResponse.json();
          if (!verifyResponse.ok || !verifyData.success) {
            throw new Error(verifyData.error || "Payment verification failed.");
          }

          const upgradeResponse = await fetch("/api/user/upgrade", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              cycle,
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id
            })
          });

          const upgradeData = await upgradeResponse.json();
          if (!upgradeResponse.ok) {
            throw new Error(upgradeData.error || "Upgrade failed after payment.");
          }

          window.location.href = "/dashboard?upgraded=true";
        },
        prefill: {
          name,
          email
        },
        theme: {
          color: "#5DCAA5"
        }
      });

      razorpay.open();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-surface p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Current plan</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text">
            {plan === "paid" ? "Toolkno Pro" : "Toolkno Free"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            {plan === "paid"
              ? `Your Pro access is active until ${formatDate(planExpiresAt)}.`
              : "Upgrade to remove ads and prepare your account for upcoming AI and bulk tools."}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          onClick={() => setCycle("monthly")}
          className={`rounded-3xl border px-4 py-4 text-left transition ${cycle === "monthly" ? "border-accent bg-accent/10" : "border-slate-200 bg-slate-50"}`}
        >
          <p className="text-sm font-semibold text-text">Monthly</p>
          <p className="mt-1 text-sm text-muted">₹199 / month</p>
        </button>
        <button
          onClick={() => setCycle("yearly")}
          className={`rounded-3xl border px-4 py-4 text-left transition ${cycle === "yearly" ? "border-accent bg-accent/10" : "border-slate-200 bg-slate-50"}`}
        >
          <p className="text-sm font-semibold text-text">Yearly</p>
          <p className="mt-1 text-sm text-muted">₹1499 / year</p>
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
        <span className="rounded-full border border-slate-200 px-4 py-2">Zero ads</span>
        <span className="rounded-full border border-slate-200 px-4 py-2">AI features</span>
        <span className="rounded-full border border-slate-200 px-4 py-2">API access</span>
      </div>

      <div className="mt-6">
        <Button onClick={startCheckout} disabled={loading || plan === "paid"} className="w-full sm:w-auto">
          {plan === "paid" ? "Pro is active" : loading ? "Preparing checkout..." : "Upgrade with Razorpay"}
        </Button>
      </div>

      {message ? <p className="mt-4 text-sm text-warning">{message}</p> : null}
    </div>
  );
}
