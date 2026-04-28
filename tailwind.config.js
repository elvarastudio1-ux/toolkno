/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#f8fafc",
        page: "#f8fafc",
        surface: "#ffffff",
        surfaceSoft: "#f1f5f9",
        surfaceMuted: "#f1f5f9",
        line: "#e2e8f0",
        text: "#0f172a",
        muted: "#64748b",
        hint: "#94a3b8",
        accent: "#0ea5e9",
        accentDark: "#0284c7",
        accentGreen: "#22c55e",
        accentGreenDark: "#16a34a",
        warning: "#d97706",
        borderGreen: "#bbf7d0",
        bgGreenLight: "#f0fdf4",
        bgBlueLight: "#f0f9ff",
        footer: "#0f172a"
      },
      boxShadow: {
        glow: "0 10px 30px rgba(14, 165, 233, 0.10)",
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 0 0 1px rgba(15, 23, 42, 0.04)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
