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
          DEFAULT: '#0A5C36', // Dark Islamic Green
          hover: '#064e3b',   // Deep Forest Green
          light: '#ecfdf5',   // Clean Mint Green
        },
        secondary: {
          DEFAULT: '#10B981', // Vibrant Light Emerald Green
          hover: '#059669',
          light: '#f0fdf4',   // Soft White-Mint
        },
        tertiary: {
          DEFAULT: '#F5A623', // Gold Accent from School Crest
          hover: '#d97706',
          light: '#fef3c7',
        },
        turquoise: {
          DEFAULT: '#059669',
          hover: '#047857',
          light: '#e6f7f0',
        },
        peach: {
          DEFAULT: '#f0fdf4', // Soft White-Green tint
          light: '#fcfdfd',   // Crisp White
        },
        islamic: {
          dark: '#0A5C36',
          light: '#10B981',
          mint: '#86EFAC',
          soft: '#E8F5E9',
          tint: '#F0FDF4',
          gold: '#F5A623',
        },
        body: '#4a5568',
        dark: '#0f172a',
        muted: '#64748b',
        border: '#e2e8f0',
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
        header: '0 4px 20px rgba(10, 92, 54, 0.08)',
        card: '0 10px 30px rgba(10, 92, 54, 0.05)',
        'card-hover': '0 18px 40px rgba(10, 92, 54, 0.12)',
        primary: '0 6px 18px rgba(10, 92, 54, 0.3)',
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
        customRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'float-slow': 'floatBobSlow 4.5s ease-in-out infinite',
        'float-reverse': 'floatBobReverse 5.2s ease-in-out infinite 0.5s',
        'rotate-circle': 'customRotate 14s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
