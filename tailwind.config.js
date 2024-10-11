/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,md}"],
  theme: {
    extend: {},
    //https://lospec.com/palette-list/endesga-32
    backgroundColor: theme => ({
      'base': '#ff2674',

      'pink': '#ff0044',
      'blue': '#0099db',
      'green': '#63c74d',
      'yellow': '#fee761',
      // 'orange': '#f77622',
      'orange': '#d77643',
      'purple': '#68386c',
     })
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

