"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#FFFBEB" }}
          >
            <Cookie size={20} style={{ color: "#F59E0B" }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 mb-1">
              Cookiegebruik
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Wij gebruiken cookies voor een optimale websitebeleving en
              analytische doeleinden. Lees meer in onze{" "}
              <Link
                href="/cookies"
                className="underline hover:text-orange-600"
                style={{ color: "#F59E0B" }}
              >
                cookieverklaring
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={accept}
                className="btn-primary text-sm py-2 px-5"
              >
                <Check size={15} />
                Accepteren
              </button>
              <button
                onClick={decline}
                className="btn-secondary text-sm py-2 px-5"
              >
                Alleen noodzakelijk
              </button>
            </div>
          </div>
          <button
            onClick={decline}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 flex-shrink-0"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
