import type { Metadata } from "next";
import { Open_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import React from "react";
import Chyron from "@/components/layout/Chyron";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppContextProvider } from "@/store/context";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.semi-care.de"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Semi Care – Professionelle Häusliche Pflege",
    template: "%s | Semi Care",
  },
  description:
    "Semi Care bietet professionelle häusliche Pflegedienste einschließlich Peritonealdialyse (CAPD), Grundpflege, Behandlungspflege, Hauswirtschaftliche Versorgung und Verhinderungspflege. Einfühlsame Unterstützung direkt bei Ihnen zu Hause.",
  keywords: [
    "Häusliche Pflege",
    "Pflegedienst",
    "Peritonealdialyse",
    "CAPD",
    "Grundpflege",
    "Behandlungspflege",
    "Hauswirtschaftliche Versorgung",
    "Verhinderungspflege",
    "Altenpflege",
    "Ambulante Pflege",
    "Deutschland",
  ],
  authors: [{ name: "Semi Care" }],
  creator: "Semi Care",
  publisher: "Semi Care",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Semi Care",
    title: "Semi Care – Professionelle Häusliche Pflege",
    description:
      "Einfühlsame und professionelle häusliche Pflegedienste einschließlich Peritonealdialyse, Grundpflege, Behandlungspflege, Hauswirtschaftliche Versorgung und Verhinderungspflege.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Semi Care – Professionelle Häusliche Pflege",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semi Care – Professionelle Häusliche Pflege",
    description:
      "Einfühlsame und professionelle häusliche Pflegedienste einschließlich Peritonealdialyse, Grundpflege, Behandlungspflege, Hauswirtschaftliche Versorgung und Verhinderungspflege.",
    images: ["/images/og-image.png"],
  },
};

// JSON-LD Structured Data for LocalBusiness / MedicalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "Semi Care",
  description:
    "Professionelle häusliche Pflegedienste einschließlich Peritonealdialyse (CAPD), Grundpflege, Behandlungspflege, Hauswirtschaftliche Versorgung und Verhinderungspflege.",
  url: "https://www.semi-care.de",
  logo: "https://www.semi-care.de/images/logo.png",
  image: "https://www.semi-care.de/images/og-image.png",
  telephone: "+49 89 5207821",
  email: "info@semi-care.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jolly Straße 5",
    addressLocality: "München",
    postalCode: "81545",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.0868817",
    longitude: "11.5612962",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      // TODO: review and translate to german if needed
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  serviceType: [
    "Häusliche Pflege",
    "Peritonealdialyse (CAPD)",
    "Grundpflege",
    "Behandlungspflege",
    "Hauswirtschaftliche Versorgung",
    "Verhinderungspflege",
  ],
  medicalSpecialty: "Häusliche Krankenpflege",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // todo: remove "suppressHydrationWarning" when the hydration issue is resolved. This is a temporary workaround to prevent hydration mismatch warnings in development mode.

    <html
      suppressHydrationWarning
      lang="de-DE"
      className={`${openSans.variable} ${dmSerifDisplay.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* todo: remove "cz-shortcut-listen="false"" when the hydration issue is resolved. This is a temporary workaround to prevent hydration mismatch warnings in development mode.*/}

      <body className={`antialiased`} cz-shortcut-listen="false">
        <AppContextProvider>
          <div>
            <Chyron />
            <Header />
          </div>
          <main className={""}>{children}</main>
        </AppContextProvider>
        <Footer />
      </body>
    </html>
  );
}
