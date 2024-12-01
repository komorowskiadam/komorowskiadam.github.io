/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#1E293B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
