/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components//*.{js,vue,ts}",
    "./layouts//*.vue",
    "./pages//*.vue",
    "./plugins//*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite//*.js",
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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' , opacity: '1'
           },
          '50%': { transform: 'translateY(10px)', opacity: '1'},
        },
        smoothFloat: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-15px)', opacity: '0.8' },
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        smoothFloat: 'smoothFloat 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        floatX: 'floatX 5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}