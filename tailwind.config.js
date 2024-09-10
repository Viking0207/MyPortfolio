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
      },
      width: {
        '2/2': '52%',
      },
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

