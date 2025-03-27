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
        primary: {
          DEFAULT: '#685a4e',
          dark: '#564939',
          light: '#8a7b6d',
        },
        secondary: '#e6ded6',
        accent: '#a1887f',
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336',
      },
      backgroundColor: {
        'primary': '#685a4e',
        'primary-dark': '#564939',
        'primary-light': '#8a7b6d',
        'secondary': '#e6ded6',
      },
      textColor: {
        'primary': '#685a4e',
        'primary-dark': '#564939',
        'primary-light': '#8a7b6d',
      },
      borderColor: {
        'primary': '#685a4e',
        'primary-dark': '#564939',
        'primary-light': '#8a7b6d',
        'secondary': '#e6ded6',
      },
      ringOpacity: {
        '50': '0.5',
      },
      ringColor: {
        'primary': '#685a4e',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

export default config 