import { BentoCard } from "@/components/BentoCard";
import { SectionGrid } from "@/components/SectionGrid";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { ARTICLES } from "@/lib/articles";
import { TrendingUp, Zap, BookOpen, Search } from "lucide-react";

const featured = ARTICLES.filter((a) => a.featured);
const iaArticles = ARTICLES.filter((a) => a.category === "ia");
const businessArticles = ARTICLES.filter((a) => a.category === "business");
const logicielArticles = ARTICLES.filter((a) => a.category === "logiciel");
const guideArticles = ARTICLES.filter((a) => a.category === "guide");

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-24 pb-8 container-lg">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Outils, guides & stratégies
            <br />
            <span style={{ color: "var(--accent)" }}>pour entrepreneurs</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-sec)" }}>
            Comparatifs testés, guides pratiques et ressources concrètes pour digitaliser votre activité et gagner en productivité.
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-lg mx-auto mb-12">
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
            <Search size={18} style={{ color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Rechercher un outil, un guide..."
              className="flex-1 bg-transparent text-sm focus:outline-none"
              style={{ color: "var(--text)" }}
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: BookOpen, label: "Articles", value: "50+" },
            { icon: Zap, label: "Outils testés", value: "120+" },
            { icon: TrendingUp, label: "Lecteurs/mois", value: "10K+" },
            { icon: Search, label: "Comparatifs", value: "25+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-2xl"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div className="p-2 rounded-xl" style={{ background: "var(--accent-light)" }}>
                <stat.icon size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <div className="font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED BENTO ===== */}
      <section className="container-lg pb-8">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Large featured */}
          <div className="md:col-span-2">
            {featured[0] && <BentoCard article={featured[0]} size="large" />}
          </div>
          {/* Stacked small */}
          <div className="flex flex-col gap-4">
            {featured.slice(1, 4).map((a) => (
              <BentoCard key={a.slug} article={a} size="small" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORY SECTIONS ===== */}
      <SectionGrid categoryKey="ia" articles={iaArticles} layout="3col" />

      <div style={{ background: "var(--bg-alt)" }}>
        <SectionGrid categoryKey="business" articles={businessArticles} layout="1large+2small" />
      </div>

      <SectionGrid categoryKey="logiciel" articles={logicielArticles} layout="3col" />

      <div style={{ background: "var(--bg-alt)" }}>
        <SectionGrid categoryKey="guide" articles={guideArticles} layout="1large+2small" />
      </div>

      {/* ===== NEWSLETTER ===== */}
      <NewsletterCTA />
    </>
  );
}
