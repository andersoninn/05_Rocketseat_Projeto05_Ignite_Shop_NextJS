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

          'gray900(background)': '#121214',
          'gray800(elements)': '#202024',
          'gray700(icon)' : '#8D8D99',
          'gray300(text)': '#C4C4CC',
          'gray100(title)': '#E1E1E6',

          'green500(principal)': '#00875F',
          'green300(light)': '#00B37E'
        },

      }
    },
  },
  plugins: [],
}
export default config
