// @ts-check
import { defineConfig } from '@debbl/eslint-config'

export default defineConfig({
  ignores: {
    files: ['src/constants.ts'],
  },
  typescript: true,
  react: {
    next: true,
    compiler: true,
  },
  tailwindcss: 'prettier',
})
