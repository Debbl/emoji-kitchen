import { setupI18n } from '@lingui/core'
import { linguiConfig } from './config'
import { loadCatalog } from './load'
import type { I18n } from '@lingui/core'
import type { SupportedLocale } from './config'

export const { locales, sourceLocale } = linguiConfig

type AllI18nInstances = { [K in SupportedLocale]: I18n }

export async function getAllI18nInstances(): Promise<AllI18nInstances> {
  const catalogs = await Promise.all(locales.map(loadCatalog))

  return locales.reduce((acc, locale) => {
    const allMessages = catalogs.reduce((acc, oneCatalog) => {
      return { ...acc, ...oneCatalog }
    }, {})

    const messages = allMessages[locale] ?? {}
    const i18n = setupI18n({
      locale,
      messages: { [locale]: messages },
    })

    return { ...acc, [locale]: i18n }
  }, {} as AllI18nInstances)
}

export async function getI18nInstance(locale?: SupportedLocale): Promise<I18n> {
  const allI18nInstances = await getAllI18nInstances()

  const realLocale = (locale ?? sourceLocale) as SupportedLocale

  if (!allI18nInstances[realLocale]) {
    console.warn(`No i18n instance found for locale "${realLocale}"`)
  }
  return allI18nInstances[realLocale]!
}

export async function generateMetadataWithI18n(
  params: Promise<{ locale: SupportedLocale }>,
) {
  const { locale } = await params

  const i18n = await getI18nInstance(locale)

  return i18n
}
