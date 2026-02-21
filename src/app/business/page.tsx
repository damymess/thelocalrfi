import { ARTICLES } from "@/lib/articles";
import { BentoCard } from "@/components/BentoCard";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business — Stratégies & Opportunités",
  description: "Stratégies business, revenus passifs et opportunités pour entrepreneurs ambitieux.",
};

const articles = ARTICLES.filter((a) => a.category === "business");

export default function BusinessPage() {
  return (
    <>
      <section className="pt-24 pb-4 container-lg">
        <div className="max-w-2xl">
          <span className="tag tag-business mb-3 inline-block">💼 Business</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Business & Entrepreneuriat
          </h1>
          <p style={{ color: "var(--text-sec)" }}>
            Gagner de l&apos;argent en ligne, side hustle, freelance — les vraies méthodes qui fonctionnent.
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
