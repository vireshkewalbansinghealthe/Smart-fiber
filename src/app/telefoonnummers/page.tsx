import type { Metadata } from "next";
import Link from "next/link";
import { Phone, PhoneOff, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Onze telefoonnummers | Smart-fiber",
  description:
    "Overzicht van alle telefoonnummers waarmee Smart-fiber u kan bellen. Herkent u een nummer? Dan belt Smart-fiber u.",
};

const outgoingNumbers = [
  "31242038015", "31242038016", "31242038017", "31242038018", "31242038019",
  "31242038025", "31242038026", "31242038027", "31242038028", "31242038029",
  "31362042205", "31362042206", "31362042207", "31362042208", "31362042209",
  "31362042212", "31362042227",
  "31402401255", "31402401256", "31402401257", "31402401258", "31402401259",
  "31402401260", "31402401261", "31402401268", "31402401269",
  "31502222625", "31502222626", "31502222627", "31502222628", "31502222629",
  "31502222650", "31502222652",
];

function formatNumber(n: string) {
  return `+${n.slice(0, 2)} (0)${n.slice(2, 4)} ${n.slice(4, 7)} ${n.slice(7)}`;
}

export default function TelefoonnummersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 light-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-green mb-4">
            <Phone size={13} />
            Onze telefoonnummers
          </span>
          <h1 className="section-title mb-4">Wij bellen vanuit deze nummers</h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Hieronder vindt u een volledig overzicht van de telefoonnummers
            waarmee Smart-fiber u kan bellen. Herkent u een van deze nummers
            in uw oproepenlijst? Dan was dat wij.
          </p>
        </div>
      </section>

      {/* Info banner */}
      <section className="bg-white pt-10 pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-5 flex items-start gap-4 border"
            style={{ background: "#FEF3C7", borderColor: "#BFDBFE" }}
          >
            <Info size={20} style={{ color: "#78350F" }} className="flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Wilt u <strong>niet meer gebeld worden</strong> door Smart-fiber?
                U kunt uw telefoonnummer eenvoudig op onze blokkadelijst plaatsen via
                onze{" "}
                <Link href="/afmelden" className="font-semibold underline" style={{ color: "#78350F" }}>
                  afmeldpagina
                </Link>
                . Uw nummer wordt dan direct geblokkeerd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers grid */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Uitgaande nummers
              </h2>
              <span className="badge-green">
                <Phone size={12} />
                {outgoingNumbers.length} nummers
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {outgoingNumbers.map((n) => (
                <div
                  key={n}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100"
                  style={{ background: "#F9FAFB" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#FFFBEB" }}
                  >
                    <Phone size={13} style={{ color: "#F59E0B" }} />
                  </div>
                  <span className="font-mono text-sm font-medium text-gray-800">
                    {formatNumber(n)}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-6">
              Dit overzicht wordt bijgehouden en kan worden uitgebreid wanneer
              wij nieuwe nummers in gebruik nemen.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/afmelden" className="btn-secondary">
              <PhoneOff size={16} />
              Niet meer gebeld worden
            </Link>
            <Link href="/contact" className="btn-primary">
              <Phone size={16} />
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
