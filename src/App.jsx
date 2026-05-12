// src/App.jsx
import { useState, useEffect, lazy, Suspense } from "react";
import { useLanguage } from "./hooks/useLanguage";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// Lazy load components that are below the fold for better initial load performance
const Services = lazy(() => import("./components/Services.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const OffersSection = lazy(() => import("./components/OffersSection.jsx"));
const Process = lazy(() => import("./components/Process.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const ProgrammeVitrine = lazy(() => import("./components/ProgrammeVitrine.jsx"));
const FAQ = lazy(() => import("./components/FAQ.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton.jsx"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton.jsx"));

// Simple loading fallback
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  const { lang, i18n } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Dynamic lang attribute on <html> element
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // IntersectionObserver for active section — no scroll reflow, runs off main thread
  useEffect(() => {
    const sectionIds = [
      "home", "services", "projects", "testimonials",
      "offers", "process", "skills", "about", "faq", "contact",
    ];

    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });
        // Always pick the topmost visible section
        for (const id of sectionIds) {
          if (visible.has(id)) {
            setActiveSection(id);
            return;
          }
        }
      },
      { rootMargin: "-110px 0px -40% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll listener — only isScrolled (single cheap comparison, no DOM queries)
  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        setIsScrolled(window.scrollY > 50);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        {/* Custom Cursor - Desktop only */}
        <CustomCursor />

        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isScrolled={isScrolled}
        />

        <main>
          <Hero scrollToSection={scrollToSection} />

          <Suspense fallback={<SectionLoader />}>
            <Services scrollToSection={scrollToSection} />
            <Projects />
            <Testimonials />
            <OffersSection scrollToSection={scrollToSection} />
            <Process scrollToSection={scrollToSection} />
            <Skills />
            <About />
            <ProgrammeVitrine />
            <FAQ />
            <Contact />
            <Footer />
            <ScrollToTopButton />
            <WhatsAppButton />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
