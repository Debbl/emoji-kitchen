import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emoji Kitchen",
  description: "Generated emoji kitchen",
  icons: "favicon.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
