import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Wifi,
  CheckCircle,
  Phone,
  ArrowRight,
  Zap,
  Users,
  Globe,
  MessageSquare,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "KPN Mobiel | Smart-fiber – 5G & Unlimited Abonnementen",
  description:
    "KPN mobiele abonnementen met 5G netwerk. Unlimited bellen, sms en data. Combinatievoordeel met KPN thuis. Vrijblijvend advies via Smart-fiber.",
};

const features = [
  {
    icon: Zap,
    title: "5G netwerk",
    description:
      "KPN heeft één van de snelste en meest dekkende 5G-netwerken van Nederland, bereikbaar voor bijna alle Nederlanders.",
  },
  {
    icon: Globe,
    title: "Unlimited abonnementen",
    description:
      "Onbeperkt bellen, sms-en en internetten zonder bijbetalingen of vertragingen.",
  },
  {
    icon: Users,
    title: "KPN Compleet",
    description:
      "Combineer mobiel met uw KPN thuis-abonnement en profiteer van significante kortingen.",
  },
  {
    icon: MessageSquare,
    title: "Roaming in Europa",
    description:
      "Gebruik uw bundel zonder extra kosten in alle EU-landen, Noorwegen, IJsland en Liechtenstein.",
  },
];

const plans = [
  {
    name: "Mobiel Start",
    data: "5 GB",
    features: [
      "Onbeperkt bellen & sms",
      "5 GB 4G/5G data",
      "Roamen in EU",
    ],
    highlight: false,
  },
  {
    name: "Mobiel M",
    data: "20 GB",
    features: [
      "Onbeperkt bellen & sms",
      "20 GB 4G/5G data",
      "Roamen in EU",
      "KPN Compleet korting",
    ],
    highlight: false,
  },
  {
    name: "Mobiel Unlimited",
    data: "Onbeperkt",
    features: [
      "Onbeperkt bellen & sms",
      "Onbeperkt 4G/5G data",
      "Roamen in EU",
      "KPN Compleet korting",
      "Hotspot delen",
    ],
    highlight: true,
    badge: "Populairste keuze",
  },
];

export default function MobielPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <Smartphone size={14} />
              KPN Mobiel
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              Altijd verbonden met KPN 5G
            </h1>
            <p className="text-green-100 text-lg mb-8">
              Unlimited bellen, sms en data op het snelle en betrouwbare 5G-netwerk van KPN.
              Combineer met KPN thuis voor extra voordeel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary bg-white text-green-700 hover:bg-green-50 border-0">
                <Phone size={16} />
                Vraag advies aan
              </Link>
              <a href="#abonnementen" className="btn-outline-white">
                Bekijk abonnementen
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green mb-3">
              <Smartphone size={13} />
              Voordelen
            </span>
            <h2 className="section-title">KPN Mobiel – wat u kunt verwachten</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#FFFBEB" }}
                >
                  <f.icon size={20} style={{ color: "#F59E0B" }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPN Compleet highlight */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-green mb-4">
                <Wifi size={13} />
                KPN Compleet
              </span>
              <h2 className="section-title mb-4">
                Meer voordeel met KPN Compleet
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Heeft u al KPN internet of tv thuis? Dan kunt u extra profiteren
                door uw mobiele abonnement te combineren via KPN Compleet. Dit
                geeft u kortingen op zowel uw mobiele als uw thuis-abonnement.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Korting op uw mobiele abonnement",
                  "Korting op uw thuis-abonnement",
                  "Eén rekening voor alles",
                  "Gemakkelijk beheer via Mijn KPN",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={17} style={{ color: "#F59E0B" }} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                <Phone size={16} />
                Bereken uw voordeel
              </Link>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)" }}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">KPN Compleet voordelen</h3>
                <div className="space-y-4">
                  {[
                    { label: "Abonnementen combineren", value: "Extra korting" },
                    { label: "Maandelijkse facturering", value: "Gecombineerd" },
                    { label: "Klantenservice", value: "1 contactpunt" },
                    { label: "Beheer", value: "Via Mijn KPN" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-500">{row.label}</span>
                      <span className="text-sm font-semibold" style={{ color: "#F59E0B" }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="abonnementen" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Kies uw mobiele abonnement</h2>
            <p className="section-subtitle mx-auto text-center">
              Wij adviseren u over het abonnement dat het beste aansluit bij uw
              gebruik en budget.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border-2 relative ${
                  plan.highlight
                    ? "border-green-500 shadow-lg"
                    : "border-gray-200"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 badge-green text-xs">
                    {plan.badge}
                  </div>
                )}
                <h3 className="font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p
                  className="text-3xl font-extrabold mb-4"
                  style={{ color: "#F59E0B" }}
                >
                  {plan.data}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} style={{ color: "#F59E0B" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={plan.highlight ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                >
                  Vraag aanbod aan
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            * Exacte prijzen worden bepaald op basis van uw situatie. Onze adviseurs informeren u graag.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 green-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-3">
                Overstappen naar KPN Mobiel?
              </h2>
              <p className="text-green-100 mb-6">
                Onze adviseurs regelen alles, inclusief nummerbehoud. Snel,
                eenvoudig en volledig ontzorgd.
              </p>
              <a href="tel:0886607775" className="flex items-center gap-2 text-white font-bold text-lg">
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
