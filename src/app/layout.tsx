import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emoji Kitchen",
  description: "Generated emoji kitchen",
  icons: "favicon.svg",
  manifest: "manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="/service-worker-register.js" defer />
        <script
          async
          src="https://analytics.eu.umami.is/script.js"
          data-website-id="f47e1fa6-e5a8-46de-91fe-4b69c144f3dd"
          async
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
