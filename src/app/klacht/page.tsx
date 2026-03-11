"use client";
import { useState } from "react";
import Link from "next/link";
import { AlertCircle, Send, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function KlachtPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    email: "",
    klachtnummer: "",
    omschrijving: "",
    gewensteOplossing: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.naam.trim()) e.naam = "Naam is verplicht";
    if (!form.email.trim()) e.email = "E-mail is verplicht";
    if (!form.omschrijving.trim()) e.omschrijving = "Omschrijving is verplicht";
    if (!form.consent) e.consent = "Bevestiging is verplicht";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-16 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge-green mb-4">
              <AlertCircle size={13} />
              Klacht indienen
            </span>
            <h1 className="section-title mb-4">Klacht of ontevreden?</h1>
            <p className="text-gray-500 text-lg">
              Wij nemen uw klacht serieus. Vul het formulier in en wij reageren
              binnen <strong>5 werkdagen</strong> op uw klacht.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Procedure */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Klachtenprocedure
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  {
                    step: "1",
                    title: "Klacht indienen",
                    desc: "Vul het formulier in of neem telefonisch contact op.",
                  },
                  {
                    step: "2",
                    title: "Bevestiging ontvangst",
                    desc: "U ontvangt binnen 1 werkdag een bevestiging van ontvangst.",
                  },
                  {
                    step: "3",
                    title: "Behandeling",
                    desc: "Wij onderzoeken uw klacht zorgvuldig en zoeken naar een oplossing.",
                  },
                  {
                    step: "4",
                    title: "Reactie binnen 5 werkdagen",
                    desc: "Wij streven ernaar u binnen 5 werkdagen een inhoudelijke reactie te geven.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                      style={{ background: "#F59E0B" }}
                    >
                      {s.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-0.5">{s.title}</p>
                      <p className="text-sm text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Contactgegevens</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={16} style={{ color: "#F59E0B" }} />
                    <a href="tel:0886607775" className="text-sm font-medium" style={{ color: "#F59E0B" }}>
                      088 660 7775
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} style={{ color: "#F59E0B" }} />
                    <a href="mailto:info@smart-fiber.nl" className="text-sm font-medium" style={{ color: "#F59E0B" }}>
                      info@smart-fiber.nl
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} style={{ color: "#F59E0B" }} className="mt-0.5" />
                    <span className="text-sm text-gray-600">Touwslager 5, 3861SP Nijkerk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} style={{ color: "#F59E0B" }} />
                    <span className="text-sm text-gray-600">Reactie binnen 5 werkdagen</span>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl p-4 border"
                style={{ background: "#FFF7ED", borderColor: "#FED7AA" }}
              >
                <p className="text-sm text-orange-700">
                  <strong>Niet meer gebeld worden?</strong> Bezoek onze{" "}
                  <Link href="/afmelden" className="underline font-semibold">
                    afmeldpagina
                  </Link>{" "}
                  om uw nummer op de blokkadelijst te plaatsen.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="card text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "#FFFBEB" }}
                  >
                    <CheckCircle size={32} style={{ color: "#F59E0B" }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Klacht ontvangen
                  </h3>
                  <p className="text-gray-600 max-w-sm mx-auto">
                    Bedankt voor uw bericht. Wij sturen u binnen 1 werkdag een
                    bevestiging en reageren inhoudelijk binnen 5 werkdagen.
                  </p>
                </div>
              ) : (
                <div className="card">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Klachtenformulier
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">
                          Naam <span style={{ color: "#F59E0B" }}>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Uw naam"
                          value={form.naam}
                          onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        />
                        {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam}</p>}
                      </div>
                      <div>
                        <label className="form-label">Telefoonnummer</label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="06 12345678"
                          value={form.telefoon}
                          onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label">
                        E-mailadres <span style={{ color: "#F59E0B" }}>*</span>
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="uw@email.nl"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="form-label">Klantnummer (optioneel)</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Uw klant- of ordernummer"
                        value={form.klachtnummer}
                        onChange={(e) => setForm({ ...form, klachtnummer: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="form-label">
                        Omschrijving klacht <span style={{ color: "#F59E0B" }}>*</span>
                      </label>
                      <textarea
                        className="form-input resize-none"
                        rows={4}
                        placeholder="Beschrijf uw klacht zo volledig mogelijk..."
                        value={form.omschrijving}
                        onChange={(e) => setForm({ ...form, omschrijving: e.target.value })}
                      />
                      {errors.omschrijving && <p className="text-red-500 text-xs mt-1">{errors.omschrijving}</p>}
                    </div>

                    <div>
                      <label className="form-label">Gewenste oplossing (optioneel)</label>
                      <textarea
                        className="form-input resize-none"
                        rows={3}
                        placeholder="Wat zou voor u een bevredigende oplossing zijn?"
                        value={form.gewensteOplossing}
                        onChange={(e) => setForm({ ...form, gewensteOplossing: e.target.value })}
                      />
                    </div>

                    <div
                      className="rounded-xl p-4"
                      style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}
                    >
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="klacht-consent"
                          checked={form.consent}
                          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                        />
                        <label htmlFor="klacht-consent" className="text-sm text-gray-700 cursor-pointer">
                          Ik ga akkoord dat Smart-fiber mijn persoonsgegevens gebruikt voor de
                          behandeling van mijn klacht. <span style={{ color: "#F59E0B" }}>*</span>
                        </label>
                      </div>
                      {errors.consent && <p className="text-red-500 text-xs mt-1 ml-6">{errors.consent}</p>}
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Verzenden...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Klacht verzenden
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
