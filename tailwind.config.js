/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C0392B', // Deep Red
          hover: '#A93226',
        },
        secondary: {
          DEFAULT: '#D4AC0D', // Warm Gold
          hover: '#B7950B',
        },
        accent: {
          DEFAULT: '#E67E22', // Saffron Orange
        },
        background: {
          DEFAULT: '#FDF6EC', // Warm Cream
        },
        text: {
          DEFAULT: '#2C2C2C', // Deep Charcoal
        }
      },
      fontFamily: {
        heading: ['"Rozha One"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.33)' },
          '80%, 100%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
