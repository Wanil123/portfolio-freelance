// src/components/BlogTeaser.jsx
// Homepage section that surfaces the blog so visitors don't only find it via
// the footer or the navbar. All 6 articles are featured by hand here; if the
// blog grows past ~10 articles this should switch to reading from a JSON manifest.
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { Reveal } from "./ui/Reveal";

// Unsplash images chosen per topic. The `?auto=format&fit=crop&w=800&h=450&q=80`
// query lets Unsplash's CDN deliver a sized, modern-format image (~50-90 KB).
// CSP allows `img-src https:` so no extra config needed.
const articles = {
  fr: [
    {
      slug: "cout-site-web-pme-montreal-2026",
      category: "Tarifs · Stratégie",
      title: "Combien coûte un site web pour PME à Montréal en 2026 ?",
      excerpt: "Prix réels par type de projet, ce qui fait varier la facture, et les frais cachés à connaître avant de signer.",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Calculatrice et documents financiers sur un bureau",
    },
    {
      slug: "vitrine-ecommerce-application-quel-choix",
      category: "Stratégie",
      title: "Site vitrine, e-commerce ou application : lequel pour ma PME ?",
      excerpt: "Comment choisir le bon type de site selon votre activité, votre budget et vos objectifs de conversion.",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Tableau de bord analytique avec graphiques",
    },
    {
      slug: "wordpress-vs-sur-mesure-pme",
      category: "Technique",
      title: "WordPress vs site sur mesure : pourquoi (et quand) migrer",
      excerpt: "Les vrais coûts cachés de WordPress sur 5 ans, et comment migrer sans perdre votre SEO.",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Code source affiché sur un écran d'ordinateur",
    },
    {
      slug: "chatbot-ia-pme-comment-ca-marche",
      category: "Automatisation IA",
      title: "Chatbot IA pour PME : comment ça marche vraiment (et combien ça coûte)",
      excerpt: "Tout ce qu'un chatbot moderne peut faire (et ne peut pas faire), les vrais tarifs mensuels.",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Représentation abstraite d'intelligence artificielle",
    },
    {
      slug: "agent-vocal-ia-receptionniste",
      category: "Automatisation IA",
      title: "Agent vocal IA : remplacer un réceptionniste pour 500 $/mois ?",
      excerpt: "Comment un agent IA répond au téléphone 24/7, prend des rendez-vous et qualifie les leads.",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Personne en conversation téléphonique avec casque",
    },
    {
      slug: "erreurs-seo-pme-quebecoises",
      category: "SEO local",
      title: "7 erreurs SEO qui font perdre des clients aux PME québécoises",
      excerpt: "Les fautes les plus courantes que je vois sur les sites de PME, et comment les corriger ce mois-ci.",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Barre de recherche Google sur écran",
    },
  ],
  en: [
    {
      slug: "website-cost-quebec-smb-2026",
      category: "Pricing · Strategy",
      title: "How much does a website cost for an SMB in Montreal in 2026?",
      excerpt: "Real pricing by project type, what drives the bill, and hidden fees to know before you sign.",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Calculator and financial documents on a desk",
    },
    {
      slug: "website-ecommerce-app-which-one",
      category: "Strategy",
      title: "Business website, e-commerce or app: which one for my SMB?",
      excerpt: "How to pick the right project type based on your business, budget and conversion goals.",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Analytics dashboard with charts",
    },
    {
      slug: "wordpress-vs-custom-smb",
      category: "Technical",
      title: "WordPress vs custom site: why (and when) to migrate",
      excerpt: "The real 5-year hidden costs of WordPress and how to migrate without losing your SEO.",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Source code on a computer screen",
    },
    {
      slug: "ai-chatbot-smb-how-it-works",
      category: "AI Automation",
      title: "AI chatbot for SMBs: how it really works (and what it costs)",
      excerpt: "What a modern chatbot can and can't do, real monthly pricing, and how to tell if you need one.",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Abstract AI representation",
    },
    {
      slug: "ai-voice-agent-receptionist",
      category: "AI Automation",
      title: "AI voice agent: replacing a receptionist for $500/month?",
      excerpt: "How an AI voice agent handles calls 24/7, books appointments and qualifies leads.",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Person on a phone call with headset",
    },
    {
      slug: "seo-mistakes-quebec-smb",
      category: "Local SEO",
      title: "7 SEO mistakes costing Quebec SMBs customers",
      excerpt: "The most common mistakes I see on SMB sites, and how to fix them this month without rebuilding.",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&h=450&q=80",
      imageAlt: "Google search bar on screen",
    },
  ],
};

// Stable fallback image (logo/brand cover) if an Unsplash URL ever fails to load.
const FALLBACK_IMG = "/og-cover.png";

const BlogCard = ({ article, blogRoot }) => {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <a
      href={`${blogRoot}${article.slug}/`}
      className="group h-full flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 hover:border-violet-400/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-800">
        <img
          src={imgFailed ? FALLBACK_IMG : article.image}
          alt={article.imageAlt}
          loading="lazy"
          decoding="async"
          width="800"
          height="450"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
        <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm border border-violet-500/40 text-violet-200 text-[11px] font-semibold uppercase tracking-wider">
          {article.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="text-base md:text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-violet-200 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            <Clock size={12} aria-hidden="true" />
            {article.readTime}
          </span>
          <span className="inline-flex items-center gap-1 text-sm text-violet-400 font-medium group-hover:gap-2 transition-all">
            <span className="sr-only">{article.title} — </span>
            <span aria-hidden="true">Lire</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
};

const BlogTeaser = () => {
  const { lang } = useLanguage();
  const list = articles[lang] || articles.fr;
  const blogRoot = lang === "fr" ? "/blog/" : "/blog/en/";

  return (
    <section id="blog-teaser" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <Reveal className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <BookOpen size={14} />
            <span>{lang === "fr" ? "Ressources" : "Resources"}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>Articles{" "}<span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">utiles</span></>
            ) : (
              <>Useful{" "}<span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">reads</span></>
            )}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Conseils concrets sur le web, l'IA et le SEO pour PME québécoises — basés sur des projets réels, sans blabla."
              : "Concrete advice on web, AI and SEO for Quebec SMBs — based on real projects, no fluff."}
          </p>
        </Reveal>

        {/* 6 articles in 2 columns × 3 rows on desktop (cards stay readable),
            2 cols on tablet, 1 col mobile. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-7 max-w-5xl mx-auto mb-10 md:mb-12">
          {list.map((article, idx) => (
            <Reveal key={article.slug} delay={Math.min(idx * 0.05, 0.2)}>
              <BlogCard article={article} blogRoot={blogRoot} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="text-center">
            <a
              href={blogRoot}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 text-white text-sm font-medium transition-all active:scale-95"
            >
              {lang === "fr" ? "Voir tous les articles" : "See all articles"}
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BlogTeaser;
