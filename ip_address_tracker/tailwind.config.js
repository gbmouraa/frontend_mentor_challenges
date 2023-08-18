/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-mobile' : "url('../images/pattern-bg-mobile.png')",
        'header-desktop' : "url('../images/pattern-bg-desktop.png')",
        'search-icon': "url('../images/icon-arrow.svg')"
      },
      fontFamily: {
        'rubik': ['Rubik','sans-serif']
      }
    },
  },
  plugins: [],
}

