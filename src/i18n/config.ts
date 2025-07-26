export const linguiConfig = {
  sourceLocale: 'en',
  locales: ['en', 'zh'],
} as const

export type SupportedLocale = (typeof linguiConfig.locales)[number]
export type SupportedLocales = SupportedLocale[]
