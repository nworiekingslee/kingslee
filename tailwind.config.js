/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      'dark': '#24292F',
      'dark-secondary': '#57606A',
      'imagination': '#F6F8FA',
      'white': '#ffffff',
  
    },},
  },
  // fontFamily: {
  //   sans: ['Mulish', 'sans-serif'],
  //   serif: ['Merriweather', 'serif'],
  // },
  plugins: [],
}
