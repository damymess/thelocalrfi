import { MetadataRoute } from "next";
import { ARTICLES, CATEGORIES } from "@/lib/articles";

const BASE = "https://thelocalrfi.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${BASE}/outils-ia`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE}/business`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE}/logiciels`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE}/guides`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE}/newsletter`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/a-propos`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const articlePages = ARTICLES.map((a) => {
    const cat = CATEGORIES[a.category];
    return {
      url: `${BASE}${cat.href}/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [...staticPages, ...articlePages];
}
