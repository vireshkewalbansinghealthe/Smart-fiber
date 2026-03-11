"use client";
import { useState } from "react";
import { PhoneOff, CheckCircle, Shield, Lock, Phone } from "lucide-react";

export default function AfmeldenPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [telefoon, setTelefoon] = useState("");
  const [bevestiging, setBevestiging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!telefoon.trim()) e.telefoon = "Telefoonnummer is verplicht";
    else if (!/^[0-9\s\-\+]{10,}$/.test(telefoon))
      e.telefoon = "Voer een geldig telefoonnummer in";
    if (!bevestiging) e.bevestiging = "Bevestiging is verplicht";
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
              <PhoneOff size={13} />
              Afmelden
            </span>
            <h1 className="section-title mb-4">Niet meer gebeld worden</h1>
            <p className="text-gray-500 text-lg">
              Wilt u niet meer worden gebeld door Smart-fiber? Voer uw
              telefoonnummer in en wij plaatsen het direct op onze blokkadelijst.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Hoe werkt het?
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: PhoneOff,
                    title: "Directe blokkade",
                    desc: "Uw nummer wordt direct na indiening op onze interne blokkadelijst geplaatst.",
                  },
                  {
                    icon: Lock,
                    title: "Alleen voor blokkade",
                    desc: "Uw telefoonnummer wordt uitsluitend bewaard om te voorkomen dat wij u nogmaals bellen.",
                  },
                  {
                    icon: Shield,
                    title: "AVG-compliant",
                    desc: "Wij verwerken uw afmelding conform de Algemene Verordening Gegevensbescherming.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Bevestiging",
                    desc: "U ontvangt direct een bevestiging van uw afmelding.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#FFFBEB" }}
                    >
                      <item.icon size={17} style={{ color: "#F59E0B" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl p-5 border mb-6"
                style={{ background: "#F0FFF4", borderColor: "#BBF7D0" }}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Let op:</strong> Afmelding bij Smart-fiber geldt uitsluitend
                  voor onze eigen telefonische benadering. Voor afmelding bij het
                  landelijke Bel-me-niet Register bezoekt u{" "}
                  <a
                    href="https://www.bel-me-niet.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline"
                    style={{ color: "#F59E0B" }}
                  >
                    www.bel-me-niet.nl
                  </a>
                  .
                </p>
              </div>

              <div
                className="rounded-xl p-5 border flex items-start gap-3"
                style={{ background: "#F9FAFB", borderColor: "#E5E7EB" }}
              >
                <Phone size={16} style={{ color: "#F59E0B" }} className="mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  Wilt u weten vanuit welke nummers wij bellen?{" "}
                  <a href="/telefoonnummers" className="font-semibold underline" style={{ color: "#F59E0B" }}>
                    Bekijk al onze telefoonnummers →
                  </a>
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
                    Afmelding bevestigd
                  </h3>
                  <p className="text-gray-600 max-w-sm mx-auto mb-2">
                    Het telefoonnummer <strong>{telefoon}</strong> is toegevoegd
                    aan onze blokkadelijst. U zult niet meer door ons worden
                    gebeld.
                  </p>
                  <p className="text-sm text-gray-400">
                    Uw nummer wordt uitsluitend bewaard voor blokkadedoeleinden.
                  </p>
                </div>
              ) : (
                <div className="card">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "#FFFBEB" }}
                    >
                      <PhoneOff size={20} style={{ color: "#F59E0B" }} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Afmeldformulier
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label className="form-label">
                        Telefoonnummer <span style={{ color: "#F59E0B" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="06 12345678 of 088 123 4567"
                        value={telefoon}
                        onChange={(e) => setTelefoon(e.target.value)}
                      />
                      {errors.telefoon && (
                        <p className="text-red-500 text-xs mt-1">{errors.telefoon}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">
                        Voer het telefoonnummer in waarop u niet meer gebeld wilt worden.
                      </p>
                    </div>

                    <div
                      className="rounded-xl p-4"
                      style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}
                    >
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          id="afmeld-bevestiging"
                          checked={bevestiging}
                          onChange={(e) => setBevestiging(e.target.checked)}
                        />
                        <label
                          htmlFor="afmeld-bevestiging"
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          Ik bevestig dat het opgegeven telefoonnummer van mij is en ik
                          verzoek Smart-fiber dit nummer niet meer te benaderen voor
                          commerciële doeleinden.{" "}
                          <span style={{ color: "#F59E0B" }}>*</span>
                        </label>
                      </div>
                      {errors.bevestiging && (
                        <p className="text-red-500 text-xs mt-1 ml-6">{errors.bevestiging}</p>
                      )}
                    </div>

                    <p className="text-xs text-gray-400">
                      Uw telefoonnummer wordt uitsluitend bewaard voor blokkadedoeleinden en niet
                      voor andere doeleinden gebruikt. Zie onze{" "}
                      <a href="/privacy" className="underline" style={{ color: "#F59E0B" }}>
                        privacyverklaring
                      </a>
                      .
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Verwerken...
                        </>
                      ) : (
                        <>
                          <PhoneOff size={16} />
                          Afmelden
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
