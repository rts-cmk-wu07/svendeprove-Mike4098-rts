/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
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
      }
    },
   
  },
  plugins: [],
}