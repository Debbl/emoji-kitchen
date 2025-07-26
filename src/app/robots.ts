import { getWebsite } from './constants'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const webSize = getWebsite()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next'],
      },
    ],
    sitemap: `${webSize.domain}/sitemap.xml`,
  }
}
