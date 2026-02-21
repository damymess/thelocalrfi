import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "TheLocalRFI — média indépendant de comparatifs et guides pour entrepreneurs et professionnels du digital.",
};

export default function AProposPage() {
  return (
    <div className="pt-24 container-lg max-w-3xl py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
        À propos de <span style={{ color: "var(--accent)" }}>TheLocalRFI</span>
      </h1>

      <div className="prose prose-lg max-w-none space-y-6" style={{ color: "var(--text-sec)" }}>
        <p>
          TheLocalRFI est un média indépendant dédié aux entrepreneurs, freelances et PME qui veulent
          faire les meilleurs choix technologiques pour leur activité.
        </p>

        <h2 className="text-xl font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}>
          Notre mission
        </h2>
        <p>
          Tester, comparer et expliquer les outils numériques de manière honnête et pragmatique.
          Pas de jargon, pas de pub déguisée — des avis basés sur une utilisation réelle.
        </p>

        <h2 className="text-xl font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}>
          Transparence
        </h2>
        <p>
          Certains liens de nos articles sont des liens affiliés. Cela signifie que nous recevons
          une commission si vous souscrivez via ces liens, sans coût supplémentaire pour vous.
          Cela nous permet de financer nos tests et de rester indépendants.
        </p>
        <p>
          Nos recommandations ne sont jamais influencées par les commissions. Nous recommandons
          uniquement les outils que nous utilisons ou que nous avons rigoureusement testés.
        </p>

        <h2 className="text-xl font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}>
          Contact
        </h2>
        <p>
          Une question, une suggestion, un partenariat ?{" "}
          <a href="mailto:contact@thelocalrfi.fr" style={{ color: "var(--accent)" }}>
            contact@thelocalrfi.fr
          </a>
        </p>
      </div>
    </div>
  );
}
