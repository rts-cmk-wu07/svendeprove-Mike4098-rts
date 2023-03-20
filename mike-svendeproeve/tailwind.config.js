/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        grey: '#EAEAEA',
        darkPurple: '#5E2E53',
        pink: '#E1A1E9',
        black: '#000000',
      },
      fontSize: {
        sm: '18px',
        md: '24px',
        lg: '36px'
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        racing: ["Racing Sans One", "sans-serif"],
      },
      backgroundImage: {
        'splash': "url('./assets/splash-image.jpg')"
      }
    },
   
  },
  plugins: [],
}