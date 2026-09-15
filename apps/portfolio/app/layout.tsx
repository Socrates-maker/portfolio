import type { Metadata } from "next";
import { Zilla_Slab, Public_Sans, Courier_Prime } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { InkFilters } from "@/components/ink-filters";

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} data-theme="light" suppressHydrationWarning>
      <body
        className={`${zillaSlab.variable} ${publicSans.variable} ${courierPrime.variable} paper-grid bg-bg text-fg font-sans text-base leading-[1.55] antialiased [text-rendering:optimizeLegibility] transition-colors duration-[350ms]`}
      >
        <InkFilters />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
