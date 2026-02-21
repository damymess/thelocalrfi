import { ARTICLES } from "@/lib/articles";
import { ArticleLayout } from "@/components/ArticleLayout";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return ARTICLES.filter((a) => a.category === "guide").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug && a.category === "guide");
  return article ? { title: article.title, description: article.excerpt } : { title: "Article introuvable" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug && a.category === "guide");
  const related = ARTICLES.filter((a) => a.category === "guide" && a.slug !== slug).slice(0, 3);
  return <ArticleLayout article={article} related={related} categoryKey="guide" />;
}
