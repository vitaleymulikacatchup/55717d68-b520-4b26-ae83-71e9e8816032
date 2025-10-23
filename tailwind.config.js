/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'auto-red': '#e74c3c',
        'auto-blue': '#3498db',
        'auto-green': '#8bc34a',
        'auto-orange': '#f39c12',
        'auto-gray': '#95a5a6',
        'auto-dark': '#2c3e50',
        'auto-light': '#ecf0f1'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}