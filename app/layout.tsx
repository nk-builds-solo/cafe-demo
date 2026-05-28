import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const noto = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://cafe-demo-six.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "KURO COFFEE",
  authors: [{ name: "KURO COFFEE" }],
  publisher: "KURO COFFEE",
  title: {
    default: "KURO COFFEE | 神楽坂の静かな珈琲店",
    template: "%s | KURO COFFEE",
  },
  description:
    "東京・神楽坂の路地裏。日常から少し離れる、静かな一杯を。自家焙煎・サイフォン抽出。23時まで営業。KURO COFFEE（クロ コーヒー）公式サイト。",
  keywords: ["KURO COFFEE", "クロコーヒー", "神楽坂", "カフェ", "珈琲", "自家焙煎", "サイフォン"],
  openGraph: {
    title: "KURO COFFEE | 神楽坂の静かな珈琲店",
    description: "東京・神楽坂の路地裏。日常から少し離れる、静かな一杯を。",
    url: SITE_URL,
    siteName: "KURO COFFEE",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KURO COFFEE | 神楽坂の静かな珈琲店",
    description: "東京・神楽坂の路地裏。日常から少し離れる、静かな一杯を。",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "wyEdPRxnfZVIMWl1GdbRYYlkMwORmVToasrupponrBg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "KURO COFFEE",
      alternateName: ["クロ コーヒー", "KURO COFFEE 神楽坂"],
      description: "神楽坂の静かな珈琲店",
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "KURO COFFEE",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
    },
    {
      "@type": "CafeOrCoffeeShop",
      "@id": `${SITE_URL}/#cafe`,
  name: "KURO COFFEE",
  alternateName: "クロ コーヒー",
  url: SITE_URL,
  description: "神楽坂の静かな珈琲店。自家焙煎・サイフォン抽出。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "神楽坂 3-X-X",
    addressLocality: "新宿区",
    addressRegion: "東京都",
    postalCode: "162-0825",
    addressCountry: "JP",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "23:00",
    },
  ],
  priceRange: "¥¥",
  servesCuisine: "Coffee",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${noto.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
