/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060807', // Deep Obsidian Pitch Black
          900: '#0b0f0e', // Dark surface card
          850: '#101614',
          800: '#151c1a',
          700: '#1c2824', // Subtle dark forest border
          600: '#253630',
          500: '#31463f',
        },
        sapling: {
          100: '#F4FDE8',
          200: '#E4FBCB',
          300: '#A8F35C',
          400: '#8EE54F', // Exact Electric Lime Green from reference
          500: '#77D138',
          600: '#5DA82B',
        },
        // Mapped Electric Lime accents
        electric: {
          cyan: '#8EE54F',
          blue: '#A8F35C',
          indigo: '#1c2824',
        },
        neon: {
          purple: '#8EE54F',
          violet: '#A8F35C',
          pink: '#77D138',
          rose: '#8EE54F',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      boxShadow: {
        'glow-sapling': '0 0 35px -5px rgba(142, 229, 79, 0.45)',
        'glow-lime': '0 0 35px -5px rgba(142, 229, 79, 0.45)',
        'glow-teal': '0 0 35px -5px rgba(28, 40, 36, 0.6)',
        'glow-blue': '0 0 35px -5px rgba(142, 229, 79, 0.35)',
        'glow-purple': '0 0 35px -5px rgba(142, 229, 79, 0.35)',
        'glow-pink': '0 0 35px -5px rgba(142, 229, 79, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.65)',
      }
    },
  },
  plugins: [],
}
