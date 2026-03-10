import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

// Primary display font: Cormorant Garamond
// High-contrast calligraphic strokes — the typographic signature of prestige law
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Body font: Lora
// Warm, bookish, authoritative serif — reads like a legal brief, not a startup pitch
const lora = Lora({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Clare Facio | Firma de Abogados en Costa Rica",
  description:
    "Expertos en derecho corporativo, migratorio e inmobiliario en Costa Rica para inversores y empresas internacionales.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body
        className={`${cormorantGaramond.variable} ${lora.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
