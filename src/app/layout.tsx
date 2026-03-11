import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Smart-fiber – Officiële KPN Partner | Internet, TV & Mobiel",
  description:
    "Smart-fiber is officiële KPN-partner. Wij adviseren u persoonlijk over KPN internet, TV, mobiel en beveiliging. Meer dan 335.000 tevreden klanten. Vraag vrijblijvend advies aan.",
  keywords:
    "KPN partner, KPN internet, KPN TV, KPN mobiel, glasvezel, 5G, Smart-fiber",
  openGraph: {
    title: "Smart-fiber – Officiële KPN Partner",
    description:
      "Persoonlijk KPN-advies van een officiële partner. Toegang tot exclusieve partneraanbiedingen.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Smart-fiber",
              description:
                "Officiële KPN-partner gespecialiseerd in internet, TV, mobiel en beveiliging.",
              telephone: "088 660 7775",
              email: "info@smart-fiber.nl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Touwslager 5",
                postalCode: "3861SP",
                addressLocality: "Nijkerk",
                addressCountry: "NL",
              },
              url: "https://www.smart-fiber.nl",
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
