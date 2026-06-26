"use client";

import { useMemo, useState } from "react";

export default function Base64DecoderTool() {
  const [input, setInput] = useState("");
  const [notice, setNotice] = useState("");

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: "" };

    try {
      let value = input.trim().replace(/-/g, "+").replace(/_/g, "/");
      while (value.length % 4 !== 0) value += "=";

      const binary = atob(value);
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index += 1) {
        bytes[index] = binary.charCodeAt(index);
      }

      const text = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
      return { output: text, error: "" };
    } catch (decodeError) {
      return { output: "", error: `Invalid Base64: ${decodeError.message}` };
    }
  }, [input]);

  return (
    <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-surface p-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Base64 input</label>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Paste a Base64 string..."
            className="mt-2 h-64 w-full resize-y rounded-2xl border border-slate-200 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-sky-400"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Decoded text</label>
          <textarea
            readOnly
            value={error || output}
            placeholder="Decoded text appears here"
            className={`mt-2 h-64 w-full resize-y rounded-2xl border p-4 font-mono text-sm outline-none ${error ? "border-red-200 bg-red-50 text-red-700" : "border-sky-200 bg-sky-50 text-sky-900"}`}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs text-slate-400">In: {input.length} | Out: {output.length}</span>
        <div className="ml-auto flex flex-wrap gap-2">
          <button
            onClick={() => {
              if (!output) return;
              navigator.clipboard.writeText(output);
              setNotice("Copied decoded text.");
            }}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Copy
          </button>
          <button
            onClick={() => {
              setInput("");
              setNotice("Cleared.");
            }}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400"
          >
            Clear
          </button>
        </div>
      </div>

      {notice ? <p className="text-sm text-accent">{notice}</p> : null}
    </div>
  );
}
