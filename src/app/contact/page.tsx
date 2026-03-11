import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Smart-fiber – KPN Advies",
  description:
    "Neem contact op met Smart-fiber. Bel 088 660 7775 of vraag een terugbelverzoek aan voor persoonlijk KPN-advies.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Telefoon",
    value: "088 660 7775",
    href: "tel:0886607775",
    sub: "Ma–Vr 9:00–20:00 | Za 10:00–17:00",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@smart-fiber.nl",
    href: "mailto:info@smart-fiber.nl",
    sub: "Reactie binnen 1 werkdag",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Touwslager 5, 3861SP Nijkerk",
    href: "https://maps.google.com/?q=Touwslager+5+Nijkerk",
    sub: "KvK: 72251964",
  },
  {
    icon: Clock,
    label: "Openingstijden",
    value: "Ma–Vr: 9:00–20:00",
    sub: "Za: 10:00–17:00 | Zo: gesloten",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge-green mb-4">
              <MessageSquare size={13} />
              Contact
            </span>
            <h1 className="section-title mb-4">Neem contact op</h1>
            <p className="text-gray-500 text-lg">
              Wij staan voor u klaar voor persoonlijk KPN-advies. Bel direct of
              vraag een terugbelverzoek aan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Contactgegevens
              </h2>
              <div className="space-y-4 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="trust-badge">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#FFFBEB" }}
                    >
                      <info.icon size={18} style={{ color: "#F59E0B" }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-semibold text-gray-900 hover:text-orange-600 transition-colors block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-gray-900">{info.value}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-0.5">{info.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl p-6 border"
                style={{ background: "#F0FFF4", borderColor: "#BBF7D0" }}
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  Klacht of opmerking?
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Bent u niet tevreden over onze dienstverlening? Wij nemen
                  uw klacht serieus en streven naar een snelle oplossing.
                </p>
                <a
                  href="/klacht"
                  className="text-sm font-semibold underline"
                  style={{ color: "#F59E0B" }}
                >
                  Naar klachtenformulier →
                </a>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-xs text-gray-500 italic">
                  Smart-fiber is een onafhankelijke partner van KPN en geen
                  onderdeel van KPN.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="card">
              <ContactForm
                title="Vraag een terugbelverzoek aan"
                subtitle="Vul het formulier in en wij bellen u zo spoedig mogelijk terug."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
