import { defineConfig } from '@lingui/cli'
import { linguiConfig } from './src/i18n/config'

export default defineConfig({
  sourceLocale: linguiConfig.sourceLocale,
  locales: [...linguiConfig.locales],
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
})
