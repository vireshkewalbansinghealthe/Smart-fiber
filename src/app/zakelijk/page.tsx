import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Wifi,
  Smartphone,
  CheckCircle,
  Phone,
  Shield,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Zakelijk KPN | Smart-fiber – Telecom voor Bedrijven",
  description:
    "KPN zakelijke oplossingen voor zzp'ers en bedrijven. Vaste en mobiele abonnementen, zakelijk internet en telefonie. Vrijblijvend advies via Smart-fiber.",
};

const solutions = [
  {
    icon: Wifi,
    title: "Zakelijk Internet",
    description:
      "Snel en betrouwbaar glasvezel internet voor uw bedrijf, met zakelijke service en garanties.",
  },
  {
    icon: Smartphone,
    title: "Zakelijk Mobiel",
    description:
      "Flexibele mobiele abonnementen voor zzp&apos;ers en teams, inclusief 5G en nummerbeheer.",
  },
  {
    icon: Phone,
    title: "Vast Zakelijk Bellen",
    description:
      "Professionele telefonie met een vast zakelijk nummer en geavanceerde belfuncties.",
  },
  {
    icon: Shield,
    title: "Zakelijke Beveiliging",
    description:
      "Bescherm uw bedrijfsdata en apparaten met KPN zakelijke beveiligingsoplossingen.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Prioritaire service",
    description: "Zakelijke klanten krijgen prioritaire klantenservice en snellere storingsherstel.",
  },
  {
    icon: Users,
    title: "Schaalbaar",
    description: "Van zzp'er tot mkb — abonnementen die meegroeien met uw organisatie.",
  },
  {
    icon: CheckCircle,
    title: "SLA garanties",
    description: "Zakelijke Service Level Agreements voor gegarandeerde beschikbaarheid.",
  },
  {
    icon: ArrowRight,
    title: "Eén aanspreekpunt",
    description: "Onze zakelijke adviseurs regelen alles voor u, van aanvraag tot aansluiting.",
  },
];

export default function ZakelijkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #78350F 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <Briefcase size={14} />
              Zakelijk
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              KPN zakelijke oplossingen voor uw bedrijf
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Van zzp'er tot mkb — wij adviseren u over de meest passende en
              voordelige KPN zakelijke abonnementen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <Phone size={16} />
                Zakelijk advies aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green mb-3">
              <Briefcase size={13} />
              Zakelijke producten
            </span>
            <h2 className="section-title">Alles voor uw zakelijke communicatie</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="card">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#FFFBEB" }}
                >
                  <s.icon size={20} style={{ color: "#F59E0B" }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-green mb-4">
                <CheckCircle size={13} />
                Zakelijke voordelen
              </span>
              <h2 className="section-title mb-4">
                Waarom zakelijk via Smart-fiber?
              </h2>
              <p className="text-gray-500 mb-8">
                Als officiële KPN-partner met zakelijke expertise adviseren wij
                u over het complete zakelijke portfolio. Wij kennen de
                specifieke behoeften van ondernemers en zorgen voor een passende
                en voordelige oplossing.
              </p>
              <div className="space-y-5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#FFFBEB" }}
                    >
                      <b.icon size={17} style={{ color: "#F59E0B" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-0.5">{b.title}</p>
                      <p className="text-sm text-gray-500">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6">Zakelijk adviesgesprek aanvragen</h3>
              <ContactForm compact title="" subtitle="" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 green-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Klaar voor een zakelijke telecom-upgrade?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Bel ons direct voor zakelijk advies of vraag een terugbelverzoek aan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0886607775" className="btn-primary bg-white text-green-700 hover:bg-green-50 border-0">
              <Phone size={16} />
              088 660 7775
            </a>
            <Link href="/contact" className="btn-outline-white">
              Terugbelverzoek
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
