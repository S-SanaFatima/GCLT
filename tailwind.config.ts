import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1A3E8C', dark: '#122D6B', light: '#2B5CB8' },
        accent: { DEFAULT: '#F5A623', dark: '#D4891A', light: '#FFBE4D' },
        'off-white': '#F8F9FB',
        'light-gray': '#EEF1F6',
        'mid-gray': '#8A94A6',
        dark: '#1C2333',
        border: '#DDE3ED',
        success: '#22C55E',
      },
      fontFamily: {
        heading: ['Montserrat', 'var(--font-heading)', 'sans-serif'],
        body: ['Inter', 'var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(26,62,140,0.06)',
        soft: '0 4px 24px rgba(26,62,140,0.08)',
        elevated: '0 12px 40px rgba(26,62,140,0.14)',
        glow: '0 0 0 1px rgba(26,62,140,0.06), 0 8px 32px rgba(26,62,140,0.12)',
        'nav': '0 8px 32px rgba(26,62,140,0.1)',
      },
      borderRadius: {
        card: '0.75rem',
        input: '0.5rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1A3E8C 0%, #122D6B 50%, #0F2347 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F5A623 0%, #D4891A 100%)',
        'mesh-hero': 'radial-gradient(at 40% 20%, rgba(245,166,35,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255,255,255,0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(26,62,140,0.4) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
};

export default config;
