/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      colors:{
        'header': '#F6EFEE',
        'default': '#62554F',
      },
    },
  },
  plugins: [],
  
}

