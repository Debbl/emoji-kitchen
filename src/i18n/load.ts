import { linguiConfig } from './config'
import 'server-only'
import type { Messages } from '@lingui/core'
import type { SupportedLocale } from './config'

export const { locales, sourceLocale } = linguiConfig

export async function loadCatalog(locale: SupportedLocale): Promise<{
  [k: string]: Messages
}> {
  const { messages } = await import(`../locales/${locale}/messages.po`)
  return {
    [locale]: messages,
  }
}
