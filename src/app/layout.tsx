import { Provider } from 'jotai'
import { WEBSITE } from './constants'
import './globals.css'
import type { Metadata } from 'next'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <script
          defer
          src='https://umami.aiwan.run/script.js'
          data-website-id='6dcb438b-a65e-40e5-a34e-b067baef2730'
        />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
