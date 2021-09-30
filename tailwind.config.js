// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: {
          'cosmos': "url('/animat.gif')",
        },
        backgroundSize: {
          '40' : '40%',
          '50' : '50%',
          '60' : '60%',
          
        },
        zIndex: {
         '75': 75,
         '100': 100,
        },
        boxShadow: {
          'ssm' : '0 0 5px rgba(0, 0, 0, .4)'
        },
      },
    },
    variants: {},
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    ],
  }