import { Article, CATEGORIES } from "@/lib/articles";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { BentoCard } from "@/components/BentoCard";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

interface Props {
  article: Article | undefined;
  related: Article[];
  categoryKey: "ia" | "business" | "logiciel" | "guide";
}

export function ArticleLayout({ article, related, categoryKey }: Props) {
  const cat = CATEGORIES[categoryKey];

  if (!article) {
    return (
      <div className="pt-24 container-lg text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Article introuvable</h1>
        <Link href={cat.href} className="btn-primary">← Retour</Link>
      </div>
    );
  }

  return (
    <>
      <article className="pt-24 container-lg">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6 flex-wrap" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-[var(--accent)]">Accueil</Link>
          <span>/</span>
          <Link href={cat.href} className="hover:text-[var(--accent)]">{cat.emoji} {cat.label}</Link>
          <span>/</span>
          <span className="truncate" style={{ color: "var(--text-sec)" }}>{article.title}</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl">
          <span className={`tag ${cat.tagClass} mb-3 inline-block`}>{article.tag}</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {article.title}
          </h1>
          <p className="text-lg mb-6" style={{ color: "var(--text-sec)" }}>
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm pb-8 border-b" style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}>
            <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
          </div>
        </div>

        {/* Content placeholder */}
        <div className="max-w-3xl py-12">
          <div className="p-8 rounded-2xl text-center" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
            <p className="text-lg font-medium mb-2">📝 Article en cours de rédaction</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Cet article sera bientôt disponible. Inscrivez-vous à la newsletter pour être notifié.
            </p>
          </div>
        </div>

        <Link href={cat.href} className="inline-flex items-center gap-2 text-sm font-medium mb-12 hover:text-[var(--accent)]" style={{ color: "var(--text-muted)" }}>
          <ArrowLeft size={14} /> Retour
        </Link>
      </article>

      {related.length > 0 && (
        <section className="container-lg section">
          <h2 className="section-title mb-6">Articles similaires</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {related.map((a) => <BentoCard key={a.slug} article={a} />)}
          </div>
        </section>
      )}

      <NewsletterCTA />
    </>
  );
}
