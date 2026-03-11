import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  FileText,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Werkwijze | Smart-fiber – Zo werken wij",
  description:
    "Ontdek hoe Smart-fiber u helpt aan het beste KPN-abonnement. Van eerste contact tot activatie — wij regelen alles.",
};

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Eerste contact",
    description:
      "U belt ons of vraagt een terugbelverzoek aan. Een van onze KPN-specialisten neemt contact met u op voor een vrijblijvend kennismakingsgesprek.",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Persoonlijk adviesgesprek",
    description:
      "Wij luisteren naar uw wensen, thuissituatie en budget. Op basis hiervan adviseren wij u over de meest passende KPN-producten en eventuele exclusieve partneraanbiedingen.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Aanbod op maat",
    description:
      "U ontvangt een duidelijk en transparant overzicht van de mogelijkheden, inclusief prijzen en voorwaarden. Geen verborgen kosten.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Aanvraag & activatie",
    description:
      "Akkoord? Dan regelen wij de aanvraag volledig voor u. Wij coördineren de installatie en houden u op de hoogte van het proces.",
  },
  {
    step: "05",
    icon: Zap,
    title: "Aansluiting & nazorg",
    description:
      "Na activatie staan wij nog steeds voor u klaar met vragen of aanpassingen. Uw tevredenheid staat bij ons centraal.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Transparantie",
    description:
      "Wij zijn altijd duidelijk over prijzen, voorwaarden en ons advies. Geen verborgen kosten of onverwachte clausules.",
  },
  {
    icon: HeartHandshake,
    title: "Persoonlijke aanpak",
    description:
      "Iedereen heeft andere behoeften. Wij nemen de tijd om uw situatie te begrijpen en adviseren op maat.",
  },
  {
    icon: Clock,
    title: "Efficiëntie",
    description:
      "Wij respecteren uw tijd. Van eerste contact tot activatie regelen wij alles snel en soepel.",
  },
  {
    icon: CheckCircle,
    title: "AVG-compliant",
    description:
      "Uw persoonsgegevens zijn bij ons veilig. Wij werken volledig conform de Algemene Verordening Gegevensbescherming.",
  },
];

export default function WerkwijzePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge-green mb-4">
              <CheckCircle size={13} />
              Onze werkwijze
            </span>
            <h1 className="section-title mb-4">
              Zo helpen wij u aan het beste KPN-abonnement
            </h1>
            <p className="text-gray-500 text-lg">
              Van het eerste gesprek tot de activatie — wij begeleiden u stap voor
              stap. Persoonlijk, transparant en volledig ontzorgd.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-white text-lg"
                    style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}
                  >
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 mt-2" style={{ background: "#E5E7EB" }} />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon size={18} style={{ color: "#F59E0B" }} />
                    <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Onze waarden</h2>
            <p className="section-subtitle mx-auto text-center">
              Wij hanteren strenge normen voor transparantie, privacy en klanttevredenheid.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#FFFBEB" }}
                >
                  <v.icon size={22} style={{ color: "#F59E0B" }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telemarketing compliance info */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 border"
            style={{ background: "#F0FFF4", borderColor: "#BBF7D0" }}
          >
            <div className="flex items-start gap-4">
              <Shield size={24} style={{ color: "#F59E0B" }} className="flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Verantwoorde telemarketing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Smart-fiber werkt volledig conform de geldende telemarketingwetgeving
                  en de Algemene Verordening Gegevensbescherming (AVG). Wij bellen
                  uitsluitend personen die hiervoor expliciet toestemming hebben gegeven
                  of waarmee wij een bestaande relatie hebben.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Wilt u niet meer door ons worden gebeld? U kunt zich eenvoudig
                  afmelden via onze{" "}
                  <Link href="/afmelden" style={{ color: "#F59E0B" }} className="font-medium underline">
                    afmeldpagina
                  </Link>
                  . Uw telefoonnummer wordt dan direct op onze interne blokkadelijst
                  geplaatst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 green-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Klaar voor het eerste gesprek?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Geheel vrijblijvend en zonder verplichtingen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0886607775" className="btn-primary bg-white text-green-700 hover:bg-green-50 border-0">
              <Phone size={16} />
              088 660 7775
            </a>
            <Link href="/contact" className="btn-outline-white">
              Terugbelverzoek aanvragen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
