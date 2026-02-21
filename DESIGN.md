# TheLocalRFI.fr — Design System

## Inspiration
Croisement entre:
- **Wirecutter** — structure articles comparatifs, tableaux, verdict
- **Blog du Modérateur** — nav catégories FR, layout clean
- **Leptidigital** — newsletter-first, catégorisation logique
- **Verge** — hero bento grid moderne
- **Raycast blog** — bento light minimal premium

## Palette

### Couleurs
```
--bg:           #FAFAFA          Fond principal (blanc cassé)
--bg-alt:       #F5F5F0          Fond sections alternées
--card:         #FFFFFF          Cards
--text:         #18181B          Texte principal (zinc-900)
--text-sec:     #52525B          Texte secondaire (zinc-600)  
--text-muted:   #A1A1AA          Texte discret (zinc-400)
--accent:       #F97316          Orange vif (différent du bleu Nexus AI)
--accent-hover: #EA580C          Orange hover
--accent-light: #FFF7ED          Fond accent léger
--border:       #E4E4E7          Bordures (zinc-200)
--success:      #22C55E          Tags/badges positifs
```

### Pourquoi orange ?
- Différencie clairement de Nexus AI (bleu)
- Énergie, action, "call to action" naturel
- Utilisé par Product Hunt, Hacker News, Reddit — connote tech/startup
- Fonctionne bien avec le fond clair

## Typographie
```
--font-heading: 'Plus Jakarta Sans', sans-serif   (titres — géométrique, moderne)
--font-body:    'Inter', sans-serif                 (corps — ultra lisible)
--font-mono:    'JetBrains Mono', monospace         (code blocks)
```

### Échelle
- Display (hero):    48-64px / font-bold
- H1 (article):     36-42px / font-bold
- H2 (section):     28-32px / font-semibold
- H3 (sous-section): 20-24px / font-semibold
- Body:             16-17px / font-normal / leading-relaxed
- Small:            14px
- Caption:          12px

## Layout

### Homepage — Bento Grid
```
┌─────────────────────────────────────────┐
│  NAVBAR: Logo · Catégories · Search · 🔔│
├─────────────────────────────────────────┤
│                                         │
│  HERO BENTO GRID                        │
│  ┌──────────────┬──────────┐            │
│  │              │  Card 2  │            │
│  │   Featured   ├──────────┤            │
│  │   Article    │  Card 3  │            │
│  │   (large)    ├──────────┤            │
│  │              │  Card 4  │            │
│  └──────────────┴──────────┘            │
│                                         │
├─────────────────────────────────────────┤
│  🤖 OUTILS IA                           │
│  ┌────────┬────────┬────────┐           │
│  │ Card   │ Card   │ Card   │           │
│  └────────┴────────┴────────┘           │
├─────────────────────────────────────────┤
│  💼 BUSINESS                             │
│  ┌──────────────┬──────────┐            │
│  │   Large      │  Small   │            │
│  │              ├──────────┤            │
│  │              │  Small   │            │
│  └──────────────┴──────────┘            │
├─────────────────────────────────────────┤
│  🔧 LOGICIELS  (3 cols grid)            │
├─────────────────────────────────────────┤
│  📚 GUIDES     (2 cols + sidebar)       │
├─────────────────────────────────────────┤
│  📬 NEWSLETTER CTA (full width)         │
├─────────────────────────────────────────┤
│  FOOTER                                 │
└─────────────────────────────────────────┘
```

### Article Page
```
┌─────────────────────────────────────────┐
│  NAVBAR                                 │
├─────────────────────────────────────────┤
│  Breadcrumb: Accueil > Catégorie > ...  │
│                                         │
│  ┌───────────────────────┬──────────┐   │
│  │                       │ SIDEBAR  │   │
│  │  ARTICLE CONTENT      │          │   │
│  │                       │ - TOC    │   │
│  │  - Hero image         │ - News-  │   │
│  │  - Metadata (date,    │   letter │   │
│  │    temps lecture)      │ - Pop-   │   │
│  │  - Contenu MDX        │   ulaire │   │
│  │  - Tableaux compar.   │          │   │
│  │  - CTA affiliés       │          │   │
│  │  - Verdict box        │          │   │
│  │                       │          │   │
│  └───────────────────────┴──────────┘   │
│                                         │
│  ARTICLES SIMILAIRES (3 cards)          │
├─────────────────────────────────────────┤
│  FOOTER                                 │
└─────────────────────────────────────────┘
```

## Components

### Bento Card
```
┌──────────────────────┐
│  ┌──────────────────┐│
│  │   Image/Illus.   ││
│  └──────────────────┘│
│  TAG · 5 min lecture  │
│  Titre de l'article   │
│  Description courte...│
└──────────────────────┘
```
- Border-radius: 16px
- Padding: 0 (image edge-to-edge) ou 24px (text-only)
- Shadow: 0 1px 3px rgba(0,0,0,0.04)
- Hover: translateY(-2px) + shadow-md
- Border: 1px solid var(--border)

### Verdict Box (pour comparatifs)
```
┌──────────────────────────────────┐
│ 🏆 NOTRE VERDICT                  │
│                                    │
│ Meilleur global: Brevo            │
│ Meilleur gratuit: Mailchimp       │
│ Meilleur pour PME: Sendinblue     │
│                                    │
│ [Voir Brevo →]  [Voir Mailchimp →]│
└──────────────────────────────────┘
```
- Background: var(--accent-light)
- Border-left: 4px solid var(--accent)

### Comparison Table
```
┌────────────────┬──────┬──────┬──────┐
│ Fonctionnalité │ Outil│ Outil│ Outil│
│                │  A   │  B   │  C   │
├────────────────┼──────┼──────┼──────┤
│ Prix           │ 29€  │ 49€  │ 0€   │
│ Nb contacts    │ 10K  │ Illi.│ 500  │
│ Templates      │  ✅  │  ✅  │  ❌  │
│ IA intégrée    │  ✅  │  ❌  │  ❌  │
├────────────────┼──────┼──────┼──────┤
│ NOTE           │ 9/10 │ 7/10 │ 6/10 │
└────────────────┴──────┴──────┴──────┘
```

### Newsletter CTA
```
┌──────────────────────────────────────┐
│  📬                                   │
│  Restez informé chaque semaine        │
│                                       │
│  Les meilleurs outils, guides et      │
│  opportunités business — 1 email/sem  │
│                                       │
│  [email@...          ] [S'inscrire]   │
│                                       │
│  Rejoignez 1,200+ entrepreneurs       │
└──────────────────────────────────────┘
```

### Tag System
- 🤖 IA → orange pill
- 💼 Business → blue pill  
- 🔧 Logiciel → green pill
- 📚 Guide → purple pill
- ⭐ Comparatif → gold pill

## Navbar
```
Logo   | Outils IA | Business | Logiciels | Guides | 🔍 | Newsletter
```
- Fixed top, backdrop-blur
- Logo: "TheLocal" en Plus Jakarta Sans bold + "RFI" en accent orange
- Mobile: hamburger menu

## Responsive
- Desktop: max-w-7xl, sidebar visible
- Tablet: max-w-4xl, sidebar hidden, 2-col grids
- Mobile: single column, cards stack

## Animations
- Cards: hover scale + shadow (CSS only, pas de framer-motion pour la perf)
- Page transitions: none (SSG = instant navigation)
- Scroll reveal: intersection observer léger (pas de lib)

## Performance Targets
- Lighthouse: 95+ (SSG = easy)
- FCP < 1s
- LCP < 2s
- CLS < 0.05
- No JS frameworks for animations (CSS only)
