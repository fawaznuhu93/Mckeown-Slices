/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pizza': {
          'red': '#DC2626',
          'yellow': '#FBBF24',
          'orange': '#EA580C',
          'green': '#16A34A',
          'brown': '#92400E',
          'dark': '#1F2937',
          'light': '#FEF3C7'
        },
        'nyc': {
          'taxi': '#FCD34D',
          'subway': '#0039A6',
          'sky': '#0EA5E9'
        }
      },
      fontFamily: {
        'nyc': ['"Bebas Neue"', 'sans-serif'],
        'italian': ['"Playfair Display"', 'serif'],
        'manchester': ['"Inter"', 'sans-serif']
      },
      animation: {
        'float-pizza': 'floatPizza 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out'
      },
      keyframes: {
        floatPizza: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      backgroundImage: {
        'pizza-texture': 'url("https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?auto=format&fit=crop&w=2000")',
        'nyc-texture': 'url("https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=2000")',
        'gradient-pizza': 'linear-gradient(135deg, #DC2626 0%, #EA580C 100%)'
      }
    },
  },
  plugins: [],
}