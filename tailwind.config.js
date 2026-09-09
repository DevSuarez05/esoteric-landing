/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-mystic': '#0B0914',
        'purple-glow': '#1E1035',
        'gold-accent': '#D4AF37',
        'astral-cyan': '#00E5FF',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.4)',
        'cyan-glow': '0 0 25px -5px rgba(0, 229, 255, 0.4)',
        'purple-glow': '0 0 35px -5px rgba(157, 78, 221, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
