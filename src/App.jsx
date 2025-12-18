// src/App.jsx
import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

// Lazy load components that are below the fold for better initial load performance
const TrustedBy = lazy(() => import("./components/TrustedBy.jsx"));
const Services = lazy(() => import("./components/Services.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const Process = lazy(() => import("./components/Process.jsx"));
const OffersSection = lazy(() => import("./components/OffersSection.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const FAQ = lazy(() => import("./components/FAQ.jsx"));
const Blog = lazy(() => import("./components/Blog.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const About = lazy(() => import("./components/About.jsx"));
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
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

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
          "testimonials",
          "offers",
          "process",
          "skills",
          "projects",
          "faq",
          "blog",
          "contact",
          "about",
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
          {/* Trust section */}
          <TrustedBy />

          {/* Services */}
          <Services scrollToSection={scrollToSection} />

          {/* Guarantees & Current Projects */}
          <Testimonials />

          {/* Pricing Packages */}
          <OffersSection scrollToSection={scrollToSection} />

          {/* Work Process */}
          <Process scrollToSection={scrollToSection} />

          {/* Tech Stack */}
          <Skills />

          {/* Portfolio */}
          <Projects />

          {/* FAQ */}
          <FAQ />

          {/* Blog / Resources */}
          <Blog />

          {/* Contact Form */}
          <Contact />

          {/* About */}
          <About />

          {/* Footer */}
          <Footer />

          {/* Floating Buttons */}
          <ScrollToTopButton />
          <WhatsAppButton />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
