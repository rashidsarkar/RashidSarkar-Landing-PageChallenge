/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#383838",
        "text-secondary": "#545454",
      },
    },
  },
  plugins: [require("daisyui")],
};
