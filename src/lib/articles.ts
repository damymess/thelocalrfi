export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "ia" | "business" | "logiciel" | "guide";
  tag: string;
  image?: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

export const CATEGORIES = {
  ia: { label: "Outils IA", emoji: "🤖", href: "/outils-ia", tagClass: "tag-ia" },
  business: { label: "Business", emoji: "💼", href: "/business", tagClass: "tag-business" },
  logiciel: { label: "Logiciels", emoji: "🔧", href: "/logiciels", tagClass: "tag-logiciel" },
  guide: { label: "Guides", emoji: "📚", href: "/guides", tagClass: "tag-guide" },
};

// Placeholder articles — will be replaced by MDX content
export const ARTICLES: Article[] = [
  {
    slug: "outils-ia-gratuits-2026",
    title: "Les 10 meilleurs outils IA gratuits en 2026",
    excerpt: "De la génération de texte à la création d'images, les outils IA gratuits qui valent vraiment le détour cette année.",
    category: "ia",
    tag: "Comparatif",
    readTime: "8 min",
    date: "2026-02-21",
    featured: true,
  },
  {
    slug: "meilleur-hebergeur-web",
    title: "Meilleur hébergeur web 2026 : comparatif complet",
    excerpt: "Hostinger, OVH, o2switch, Infomaniak — on a testé les principaux hébergeurs pour vous donner un verdict clair.",
    category: "logiciel",
    tag: "Comparatif",
    readTime: "12 min",
    date: "2026-02-20",
    featured: true,
  },
  {
    slug: "prompts-chatgpt-entrepreneurs",
    title: "50 prompts ChatGPT pour entrepreneurs",
    excerpt: "Templates de prompts testés pour la rédaction, le marketing, la prospection et la gestion de projet.",
    category: "ia",
    tag: "Ressource",
    readTime: "10 min",
    date: "2026-02-19",
  },
  {
    slug: "gagner-argent-internet-2026",
    title: "Gagner de l'argent sur internet en 2026 : méthodes réelles",
    excerpt: "Pas de dropshipping miracle. Les vraies méthodes qui fonctionnent, testées et documentées.",
    category: "business",
    tag: "Guide",
    readTime: "15 min",
    date: "2026-02-18",
    featured: true,
  },
  {
    slug: "logiciel-facturation-auto-entrepreneur",
    title: "Logiciel de facturation auto-entrepreneur : le guide",
    excerpt: "Pennylane, Indy, Freebe, Abby — quel outil de facturation choisir quand on est indépendant ?",
    category: "logiciel",
    tag: "Comparatif",
    readTime: "9 min",
    date: "2026-02-17",
  },
  {
    slug: "creer-site-web-guide-complet",
    title: "Créer son site web en 2026 : le guide complet",
    excerpt: "De l'idée au site en ligne — tout ce que vous devez savoir pour créer un site professionnel.",
    category: "guide",
    tag: "Guide",
    readTime: "18 min",
    date: "2026-02-16",
  },
  {
    slug: "crm-pme-quel-outil-choisir",
    title: "CRM pour PME : quel outil choisir ?",
    excerpt: "Axonaut, Sellsy, HubSpot, ou un CRM sur mesure ? On compare tout pour votre équipe.",
    category: "logiciel",
    tag: "Comparatif",
    readTime: "11 min",
    date: "2026-02-15",
  },
  {
    slug: "alternative-chatgpt",
    title: "Les meilleures alternatives à ChatGPT en 2026",
    excerpt: "Claude, Gemini, Mistral, Perplexity — les alternatives qui valent le coup (et celles qui ne le valent pas).",
    category: "ia",
    tag: "Comparatif",
    readTime: "7 min",
    date: "2026-02-14",
  },
  {
    slug: "logiciel-emailing-comparatif",
    title: "Meilleur logiciel emailing : comparatif 2026",
    excerpt: "Brevo, Mailchimp, ConvertKit, MailerLite — on a testé les plateformes d'email marketing pour PME.",
    category: "logiciel",
    tag: "Comparatif",
    readTime: "13 min",
    date: "2026-02-13",
  },
  {
    slug: "complement-revenu-idees",
    title: "15 idées de complément de revenu en 2026",
    excerpt: "Du freelance à l'affiliation en passant par la création de contenu — des idées réalistes et testées.",
    category: "business",
    tag: "Guide",
    readTime: "10 min",
    date: "2026-02-12",
  },
];
