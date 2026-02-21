# TheLocalRFI.fr — Project Memory

## Domain
- **URL:** thelocalrfi.fr
- **DR (Ahrefs):** 63
- **Backlinks:** 3.2K (100% dofollow)
- **Linking websites:** 2.9K domaines uniques
- **Backlink sources:** Business/education resource sites (DR 65+ — WillowBend, MittenKeepers)
- **Historique:** Ancien site de contenu IPTV/casino (gris). Domaine expiré racheté pour le DR.
- **WHOIS:** Fraîchement ré-enregistré (fév 2026)
- **Ranked keywords actuels:** 0 (domaine en hibernation)

## Business Model
**Blog d'affiliation tech/business + machine à leads pour Nexus AI**

### Revenue Streams
1. **Affiliation SaaS** — liens d'affiliation vers outils (hébergeurs, CRM, emailing, IA, facturation)
2. **Lead gen Nexus AI** — articles "comment créer un site web" / "crm pme" renvoient vers nexus-ai.store
3. **Display ads** — Google AdSense / Ezoic une fois le trafic suffisant (>10K pages vues/mois)
4. **Newsletter sponsorisée** — à terme, sponsors dans la newsletter hebdo

### Target Revenue (6 mois)
- Mois 1-2: 0€ (construction + indexation)
- Mois 3-4: 100-500€/mois (premières affiliations + AdSense)
- Mois 6+: 1 000-3 000€/mois (trafic organique + affiliations récurrentes)

## Modèles de référence
- **Wirecutter (NYT)** — articles "meilleur X" ultra-détaillés avec tableaux comparatifs → affiliation
- **Blog du Modérateur (BDM)** — blog tech/digital FR, catégories Web/Marketing/Social/Tech/Tools
- **Leptidigital** — média marketing digital FR, comparatifs outils, newsletter
- **Frandroid** — tech FR, guides d'achat, comparatifs → affiliation e-commerce
- **Authority Hacker** — modèle content site affiliation, strategy "topical authority"

## Keyword Opportunities (DataForSEO, FR)

### Tier 1 — Volume monstre (>5K/mois)
| Keyword | Vol/mois | CPC € | Monétisation |
|---------|----------|--------|-------------|
| formation ia | 33 100 | 5.64 | Affiliation Udemy/Coursera |
| intelligence artificielle gratuit | 18 100 | 0.74 | Comparatifs outils IA gratuits |
| gagner argent internet | 9 900 | 2.46 | Affiliation plateformes |
| prompt chatgpt | 8 100 | 2.74 | Ebook/templates prompts |
| complement de revenu | 4 400 | 1.16 | Affiliation freelance/side hustle |
| application ia | 4 400 | 1.51 | Comparatifs apps IA |

### Tier 2 — CPC élevé = affiliations lucratives
| Keyword | Vol/mois | CPC € | Monétisation |
|---------|----------|--------|-------------|
| logiciel facturation auto entrepreneur | 1 900 | 5.64 | Affiliation Pennylane/Indy (50-100€/signup) |
| logiciel emailing | 1 000 | 18.25 | Affiliation Brevo/Mailchimp (200-500€/conv) |
| meilleur hebergeur wordpress | 720 | 12.40 | Affiliation Hostinger/OVH (60-100€/signup) |
| outil seo gratuit | 720 | 4.17 | Comparatifs → affiliation SEMrush/Ahrefs |
| creer application mobile | 590 | 9.77 | → Renvoyer vers Nexus AI |
| affiliation marketing | 2 900 | 4.74 | Meta-niche (parler d'affil = faire de l'affil) |

### Tier 3 — Lead gen Nexus AI
| Keyword | Vol/mois | Destination |
|---------|----------|-------------|
| comment creer un site web | 1 300 | → nexus-ai.store |
| creation site web artisan | 850 | → nexus-ai.store/ads/artisan |
| erp pme | 880 | → nexus-ai.store/ads/erp |
| crm pme | 1 000 | → nexus-ai.store/ads/crm |

## Architecture du site

