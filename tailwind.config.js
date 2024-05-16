/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#170550",
        "primary-purple": "#31065A",
        "primary-orange": "#F86F03",
      },
    },
  },
  plugins: [],
};
