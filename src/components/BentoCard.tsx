import Link from "next/link";
import { Article, CATEGORIES } from "@/lib/articles";

interface Props {
  article: Article;
  size?: "large" | "medium" | "small";
}

export function BentoCard({ article, size = "medium" }: Props) {
  const cat = CATEGORIES[article.category];
  const href = `${cat.href}/${article.slug}`;

  return (
    <Link href={href} className="bento-card group block">
      {/* Image placeholder */}
      <div
        className={`relative w-full bg-gradient-to-br from-[var(--bg-alt)] to-[var(--border)] flex items-center justify-center ${
          size === "large" ? "h-56 md:h-72" : size === "small" ? "h-32" : "h-40"
        }`}
      >
        <span className="text-4xl opacity-50">{cat.emoji}</span>
      </div>

      {/* Content */}
      <div className={`${size === "large" ? "p-6" : "p-4"}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className={`tag ${cat.tagClass}`}>{article.tag}</span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {article.readTime}
          </span>
        </div>
        <h3
          className={`font-bold leading-snug group-hover:text-[var(--accent)] transition-colors ${
            size === "large" ? "text-xl md:text-2xl" : size === "small" ? "text-sm" : "text-base"
          }`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {article.title}
        </h3>
        {size !== "small" && (
          <p className="mt-2 text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-sec)" }}>
            {article.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
