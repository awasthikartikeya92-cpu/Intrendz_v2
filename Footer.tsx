/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF8F4',
          dark: '#F2EFE8',
        },
        ink: {
          DEFAULT: '#0F0E0C',
          mid: '#3A3831',
          light: '#7A7872',
        },
        accent: {
          DEFAULT: '#1A3A5C',
          mid: '#2D5F8A',
          light: '#E8EFF6',
        },
        gold: {
          DEFAULT: '#B8902A',
          light: '#F5EDD9',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(52px,5vw,80px)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(36px,4vw,60px)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(28px,3vw,44px)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
      },
      borderColor: {
        rule: 'rgba(15,14,12,0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        ticker: 'ticker 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
