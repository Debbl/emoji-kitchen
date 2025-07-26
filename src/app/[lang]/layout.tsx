import { setI18n } from '@lingui/react/server'
import { Provider } from 'jotai'
import { getWebsite } from '~/app/constants'
import { getI18nInstance } from '~/i18n'
import { linguiConfig } from '~/i18n/config'
import { LinguiClientProvider } from '~/providers/lingui-client-provider'
import type { SupportedLocale, SupportedLocales } from '~/i18n/config'

export function generateStaticParams() {
  return linguiConfig.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }>
}) {
  const { lang } = await params

  const webSize = getWebsite(lang)

  return {
    title: webSize.title,
    description: webSize.description,
    keywords: webSize.keywords.join(', '),
    metadataBase: new URL(webSize.domain),
    authors: webSize.authors,
    creator: webSize.creator,
    publisher: webSize.publisher,
    category: webSize.category,
    appleWebApp: {
      title: webSize.title,
      capable: true,
      statusBarStyle: 'default',
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
      url: webSize.domain,
      title: webSize.title,
      description: webSize.description,
      siteName: 'Emoji Kitchen',
      type: 'website',
      emails: [webSize.email],
      images: [
        {
          alt: webSize.title,
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          type: 'image/png',
        },
      ],
    },
    alternates: {
      canonical: webSize.domain,
      languages: {
        en: '/',
        zh: '/zh',
      },
    },
    other: {
      'application-name': 'Emoji Kitchen',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Emoji Kitchen',
      'msapplication-TileColor': '#ffffff',
      'theme-color': '#ffffff',
    },
  }
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

  const webSize = getWebsite(lang)

  return (
    <html lang={lang}>
      <head>
        <script
          defer
          src='https://umami.aiwan.run/script.js'
          data-website-id='6dcb438b-a65e-40e5-a34e-b067baef2730'
        />
        <script
          type='application/ld+json'
          // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSize.structuredData),
          }}
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