### Stack
- **Framework:** Next.js 15 (App Router, SSG pour perf)
- **Styling:** Tailwind CSS
- **CMS:** MDX (articles en markdown, pas de DB)
- **Deploy:** Coolify (même infra que Nexus AI)
- **Analytics:** Umami (même instance)
- **Newsletter:** Resend (même API key)

### Pages structure
```
/                           → Homepage (bento grid hero)
/outils-ia/                 → Hub IA (pillar page)
/outils-ia/[slug]           → Articles IA individuels
/business/                  → Hub Business/Entrepreneur
/business/[slug]            → Articles business
/logiciels/                 → Hub Comparatifs logiciels
/logiciels/[slug]           → Articles comparatifs
/guides/                    → Hub Guides pratiques
/guides/[slug]              → Guides détaillés
/newsletter                 → Inscription newsletter
/a-propos                   → About page
```

### Content Categories (4 piliers)
1. **🤖 Outils IA** — comparatifs, prompts, tutoriels, nouveautés
2. **💼 Business** — gagner argent en ligne, side hustle, freelance, formation
3. **🔧 Logiciels** — comparatifs CRM/ERP/emailing/hébergeurs/facturation
4. **📚 Guides** — créer un site web, lancer une app, digitaliser son business

### Homepage — Bento Grid Light
Design inspiré de Wirecutter + BDM avec une touche premium bento:
- **Hero:** Titre + description + search bar + bento grid de 4-6 articles featured
- **Sections:** Chaque catégorie en grille bento (card grande + 2-3 petites)
- **Sidebar sticky:** Newsletter signup + articles populaires
- **Footer:** Catégories + mentions + liens affiliés disclosures

### Design System
- **Mode:** Light (crème/blanc, comme Nexus AI mais identité propre)
- **Typo titres:** Instrument Serif (ou similaire serif premium)
- **Typo body:** Inter ou Outfit
- **Couleur accent:** À définir (pas bleu pour différencier de Nexus AI)
- **Cards:** Bento style, coins arrondis 16px, ombres subtiles
- **Images:** Illustrations/icônes pour chaque article (pas de photos stock)

## Content Strategy

### Phase 1 — Pillar Pages (semaine 1-2)
4 pillar pages hub (une par catégorie) qui linkent vers les articles

### Phase 2 — Money Articles (semaine 2-6)
Articles qui génèrent directement du revenu:
1. "Les 10 meilleurs outils IA gratuits en 2026"
2. "Meilleur hébergeur web 2026 : comparatif complet"
3. "Logiciel de facturation auto-entrepreneur : le guide"
4. "Meilleur logiciel emailing : comparatif 2026"
5. "Prompt ChatGPT : 50 templates pour entrepreneurs"
6. "Gagner de l'argent sur internet en 2026 : méthodes réelles"
7. "CRM pour PME : quel outil choisir ?"
8. "Créer son site web en 2026 : le guide complet"
9. "Affiliation marketing : guide débutant"
10. "Alternative ChatGPT : les meilleurs outils IA"

### Phase 3 — Supporting Content (semaine 4-8)
Articles de support qui renforcent l'autorité topique + maillage interne

### Phase 4 — Newsletter + Scale (mois 3+)
Newsletter hebdo + augmentation à 2-3 articles/semaine

## Affiliation Programs to Join
- **Hostinger** — 60-150€/signup, cookie 30j
- **Brevo** — 5€/signup ou 100€/compte payant
- **Pennylane / Indy** — 50-100€/signup
- **Jasper AI** — 30% récurrent
- **SEMrush** — $200/subscription, $10/trial
- **Amazon Associates** — 1-10% selon catégorie
- **Udemy** — commission sur ventes de cours

## Decisions
- MDX over headless CMS — plus rapide, pas de DB, versionné en git
- Même Coolify infra — pas de coût supplémentaire
- Pas de lien visible vers Nexus AI sur la homepage — garder l'identité séparée
- Affiliate disclosure obligatoire sur chaque page avec liens affiliés
