/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#b794f4',
          500: '#9f7aea',
          600: '#805ad5',
          700: '#6b46c1',
          900: '#44337a',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
