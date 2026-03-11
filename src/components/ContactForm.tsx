"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function ContactForm({
  title = "Vraag een terugbelverzoek aan",
  subtitle = "Wij bellen u graag terug voor vrijblijvend advies.",
  compact = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    email: "",
    bericht: "",
    consentTelefoon: false,
    consentEmail: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.naam.trim()) e.naam = "Naam is verplicht";
    if (!form.telefoon.trim()) e.telefoon = "Telefoonnummer is verplicht";
    else if (!/^[0-9\s\-\+]{10,}$/.test(form.telefoon))
      e.telefoon = "Voer een geldig telefoonnummer in";
    if (!form.consentTelefoon)
      e.consentTelefoon = "Toestemming voor telefonisch contact is verplicht";
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

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "#FFFBEB" }}
        >
          <CheckCircle size={32} style={{ color: "#F59E0B" }} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Bedankt, {form.naam}!
        </h3>
        <p className="text-gray-600 max-w-sm mx-auto">
          We nemen zo spoedig mogelijk contact op via{" "}
          <strong>{form.telefoon}</strong>. Doorgaans bellen wij u binnen
          1 werkdag terug.
        </p>
      </div>
    );
  }

  return (
    <div>
      {!compact && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-500 mt-1">{subtitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label">
              Naam <span style={{ color: "#F59E0B" }}>*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Voor- en achternaam"
              value={form.naam}
              onChange={(e) =>
                setForm({ ...form, naam: e.target.value })
              }
            />
            {errors.naam && (
              <p className="text-red-500 text-xs mt-1">{errors.naam}</p>
            )}
          </div>
          <div>
            <label className="form-label">
              Telefoonnummer <span style={{ color: "#F59E0B" }}>*</span>
            </label>
            <input
              type="tel"
              className="form-input"
              placeholder="06 12345678"
              value={form.telefoon}
              onChange={(e) =>
                setForm({ ...form, telefoon: e.target.value })
              }
            />
            {errors.telefoon && (
              <p className="text-red-500 text-xs mt-1">{errors.telefoon}</p>
            )}
          </div>
        </div>

        <div>
          <label className="form-label">E-mailadres (optioneel)</label>
          <input
            type="email"
            className="form-input"
            placeholder="uw@email.nl"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        {!compact && (
          <div>
            <label className="form-label">Bericht (optioneel)</label>
            <textarea
              className="form-input resize-none"
              rows={3}
              placeholder="Waar kunnen wij u mee helpen?"
              value={form.bericht}
              onChange={(e) =>
                setForm({ ...form, bericht: e.target.value })
              }
            />
          </div>
        )}

        {/* Consent checkboxes */}
        <div className="rounded-xl p-4 space-y-3" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="consent-telefoon"
              checked={form.consentTelefoon}
              onChange={(e) =>
                setForm({ ...form, consentTelefoon: e.target.checked })
              }
            />
            <label
              htmlFor="consent-telefoon"
              className="text-sm text-gray-700 cursor-pointer"
            >
              <span className="font-medium">Ik geef Smart-fiber toestemming</span> mij
              telefonisch te benaderen over KPN-producten en diensten.{" "}
              <span style={{ color: "#F59E0B" }}>*</span>
            </label>
          </div>
          {errors.consentTelefoon && (
            <p className="text-red-500 text-xs ml-6">{errors.consentTelefoon}</p>
          )}

          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="consent-email"
              checked={form.consentEmail}
              onChange={(e) =>
                setForm({ ...form, consentEmail: e.target.checked })
              }
            />
            <label
              htmlFor="consent-email"
              className="text-sm text-gray-600 cursor-pointer"
            >
              Ik geef tevens toestemming voor contact per e-mail. (optioneel)
            </label>
          </div>
        </div>

        <p className="text-xs text-gray-400">
          Uw gegevens worden uitsluitend gebruikt voor het beantwoorden van uw
          aanvraag. Lees onze{" "}
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
              Verzenden...
            </>
          ) : (
            <>
              <Send size={16} />
              Verstuur terugbelverzoek
            </>
          )}
        </button>
      </form>
    </div>
  );
}
