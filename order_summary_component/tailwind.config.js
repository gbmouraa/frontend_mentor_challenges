/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      redHat: ['Red Hat Display', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'pattern-desktop': "url('../images/pattern-background-desktop.svg')",
        'pattern-mobile' : "url('../images/pattern-background-mobile.svg')"
      },
      colors: {
        'p-blue': 'hsl(225, 100%, 94%)',
        'b-blue': 'hsl(245, 75%, 52%)',
        'vp-blue': 'hsl(225, 100%, 98%)',
        'd-blue': 'hsl(224, 23%, 55%)',
        'drk-blue': 'hsl(223, 47%, 23%)'
      },
    },
  },
  plugins: [],
}