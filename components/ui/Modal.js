"use client";

import { useEffect } from "react";

export default function Modal({ open, title, children, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose?.();
      }
    }

    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-4xl border border-slate-200 bg-surface p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold text-text">{title}</h2>
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-sm text-muted transition hover:border-accent hover:text-text"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
