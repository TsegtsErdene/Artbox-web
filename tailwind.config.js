/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#FC3434',
        accent: '#E4E8EB'
      }
    },
  },
  plugins: [],
}

