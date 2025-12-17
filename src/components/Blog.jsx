// src/components/Blog.jsx
import { useTranslation } from "react-i18next";
import { Clock, ArrowRight, Sparkles, Tag, ExternalLink } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Blog = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const articles = [
    {
      id: 1,
      title: {
        fr: "Comment choisir une agence web : le guide complet",
        en: "How to choose a web agency: the complete guide",
      },
      excerpt: {
        fr: "Les critères essentiels pour sélectionner le bon partenaire pour votre projet web : portfolio, technologies, communication et budget.",
        en: "Essential criteria for selecting the right partner for your web project: portfolio, technologies, communication, and budget.",
      },
      category: {
        fr: "Guide",
        en: "Guide",
      },
      readTime: "10 min",
      source: "La Fabrique du Net",
      link: "https://www.lafabriquedunet.fr/guide-pour-choisir-la-meilleure-agence-de-creation-de-site-web/",
      // Image Unsplash: équipe travaillant sur ordinateurs
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=280&fit=crop&q=70&fm=webp",
      color: "from-violet-400 to-purple-500",
    },
    {
      id: 2,
      title: {
        fr: "React vs Vue.js en 2025 : comparaison complète",
        en: "React vs Vue.js in 2025: complete comparison",
      },
      excerpt: {
        fr: "Comparaison détaillée des deux frameworks JavaScript les plus populaires. Performances, écosystème, courbe d'apprentissage et cas d'usage.",
        en: "Detailed comparison of the two most popular JavaScript frameworks. Performance, ecosystem, learning curve, and use cases.",
      },
      category: {
        fr: "Technique",
        en: "Technical",
      },
      readTime: "12 min",
      source: "Devurai",
      link: "https://devurai.com/vue-vs-react-in-2025-which-framework-should-you-choose-for-your-front-end/",
      // Image Unsplash: code sur écran
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=280&fit=crop&q=70&fm=webp",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: 3,
      title: {
        fr: "Combien coûte un site web professionnel en 2025?",
        en: "How much does a professional website cost in 2025?",
      },
      excerpt: {
        fr: "Analyse des prix du marché, des facteurs qui influencent le coût et comment optimiser votre budget pour un ROI maximum.",
        en: "Market price analysis, factors that influence cost, and how to optimize your budget for maximum ROI.",
      },
      category: {
        fr: "Business",
        en: "Business",
      },
      readTime: "8 min",
      source: "Cyberperformance",
      link: "https://cyberperformance.ca/en/combien-coute-un-site-web-professionnel-en-2025/",
      // Image Unsplash: calculatrice et finances
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=280&fit=crop&q=70&fm=webp",
      color: "from-emerald-400 to-green-500",
    },
    {
      id: 4,
      title: {
        fr: "Les tendances web design 2025 à suivre",
        en: "Web design trends 2025 you need to know",
      },
      excerpt: {
        fr: "Découvrez les dernières tendances en matière de design web : IA, animations, accessibilité et expérience utilisateur.",
        en: "Discover the latest web design trends: AI, animations, accessibility, and user experience.",
      },
      category: {
        fr: "Design",
        en: "Design",
      },
      readTime: "7 min",
      source: "Awwwards",
      link: "https://www.awwwards.com/websites/web-design-trends/",
      // Image Unsplash: design UI/UX sur tablette
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=280&fit=crop&q=70&fm=webp",
      color: "from-pink-400 to-rose-500",
    },
    {
      id: 5,
      title: {
        fr: "SEO pour débutants : guide complet",
        en: "SEO for beginners: complete guide",
      },
      excerpt: {
        fr: "Les bases du référencement naturel pour améliorer la visibilité de votre site web sur Google et attirer plus de clients.",
        en: "SEO fundamentals to improve your website visibility on Google and attract more customers.",
      },
      category: {
        fr: "SEO",
        en: "SEO",
      },
      readTime: "15 min",
      source: "Moz",
      link: "https://moz.com/beginners-guide-to-seo",
      // Image Unsplash: recherche Google analytics
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=280&fit=crop&q=70&fm=webp",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 6,
      title: {
        fr: "Comment optimiser la vitesse de votre site web",
        en: "How to optimize your website speed",
      },
      excerpt: {
        fr: "Guide pratique pour améliorer les performances de votre site : Core Web Vitals, compression d'images, caching et plus.",
        en: "Practical guide to improve your site performance: Core Web Vitals, image compression, caching, and more.",
      },
      category: {
        fr: "Performance",
        en: "Performance",
      },
      readTime: "10 min",
      source: "web.dev",
      link: "https://web.dev/learn/performance",
      // Image Unsplash: speedometer / performance
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop&q=70&fm=webp",
      color: "from-teal-400 to-cyan-500",
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>{lang === "fr" ? "Ressources recommandées" : "Recommended resources"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Articles{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  utiles
                </span>
              </>
            ) : (
              <>
                Useful{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  articles
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Une sélection d'articles de qualité pour vous aider dans vos projets web."
              : "A selection of quality articles to help you with your web projects."}
          </p>
        </Reveal>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.1}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-full block"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent rounded-2xl blur-xl transition-opacity duration-500" />

                <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-violet-400/50 transition-all duration-300 flex flex-col">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-20 mix-blend-overlay`} />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm border border-white/10 text-xs font-medium text-white">
                        <Tag size={10} />
                        {article.category[lang]}
                      </span>
                    </div>

                    {/* External link indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
                        <ExternalLink size={14} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Source & Read time */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-medium text-violet-400">{article.source}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
                      {article.title[lang]}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-400 leading-relaxed flex-1 line-clamp-2 mb-4">
                      {article.excerpt[lang]}
                    </p>

                    {/* Read more link */}
                    <div className="mt-auto flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
                        {lang === "fr" ? "Lire l'article" : "Read article"}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <ExternalLink size={12} className="text-slate-600" />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
                  <Sparkles size={22} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">
                    {lang === "fr" ? "Besoin d'aide pour votre projet?" : "Need help with your project?"}
                  </p>
                  <p className="text-sm text-slate-400">
                    {lang === "fr"
                      ? "Discutons de vos besoins spécifiques"
                      : "Let's discuss your specific needs"}
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all whitespace-nowrap"
              >
                {lang === "fr" ? "Consultation gratuite" : "Free consultation"}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Blog;
