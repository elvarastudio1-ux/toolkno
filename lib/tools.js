const SITE_URL = "https://toolkno.com";

export const tools = [
  { slug: "word-counter", name: "Word Counter", description: "Count words, characters, sentences, paragraphs and reading time instantly", category: "counters", icon: "W", isPaid: false },
  { slug: "character-counter", name: "Character Counter", description: "Count characters with and without spaces for SEO and social media", category: "counters", icon: "#", isPaid: false },
  { slug: "sentence-counter", name: "Sentence Counter", description: "Count sentences in your text instantly and free", category: "counters", icon: "P", isPaid: false },
  { slug: "paragraph-counter", name: "Paragraph Counter", description: "Count paragraphs online instantly", category: "counters", icon: "S", isPaid: false },
  { slug: "case-converter", name: "Case Converter", description: "Convert text to uppercase, lowercase, title case, sentence case and toggle case", category: "case", icon: "Cc", isPaid: false },
  { slug: "text-to-uppercase-converter", name: "Text to Uppercase", description: "Convert text into ALL CAPS for headings, labels and data formatting", category: "case", icon: "UP", isPaid: false },
  { slug: "text-to-lowercase-converter", name: "Text to Lowercase", description: "Convert text to clean lowercase for data cleanup and SEO formatting", category: "case", icon: "lo", isPaid: false },
  { slug: "title-case-converter", name: "Title Case Converter", description: "Format text into proper title case for headlines and blog titles", category: "case", icon: "Tt", isPaid: false },
  { slug: "sentence-case-converter", name: "Sentence Case Converter", description: "Convert text to sentence case for grammar and readability", category: "case", icon: "S.", isPaid: false },
  { slug: "toggle-case-converter", name: "Toggle Case Converter", description: "Switch uppercase letters to lowercase and vice versa instantly", category: "case", icon: "Aa", isPaid: false },
  { slug: "remove-extra-spaces", name: "Remove Extra Spaces", description: "Remove double spaces, trim and clean whitespace from text", category: "remove", icon: "SP", isPaid: false },
  { slug: "remove-line-breaks", name: "Remove Line Breaks", description: "Remove all line breaks from text and convert to single line", category: "remove", icon: "LB", isPaid: false },
  { slug: "remove-duplicate-lines", name: "Remove Duplicate Lines", description: "Remove duplicate lines and keep only unique entries", category: "remove", icon: "DL", isPaid: false },
  { slug: "remove-special-characters", name: "Remove Special Characters", description: "Strip punctuation and symbols from text keeping letters and numbers", category: "remove", icon: "SC", isPaid: false },
  { slug: "remove-numbers-from-text", name: "Remove Numbers from Text", description: "Strip all numbers from any text instantly", category: "remove", icon: "N0", isPaid: false },
  { slug: "remove-punctuation", name: "Remove Punctuation", description: "Remove all punctuation marks from text quickly and safely", category: "remove", icon: "PU", isPaid: false },
  { slug: "remove-emojis", name: "Remove Emojis", description: "Remove emoji characters from text for professional use", category: "remove", icon: "EM", isPaid: false },
  { slug: "remove-html-tags", name: "Remove HTML Tags", description: "Strip all HTML tags and keep only readable plain text", category: "remove", icon: "HT", isPaid: false },
  { slug: "remove-urls-from-text", name: "Remove URLs from Text", description: "Remove all website links from text instantly", category: "remove", icon: "URL", isPaid: false },
  { slug: "remove-email-addresses-from-text", name: "Remove Email Addresses", description: "Remove all email addresses from text to protect privacy", category: "remove", icon: "MAIL", isPaid: false },
  { slug: "remove-accents", name: "Remove Accents", description: "Convert accented characters to plain letter equivalents", category: "remove", icon: "Aa", isPaid: false },
  { slug: "text-sorter-a-z", name: "Text Sorter A-Z", description: "Sort text lines alphabetically from A to Z", category: "sort", icon: "AZ", isPaid: false },
  { slug: "text-sorter-z-a", name: "Text Sorter Z-A", description: "Sort text lines in reverse alphabetical order Z to A", category: "sort", icon: "ZA", isPaid: false },
  { slug: "reverse-text", name: "Reverse Text", description: "Reverse any text character by character instantly", category: "sort", icon: "RT", isPaid: false },
  { slug: "reverse-words", name: "Reverse Words", description: "Reverse the order of words in your text", category: "sort", icon: "RW", isPaid: false },
  { slug: "reverse-lines", name: "Reverse Lines", description: "Reverse the order of lines in multi-line text", category: "sort", icon: "RL", isPaid: false },
  { slug: "text-splitter", name: "Text Splitter", description: "Split text into separate lines using commas, spaces or line breaks", category: "split", icon: "TS", isPaid: false },
  { slug: "line-splitter", name: "Line Splitter", description: "Format text into separate lines using line-based formatting", category: "split", icon: "LS", isPaid: false },
  { slug: "word-splitter", name: "Word Splitter", description: "Separate text into individual words instantly", category: "split", icon: "WS", isPaid: false },
  { slug: "paragraph-splitter", name: "Paragraph Splitter", description: "Divide long text into separate paragraphs", category: "split", icon: "PS", isPaid: false },
  { slug: "combine-text-lines", name: "Combine Text Lines", description: "Merge multiple lines of text into one single line", category: "split", icon: "CL", isPaid: false },
  { slug: "text-joiner", name: "Text Joiner", description: "Join multiple lines using a separator of your choice", category: "split", icon: "TJ", isPaid: false },
  { slug: "lorem-ipsum-generator", name: "Lorem Ipsum Generator", description: "Generate placeholder text for websites, apps and documents", category: "generators", icon: "LI", isPaid: false },
  { slug: "random-word-generator", name: "Random Word Generator", description: "Generate random words for writing, brainstorming and testing", category: "generators", icon: "RW", isPaid: false },
  { slug: "random-sentence-generator", name: "Random Sentence Generator", description: "Generate random sentences for layout testing and writing practice", category: "generators", icon: "RS", isPaid: false },
  { slug: "random-paragraph-generator", name: "Random Paragraph Generator", description: "Generate random paragraphs for mockups and wireframes", category: "generators", icon: "RP", isPaid: false },
  { slug: "prefix-suffix-text-generator", name: "Prefix Suffix Generator", description: "Add custom prefix or suffix to every line of text", category: "generators", icon: "PF", isPaid: false },
  { slug: "text-compare-tool", name: "Text Compare", description: "Compare two texts and find differences instantly", category: "analyze", icon: "TC", isPaid: false },
  { slug: "text-difference-checker", name: "Text Difference Checker", description: "Check if two texts contain any differences", category: "analyze", icon: "TD", isPaid: false },
  { slug: "case-sensitive-compare", name: "Case Sensitive Compare", description: "Compare texts with exact case sensitivity matching", category: "analyze", icon: "CS", isPaid: false },
  { slug: "case-insensitive-compare", name: "Case Insensitive Compare", description: "Compare texts ignoring uppercase and lowercase differences", category: "analyze", icon: "CI", isPaid: false },
  { slug: "keyword-density-checker", name: "Keyword Density Checker", description: "Analyze keyword frequency and density in your content", category: "analyze", icon: "KD", isPaid: false },
  { slug: "stop-word-counter", name: "Stop Word Counter", description: "Count common stop words in your text", category: "analyze", icon: "SW", isPaid: false },
  { slug: "readability-checker", name: "Readability Checker", description: "Check how easy or difficult your text is to read", category: "analyze", icon: "RD", isPaid: false },
  { slug: "sentence-analyzer", name: "Sentence Analyzer", description: "Analyze sentence structure and length patterns in your text", category: "analyze", icon: "SA", isPaid: false },
  { slug: "text-complexity-analyzer", name: "Text Complexity Analyzer", description: "Understand vocabulary depth and sentence complexity", category: "analyze", icon: "CX", isPaid: false },
  { slug: "text-masking-tool", name: "Text Masking Tool", description: "Hide sensitive parts of text by replacing with symbols", category: "privacy", icon: "TM", isPaid: false },
  { slug: "text-redaction-tool", name: "Text Redaction Tool", description: "Permanently hide sensitive information with blackout placeholders", category: "privacy", icon: "TR", isPaid: false },
  { slug: "censor-text-tool", name: "Censor Text Tool", description: "Censor sensitive words from text while keeping structure readable", category: "privacy", icon: "CT", isPaid: false },
  { slug: "normalize-unicode-text", name: "Normalize Unicode Text", description: "Standardize Unicode text into consistent format across systems", category: "privacy", icon: "NU", isPaid: false },
  { slug: "find-and-replace-text", name: "Find and Replace", description: "Find specific words and replace them with new text instantly", category: "utilities", icon: "FR", isPaid: false },
  { slug: "text-randomizer", name: "Text Randomizer", description: "Shuffle and randomize the order of words in your text", category: "utilities", icon: "TR", isPaid: false },
  { slug: "shuffle-text-lines", name: "Shuffle Text Lines", description: "Randomly shuffle the order of lines in your text", category: "utilities", icon: "SL", isPaid: false },
  { slug: "text-tokenizer", name: "Text Tokenizer", description: "Split text into individual tokens for structured analysis", category: "utilities", icon: "TT", isPaid: false },
  { slug: "text-validator", name: "Text Validator", description: "Validate text against basic formatting and content rules", category: "utilities", icon: "TV", isPaid: false },
  { slug: "text-to-speech", name: "Text to Speech", description: "Convert written text into spoken audio in your browser", category: "audio", icon: "TS", isPaid: false },
  { slug: "speech-to-text", name: "Speech to Text", description: "Convert spoken audio into written text instantly", category: "audio", icon: "ST", isPaid: false },
  { slug: "text-to-binary-converter", name: "Text to Binary", description: "Convert plain text into binary code for developers and engineers", category: "developer", icon: "01", isPaid: false },
  { slug: "binary-to-text-converter", name: "Binary to Text", description: "Decode binary numbers into readable characters instantly", category: "developer", icon: "10", isPaid: false },
  { slug: "text-to-ascii-converter", name: "Text to ASCII", description: "Convert text into decimal ASCII character codes", category: "developer", icon: "A#", isPaid: false }
];

export const categories = [
  "All",
  "Counters",
  "Case",
  "Remove",
  "Sort",
  "Split",
  "Generators",
  "Analyze",
  "Privacy",
  "Utilities",
  "Audio",
  "Developer"
];

export const categoryLabelMap = {
  counters: "Counters",
  case: "Case",
  remove: "Remove",
  sort: "Sort",
  split: "Split",
  generators: "Generators",
  analyze: "Analyze",
  privacy: "Privacy",
  utilities: "Utilities",
  audio: "Audio",
  developer: "Developer"
};

const stopWords = [
  "a", "an", "the", "and", "or", "but", "if", "is", "are", "was", "were", "to", "of", "in",
  "on", "for", "with", "at", "by", "from", "this", "that", "these", "those", "it", "as", "be",
  "has", "have", "had", "not", "so", "such", "its", "their", "there", "which", "who"
];

