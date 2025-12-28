/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f0f4fb',
          100: '#e1e9f7',
          200: '#c3d3ef',
          300: '#a5bde7',
          400: '#7b9add',
          500: '#486AAE',
          600: '#486AAE',
          700: '#3a5283',
          800: '#2c3d62',
          900: '#1e2841',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f8b4d6',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
      },
    },
  },
  plugins: [],
}
