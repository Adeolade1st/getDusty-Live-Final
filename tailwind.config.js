/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dusty: {
          primary: '#6D28D9',
          hover: '#5B21B6',
          light: '#EDE9FE',
          bg: '#F9FAFB',
          text: '#111827',
          subtext: '#6B7280',
          border: '#E5E7EB'
        }
      }
    }
  },
  plugins: [],
}