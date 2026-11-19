import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ed145b',
          hover: '#c40e48',
          light: '#fce4ec',
        },
        secondary: {
          DEFAULT: '#0a6375',
          hover: '#074c5a',
          light: '#e0f2f5',
        },
        tertiary: {
          DEFAULT: '#f7941e',
          hover: '#d97d10',
          light: '#fef3e5',
        },
        turquoise: {
          DEFAULT: '#1cbbb4',
          hover: '#159690',
          light: '#e5f8f7',
        },
        peach: {
          DEFAULT: '#ffefe4',
          light: '#fff9f5',
        },
        body: '#6b6b84',
        dark: '#000000',
        muted: '#9e9eb0',
        border: '#e8e8ed',
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'sans-serif'],
        bubblegum: ['var(--font-bubblegum)', 'cursive'],
      },
      borderRadius: {
        pill: '50px',
        card: '22px',
        thumb: '8px',
      },
      boxShadow: {
        header: '0 4px 20px rgba(0, 0, 0, 0.08)',
        card: '0 10px 30px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 18px 40px rgba(0, 0, 0, 0.12)',
        primary: '0 6px 18px rgba(237, 20, 91, 0.35)',
      },
      keyframes: {
        floatBobSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        floatBobReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' },
        },
      },
      animation: {
        'float-slow': 'floatBobSlow 4.5s ease-in-out infinite',
        'float-reverse': 'floatBobReverse 5.2s ease-in-out infinite 0.5s',
      },
    },
  },
  plugins: [],
};

export default config;
