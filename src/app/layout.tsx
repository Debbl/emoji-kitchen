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
        <script src="/service-worker-register.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
