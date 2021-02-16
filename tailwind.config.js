const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      teal: colors.teal,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      purple: colors.purple,
      white: {
        DEFAULT: 'ffffff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
