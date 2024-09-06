/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/index.html"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'max-h': 'max-height'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

