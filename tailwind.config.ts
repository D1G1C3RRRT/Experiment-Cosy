import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#F4F1EA",
        "cream-secondary": "#EAE6DF",
        slate: "#0D0E11",
        "slate-card": "#16181D",
        terracotta: "#D96B43",
        rust: "#C85A32",
        charcoal: "#1C1D21",
        "diff-add-bg": "rgba(34, 197, 94, 0.15)",
        "diff-add-text": "#15803D",
        "diff-del-bg": "rgba(239, 68, 68, 0.15)",
        "diff-del-text": "#B91C1C"
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #1C1D21",
        "brutal-sm": "2px 2px 0px 0px #1C1D21"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
