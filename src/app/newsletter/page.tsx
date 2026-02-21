import { NewsletterCTA } from "@/components/NewsletterCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — Recevez le meilleur chaque semaine",
  description: "Inscrivez-vous à la newsletter TheLocalRFI. 1 email par semaine avec les meilleurs outils, guides et opportunités business.",
};

export default function NewsletterPage() {
  return (
    <div className="pt-24">
      <section className="container-lg py-12 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          La newsletter des entrepreneurs <span style={{ color: "var(--accent)" }}>qui avancent</span>
        </h1>
        <p style={{ color: "var(--text-sec)" }}>
          Chaque semaine, on sélectionne les meilleurs outils, guides et opportunités pour vous faire gagner du temps et de l&apos;argent.
        </p>
      </section>
      <NewsletterCTA />
      <section className="container-lg pb-16 max-w-xl mx-auto">
        <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Ce que vous recevrez :
        </h2>
        <ul className="space-y-3">
          {[
            "🤖 Les nouveaux outils IA qui valent le coup",
            "🔧 Un comparatif logiciel détaillé",
            "💼 Une opportunité business analysée",
            "📚 Un guide pratique actionnable",
            "🎁 Des offres exclusives (affiliés)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-sec)" }}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
