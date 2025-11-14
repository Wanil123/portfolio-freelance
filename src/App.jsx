// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhyIndependent from "./components/WhyIndependent.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import OffersSection from "./components/OffersSection"; // ✅
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "services",
        "offers",   // ✅ on ajoute la section ici
        "process",
        "skills",
        "projects",
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />

      <Hero scrollToSection={scrollToSection} />
      <WhyIndependent />

      <Services scrollToSection={scrollToSection} />

      {/* 👇 NOUVELLE SECTION OFFRES / FORFAITS */}
      <OffersSection />

      <Process />

      <Skills />
      <Projects />
      <Contact />
      <About />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
