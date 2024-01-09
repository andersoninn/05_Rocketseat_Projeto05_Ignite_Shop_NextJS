import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        brand: {
          'white': '#FFF',

          'gray900': '#121214',
          'gray800': '#202024',
          'gray300': '#C4C4CC',
          'gray100': '#E1E1E6',

          'green500': '#00875F',
          'green300': '#00B37E'
        },

      }
    },
  },
  plugins: [],
}
export default config
