/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: 'rgb(var(--color-brand-violet) / <alpha-value>)',
          purple: 'rgb(var(--color-brand-purple) / <alpha-value>)',
          'violet-dark': 'rgb(var(--color-brand-violet-dark) / <alpha-value>)',
          'purple-dark': 'rgb(var(--color-brand-purple-dark) / <alpha-value>)',
          slate: {
            700: 'rgb(var(--color-brand-slate-700) / <alpha-value>)',
            800: 'rgb(var(--color-brand-slate-800) / <alpha-value>)',
            950: 'rgb(var(--color-brand-slate-950) / <alpha-value>)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease forwards',
        'fade-in-up': 'fade-in-up 0.8s ease forwards',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
        'floaty': 'floaty 6s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        'scroll-down': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(8px)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'border-glow': {
          '0%, 100%': {
            borderColor: 'rgb(var(--color-brand-violet) / 0.3)',
            boxShadow: '0 0 20px rgb(var(--color-brand-violet) / 0.1)',
          },
          '50%': {
            borderColor: 'rgb(var(--color-brand-violet) / 0.6)',
            boxShadow: '0 0 30px rgb(var(--color-brand-violet) / 0.2)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
