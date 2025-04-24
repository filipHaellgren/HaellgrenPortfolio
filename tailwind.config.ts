import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // ✅ import plugin properly for TS

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
extend: {
  fontFamily: {
    sans: "var(--font-sans)",
    serif: "var(--font-serif)",
  },
  animation: {
    "move-left": "move-left 1s linear infinite",
    "move-right": "move-right 1s linear infinite",
    "bounce-down": "bounce-down 0.5s ease-out forwards",
  },
  keyframes: {
    "ping-large": {
      "75%, 100%": {
        transform: "scale(3)",
        opacity: "0",
      },
    },
    "move-left": {
      "0%": { transform: "translateX(0%)" },
      "100%": { transform: "translateX(-50%)" },
    },
    "move-right": {
      "0%": { transform: "translateX(-50%)" },
      "100%": { transform: "translateX(0%)" },
    },
    "bounce-down": {
      "0%": {
        opacity: "0",
        transform: "translateY(-20px)",
      },
      "60%": {
        opacity: "1",
        transform: "translateY(10px)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },
  },
},

    
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("lt-sm", "@media (max-width: 374px)");
      addVariant("lt-md", "@media (max-width: 767px)");
      addVariant("lt-lg", "@media (max-width: 1199px)");
    }),
  ],
};

export default config;
