import { useState, useEffect } from "react";

interface NavbarProps {
  scrollToSection: (id: string) => void;
  toggleTheme: () => void;
  darkMode: boolean;
}

export function Navbar({ scrollToSection, toggleTheme, darkMode }: NavbarProps) {
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
            ? "bg-gray-900/90 shadow-lg"
            : "bg-gray-100/90 shadow-md"
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
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* Theme Toggle */}
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
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden ${
            darkMode ? "bg-gray-900/95" : "bg-gray-100/95"
          } p-4 space-y-3 text-center`}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setMenuOpen(false);
              }}
              className={`block w-full py-2 hover:text-teal-500 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="block w-full py-2 text-xl"
          >
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
}