function getCategoryLabel(category) {
  return categoryLabelMap[category] || "Tools";
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildSeoDescriptionText(tool) {
  return `${tool.name} on Toolkno is a fast, browser-based utility built for people who need a reliable way to ${tool.description.toLowerCase()}. Instead of bouncing between heavy editors, spreadsheets, and scripts, you can open this page and handle the job in a clean interface that works on desktop and mobile. The tool is especially useful for writers, students, SEO specialists, marketers, developers, support teams, and anyone cleaning or analyzing text before publishing or sharing it. Because the workflow runs instantly in the browser, you can test ideas, fix formatting problems, and review results without waiting for uploads or account checks. This page is also designed for search visibility and repeat use, which means it includes clear instructions, helpful examples, related tools, and a focused layout that keeps attention on the task. If you want a free online ${tool.name.toLowerCase()} that is simple, quick, and practical for real work, Toolkno gives you a polished version you can return to any time.`;
}

function buildWhatIsText(tool) {
  const category = getCategoryLabel(tool.category).toLowerCase();
  return `A ${tool.name.toLowerCase()} is a text utility that helps you ${tool.description.toLowerCase()}. In day-to-day work, that matters because raw text is rarely perfect when it comes from documents, chats, CMS exports, spreadsheets, scraped data, transcripts, or copied browser content. A focused ${tool.name.toLowerCase()} removes that friction by giving you a fast place to process content and immediately review the result. Toolkno built this version for people who want dependable output without the complexity of desktop software or coding scripts. It fits naturally into content editing, SEO checks, data cleanup, developer workflows, classroom assignments, and routine publishing tasks. Since this tool lives inside the broader Toolkno ${category} collection, it also pairs well with counters, removers, analyzers, and converters when you need to chain several small text operations together. The goal is straightforward: help you finish the job faster, keep formatting consistent, and reduce manual errors while staying completely usable on mobile and desktop browsers.`;
}

function buildHowToUse(tool) {
  return [
    `Paste or type the content you want to process with ${tool.name}.`,
    `Adjust any tool options shown on the page so the output matches your use case.`,
    `Run the main action and review the result, counts, or validation feedback instantly.`,
    `Copy the final output or clear the fields to start again with fresh text.`
  ];
}

function buildFaqs(tool) {
  return [
    {
      question: `Is ${tool.name} free to use?`,
      answer: `Yes. ${tool.name} is available as a free online tool on Toolkno and works directly in your browser without a required login for normal use.`
    },
    {
      question: `Who should use ${tool.name}?`,
      answer: `${tool.name} is useful for writers, marketers, students, developers, editors, and operations teams who need fast text processing without switching into heavier software.`
    },
    {
      question: `Does ${tool.name} work on mobile devices?`,
      answer: `Yes. The Toolkno interface is mobile responsive, so you can use ${tool.name} on phones, tablets, and desktop browsers with the same core workflow.`
    }
  ];
}

export function getToolBySlug(slug) {
  return tools.find((tool) => tool.slug === slug);
}

export function getAllToolRoutes() {
  return tools.map((tool) => `/tools/${tool.slug}`);
}

export function getRelatedToolSlugs(slug) {
  const tool = getToolBySlug(slug);
  if (!tool) return [];

  // Rotate within same category so every tool appears in others' related lists.
  // For tool at index i in its category list, pick the next 4 cyclically (skipping self).
  const sameCat = tools.filter((t) => t.category === tool.category);
  const idx = sameCat.findIndex((t) => t.slug === slug);
  const picks = [];
  const TARGET = 4;

  if (idx !== -1 && sameCat.length > 1) {
    for (let step = 1; step < sameCat.length && picks.length < TARGET; step++) {
      const cand = sameCat[(idx + step) % sameCat.length];
      if (cand && cand.slug !== slug) picks.push(cand.slug);
    }
  }

  if (picks.length >= TARGET) return picks;

  // Top-up from cross-category pool, also rotated to avoid clustering
  const others = tools.filter((t) => t.slug !== slug && !picks.includes(t.slug));
  const globalIdx = tools.findIndex((t) => t.slug === slug);
  const need = TARGET - picks.length;
  for (let step = 1; step <= others.length && picks.length < TARGET; step++) {
    const cand = others[(globalIdx + step) % others.length];
    if (cand && !picks.includes(cand.slug)) picks.push(cand.slug);
  }

  return picks;
}

export function getRelatedTools(slugs = []) {
  return slugs.map((slug) => getToolBySlug(slug)).filter(Boolean);
}

const slugContentOverrides = {
  "word-counter": {
    description:
      "Paste your text and instantly see your word count, reading time, and 6 more stats — free, no signup needed.",
    whatIs:
      "Ever finish writing and wonder if you've hit the word limit? Paste your text here and you'll know in seconds.\n\nWriters use it to hit blog post targets. Students use it for essay requirements. Marketers keep their copy tight. Whatever you're writing, knowing your count shouldn't slow you down.",
    howToUse: [
      "Paste your draft or start typing in the box on the left",
      "Every stat updates instantly as you type — no clicking needed",
      "Check reading time to see how long it takes someone to read your text",
      "Hit Copy all to grab every stat as plain text"
    ],
    faqs: [
      {
        question: "Is Word Counter free to use?",
        answer:
          "Completely free, forever. No account, no hidden limits. Just open and start.",
        tip: "Bookmark it — you'll use it more than you think."
      },
      {
        question: "Who should use Word Counter?",
        answer:
          "Anyone who writes. Blog posts, essays, captions, emails — if you have a word limit this is for you."
      },
      {
        question: "Does it work on mobile?",
        answer: "Yes, works perfectly on phone and tablet."
      },
      {
        question: "Does it count in real time?",
        answer: "Yes — every keystroke updates instantly.",
        tip: "Paste a full article to see reading time immediately."
      },
      {
        question: "What counts as a word?",
        answer:
          "Any characters separated by a space. \"hello world\" = 2 words.",
        tip: "Use unique words stat to spot repetition."
      },
      {
        question: "Is my text stored anywhere?",
        answer:
          "No. Everything runs in your browser. Your text never leaves your device.",
        tip: "Safe to paste confidential documents."
      }
    ]
  }
  ,
  "character-counter": {
    description: "Count characters with and without spaces in real time — perfect for tweets, SMS and meta descriptions.",
    whatIs: "You write a tweet or meta description and have no idea how close you are to the limit. Counting in your head wastes time and breaks your flow.\n\nPaste your text and the count updates as you type, with and without spaces.\n\nIf you're writing tweets, you stop guessing at 280. If you're tightening meta descriptions, you keep them under 160 so Google doesn't truncate. If you're sending SMS, you stay inside one message instead of paying for two.",
    howToUse: [
      "Paste your tweet, meta description or SMS",
      "Watch both counts update on every keystroke",
      "Trim or rewrite if you're over the limit",
      "Hit Copy when the count fits"
    ],
    faqs: [
      { question: "What's the character limit on X (Twitter)?", answer: "280 including spaces, links and emojis. Links count as 23 even after t.co shortens them.", tip: "Plan for the link before adding emojis." },
      { question: "Why are with-spaces and without-spaces different?", answer: "Some platforms count whitespace, others don't. Always check which version your platform uses.", tip: "Google meta descriptions count spaces." },
      { question: "Does an emoji count as one character?", answer: "Most emojis count as 2 because they're stored as Unicode surrogate pairs.", tip: "Add emojis last when you're near the limit." },
      { question: "How long should a meta description be?", answer: "Aim for 150-160 so the snippet shows on desktop SERPs.", tip: "Front-load your keyword in the first 110 characters." },
      { question: "Why does my SMS split into two messages?", answer: "Standard SMS caps at 160 GSM-7 characters. Over that, carriers bill per part.", tip: "Avoid emojis in SMS — they switch encoding to a 70-character limit." },
      { question: "Are smart quotes counted accurately?", answer: "Every Unicode character is counted exactly, including smart quotes and dashes.", tip: "Curly quotes can push you over a tight cap." }
    ]
  },
  "sentence-counter": {
    description: "Count sentences in any document instantly — spot run-ons, hit essay minimums and pace your prose.",
    whatIs: "You finish a draft and need to know if you've hit the sentence requirement. Scanning for periods is slow and easy to miscount.\n\nPaste your text and see the count update live.\n\nIf you're editing prose, you spot one-sentence paragraphs that need expansion. If you're grading essays, you verify minimums before reading. If you're writing technical docs, you confirm each step is one clean sentence for screen readers.",
    howToUse: [
      "Paste your essay, article or paragraph",
      "Read the live sentence count",
      "Spot one-sentence paragraphs and expand them",
      "Compare counts across drafts"
    ],
    faqs: [
      { question: "How does it detect sentence boundaries?", answer: "It splits on . ! ? followed by whitespace and a capital. Abbreviations like 'Mr.' don't get miscounted.", tip: "Add periods to dangling headlines if you want them counted." },
      { question: "Does an ellipsis count as one or three?", answer: "It counts as one sentence break, not three.", tip: "Use the single character '…' for cleanest detection." },
      { question: "What's a healthy average sentence length?", answer: "15-20 words for general audiences. 8-12 for marketing copy and landing pages.", tip: "Mix short snaps with longer flow sentences." },
      { question: "Will a fragment without a period count?", answer: "It won't. Terminal punctuation is required.", tip: "Add a period if you want fragments included." },
      { question: "Does it count CJK sentences?", answer: "Chinese, Japanese and Korean full stops (。) are detected alongside Western punctuation.", tip: "Mixed-language docs count correctly." },
      { question: "How is sentence count different from word count?", answer: "Word count measures bulk. Sentence count reveals structure and density.", tip: "Use both to spot dense paragraphs hiding too many words in one sentence." }
    ]
  },
  "paragraph-counter": {
    description: "Count paragraphs in long-form text instantly — track structure, pacing and section balance.",
    whatIs: "You're working on a long article and need to know if your structure breathes. Scrolling and counting breaks is tedious.\n\nPaste your draft and see paragraph count update live, blank lines treated as breaks.\n\nIf you're editing long-form, you flag walls of text that need breaking up. If you're auditing UX copy, you check that mobile layouts have enough whitespace. If you're managing book chapters, you verify each one hits structural targets.",
    howToUse: [
      "Paste your article, chapter or page copy",
      "Read the live paragraph count",
      "Insert breaks where one paragraph runs too long",
      "Compare counts across chapters or pages"
    ],
    faqs: [
      { question: "What counts as a paragraph?", answer: "Any block separated by a blank line. Single line breaks don't count.", tip: "If your source uses single breaks, normalize first." },
      { question: "What's a good paragraph length?", answer: "2-4 sentences for web. Up to 6-8 for academic prose.", tip: "Mobile screens make 5+ sentence paragraphs feel like walls." },
      { question: "Will a heading count?", answer: "Headings are paragraph blocks unless you strip them first.", tip: "Strip markdown if you only want body paragraphs." },
      { question: "What if my text uses single newlines?", answer: "It counts as one big paragraph. Add blank lines between blocks.", tip: "PDFs often use single line breaks even between visual paragraphs." },
      { question: "Are empty paragraphs counted?", answer: "Empty blocks are ignored by default.", tip: "Useful for finding accidental double blank lines." },
      { question: "How does this compare to word count?", answer: "Word count tracks bulk. Paragraph count tracks structural rhythm.", tip: "Use both to find paragraphs that are too long or too short." }
    ]
  },
  "case-converter": {
    description: "Switch between UPPER, lower, Title and Sentence case in one click — fix copy from any source.",
    whatIs: "Someone sent you a doc in ALL CAPS or with bROkEn caps and you need it presentable. Retyping every sentence is the slowest fix possible.\n\nPaste the messy text, pick the case you want and the result appears instantly.\n\nIf you're cleaning client copy, you fix capitalization in seconds. If you're formatting headlines, you switch between Title Case and sentence case to compare. If you're prepping data for import, you normalize case to keep databases consistent.",
    howToUse: [
      "Paste your messy or shouty text",
      "Pick the target case — UPPER, lower, Title or Sentence",
      "Review the converted output",
      "Hit Copy and paste it where you need it"
    ],
    faqs: [
      { question: "What's the difference between Title Case and Sentence case?", answer: "Title Case capitalizes most words. Sentence case only capitalizes the first word and proper nouns.", tip: "Most blog headlines use Title Case; modern web prefers Sentence case." },
      { question: "Will it preserve acronyms like NASA?", answer: "Standard conversion may lowercase them in Title or Sentence mode.", tip: "Manually fix acronyms after conversion if precision matters." },
      { question: "Does it handle non-English text?", answer: "It works on most Latin alphabets. Locale-specific rules (Turkish 'I') need a dedicated tool.", tip: "Test with one paragraph before converting an entire doc." },
      { question: "What does Toggle Case do?", answer: "It flips every uppercase letter to lowercase and vice versa.", tip: "Use it as a fast prank or to undo accidental Caps Lock." },
      { question: "Is it case sensitive in detection?", answer: "It re-cases every letter regardless of input.", tip: "Even fully shouty text becomes clean Sentence case in one click." },
      { question: "Can I convert just one paragraph?", answer: "Paste only the paragraph you want converted.", tip: "Run multiple paragraphs through different cases for comparison." }
    ]
  },
  "text-to-uppercase-converter": {
    description: "Convert text to ALL CAPS in one click — perfect for headings, labels and shouting.",
    whatIs: "You need text in ALL CAPS but holding Shift through a paragraph is exhausting. Hitting Caps Lock mid-sentence leaves a mess.\n\nPaste any text and get clean uppercase output instantly.\n\nIf you're styling headings, you skip the CSS and bake caps into the copy. If you're emphasizing legal warnings, you make terms unmissable. If you're formatting CSV codes, you normalize SKUs to uppercase before import.",
    howToUse: [
      "Paste your text into the input box",
      "See the uppercase version on the right instantly",
      "Edit the original to refine if needed",
      "Hit Copy and paste into your headline, label or CSV"
    ],
    faqs: [
      { question: "Will it convert numbers and symbols?", answer: "Numbers and symbols stay as-is. Only letters change case.", tip: "Mixed alphanumeric content like SKU codes work cleanly." },
      { question: "Does it keep my line breaks?", answer: "Every line break and paragraph stays intact.", tip: "Useful when uppercasing whole emails or terms of service." },
      { question: "Will it shout 'Mr.' as 'MR.'?", answer: "Periods stay where they are. Only the letters change.", tip: "Strip punctuation first if you don't want it in the output." },
      { question: "Is using ALL CAPS bad in body text?", answer: "Long blocks of caps slow reading and feel like shouting. Use sparingly.", tip: "Reserve caps for short headlines, labels or warnings." },
      { question: "Can I undo the uppercase conversion?", answer: "Re-paste the original or run the Lowercase converter on the result.", tip: "Keep the original draft in case you want to revert." },
      { question: "Does it work on accented letters?", answer: "Accented letters convert correctly: 'café' becomes 'CAFÉ'.", tip: "Some old fonts drop accents on caps — preview before publishing." }
    ]
  },
  "text-to-lowercase-converter": {
    description: "Convert text to clean lowercase in one click — fix accidental Caps Lock and prep data for storage.",
    whatIs: "Someone typed an email or hashtag in ALL CAPS and now it looks like spam. Manually deleting and retyping is the slow fix.\n\nPaste the text and get clean lowercase output instantly.\n\nIf you're storing emails in a database, you normalize them to prevent duplicates. If you're styling lowercase brand names, you fix imports that came in caps. If you're cleaning hashtag lists, you keep social posts looking modern instead of shouty.",
    howToUse: [
      "Paste your shouty or mixed-case text",
      "See the lowercase version appear instantly",
      "Edit the original if you need adjustments",
      "Hit Copy and paste it back where you need it"
    ],
    faqs: [
      { question: "Will it lowercase proper nouns?", answer: "Every letter becomes lowercase including names. Run Title Case after if you need proper nouns capitalized again.", tip: "Keep the original draft if you might need to revert." },
      { question: "Does it preserve spaces and punctuation?", answer: "All whitespace and punctuation stays exactly where it was.", tip: "Strip punctuation separately if you need bare words." },
      { question: "Why store emails in lowercase?", answer: "Email local parts are case-insensitive in practice. Storing one canonical form avoids duplicate accounts.", tip: "Always lowercase emails before insert." },
      { question: "Will accented letters lowercase correctly?", answer: "'CAFÉ' becomes 'café' with the accent preserved.", tip: "Locale-specific cases like Turkish need a locale-aware tool." },
      { question: "Can I lowercase just the first letter?", answer: "This tool lowercases everything. Use Sentence Case for first-letter handling.", tip: "Toggle Case flips a single letter quickly." },
      { question: "Is lowercase better for SEO?", answer: "URLs are case-sensitive on most servers. Lowercase URLs prevent duplicate-content issues.", tip: "Always use lowercase slugs in CMS settings." }
    ]
  },
  "title-case-converter": {
    description: "Convert text to proper Title Case in one click — perfect for blog titles and headlines.",
    whatIs: "You wrote a blog title in lowercase and need to capitalize it properly. Going word by word and skipping articles wastes time and you'll always miss one.\n\nPaste your sentence and get a clean Title Case version with small words handled correctly.\n\nIf you're publishing blog posts, you keep headlines consistent across the site. If you're naming chapters, you make tables of contents look professional. If you're writing email subject lines, you format them for clean inbox previews.",
    howToUse: [
      "Paste your headline or title",
      "See the Title Case version instantly",
      "Tweak the original if a word looks wrong",
      "Hit Copy and paste into your CMS, email or doc"
    ],
    faqs: [
      { question: "Which words stay lowercase?", answer: "Articles, conjunctions and short prepositions: a, an, the, and, but, or, on, in, of.", tip: "First and last words always capitalize regardless." },
      { question: "What style does it follow?", answer: "Most converters use AP or Chicago style. Both capitalize most words and skip short ones.", tip: "Double-check rules manually if you need strict APA or MLA." },
      { question: "Will it capitalize after a colon?", answer: "Some styles do, others don't. Check the result and tweak if your style guide differs.", tip: "Most modern web style capitalizes after colons in titles." },
      { question: "Does it handle hyphenated words?", answer: "It capitalizes both halves: 'Self-Made' not 'Self-made'.", tip: "Some style guides keep the second half lowercase." },
      { question: "Can I use it on subtitles too?", answer: "Paste headline and subtitle together or separately.", tip: "Subtitles often look better in Sentence case for variety." },
      { question: "Does it work on email subject lines?", answer: "Title Case subject lines often look professional in inbox previews.", tip: "Test against Sentence case to see which gets more opens." }
    ]
  },
  "sentence-case-converter": {
    description: "Convert text to clean Sentence case in one click — only the first word and proper nouns capitalized.",
    whatIs: "Modern web style favors Sentence case but you've inherited a doc full of Title Case headlines. Lowering every word manually except the first is tedious.\n\nPaste any text and get clean Sentence case output instantly.\n\nIf you're modernizing brand voice, you switch from old-school Title Case to friendlier Sentence case. If you're writing UI copy, you match the case style most modern apps use. If you're prepping email previews, you keep subject lines feeling conversational.",
    howToUse: [
      "Paste your over-capitalized text",
      "See the Sentence case version instantly",
      "Manually re-capitalize proper nouns if needed",
      "Hit Copy and use it in your UI, email or doc"
    ],
    faqs: [
      { question: "Will proper nouns stay capitalized?", answer: "Standard sentence case lowercases everything except the first word. Proper nouns like 'Google' need manual fixing.", tip: "Search and re-capitalize brand names after conversion." },
      { question: "What about acronyms like NASA or API?", answer: "They get lowercased by default. Re-capitalize manually after conversion.", tip: "Keep a list of your brand's acronyms for consistent fixes." },
      { question: "When should I use Sentence case over Title Case?", answer: "Sentence case feels modern and friendly. Title Case feels formal and traditional.", tip: "Most SaaS UI uses Sentence case in 2024+." },
      { question: "Does it handle multiple sentences?", answer: "Each sentence's first word capitalizes; the rest go lowercase.", tip: "Verify by checking the start of every sentence." },
      { question: "Will questions and exclamations work?", answer: "Words after ? and ! are capitalized as new sentences.", tip: "Mixed-punctuation paragraphs convert cleanly." },
      { question: "Can I convert multiple headlines at once?", answer: "Paste them line by line; each gets converted independently.", tip: "Useful for batch-fixing CMS imports." }
    ]
  },
  "toggle-case-converter": {
    description: "Flip every uppercase letter to lowercase and vice versa in one click.",
    whatIs: "You hit Caps Lock by accident and typed half a paragraph in reverse case. Retyping it is the obvious but painful fix.\n\nPaste the messed-up text and toggle every letter's case in one shot.\n\nIf you're recovering from Caps Lock, you fix accidental rEVERSE cAPS in seconds. If you're styling cheeky social posts, you create alternating-case effects fast. If you're testing forms, you generate weird-case input to verify your validators handle it.",
    howToUse: [
      "Paste the reverse-case text",
      "See every letter flip instantly",
      "Tweak the original if needed",
      "Hit Copy and paste back where you need it"
    ],
    faqs: [
      { question: "What does toggle case actually do?", answer: "Every uppercase letter becomes lowercase and every lowercase becomes uppercase. Numbers and symbols stay the same.", tip: "Run it twice and you get the original back." },
      { question: "When is this useful?", answer: "Mostly for fixing Caps Lock accidents. Some use it for stylized social posts.", tip: "Don't use it on production data — it scrambles meaningful case." },
      { question: "Will it work on accented letters?", answer: "'á' becomes 'Á' and vice versa.", tip: "Test with one accented letter first if your text is mixed-language." },
      { question: "Does it preserve punctuation?", answer: "Punctuation, numbers and whitespace stay exactly as they are.", tip: "Only letters get flipped." },
      { question: "Is this the same as inverting?", answer: "Toggle and invert mean the same thing for letter case.", tip: "Reverse Text is different — that flips character order." },
      { question: "Can I revert a toggled string back?", answer: "Run the toggle again and the result inverts back to the original.", tip: "Keep the original copy in case you want to compare." }
    ]
  }
  ,
  "remove-extra-spaces": {
    description: "Collapse double spaces and trim leading/trailing whitespace in one click — perfect for cleaning pasted PDF or Word text.",
    whatIs: "You paste from a PDF and end up with double spaces, weird tabs and stray whitespace everywhere. Find-and-replace one-at-a-time won't catch them all.\n\nPaste the messy text and get a clean, single-spaced version instantly.\n\nIf you're cleaning PDF copy, you fix the broken spacing in seconds. If you're prepping content for a CMS, you avoid layout glitches from invisible characters. If you're processing form input, you normalize whitespace before saving to a database.",
    howToUse: [
      "Paste your messy text",
      "See the cleaned version with single spaces",
      "Verify line breaks and paragraphs look right",
      "Hit Copy and use the clean version"
    ],
    faqs: [
      { question: "What kinds of whitespace get cleaned?", answer: "Multiple spaces collapse to one. Tabs and leading/trailing spaces on each line are also trimmed.", tip: "Pair with Remove Line Breaks for total whitespace cleanup." },
      { question: "Will it preserve paragraph breaks?", answer: "Blank lines between paragraphs stay intact. Only inside-line whitespace collapses.", tip: "If paragraphs get merged, your input had no real blank lines." },
      { question: "Does it handle non-breaking spaces?", answer: "Yes, it converts non-breaking spaces (U+00A0) to regular spaces and collapses them.", tip: "PDFs often embed these invisibly." },
      { question: "Will tabs become spaces?", answer: "Tabs are converted to a single space.", tip: "For code with intentional tabs, don't run this tool." },
      { question: "Can it fix indented lists?", answer: "Indentation gets stripped along with other leading whitespace.", tip: "Use a markdown formatter if you need to preserve list indents." },
      { question: "Why does pasted text have hidden spaces?", answer: "Word and PDFs use unique whitespace characters for layout that often paste invisibly.", tip: "Combine with Normalize Unicode for a full clean." }
    ]
  },
  "remove-line-breaks": {
    description: "Strip line breaks and reflow text into one paragraph in one click — perfect for fixing copy-pasted PDF or email text.",
    whatIs: "PDFs and email forwards keep breaking lines mid-sentence because the original had a narrow column width. Reading that broken text feels jarring.\n\nPaste the broken text and reflow it into clean continuous paragraphs.\n\nIf you're quoting from a PDF in your essay, you fix the awkward mid-sentence breaks. If you're forwarding email content elsewhere, you remove the artificial line wraps. If you're scraping text from older websites, you clean up legacy formatting.",
    howToUse: [
      "Paste the broken text",
      "See it reflowed into clean paragraphs",
      "Re-add paragraph breaks if needed",
      "Hit Copy and use the clean version"
    ],
    faqs: [
      { question: "Does it preserve double line breaks for paragraphs?", answer: "By default it strips all line breaks. Toggle the option to keep blank lines as paragraph separators.", tip: "Most tools default to keeping paragraph breaks — verify before pasting." },
      { question: "Will words mash together?", answer: "Each line break becomes a space, so words stay separated.", tip: "If you see merged words, the original had no trailing space." },
      { question: "What about Windows vs Unix line endings?", answer: "Both \\r\\n (Windows) and \\n (Unix/Mac) get stripped.", tip: "Cross-platform text works without any prep." },
      { question: "Will it affect bullet lists?", answer: "Each bullet becomes part of one long line. Bullets lose their structure.", tip: "Run on prose only, not lists." },
      { question: "Can I keep some line breaks?", answer: "Use a placeholder like '|' before stripping, then find/replace it back to newlines after.", tip: "Useful for preserving headings inside reflowed text." },
      { question: "Why does pasted text have weird breaks?", answer: "PDF columns are fixed-width, so each visual line becomes its own line break in the source.", tip: "Always reflow PDF copy before quoting." }
    ]
  },
  "remove-duplicate-lines": {
    description: "Strip duplicate lines from any list in one click — perfect for cleaning email exports, SKUs and CSV rows.",
    whatIs: "You exported a list from your CRM and there are duplicates everywhere. Excel can do it but you don't want to fire it up for a quick clean.\n\nPaste your list and get only unique lines back instantly.\n\nIf you're cleaning email lists, you avoid double-emailing the same subscriber. If you're processing SKU exports, you remove inventory double-counts. If you're prepping a survey participant list, you make sure no one gets contacted twice.",
    howToUse: [
      "Paste your list, one item per line",
      "Toggle case sensitivity if needed",
      "See the deduplicated list instantly",
      "Hit Copy and paste back into your CRM or sheet"
    ],
    faqs: [
      { question: "Which duplicate gets kept?", answer: "The first occurrence stays, later duplicates get dropped. Original order is preserved.", tip: "Reverse the list first if you need the last occurrence kept." },
      { question: "Is it case-sensitive?", answer: "You can toggle it. Off means 'Apple' and 'apple' count as duplicates.", tip: "Use case-insensitive for email lists." },
      { question: "What about whitespace differences?", answer: "'Apple ' and 'Apple' count as different lines because of trailing space.", tip: "Run Remove Extra Spaces first for cleanest results." },
      { question: "Does it sort the output?", answer: "No, dedupe preserves original order. Use Sort A-Z separately if you need sorting.", tip: "Combine the two for fully cleaned lists." },
      { question: "Will it work on tens of thousands of lines?", answer: "Browser-side processing handles large lists fine, though very massive ones may slow your tab.", tip: "Split into batches if you have 100k+ lines." },
      { question: "Are blank lines deduplicated?", answer: "Multiple blank lines reduce to one.", tip: "Useful for cleaning scraped content with random whitespace." }
    ]
  },
  "remove-special-characters": {
    description: "Strip symbols, punctuation and weird Unicode in one click — keep only letters, digits and spaces.",
    whatIs: "Imported names or pasted product titles come laced with weird symbols, smart quotes and stray punctuation. They break URL slugs and database imports.\n\nPaste the messy text and get clean alphanumeric output back.\n\nIf you're generating URL slugs, you strip the symbols that would break routes. If you're cleaning database imports, you avoid encoding errors. If you're prepping search keywords, you keep only the meaningful characters.",
    howToUse: [
      "Paste text with messy characters",
      "See only letters, digits and spaces remain",
      "Adjust the original if too much got stripped",
      "Hit Copy and use the clean version"
    ],
    faqs: [
      { question: "What counts as 'special'?", answer: "Anything that isn't a letter, digit or space: punctuation, symbols, emojis, currency marks.", tip: "Use Remove Punctuation for a lighter clean." },
      { question: "Will accented letters survive?", answer: "Most tools strip non-ASCII letters too. Run Remove Accents first to convert é to e.", tip: "Stack tools for full ASCII output." },
      { question: "Are underscores and hyphens removed?", answer: "Yes, both get stripped.", tip: "Use a slug generator if you need hyphens kept between words." },
      { question: "Does it remove line breaks?", answer: "No, line breaks stay. Use Remove Line Breaks for that.", tip: "Combine tools for single-line output." },
      { question: "What about emojis?", answer: "Yes, emojis get stripped along with other symbols.", tip: "Use Remove Emojis if you want to keep punctuation." },
      { question: "Can it secure SQL inputs?", answer: "No, never rely on text cleaning for security. Use parameterized queries.", tip: "This is a cleanup tool, not a security layer." }
    ]
  },
  "remove-numbers-from-text": {
    description: "Strip all digits from text in one click — perfect for cleaning OCR output and prepping NLP training data.",
    whatIs: "Your OCR scan picked up page numbers and footnotes mixed in with the body text. Digits are useless noise for word-frequency analysis or topic modeling.\n\nPaste your text and get a digit-free version instantly.\n\nIf you're prepping NLP training data, you remove numeric noise from your tokens. If you're cleaning OCR output, you strip page numbers and dates. If you're analyzing word frequency, you keep only lexical content for cleaner results.",
    howToUse: [
      "Paste your text",
      "See digits removed instantly",
      "Run Remove Extra Spaces if needed",
      "Hit Copy and use the clean text"
    ],
    faqs: [
      { question: "Does it remove digits inside words?", answer: "Yes, 'mp3' becomes 'mp' and 'COVID19' becomes 'COVID'.", tip: "Whitelist brand names first if you need them preserved." },
      { question: "What about spelled-out numbers?", answer: "'Twenty-three' stays as letters. Only 0-9 digits are removed.", tip: "Use a number-word converter if you need to remove those too." },
      { question: "Does it strip Roman numerals?", answer: "No, Roman numerals like IV are letters and stay.", tip: "Run a regex pass separately for Roman numerals." },
      { question: "Will Unicode digits be removed?", answer: "Standard 0-9 are stripped. Devanagari or Arabic-Indic digits may pass through.", tip: "Normalize Unicode first for multilingual text." },
      { question: "Are gaps left where digits were removed?", answer: "Yes, removing mid-text digits leaves whitespace.", tip: "Stack Remove Extra Spaces afterward." },
      { question: "Is this a normal NLP step?", answer: "It's common for topic modeling but skip it for sentiment where numbers carry signal.", tip: "Always know your downstream task before stripping." }
    ]
  },
  "remove-punctuation": {
    description: "Strip periods, commas and all punctuation in one click — perfect for NLP preprocessing and clean tokenization.",
    whatIs: "You're prepping text for tokenization or word-frequency analysis. Every punctuation mark inflates your vocabulary and creates token noise.\n\nPaste any text and get a punctuation-free version back.\n\nIf you're training an ML model, you keep token counts honest. If you're indexing for search, you match queries with or without punctuation. If you're analyzing word frequencies, you stop 'hello' and 'hello,' from counting as different tokens.",
    howToUse: [
      "Paste your text",
      "See punctuation removed instantly",
      "Verify spaces and digits survived",
      "Hit Copy and feed into your pipeline"
    ],
    faqs: [
      { question: "Does it remove apostrophes?", answer: "Yes, 'don't' becomes 'dont'. Most tokenizers handle that fine.", tip: "Use a contraction expander first if you want 'do not'." },
      { question: "What about hyphens?", answer: "'State-of-the-art' fuses into 'stateoftheart'.", tip: "Replace hyphens with spaces first if you want word separation." },
      { question: "Does it catch smart quotes and em dashes?", answer: "Yes, Unicode punctuation including curly quotes and em dashes is stripped.", tip: "Normalize Unicode first for safety." },
      { question: "Are digits preserved?", answer: "Yes, only punctuation is stripped. Letters, digits and spaces stay.", tip: "Use Remove Numbers separately if needed." },
      { question: "Should I always strip punctuation for NLP?", answer: "Not always. Punctuation matters for sentiment and dialogue parsing.", tip: "Keep it for conversational models." },
      { question: "What about math symbols like + or =?", answer: "Math symbols usually stay; only standard punctuation goes.", tip: "Use Remove Special Characters for a deeper clean." }
    ]
  },
  "remove-emojis": {
    description: "Strip every emoji and pictograph from text in one click — perfect for cleaning social exports and legacy systems.",
    whatIs: "Imported customer feedback or social posts come packed with emojis. Legacy databases choke, B2B reports look childish, and analytics pipelines miscount tokens.\n\nPaste the emoji-heavy text and get clean letters back.\n\nIf you're storing data in legacy SQL, you avoid 4-byte UTF-8 errors. If you're writing B2B reports, you keep customer quotes professional. If you're processing reviews for analysis, you strip noise without losing meaning.",
    howToUse: [
      "Paste your emoji-laden text",
      "See every emoji removed instantly",
      "Run Remove Extra Spaces if needed",
      "Hit Copy and use the clean version"
    ],
    faqs: [
      { question: "Does it catch new Unicode emojis?", answer: "Yes, it covers Unicode 15+ ranges including skin tones and ZWJ sequences like family emojis.", tip: "Updates roll in as Unicode versions release." },
      { question: "Will it strip text smileys like :-)?", answer: "No, those are punctuation, not emoji codepoints. Use Find and Replace separately.", tip: "Watch for :), <3 and other ASCII faces." },
      { question: "What about flag emojis?", answer: "Both regional indicator codepoints are stripped together, no half-flags left.", tip: "Useful for international survey cleanup." },
      { question: "Will math or currency symbols stay?", answer: "Yes, ∑ and € and similar meaningful symbols are preserved.", tip: "Use Remove Special Characters for a deeper strip." },
      { question: "Are skin-tone modifiers handled?", answer: "Yes, base emoji and modifier strip together cleanly.", tip: "No orphaned tokens left behind." },
      { question: "Why remove emojis at all?", answer: "Legacy DBs, formal reports and some search indexes don't handle them well.", tip: "Keep them in social-first contexts." }
    ]
  },
  "remove-html-tags": {
    description: "Strip every HTML tag from copied web content in one click — perfect for cleaning CMS exports and scraped pages.",
    whatIs: "You copied content from a webpage and now there's <div> and <span> markup everywhere. Plain-text contexts can't render it and it makes the copy unreadable.\n\nPaste your HTML and get clean text without any tags.\n\nIf you're scraping articles, you strip markup before NLP processing. If you're migrating CMS content, you clean legacy tags between platforms. If you're prepping email content for plain-text fallbacks, you remove rich formatting fast.",
    howToUse: [
      "Paste your HTML-laden text",
      "See plain text without any tags",
      "Run HTML entity decoder if needed",
      "Hit Copy and use the clean text"
    ],
    faqs: [
      { question: "Does it remove scripts and styles?", answer: "Yes, <script> and <style> blocks strip along with their content.", tip: "Don't rely on this for security — sanitize server-side too." },
      { question: "What happens to link URLs?", answer: "The visible link text stays; the href is stripped with the <a> tag.", tip: "Use Find and Replace to preserve specific URLs first." },
      { question: "Does it decode entities like &amp;?", answer: "No, entities pass through as-is. Use an HTML entity decoder after.", tip: "Stack tools for full text extraction." },
      { question: "Will image alt text survive?", answer: "No, <img> tags strip entirely with their alt attributes.", tip: "Extract alt separately for accessibility migrations." },
      { question: "Does it preserve paragraph breaks?", answer: "Block structure flattens. Convert <p> and <br> to newlines first if you need breaks.", tip: "Run HTML-to-markdown first for structured output." },
      { question: "Does it work on partial HTML fragments?", answer: "Yes, it strips tags from any HTML, valid or partial.", tip: "Great for cleaning email signature copy." }
    ]
  },
  "remove-urls-from-text": {
    description: "Strip every http, https and www URL from text in one click — perfect for cleaning academic manuscripts and plagiarism checks.",
    whatIs: "You quoted a passage from a web article and inline URLs came along. Now your manuscript looks cluttered and plagiarism checkers flag noise.\n\nPaste the URL-laden text and get clean prose back.\n\nIf you're writing an essay, you keep quotes citation-ready without inline links. If you're prepping a manuscript, you avoid editor pushback on URL clutter. If you're cleaning scraped content, you remove tracking links before further processing.",
    howToUse: [
      "Paste your URL-laden text",
      "See URLs stripped instantly",
      "Run Remove Extra Spaces if needed",
      "Hit Copy and use the clean prose"
    ],
    faqs: [
      { question: "Does it catch bare domains like example.com?", answer: "www-prefixed domains get caught. Pure bare domains may slip through.", tip: "Run Find and Replace for known bare domains as a follow-up." },
      { question: "Will it remove query strings and fragments?", answer: "Yes, the full URL including ?query and #fragment goes in one pass.", tip: "Great for stripping UTM tracking from shared links." },
      { question: "What about ftp or mailto links?", answer: "http and https are the main targets. Use Remove Emails for mailto.", tip: "Stack tools for full link cleanup." },
      { question: "Does it handle markdown link syntax?", answer: "It strips the URL but leaves the [text] brackets behind.", tip: "Run Find and Replace for '[' and '](' to finish." },
      { question: "Will URLs in HTML attributes be removed?", answer: "Run Remove HTML Tags first; this tool focuses on visible URLs.", tip: "Stack tools for scraped content cleanup." },
      { question: "Are gaps left where URLs were stripped?", answer: "Yes, surrounding whitespace may need cleanup.", tip: "Stack Remove Extra Spaces for clean output." }
    ]
  },
  "remove-email-addresses-from-text": {
    description: "Strip every email address from text in one click — perfect for anonymizing transcripts and prepping GDPR-safe exports.",
    whatIs: "You're publishing data that contains personal emails. GDPR, CCPA and plain professionalism mean you can't let one slip through.\n\nPaste your text and get a clean version with all emails stripped.\n\nIf you're handling FOIA records, you redact identifiers before release. If you're prepping anonymized datasets, you remove personal hooks. If you're sharing logs publicly, you scrub user emails fast.",
    howToUse: [
      "Paste your text",
      "See every email stripped instantly",
      "Audit for obfuscated forms ('name [at] site')",
      "Hit Copy and use the clean version"
    ],
    faqs: [
      { question: "Does it catch obfuscated emails?", answer: "No, only standard name@domain.tld patterns. ' [at] ' obfuscations slip through.", tip: "Run Find and Replace for [at] and [dot] separately." },
      { question: "What about plus addressing?", answer: "Yes, 'jane+tag@gmail.com' gets caught fully.", tip: "Plus, dot and dash variations all detect." },
      { question: "Will it find emails in HTML?", answer: "Visible email text yes; mailto: in attributes may stay.", tip: "Run Remove HTML Tags first for full clean." },
      { question: "Does it handle international domains?", answer: "Standard TLDs detect. Punycode and IDN may need extra passes.", tip: "Normalize Unicode first for non-Latin domains." },
      { question: "Does it leave a [REDACTED] placeholder?", answer: "No, emails are removed entirely with no marker.", tip: "Use Find and Replace to add '[email redacted]' if you want." },
      { question: "Is this enough for GDPR?", answer: "It's a start. You also need to strip names, phone numbers and addresses.", tip: "Pair with Text Redaction for full anonymization." }
    ]
  },
  "remove-accents": {
    description: "Convert accented characters to plain ASCII in one click — perfect for URL slugs and database imports.",
    whatIs: "Accented characters break legacy URLs, mangle in wrong encodings and confuse ASCII-only search indexes. You need plain letters fast.\n\nPaste your accented text and get clean ASCII output.\n\nIf you're generating SEO-friendly URLs, you turn 'café' into 'cafe' for slugs. If you're migrating data, you avoid encoding errors. If you're cataloging international names, you normalize for consistent search.",
    howToUse: [
      "Paste your accented text",
      "See diacritics stripped: é → e, ñ → n",
      "Verify the word still reads correctly",
      "Hit Copy and use as a slug or import"
    ],
    faqs: [
      { question: "What does ß become?", answer: "German ß converts to 'ss', œ to 'oe', æ to 'ae' per Library of Congress rules.", tip: "Standard transliteration for Latin-script languages." },
      { question: "What about Cyrillic or Arabic?", answer: "Only Latin diacritics strip. Non-Latin scripts pass through.", tip: "Use a transliterator for Greek, Cyrillic or Arabic." },
      { question: "Are capitals handled?", answer: "Yes, É becomes E and Ñ becomes N.", tip: "Both cases convert symmetrically." },
      { question: "Will it break Vietnamese or Polish?", answer: "Yes, accents carry meaning in those languages. Use carefully.", tip: "Vietnamese needs proper romanization, not just stripping." },
      { question: "Is this slug generation?", answer: "No, slugs also lowercase and hyphenate. This is just accent removal.", tip: "Stack with Lowercase + space-to-hyphen for full slugs." },
      { question: "Does it handle composite Unicode forms?", answer: "Yes, both NFC and NFD forms decompose correctly.", tip: "Pre-normalized text behaves the same as raw input." }
    ]
  }
  ,
  "normalize-unicode-text": {
    description: "Normalize Unicode to NFC form in one click — perfect for fixing string comparison bugs and hidden codepoints.",
    whatIs: "Two strings look identical but fail equality checks because one uses composed characters and the other decomposed. Hidden zero-width joiners hide inside pasted PDF text.\n\nPaste any messy Unicode and get a clean NFC-normalized version back.\n\nIf you're debugging form input, you fix 'café != café' bugs. If you're indexing for search, you keep matches consistent. If you're prepping translation memory, you ensure CAT tools find segments reliably.",
    howToUse: [
      "Paste your messy multilingual text",
      "See the NFC-normalized version",
      "Compare character counts to spot decomposed input",
      "Hit Copy and use the canonical form"
    ],
    faqs: [
      { question: "NFC vs NFD?", answer: "NFC composes accent+letter into one codepoint. NFD splits them into combining marks.", tip: "NFC is the web/database default. NFD is for macOS filesystems." },
      { question: "Will it remove zero-width characters?", answer: "It normalizes them but doesn't delete them. Use Remove Special Characters for that.", tip: "Don't strip ZWJ from emoji families." },
      { question: "Why do equal-looking strings fail comparison?", answer: "Different Unicode forms. Normalize both to NFC before comparing.", tip: "This is the #1 cause of 'café' bugs in JS and Python." },
      { question: "Does it convert full-width CJK?", answer: "NFC doesn't, NFKC does. This tool defaults to NFC.", tip: "Use NFKC mode to convert ０１２ to 012." },
      { question: "Will emojis still render?", answer: "Properly composed ZWJ sequences are preserved.", tip: "Family and profession emojis stay intact." },
      { question: "Should I always normalize input?", answer: "Yes, normalize once on submission so downstream comparisons match.", tip: "NFC for storage, NFD only for macOS filenames." }
    ]
  },
  "text-masking-tool": {
    description: "Mask passwords, IDs and sensitive strings with asterisks in one click — perfect for sharing screenshots and bug reports.",
    whatIs: "You need to share a log or screenshot that contains a password or API key. Manually blacking out characters is slow and easy to miss.\n\nPaste the sensitive string, choose what to mask, and get safe-to-share output.\n\nIf you're filing bug reports, you mask credentials in stack traces. If you're recording demos, you hide test API keys. If you're sharing in Slack, you redact customer IDs without losing context.",
    howToUse: [
      "Paste your log line or sensitive record",
      "Choose the visible/masked ranges",
      "See the masked output instantly",
      "Hit Copy and share safely"
    ],
    faqs: [
      { question: "Can I keep the last 4 digits visible?", answer: "Yes, most presets show the last 4 like a credit card receipt.", tip: "Standard format: **** **** **** 1234." },
      { question: "Does it preserve string length?", answer: "Yes, masking is character-for-character so widths stay identical.", tip: "Critical for fixed-width log lines." },
      { question: "Does it auto-detect passwords?", answer: "No, you choose what to mask manually.", tip: "Use Text Redaction for pattern-based auto-detection." },
      { question: "Can I use X or # instead of asterisks?", answer: "Yes, swap to any single character.", tip: "Some teams reserve * for wildcards and use X for masks." },
      { question: "Does it work on Unicode?", answer: "Yes, each codepoint masks to one mask character.", tip: "Combining marks may need cleanup." },
      { question: "Is masking the same as encryption?", answer: "No, masking is one-way obfuscation. The original is gone.", tip: "Use real encryption if you need to recover." }
    ]
  },
  "text-redaction-tool": {
    description: "Redact names, IDs and sensitive phrases with blackout markers in one click — perfect for court filings and FOIA releases.",
    whatIs: "Court filings and FOIA records need redaction before sharing. Manually blacking out in Word is slow and often leaks the original underneath in PDFs.\n\nPaste your text, mark what to redact, and get safe-to-share output back.\n\nIf you're handling FOIA, you replace names with [REDACTED]. If you're publishing depositions, you comply with sealing orders. If you're prepping audit packets, you protect employee data cleanly.",
    howToUse: [
      "Paste your document",
      "List terms to redact: names, IDs, addresses",
      "See blackout markers replace every match",
      "Hit Copy and share safely"
    ],
    faqs: [
      { question: "Does it catch every instance?", answer: "Yes, every occurrence of each phrase gets redacted in one pass.", tip: "Add misspellings and variations." },
      { question: "What does the marker look like?", answer: "A solid block (███) or [REDACTED] depending on preference.", tip: "Federal courts often require [REDACTED] text not blocks." },
      { question: "How is this different from masking?", answer: "Masking hides characters while keeping length. Redaction signals deliberate removal.", tip: "Use masking for credentials; redaction for legal docs." },
      { question: "Will it catch multi-word phrases?", answer: "Yes, 'Dr. Jane Smith' redacts as one unit.", tip: "Add specific forms first to avoid false positives." },
      { question: "Can I keep an audit log?", answer: "Save your redaction terms list as the audit key.", tip: "Version it in your case file." },
      { question: "Is text redaction enough for legal release?", answer: "For plain text yes. PDF needs flattened-layer tools.", tip: "Always export final FOIA as flattened PDF." }
    ]
  },
  "censor-text-tool": {
    description: "Censor profanity and blocked terms with asterisks in one click — perfect for forums, classrooms and broadcasts.",
    whatIs: "User-generated content is full of words you can't publish. Schools, broadcasts and family forums all need clean output without rewriting from scratch.\n\nPaste the content with a word list, get publish-safe output instantly.\n\nIf you're moderating a forum, you keep threads safe-for-work. If you're prepping classroom extracts, you stay within district policies. If you're producing broadcasts, you match FCC indecency rules.",
    howToUse: [
      "Paste your text",
      "Load your word list",
      "See censored output with asterisks",
      "Hit Copy and publish"
    ],
    faqs: [
      { question: "Does it catch leetspeak like 'sh!t'?", answer: "Only if you add variants to your list. Pure regex needs fuzzy matching.", tip: "Add top leetspeak variants of each banned word." },
      { question: "Does it preserve word length?", answer: "Yes, a 4-letter word becomes ****. Subtitle and broadcast timing stays intact.", tip: "Length-preserving is critical for captioning." },
      { question: "Can I censor multi-word phrases?", answer: "Yes, add 'racial slur' as one entry.", tip: "Useful for trademark or exact-phrase blocking." },
      { question: "What about Scunthorpe-style false positives?", answer: "Enable word-boundary mode so 'Scunthorpe' doesn't trigger 'cunt'.", tip: "Always use boundaries on user-name fields." },
      { question: "Can I share the word list?", answer: "Export as plain text and share with co-moderators.", tip: "Keep it versioned for shift consistency." },
      { question: "Is this content moderation?", answer: "No, censoring is text-level. Moderation needs context and policy.", tip: "This is one layer in a wider workflow." }
    ]
  },
  "text-sorter-a-z": {
    description: "Sort any line-by-line list A to Z in one click — perfect for rosters, keyword lists and bibliographies.",
    whatIs: "You have a list in the clipboard and need it alphabetized fast. Firing up Excel for one column of text feels like overkill.\n\nPaste your list and get it sorted alphabetically right back.\n\nIf you're prepping a roster, you alphabetize names for clean reference. If you're organizing keywords, you sort for easy scanning. If you're cleaning bibliographies, you order entries instantly.",
    howToUse: [
      "Paste your list, one item per line",
      "Toggle case sensitivity if needed",
      "See the sorted list instantly",
      "Hit Copy and paste back where you need it"
    ],
    faqs: [
      { question: "How does it handle uppercase vs lowercase?", answer: "Default ASCII sort puts capitals before lowercase. Toggle case-insensitive to mix them.", tip: "Case-insensitive matches typical user expectations." },
      { question: "Where do numbers sort?", answer: "In ASCII order, digits come before letters. '1' sits before 'A'.", tip: "Use natural sort for 'item 2' to come before 'item 10'." },
      { question: "What about accented characters?", answer: "ASCII sort puts é after z. Locale-aware sort puts é near e.", tip: "Enable locale-aware sort for international rosters." },
      { question: "Can I sort a CSV column?", answer: "Yes, paste a single column. For multi-column sorts, use a spreadsheet.", tip: "Extract one column first if you have a full CSV." },
      { question: "Are duplicates preserved?", answer: "Yes, duplicates stay in the sorted output.", tip: "Run Remove Duplicate Lines first for unique sorted entries." },
      { question: "Where do empty lines end up after sorting?", answer: "Empty lines bubble to the top in A-Z order.", tip: "Useful for spotting blank rows in pasted CSV exports." }
    ]
  },
  "text-sorter-z-a": {
    description: "Sort any line-by-line list Z to A in one click — perfect for surfacing late-alphabet entries fast.",
    whatIs: "Default A-Z reports bury the entries you actually want at the bottom. Manually reversing 200 lines is tedious.\n\nPaste your list and get it sorted Z to A instantly.\n\nIf you're auditing inventory, you spot Z-prefixed clearance SKUs first. If you're building a program, you place late-name keynotes early. If you're reviewing archives, you see most-recent additions on top.",
    howToUse: [
      "Paste your list, one item per line",
      "Toggle case sensitivity if needed",
      "See lines sorted Z to A",
      "Hit Copy and use it"
    ],
    faqs: [
      { question: "Is this just A-Z flipped?", answer: "For unique entries, yes. For duplicates, tie-order may differ.", tip: "Reverse-sort is one op; sort-then-flip is two." },
      { question: "Where do numbers go?", answer: "In reverse ASCII, digits come after letters.", tip: "Filter to letters-only for cleaner output." },
      { question: "What about accented letters?", answer: "Locale-aware mode keeps é near e. Raw ASCII puts é after z.", tip: "Use locale-aware for international lists." },
      { question: "Does it sort negative numbers correctly?", answer: "Lexicographically, '-9' beats '-1'. Use a numeric sorter for true number order.", tip: "This is alphabetical, not numerical." },
      { question: "Does Z-A sorting alter the line text itself?", answer: "No, only the order changes. Characters in each line stay identical.", tip: "Safe for archived data." },
      { question: "Reverse-sort then dedupe?", answer: "Reverse first, then Remove Duplicate Lines to keep last-occurrence.", tip: "Use when newer entries should win." }
    ]
  },
  "reverse-text": {
    description: "Reverse any string character by character in one click — perfect for palindrome puzzles and escape-room clues.",
    whatIs: "Mirroring text by hand past a few characters is impossible to do without slipping. You need exact reversal you can trust.\n\nPaste your text and get it reversed character by character.\n\nIf you're building palindrome puzzles, you check candidates instantly. If you're designing escape rooms, you encode mirror-decoded clues. If you're stress-testing string logic, you generate edge-case input fast.",
    howToUse: [
      "Paste your text",
      "See the reversed output instantly",
      "Compare to verify palindromes",
      "Hit Copy and use it"
    ],
    faqs: [
      { question: "Does it handle emojis correctly?", answer: "Yes, surrogate pairs and grapheme clusters stay intact.", tip: "Naive byte reversal breaks emojis; this tool doesn't." },
      { question: "Are punctuation and spaces reversed too?", answer: "Yes, every character flips including newlines.", tip: "Use Reverse Words for word-order only." },
      { question: "How do I check palindromes?", answer: "Compare the reverse to the original. They match for true palindromes.", tip: "Strip spaces and punctuation first for phrases." },
      { question: "Does it work on RTL scripts?", answer: "Yes, Arabic and Hebrew reverse character-by-character.", tip: "Result may read naturally in LTR contexts." },
      { question: "How does character reversal handle multi-line input?", answer: "Default reverses the whole input as one stream. Toggle for per-line reversal.", tip: "Use Reverse Lines for line-order only." },
      { question: "Can I encode clues for escape rooms?", answer: "Yes, players need a mirror or this tool to decode.", tip: "Pair with a physical mirror prop for analog feel." }
    ]
  },
  "reverse-words": {
    description: "Flip word order in any sentence in one click — perfect for poetry exercises and ad copy experiments.",
    whatIs: "Reversing word order reveals new rhythm and hooks. Doing it by hand past five words breaks down.\n\nPaste a sentence and get the same words in flipped order with spelling preserved.\n\nIf you're writing poetry, you test rhythm with reversed lines. If you're crafting taglines, you find punchier endings. If you're breaking writer's block, you stumble into fresh sentence structures.",
    howToUse: [
      "Paste your sentence or line",
      "See word order flipped",
      "Read aloud to test rhythm",
      "Hit Copy and use it"
    ],
    faqs: [
      { question: "How is this different from Reverse Text?", answer: "This flips word order; Reverse Text flips characters. Spelling stays intact here.", tip: "Use Reverse Text for palindromes." },
      { question: "Does punctuation move with the words?", answer: "Yes, 'hello, world!' becomes 'world! hello,'", tip: "Run Remove Punctuation first for cleaner output." },
      { question: "How does word reversal handle multiple lines?", answer: "Default reverses across the whole input. Line-by-line mode keeps stanzas separate.", tip: "Use line-by-line for poetry." },
      { question: "Can it break writer's block?", answer: "Reversed sentences often suggest sharper closings.", tip: "Try reversing your last paragraph for hidden hooks." },
      { question: "Does it help test tokenizers?", answer: "Yes, reversed inputs catch directional bugs in NLP pipelines.", tip: "Useful for ML preprocessing tests." },
      { question: "What about hyphenated phrases?", answer: "'State-of-the-art' stays as one token since there's no internal space.", tip: "Replace hyphens with spaces first if you want each piece flipped." }
    ]
  },
  "reverse-lines": {
    description: "Flip line order in any list in one click — perfect for converting newest-first logs into chronological order.",
    whatIs: "Logs arrive newest-first but chronological reading is easier oldest-first. Manual line shuffling wastes time.\n\nPaste your list and get the same lines in flipped order.\n\nIf you're reviewing incidents, you read events in cause-effect order. If you're debugging stack traces, you see the origin call first. If you're auditing ETL jobs, you trace the earliest break forward.",
    howToUse: [
      "Paste your log dump or list",
      "See lines in reverse order",
      "Read chronologically with earliest on top",
      "Hit Copy and use the flipped log"
    ],
    faqs: [
      { question: "Does it reverse words inside each line?", answer: "No, only line order flips. Line content stays as-is.", tip: "Use Reverse Words for word-level flipping." },
      { question: "Are empty lines preserved?", answer: "Yes, empty lines stay in their flipped positions.", tip: "Useful for keeping spacing structure." },
      { question: "CRLF vs LF line endings?", answer: "Both work. Output uses your system's default ending.", tip: "Cross-platform safe." },
      { question: "Can I flip a numbered list?", answer: "Yes, but numbers stay tied to original lines. Renumber after.", tip: "Strip leading numbers, reverse, re-number." },
      { question: "Will it lag on huge logs?", answer: "Browsers handle tens of thousands of lines fine. Multi-GB logs need grep first.", tip: "Slice your input window before pasting." },
      { question: "Is this the same as reverse-sort?", answer: "No, reverse keeps original order flipped. Reverse-sort applies Z-A alphabetical.", tip: "Use Text Sorter Z-A for alphabetical reverse." }
    ]
  }
  ,
  "combine-text-lines": {
    description: "Merge multi-line lists into one delimited string in one click — perfect for SQL IN clauses and tag lists.",
    whatIs: "You have a column of values from a spreadsheet and need them inline for a SQL query or formula. Adding commas to every row by hand breaks down fast.\n\nPaste your list, pick a delimiter, and get a single joined string back.\n\nIf you're building SQL queries, you produce IN clauses instantly. If you're feeding ETL parameters, you join lists for downstream jobs. If you're configuring dashboards, you rebuild filter values cleanly.",
    howToUse: [
      "Paste your value list, one per line",
      "Choose a separator (comma, pipe, custom)",
      "See the joined string instantly",
      "Hit Copy and paste into SQL or Excel"
    ],
    faqs: [
      { question: "Can I wrap each value in quotes?", answer: "Yes, toggle quote-wrap for 'a','b','c' SQL formatting.", tip: "Single quotes for SQL strings, double for JS arrays." },
      { question: "What separator works for CSV?", answer: "', ' for human-readable, ',' alone for strict CSV.", tip: "Quote values that contain commas." },
      { question: "Does it dedupe values?", answer: "No, duplicates stay. Run Remove Duplicate Lines first.", tip: "Sort + dedupe + combine is the clean three-step." },
      { question: "Can I add a prefix or suffix?", answer: "Yes, wrap with text like 'WHERE id IN (' and ')'.", tip: "Pair with Prefix-Suffix Generator for per-line wrapping." },
      { question: "What happens to blank rows when combining?", answer: "They become empty values in the joined string. Toggle skip-blanks to drop them.", tip: "Always skip blanks for SQL IN clauses." },
      { question: "Are there length limits?", answer: "Tens of thousands of values work. SQL engines may have IN-clause limits though.", tip: "For millions, use a temp table instead." }
    ]
  },
  "shuffle-text-lines": {
    description: "Randomly shuffle line order in any list with one click — perfect for quizzes, A/B variants and fair sequences.",
    whatIs: "Humans introduce subtle bias when manually shuffling. When fairness matters, you need a Fisher-Yates shuffle.\n\nPaste your list and get a truly random reordering instantly.\n\nIf you're building quiz banks, you prevent answer-position copying. If you're rotating A/B variants, you avoid ordering bias. If you're testing card games, you simulate fair deck draws.",
    howToUse: [
      "Paste your list, one item per line",
      "Click Shuffle for a fresh randomization",
      "Click again for a new arrangement",
      "Hit Copy and use the shuffled list"
    ],
    faqs: [
      { question: "Is it truly unbiased?", answer: "Yes, Fisher-Yates is provably unbiased across all permutations.", tip: "Every n! ordering has equal probability." },
      { question: "Can I get the same shuffle twice?", answer: "No, each click uses a fresh seed.", tip: "For reproducibility, use a seeded RNG tool." },
      { question: "How is this different from sorting?", answer: "Sort is deterministic; shuffle is different every time.", tip: "Sort for repeats, shuffle for fairness." },
      { question: "Does shuffling change the text inside each line?", answer: "No, only the positions change. The text on each line is untouched.", tip: "Safe for quiz questions or anything you don't want edited." },
      { question: "Can I shuffle sections separately?", answer: "Not in one pass. Split with Paragraph Splitter, shuffle each, recombine.", tip: "Useful for grouped randomization." },
      { question: "Why does the result sometimes look ordered?", answer: "True random can produce near-sorted runs by chance.", tip: "Click again if you want it more visibly random." }
    ]
  },
  "text-randomizer": {
    description: "Scramble word order across any text in one click — perfect for fuzz testing and creative writing prompts.",
    whatIs: "You need surprise word arrangements humans can't reliably produce. Manual scrambling introduces patterns past 20 words.\n\nPaste your text and get a randomized word arrangement back.\n\nIf you're fuzz-testing parsers, you generate edge-case inputs. If you're coaching creative writing, you produce prompts that break habits. If you're stress-testing NLP services, you verify graceful degradation.",
    howToUse: [
      "Paste your text",
      "Click Randomize for a fresh scramble",
      "Compare with the original",
      "Hit Copy and use the chaos"
    ],
    faqs: [
      { question: "How is this different from Shuffle Lines?", answer: "Lines moves whole lines; this scrambles words within and across them.", tip: "Use Shuffle Lines when line content matters." },
      { question: "Does punctuation travel with each word during randomization?", answer: "Yes, punctuation stays attached to whichever word it was on.", tip: "Strip punctuation first for pure chaos." },
      { question: "Useful as a writing prompt?", answer: "Yes, random adjacencies spark new sentences.", tip: "Try randomizing your opening for fresh angles." },
      { question: "Can I limit randomization to sentences?", answer: "Toggle sentence-bounded mode to scramble inside each sentence only.", tip: "Gentler structure for creative use." },
      { question: "New result every click?", answer: "Yes, each click is an independent shuffle.", tip: "Click 10 times and pick the best." },
      { question: "Good for production fuzzing?", answer: "For one-offs yes. For thousands of runs, use a seeded RNG script.", tip: "This tool is for prompts, not production harnesses." }
    ]
  },
  "text-tokenizer": {
    description: "Preview how text splits into tokens in one click — perfect for sizing LLM prompts and embedding chunks.",
    whatIs: "LLM costs and context windows are driven by tokens, not characters or words. Misjudging tokenization leads to truncated prompts and surprise bills.\n\nPaste your prompt draft and see the token count instantly.\n\nIf you're engineering prompts, you stay under context limits. If you're chunking for embeddings, you size for the model's input window. If you're estimating costs, you forecast accurately before sending.",
    howToUse: [
      "Paste your prompt or chunk",
      "See each token and the total count",
      "Compare to your model's context window",
      "Hit Copy and resize as needed"
    ],
    faqs: [
      { question: "Does this match GPT or Claude exactly?", answer: "It approximates standard tokenization. Specific BPE tokenizers vary by model.", tip: "Use tiktoken for exact GPT-4 counts." },
      { question: "Why are my prompts more tokens than words?", answer: "Tokens are smaller. 'Unbelievable' might be 3-4 tokens.", tip: "Common short words are 1 token; rare words and code can be 4-10." },
      { question: "How are punctuation and spaces tokenized?", answer: "Punctuation usually becomes its own token. Leading spaces attach to the next word.", tip: "This is why ' hello' and 'hello' differ in BPE." },
      { question: "Safe chunk size for embeddings?", answer: "Stay 200-300 tokens below the model max for instruction headroom.", tip: "500-800 token chunks work well for retrieval quality." },
      { question: "Code tokenization vs prose?", answer: "Code has more tokens per character due to brackets and semicolons.", tip: "Code prompts can be 1.5x denser than prose." },
      { question: "Does CJK tokenize differently?", answer: "Chinese, Japanese and Korean tokenize per character or subword.", tip: "CJK is far more token-dense than English." }
    ]
  },
  "find-and-replace-text": {
    description: "Find and replace every occurrence in one click — perfect for rebranding docs, fixing recurring typos and renaming terms.",
    whatIs: "You're renaming a product across a 200-page manual or fixing a typo that's in 50 articles. Manual scrolling and replacing is slow and error-prone.\n\nPaste your text, enter the find/replace pair, and get the updated document instantly.\n\nIf you're rebranding docs, you swap product names without missing references. If you're localizing, you replace placeholder strings in bulk. If you're fixing typos, you correct every instance at once.",
    howToUse: [
      "Paste your document",
      "Enter find and replace strings",
      "Toggle case sensitivity or whole-word",
      "Hit Copy and use the updated text"
    ],
    faqs: [
      { question: "Does it match inside words?", answer: "By default yes. Toggle whole-word to match only standalone instances.", tip: "Always use whole-word for short common terms." },
      { question: "Can I use regex?", answer: "Toggle regex mode for patterns and $1 backreferences.", tip: "Plain mode is safer for simple replacements." },
      { question: "Can it preserve case?", answer: "Smart-case mode swaps 'Apple'→'Banana' and 'apple'→'banana' in one pass.", tip: "Essential for rebranding mixed-case docs." },
      { question: "Will it touch HTML tags?", answer: "Yes, it replaces inside attributes and code too.", tip: "Strip HTML first if you only want visible text changed." },
      { question: "Does it count replacements?", answer: "Yes, the total count shows so you can verify.", tip: "Mismatch usually means whole-word or case toggle is wrong." },
      { question: "Multiple pairs at once?", answer: "Run one pair, then re-paste output and run the next.", tip: "For complex sequences, sed or VS Code is faster." }
    ]
  },
  "text-splitter": {
    description: "Split a delimited string into one-per-line list in one click — perfect for CSV rows, env vars and log records.",
    whatIs: "You got a single-line CSV from a webhook or a pipe-delimited config string. You need each piece on its own line for editing or import.\n\nPaste the string, pick a delimiter, and get clean lines back.\n\nIf you're processing API output, you split CSV strings for editing. If you're auditing configs, you separate env vars for review. If you're triaging logs, you break pipe records for grep.",
    howToUse: [
      "Paste your delimited string",
      "Pick the delimiter",
      "See each value on its own line",
      "Hit Copy and use the split list"
    ],
    faqs: [
      { question: "How is this different from Line Splitter?", answer: "This splits by any delimiter. Line Splitter handles already-newline-delimited text.", tip: "Use this for inline delimiters." },
      { question: "Does it handle quoted CSV?", answer: "No, every delimiter splits the same. Use a real CSV parser for quoted fields.", tip: "Embedded commas in quotes need proper parsing." },
      { question: "Can I use a multi-character delimiter?", answer: "Yes, enter ' || ' or ' :: ' as needed.", tip: "Useful for arrow or pipe-pipe markers." },
      { question: "What about empty values?", answer: "Consecutive delimiters produce empty lines. Toggle skip-empties to drop them.", tip: "Useful for spotting double-delimiters in scraped data." },
      { question: "Is whitespace preserved?", answer: "Yes by default. Toggle trim to strip leading/trailing space.", tip: "Always trim human-formatted CSV." },
      { question: "Can I split by regex?", answer: "No, plain delimiter only. Use a regex tool for patterns.", tip: "Regex splits unlock 'any whitespace' or 'any digit run'." }
    ]
  },
  "line-splitter": {
    description: "Number every line in pasted text in one click — perfect for code reviews, error reports and migration QA.",
    whatIs: "Reviewing a pasted blob without line numbers means reviewers say 'the third one from the bottom' instead of 'line 47'. That's slow and error-prone.\n\nPaste your text and get a numbered version back.\n\nIf you're handing off migration previews, you reference exact rows in runbooks. If you're triaging errors, you point at specific stack frames in chat. If you're reviewing code, you make pastes easy to discuss.",
    howToUse: [
      "Paste your text or code",
      "Set start-from value if needed",
      "See each line numbered",
      "Hit Copy and paste into your review"
    ],
    faqs: [
      { question: "Can I start from a number other than 1?", answer: "Yes, set the start index to align with the source file.", tip: "Useful when reviewing slices of larger files." },
      { question: "CRLF vs LF?", answer: "Both work. Output uses your system's default.", tip: "Cross-platform safe." },
      { question: "Are empty lines numbered?", answer: "Yes by default. Toggle skip-empties to omit them.", tip: "Skip for code reviews, keep for source-aligned numbering." },
      { question: "How does this differ from Text Splitter?", answer: "Both produce line output. Line Splitter also numbers and formats.", tip: "Text Splitter for non-newline delimiters." },
      { question: "What format is the numbering?", answer: "'1: content' by default. Configurable to brackets or fixed-width.", tip: "Use 001: padding for monospace docs." },
      { question: "Good for code review?", answer: "Yes, numbered code is far easier to discuss in chat.", tip: "Pair with Slack code blocks for clean snippets." }
    ]
  },
  "word-splitter": {
    description: "Break text into one word per line in one click — perfect for vocabulary lists and frequency analysis input.",
    whatIs: "Word-level analysis starts with one word per line. Doing it manually on an article takes hours for what should be one click.\n\nPaste your text and get a clean per-word list back.\n\nIf you're running frequency analysis, you skip writing a tokenizer. If you're building vocabulary lists, you check content against age-band words. If you're prepping NLP corpora, you produce token streams instantly.",
    howToUse: [
      "Paste your text",
      "See each word on its own line",
      "Run Remove Duplicates for unique words",
      "Hit Copy and use it"
    ],
    faqs: [
      { question: "How are word boundaries detected?", answer: "Whitespace and most punctuation. Hyphens often join compounds.", tip: "Strip punctuation first for stricter splitting." },
      { question: "Are hyphenated words kept together?", answer: "By default yes. Toggle to split on hyphens for stricter tokens.", tip: "Data scientists usually split, linguists usually keep." },
      { question: "Does it lowercase words?", answer: "No, case is preserved. Run Lowercase first for frequency analysis.", tip: "Lowercase first to merge 'Apple' and 'apple' counts." },
      { question: "Are contractions split?", answer: "'Don't' stays as one word by default.", tip: "Use a contraction expander first for 'do not' as two words." },
      { question: "Works on non-English?", answer: "Whitespace-delimited languages yes. CJK needs a specialized segmenter.", tip: "Chinese and Japanese have no inter-word spaces." },
      { question: "What about numbers?", answer: "Numbers are their own tokens like words.", tip: "Run Remove Numbers first for pure vocabulary." }
    ]
  },
  "paragraph-splitter": {
    description: "Break text into numbered paragraph blocks in one click — perfect for editorial review and structural audits.",
    whatIs: "Reviewing a 4,000-word draft means scrolling back to find paragraph 3 every time you have a comment. That's slow and ugly.\n\nPaste your draft and get each paragraph as a numbered block.\n\nIf you're editing manuscripts, you reference paragraphs precisely in feedback. If you're shuffling structure, you reorder blocks without losing position. If you're auditing competitor posts, you compare paragraph patterns side-by-side.",
    howToUse: [
      "Paste your long-form text",
      "See each paragraph numbered",
      "Reference paragraph numbers in feedback",
      "Hit Copy on individual blocks or all"
    ],
    faqs: [
      { question: "What defines a paragraph break?", answer: "Two consecutive newlines (blank line). Single breaks are soft returns.", tip: "PDFs often use single breaks; normalize first." },
      { question: "My source has single newlines, what now?", answer: "Run Remove Line Breaks first then re-add blank lines between paragraphs.", tip: "Common with PDF and Word paste." },
      { question: "How are paragraphs labeled?", answer: "Each gets '¶ 3:' style numbering.", tip: "Use the numbers in margin comments." },
      { question: "What about markdown headings?", answer: "Headings count as their own paragraph block.", tip: "Strip markdown first if you want prose-only counts." },
      { question: "Is internal formatting preserved?", answer: "Yes, italics and HTML inside paragraphs stay intact.", tip: "Useful for styled draft review." },
      { question: "Can I export each as a file?", answer: "No, copy each block individually.", tip: "For batch export, script a split on \\n\\n." }
    ]
  },
  "text-joiner": {
    description: "Join multi-line lists into one delimited string in one click — perfect for CSV strings, regex alternations and JSON arrays.",
    whatIs: "You have a list of values one per line and need them as one string with specific punctuation. Maybe pipes for regex, commas for CSV, or quoted values for a JSON array.\n\nPaste your list, pick separator and wrappers, and get the joined string back.\n\nIf you're building Excel formulas, you produce single-string inputs. If you're wiring no-code workflows, you flatten arrays for legacy fields. If you're crafting regex, you build clean alternations.",
    howToUse: [
      "Paste your list, one per line",
      "Pick separator and wrappers",
      "See the joined string",
      "Hit Copy and use it"
    ],
    faqs: [
      { question: "How is this different from Combine Text Lines?", answer: "Both join lines; Text Joiner has more separator presets and wrappers.", tip: "Use whichever you prefer." },
      { question: "Can I wrap each value with quotes?", answer: "Yes, enable per-value wrappers for 'a','b','c' style.", tip: "Great for JSON, JS arrays and Python lists." },
      { question: "What separator for regex?", answer: "Use '|' for foo|bar|baz alternations.", tip: "Escape regex metacharacters in values first." },
      { question: "Is there a trailing separator?", answer: "No, separators only sit between values.", tip: "Output is clean for strict JSON parsers." },
      { question: "Can I add brackets around the result?", answer: "Yes, set prefix '[' and suffix ']' for array-style strings.", tip: "One-pass ['a','b','c'] output." },
      { question: "How are blank lines handled when joining?", answer: "They become empty values between separators. Toggle skip-blanks to drop them.", tip: "Always skip blanks for regex patterns." }
    ]
  },
  "lorem-ipsum-generator": {
    description: "Generate Lorem Ipsum placeholder text in one click — perfect for wireframes, design comps and CMS previews.",
    whatIs: "You're filling a mockup with placeholder text. Typing 'asdf asdf' looks fake; real prose distracts stakeholders from layout review.\n\nGenerate fresh Lorem Ipsum by word, sentence or paragraph instantly.\n\nIf you're designing wireframes, you validate column widths with realistic word lengths. If you're sizing buttons, you check microcopy fit. If you're seeding component library docs, you avoid copyrighted strings.",
    howToUse: [
      "Pick words, sentences or paragraphs",
      "Set the amount",
      "Click Generate for fresh text",
      "Hit Copy and paste into Figma or CMS"
    ],
    faqs: [
      { question: "Why use Lorem instead of real copy?", answer: "Real copy distracts from layout review. Lorem keeps focus on structure.", tip: "Switch to real copy only after layout approval." },
      { question: "How much for a landing page?", answer: "3-5 paragraphs body plus 5-10 short sentences for headlines and CTAs.", tip: "Generate sections separately and paste in zones." },
      { question: "Does it mean anything in Latin?", answer: "It's scrambled Latin from Cicero, intentionally meaningless.", tip: "Latin speakers also won't be distracted." },
      { question: "Can I get other languages?", answer: "Standard is Latin. Some tools offer CJK, Greek or emoji variants.", tip: "Use CJK variants for Japanese/Chinese layout tests." },
      { question: "Does the text vary each click?", answer: "Yes, each click produces a fresh randomized excerpt.", tip: "Generate twice and pick the cleaner one." },
      { question: "Must it start with 'Lorem ipsum dolor sit amet'?", answer: "No, only classic generators force it. Many randomize the start.", tip: "Toggle classic-start if a client expects the iconic opening." }
    ]
  },
  "random-word-generator": {
    description: "Generate fresh random English words in one click — perfect for naming sprints, prompts and games.",
    whatIs: "Brainstorming alone falls into your usual vocabulary. You need unfamiliar words to break out of habit.\n\nClick Generate and get a batch of random English words instantly.\n\nIf you're running ideation sprints, you force lateral connections. If you're prepping word games, you produce unbiased prompts. If you're naming products, you seed brainstorms with fresh material.",
    howToUse: [
      "Set the count (10-30 is plenty)",
      "Click Generate for a fresh batch",
      "Scan for words that spark ideas",
      "Hit Copy and paste into your brief"
    ],
    faqs: [
      { question: "How big is the dictionary?", answer: "Tens of thousands of common English words across all parts of speech.", tip: "Filter by POS if available." },
      { question: "Will words repeat?", answer: "Eventually yes. Common words appear more often.", tip: "Generate large batches once rather than many small ones." },
      { question: "Is the random-word output safe for classrooms?", answer: "Profanity is excluded but advanced or ambiguous words may appear.", tip: "Always preview before sharing with kids." },
      { question: "Can I filter by length?", answer: "Some tools allow length and syllable filters.", tip: "3-5 letters for kids, longer for adult naming." },
      { question: "Other languages?", answer: "Standard is English. Spanish/French dictionaries may be available.", tip: "Match audience language for naming." },
      { question: "Can I use these in product names?", answer: "Yes, individual common words aren't trademarkable alone.", tip: "Always trademark-search your shortlist." }
    ]
  },
  "random-sentence-generator": {
    description: "Generate grammatically valid random sentences in one click — perfect for writing prompts and chatbot fixtures.",
    whatIs: "You need realistic sentences for prompts, NPC dialogue or chatbot test fixtures and don't want to write each one. Lorem Ipsum is too unreal.\n\nClick Generate and get believable English sentences instantly.\n\nIf you're writing game dialogue, you test pacing before voice direction. If you're authoring grammar drills, you avoid overused textbook passages. If you're testing chatbots, you stress NLU handlers with varied input.",
    howToUse: [
      "Set the count (5-10 is plenty)",
      "Click Generate for fresh sentences",
      "Skim for the right tone or length",
      "Hit Copy and use it"
    ],
    faqs: [
      { question: "Are they grammatical?", answer: "Yes, valid grammar even when meaning is whimsical.", tip: "Good for grammar drills where structure matters." },
      { question: "How long are they?", answer: "8-15 words on average. Some tools allow length ranges.", tip: "Short for mobile UI tests, long for desktop layout." },
      { question: "Dialogue or questions?", answer: "Default is declarative. Some tools offer question or dialogue modes.", tip: "Mix types for chatbot fixtures." },
      { question: "Will sentences repeat?", answer: "Possible but unlikely with a large combination space.", tip: "Generate one big batch to maximize variety." },
      { question: "Are random sentences appropriate for school use?", answer: "Most generators avoid adult themes, but preview anyway — odd combos sneak through.", tip: "Odd word combos can sneak through." },
      { question: "Can I use them in products?", answer: "Yes, generated text isn't copyrighted by the generator.", tip: "Edit for voice consistency before publishing." }
    ]
  },
  "random-paragraph-generator": {
    description: "Generate multi-paragraph English placeholder text in one click — perfect for layout QA and typography testing.",
    whatIs: "Lorem Ipsum's Latin flow hides English-specific layout issues like widows, orphans and font fall-back glitches.\n\nClick Generate and get realistic-rhythm English paragraphs back.\n\nIf you're testing layouts, you reveal hyphenation and wrap issues Lorem masks. If you're validating typography, you check optical sizing across font weights. If you're auditing breakpoints, you stress responsive behavior under realistic content.",
    howToUse: [
      "Set the count (3-5 paragraphs is plenty)",
      "Click Generate for fresh English paragraphs",
      "Paste into your prototype to scroll breakpoints",
      "Hit Copy and use it"
    ],
    faqs: [
      { question: "Why better than Lorem for QA?", answer: "English word patterns reveal hyphenation and widow/orphan issues Latin hides.", tip: "Use Lorem only after content lock for stakeholder focus." },
      { question: "Does paragraph length vary?", answer: "Yes, lengths follow natural English distribution.", tip: "Variability surfaces realistic edge cases." },
      { question: "Can I pick a tone?", answer: "Some tools offer academic, journalistic or chat presets.", tip: "Match audience for accurate testing." },
      { question: "vs Random Sentence?", answer: "Paragraphs include transitions and rhythm; sentences are isolated.", tip: "Paragraphs for layout, sentences for prompts." },
      { question: "Capital letter start?", answer: "Yes, paragraphs start capitalized and end with terminal punctuation.", tip: "Useful for testing drop-cap CSS." },
      { question: "OK in production?", answer: "Placeholder use only. Treat as raw clay for editors.", tip: "Replace with voice-matched copy before launch." }
    ]
  },
  "prefix-suffix-text-generator": {
    description: "Add the same prefix and suffix to every line in one click — perfect for wrapping URLs, hashtags and SQL fragments.",
    whatIs: "You have 200 bare domains and need 'https://' on each. Or 200 IDs and need 'DELETE FROM users WHERE id =' on each. Manual repetition is unthinkable.\n\nPaste your list, type a prefix or suffix, and get every line wrapped consistently.\n\nIf you're prepping crawler input, you add protocols to domains. If you're scheduling social posts, you tag hashtag lists for Buffer or Hootsuite. If you're scripting IT batches, you wrap IDs with command fragments.",
    howToUse: [
      "Paste your bare list",
      "Type the prefix and/or suffix",
      "See every line wrapped",
      "Hit Copy and paste into your script"
    ],
    faqs: [
      { question: "Can I use just a prefix?", answer: "Yes, leave suffix empty.", tip: "Useful for adding 'https://' to domains." },
      { question: "Are blank lines wrapped too?", answer: "By default yes. Toggle skip-blanks to leave them alone.", tip: "Always skip blanks when building SQL." },
      { question: "Can I wrap each line in quotes?", answer: "Yes, set prefix and suffix both to a single quote.", tip: "Combine with Text Joiner for 'a','b','c' format." },
      { question: "Multi-character prefixes?", answer: "Yes, any string including tabs, newlines and Unicode.", tip: "Tab prefix indents code one level." },
      { question: "Can I use a different value per line?", answer: "No, prefix and suffix are uniform.", tip: "Use a spreadsheet for per-line variations." },
      { question: "Is line content preserved?", answer: "Yes, the original sits unchanged between prefix and suffix.", tip: "Strip whitespace first if your source is messy." }
    ]
  }
  ,
  "text-compare-tool": {
    description: "Diff two text blocks side-by-side in one click — perfect for contract reviews, config audits and document comparison.",
    whatIs: "Two near-identical documents arrive and you need to find every difference. Reading both windows side-by-side is exhausting and you'll miss small swaps.\n\nPaste both versions and see additions and removals highlighted instantly.\n\nIf you're reviewing contracts, you flag every changed clause. If you're auditing configs, you spot drift from gold-standard templates. If you're checking drafts, you find transposed numbers and swapped words fast.",
    howToUse: [
      "Paste the original (Text A)",
      "Paste the revised (Text B)",
      "Read the highlighted diff",
      "Hit Copy or screenshot for review"
    ],
    faqs: [
      { question: "What algorithm matches lines?", answer: "Line-by-line LCS (longest common subsequence) matches identical lines and flags the rest.", tip: "Best when paragraph structure is similar." },
      { question: "Can I diff JSON or YAML?", answer: "Yes, line-level works on code. Semantic diff needs specialized tools.", tip: "Pretty-print JSON first for cleaner structural diffs." },
      { question: "vs Difference Checker?", answer: "Compare shows side-by-side. Difference Checker lists phrases as a change-log.", tip: "Compare for visuals, Checker for change logs." },
      { question: "Can I ignore whitespace?", answer: "Yes, toggle to treat indentation as equivalent.", tip: "Ignore for prose, never for Python source." },
      { question: "Document size limits?", answer: "Tens of thousands of lines per side. Multi-MB files lag.", tip: "Use git diff for huge files." },
      { question: "How do I share the diff?", answer: "Copy the output as text or screenshot the panel.", tip: "For PRs use git diff --color=always." }
    ]
  },
  "text-difference-checker": {
    description: "Extract a structured change-log between two texts in one click — perfect for redline summaries and edit reports.",
    whatIs: "Side-by-side diff is great visually but useless when you need a written change-log for a revision letter. You need deltas as readable text.\n\nPaste both versions and get a clean list of additions, removals and changes.\n\nIf you're QA-ing localization, you build vendor reports of every change. If you're documenting regulatory filings, you log amendments for FDA or EMA. If you're editing manuscripts, you produce clear redline letters.",
    howToUse: [
      "Paste the original",
      "Paste the revised version",
      "Read the change-log list",
      "Hit Copy and paste into your report"
    ],
    faqs: [
      { question: "Word, phrase or sentence granularity?", answer: "Phrase-level by default. Toggle for word or sentence.", tip: "Word-level for prose, phrase for legal text." },
      { question: "Is order preserved?", answer: "Yes, changes list in document order.", tip: "Easy to match to page or section numbers." },
      { question: "Can it ignore whitespace?", answer: "Yes, toggle whitespace-insensitive for content focus.", tip: "Always enable for prose." },
      { question: "Does it detect moved paragraphs?", answer: "Basic diff treats moves as delete + insert.", tip: "Use structural diff tools for move detection." },
      { question: "Plain text export?", answer: "Yes, output is plain text ready for emails or reports.", tip: "Format as a numbered list for formal docs." },
      { question: "vs Text Compare?", answer: "This is a written list; Compare is visual side-by-side.", tip: "Use both for review and documentation." }
    ]
  },
  "case-sensitive-compare": {
    description: "Compare two strings with strict case sensitivity in one click — perfect for credentials and code identifiers.",
    whatIs: "For passwords, API keys and case-sensitive paths, case carries meaning. A case-insensitive match would hide real bugs and security misses.\n\nPaste both strings and get a strict character-for-character verdict.\n\nIf you're auditing credentials, you verify exact matches. If you're checking API keys, you spot case-shift typos. If you're reviewing code, you confirm camelCase vs PascalCase conventions stayed intact.",
    howToUse: [
      "Paste the original",
      "Paste the version to verify",
      "See MATCH or MISMATCH with diff index",
      "Hit Copy and attach to your ticket"
    ],
    faqs: [
      { question: "How is this different from regular compare?", answer: "This forces strict case sensitivity with no ignore-case toggle.", tip: "Use when case has security or semantic weight." },
      { question: "Does whitespace count in case-sensitive mode?", answer: "Yes, every character matters including spaces, tabs and newlines.", tip: "Trim first if whitespace shouldn't count." },
      { question: "Can it handle long documents?", answer: "Yes but most useful on credentials and IDs.", tip: "Use the standard compare tool for documents." },
      { question: "Does it handle Unicode?", answer: "Yes, every codepoint compared exactly including emojis.", tip: "Normalize Unicode first if you suspect codepoint variation." },
      { question: "Where's the first mismatch?", answer: "Yes, the diff index shows the first differing character.", tip: "Speeds up debugging long tokens." },
      { question: "Safe for real passwords?", answer: "It's browser-only but never paste production secrets in shared tools.", tip: "Use a local password manager for live credentials." }
    ]
  },
  "case-insensitive-compare": {
    description: "Compare two texts ignoring case differences in one click — perfect for emails, names and content sync audits.",
    whatIs: "Email addresses and customer names arrive with random capitalization across systems. Strict comparison flags casing as differences even when the values are functionally identical.\n\nPaste both versions and get a case-insensitive verdict that focuses on real content.\n\nIf you're deduplicating CRM rows, you spot case-shifted email duplicates. If you're QA-ing search, you verify case-folding indexes correctly. If you're auditing content sync, you ignore CMS capitalization noise.",
    howToUse: [
      "Paste the first version",
      "Paste the second",
      "See MATCH or MISMATCH with case ignored",
      "Hit Copy and attach to your audit"
    ],
    faqs: [
      { question: "What does case-insensitive mean here?", answer: "ASCII A-Z letters equal their lowercase counterparts. 'iPhone' and 'IPHONE' match.", tip: "Best for English text." },
      { question: "Locale-specific case folding?", answer: "Standard ASCII by default. Turkish or German need locale-aware tools.", tip: "Use a Unicode-aware library for those." },
      { question: "Does case-insensitive mode also ignore whitespace?", answer: "No — only letter case is ignored. Spaces and punctuation still register as differences.", tip: "Strip punctuation first for pure word matching." },
      { question: "Good for email comparison?", answer: "Yes, email local parts are case-insensitive in practice.", tip: "Pair with Lowercase converter for storage." },
      { question: "Can it show which words differ?", answer: "Yes, word-level diff highlights real content differences.", tip: "Cleaner than strict diff when capitalization varies." },
      { question: "vs case-sensitive?", answer: "Case-sensitive flags 'API' ≠ 'api'; this treats them equal.", tip: "Use case-insensitive for prose, sensitive for credentials." }
    ]
  },
  "keyword-density-checker": {
    description: "Calculate keyword density for any article in one click — perfect for SEO audits and on-page optimization.",
    whatIs: "You're guessing whether your keyword shows up enough or too much. Over-optimization gets penalized; under-optimization fails to rank.\n\nPaste your article and get a clean density table back.\n\nIf you're auditing competitors, you match the natural distribution already ranking. If you're drafting content, you hit the 1-2% sweet spot. If you're optimizing existing pages, you spot under-keyworded sections fast.",
    howToUse: [
      "Paste your article",
      "Read the density table",
      "Compare your target keyword to the 1-2% range",
      "Edit and recheck"
    ],
    faqs: [
      { question: "What's a safe density range?", answer: "1-2% for primary keywords. Above 3-4% risks over-optimization filters.", tip: "Match competitor density on page one rather than chasing a fixed target." },
      { question: "Does it count synonyms together?", answer: "No, exact matches only. Semantic SEO tools handle variations.", tip: "Manually sum related terms for combined density." },
      { question: "Are stop words filtered?", answer: "Yes, 'the' and 'and' are excluded so real keywords surface.", tip: "Density numbers exclude stop-word noise." },
      { question: "Should I include title and meta?", answer: "Body usually checked alone. Some tools include headings.", tip: "Run body, then body+title separately." },
      { question: "Does density still matter in 2024+?", answer: "Weak signal vs topical depth, but extreme density still hurts.", tip: "Use as a sanity check, not your primary metric." },
      { question: "Multi-word phrases?", answer: "Toggle bigram or trigram mode for two/three-word density.", tip: "Catches long-tail stuffing single-word checks miss." }
    ]
  },
  "stop-word-counter": {
    description: "Count stop words and filler in your text in one click — perfect for tightening prose and SEO copy.",
    whatIs: "Stop words like 'the', 'and', 'is' carry no information but dilute your prose. Too many and your writing feels flabby.\n\nPaste your text and see exactly how much is filler.\n\nIf you're tightening prose, you spot bloat fast. If you're optimizing for SEO, you raise keyword density by trimming. If you're editing client copy, you back up your trims with numbers.",
    howToUse: [
      "Paste your text",
      "See stop word count and percentage",
      "Spot the filler",
      "Edit and tighten"
    ],
    faqs: [
      { question: "What counts as a stop word?", answer: "Common function words: 'the', 'and', 'is', 'of', 'to'.", tip: "Search engines often ignore them in queries." },
      { question: "What ratio is normal?", answer: "30-40% is typical English prose. Higher signals filler.", tip: "Tight writing trends below 35%." },
      { question: "Is fewer always better?", answer: "No, stop words make prose readable. Just don't bloat them.", tip: "Aim for natural rhythm, not zero stop words." },
      { question: "Does it help SEO?", answer: "Indirectly yes. Less filler means higher keyword density.", tip: "Pair with Keyword Density Checker." },
      { question: "Does it update live?", answer: "Yes, the count updates as you type.", tip: "Watch your ratio drop as you cut bloat." },
      { question: "Different stop word lists?", answer: "Most tools use NLTK-style English lists. Some allow custom lists.", tip: "Add your own filler phrases for stricter checks." }
    ]
  },
  "readability-checker": {
    description: "Check Flesch readability and grade level in one click — perfect for blog posts, marketing copy and educational content.",
    whatIs: "Hard-to-read content kills engagement and SEO performance. Most great web writing targets grade 7-9 reading level.\n\nPaste your content and see your score, grade level and improvement suggestions.\n\nIf you're writing marketing copy, you stay accessible to a wide audience. If you're publishing blog posts, you match Google's readability bias. If you're producing educational content, you match the right age band.",
    howToUse: [
      "Paste your content",
      "See readability score and grade level",
      "Check sentence and word complexity",
      "Edit to simplify if needed"
    ],
    faqs: [
      { question: "What's a good Flesch score?", answer: "60-70 is plain English. Above 70 reads like a magazine.", tip: "Most blog content targets 60+, marketing 70+." },
      { question: "How is grade level calculated?", answer: "From average sentence length and syllable count per word.", tip: "Shorter sentences and shorter words drop the grade." },
      { question: "What grade should I target?", answer: "Grade 7-9 for general web content. Lower for marketing.", tip: "Hemingway-style writing targets grade 5-6." },
      { question: "Does Google care about readability?", answer: "Indirectly yes. Readable content earns longer dwell time and better rankings.", tip: "Combine with topical depth for best results." },
      { question: "Does the readability score update as I type?", answer: "Yes, the Flesch score and grade level recalculate live as you edit.", tip: "Watch the grade drop in real time." },
      { question: "Which formula does it use?", answer: "Most tools use Flesch Reading Ease and Flesch-Kincaid Grade Level.", tip: "Some also offer Gunning Fog or SMOG indexes." }
    ]
  },
  "sentence-analyzer": {
    description: "Analyze sentence structure and length in one click — perfect for spotting run-ons and balancing rhythm.",
    whatIs: "All long sentences feel exhausting. All short ones feel choppy. Good writing varies length deliberately.\n\nPaste your text and see sentence count, average length, longest and shortest at a glance.\n\nIf you're editing fiction, you find run-ons that need breaking. If you're writing for the web, you confirm short-sentence pacing. If you're auditing copy, you compare your draft against best-practice rhythm.",
    howToUse: [
      "Paste your text",
      "See sentence statistics",
      "Spot overly long or short ones",
      "Edit for rhythm"
    ],
    faqs: [
      { question: "Ideal sentence length?", answer: "15-20 words on average works for most writing.", tip: "Mix short and long for rhythm." },
      { question: "What stats does it show?", answer: "Count, average length, longest and shortest.", tip: "Click the longest to spot run-ons." },
      { question: "What about web writing?", answer: "Aim for sub-25-word sentences for online readability.", tip: "Mobile readers bail on long sentences." },
      { question: "How does it detect sentences?", answer: "By terminal punctuation: periods, !, ?", tip: "Abbreviations like 'Mr.' may cause false splits." },
      { question: "Do sentence stats update while I edit?", answer: "Yes, count, average length and longest/shortest recalculate as you type.", tip: "Edit your longest first for the biggest impact." },
      { question: "Pair with what?", answer: "Readability Checker for grade level, Sentence Counter for raw count.", tip: "Stack tools for full prose audit." }
    ]
  },
  "text-complexity-analyzer": {
    description: "Analyze vocabulary depth and structural complexity in one click — perfect for matching content to audience.",
    whatIs: "Academic readers expect dense vocabulary. Marketing audiences need simplicity. Mismatched complexity tanks engagement and trust.\n\nPaste your text and get a full breakdown of vocabulary, sentence variety and structural depth.\n\nIf you're tuning brand voice, you target the right complexity. If you're publishing technical docs, you confirm depth without alienation. If you're writing marketing copy, you spot vocab that's too dense for conversion.",
    howToUse: [
      "Paste your text",
      "See complexity metrics",
      "Review vocabulary depth and variety",
      "Edit to match audience"
    ],
    faqs: [
      { question: "What metrics does it show?", answer: "Vocabulary uniqueness, sentence variety, syllable density and structural depth.", tip: "More metrics than basic readability checkers." },
      { question: "Higher complexity is bad?", answer: "Not inherently. Match it to your audience.", tip: "Academic high, marketing low." },
      { question: "How does it differ from Readability?", answer: "Readability gives one score. Complexity breaks down vocabulary, syntax and structure separately.", tip: "Use both for a complete picture." },
      { question: "What's vocabulary uniqueness?", answer: "Type-token ratio: unique words divided by total words.", tip: "Higher means more varied vocabulary." },
      { question: "Do complexity metrics refresh in real time?", answer: "Yes, vocabulary, syntax and structural metrics all recalculate as you edit.", tip: "Watch each metric shift independently." },
      { question: "Best practice for marketing?", answer: "Low complexity, high readability. Aim for grade 7-9 with simple vocabulary.", tip: "Pair with Readability Checker for combined check." }
    ]
  }
  ,
  "text-validator": {
    description: "Validate text against length, format and content rules in one click — perfect for form testing and data checks.",
    whatIs: "You're testing form input or batch-checking content against rules. Eyeballing 200 entries for length or character violations is impossible.\n\nPaste your text, set rules, and get instant pass/fail with details.\n\nIf you're testing form validation, you replicate server rules in the browser. If you're QA-ing user input, you spot violations before storage. If you're auditing content batches, you catch outliers fast.",
    howToUse: [
      "Paste your text",
      "Set validation rules",
      "See pass/fail and specific issues",
      "Fix and re-check"
    ],
    faqs: [
      { question: "What can I validate?", answer: "Length ranges, character types, required keywords, format patterns.", tip: "Combine rules for thorough checks." },
      { question: "Does it support regex?", answer: "Most validators allow regex pattern rules.", tip: "Use for email or phone format checks." },
      { question: "Can I validate multiple lines at once?", answer: "Yes, each line gets validated independently.", tip: "Useful for batch input checks." },
      { question: "Does it explain failures?", answer: "Yes, each rule shows which line and why it failed.", tip: "Read the message before fixing." },
      { question: "Live updates?", answer: "Yes, validation runs as you type.", tip: "Watch errors clear as you fix." },
      { question: "Same as form validation?", answer: "Yes, you can replicate most form rules here for testing.", tip: "Mirror your real form validators for accurate prep." }
    ]
  },
  "text-to-speech": {
    description: "Convert any text to spoken audio in one click — perfect for proofreading drafts and accessibility.",
    whatIs: "Reading your draft silently misses awkward phrasing your ear would catch. Hearing it aloud reveals every clunky sentence.\n\nPaste text, pick a voice, hit play.\n\nIf you're proofreading, you catch errors your eyes glide over. If you're studying, you absorb content hands-free. If you have reading difficulties, you access written content easily.",
    howToUse: [
      "Paste your text",
      "Choose voice and speed",
      "Click play",
      "Pause or replay anytime"
    ],
    faqs: [
      { question: "What voices are available?", answer: "Whatever your browser supports, typically male/female in many languages.", tip: "Test all voices to find a clean one." },
      { question: "Can I adjust speed?", answer: "Yes, slow for clarity or fast for review.", tip: "1.5x speed is great for reviewing long drafts." },
      { question: "Why does it sound robotic?", answer: "Browser TTS varies by OS. Chrome has natural-sounding voices on most systems.", tip: "Try Chrome or Edge for the cleanest output." },
      { question: "Good for accessibility?", answer: "Yes, helpful for dyslexia and vision difficulties.", tip: "Pair with a screen reader for full accessibility." },
      { question: "Does it work offline?", answer: "Some voices need internet, some are local. Depends on your OS.", tip: "Check browser settings if voices don't load." },
      { question: "Can I export the audio?", answer: "Browser TTS usually doesn't allow export. Use a desktop tool for that.", tip: "This tool is for listening, not recording." }
    ]
  },
  "speech-to-text": {
    description: "Convert spoken words to written text in real time — perfect for dictation, notes and accessibility.",
    whatIs: "Typing 800 words takes 10 minutes. Speaking 800 words takes 4. Voice input is faster than fingers for most prose.\n\nClick record, speak naturally, watch text appear instantly.\n\nIf you're drafting articles, you dictate first drafts faster than typing. If you're capturing notes, you record while reviewing. If you have motor difficulties, you bypass typing entirely.",
    howToUse: [
      "Click record",
      "Speak into your mic",
      "Watch text appear live",
      "Stop and copy the result"
    ],
    faqs: [
      { question: "Do I need a mic?", answer: "Yes, your browser asks for mic permission. Built-in laptop mics work fine.", tip: "Quality mics improve accuracy in noisy rooms." },
      { question: "How accurate is it?", answer: "Modern browser engines are 90%+ accurate for clear English speech.", tip: "Pause briefly between sentences for best results." },
      { question: "Multiple languages?", answer: "Yes, most major languages. Choose before recording.", tip: "Mixed-language text needs separate sessions." },
      { question: "Does it punctuate?", answer: "You usually need to say 'period' or 'comma' explicitly.", tip: "Some browsers auto-punctuate; test before relying on it." },
      { question: "Is my voice stored?", answer: "Browser engines process audio; some send to cloud servers.", tip: "Check browser privacy settings for specifics." },
      { question: "Works offline?", answer: "Some browsers cache models locally; most need internet.", tip: "Chrome on desktop usually works best." }
    ]
  },
  "text-to-binary-converter": {
    description: "Convert text to 8-bit binary code in one click — perfect for teaching encoding and decoding puzzle clues.",
    whatIs: "Computers store text as binary. Converting by hand past two characters is tedious and error-prone.\n\nPaste your text and see the binary code instantly.\n\nIf you're teaching encoding, you show how 'A' becomes 01000001. If you're building escape-room puzzles, you encode hints as binary. If you're debugging, you check character-level encoding fast.",
    howToUse: [
      "Paste your text",
      "See the 8-bit binary output",
      "Compare letters to their codes",
      "Hit Copy and use the binary"
    ],
    faqs: [
      { question: "How does the conversion work?", answer: "Each character maps to its 8-bit ASCII code.", tip: "'A' is 01000001, 'a' is 01100001." },
      { question: "What about Unicode?", answer: "ASCII chars convert to 8 bits. Unicode emojis can take 16-32 bits.", tip: "Stick to standard text for clean output." },
      { question: "Can I convert back?", answer: "Yes, use the Binary to Text converter.", tip: "Test round-trip to verify accuracy." },
      { question: "Why are bytes separated by spaces?", answer: "Standard format for readability. Each 8-bit chunk is one character.", tip: "Toggle to remove spaces for compact form." },
      { question: "What about uppercase vs lowercase?", answer: "They have different codes; 'A' is 65, 'a' is 97.", tip: "The 6th bit flips between upper and lower." },
      { question: "Is binary the same as machine code?", answer: "Binary is the format. Machine code is processor-specific instructions in binary.", tip: "Text encoding is one of many uses of binary." }
    ]
  },
  "binary-to-text-converter": {
    description: "Decode 8-bit binary back to readable text in one click — perfect for debugging and learning encoding.",
    whatIs: "You have a binary string and need to know what it says. Converting by hand is impossible past two characters.\n\nPaste binary and get readable text instantly.\n\nIf you're debugging encoding, you verify what bytes a string represents. If you're solving puzzles, you decode binary clues fast. If you're teaching, you complete the round-trip from text to binary and back.",
    howToUse: [
      "Paste your binary code",
      "Ensure bytes are space-separated",
      "See decoded text instantly",
      "Hit Copy and use it"
    ],
    faqs: [
      { question: "What format does it expect?", answer: "8-bit chunks separated by spaces. '01001000 01101001' decodes to 'Hi'.", tip: "Some tools accept compact form too." },
      { question: "What if my binary is malformed?", answer: "Non-8-bit chunks produce errors or garbled text.", tip: "Verify each chunk is exactly 8 bits." },
      { question: "Does it handle Unicode binary?", answer: "Yes if formatted as multi-byte UTF-8 sequences.", tip: "Most binary you'll encounter is ASCII." },
      { question: "Can I decode without spaces?", answer: "Some tools auto-detect 8-bit boundaries. Others require spaces.", tip: "Add spaces every 8 digits for safety." },
      { question: "Why does my output have weird characters?", answer: "Non-printable ASCII (0-31) decodes to control chars.", tip: "Verify your binary represents printable text." },
      { question: "Round-trip safe?", answer: "Yes, encode then decode produces the original text.", tip: "Use this to verify encoder accuracy." }
    ]
  },
  "text-to-ascii-converter": {
    description: "Convert text to ASCII decimal codes in one click — perfect for encoding work, debugging and CS learning.",
    whatIs: "Every character has a numeric ASCII code but memorizing them all is impossible. You need a fast lookup whenever you debug or teach encoding.\n\nPaste any text and get the ASCII code for every character.\n\nIf you're debugging string handling, you spot encoding issues fast. If you're teaching computing basics, you show the number behind every letter. If you're working with low-level code, you check exact decimal values.",
    howToUse: [
      "Paste your text",
      "See ASCII codes per character",
      "Compare letters to their numbers",
      "Hit Copy and use the codes"
    ],
    faqs: [
      { question: "What is ASCII?", answer: "American Standard Code for Information Interchange. 128 characters numbered 0-127.", tip: "'A'=65, 'a'=97, space=32." },
      { question: "What about Unicode characters?", answer: "Standard ASCII covers 0-127. Extended ASCII goes to 255. Unicode beyond uses different codes.", tip: "Stick to English text for pure ASCII." },
      { question: "Decimal vs hex output?", answer: "This tool shows decimal. Use a hex converter for 0x41 style output.", tip: "Hex is common in low-level code; decimal in education." },
      { question: "What's the difference between A and a?", answer: "Capital A is 65, lowercase a is 97. The 6th bit differs.", tip: "Bit-flip the 6th bit to toggle case in code." },
      { question: "What's code 0?", answer: "NUL (null) character. Used as a string terminator in C.", tip: "Codes 0-31 are control characters, not printable." },
      { question: "Round-trip with Binary?", answer: "Decimal ASCII converts to 8-bit binary cleanly. 65 = 01000001.", tip: "Stack with Text to Binary for full encoding view." }
    ]
  }
};

export function getToolContent(slug) {
  const tool = getToolBySlug(slug);
  if (!tool) return null;

  const overrides = slugContentOverrides[slug] || {};

  return {
    ...tool,
    ...overrides,
    categoryLabel: getCategoryLabel(tool.category),
    seoDescription: buildSeoDescriptionText(tool),
    howToUse: overrides.howToUse || buildHowToUse(tool),
    whatIs: overrides.whatIs || buildWhatIsText(tool),
    faqs: overrides.faqs || buildFaqs(tool),
    relatedTools: getRelatedToolSlugs(slug)
  };
}

const slugSeoOverrides = {
  "word-counter": {
    title: "Free Word Counter (Legal & Compliance Docs) | Toolkno",
    description: "Instantly count words in legal briefs, contracts and compliance reports. Free, no signup — check length limits before submitting.",
    keywords: ["free word counter", "legal document word counter", "contract word counter"]
  },
  "character-counter": {
    title: "Free Character Counter (SEC & GDPR Docs) | Toolkno",
    description: "Instantly count characters with and without spaces. Free tool for SEC filings, GDPR notices and tweet/SMS limits — no signup needed.",
    keywords: ["free character counter", "SEC filing character counter", "GDPR character limit checker"]
  },
  "sentence-counter": {
    title: "Free Sentence Counter (Legal & Academic Briefs) | Toolkno",
    description: "Instantly count sentences in legal briefs, court filings and academic papers. Free tool — verify length before submitting.",
    keywords: ["free sentence counter", "legal brief sentence counter", "academic paper sentence counter"]
  },
  "paragraph-counter": {
    title: "Free Paragraph Counter (Legal & Dissertations) | Toolkno",
    description: "Instantly count paragraphs in legal filings, dissertations and contracts. Free tool — check structure before submitting.",
    keywords: ["free paragraph counter", "legal filing paragraph counter", "dissertation paragraph counter"]
  },
  "case-converter": {
    title: "Free Case Converter (Contracts & Reports) | Toolkno",
    description: "Convert text to UPPER, lower, Title or Sentence case instantly. Free tool for contracts, headings and corporate reports — no signup.",
    keywords: ["free case converter", "contract case converter", "corporate report case converter"]
  },
  "text-to-uppercase-converter": {
    title: "Free Uppercase Converter (Headings & Forms) | Toolkno",
    description: "Instantly convert text to ALL CAPS. Free tool for legal headings, compliance forms and labels — no signup, works in browser.",
    keywords: ["free uppercase converter", "legal heading uppercase tool", "compliance form uppercase"]
  },
  "text-to-lowercase-converter": {
    title: "Free Lowercase Converter (Email & CRM Lists) | Toolkno",
    description: "Instantly convert text to clean lowercase. Free tool for email databases, CRM cleanup and SEO formatting — no signup needed.",
    keywords: ["free lowercase converter", "email database lowercase tool", "CRM data normalization"]
  },
  "title-case-converter": {
    title: "Free Title Case Converter (AP Style Headlines) | Toolkno",
    description: "Format headlines in AP-style title case instantly. Free tool for press releases, blog titles and corporate publications — no signup.",
    keywords: ["free title case converter", "AP style title case", "press release title case tool"]
  },
  "sentence-case-converter": {
    title: "Free Sentence Case Converter (Style Guides) | Toolkno",
    description: "Convert text to clean sentence case instantly. Free tool for editorial style guides and brand-voice consistency — no signup.",
    keywords: ["free sentence case converter", "editorial style guide tool", "brand voice formatter"]
  },
  "toggle-case-converter": {
    title: "Free Toggle Case Converter (Editorial Fixes) | Toolkno",
    description: "Instantly switch uppercase to lowercase and vice versa. Free tool for editorial proofing and copyedit case-shift fixes.",
    keywords: ["free toggle case converter", "editorial case toggle", "copyedit case fix tool"]
  },
  "remove-extra-spaces": {
    title: "Free Remove Extra Spaces (Legal & Court Docs) | Toolkno",
    description: "Strip double spaces and trim whitespace instantly. Free tool for legal filings, contracts and clean court submissions — no signup.",
    keywords: ["free extra space remover", "legal filing whitespace cleaner", "contract space cleanup"]
  },
  "remove-line-breaks": {
    title: "Free Line Break Remover (Database & CRM) | Toolkno",
    description: "Strip line breaks and convert to single line instantly. Free tool for CRM uploads, database imports and clean field values.",
    keywords: ["free line break remover", "database import line cleaner", "CRM upload formatter"]
  },
  "remove-duplicate-lines": {
    title: "Free Duplicate Line Remover (CRM & Email Lists) | Toolkno",
    description: "Deduplicate lines and keep unique entries instantly. Free tool for CRM imports, email lists and customer record cleanup.",
    keywords: ["free duplicate line remover", "email list deduplication", "CRM dedupe tool"]
  },
  "remove-special-characters": {
    title: "Free Special Character Remover (SQL & ETL) | Toolkno",
    description: "Strip punctuation and symbols instantly. Free tool for SQL imports, ETL pipelines and safe database ingestion — no signup.",
    keywords: ["free special character remover", "SQL import data cleaner", "ETL text preprocessor"]
  },
  "remove-numbers-from-text": {
    title: "Free Number Remover (NLP & ML Datasets) | Toolkno",
    description: "Strip all numbers from text instantly. Free tool for NLP datasets, ML training and token cleanup — works in browser, no signup.",
    keywords: ["free number remover from text", "NLP dataset cleaner", "ML training text preprocessor"]
  },
  "remove-punctuation": {
    title: "Free Punctuation Remover (NLP & ML Pipelines) | Toolkno",
    description: "Strip punctuation marks instantly. Free tool for NLP tokenization, ML training and clean text preprocessing — no signup needed.",
    keywords: ["free punctuation remover", "NLP punctuation cleaner", "ML text preprocessing tool"]
  },
  "remove-emojis": {
    title: "Free Emoji Remover (HR & Legal Transcripts) | Toolkno",
    description: "Strip emoji characters instantly. Free tool for HR chat logs, legal transcripts and compliance records — no signup, in browser.",
    keywords: ["free emoji remover", "HR chat log emoji cleaner", "legal transcript formatter"]
  },
  "remove-html-tags": {
    title: "Free HTML Tag Remover (CMS & Migration) | Toolkno",
    description: "Strip HTML tags and keep plain text instantly. Free tool for CMS migrations, content imports and clean text extraction — no signup.",
    keywords: ["free HTML tag remover", "CMS migration HTML stripper", "plain text extractor"]
  },
  "remove-urls-from-text": {
    title: "Free URL Remover (Compliance & HR Logs) | Toolkno",
    description: "Strip all website links from text instantly. Free tool for compliance logs, HR transcripts and legal exhibit prep — no signup.",
    keywords: ["free URL remover", "compliance log URL cleaner", "legal exhibit URL stripper"]
  },
  "remove-email-addresses-from-text": {
    title: "Free Email Remover (GDPR & HR Records) | Toolkno",
    description: "Strip email addresses instantly for GDPR redaction, HR records and privacy compliance. Free, no signup — works in browser.",
    keywords: ["free email address remover", "GDPR email redaction", "HR record privacy scrubber"]
  },
  "remove-accents": {
    title: "Free Accent Remover (CRM & Database Cleanup) | Toolkno",
    description: "Convert accented characters to plain letters instantly. Free tool for CRM normalization and database imports — no signup.",
    keywords: ["free accent remover", "diacritic stripper tool", "CRM accent normalization"]
  },
  "text-sorter-a-z": {
    title: "Free Text Sorter A-Z (Legal Indexes & Lists) | Toolkno",
    description: "Sort lines alphabetically A-Z instantly. Free tool for legal indexes, exhibit lists and citation organization — no signup.",
    keywords: ["free alphabetical sorter", "legal index A-Z sorter", "citation list organizer"]
  },
  "text-sorter-z-a": {
    title: "Free Text Sorter Z-A (Reverse Reports) | Toolkno",
    description: "Sort lines in reverse alphabetical order Z-A instantly. Free tool for inventory reports and descending data sorts — no signup.",
    keywords: ["free reverse alphabetical sorter", "Z-A sort tool", "inventory descending sort"]
  },
  "reverse-text": {
    title: "Free Reverse Text Tool (Crypto & Forensics) | Toolkno",
    description: "Reverse strings character-by-character instantly. Free tool for cryptography puzzles, forensic analysis and string inversion.",
    keywords: ["free reverse text tool", "cryptography string reverser", "forensic text inversion"]
  },
  "reverse-words": {
    title: "Free Reverse Words (Editorial & Copywriting) | Toolkno",
    description: "Reverse the order of words instantly. Free tool for copywriting brainstorms, headline restructuring and editorial workflows.",
    keywords: ["free reverse words tool", "copywriting word reverser", "headline restructure tool"]
  },
  "reverse-lines": {
    title: "Free Reverse Lines (Logs & Ledger Reviews) | Toolkno",
    description: "Flip line order instantly for log analysis, ledger reviews and chronological inversions. Free, no signup — works in browser.",
    keywords: ["free reverse lines tool", "log file line reverser", "ledger chronology tool"]
  },
  "text-splitter": {
    title: "Free Text Splitter (ETL Pipelines & CSV) | Toolkno",
    description: "Split text on delimiters instantly. Free tool for ETL pipelines, CSV cleanup and data ingestion prep — no signup, in browser.",
    keywords: ["free text splitter", "ETL pipeline splitter", "CSV cleanup tool"]
  },
  "line-splitter": {
    title: "Free Line Splitter (CSV Imports & Databases) | Toolkno",
    description: "Split text into separate lines instantly. Free tool for CSV imports, database row prep and data ingestion — no signup needed.",
    keywords: ["free line splitter", "CSV import line tool", "database row preparation"]
  },
  "word-splitter": {
    title: "Free Word Splitter (NLP Tokenization & ML) | Toolkno",
    description: "Split text into individual words instantly. Free tool for NLP tokenization, ML pipelines and ML input preparation — no signup.",
    keywords: ["free word splitter", "NLP word tokenizer", "ML word preprocessor"]
  },
  "paragraph-splitter": {
    title: "Free Paragraph Splitter (Legal & Editorial) | Toolkno",
    description: "Split text into paragraphs instantly. Free tool for legal document review, editorial workflows and manuscript analysis — no signup.",
    keywords: ["free paragraph splitter", "legal document paragraph tool", "editorial paragraph divider"]
  },
  "combine-text-lines": {
    title: "Free Combine Lines Tool (SQL & Form Fields) | Toolkno",
    description: "Merge lines into one string instantly. Free tool for SQL IN-clauses, form fields and query string builders — no signup needed.",
    keywords: ["free combine lines tool", "SQL IN-clause builder", "form field line merger"]
  },
  "text-joiner": {
    title: "Free Text Joiner (CSV & API Payloads) | Toolkno",
    description: "Join lines with custom delimiters instantly. Free tool for CSV exports, API payloads and data formatting — no signup needed.",
    keywords: ["free text joiner", "CSV delimiter tool", "API payload formatter"]
  },
  "lorem-ipsum-generator": {
    title: "Free Lorem Ipsum Generator (UX & Decks) | Toolkno",
    description: "Generate placeholder text instantly. Free tool for UX mockups, corporate decks and design prototyping — no signup, in browser.",
    keywords: ["free lorem ipsum generator", "UX mockup placeholder", "design prototyping text"]
  },
  "random-word-generator": {
    title: "Free Random Word Generator (QA Test Data) | Toolkno",
    description: "Generate random words instantly. Free tool for QA test data, form testing and input validation — no signup, in browser.",
    keywords: ["free random word generator", "QA test data words", "form testing input generator"]
  },
  "random-sentence-generator": {
    title: "Free Random Sentence Generator (QA & UX) | Toolkno",
    description: "Generate random sentences instantly. Free tool for QA tests, UX prototypes and placeholder content — no signup, works in browser.",
    keywords: ["free random sentence generator", "QA test sentence builder", "UX prototype text"]
  },
  "random-paragraph-generator": {
    title: "Free Random Paragraph Generator (CMS & Mockups) | Toolkno",
    description: "Generate random paragraphs instantly. Free tool for design mockups, CMS testing and layout fills — no signup, works in browser.",
    keywords: ["free random paragraph generator", "design mockup paragraph", "CMS test content"]
  },
  "prefix-suffix-text-generator": {
    title: "Free Prefix Suffix Tool (SKU & Inventory) | Toolkno",
    description: "Add prefixes or suffixes to every line instantly. Free tool for SKU lists, CSV imports and bulk product code prep — no signup.",
    keywords: ["free prefix suffix generator", "SKU list builder", "bulk product code formatter"]
  },
  "text-compare-tool": {
    title: "Free Text Compare (Contract Redlines & Diff) | Toolkno",
    description: "Compare two texts side-by-side instantly. Free tool for contract redlines, policy drafts and version control — no signup needed.",
    keywords: ["free text compare tool", "contract redline diff", "policy draft comparison"]
  },
  "text-difference-checker": {
    title: "Free Text Diff Checker (FDA & EMA Filings) | Toolkno",
    description: "Generate change-logs between document versions instantly. Free tool for regulatory filing amendments and audit trails — no signup.",
    keywords: ["free text diff checker", "FDA filing diff tool", "regulatory amendment tracker"]
  },
  "case-sensitive-compare": {
    title: "Free Case-Sensitive Compare (API Keys & Audits) | Toolkno",
    description: "Compare credentials with strict case matching instantly. Free tool for security audits, API key checks and token verification.",
    keywords: ["free case sensitive compare", "API key verification tool", "security audit credential check"]
  },
  "case-insensitive-compare": {
    title: "Free Case-Insensitive Compare (CRM Audits) | Toolkno",
    description: "Compare records ignoring case instantly. Free tool for CRM dedupe, search QA and account audits — no signup, in browser.",
    keywords: ["free case insensitive compare", "CRM record matcher", "account audit comparison"]
  },
  "keyword-density-checker": {
    title: "Free Keyword Density Checker (SEO Audits) | Toolkno",
    description: "Check keyword density and frequency instantly. Free tool for SEO audits, on-page optimization and ranking strategy — no signup.",
    keywords: ["free keyword density checker", "SEO content audit tool", "on-page keyword analyzer"]
  },
  "stop-word-counter": {
    title: "Free Stop Word Counter (SEO Copy Audits) | Toolkno",
    description: "Count filler and stop words instantly. Free tool for SEO copy audits, editorial reviews and tightening prose — no signup needed.",
    keywords: ["free stop word counter", "SEO copy audit tool", "editorial filler word checker"]
  },
  "readability-checker": {
    title: "Free Readability Checker (Marketing & EdTech) | Toolkno",
    description: "Check Flesch readability score instantly. Free tool for marketing copy, blog posts and educational content — no signup, in browser.",
    keywords: ["free readability checker", "Flesch reading score tool", "marketing copy grader"]
  },
  "sentence-analyzer": {
    title: "Free Sentence Analyzer (Editorial & Copy QA) | Toolkno",
    description: "Analyze sentence rhythm and length instantly. Free tool for editorial reviews, run-on detection and copy audits — no signup.",
    keywords: ["free sentence analyzer", "editorial sentence tool", "run-on sentence detector"]
  },
  "text-complexity-analyzer": {
    title: "Free Text Complexity Analyzer (Brand Voice) | Toolkno",
    description: "Analyze vocabulary depth and complexity instantly. Free tool for brand voice audits and technical doc reviews — no signup.",
    keywords: ["free text complexity analyzer", "brand voice audit tool", "vocabulary depth checker"]
  },
  "text-masking-tool": {
    title: "Free Text Masking Tool (PCI & Banking) | Toolkno",
    description: "Mask sensitive data with symbols instantly. Free tool for PCI compliance, banking records and safe field handling — no signup.",
    keywords: ["free text masking tool", "PCI data masker", "banking record privacy tool"]
  },
  "text-redaction-tool": {
    title: "Free Text Redaction Tool (GDPR & HIPAA) | Toolkno",
    description: "Redact sensitive text with blackouts instantly. Free tool for GDPR, HIPAA and legal disclosure compliance — no signup, in browser.",
    keywords: ["free text redaction tool", "GDPR redaction online", "HIPAA compliance redactor"]
  },
  "censor-text-tool": {
    title: "Free Censor Text Tool (HR & Moderation) | Toolkno",
    description: "Censor profanity and sensitive terms instantly. Free tool for HR investigation reports and content moderation — no signup needed.",
    keywords: ["free censor text tool", "HR investigation censor", "content moderation tool"]
  },
  "normalize-unicode-text": {
    title: "Free Unicode Normalizer (Brand & Trademark) | Toolkno",
    description: "Normalize Unicode characters instantly. Free tool for brand protection, trademark monitoring and spoof detection — no signup.",
    keywords: ["free Unicode normalizer", "brand protection text tool", "trademark spoof detector"]
  },
  "find-and-replace-text": {
    title: "Free Find and Replace (Contracts & Policy) | Toolkno",
    description: "Bulk find and replace text instantly. Free tool for legal contracts, policy docs and clause standardization — no signup needed.",
    keywords: ["free find and replace tool", "legal contract bulk edit", "policy clause replace"]
  },
  "text-randomizer": {
    title: "Free Text Randomizer (QA Tests & Surveys) | Toolkno",
    description: "Shuffle word order instantly. Free tool for QA test data, survey randomization and unbiased research samples — no signup needed.",
    keywords: ["free text randomizer", "QA test data shuffler", "survey randomization tool"]
  },
  "shuffle-text-lines": {
    title: "Free Shuffle Lines Tool (Surveys & Research) | Toolkno",
    description: "Shuffle line order randomly and instantly. Free tool for research samples, survey question randomization and QA — no signup.",
    keywords: ["free shuffle lines tool", "research sample shuffler", "survey question randomizer"]
  },
  "text-tokenizer": {
    title: "Free Text Tokenizer (NLP & ML Pipelines) | Toolkno",
    description: "Tokenize text into structured units instantly. Free tool for NLP datasets, ML training and input preparation — no signup needed.",
    keywords: ["free text tokenizer", "NLP dataset tokenizer", "ML training preprocessor"]
  },
  "text-validator": {
    title: "Free Text Validator (Form QA & Audits) | Toolkno",
    description: "Validate text against rules instantly. Free tool for form QA, data audits and batch input verification — no signup, in browser.",
    keywords: ["free text validator", "form QA validation tool", "data audit rule checker"]
  },
  "text-to-speech": {
    title: "Free Text to Speech (Accessibility & ADA) | Toolkno",
    description: "Convert text to spoken audio instantly. Free tool for accessibility audits, ADA content review and proofing — no signup needed.",
    keywords: ["free text to speech", "accessibility TTS tool", "ADA content audio reader"]
  },
  "speech-to-text": {
    title: "Free Speech to Text (Meetings & Depositions) | Toolkno",
    description: "Transcribe speech to text instantly. Free tool for meeting minutes, legal depositions and dictation — no signup, works in browser.",
    keywords: ["free speech to text", "meeting transcript tool", "legal deposition transcriber"]
  },
  "text-to-binary-converter": {
    title: "Free Text to Binary (Embedded & CS) | Toolkno",
    description: "Convert text to binary code instantly. Free tool for embedded systems, CS education and low-level encoding — no signup needed.",
    keywords: ["free text to binary converter", "embedded systems binary tool", "CS education encoder"]
  },
  "binary-to-text-converter": {
    title: "Free Binary to Text (Forensics & Debugging) | Toolkno",
    description: "Decode binary numbers to readable text instantly. Free tool for forensic analysis, developer debugging and byte verification.",
    keywords: ["free binary to text converter", "forensic binary decoder", "developer debug tool"]
  },
  "text-to-ascii-converter": {
    title: "Free Text to ASCII (Embedded Dev & CS) | Toolkno",
    description: "Convert text to decimal ASCII codes instantly. Free tool for embedded development, CS curriculum and character lookup — no signup.",
    keywords: ["free text to ASCII converter", "embedded ASCII encoder", "CS curriculum ASCII tool"]
  }
};

export function buildToolMetadata(slug) {
  const tool = getToolContent(slug);
  if (!tool) {
    return {
      title: "Tool Not Found | Toolkno",
      description: "This Toolkno tool could not be found."
    };
  }

  const seo = slugSeoOverrides[slug];
  const nameLower = tool.name.toLowerCase();
  const title = seo?.title || `${tool.name} — Free Online | Toolkno`;
  const description = seo?.description || tool.description;
  const keywords = seo?.keywords || [
    nameLower,
    `${nameLower} online`,
    `free ${nameLower}`,
    `${nameLower} tool`
  ];
  const canonical = `${SITE_URL}/tools/${tool.slug}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-default.png`,
          width: 1200,
          height: 630,
          alt: tool.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og-default.png`]
    }
  };
}

export function buildToolSchemas(slug) {
  const tool = getToolContent(slug);
  if (!tool) return null;

  const url = `${SITE_URL}/tools/${tool.slug}`;

  const webApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    url,
    description: tool.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (tool.faqs || []).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${SITE_URL}/tools`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.name,
        item: url
      }
    ]
  };

  return { webApplication, faqPage, breadcrumbList };
}

export { stopWords, titleFromSlug, getCategoryLabel };
