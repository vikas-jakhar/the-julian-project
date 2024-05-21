/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        EBGaramond: ["EB Garamond", "sans-serif"],
      },
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
        '2xl': '1140px'
      }
    }
  },
  plugins: [],
}