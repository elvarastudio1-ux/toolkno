// One-off OG image generator. Run: node scripts/generate-og.js
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "public", "og-default.png");
mkdirSync(dirname(OUT), { recursive: true });

const W = 1200;
const H = 630;

// Clean SVG: blue→purple gradient, soft center glow, three centered text lines.
// No icons, no watermarks, no borders.
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e3a8a"/>
      <stop offset="55%" stop-color="#4338ca"/>
      <stop offset="100%" stop-color="#7e22ce"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <g font-family="Inter, 'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif"
     text-anchor="middle" fill="#ffffff">
    <text x="${W / 2}" y="285"
          font-size="148" font-weight="800"
          letter-spacing="-4">Toolkno</text>

    <text x="${W / 2}" y="380"
          font-size="46" font-weight="500"
          fill="#e9e6ff">Free Online Text Tools</text>

    <text x="${W / 2}" y="460"
          font-size="28" font-weight="400"
          fill="#c7c2ee" letter-spacing="2">Simple   •   Fast   •   Free</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log("wrote:", OUT);
