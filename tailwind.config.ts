import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // --- BACKGROUNDS ---
        background: "#F0F4F8",        // Crisp White-Blue Tint (Clean)
        surface: "#FFFFFF", 
        surfaceHighlight: "#F4F4F5",
        
        // --- THEME COLORS (DEEP NAVY & GOLD) ---
        accent: "#0A2A4A",            // CHANGED: Much Darker, Richer Navy
        gold: "#FFC72C",              // BRIGHT YELLOW/GOLD (Standard University Gold)
        
        // --- TEXT ---
        textMain: "#051626",          // Very dark blue-black for reading
        textMuted: "#4B5563",         // Standard Slate Grey
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;