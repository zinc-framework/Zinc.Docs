import colors from './src/_data/colors.js';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,md}"],
  theme: {
    extend: {},
    //https://lospec.com/palette-list/endesga-32
    backgroundColor: theme => ({
      'base': colors.base,
      'pink': colors.pink,
      'blue': colors.blue,
      'green': colors.green,
      'yellow': colors.yellow,
      'orange': colors.orange,
      'purple': colors.purple,
     })
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

