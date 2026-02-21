import { ARTICLES } from "@/lib/articles";
import { BentoCard } from "@/components/BentoCard";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides — Tutoriels & Pas-à-pas",
  description: "Guides pratiques et tutoriels détaillés pour entrepreneurs et professionnels du digital.",
};

const articles = ARTICLES.filter((a) => a.category === "guide");

export default function GuidesPage() {
  return (
    <>
      <section className="pt-24 pb-4 container-lg">
        <div className="max-w-2xl">
          <span className="tag tag-guide mb-3 inline-block">📚 Guides</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Guides Pratiques
          </h1>
          <p style={{ color: "var(--text-sec)" }}>
            Des guides pas-à-pas pour créer votre site, lancer votre app, ou digitaliser votre activité.
          </p>
        </div>
      </section>
      <section className="container-lg section">
        {articles[0] && <div className="mb-8"><BentoCard article={articles[0]} size="large" /></div>}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.slice(1).map((a) => <BentoCard key={a.slug} article={a} />)}
        </div>
      </section>
      <NewsletterCTA />
    </>
  );
}
