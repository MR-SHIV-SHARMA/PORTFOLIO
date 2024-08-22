/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         customBeige: '#F9F5EC',
        customBlue: '#A1A28E',
      }
    },
  },
  plugins: [],
};
