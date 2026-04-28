/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname
  },
  devIndicators: false,
  async redirects() {
    const toolSlugs = [
      "word-counter", "character-counter", "sentence-counter", "paragraph-counter",
      "case-converter", "text-to-uppercase-converter", "text-to-lowercase-converter",
      "title-case-converter", "sentence-case-converter", "toggle-case-converter",
      "remove-extra-spaces", "remove-line-breaks", "remove-duplicate-lines",
      "remove-special-characters", "remove-numbers-from-text", "remove-punctuation",
      "remove-emojis", "remove-html-tags", "remove-urls-from-text",
      "remove-email-addresses-from-text", "remove-accents",
      "text-sorter-a-z", "text-sorter-z-a", "reverse-text", "reverse-words", "reverse-lines",
      "text-splitter", "line-splitter", "word-splitter", "paragraph-splitter",
      "combine-text-lines", "text-joiner", "lorem-ipsum-generator",
      "random-word-generator", "random-sentence-generator", "random-paragraph-generator",
      "prefix-suffix-text-generator", "text-compare-tool", "text-difference-checker",
      "case-sensitive-compare", "case-insensitive-compare", "keyword-density-checker",
      "stop-word-counter", "readability-checker", "sentence-analyzer",
      "text-complexity-analyzer", "text-masking-tool", "text-redaction-tool",
      "censor-text-tool", "normalize-unicode-text", "find-and-replace-text",
      "text-randomizer", "shuffle-text-lines", "text-tokenizer", "text-validator",
      "text-to-speech", "speech-to-text", "text-to-binary-converter",
      "binary-to-text-converter", "text-to-ascii-converter"
    ];

    return [
      ...toolSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/tools/${slug}`,
        permanent: true
      })),
      {
        source: "/text-tools",
        destination: "/tools",
        permanent: true
      },
      {
        source: "/text-tools/counters",
        destination: "/tools",
        permanent: true
      },
      {
        source: "/sentence-counter-count-sentences-online-for-free",
        destination: "/tools/sentence-counter",
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

module.exports = nextConfig;
