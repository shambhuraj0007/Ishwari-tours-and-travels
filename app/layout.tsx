import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ishwari Tours & Travels | Ishwari Engineering & Roadlines - Car Rentals & Cabs",
  description:
    "A Unit of Ishwari Engineering & Roadlines. Rent self-drive cars (8hr, 12hr, 24hr) and chauffeur-driven cabs across Maharashtra and India. Swift Dzire, Ertiga, Thar 4x4, Innova Crysta, Fortuner & Tempo Traveller.",
  keywords: [
    "Ishwari Tours & Travels",
    "Ishwari Engineering & Roadlines",
    "Ishwari Engineering and Roadlines",
    "Car on rent Pune",
    "Self drive car rental Pune PCMC",
    "Cab booking PCMC",
    "Pune to Mumbai airport cab",
    "Outstation cab rental",
    "Innova Crysta on rent",
    "Swift Dzire rental",
    "Tempo traveller on rent Pune",
    "Shirdi cab booking"
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Ishwari Tours & Travels | Ishwari Engineering & Roadlines",
    description: "Reliable car rentals and outstation cab services backed by Ishwari Engineering & Roadlines. Self-drive and chauffeur-driven fleet.",
    url: "https://ishwaritours.com",
    siteName: "Ishwari Tours & Travels - Ishwari Engineering & Roadlines",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#faf8f5] text-slate-900 selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
