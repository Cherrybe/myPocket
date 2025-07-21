import plugin from 'tailwindcss/plugin.js'
import { generateTailwindConfigTheme } from './src/config'
import { resolve } from 'path'

const theme = generateTailwindConfigTheme()
const config = {
  // content: [
  //   './src/**/*.{js,ts,jsx,tsx}', 
  //   './src/**/*.stories.{js,ts,jsx,tsx}'
  // ],
  content: [
    resolve(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
    resolve(__dirname, 'src/**/*.stories.{js,ts,jsx,tsx}'),
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  mode: 'jit',
  theme,
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
    })
  ]
}

export default config
