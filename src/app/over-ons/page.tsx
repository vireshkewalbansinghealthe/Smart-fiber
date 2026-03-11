import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Users,
  BadgeCheck,
  HeartHandshake,
  Phone,
  ArrowRight,
  MapPin,
  Mail,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Over Smart-fiber | Officiële KPN Partner",
  description:
    "Leer meer over Smart-fiber, officiële KPN-partner. Meer dan 335.000 tevreden klanten geholpen met internet, TV, mobiel en beveiliging.",
};

const milestones = [
  { year: "2018", event: "Smart-fiber opgericht als KPN-partner" },
  { year: "2019", event: "Eerste 10.000 klanten bereikt" },
  { year: "2021", event: "Uitbreiding naar zakelijke markt" },
  { year: "2023", event: "100.000+ klanten geholpen" },
  { year: "2025", event: "Meer dan 335.000 tevreden klanten" },
];

const team = [
  {
    initial: "R",
    name: "Rick van den Berg",
    role: "Directeur & KPN-specialist",
    exp: "12 jaar ervaring",
  },
  {
    initial: "L",
    name: "Lisa Hendriks",
    role: "Senior KPN Adviseur",
    exp: "8 jaar ervaring",
  },
  {
    initial: "M",
    name: "Mark de Vries",
    role: "Zakelijk Adviseur",
    exp: "10 jaar ervaring",
  },
  {
    initial: "S",
    name: "Sophie Jansen",
    role: "Klantenservice",
    exp: "6 jaar ervaring",
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-green mb-4">
                <Award size={13} />
                Over ons
              </span>
              <h1 className="section-title mb-4">
                Uw betrouwbare KPN-specialist
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Smart-fiber is een officiële partner van KPN en adviseert
                exclusief over KPN-producten. Wij hebben inmiddels meer dan
                335.000 mensen geholpen aan het beste telecom-abonnement voor
                hun situatie.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Onze kracht ligt in persoonlijk advies, specialistische kennis
                en toegang tot exclusieve partneraanbiedingen. Wij zijn geen
                onderdeel van KPN, maar werken als zelfstandige partner nauw
                met hen samen.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "335.000+", label: "Tevreden klanten" },
                { value: "7+ jaar", label: "Actief als KPN-partner" },
                { value: "5★", label: "Gemiddelde beoordeling" },
                { value: "< 1 dag", label: "Gemiddelde reactietijd" },
              ].map((stat) => (
                <div key={stat.label} className="card text-center">
                  <p className="text-3xl font-extrabold mb-1" style={{ color: "#F59E0B" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-green mb-4 mx-auto">
              <HeartHandshake size={13} />
              Onze missie
            </span>
            <h2 className="section-title mb-6">
              Eerlijk en persoonlijk advies — altijd
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Bij Smart-fiber geloven wij dat iedereen recht heeft op helder,
              eerlijk advies over telecomproducten. Geen schreeuwerige reclame,
              geen onduidelijke kleine lettertjes. Wij nemen de tijd om uw
              situatie te begrijpen en adviseren u uitsluitend over producten
              die écht bij u passen.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Onze kernwaarden</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BadgeCheck,
                title: "Transparantie",
                desc: "Open communicatie over prijzen, voorwaarden en ons advies.",
              },
              {
                icon: Users,
                title: "Klantgerichtheid",
                desc: "Uw belang staat altijd centraal, niet onze omzet.",
              },
              {
                icon: Award,
                title: "Expertise",
                desc: "Diepgaande kennis van het complete KPN-portfolio.",
              },
              {
                icon: HeartHandshake,
                title: "Integriteit",
                desc: "Eerlijk advies, ook als dat betekent dat we u ergens niet mee kunnen helpen.",
              },
            ].map((v) => (
              <div key={v.title} className="card text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#FFFBEB" }}
                >
                  <v.icon size={22} style={{ color: "#F59E0B" }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Onze geschiedenis</h2>
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex items-center gap-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white"
                  style={{ background: i === milestones.length - 1 ? "#F59E0B" : "#FFFBEB", color: i === milestones.length - 1 ? "white" : "#F59E0B" }}
                >
                  {m.year}
                </div>
                <div className="flex-1 p-4 bg-gray-50 rounded-xl">
                  <p className="font-medium text-gray-800">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Ons team</h2>
            <p className="section-subtitle mx-auto text-center">
              Ervaren KPN-specialisten die u persoonlijk adviseren.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold"
                  style={{ background: "linear-gradient(135deg, #F59E0B, #78350F)" }}
                >
                  {member.initial}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{member.role}</p>
                <span className="badge-green text-xs">{member.exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Bedrijfsgegevens</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building size={18} style={{ color: "#F59E0B" }} className="mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Bedrijfsnaam</p>
                    <p className="font-medium text-gray-900">Smart-fiber</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} style={{ color: "#F59E0B" }} className="mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Adres</p>
                    <p className="font-medium text-gray-900">Touwslager 5, 3861SP Nijkerk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building size={18} style={{ color: "#F59E0B" }} className="mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">KvK-nummer</p>
                    <p className="font-medium text-gray-900">72251964</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={18} style={{ color: "#F59E0B" }} className="mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Telefoon</p>
                    <a href="tel:0886607775" className="font-medium" style={{ color: "#F59E0B" }}>
                      088 660 7775
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} style={{ color: "#F59E0B" }} className="mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">E-mail</p>
                    <a href="mailto:info@smart-fiber.nl" className="font-medium" style={{ color: "#F59E0B" }}>
                      info@smart-fiber.nl
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-6 pt-6 border-t border-gray-100 rounded-lg p-4"
              style={{ background: "#F9FAFB" }}
            >
              <p className="text-sm text-gray-500 italic">
                Smart-fiber is een onafhankelijke partner van KPN en geen onderdeel van KPN.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 green-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Kennismaken?</h2>
          <p className="text-green-100 text-lg mb-8">
            Bel ons of stuur een e-mail — wij helpen u graag verder.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0886607775" className="btn-primary bg-white text-green-700 hover:bg-green-50 border-0">
              <Phone size={16} />
              088 660 7775
            </a>
            <Link href="/contact" className="btn-outline-white">
              Stuur een bericht
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
