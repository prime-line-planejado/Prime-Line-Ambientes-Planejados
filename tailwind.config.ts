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
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:    ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Montserrat', 'system-ui', 'sans-serif'],
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
          800: '#2e2318',
          900: '#1a1510',
          950: '#0d0a07',
        },
        gold: {
          300: '#d4bc5a',
          400: '#c4a83a',
          500: '#b09030',
          600: '#8c7220',
          700: '#6a5010',
        },
      },
      letterSpacing: {
        caps:     '0.15em',
        widest2:  '0.2em',
        widest3:  '0.3em',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Montserrat, system-ui, sans-serif',
            fontWeight: '300',
            color: '#4e3f30',
            'h1, h2, h3, h4': {
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: '600',
              color: '#1a1510',
            },
            a: { color: '#a8905a' },
            strong: { fontWeight: '500', color: '#1a1510' },
            blockquote: {
              borderLeftColor: '#c4a96e',
              fontStyle: 'italic',
              color: '#63503b',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
