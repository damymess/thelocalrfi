"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Outils IA", href: "/outils-ia", emoji: "🤖" },
  { label: "Business", href: "/business", emoji: "💼" },
  { label: "Logiciels", href: "/logiciels", emoji: "🔧" },
  { label: "Guides", href: "/guides", emoji: "📚" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--bg)]/80 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="container-lg flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
          <span style={{ color: "var(--text)" }}>TheLocal</span>
          <span style={{ color: "var(--accent)" }}>RFI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-sec)" }}
            >
              {link.emoji} {link.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-lg transition-colors hover:bg-[var(--bg-alt)]"
            aria-label="Rechercher"
          >
            <Search size={18} style={{ color: "var(--text-muted)" }} />
          </button>
          <Link
            href="/newsletter"
            className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-xs"
          >
            Newsletter
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--bg-alt)]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t px-4 py-4 space-y-3" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium py-2"
              style={{ color: "var(--text-sec)" }}
              onClick={() => setOpen(false)}
            >
              {link.emoji} {link.label}
            </Link>
          ))}
          <Link href="/newsletter" className="btn-primary w-full justify-center !text-sm" onClick={() => setOpen(false)}>
            S&apos;inscrire à la newsletter
          </Link>
        </div>
      )}
    </nav>
  );
}
