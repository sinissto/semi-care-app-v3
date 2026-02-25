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
    default: "Semi Care – Professional Home Care Services",
    template: "%s | Semi Care",
  },
  description:
    "Semi Care provides professional home care services including peritoneal dialysis (CAPD), basic care, treatment care, domestic help, and respite care. Compassionate support right in your own home.",
  keywords: [
    "home care",
    "nursing care",
    "peritoneal dialysis",
    "CAPD",
    "basic care",
    "treatment care",
    "domestic help",
    "respite care",
    "elderly care",
    "home health services",
    "Germany",
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
    title: "Semi Care – Professional Home Care Services",
    description:
      "Compassionate and professional home care services including peritoneal dialysis, basic care, treatment care, domestic help, and respite care.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semi Care – Professional Home Care Services",
    description:
      "Compassionate and professional home care services including peritoneal dialysis, basic care, treatment care, domestic help, and respite care.",
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
      lang="en"
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
