import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacyverklaring | Smart-fiber",
  description: "Lees hoe Smart-fiber omgaat met uw persoonsgegevens conform de AVG.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16 light-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-green mb-4">
            <Shield size={13} />
            Privacyverklaring
          </span>
          <h1 className="section-title mb-2">Privacyverklaring</h1>
          <p className="text-gray-400 text-sm">Versie 1.2 | Bijgewerkt: januari 2025</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>1. Wie zijn wij?</h2>
          <p>
            Smart-fiber (KvK: 72251964), gevestigd aan Touwslager 5, 3861SP Nijkerk, is
            verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze
            privacyverklaring. Smart-fiber is een onafhankelijke partner van KPN en geen
            onderdeel van KPN.
          </p>

          <h2>2. Welke persoonsgegevens verwerken wij?</h2>
          <p>Wij verwerken de volgende persoonsgegevens:</p>
          <ul>
            <li>Voor- en achternaam</li>
            <li>Telefoonnummer</li>
            <li>E-mailadres</li>
            <li>IP-adres (bij online formulieren)</li>
            <li>Datum en tijd van toestemming</li>
            <li>Versie van de privacyverklaring waarop toestemming is gegeven</li>
          </ul>

          <h2>3. Waarom verwerken wij uw gegevens?</h2>
          <p>Smart-fiber verwerkt uw persoonsgegevens voor de volgende doeleinden:</p>
          <ul>
            <li>Het afhandelen van uw adviesaanvraag of terugbelverzoek</li>
            <li>Het telefonisch benaderen voor advies over KPN-producten (na expliciete toestemming)</li>
            <li>Het behandelen van klachten</li>
            <li>Het bijhouden van onze blokkadelijst (niet meer gebeld worden)</li>
            <li>Het voldoen aan wettelijke verplichtingen</li>
          </ul>

          <h2>4. Grondslag voor verwerking</h2>
          <p>
            Wij verwerken uw gegevens op basis van uw <strong>expliciete toestemming</strong> (art. 6
            lid 1 sub a AVG). U kunt uw toestemming te allen tijde intrekken door contact met ons op te
            nemen via <a href="mailto:info@smart-fiber.nl">info@smart-fiber.nl</a>.
          </p>

          <h2>5. Bewaartermijnen</h2>
          <p>
            Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor zij
            zijn verzameld:
          </p>
          <ul>
            <li>Contactgegevens voor adviesaanvragen: maximaal 2 jaar na laatste contact</li>
            <li>Blokkadelijst telefoonnummers: onbeperkt (om herhaling te voorkomen)</li>
            <li>Klachtdossiers: 5 jaar</li>
          </ul>

          <h2>6. Delen met derden</h2>
          <p>
            Wij delen uw persoonsgegevens uitsluitend met KPN voor zover noodzakelijk voor de
            uitvoering van uw aanvraag, en alleen met uw toestemming. Wij verkopen uw gegevens
            nooit aan derden.
          </p>

          <h2>7. Beveiliging</h2>
          <p>
            Smart-fiber neemt passende technische en organisatorische maatregelen om uw
            persoonsgegevens te beschermen tegen verlies, misbruik en onbevoegde toegang. Onze
            website maakt gebruik van SSL-encryptie (HTTPS).
          </p>

          <h2>8. Uw rechten</h2>
          <p>U heeft de volgende rechten met betrekking tot uw persoonsgegevens:</p>
          <ul>
            <li>Recht op inzage in uw gegevens</li>
            <li>Recht op rectificatie van onjuiste gegevens</li>
            <li>Recht op verwijdering van uw gegevens</li>
            <li>Recht op beperking van de verwerking</li>
            <li>Recht op dataportabiliteit</li>
            <li>Recht om bezwaar te maken tegen de verwerking</li>
            <li>Recht om uw toestemming in te trekken</li>
          </ul>
          <p>
            Om gebruik te maken van uw rechten kunt u contact opnemen via{" "}
            <a href="mailto:info@smart-fiber.nl">info@smart-fiber.nl</a>.
          </p>

          <h2>9. Klachten</h2>
          <p>
            Als u van mening bent dat wij uw persoonsgegevens niet correct verwerken, heeft u het
            recht een klacht in te dienen bij de Autoriteit Persoonsgegevens via{" "}
            <a
              href="https://www.autoriteitpersoonsgegevens.nl"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.autoriteitpersoonsgegevens.nl
            </a>
            .
          </p>

          <h2>10. Contact</h2>
          <p>
            Voor vragen over deze privacyverklaring kunt u contact opnemen met:<br />
            <strong>Smart-fiber</strong><br />
            Touwslager 5, 3861SP Nijkerk<br />
            E-mail: <a href="mailto:info@smart-fiber.nl">info@smart-fiber.nl</a><br />
            Telefoon: 088 660 7775
          </p>
        </div>
      </section>
    </>
  );
}
