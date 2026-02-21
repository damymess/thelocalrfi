import Link from "next/link";
import { Article, CATEGORIES } from "@/lib/articles";
import { BentoCard } from "./BentoCard";
import { ArrowRight } from "lucide-react";

interface Props {
  categoryKey: "ia" | "business" | "logiciel" | "guide";
  articles: Article[];
  layout?: "3col" | "1large+2small";
}

export function SectionGrid({ categoryKey, articles, layout = "3col" }: Props) {
  const cat = CATEGORIES[categoryKey];

  if (articles.length === 0) return null;

  return (
    <section className="container-lg section">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="section-title">
            {cat.emoji} {cat.label}
          </h2>
          <p className="section-sub">Les derniers articles</p>
        </div>
        <Link
          href={cat.href}
          className="hidden sm:inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--accent)]"
          style={{ color: "var(--text-muted)" }}
        >
          Tout voir <ArrowRight size={14} />
        </Link>
      </div>

      {layout === "1large+2small" ? (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <BentoCard article={articles[0]} size="large" />
          </div>
          <div className="flex flex-col gap-4">
            {articles.slice(1, 3).map((a) => (
              <BentoCard key={a.slug} article={a} size="small" />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.slice(0, 3).map((a) => (
            <BentoCard key={a.slug} article={a} size="medium" />
          ))}
        </div>
      )}
    </section>
  );
}
