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
        <script src='/service-worker-register.js' defer />
        <script
          async
          src='https://umami.aiwan.run/script.js'
          data-website-id='7f572014-052a-4ce8-96cf-ed4d7d51b8ec'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
