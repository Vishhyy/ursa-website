import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // --- BACKGROUNDS ---
        // CHANGED: Removed the Blue tint (#F0F4F8) in favor of a clean, neutral "University" off-white.
        background: "#F9FAFB",        
        surface: "#FFFFFF", 
        surfaceHighlight: "#F4F4F5",
        
        // --- THEME COLORS (U OF R OFFICIAL) ---
        accent: "#004F2E",            // U of R Forest Green
        gold: "#FFC72C",              // U of R Bright Gold
        
        // --- TEXT ---
        // CHANGED: From Deep Navy (#051626) to Deep Dark Green-Black. 
        // This is visually black, but fits the green theme perfectly.
        textMain: "#0D1F16",          
        
        // Muted text stays neutral grey
        textMuted: "#4B5563",         
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