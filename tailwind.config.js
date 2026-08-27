/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kin: {
          base: '#F7F4EE',
          surface: '#EFEAE1',
          'surface-hover': '#E5DFD4',
          card: '#FAF7F2',
          text: '#1C1917',
          muted: '#78716C',
          accent: '#A67C52',
          'accent-dark': '#84603B',
          'accent-light': '#D4C3AC',
          border: '#E5DFD3',
          dark: '#141210',
          'dark-surface': '#1F1C18',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.25em',
        widest: '0.15em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
