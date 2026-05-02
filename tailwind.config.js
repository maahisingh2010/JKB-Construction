/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#F15A24', // JKB Orange
        'brand-secondary': '#1B1464', // JKB Blue
        'brand-accent': '#009245', // JKB Green
        'brand-dark': '#0F172A', // For text/headings
        'brand-light': '#F8FAFC', // For light backgrounds
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
