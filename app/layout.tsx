import type { Metadata } from "next";
import { Open_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import React from "react";
import Chyron from "@/components/header/Chyron";
import Header from "@/components/Header";

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
  title: "Semi Care",
  description: "Home page of Semi Care",
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
        <div>
          <Chyron />
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
