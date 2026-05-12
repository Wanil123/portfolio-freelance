// src/App.jsx
import { useState, useEffect, useRef, lazy, Suspense } from "react";
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
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Dynamic lang attribute on <html> element
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      // Throttle with requestAnimationFrame
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        // Clamp to 0: iOS elastic scroll can give negative scrollY values
        const currentY = Math.max(0, window.scrollY);
        setIsScrolled(currentY > 50);

        const delta = currentY - lastScrollY.current;
        lastScrollY.current = currentY;

        // Always show near top; use delta threshold to avoid mobile jitter
        if (currentY <= 80) {
          setIsNavVisible(true);
        } else if (delta > 10) {
          setIsNavVisible(false); // scrolled down ≥10px
        } else if (delta < -5) {
          setIsNavVisible(true);  // scrolled up ≥5px
        }

        const sections = [
          "home",
          "services",
          "projects",
          "testimonials",
          "offers",
          "process",
          "skills",
          "about",
          "faq",
          "contact",
        ];

        for (const section of sections) {
          const el = document.getElementById(section);
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          if (rect.top <= 110 && rect.bottom >= 110) {
            setActiveSection(section);
            break;
          }
        }
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
    setIsNavVisible(true);
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
          isNavVisible={isNavVisible}
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
