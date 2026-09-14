import type { Metadata } from "next";
import { Zilla_Slab, Public_Sans, Courier_Prime } from "next/font/google";
import "./globals.css";
import React from "react";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/components/lang-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { InkFilters } from "@/components/ink-filters";
import { Lang } from "@/lib/portfolio-data";

const LANG_COOKIE = "portfolio.lang";

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

export const metadata: Metadata = {
  title: "Socrates Ekpaliguidime — Software developer",
  description:
    "Portfolio of Socrates Ekpaliguidime — full-stack software developer based in Cotonou, Benin.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get(LANG_COOKIE)?.value;
  const initialLang: Lang = cookieLang === "fr" ? "fr" : "en";

  return (
    <html lang={initialLang} data-theme="light" suppressHydrationWarning>
      <body
        className={`${zillaSlab.variable} ${publicSans.variable} ${courierPrime.variable} paper-grid bg-bg text-fg font-sans text-base leading-[1.55] antialiased [text-rendering:optimizeLegibility] transition-colors duration-[350ms]`}
      >
        <InkFilters />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LangProvider initialLang={initialLang}>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
