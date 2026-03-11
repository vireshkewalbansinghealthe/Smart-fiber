import Link from "next/link";
import {
  Phone,
  Wifi,
  Tv,
  Smartphone,
  Shield,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  ChevronRight,
  Zap,
  Clock,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const usps = [
  { icon: Users, number: "335.000+", label: "Tevreden klanten" },
  { icon: Award, number: "Officieel", label: "KPN-partner" },
  { icon: Star, number: "Persoonlijk", label: "Advies op maat" },
  { icon: BadgeCheck, number: "Exclusief", label: "Partneraanbiedingen" },
];

const services = [
  {
    icon: Wifi,
    title: "KPN Internet & TV",
    description:
      "Glasvezel internet met hoge snelheden, SuperWifi en interactieve televisie met terugkijkfunctie.",
    href: "/internet-tv",
    color: "#78350F",
    bg: "#FEF3C7",
  },
  {
    icon: Smartphone,
    title: "KPN Mobiel",
    description:
      "Unlimited bellen, sms en data op het snelle 5G-netwerk van KPN. Combineer met thuis voor extra voordeel.",
    href: "/mobiel",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: Briefcase,
    title: "Zakelijk",
    description:
      "Betrouwbare telecomoplossingen voor zzp'ers en bedrijven. Vaste en mobiele zakelijke abonnementen.",
    href: "/zakelijk",
    color: "#7C3AED",
    bg: "#F3F0FF",
  },
  {
    icon: Shield,
    title: "Internet Security",
    description:
      "KPN Veilig beschermt uw gezin tegen virussen, phishing en online gevaren. Met ouderlijk toezicht.",
    href: "/internet-tv#security",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
];

const whyKpn = [
  {
    icon: Zap,
    title: "Glasvezel & 5G netwerk",
    description:
      "KPN beschikt over een van de meest uitgebreide glasvezel- en 5G-netwerken van Nederland.",
  },
  {
    icon: CheckCircle,
    title: "Betrouwbare verbinding",
    description:
      "Stabiele en snelle verbinding voor thuis en onderweg, met minimale storingen.",
  },
  {
    icon: HeartHandshake,
    title: "KPN Compleet voordeel",
    description:
      "Combineer internet, tv en mobiel voor extra korting via KPN Compleet.",
  },
  {
    icon: Shield,
    title: "Veiligheid inbegrepen",
    description:
      "KPN Veilig beschermt alle apparaten in uw gezin standaard meegeleverd.",
  },
];

const whySmart-fiber = [
  {
    icon: Award,
    title: "Specialistische kennis",
    description:
      "Onze adviseurs zijn volledig gespecialiseerd in het KPN-portfolio en altijd op de hoogte van de laatste aanbiedingen.",
  },
  {
    icon: Clock,
    title: "Snelle verwerking",
    description:
      "Wij regelen de aanvraag en activatie volledig voor u, zodat u er geen omkijken naar heeft.",
  },
  {
    icon: HeartHandshake,
    title: "Persoonlijke begeleiding",
    description:
      "Van het eerste adviesgesprek tot de aansluiting staat u een vaste adviseur bij.",
  },
  {
    icon: BadgeCheck,
    title: "Exclusieve partneraanbiedingen",
    description:
      "Als officiële partner beschikken wij regelmatig over aanbiedingen die niet standaard via KPN.com beschikbaar zijn.",
  },
];

const reviews = [
  {
    name: "Marianne V.",
    location: "Amsterdam",
    rating: 5,
    text: "Heel vriendelijk en deskundig geholpen. Mijn nieuwe KPN-pakket is precies wat ik zocht, en tegen een mooie prijs.",
  },
  {
    name: "Peter de B.",
    location: "Utrecht",
    rating: 5,
    text: "Snel teruggebeld, duidelijk uitleg over de opties en alles vlekkeloos geregeld. Echt een aanrader.",
  },
  {
    name: "Sandra K.",
    location: "Nijmegen",
    rating: 5,
    text: "Dankzij Smart-fiber heb ik een veel beter aanbod gekregen dan via de website van KPN zelf. Top service!",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-orange-400 blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
                style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}
              >
                <Award size={14} />
                Officiële KPN-partner
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
                Exclusief KPN-advies via{" "}
                <span style={{ color: "#4ade80" }}>Smart-fiber</span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
                Als officiële KPN-partner helpen wij u met internet, tv, mobiel
                en beveiliging. Persoonlijk, transparant en met toegang tot
                exclusieve partneraanbiedingen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  <Phone size={16} />
                  Laat u terugbellen
                </Link>
                <Link href="/internet-tv" className="btn-outline-white">
                  Bekijk onze diensten
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-5 mt-10">
                {[
                  "335.000+ klanten",
                  "Gratis advies",
                  "Geen verplichtingen",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle size={15} style={{ color: "#4ade80" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <ContactForm
                title="Ontvang vrijblijvend advies"
                subtitle="Wij bellen u terug op een moment dat u uitkomt."
                compact
              />
            </div>
          </div>
        </div>
      </section>

      {/* USP bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp) => (
              <div key={usp.label} className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#FFFBEB" }}
                >
                  <usp.icon size={20} style={{ color: "#F59E0B" }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">
                    {usp.number}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">{usp.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green mb-3">
              <Tv size={13} />
              Onze diensten
            </span>
            <h2 className="section-title">
              Alles op het KPN-netwerk
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Van snel internet tot mobiel en beveiliging — wij adviseren u
              persoonlijk over het complete KPN-aanbod.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: service.bg }}
                >
                  <service.icon size={22} style={{ color: service.color }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div
                  className="flex items-center gap-1 text-sm font-medium"
                  style={{ color: "#F59E0B" }}
                >
                  Meer informatie
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why KPN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-green mb-4">
                <Wifi size={13} />
                Waarom KPN
              </span>
              <h2 className="section-title mb-4">
                Nederland&apos;s meest betrouwbare netwerk
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                KPN heeft jarenlang geïnvesteerd in glasvezel en 5G-infrastructuur
                en biedt daarmee een van de meest dekkende en betrouwbare
                netwerken van Nederland — voor thuis én onderweg.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {whyKpn.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#FFFBEB" }}
                    >
                      <item.icon size={17} style={{ color: "#F59E0B" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #FEF3C7, #FFFBEB)", padding: "2.5rem" }}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Glasvezel dekking", value: "95%", sub: "van NL gedekt" },
                    { label: "5G dekking", value: "99%", sub: "bevolkingsdekking" },
                    { label: "Uptime garantie", value: "99,9%", sub: "betrouwbaarheid" },
                    { label: "Klanten geholpen", value: "335K+", sub: "via Smart-fiber" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl p-4 text-center shadow-sm"
                    >
                      <p
                        className="text-2xl font-extrabold mb-0.5"
                        style={{ color: "#F59E0B" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-xs font-semibold text-gray-700">
                        {stat.label}
                      </p>
                      <p className="text-xs text-gray-400">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Smart-fiber */}
      <section className="py-20 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green mb-3">
              <HeartHandshake size={13} />
              Waarom Smart-fiber
            </span>
            <h2 className="section-title">
              Uw voordeel via een officiële partner
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Als officiële KPN-partner beschikken wij regelmatig over exclusieve
              partneraanbiedingen die niet altijd rechtstreeks via de website van
              KPN beschikbaar zijn.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySmart-fiber.map((item) => (
              <div key={item.title} className="card text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#FFFBEB" }}
                >
                  <item.icon size={22} style={{ color: "#F59E0B" }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green mb-3">
              <Star size={13} />
              Klantervaringen
            </span>
            <h2 className="section-title">Wat onze klanten zeggen</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="card">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="#F59E0B"
                      style={{ color: "#F59E0B" }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: "#F59E0B" }}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-400">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="green-gradient py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Klaar voor persoonlijk KPN-advies?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Onze KPN-specialisten staan voor u klaar. Bel ons direct of vraag
            een terugbelverzoek aan — geheel vrijblijvend.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0886607775" className="btn-primary bg-white text-green-700 hover:bg-green-50">
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
