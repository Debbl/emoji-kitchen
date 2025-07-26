import { linguiConfig } from '~/i18n/config'
import { getWebsite } from './constants'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const webSize = getWebsite()

  const baseUrl = webSize.domain
  const currentDate = new Date()

  // 为每个语言创建sitemap条目
  const sitemapEntries = linguiConfig.locales.map((locale) => ({
    url: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 1,
  }))

  return sitemapEntries
}
