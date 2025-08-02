import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#172a88', // ボイテキ！ブルー
        'primary-light': '#4a5bb8',
        'primary-dark': '#0f1a5a',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
