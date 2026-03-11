import type { Metadata } from "next";
import Link from "next/link";
import {
  Wifi,
  Tv,
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Zap,
  Signal,
  MonitorPlay,
  Lock,
  Baby,
  CreditCard,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "KPN Internet & TV | Smart-fiber – Officiële KPN Partner",
  description:
    "Ontdek KPN glasvezel internet met SuperWifi en interactieve TV. Officieel KPN-advies via Smart-fiber. Vraag een vrijblijvend aanbod aan.",
};

const internetFeatures = [
  {
    icon: Zap,
    title: "Glasvezelnetwerk",
    description:
      "KPN glasvezel biedt symmetrische up- en downloadsnelheden tot meerdere Gbit/s, afhankelijk van uw locatie en gekozen abonnement.",
  },
  {
    icon: Signal,
    title: "SuperWifi",
    description:
      "Met KPN SuperWifi-punten heeft u in elke hoek van uw woning een sterke en stabiele Wifi-verbinding — geen dode hoeken meer.",
  },
  {
    icon: Wifi,
    title: "Betrouwbare verbinding",
    description:
      "Het KPN-netwerk staat bekend om zijn stabiliteit en hoge uptime, zodat u altijd verbonden bent.",
  },
  {
    icon: CheckCircle,
    title: "Eenvoudige installatie",
    description:
      "De KPN-router is plug-and-play en technisch advies is inbegrepen bij uw aansluiting.",
  },
];

const tvFeatures = [
  {
    icon: MonitorPlay,
    title: "Interactieve TV",
    description:
      "Bedien uw TV intuïtief via de KPN Box en geniet van meer dan 100 zenders in hoge kwaliteit.",
  },
  {
    icon: Tv,
    title: "Terugkijken & On Demand",
    description:
      "Gemiste programma's terugkijken tot 7 dagen terug en een uitgebreide On Demand bibliotheek.",
  },
  {
    icon: CreditCard,
    title: "Sportpakketten",
    description:
      "Voeg ESPN en andere sportkanalen toe voor complete sportbeleving thuis.",
  },
  {
    icon: CheckCircle,
    title: "Meerdere TV's",
    description:
      "Kijk op meerdere tv's tegelijk in huis of op uw tablet en smartphone via de KPN iTV app.",
  },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "KPN Veilig",
    description: "Alles-in-één bescherming voor al uw apparaten thuis.",
  },
  {
    icon: Lock,
    title: "Virusbescherming",
    description: "Realtime beveiliging tegen virussen, malware en spyware.",
  },
  {
    icon: CreditCard,
    title: "Veilig bankieren",
    description: "Extra bescherming tijdens online bankieren en winkelen.",
  },
  {
    icon: Baby,
    title: "Ouderlijk toezicht",
    description: "Bepaal zelf welke websites en apps uw kinderen mogen gebruiken.",
  },
];

const packages = [
  {
    name: "Internet Start",
    speed: "100 Mbit/s",
    features: ["Glasvezel internet", "KPN Router", "Wifi thuis"],
    highlight: false,
  },
  {
    name: "Internet M",
    speed: "200 Mbit/s",
    features: ["Glasvezel internet", "KPN Router", "Wifi thuis", "SuperWifi optie"],
    highlight: false,
  },
  {
    name: "Internet & TV",
    speed: "500 Mbit/s",
    features: [
      "Glasvezel internet",
      "SuperWifi punt",
      "Interactieve TV",
      "100+ zenders",
      "Terugkijken",
    ],
    highlight: true,
    badge: "Meest gekozen",
  },
  {
    name: "Internet & TV Plus",
    speed: "1 Gbit/s",
    features: [
      "Glasvezel internet",
      "2 SuperWifi punten",
      "Interactieve TV",
      "On Demand",
      "Sport opties",
      "KPN Veilig",
    ],
    highlight: false,
  },
  {
    name: "Internet Ultra",
    speed: "4 Gbit/s",
    features: [
      "Glasvezel internet",
      "Meerdere SuperWifi punten",
      "Interactieve TV",
      "On Demand",
      "Sport opties",
      "KPN Veilig",
      "Maximale snelheid",
    ],
    highlight: false,
    badge: "Snelste optie",
  },
];

