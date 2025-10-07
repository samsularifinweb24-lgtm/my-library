import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  scrollToSection: (id: string) => void;
  toggleTheme: () => void;
  darkMode: boolean;
  activeSection: string;
}

export function Navbar({ scrollToSection, toggleTheme, darkMode, activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "হোম", id: "home" },
    { name: "বইসমূহ", id: "books" },
    { name: "আমাদের সম্পর্কে", id: "about" },
    { name: "যোগাযোগ", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
            : "bg-gray-100/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between p-4 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        <h1 className="text-2xl font-bold text-teal-500">📚 Library</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`hover:text-teal-500 transition ${
                darkMode ? "text-white" : "text-gray-900"
              } ${activeSection === link.id ? "text-teal-500 font-semibold" : ""}`}
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="text-2xl hover:text-teal-500 transition"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl z-50"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`fixed inset-0 flex flex-col items-center justify-center space-y-6 ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            } text-2xl`}
          >
            {/* Links with staggered animation */}
            {links.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMenuOpen(false);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 * index, duration: 0.4, ease: "easeOut" }}
                className={`w-3/4 text-center py-4 rounded-xl font-semibold transition ${
                  activeSection === link.id
                    ? "bg-teal-500 text-white"
                    : darkMode
                    ? "text-white hover:bg-teal-500 hover:text-white"
                    : "text-gray-900 hover:bg-teal-500 hover:text-white"
                }`}
              >
                {link.name}
              </motion.button>
            ))}

            {/* Then Theme Toggle with slight delay */}
            <motion.button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * links.length, duration: 0.4, ease: "easeOut" }}
              className="w-3/4 text-center py-4 rounded-xl border border-teal-500 hover:bg-teal-500 hover:text-white transition font-semibold"
            >
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

