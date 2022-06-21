/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {colors: {
      'dark': '#24292F',
      'dark-secondary': '#57606A',
      'imagination': '#F6F8FA',
      'white': '#ffffff',
      'dim': '#151515',
      'dim-secondary': '#202022',
      'dim-body': '#777778',
      'event': '#EFF2FF',
      'code': '#FFEFF7',
      'design': '#E4F6FF',
      'article': '#EBEEF0',
  
    },},
  },
  // fontFamily: {
  //   sans: ['Mulish', 'sans-serif'],
  //   serif: ['Merriweather', 'serif'],
  // },
  plugins: [],
}
