/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "card-drop": "cardDrop 0.5s ease-in-out forwards",
      },
      keyframes: {
        cardDrop: {
          "0%": {
            opacity: 0,
            transform: "translateY(100px) scale(0.95)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0) scale(1)",
          },
        },
      },
      colors: {
        orange: {
          500: "#f97316", // Tailwind's default orange-500
        },
      },
      boxShadow: {
        glow: "0 0 25px #f97316",
      },
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "1.875rem",
      },
    },
  },
  plugins: [],
};
