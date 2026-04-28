"use client";
import { useEffect, useRef, useState } from "react";

export default function AdUnit({ slot, format = "auto", className = "" }) {
  const insRef = useRef(null);
  // status: "loading" (visible w/o chrome so AdSense can measure), "filled", "unfilled"
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!insRef.current) return;

    const observer = new MutationObserver(() => {
      const next = insRef.current?.getAttribute("data-ad-status");
      if (next === "filled" || next === "unfilled") setStatus(next);
    });

    observer.observe(insRef.current, {
      attributes: true,
      attributeFilter: ["data-ad-status"]
    });

    const raf = requestAnimationFrame(() => {
      try {
        if (
          insRef.current &&
          !insRef.current.getAttribute("data-adsbygoogle-status")
        ) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {}
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  if (status === "unfilled") {
    return null;
  }

  const wrapperClass =
    status === "filled"
      ? `overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 ${className}`
      : className;

  return (
    <div className={wrapperClass}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8193881104320445"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
