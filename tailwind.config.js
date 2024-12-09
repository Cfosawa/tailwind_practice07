/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./docs/*.html"],
  theme: {
    extend: {
      colors:{
        'header': '#F6EFEE',
        'default': '#62554F',
        'pink': '#C77C92',
        'design':'#EFE3E2'
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        body: {
          overflowX: 'hidden',
        },
      });
    },
  ],
  
}

