/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'imul': ['Mulish', 'sans-serif'],
        'legend': ['Lexend', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

