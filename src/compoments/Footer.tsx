import { useEffect, useState } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  dx: number;
  dy: number;
  color: string;
}

interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = Array.from({ length: 15 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 50, // footer height area
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      dx: Math.random() * 0.5 - 0.25,
      dy: Math.random() * 0.1 - 0.05,
      color: darkMode ? "rgba(255,255,200,0.8)" : "rgba(255,215,0,0.9)"
    }));
    setStars(newStars);

    const animateStars = () => {
      setStars(prev =>
        prev.map(s => {
          let nx = s.x + s.dx;
          let ny = s.y + s.dy;
          if (nx < 0 || nx > window.innerWidth) nx = Math.random() * window.innerWidth;
          if (ny < 0 || ny > 50) ny = Math.random() * 50;
          return { ...s, x: nx, y: ny };
        })
      );
      requestAnimationFrame(animateStars);
    };

    animateStars();
  }, [darkMode]);

  return (
    <footer
      className={`relative text-center py-6 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-950 text-gray-400" : "bg-gray-200 text-gray-700"
      }`}
    >
      {/* Floating stars */}
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
            opacity: star.opacity,
            pointerEvents: "none"
          }}
        />
      ))}

      <p className="text-sm sm:text-base md:text-lg relative z-10">
        © 2025 Library | Developed by{" "}
        <span className="text-teal-500 font-semibold hover:text-teal-400 transition-colors duration-300 cursor-pointer">
          Samsul Arefin
        </span>
      </p>
    </footer>
  );
}
