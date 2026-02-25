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
  },
  twitter: {
    card: "summary_large_image",
    title: "Semi Care – Professionelle Häusliche Pflege",
    description:
      "Einfühlsame und professionelle häusliche Pflegedienste einschließlich Peritonealdialyse, Grundpflege, Behandlungspflege, Hauswirtschaftliche Versorgung und Verhinderungspflege.",
  },
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
      lang="de"
      className={`${openSans.variable} ${dmSerifDisplay.variable}`}
    >
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
