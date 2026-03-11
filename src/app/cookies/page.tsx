import type { Metadata } from "next";
import { Cookie } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookieverklaring | Smart-fiber",
  description: "Cookieverklaring van Smart-fiber – hoe wij cookies gebruiken.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="py-16 light-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-green mb-4">
            <Cookie size={13} />
            Cookies
          </span>
          <h1 className="section-title mb-2">Cookieverklaring</h1>
          <p className="text-gray-400 text-sm">Versie 1.0 | Bijgewerkt: januari 2025</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u
            onze website bezoekt. Ze helpen ons de website goed te laten functioneren en uw
            bezoek te verbeteren.
          </p>

          <h2>Welke cookies gebruiken wij?</h2>

          <h3>Noodzakelijke cookies</h3>
          <p>
            Deze cookies zijn essentieel voor de werking van de website. Zonder deze cookies
            kan de website niet correct functioneren. U kunt deze cookies niet weigeren.
          </p>
          <ul>
            <li><strong>cookie-consent:</strong> Slaat op of u uw cookievoorkeur heeft ingesteld (1 jaar)</li>
          </ul>

          <h3>Analytische cookies</h3>
          <p>
            Met uw toestemming plaatsen wij analytische cookies om te begrijpen hoe bezoekers
            onze website gebruiken. Deze informatie helpt ons de website te verbeteren.
          </p>
          <ul>
            <li>Websitestatistieken (geanonimiseerd, met IP-anonimisering)</li>
          </ul>

          <h3>Functionele cookies</h3>
          <p>
            Functionele cookies zorgen voor een betere gebruikservaring door uw voorkeuren te
            onthouden.
          </p>

          <h2>Toestemming en beheer</h2>
          <p>
            Bij uw eerste bezoek aan onze website vragen wij uw toestemming voor het plaatsen
            van niet-noodzakelijke cookies. U kunt uw toestemming te allen tijde intrekken door:
          </p>
          <ul>
            <li>Uw browserinstellingen aan te passen</li>
            <li>Contact op te nemen via info@smart-fiber.nl</li>
          </ul>

          <h2>Cookies van derden</h2>
          <p>
            Wij maken geen gebruik van cookies van sociale media platforms. Indien wij in de
            toekomst gebruik maken van cookies van derden, wordt dit in deze verklaring
            opgenomen.
          </p>

          <h2>Meer informatie</h2>
          <p>
            Voor meer informatie over cookies kunt u de website van de Autoriteit
            Persoonsgegevens raadplegen. Voor vragen kunt u contact opnemen via{" "}
            <a href="mailto:info@smart-fiber.nl">info@smart-fiber.nl</a>.
          </p>
        </div>
      </section>
    </>
  );
}
