import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Microlink Solutions | Websites, Shopify, Apps & Integrations",
  description:
    "Australian digital partner for tradie websites, Shopify stores, WordPress, NetSuite integrations and products like FuelGO. Clear packages from $699.",
  metadataBase: new URL("https://www.microlinksolutions.com.au"),
  openGraph: {
    title: "Microlink Solutions",
    description:
      "Websites, Shopify, integrations and digital products for Australian businesses.",
    url: "https://www.microlinksolutions.com.au",
    siteName: "Microlink Solutions",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/brand/microlink-logo.png",
        width: 1024,
        height: 1024,
        alt: "Microlink Solutions logo",
      },
    ],
  },
  icons: {
    icon: "/brand/microlink-logo.png",
    apple: "/brand/microlink-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
