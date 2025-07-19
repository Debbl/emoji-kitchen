import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emoji Kitchen',
  description: 'Generated emoji kitchen',
  icons: 'favicon.svg',
  manifest: 'manifest.json',
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
      <body>{children}</body>
    </html>
  )
}
