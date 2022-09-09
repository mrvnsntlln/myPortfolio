/** @type {import('tailwindcss').Config} */
const colors= require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.trueGray,
        gray:{
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5'
        }
      }
    },
    theme:{
      screens:{
        phone: '375px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      }
    },
  },
  plugins: [],
}
