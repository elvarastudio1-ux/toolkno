"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { stopWords } from "@/lib/tools";

const loremBase =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";

const loremParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const randomWordBank = [
  "river", "signal", "planet", "bright", "stone", "quiet", "ember", "forest", "pixel", "craft",
  "motion", "harbor", "future", "copper", "glow", "winter", "flight", "memory", "anchor", "silver",
  "canvas", "native", "orbit", "thunder", "garden", "marble", "violet", "object", "stream", "echo",
  "ladder", "meadow", "pioneer", "vector", "rocket", "summit", "spring", "glacier", "ember", "signal"
];

const randomSentencePool = [
  "The early draft looked simple, but each revision made the idea stronger.",
  "Small changes in wording can completely reshape how a reader understands a message.",
  "Good tools help people move faster without making the work feel mechanical.",
  "A clean interface often reveals patterns that were hidden inside messy text.",
  "Teams save time when repetitive cleanup tasks become instant browser actions.",
  "Writers often discover better phrasing after seeing the structure of a sentence clearly.",
  "Developers rely on tiny utilities every day more than most people realize.",
  "Readable content usually comes from careful editing rather than longer explanations.",
  "The best workflow is often the one that removes friction at exactly the right step.",
  "Reliable utilities matter because they make ordinary tasks feel almost effortless."
];

const asciiReference = Array.from({ length: 95 }, (_, index) => {
  const code = index + 32;
  return {
    code,
    char: String.fromCharCode(code)
  };
});

const titleCaseSmallWords = new Set(["and", "or", "but", "the", "a", "an", "in", "on", "at", "to", "for", "of", "with"]);

function copyText(value, setNotice) {
  if (!value) return;
  navigator.clipboard.writeText(value);
  setNotice("Copied to clipboard.");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function toggleCase(value) {
  return value
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") return char.toUpperCase();
      if (char >= "A" && char <= "Z") return char.toLowerCase();
      return char;
    })
    .join("");
}

