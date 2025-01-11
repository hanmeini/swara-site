/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        "super-rounded": "2rem",
        "extra-rounded": "7rem"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}