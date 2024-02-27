/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { red: "#8A2929" },
    },
  },
  plugins: [require("daisyui")],
  daisyui: { themes: ["light"] },
};