function titleCase(value) {
  return value
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) => {
      if (!word) return word;
      if (index > 0 && titleCaseSmallWords.has(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function sentenceCase(value) {
  return value
    .toLowerCase()
    .replace(/(^\s*[a-z])|([.!?]\s*[a-z])/g, (match) => match.toUpperCase());
}

function splitSentences(value) {
  return value.split(/[.!?]+/).map((item) => item.trim()).filter(Boolean);
}

function splitParagraphs(value) {
  return value.split(/\n\s*\n|\r\n\s*\r\n/).map((item) => item.trim()).filter(Boolean);
}

function getWords(value) {
  return value.trim().split(/\s+/).filter(Boolean);
}

function downloadText(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function shuffleArray(source) {
  const copy = [...source];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function WidgetShell({ children, notice }) {
  return (
    <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-surface p-6">
      {children}
      {notice ? <p className="text-sm text-accent">{notice}</p> : null}
    </div>
  );
}

function ActionRow({ children }) {
  return <div className="flex flex-wrap gap-3">{children}</div>;
}

function MainTextarea(props) {
  return (
    <textarea
      rows={10}
      className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-text outline-none transition focus:border-accent"
      {...props}
    />
  );
}

function OutputTextarea(props) {
  return (
    <textarea
      rows={10}
      readOnly
      className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-text outline-none"
      {...props}
    />
  );
}

function SplitShell({ children }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white md:flex-row md:min-h-[420px]">
      {children}
    </div>
  );
}

function LeftPane({ children }) {
  return (
    <div className="flex flex-1 flex-col gap-2 border-b border-slate-200 p-4 md:border-b-0 md:border-r">
      {children}
    </div>
  );
}

function RightPane({ children }) {
  return <div className="flex flex-1 flex-col gap-2 p-4">{children}</div>;
}

function PaneHeader({ label, action }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[13px] font-medium text-slate-500">{label}</span>
      {action}
    </div>
  );
}

function PaneButton({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-md border border-slate-200 px-2.5 py-1 text-[12px] text-slate-500 transition hover:border-sky-400 hover:text-sky-500"
    >
      {children}
    </button>
  );
}

function PaneInput(props) {
  return (
    <textarea
      {...props}
      className={`min-h-[300px] flex-1 resize-y rounded-lg border border-slate-200 bg-slate-50 p-3 text-[14px] leading-[1.6] text-slate-900 outline-none transition focus:border-sky-400 ${props.className || ""}`}
    />
  );
}

function PaneOutput(props) {
  return (
    <textarea
      {...props}
      readOnly
      className={`min-h-[300px] flex-1 resize-none rounded-lg border border-slate-200 bg-slate-50 p-3 text-[14px] leading-[1.6] text-slate-900 outline-none ${props.className || ""}`}
    />
  );
}

function PaneFooter({ children }) {
  return (
    <div className="flex items-center justify-between gap-3 text-[12px] text-slate-400">
      {children}
    </div>
  );
}

function PaneControl(props) {
  return (
    <input
      {...props}
      className={`rounded-md border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-700 outline-none transition focus:border-sky-400 ${props.className || ""}`}
    />
  );
}

function PaneSelect(props) {
  return (
    <select
      {...props}
      className={`rounded-md border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-700 outline-none transition focus:border-sky-400 ${props.className || ""}`}
    >
      {props.children}
    </select>
  );
}

function PrimaryAction({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex h-9 items-center justify-center rounded-md bg-sky-500 px-4 text-[12px] font-semibold text-white transition hover:bg-sky-600"
    >
      {children}
    </button>
  );
}

export default function UniversalToolWidget({ slug }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [notice, setNotice] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [findValue, setFindValue] = useState("");
  const [replaceValue, setReplaceValue] = useState("");
  const [keyword, setKeyword] = useState("");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [caseInsensitive, setCaseInsensitive] = useState(false);
  const [separatorMode, setSeparatorMode] = useState("comma");
  const [customSeparator, setCustomSeparator] = useState("");
  const [amount, setAmount] = useState(3);
  const [binaryMode, setBinaryMode] = useState("ascii");
  const [delimiter, setDelimiter] = useState("space");
  const [searchAscii, setSearchAscii] = useState("");
  const [bannedWords, setBannedWords] = useState("secret,password,classified");
  const [speechSupported, setSpeechSupported] = useState(true);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (slug === "paragraph-splitter") setSeparatorMode("double");
    if (slug === "word-splitter") setSeparatorMode("newline");
    if (slug === "lorem-ipsum-generator") setSeparatorMode("paragraphs");
  }, [slug]);

  useEffect(() => {
    setNotice("");
  }, [input, output]);

  useEffect(() => {
    if (slug === "text-to-speech") {
      setSpeechSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    }
    if (slug === "speech-to-text") {
      const SpeechRecognition =
        typeof window !== "undefined" ? window.webkitSpeechRecognition || window.SpeechRecognition : null;
      setSpeechSupported(Boolean(SpeechRecognition));
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = (event) => {
          let transcript = "";
          for (let index = 0; index < event.results.length; index += 1) {
            transcript += event.results[index][0].transcript;
          }
          setOutput(transcript);
        };
        recognition.onerror = () => setNotice("Speech recognition encountered an error.");
        recognitionRef.current = recognition;
      }
    }
  }, [slug]);

  const liveWordStats = useMemo(() => {
    const words = getWords(input);
    const sentences = splitSentences(input);
    const paragraphs = splitParagraphs(input);
    return {
      words: words.length,
      characters: input.length,
      charactersNoSpaces: input.replace(/\s/g, "").length,
      sentences: sentences.length,
      paragraphs: paragraphs.length,
      readingTime: words.length ? (words.length / 200).toFixed(2) : "0.00",
      speakingTime: words.length ? (words.length / 130).toFixed(2) : "0.00"
    };
  }, [input]);

  const liveCharacterStats = useMemo(() => {
    const withSpaces = input.length;
    const withoutSpaces = input.replace(/\s/g, "").length;
    return {
      withSpaces,
      withoutSpaces,
      twitterRemaining: 280 - withSpaces,
      instagramRemaining: 2200 - withSpaces,
      metaRemaining: 160 - withSpaces
    };
  }, [input]);

  const clearAll = () => {
    setInput("");
    setOutput("");
    setSecondInput("");
    setFindValue("");
    setReplaceValue("");
    setKeyword("");
    setPrefix("");
    setSuffix("");
    setNotice("");
  };

  const renderCopyClear = (copyValue) => (
    <ActionRow>
      <Button onClick={() => copyText(copyValue, setNotice)}>Copy</Button>
      <Button variant="secondary" onClick={clearAll}>Clear</Button>
    </ActionRow>
  );

  const renderSplit = ({
    inputLabel = "Your text",
    outputLabel = "Result",
    inputPlaceholder = "Paste your text here...",
    controls = null,
    actionLabel = null,
    onAction = null,
    inputFooter = null,
    outputFooter = null
  }) => (
    <SplitShell>
      <LeftPane>
        <PaneHeader
          label={inputLabel}
          action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>}
        />
        {controls}
        <PaneInput
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={inputPlaceholder}
        />
        <PaneFooter>
          {inputFooter || (
            <>
              <span>{input.length} characters</span>
              <span>{getWords(input).length} words</span>
            </>
          )}
        </PaneFooter>
        {actionLabel ? (
          <div>
            <PrimaryAction onClick={onAction}>{actionLabel}</PrimaryAction>
          </div>
        ) : null}
      </LeftPane>
      <RightPane>
        <PaneHeader
          label={outputLabel}
          action={
            <PaneButton onClick={() => copyText(output, setNotice)}>Copy</PaneButton>
          }
        />
        <PaneOutput value={output} />
        <PaneFooter>
          {outputFooter || <span>{output.length} characters</span>}
        </PaneFooter>
      </RightPane>
    </SplitShell>
  );

  if (slug === "word-counter") {
    const wcWordsArr = input.trim().split(/\s+/).filter(Boolean);
    const wcWordCount = wcWordsArr.length;
    const wcCharsWithSpaces = input.length;
    const wcCharsNoSpaces = input.replace(/\s/g, "").length;
    const wcSentences = input.split(/[.!?]+/).map((item) => item.trim()).filter(Boolean).length;
    const wcParagraphs = input.trim()
      ? Math.max(1, input.split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean).length)
      : 0;
    const wcReading = wcWordCount ? `${Math.ceil(wcWordCount / 200)} min read` : "—";
    const wcSpeaking = wcWordCount ? `${Math.ceil(wcWordCount / 130)} min` : "—";
    const wcUnique = new Set(
      wcWordsArr
        .map((word) => word.toLowerCase().replace(/[^a-z0-9]/gi, ""))
        .filter(Boolean)
    ).size;

    const countSyllables = (word) => {
      let w = word.toLowerCase();
      if (w.length <= 3) return 1;
      w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
      w = w.replace(/^y/, "");
      const matches = w.match(/[aeiouy]{1,2}/g);
      return matches ? matches.length : 1;
    };

    const wcAvgWordLenNum = wcWordCount ? wcCharsNoSpaces / wcWordCount : 0;
    const wcAvgWordLen = wcWordCount ? `${wcAvgWordLenNum.toFixed(1)} chars` : "—";
    const wcLongestWord = wcWordsArr.length
      ? wcWordsArr.reduce((longest, word) => {
          const clean = word.replace(/[^a-z0-9'\-]/gi, "");
          return clean.length > longest.length ? clean : longest;
        }, "")
      : "";
    const wcSyllables = wcWordsArr.reduce(
      (sum, word) => sum + countSyllables(word.replace(/[^a-z]/gi, "") || word),
      0
    );
    let wcReadingLevel = "—";
    let wcReadingLevelTone = "slate";
    if (wcWordCount) {
      if (wcAvgWordLenNum < 4) {
        wcReadingLevel = "Easy";
        wcReadingLevelTone = "green";
      } else if (wcAvgWordLenNum <= 5) {
        wcReadingLevel = "Medium";
        wcReadingLevelTone = "amber";
      } else {
        wcReadingLevel = "Advanced";
        wcReadingLevelTone = "red";
      }
    }
    const readingLevelClasses = {
      green: "bg-green-50 text-green-600 border-green-200",
      amber: "bg-amber-50 text-amber-600 border-amber-200",
      red: "bg-red-50 text-red-600 border-red-200",
      slate: "bg-slate-100 text-slate-500 border-slate-200"
    }[wcReadingLevelTone];

    const wcSecondaryCards = [
      { label: "Characters (with spaces)", value: wcCharsWithSpaces },
      { label: "Characters (no spaces)", value: wcCharsNoSpaces },
      { label: "Sentences", value: wcSentences },
      { label: "Paragraphs", value: wcParagraphs },
      { label: "Reading time", value: wcReading },
      { label: "Speaking time", value: wcSpeaking },
      { label: "Unique words", value: wcUnique },
      { label: "Avg word length", value: wcAvgWordLen },
      { label: "Longest word", value: wcLongestWord || "—" },
      { label: "Syllables", value: wcSyllables }
    ];

    const copyAllStats = () => {
      const lines = [
        `Words: ${wcWordCount}`,
        ...wcSecondaryCards.map((card) => `${card.label}: ${card.value}`),
        `Reading level: ${wcReadingLevel}`
      ];
      copyText(lines.join("\n"), setNotice);
    };

    const wcOverLimit = wcCharsWithSpaces > 10000;

    return (
      <WidgetShell notice={notice}>
        <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 md:flex-row md:min-h-[420px]">
          <div className="flex flex-1 flex-col gap-2 p-4">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-muted">Your text</span>
              <button
                type="button"
                onClick={() => setInput("")}
                className="rounded-md border border-slate-200 px-2.5 py-1 text-[12px] text-muted transition hover:border-accent hover:text-accent"
              >
                Clear
              </button>
            </div>
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Start typing or paste your text here..."
              className={`min-h-[300px] flex-1 resize-y rounded-lg border bg-slate-100 p-3 text-[14px] leading-[1.6] text-text outline-none transition focus:border-accent ${
                wcOverLimit ? "border-orange-400" : "border-slate-200"
              }`}
            />
            {wcOverLimit ? (
              <p className="text-[11px] text-orange-500">⚠ Large text may slow down your browser</p>
            ) : null}
            <div className="flex items-center justify-between text-[12px] text-muted">
              <span>{wcCharsWithSpaces} characters</span>
              <span>{wcWordCount} words</span>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2 border-t border-slate-200 p-4 md:border-l md:border-t-0">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[13px] font-medium text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                Statistics
              </span>
              <button
                type="button"
                onClick={copyAllStats}
                className="rounded-md border border-slate-200 px-2.5 py-1 text-[12px] text-muted transition hover:border-accent hover:text-accent"
              >
                Copy all
              </button>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-2 md:grid-cols-3">
              <div className="col-span-2 flex flex-col gap-1 rounded-xl border border-slate-200 bg-sky-50 p-4 md:col-span-3">
                <p className="text-5xl font-semibold text-sky-500">{wcWordCount}</p>
                <p className="text-xs text-muted">Words</p>
                <p className="text-[10px] text-sky-400">↑ updated live</p>
              </div>
              {wcSecondaryCards.map((card) => (
                <div
                  key={card.label}
                  className="flex cursor-default flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-200 hover:border-sky-300 hover:bg-sky-50"
                >
                  <p className="text-3xl font-medium text-text break-words">{card.value}</p>
                  <p className="text-xs text-muted">{card.label}</p>
                </div>
              ))}
              <div className={`flex cursor-default flex-col gap-2 rounded-xl border p-4 transition-all duration-200 ${readingLevelClasses}`}>
                <span className="inline-flex w-fit items-center rounded-full bg-white/70 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide">
                  {wcReadingLevel}
                </span>
                <p className="text-xs text-muted">Reading level</p>
              </div>
            </div>
          </div>
        </div>
      </WidgetShell>
    );
  }

  if (slug === "character-counter") {
    return (
      <WidgetShell notice={notice}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Your text" action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>} />
            <PaneInput value={input} onChange={(event) => setInput(event.target.value)} placeholder="Paste text to count characters..." />
            <PaneFooter>
              <span>{liveCharacterStats.withSpaces} characters</span>
              <span>{liveCharacterStats.withoutSpaces} no spaces</span>
            </PaneFooter>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Statistics" action={<PaneButton onClick={() => copyText(input, setNotice)}>Copy</PaneButton>} />
            <div className="grid flex-1 grid-cols-2 gap-2">
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-3xl font-medium text-slate-900">{liveCharacterStats.withSpaces}</p>
                <p className="text-xs text-slate-500">With spaces</p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-3xl font-medium text-slate-900">{liveCharacterStats.withoutSpaces}</p>
                <p className="text-xs text-slate-500">No spaces</p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className={`text-2xl font-medium ${liveCharacterStats.twitterRemaining < 0 ? "text-red-500" : "text-sky-500"}`}>{liveCharacterStats.twitterRemaining >= 0 ? `${liveCharacterStats.twitterRemaining} left` : `${Math.abs(liveCharacterStats.twitterRemaining)} over`}</p>
                <p className="text-xs text-slate-500">Twitter (280)</p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-700">IG: {liveCharacterStats.instagramRemaining}</p>
                <p className={`text-sm font-medium ${liveCharacterStats.metaRemaining < 0 ? "text-red-500" : "text-slate-700"}`}>Meta: {liveCharacterStats.metaRemaining}</p>
                <p className="text-xs text-slate-500">Social limits</p>
              </div>
            </div>
          </RightPane>
        </SplitShell>
      </WidgetShell>
    );
  }

  if (slug === "sentence-counter") {
    const sentences = splitSentences(input);
    const paragraphs = splitParagraphs(input);
    const avgWords = sentences.length ? (getWords(input).length / sentences.length).toFixed(2) : "0.00";
    return (
      <WidgetShell notice={notice}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Your text" action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>} />
            <PaneInput value={input} onChange={(event) => setInput(event.target.value)} placeholder="Paste text to count sentences..." />
            <PaneFooter>
              <span>{input.length} characters</span>
              <span>{getWords(input).length} words</span>
            </PaneFooter>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Statistics" action={<PaneButton onClick={() => copyText(input, setNotice)}>Copy</PaneButton>} />
            <div className="grid flex-1 grid-cols-1 gap-2">
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-sky-50 p-4">
                <p className="text-4xl font-semibold text-sky-500">{sentences.length}</p>
                <p className="text-xs text-slate-500">Sentences</p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-medium text-slate-900">{paragraphs.length}</p>
                <p className="text-xs text-slate-500">Paragraphs</p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-medium text-slate-900">{avgWords}</p>
                <p className="text-xs text-slate-500">Avg words / sentence</p>
              </div>
            </div>
          </RightPane>
        </SplitShell>
      </WidgetShell>
    );
  }

  if (slug === "paragraph-counter") {
    const paragraphs = splitParagraphs(input);
    return (
      <WidgetShell notice={notice}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Your text" action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>} />
            <PaneInput value={input} onChange={(event) => setInput(event.target.value)} placeholder="Paste text to count paragraphs..." />
            <PaneFooter>
              <span>{input.length} characters</span>
              <span>{getWords(input).length} words</span>
            </PaneFooter>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Statistics" action={<PaneButton onClick={() => copyText(input, setNotice)}>Copy</PaneButton>} />
            <div className="flex flex-1 flex-col gap-1 rounded-xl border border-slate-200 bg-sky-50 p-4">
              <p className="text-5xl font-semibold text-sky-500">{paragraphs.length}</p>
              <p className="text-xs text-slate-500">Paragraphs</p>
            </div>
          </RightPane>
        </SplitShell>
      </WidgetShell>
    );
  }

  if (slug === "case-converter") {
    const runCaseMode = (nextMode) => {
      if (nextMode === "upper") setOutput(input.toUpperCase());
      if (nextMode === "lower") setOutput(input.toLowerCase());
      if (nextMode === "title") setOutput(titleCase(input));
      if (nextMode === "sentence") setOutput(sentenceCase(input));
      if (nextMode === "toggle") setOutput(toggleCase(input));
    };

    return (
      <WidgetShell notice={notice}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Your text" action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>} />
            <PaneInput value={input} onChange={(event) => setInput(event.target.value)} placeholder="Paste text to convert its case..." />
            <PaneFooter>
              <span>{input.length} characters</span>
              <span>{getWords(input).length} words</span>
            </PaneFooter>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Result" action={<PaneButton onClick={() => copyText(output, setNotice)}>Copy</PaneButton>} />
            <PaneOutput value={output} />
            <div className="flex flex-wrap gap-2">
              <PaneButton onClick={() => runCaseMode("upper")}>UPPERCASE</PaneButton>
              <PaneButton onClick={() => runCaseMode("lower")}>lowercase</PaneButton>
              <PaneButton onClick={() => runCaseMode("title")}>Title Case</PaneButton>
              <PaneButton onClick={() => runCaseMode("sentence")}>Sentence case</PaneButton>
              <PaneButton onClick={() => runCaseMode("toggle")}>tOGGLE cASE</PaneButton>
            </div>
            <PaneFooter><span>{output.length} characters</span></PaneFooter>
          </RightPane>
        </SplitShell>
      </WidgetShell>
    );
  }

  if (slug === "text-to-uppercase-converter" || slug === "text-to-lowercase-converter" || slug === "title-case-converter" || slug === "sentence-case-converter") {
    const computedOutput =
      slug === "text-to-uppercase-converter"
        ? input.toUpperCase()
        : slug === "text-to-lowercase-converter"
          ? input.toLowerCase()
          : slug === "title-case-converter"
            ? titleCase(input)
            : sentenceCase(input);

    return (
      <WidgetShell notice={notice}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Your text" action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>} />
            <PaneInput value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type or paste text here..." />
            <PaneFooter><span>{input.length} characters</span><span>{getWords(input).length} words</span></PaneFooter>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Result" action={<PaneButton onClick={() => copyText(computedOutput, setNotice)}>Copy</PaneButton>} />
            <PaneOutput value={computedOutput} />
            <PaneFooter><span>{computedOutput.length} characters</span></PaneFooter>
          </RightPane>
        </SplitShell>
      </WidgetShell>
    );
  }

  if (slug === "toggle-case-converter") {
    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text to toggle the case...",
          actionLabel: "Toggle Case",
          onAction: () => setOutput(toggleCase(input))
        })}
      </WidgetShell>
    );
  }

  if (slug === "remove-extra-spaces") {
    return (
      <WidgetShell notice={notice}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Your text" action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>} />
            <PaneInput value={input} onChange={(event) => setInput(event.target.value)} placeholder="Paste text with messy whitespace..." />
            <PaneFooter><span>{input.length} characters</span><span>{getWords(input).length} words</span></PaneFooter>
            <div className="flex flex-wrap gap-2">
              <PrimaryAction onClick={() => setOutput(input.replace(/\s{2,}/g, " "))}>Remove Extra Spaces</PrimaryAction>
              <PaneButton onClick={() => setOutput(input.split("\n").map((line) => line.trim()).join("\n"))}>Trim Each Line</PaneButton>
              <PaneButton onClick={() => setOutput(input.replace(/(\r?\n){3,}/g, "\n\n"))}>Normalize Paragraphs</PaneButton>
            </div>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Result" action={<PaneButton onClick={() => copyText(output, setNotice)}>Copy</PaneButton>} />
            <PaneOutput value={output} />
            <PaneFooter><span>{output.length} characters</span></PaneFooter>
          </RightPane>
        </SplitShell>
      </WidgetShell>
    );
  }

  if (slug === "remove-line-breaks") {
    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste multi-line text...",
          actionLabel: "Remove Line Breaks",
          onAction: () => setOutput(input.replace(/[\r\n]+/g, " "))
        })}
      </WidgetShell>
    );
  }

  if (slug === "remove-duplicate-lines") {
    const process = () => {
      const lines = input.split(/\r?\n/);
      const seen = new Set();
      const unique = lines.filter((line) => {
        const key = caseInsensitive ? line.toLowerCase() : line;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      setOutput(unique.join("\n"));
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste one line per item...",
          controls: (
            <label className="flex items-center gap-2 text-[12px] text-slate-500">
              <input type="checkbox" checked={caseInsensitive} onChange={(event) => setCaseInsensitive(event.target.checked)} />
              Case-insensitive deduplication
            </label>
          ),
          actionLabel: "Remove Duplicates",
          onAction: process
        })}
      </WidgetShell>
    );
  }

  const simpleProcessors = {
    "remove-special-characters": (value) => value.replace(/[^a-zA-Z0-9\s]/g, ""),
    "remove-numbers-from-text": (value) => value.replace(/[0-9]/g, ""),
    "remove-punctuation": (value) => value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"'?[\]<>|\\]/g, ""),
    "remove-emojis": (value) => value.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, ""),
    "remove-html-tags": (value) => value.replace(/<[^>]*>/g, ""),
    "remove-urls-from-text": (value) => value.replace(/https?:\/\/[^\s]+|www\.[^\s]+/gi, ""),
    "remove-email-addresses-from-text": (value) => value.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, ""),
    "remove-accents": (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    "normalize-unicode-text": (value) => value.normalize("NFC"),
    "text-masking-tool": (value) => value.replace(/[A-Za-z0-9]/g, "*")
  };

  if (simpleProcessors[slug]) {
    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text to process...",
          actionLabel: "Process",
          onAction: () => setOutput(simpleProcessors[slug](input))
        })}
      </WidgetShell>
    );
  }

  if (slug === "text-sorter-a-z" || slug === "text-sorter-z-a" || slug === "reverse-lines" || slug === "combine-text-lines" || slug === "shuffle-text-lines") {
    const run = () => {
      const lines = input.split(/\r?\n/).filter((line) => line.length > 0);
      if (slug === "text-sorter-a-z") setOutput([...lines].sort((a, b) => a.localeCompare(b)).join("\n"));
      if (slug === "text-sorter-z-a") setOutput([...lines].sort((a, b) => b.localeCompare(a)).join("\n"));
      if (slug === "reverse-lines") setOutput([...lines].reverse().join("\n"));
      if (slug === "combine-text-lines") setOutput(lines.join(" "));
      if (slug === "shuffle-text-lines") setOutput(shuffleArray(lines).join("\n"));
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste one line per item...",
          actionLabel: slug === "combine-text-lines" ? "Combine Lines" : "Process",
          onAction: run
        })}
      </WidgetShell>
    );
  }

  if (slug === "reverse-text" || slug === "reverse-words" || slug === "text-randomizer" || slug === "text-tokenizer") {
    const run = () => {
      if (slug === "reverse-text") setOutput(input.split("").reverse().join(""));
      if (slug === "reverse-words") setOutput(input.split(" ").reverse().join(" "));
      if (slug === "text-randomizer") setOutput(shuffleArray(getWords(input)).join(" "));
      if (slug === "text-tokenizer") setOutput(input.trim().split(/\s+/).filter((token) => token.length > 0).join("\n"));
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text to process...",
          actionLabel: "Process",
          onAction: run
        })}
      </WidgetShell>
    );
  }

  if (slug === "find-and-replace-text") {
    const replaceAll = () => {
      if (!findValue) return;
      if (caseInsensitive) {
        setOutput(input.replace(new RegExp(escapeRegExp(findValue), "gi"), replaceValue));
      } else {
        setOutput(input.replaceAll(findValue, replaceValue));
      }
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text to edit...",
          controls: (
            <div className="flex flex-col gap-2">
              <div className="grid gap-2 sm:grid-cols-2">
                <PaneControl value={findValue} onChange={(event) => setFindValue(event.target.value)} placeholder="Find" />
                <PaneControl value={replaceValue} onChange={(event) => setReplaceValue(event.target.value)} placeholder="Replace with" />
              </div>
              <label className="flex items-center gap-2 text-[12px] text-slate-500">
                <input type="checkbox" checked={caseInsensitive} onChange={(event) => setCaseInsensitive(event.target.checked)} />
                Case-insensitive
              </label>
            </div>
          ),
          actionLabel: "Find and Replace",
          onAction: replaceAll
        })}
      </WidgetShell>
    );
  }

  if (slug === "text-splitter" || slug === "line-splitter" || slug === "word-splitter" || slug === "paragraph-splitter" || slug === "text-joiner") {
    const process = () => {
      if (slug === "text-splitter") {
        const parts =
          separatorMode === "comma" ? input.split(",") :
          separatorMode === "space" ? input.split(/\s+/) :
          input.split(/\r?\n/);
        setOutput(parts.map((item) => item.trim()).filter(Boolean).join("\n"));
      }
      if (slug === "line-splitter") {
        setOutput(input.split(/[\t ]+/).filter(Boolean).join("\n"));
      }
      if (slug === "word-splitter") {
        const words = getWords(input);
        const format =
          separatorMode === "comma" ? ", " :
          separatorMode === "space" ? " " :
          "\n";
        setOutput(words.join(format));
      }
      if (slug === "paragraph-splitter") {
        const paragraphs = splitParagraphs(input);
        if (separatorMode === "numbered") {
          setOutput(paragraphs.map((item, index) => `${index + 1}. ${item}`).join("\n\n"));
        } else if (separatorMode === "markdown") {
          setOutput(paragraphs.map((item) => `> ${item}`).join("\n\n"));
        } else {
          setOutput(paragraphs.join("\n\n"));
        }
      }
      if (slug === "text-joiner") {
        const lines = input.split(/\r?\n/).filter(Boolean);
        const map = {
          comma: ", ",
          space: " ",
          pipe: " | ",
          newline: "\n",
          custom: customSeparator
        };
        setOutput(lines.join(map[separatorMode]));
      }
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text to split or join...",
          controls: (
            <div className="flex flex-col gap-2">
              <PaneSelect value={separatorMode} onChange={(event) => setSeparatorMode(event.target.value)}>
                {slug === "text-splitter" ? (
                  <>
                    <option value="comma">Split by comma</option>
                    <option value="space">Split by space</option>
                    <option value="newline">Split by newline</option>
                  </>
                ) : null}
                {slug === "word-splitter" ? (
                  <>
                    <option value="newline">One per line</option>
                    <option value="comma">Comma separated</option>
                    <option value="space">Space separated</option>
                  </>
                ) : null}
                {slug === "paragraph-splitter" ? (
                  <>
                    <option value="double">Double line break</option>
                    <option value="numbered">Numbered</option>
                    <option value="markdown">Markdown quote</option>
                  </>
                ) : null}
                {slug === "text-joiner" ? (
                  <>
                    <option value="comma">Comma</option>
                    <option value="space">Space</option>
                    <option value="pipe">Pipe</option>
                    <option value="newline">Newline</option>
                    <option value="custom">Custom</option>
                  </>
                ) : null}
              </PaneSelect>
              {slug === "text-joiner" && separatorMode === "custom" ? (
                <PaneControl value={customSeparator} onChange={(event) => setCustomSeparator(event.target.value)} placeholder="Custom separator" />
              ) : null}
            </div>
          ),
          actionLabel: slug === "text-joiner" ? "Join Text" : "Split Text",
          onAction: process
        })}
      </WidgetShell>
    );
  }

  if (slug === "lorem-ipsum-generator" || slug === "random-word-generator" || slug === "random-sentence-generator" || slug === "random-paragraph-generator") {
    const generate = () => {
      if (slug === "lorem-ipsum-generator") {
        if (separatorMode === "words") {
          const words = loremBase.split(" ");
          setOutput(Array.from({ length: Number(amount) }, (_, index) => words[index % words.length]).join(" "));
        } else if (separatorMode === "sentences") {
          const sentences = splitSentences(loremParagraph);
          setOutput(Array.from({ length: Number(amount) }, (_, index) => `${sentences[index % sentences.length]}.`).join(" "));
        } else {
          setOutput(Array.from({ length: Number(amount) }, () => loremParagraph).join("\n\n"));
        }
      }
      if (slug === "random-word-generator") {
        setOutput(Array.from({ length: Number(amount) }, () => randomWordBank[Math.floor(Math.random() * randomWordBank.length)]).join(" "));
      }
      if (slug === "random-sentence-generator") {
        setOutput(Array.from({ length: Number(amount) }, () => randomSentencePool[Math.floor(Math.random() * randomSentencePool.length)]).join(" "));
      }
      if (slug === "random-paragraph-generator") {
        setOutput(Array.from({ length: Number(amount) }, () => loremParagraph).join("\n\n"));
      }
    };

    return (
      <WidgetShell notice={notice}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Settings" action={<PaneButton onClick={() => setOutput("")}>Reset</PaneButton>} />
            <div className="flex flex-1 flex-col gap-3">
              {slug === "lorem-ipsum-generator" ? (
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] text-slate-500">Type</span>
                  <PaneSelect value={separatorMode} onChange={(event) => setSeparatorMode(event.target.value)}>
                    <option value="paragraphs">Paragraphs</option>
                    <option value="sentences">Sentences</option>
                    <option value="words">Words</option>
                  </PaneSelect>
                </div>
              ) : null}
              <div className="flex flex-col gap-1">
                <span className="text-[12px] text-slate-500">Count</span>
                <PaneControl type="number" min="1" value={amount} onChange={(event) => setAmount(event.target.value)} />
              </div>
            </div>
            <div>
              <PrimaryAction onClick={generate}>Generate</PrimaryAction>
            </div>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Generated text" action={<PaneButton onClick={() => copyText(output, setNotice)}>Copy</PaneButton>} />
            <PaneOutput value={output} />
            <PaneFooter><span>{output.length} characters</span><span>{getWords(output).length} words</span></PaneFooter>
          </RightPane>
        </SplitShell>
      </WidgetShell>
    );
  }

  if (slug === "prefix-suffix-text-generator") {
    const generate = () => {
      setOutput(
        input
          .split(/\r?\n/)
          .filter((line) => line.trim())
          .map((line) => `${prefix}${line}${suffix}`)
          .join("\n")
      );
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste one line per item...",
          controls: (
            <div className="grid gap-2 sm:grid-cols-2">
              <PaneControl value={prefix} onChange={(event) => setPrefix(event.target.value)} placeholder="Prefix" />
              <PaneControl value={suffix} onChange={(event) => setSuffix(event.target.value)} placeholder="Suffix" />
            </div>
          ),
          actionLabel: "Generate",
          onAction: generate
        })}
      </WidgetShell>
    );
  }

  if (slug === "text-compare-tool" || slug === "text-difference-checker" || slug === "case-sensitive-compare" || slug === "case-insensitive-compare") {
    const compare = () => {
      const exact = input === secondInput;
      const lower = input.toLowerCase() === secondInput.toLowerCase();
      if (slug === "text-compare-tool") setOutput(exact ? "identical" : "different");
      if (slug === "text-difference-checker") setOutput(exact ? "No differences found" : "A difference was found");
      if (slug === "case-sensitive-compare") setOutput(exact ? "Match" : "Not a Match");
      if (slug === "case-insensitive-compare") setOutput(lower ? "Match" : "Not a Match");
    };

    const isMatch = output === "identical" || output === "Match" || output === "No differences found";

    return (
      <WidgetShell notice={notice}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Text A" action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>} />
            <PaneInput value={input} onChange={(event) => setInput(event.target.value)} placeholder="First text..." />
            <PaneFooter><span>{input.length} characters</span><span>{getWords(input).length} words</span></PaneFooter>
            <div><PrimaryAction onClick={compare}>{slug === "text-difference-checker" ? "Check Difference" : "Compare"}</PrimaryAction></div>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Text B" action={<PaneButton onClick={() => setSecondInput("")}>Clear</PaneButton>} />
            <PaneInput value={secondInput} onChange={(event) => setSecondInput(event.target.value)} placeholder="Second text..." />
            <PaneFooter><span>{secondInput.length} characters</span><span>{getWords(secondInput).length} words</span></PaneFooter>
            {output ? (
              <div className={`rounded-lg border p-3 text-[13px] font-medium ${isMatch ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-700"}`}>
                {output}
              </div>
            ) : null}
          </RightPane>
        </SplitShell>
      </WidgetShell>
    );
  }

  if (slug === "keyword-density-checker") {
    const analyze = () => {
      const words = getWords(input.toLowerCase().replace(/[^a-z0-9\s]/g, " "));
      if (!words.length) {
        setOutput("");
        return;
      }
      if (keyword.trim()) {
        const target = keyword.toLowerCase();
        const count = words.filter((word) => word === target).length;
        const density = ((count / words.length) * 100).toFixed(2);
        setOutput(`Keyword: ${keyword}\nOccurrences: ${count}\nDensity: ${density}%`);
      } else {
        const counts = words.reduce((acc, word) => {
          acc[word] = (acc[word] || 0) + 1;
          return acc;
        }, {});
        const result = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([word, count]) => `${word}: ${count} (${((count / words.length) * 100).toFixed(2)}%)`)
          .join("\n");
        setOutput(result);
      }
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste content to analyze...",
          controls: <PaneControl value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Optional keyword" />,
          actionLabel: "Check",
          onAction: analyze,
          outputLabel: "Density"
        })}
      </WidgetShell>
    );
  }

  if (slug === "stop-word-counter") {
    const analyze = () => {
      const words = getWords(input.toLowerCase().replace(/[^a-z0-9\s]/g, " "));
      const counts = stopWords.reduce((acc, word) => {
        const total = words.filter((item) => item === word).length;
        if (total) acc[word] = total;
        return acc;
      }, {});
      const total = Object.values(counts).reduce((sum, value) => sum + value, 0);
      setOutput(`Total stop words: ${total}\n${Object.entries(counts).map(([word, count]) => `${word}: ${count}`).join("\n")}`);
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste content to count stop words...",
          actionLabel: "Check",
          onAction: analyze,
          outputLabel: "Stop words"
        })}
      </WidgetShell>
    );
  }

  if (slug === "readability-checker") {
    const analyze = () => {
      const sentences = splitSentences(input);
      const words = getWords(input);
      const avgSentenceLength = sentences.length ? words.length / sentences.length : 0;
      const avgWordLength = words.length ? words.join("").length / words.length : 0;
      const score = Math.max(0, Math.min(100, 100 - avgSentenceLength * 2 - avgWordLength * 5));
      const level = score >= 80 ? "Very Easy" : score >= 60 ? "Easy" : score >= 40 ? "Moderate" : score >= 20 ? "Difficult" : "Very Difficult";
      setOutput(`Readability score: ${score.toFixed(2)}\nLevel: ${level}\nAverage sentence length: ${avgSentenceLength.toFixed(2)}\nAverage word length: ${avgWordLength.toFixed(2)}`);
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text to measure readability...",
          actionLabel: "Check",
          onAction: analyze,
          outputLabel: "Readability"
        })}
      </WidgetShell>
    );
  }

  if (slug === "sentence-analyzer") {
    const analyze = () => {
      const sentences = splitSentences(input);
      const details = sentences.map((sentence) => ({ sentence, count: getWords(sentence).length }));
      const shortest = details.reduce((best, item) => (!best || item.count < best.count ? item : best), null);
      const longest = details.reduce((best, item) => (!best || item.count > best.count ? item : best), null);
      setOutput(
        `${details.map((item, index) => `Sentence ${index + 1}: ${item.count} words`).join("\n")}\n\nShortest: ${shortest ? shortest.sentence : ""}\nLongest: ${longest ? longest.sentence : ""}`
      );
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text to inspect sentence lengths...",
          actionLabel: "Analyze",
          onAction: analyze,
          outputLabel: "Breakdown"
        })}
      </WidgetShell>
    );
  }

  if (slug === "text-complexity-analyzer") {
    const analyze = () => {
      const sentences = splitSentences(input);
      const words = getWords(input.toLowerCase().replace(/[^a-z0-9\s]/g, " "));
      const uniqueWords = new Set(words);
      const avgWords = sentences.length ? words.length / sentences.length : 0;
      const longWords = words.filter((word) => word.length >= 7).length;
      const diversityRatio = words.length ? uniqueWords.size / words.length : 0;
      const diversity = diversityRatio > 0.6 ? "High" : diversityRatio > 0.4 ? "Moderate" : "Low";
      setOutput(`Average words per sentence: ${avgWords.toFixed(2)}\nLong words: ${longWords}\nUnique words: ${uniqueWords.size}\nVocabulary diversity ratio: ${diversityRatio.toFixed(2)}\nDiversity level: ${diversity}`);
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text to analyze complexity...",
          actionLabel: "Analyze",
          onAction: analyze,
          outputLabel: "Complexity"
        })}
      </WidgetShell>
    );
  }

  if (slug === "text-redaction-tool") {
    const redact = () => {
      setOutput(
        input
          .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[REDACTED]")
          .replace(/\b\d{3,}\b/g, "[REDACTED]")
      );
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text with sensitive values...",
          actionLabel: "Redact",
          onAction: redact
        })}
      </WidgetShell>
    );
  }

  if (slug === "censor-text-tool") {
    const censor = () => {
      const words = bannedWords.split(",").map((item) => item.trim()).filter(Boolean);
      let next = input;
      words.forEach((word) => {
        next = next.replace(new RegExp(`\\b${escapeRegExp(word)}\\b`, "gi"), "****");
      });
      setOutput(next);
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text to censor...",
          controls: <PaneControl value={bannedWords} onChange={(event) => setBannedWords(event.target.value)} placeholder="Comma separated banned words" />,
          actionLabel: "Censor",
          onAction: censor
        })}
      </WidgetShell>
    );
  }

  if (slug === "text-validator") {
    const validate = () => {
      const checks = [
        { label: "Text is not empty", status: input.trim() ? "PASS" : "FAIL" },
        { label: "Length is at least 10 characters", status: input.length < 10 ? "WARN" : "PASS" },
        { label: "No multiple spaces found", status: /\s{2,}/.test(input) ? "WARN" : "PASS" },
        { label: "No 3+ blank lines found", status: /[\r\n]{3,}/.test(input) ? "WARN" : "PASS" }
      ];
      setOutput(checks.map((check) => `${check.status} ${check.label}`).join("\n"));
    };

    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste text to validate...",
          actionLabel: "Validate",
          onAction: validate,
          outputLabel: "Checks"
        })}
      </WidgetShell>
    );
  }

  if (slug === "text-to-speech") {
    const speak = () => {
      if (!speechSupported) {
        setNotice("This browser does not support text to speech.");
        return;
      }
      const utterance = new SpeechSynthesisUtterance(input);
      window.speechSynthesis.speak(utterance);
    };
    const stop = () => {
      if (speechSupported) window.speechSynthesis.cancel();
    };
    return (
      <WidgetShell notice={notice || (!speechSupported ? "This browser does not support text to speech." : "")}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Your text" action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>} />
            <PaneInput value={input} onChange={(event) => setInput(event.target.value)} placeholder="Paste text to hear it spoken aloud..." />
            <PaneFooter><span>{input.length} characters</span><span>{getWords(input).length} words</span></PaneFooter>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Playback" action={null} />
            <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-500 text-3xl text-white">🔊</div>
              <div className="flex flex-wrap justify-center gap-2">
                <PrimaryAction onClick={speak}>Speak</PrimaryAction>
                <PaneButton onClick={stop}>Stop</PaneButton>
                <PaneButton onClick={speak}>Replay</PaneButton>
              </div>
              <p className="text-[12px] text-slate-500">{speechSupported ? "Browser TTS ready" : "Not supported"}</p>
            </div>
          </RightPane>
        </SplitShell>
      </WidgetShell>
    );
  }

  if (slug === "speech-to-text") {
    const start = () => {
      if (!speechSupported || !recognitionRef.current) {
        setNotice("This browser does not support speech recognition.");
        return;
      }
      recognitionRef.current.start();
      setNotice("Recording started.");
    };
    const stop = () => {
      recognitionRef.current?.stop();
      setNotice("Recording stopped.");
    };
    return (
      <WidgetShell notice={notice || (!speechSupported ? "This browser does not support speech recognition." : "")}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Recording" action={null} />
            <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500 text-3xl text-white">🎤</div>
              <div className="flex flex-wrap justify-center gap-2">
                <PrimaryAction onClick={start}>Start Recording</PrimaryAction>
                <PaneButton onClick={stop}>Stop Recording</PaneButton>
              </div>
              <p className="text-[12px] text-slate-500">{speechSupported ? "Microphone ready" : "Not supported"}</p>
            </div>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Transcript" action={<PaneButton onClick={() => copyText(output, setNotice)}>Copy</PaneButton>} />
            <PaneOutput value={output} />
            <PaneFooter><span>{output.length} characters</span><span>{getWords(output).length} words</span></PaneFooter>
          </RightPane>
        </SplitShell>
      </WidgetShell>
    );
  }

  if (slug === "text-to-binary-converter") {
    const delimiterMap = { space: " ", newline: "\n", none: "" };
    const filteredAscii = asciiReference.filter((item) => `${item.code} ${item.char}`.toLowerCase().includes(searchAscii.toLowerCase()));
    const convert = () => {
      const width = binaryMode === "ascii" ? 8 : 16;
      const result = input
        .split("")
        .map((char) => char.charCodeAt(0).toString(2).padStart(width, "0"))
        .join(delimiterMap[delimiter]);
      setOutput(result);
    };
    return (
      <WidgetShell notice={notice}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Your text" action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>} />
            <div className="grid gap-2 sm:grid-cols-2">
              <PaneSelect value={binaryMode} onChange={(event) => setBinaryMode(event.target.value)}>
                <option value="ascii">ASCII (8-bit)</option>
                <option value="utf16">UTF-16</option>
              </PaneSelect>
              <PaneSelect value={delimiter} onChange={(event) => setDelimiter(event.target.value)}>
                <option value="space">Space</option>
                <option value="newline">Newline</option>
                <option value="none">None</option>
              </PaneSelect>
            </div>
            <PaneInput value={input} onChange={(event) => setInput(event.target.value)} placeholder="Paste text to convert into binary..." />
            <PaneFooter><span>{input.length} characters</span><span>{getWords(input).length} words</span></PaneFooter>
            <div><PrimaryAction onClick={convert}>Convert</PrimaryAction></div>
          </LeftPane>
          <RightPane>
            <PaneHeader label="Binary" action={
              <div className="flex gap-2">
                <PaneButton onClick={() => copyText(output, setNotice)}>Copy</PaneButton>
                <PaneButton onClick={() => downloadText("binary-output.txt", output)}>Download</PaneButton>
              </div>
            } />
            <PaneOutput value={output} />
            <PaneFooter><span>{output.length} characters</span></PaneFooter>
          </RightPane>
        </SplitShell>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h3 className="text-base font-semibold text-slate-900">ASCII Reference Table</h3>
            <PaneControl value={searchAscii} onChange={(event) => setSearchAscii(event.target.value)} placeholder="Search ASCII table" className="md:max-w-xs" />
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {filteredAscii.map((item) => (
              <div key={item.code} className="rounded-md border border-slate-200 px-3 py-2 text-[12px] text-slate-500">
                {item.code} = {item.char}
              </div>
            ))}
          </div>
        </div>
      </WidgetShell>
    );
  }

  if (slug === "binary-to-text-converter") {
    const decode = () => {
      const bytes = input.trim().split(/\s+/).filter(Boolean);
      const invalid = bytes.find((byte) => !/^[01]{8,16}$/.test(byte));
      if (invalid) {
        setNotice("Invalid binary input detected.");
        setOutput("");
        return;
      }
      setOutput(bytes.map((byte) => String.fromCharCode(parseInt(byte, 2))).join(""));
    };
    return (
      <WidgetShell notice={notice}>
        {renderSplit({
          inputPlaceholder: "Paste binary values separated by spaces...",
          actionLabel: "Decode",
          onAction: decode,
          outputLabel: "Decoded text"
        })}
      </WidgetShell>
    );
  }

  if (slug === "text-to-ascii-converter") {
    const delimiterMap = { space: " ", comma: ",", tab: "\t", newline: "\n", none: "" };
    const filteredAscii = asciiReference.filter((item) => `${item.code} ${item.char}`.toLowerCase().includes(searchAscii.toLowerCase()));
    const convert = () => {
      setOutput(input.split("").map((char) => char.charCodeAt(0)).join(delimiterMap[delimiter]));
    };
    return (
      <WidgetShell notice={notice}>
        <SplitShell>
          <LeftPane>
            <PaneHeader label="Your text" action={<PaneButton onClick={() => setInput("")}>Clear</PaneButton>} />
            <PaneSelect value={delimiter} onChange={(event) => setDelimiter(event.target.value)}>
              <option value="space">Space</option>
              <option value="comma">Comma</option>
              <option value="tab">Tab</option>
              <option value="newline">Newline</option>
              <option value="none">None</option>
            </PaneSelect>
            <PaneInput value={input} onChange={(event) => setInput(event.target.value)} placeholder="Paste text to convert into ASCII codes..." />
            <PaneFooter><span>{input.length} characters</span><span>{getWords(input).length} words</span></PaneFooter>
            <div><PrimaryAction onClick={convert}>Convert</PrimaryAction></div>
          </LeftPane>
          <RightPane>
            <PaneHeader label="ASCII codes" action={
              <div className="flex gap-2">
                <PaneButton onClick={() => copyText(output, setNotice)}>Copy</PaneButton>
                <PaneButton onClick={() => downloadText("ascii-output.txt", output)}>Download</PaneButton>
              </div>
            } />
            <PaneOutput value={output} />
            <PaneFooter><span>{output.length} characters</span></PaneFooter>
          </RightPane>
        </SplitShell>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h3 className="text-base font-semibold text-slate-900">ASCII Reference</h3>
            <PaneControl value={searchAscii} onChange={(event) => setSearchAscii(event.target.value)} placeholder="Search ASCII table" className="md:max-w-xs" />
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {filteredAscii.map((item) => (
              <div key={item.code} className="rounded-md border border-slate-200 px-3 py-2 text-[12px] text-slate-500">
                {item.code} = {item.char}
              </div>
            ))}
          </div>
        </div>
      </WidgetShell>
    );
  }

  return (
    <WidgetShell notice={notice}>
      {renderSplit({
        inputPlaceholder: "Paste text here...",
        actionLabel: "Process",
        onAction: () => setOutput(input)
      })}
    </WidgetShell>
  );
}
