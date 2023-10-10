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
          data-website-id="670087e2-7d89-4e60-8769-3847c2003037"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
