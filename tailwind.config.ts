import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // CHANGED: From Pure White to "Misty Grey" (Reduces Eye Strain)
        background: "#EFF2EF", 
        
        // CHANGED: "Surface" is now White (Pop out effect)
        surface: "#FFFFFF", 
        surfaceHighlight: "#F4F4F5",
        
        accent: "#004F2E",            // U of R Green
        gold: "#FFC82E",              // U of R Gold
        
        textMain: "#051F15",          // Softer Black (Deep Green-Black)
        textMuted: "#5D6D65",         // Softer Grey
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