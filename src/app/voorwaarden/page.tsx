import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Smart-fiber",
  description: "De algemene voorwaarden van Smart-fiber.",
};

export default function VoorwaardenPage() {
  return (
    <>
      <section className="py-16 light-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-green mb-4">
            <FileText size={13} />
            Voorwaarden
          </span>
          <h1 className="section-title mb-2">Algemene Voorwaarden</h1>
          <p className="text-gray-400 text-sm">Versie 1.1 | Bijgewerkt: januari 2025</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>Artikel 1 – Definities</h2>
          <p>
            In deze algemene voorwaarden wordt verstaan onder:
          </p>
          <ul>
            <li><strong>Smart-fiber:</strong> de onderneming gevestigd aan Touwslager 5, 3861SP Nijkerk, KvK 72251964</li>
            <li><strong>Klant:</strong> de natuurlijke persoon of rechtspersoon die gebruikmaakt van de adviesdiensten van Smart-fiber</li>
            <li><strong>KPN:</strong> Koninklijke KPN N.V., de telecomprovider wiens producten Smart-fiber adviseert</li>
          </ul>

          <h2>Artikel 2 – Toepasselijkheid</h2>
          <p>
            Deze voorwaarden zijn van toepassing op alle aanbiedingen, adviesgesprekken en
            overeenkomsten waarbij Smart-fiber als adviseur optreedt. Smart-fiber is een
            onafhankelijke partner van KPN en geen onderdeel van KPN.
          </p>

          <h2>Artikel 3 – Dienstverlening</h2>
          <p>
            Smart-fiber verleent advies over KPN-producten en -diensten. Smart-fiber bemiddelt
            bij de totstandkoming van een overeenkomst tussen de klant en KPN. Smart-fiber is
            zelf geen partij bij de overeenkomst tussen klant en KPN.
          </p>

          <h2>Artikel 4 – Advies</h2>
          <p>
            Het advies van Smart-fiber is gebaseerd op de door de klant verstrekte informatie.
            De klant is verantwoordelijk voor de juistheid en volledigheid van de verstrekte
            informatie. Smart-fiber streeft naar objectief en eerlijk advies in het belang van
            de klant.
          </p>

          <h2>Artikel 5 – Telemarketing en toestemming</h2>
          <p>
            Smart-fiber benadert klanten uitsluitend telefonisch na expliciete en aantoonbare
            toestemming van de klant, conform de Telecommunicatiewet en de AVG. Klanten kunnen
            zich te allen tijde afmelden voor telefonische benadering via de afmeldpagina op
            onze website.
          </p>

          <h2>Artikel 6 – Aansprakelijkheid</h2>
          <p>
            Smart-fiber is niet aansprakelijk voor schade die voortvloeit uit onjuiste of
            onvolledige informatie verstrekt door de klant, noch voor handelingen of nalatigheden
            van KPN als dienstverlener.
          </p>

          <h2>Artikel 7 – Klachten</h2>
          <p>
            Klachten over de dienstverlening van Smart-fiber kunnen worden ingediend via het
            klachtenformulier op onze website of via info@smart-fiber.nl. Wij streven naar
            behandeling binnen 5 werkdagen.
          </p>

          <h2>Artikel 8 – Toepasselijk recht</h2>
          <p>
            Op alle overeenkomsten en geschillen is Nederlands recht van toepassing. Geschillen
            worden bij voorkeur in onderling overleg opgelost.
          </p>

          <h2>Artikel 9 – Contactgegevens</h2>
          <p>
            Smart-fiber<br />
            Touwslager 5, 3861SP Nijkerk<br />
            KvK: 72251964<br />
            E-mail: <a href="mailto:info@smart-fiber.nl">info@smart-fiber.nl</a><br />
            Telefoon: 088 660 7775
          </p>
        </div>
      </section>
    </>
  );
}
