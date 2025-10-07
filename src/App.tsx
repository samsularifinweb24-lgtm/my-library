


import { useState, useEffect } from "react";
import Books from "./compoments/Books";
import { Navbar } from "./compoments/Navbar";
import { Hero } from "./compoments/Hero";
import { About } from "./compoments/About";
import { Contact } from "./compoments/Contact";
import { Footer } from "./compoments/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home"); // ✅ activeSection added

  const toggleTheme = () => setDarkMode(prev => !prev);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // ✅ update activeSection when clicked
    }
  };

  // ✅ Update activeSection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>
      <Navbar 
        scrollToSection={scrollToSection} 
        toggleTheme={toggleTheme} 
        darkMode={darkMode} 
        activeSection={activeSection} // ✅ pass activeSection
      />
      <Hero darkMode={darkMode} />
      <Books darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
