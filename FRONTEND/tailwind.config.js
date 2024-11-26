/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBeige: "#D4B87A",
        customBlue: "#A1A28E",
      },
      screens: {
        xs: "425px",
        "2xs": "576px",
      },
    },
  },
  plugins: [],
};
