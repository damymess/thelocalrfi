import { ARTICLES } from "@/lib/articles";
import { BentoCard } from "@/components/BentoCard";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outils IA — Comparatifs, Prompts & Ressources",
  description:
    "Les meilleurs outils d'intelligence artificielle testés et comparés. Prompts, alternatives ChatGPT, applications IA gratuites et payantes.",
};

const articles = ARTICLES.filter((a) => a.category === "ia");

export default function OutilsIAPage() {
  return (
    <>
      <section className="pt-24 pb-4 container-lg">
        <div className="max-w-2xl">
          <span className="tag tag-ia mb-3 inline-block">🤖 Outils IA</span>
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Intelligence Artificielle
          </h1>
          <p style={{ color: "var(--text-sec)" }}>
            Comparatifs, tutoriels, prompts et nouveautés — tout ce qu&apos;il faut savoir sur les outils IA en 2026.
          </p>
        </div>
      </section>

      <section className="container-lg section">
        {/* Featured */}
        {articles[0] && (
          <div className="mb-8">
            <BentoCard article={articles[0]} size="large" />
          </div>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.slice(1).map((a) => (
            <BentoCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
