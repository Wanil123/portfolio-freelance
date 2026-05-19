// src/components/BlogTeaser.jsx
// Homepage section that surfaces the blog so visitors don't only find it via
// the footer or the navbar. Three articles are featured by hand here; if the
// blog grows past ~10 articles this should switch to reading from a JSON manifest.
import { useLanguage } from "../hooks/useLanguage";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const articlesFr = [
  {
    slug: "cout-site-web-pme-montreal-2026",
    category: "Tarifs · Stratégie",
    title: "Combien coûte un site web pour PME à Montréal en 2026 ?",
    excerpt: "Prix réels par type de projet, ce qui fait varier la facture, et les frais cachés à connaître avant de signer.",
    readTime: "10 min",
  },
  {
    slug: "wordpress-vs-sur-mesure-pme",
    category: "Technique",
    title: "WordPress vs site sur mesure : pourquoi (et quand) migrer",
    excerpt: "Les vrais coûts cachés de WordPress sur 5 ans, et comment migrer sans perdre votre SEO.",
    readTime: "9 min",
  },
  {
    slug: "agent-vocal-ia-receptionniste",
    category: "Automatisation IA",
    title: "Agent vocal IA : remplacer un réceptionniste pour 500 $/mois ?",
    excerpt: "Comment un agent IA répond au téléphone 24/7, prend des rendez-vous et qualifie les leads.",
    readTime: "7 min",
  },
];

const articlesEn = [
  {
    slug: "website-cost-quebec-smb-2026",
    category: "Pricing · Strategy",
    title: "How much does a website cost for an SMB in Montreal in 2026?",
    excerpt: "Real pricing by project type, what drives the bill, and hidden fees to know before you sign.",
    readTime: "10 min",
  },
  {
    slug: "wordpress-vs-custom-smb",
    category: "Technical",
    title: "WordPress vs custom site: why (and when) to migrate",
    excerpt: "The real 5-year hidden costs of WordPress and how to migrate without losing your SEO.",
    readTime: "9 min",
  },
  {
    slug: "ai-voice-agent-receptionist",
    category: "AI Automation",
    title: "AI voice agent: replacing a receptionist for $500/month?",
    excerpt: "How an AI voice agent handles calls 24/7, books appointments and qualifies leads.",
    readTime: "7 min",
  },
];

const BlogTeaser = () => {
  const { lang } = useLanguage();
  const articles = lang === "fr" ? articlesFr : articlesEn;
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
          {articles.map((article, idx) => (
            <Reveal key={article.slug} delay={Math.min(idx * 0.08, 0.2)}>
              <a
                href={`${blogRoot}${article.slug}/`}
                className="group h-full flex flex-col p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 hover:border-violet-400/50 transition-all hover:-translate-y-1"
              >
                <span className="inline-flex items-center self-start px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2.5 leading-snug group-hover:text-violet-200 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-violet-400 font-medium group-hover:gap-2 transition-all">
                    {lang === "fr" ? "Lire" : "Read"}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </a>
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
