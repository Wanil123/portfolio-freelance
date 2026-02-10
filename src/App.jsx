// src/App.jsx
import { useState, useEffect, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
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
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Dynamic lang attribute on <html> element
  useEffect(() => {
    const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
    document.documentElement.lang = lang;
  }, [i18n.language]);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      // Throttle with requestAnimationFrame
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        setIsScrolled(window.scrollY > 50);

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
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
