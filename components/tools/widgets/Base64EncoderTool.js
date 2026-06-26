"use client";

import { useMemo, useState } from "react";

export default function Base64EncoderTool() {
  const [input, setInput] = useState("");
  const [urlSafe, setUrlSafe] = useState(false);
  const [notice, setNotice] = useState("");

  const output = useMemo(() => {
    if (!input) return "";
    try {
      const bytes = new TextEncoder().encode(input);
      let bin = "";
      bytes.forEach((b) => (bin += String.fromCharCode(b)));
      let b64 = btoa(bin);
      if (urlSafe) {
        b64 = b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      }
      return b64;
    } catch (e) {
      return `Error: ${e.message}`;
    }
  }, [input, urlSafe]);

  return (
    <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-surface p-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Input text</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste any text or string..."
            className="mt-2 h-64 w-full resize-y rounded-2xl border border-slate-200 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-sky-400"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Base64 output</label>
          <textarea
            readOnly
            value={output}
            placeholder="Encoded result appears here"
            className="mt-2 h-64 w-full resize-y rounded-2xl border border-sky-200 bg-sky-50 p-4 font-mono text-sm text-sky-900 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" checked={urlSafe} onChange={(e) => setUrlSafe(e.target.checked)} className="h-4 w-4" />
          URL-safe (base64url)
        </label>
        <span className="text-xs text-slate-400">Bytes in: {input.length} · Out: {output.length}</span>
        <div className="ml-auto flex flex-wrap gap-2">
          <button
            onClick={() => {
              if (!output) return;
              navigator.clipboard.writeText(output);
              setNotice("Copied Base64 to clipboard.");
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