export default function InternetTvPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #78350F 0%, #1565C0 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <Wifi size={14} />
              KPN Internet & TV
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Snel internet en uitstekende televisie via KPN
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Glasvezel internet met SuperWifi en interactieve TV — op maat
              geadviseerd door onze KPN-specialisten.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <Phone size={16} />
                Ontvang een aanbod
              </Link>
              <a href="#pakketten" className="btn-outline-white">
                Bekijk pakketten
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internet features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green mb-3">
              <Wifi size={13} />
              KPN Internet
            </span>
            <h2 className="section-title">Glasvezel internet voor thuis</h2>
            <p className="section-subtitle mx-auto text-center">
              Snel, stabiel en betrouwbaar. KPN glasvezel is toekomstbestendig en
              groeit mee met uw behoefte.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internetFeatures.map((feature) => (
              <div key={feature.title} className="card">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#FEF3C7" }}
                >
                  <feature.icon size={20} style={{ color: "#78350F" }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TV features */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-green mb-4">
                <Tv size={13} />
                KPN TV
              </span>
              <h2 className="section-title mb-4">
                Interactieve televisie op zijn best
              </h2>
              <p className="text-gray-500 mb-8">
                KPN TV biedt een complete televisie-ervaring met meer dan 100
                zenders, uitgebreide terugkijkmogelijkheden en een On Demand
                bibliotheek voor alle genres.
              </p>
              <div className="space-y-4">
                {tvFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#FFFBEB" }}
                    >
                      <feature.icon size={17} style={{ color: "#F59E0B" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-0.5">
                        {feature.title}
                      </p>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, #FEF3C7, #FFFBEB)" }}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Tv size={24} style={{ color: "#78350F" }} />
                  <h3 className="font-bold text-gray-900">KPN TV voordelen</h3>
                </div>
                {[
                  "100+ zenders in HD-kwaliteit",
                  "7 dagen terugkijken",
                  "Uitgebreide On Demand bibliotheek",
                  "ESPN sportpakketten beschikbaar",
                  "Kijken op tablet & smartphone",
                  "Meerdere TV&apos;s in huis mogelijk",
                  "Eenvoudige KPN Box bediening",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 mb-3">
                    <CheckCircle size={16} style={{ color: "#F59E0B" }} />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pakketten" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Kies uw pakket</h2>
            <p className="section-subtitle mx-auto text-center">
              Als KPN-partner adviseren wij u over het juiste pakket voor uw
              situatie. Onze specialisten vergelijken alle opties voor u.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 border-2 relative ${
                  pkg.highlight
                    ? "border-green-500 shadow-lg"
                    : "border-gray-200"
                }`}
              >
                {pkg.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 badge-green text-xs"
                  >
                    {pkg.badge}
                  </div>
                )}
                <h3 className="font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p
                  className="text-2xl font-extrabold mb-4"
                  style={{ color: "#F59E0B" }}
                >
                  {pkg.speed}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} style={{ color: "#F59E0B" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.highlight ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}>
                  Vraag aanbod aan
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            * Exacte prijzen en beschikbaarheid zijn afhankelijk van uw locatie. Onze adviseurs informeren u graag.
          </p>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green mb-3">
              <Shield size={13} />
              Internet Security
            </span>
            <h2 className="section-title">KPN Veilig – bescherming voor uw gezin</h2>
            <p className="section-subtitle mx-auto text-center">
              In de digitale wereld zijn dreigingen alomtegenwoordig. KPN Veilig
              beschermt al uw apparaten tegen virussen, phishing en andere online gevaren.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="card text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#FEF2F2" }}
                >
                  <feature.icon size={22} style={{ color: "#DC2626" }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 green-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-3">
                Benieuwd naar uw mogelijkheden?
              </h2>
              <p className="text-green-100 mb-6">
                Onze KPN-specialisten berekenen het meest voordelige pakket voor
                uw situatie. Volledig vrijblijvend.
              </p>
              <a
                href="tel:0886607775"
                className="flex items-center gap-2 text-white font-bold text-lg"
              >
                <Phone size={20} />
                088 660 7775
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <ContactForm compact title="" subtitle="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
