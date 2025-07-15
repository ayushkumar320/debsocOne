/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        orange: {
          500: "#ff6a00",  // Bright orange
          600: "#e65c00",
        },
      },
      keyframes: {
        cardDrop: {
          "0%": { opacity: 0, transform: "translateY(100px) scale(0.95)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        cardDrop: "cardDrop 0.5s ease-in-out forwards", // ✅ ADD THIS LINE
      },
    },
  },
  plugins: [],
};
