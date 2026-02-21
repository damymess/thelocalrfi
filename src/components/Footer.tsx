import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Catégories",
    links: [
      { label: "Outils IA", href: "/outils-ia" },
      { label: "Business", href: "/business" },
      { label: "Logiciels", href: "/logiciels" },
      { label: "Guides", href: "/guides" },
    ],
  },
  {
    title: "Populaire",
    links: [
      { label: "Meilleur hébergeur web", href: "/logiciels/meilleur-hebergeur-web" },
      { label: "Outils IA gratuits", href: "/outils-ia/outils-ia-gratuits" },
      { label: "Prompts ChatGPT", href: "/outils-ia/prompts-chatgpt" },
      { label: "CRM pour PME", href: "/logiciels/crm-pme" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "Divulgation affiliés", href: "/divulgation-affilies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t mt-16" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
      <div className="container-lg py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
              <span style={{ color: "var(--text)" }}>TheLocal</span>
              <span style={{ color: "var(--accent)" }}>RFI</span>
            </Link>
            <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
              Comparatifs, guides et ressources pour entrepreneurs et professionnels du digital.
            </p>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-[var(--accent)]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2026 TheLocalRFI. Certains liens sont des liens affiliés.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Fait avec ☕ en France
          </p>
        </div>
      </div>
    </footer>
  );
}
