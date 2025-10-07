// import { useState, useEffect } from "react";
// import { Navbar } from "./compoments/Navbar";
// import { Hero } from "./compoments/Hero";

// import { About } from "./compoments/About";
// import { Contact } from "./compoments/Contact";
// import { Footer } from "./compoments/Footer";


// export default function App() {
//   const [darkMode, setDarkMode] = useState(true);

//   const toggleTheme = () => {
//     setDarkMode((prev) => !prev);
//   };

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div
//       className={`min-h-screen transition-colors duration-500 ${
//         darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       <Navbar
//         scrollToSection={scrollToSection}
//         toggleTheme={toggleTheme}
//         darkMode={darkMode}
//       />
//       <Hero darkMode={darkMode} />

//       <Books darkMode={darkMode} />
//       <About darkMode={darkMode} /> 
//       <Contact darkMode={darkMode} />

//       <Footer darkMode={darkMode} /> 
//     </div>
//   );
// }

import { useState, useEffect } from "react";
;
import Books from "./compoments/Books";
import { Navbar } from "./compoments/Navbar";
import { Hero } from "./compoments/Hero";
import { About } from "./compoments/About";
import { Contact } from "./compoments/Contact";
import { Footer } from "./compoments/Footer";


export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(prev => !prev);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>
      <Navbar scrollToSection={scrollToSection} toggleTheme={toggleTheme} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <Books darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
