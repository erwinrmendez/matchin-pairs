/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        matched: "matched 0.8s linear normal both",
        "fade-in": "fade 0.7s linear normal both",
        "fade-out": "fade 0.3s linear reverse both",
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
        fade: {
          "0%": { opacity: 0, transform: "translateY(-100px)" },
          "25%": { opacity: 0.25, transform: "translateY(-75px)" },
          "50%": { opacity: 0.5, transform: "translateY(-50px)" },
          "75%": { opacity: 0.75, transform: "translateY(-25px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
