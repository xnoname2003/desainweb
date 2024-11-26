/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",
    "./src/img/**/*.{jpg,png,svg}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/img/herojpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}