module.exports = {
  purge: {
    enabled: true, // set to false for development
    content: ['./src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
