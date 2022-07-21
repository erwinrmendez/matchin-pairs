/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        matched: "matched 0.8s linear normal both",
      },
      keyframes: {
        matched: {
          "0%": { padding: "0.5rem" },
          "20%": { padding: "0.75rem" },
          "40%": { padding: "0.25rem" },
          "60%": { padding: "0.5rem" },
          "80%": { padding: "0.25rem" },
          "100%": { padding: "0em", backgroundColor: "rgb(248 250 252)" },
        },
      },
    },
  },
  plugins: [],
};
