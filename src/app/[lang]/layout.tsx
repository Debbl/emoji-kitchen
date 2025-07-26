import { setI18n } from '@lingui/react/server'
import { Provider } from 'jotai'
import { WEBSITE } from '~/app/constants'
import { getI18nInstance } from '~/i18n'
import { linguiConfig } from '~/i18n/config'
import { LinguiClientProvider } from '~/providers/lingui-client-provider'
import type { Metadata } from 'next'
import type { SupportedLocale, SupportedLocales } from '~/i18n/config'

export function generateStaticParams() {
  return linguiConfig.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: WEBSITE.title,
  description: WEBSITE.description,
  metadataBase: new URL(WEBSITE.domain),
  authors: WEBSITE.authors,
  appleWebApp: {
    title: WEBSITE.title,
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/favicon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
    {
      rel: 'app-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  twitter: {
    creator: 'Debbl66',
  },
  openGraph: {
    url: WEBSITE.domain,
    title: WEBSITE.title,
    description: WEBSITE.description,
    emails: [WEBSITE.email],
    type: 'website',
    images: [
      {
        alt: 'og-image',
        url: '/opengraph-image.png',
        width: 800,
        height: 400,
      },
    ],
  },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: SupportedLocale }>
}) {
  const { lang } = await params
  const i18n = await getI18nInstance(lang)
  setI18n(i18n)

  return (
    <html lang={lang}>
      <head>
        <script
          defer
          src='https://umami.aiwan.run/script.js'
          data-website-id='6dcb438b-a65e-40e5-a34e-b067baef2730'
        />
      </head>
      <body>
        <LinguiClientProvider
          locale={lang}
          locales={i18n.locales as unknown as SupportedLocales}
          messages={i18n.messages}
        >
          <Provider>{children}</Provider>
        </LinguiClientProvider>
      </body>
    </html>
  )
}
