import { ARTICLES } from "@/lib/articles";
import { BentoCard } from "@/components/BentoCard";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logiciels — Comparatifs & Tests",
  description: "Comparatifs détaillés des meilleurs logiciels pour PME, freelances et entrepreneurs.",
};

const articles = ARTICLES.filter((a) => a.category === "logiciel");

export default function LogicielsPage() {
  return (
    <>
      <section className="pt-24 pb-4 container-lg">
        <div className="max-w-2xl">
          <span className="tag tag-logiciel mb-3 inline-block">🔧 Logiciels</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Logiciels & Outils Métier
          </h1>
          <p style={{ color: "var(--text-sec)" }}>
            CRM, ERP, emailing, hébergement, facturation — comparatifs détaillés des meilleurs outils.
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
