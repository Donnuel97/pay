import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'payclick-blue': '#0066FF',
        'payclick-green': '#00C48C',
        'payclick-dark': '#0F172A',
        'payclick-gray': '#64748B',
      },
    },
  },
  plugins: [],
}
export default config