/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'dark-blue': 'hsl(217, 28%, 15%)',
      'main-bg': 'hsl(218, 28%, 13%)',
      'footer-bg': 'hsl(216, 53%, 9%)',
      'testimonial-bg': 'hsl(219, 30%, 18%)',
      'cyan': 'hsl(176, 68%, 64%)',
      'blue': 'hsl(198, 60%, 50%)',
      'light-red': 'hsl(0, 100%, 63%)',
      'white': 'hsl(0, 0%, 100%)',
      'green': '#23ed1c',
    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'curvy-mb': 'url("../images/bg-curvy-mobile.svg")',
        'curvy': 'url("../images/bg-curvy-desktop.svg")',
        'btn-gradient': 'linear-gradient(90deg, rgba(110,222,228,1) 0%, rgba(38,220,246,1) 38%)',
        'btn-gradient-hv': 'linear-gradient(90deg, rgba(158,243,255,1) 0%, rgba(171,244,255,1) 38%)'
      },
      backgroundSize: {
        'custom-sm': '150% 60%',
        'custom-lg': '100% 54%'
      },
      backgroundColor: {

      },
      boxShadow: {
        'testimonial': '6px 6px 0px rgba(14, 16, 26, .4)',
        'testimonial-hv': '14px 14px 0px rgba(14, 16, 26, .4)',
        'form': '4px 0px 2px 2px rgba(14, 16, 26, .4)'
      }
    }
  },
  plugins: [],
}

