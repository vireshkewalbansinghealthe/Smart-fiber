"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Diensten",
    children: [
      { label: "KPN Internet & TV", href: "/internet-tv" },
      { label: "KPN Mobiel", href: "/mobiel" },
      { label: "Zakelijk", href: "/zakelijk" },
    ],
  },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Over Smart-fiber", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}>
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl" style={{ color: "#1A1A2E" }}>
                Smart<span style={{ color: "#F59E0B" }}>-fiber</span>
              </span>
            </div>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium" style={{ background: "#FFFBEB", color: "#D97706" }}>
              KPN Partner
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
                    style={{ color: "#374151" }}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0886607775"
              className="flex items-center gap-2 text-sm font-semibold"
              style={{ color: "#F59E0B" }}
            >
              <Phone size={16} />
              088 660 7775
            </a>
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Terugbelverzoek
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {item.label}
                </p>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-3 pb-1 border-t border-gray-100 space-y-2">
            <a
              href="tel:0886607775"
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold"
              style={{ color: "#F59E0B" }}
            >
              <Phone size={16} />
              088 660 7775
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center text-sm"
            >
              Terugbelverzoek aanvragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
