const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: colors.emerald,
      red: colors.rose,
      blue: colors.indigo,
      yellow: colors.amber,
      orange: colors.orange,
      gray: colors.gray,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
