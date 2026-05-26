import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)',    'system-ui', 'sans-serif'],
        serif:   ['var(--font-display)', 'Georgia', 'serif'],
        sans:    ['var(--font-body)',    'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#faf8f5',
          100: '#f0ece4',
          200: '#ddd6c8',
          300: '#c4b89e',
          400: '#a89470',
          500: '#8c7355',
          600: '#7a6047',
          700: '#63503b',
          800: '#4e3f30',
          900: '#3a2f24',
          950: '#1e1711',
        },
        gold: {
          light: '#c4a96e',
          main:  '#a8905a',
          dark:  '#8c7355',
        },
      },
      letterSpacing: {
        caps:    '0.15em',
        widest2: '0.2em',
        widest3: '0.3em',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            color: '#4e3f30',
            'h1,h2,h3,h4': {
              fontFamily: 'var(--font-display), Georgia, serif',
              color: '#3a2f24',
            },
            a:          { color: '#8c7355' },
            strong:     { color: '#3a2f24' },
            blockquote: { borderLeftColor: '#a8905a', color: '#7a6047' },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
