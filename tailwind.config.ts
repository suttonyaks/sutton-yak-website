import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yak-green': '#1a4a1a',
        'yak-green-dark': '#0d2e0d',
        'yak-green-light': '#2d6e2d',
        'yak-cream': '#f5f0e8',
        'yak-tan': '#c8a96e',
        'yak-brown': '#8b5e3c',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
