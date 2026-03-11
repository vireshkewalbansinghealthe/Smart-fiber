import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Award, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}
              >
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold text-xl text-white">
                Smart<span style={{ color: "#F59E0B" }}>-fiber</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Officiële KPN-partner gespecialiseerd in internet, TV, mobiel en
              beveiliging. Persoonlijk advies voor meer dan 335.000 tevreden
              klanten.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#F59E0B20" }}
              >
                <Award size={14} style={{ color: "#F59E0B" }} />
              </div>
              <span className="text-sm text-gray-300">Officiële KPN-partner</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#F59E0B20" }}
              >
                <Users size={14} style={{ color: "#F59E0B" }} />
              </div>
              <span className="text-sm text-gray-300">335.000+ tevreden klanten</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#F59E0B20" }}
              >
                <Shield size={14} style={{ color: "#F59E0B" }} />
              </div>
              <span className="text-sm text-gray-300">AVG-compliant & veilig</span>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Diensten
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "KPN Internet & TV", href: "/internet-tv" },
                { label: "KPN Mobiel", href: "/mobiel" },
                { label: "Zakelijk", href: "/zakelijk" },
                { label: "Internet Security", href: "/internet-tv#security" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Bedrijf
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Over Smart-fiber", href: "/over-ons" },
                { label: "Werkwijze", href: "/werkwijze" },
                { label: "Contact", href: "/contact" },
                { label: "Klacht indienen", href: "/klacht" },
                { label: "Niet meer gebeld worden", href: "/afmelden" },
                { label: "Onze telefoonnummers", href: "/telefoonnummers" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:0886607775"
                className="flex items-start gap-3 group"
              >
                <Phone
                  size={16}
                  className="mt-0.5 flex-shrink-0 group-hover:text-orange-400 transition-colors"
                  style={{ color: "#F59E0B" }}
                />
                <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                  088 660 7775
                </span>
              </a>
              <a
                href="mailto:info@smart-fiber.nl"
                className="flex items-start gap-3 group"
              >
                <Mail
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "#F59E0B" }}
                />
                <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                  info@smart-fiber.nl
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "#F59E0B" }}
                />
                <span className="text-sm text-gray-400">
                  Touwslager 5<br />
                  3861SP Nijkerk
                </span>
              </div>
              <div className="pt-1">
                <span className="text-xs text-gray-500">KvK: 72251964</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Smart-fiber. Alle rechten voorbehouden. |{" "}
              <strong className="text-gray-400">
                Smart-fiber is een onafhankelijke partner van KPN en geen onderdeel van KPN.
              </strong>
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center">
              {[
                { label: "Privacyverklaring", href: "/privacy" },
                { label: "Algemene voorwaarden", href: "/voorwaarden" },
                { label: "Cookieverklaring", href: "/cookies" },
                { label: "Afmelden", href: "/afmelden" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
