


import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  color: string;
}

interface FloatingBook {
  x: number;
  y: number;
  dx: number;
  dy: number;
  image: string;
  size: number;
}

interface HeroProps {
  darkMode: boolean;
}

const floatingBooksData = [
  "https://covers.openlibrary.org/b/id/7984916-L.jpg",
  "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  "https://covers.openlibrary.org/b/id/8226191-L.jpg",
];

export function Hero({ darkMode }: HeroProps) {
  const [stars, setStars] = useState<Star[]>([]);
  const [floatingBooks, setFloatingBooks] = useState<FloatingBook[]>([]);

  // Generate floating stars
  useEffect(() => {
    const generateStars = (): Star[] =>
      Array.from({ length: 30 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25,
        color: darkMode ? "rgba(255,255,150,0.8)" : "rgba(255,215,0,0.9)",
      }));
    setStars(generateStars());

    const animateStars = () => {
      setStars(prev =>
        prev.map(s => {
          let nx = s.x + s.dx;
          let ny = s.y + s.dy;
          if (nx < 0 || nx > window.innerWidth) nx = Math.random() * window.innerWidth;
          if (ny < 0 || ny > window.innerHeight) ny = Math.random() * window.innerHeight;
          return { ...s, x: nx, y: ny };
        })
      );
      requestAnimationFrame(animateStars);
    };

    animateStars();
  }, [darkMode]);

  // Generate floating books
  useEffect(() => {
    const generateBooks = (): FloatingBook[] =>
      floatingBooksData.map(img => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: Math.random() * 0.7 - 0.35,
        dy: Math.random() * 0.7 - 0.35,
        image: img,
        size: Math.random() * 50 + 40,
      }));
    setFloatingBooks(generateBooks());

    const animateBooks = () => {
      setFloatingBooks(prev =>
        prev.map(b => {
          let nx = b.x + b.dx;
          let ny = b.y + b.dy;
          if (nx < 0 || nx > window.innerWidth) nx = Math.random() * window.innerWidth;
          if (ny < 0 || ny > window.innerHeight) ny = Math.random() * window.innerHeight;
          return { ...b, x: nx, y: ny };
        })
      );
      requestAnimationFrame(animateBooks);
    };

    animateBooks();
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Floating Stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            opacity: 0.8,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Floating Books */}
      {floatingBooks.map((book, index) => (
        <img
          key={index}
          src={book.image}
          alt="floating book"
          style={{
            position: "absolute",
            top: book.y,
            left: book.x,
            width: book.size,
            height: book.size * 1.5,
            objectFit: "cover",
            borderRadius: "5px",
            pointerEvents: "none",
            opacity: 0.8,
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        />
      ))}

      {/* Floating Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 leading-tight z-10 relative"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        স্বাগতম আমাদের <span className="text-teal-400">লাইব্রেরিতে</span>
      </motion.h1>

      {/* Floating Subtext */}
      <motion.p
        className={`max-w-xs sm:max-w-md md:max-w-lg text-sm sm:text-base md:text-lg lg:text-xl mb-6 z-10 relative ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        এখানে আপনি পছন্দের বই পড়তে, ধার নিতে এবং জ্ঞান অর্জন করতে পারবেন।
      </motion.p>

      {/* Animated Button */}
      <motion.button
        className="mt-6 bg-teal-500 hover:bg-teal-600 px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-white font-semibold shadow-lg shadow-teal-300/50 transition-transform duration-300 z-10 relative"
        whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
        whileTap={{ scale: 0.95 }}
      >
        বই দেখুন
      </motion.button>
    </section>
  );
}
