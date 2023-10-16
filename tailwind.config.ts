import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hcGreen: {
          base: '#419b07',
          dark: '#0b5900',
          light: '#ecf5e6',
          dark2: '#0d1f01',
          dark3: '#060f01',
        },
        hcOrange: {
          base: '#ca7558 ',
        },
        hcGrey: {
          dark: '#333333',
          base: '#222222',
          light: '#f5f5f5f5',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [],
};
export default config;
