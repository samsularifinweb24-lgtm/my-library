


import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Book {
  title: string;
  author: string;
  image: string;
  price: string;
}

const books: Book[] = [
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", image: "https://covers.openlibrary.org/b/id/7984916-L.jpg", price: "$20" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", image: "https://covers.openlibrary.org/b/id/6979861-L.jpg", price: "$18" },
  { title: "1984", author: "George Orwell", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg", price: "$15" },
  { title: "Pride and Prejudice", author: "Jane Austen", image: "https://covers.openlibrary.org/b/id/8226191-L.jpg", price: "$12" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", image: "https://covers.openlibrary.org/b/id/8225631-L.jpg", price: "$17" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "https://covers.openlibrary.org/b/id/7352161-L.jpg", price: "$14" }
];

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  dx: number;
  dy: number;
  color: string;
}

interface ProLibraryProps {
  darkMode: boolean;
}

export default function ProLibrary({ darkMode }: ProLibraryProps) {
  const [stars, setStars] = useState<Star[]>([]);
  const [cart, setCart] = useState<Book[]>([]);
  const [showCart, setShowCart] = useState(false);

  // Floating stars
  useEffect(() => {
    const generateStars = (): Star[] => Array.from({ length: 40 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      dx: Math.random() * 0.5 - 0.25,
      dy: Math.random() * 0.5 - 0.25,
      color: darkMode ? "rgba(255,255,150,0.8)" : "rgba(255,215,0,0.9)"
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

  const addToCart = (book: Book) => {
    setCart([...cart, book]);
    setShowCart(true);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen relative overflow-hidden p-4 md:p-6`}>
      
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
            opacity: star.opacity,
            pointerEvents: "none"
          }}
        />
      ))}

      {/* Animated Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        animate={{ x: [0, 15, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Professional Fantasy Library
      </motion.h1>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
        {books.map((book, index) => (
          <motion.div
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
            whileHover={{ scale: 1.05, y: -5, rotate: [0, 2, -2, 0] }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            onClick={() => addToCart(book)}
          >
            <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
            <div className={`absolute bottom-0 left-0 right-0 p-4 ${darkMode ? "bg-gradient-to-t from-black/80 to-transparent" : "bg-gradient-to-t from-black/70 to-transparent"}`}>
              <h2 className="text-lg font-bold text-white">{book.title}</h2>
              <p className="text-gray-200">{book.author}</p>
              <p className="text-yellow-300 font-bold">{book.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Cart */}
      <div className="fixed top-20 right-4 sm:right-6 z-50">
        <button
          onClick={() => setShowCart(!showCart)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mb-2"
        >
          Cart ({cart.length})
        </button>

        {showCart && (
          <div className="w-64 sm:w-72 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            {cart.length === 0 ? (
              <p className="p-4 text-gray-700 dark:text-gray-200">Cart is empty</p>
            ) : (
              <div className="flex flex-col">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 border-b border-gray-200 dark:border-gray-700">
                    <img src={item.image} alt={item.title} className="w-12 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.price}</p>
                    </div>
                    <button className="text-red-500 font-bold" onClick={() => removeFromCart(index)}>×</button>
                  </div>
                ))}
                <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center font-bold">
                  <span>Total:</span>
                  <span>
                    ${cart.reduce((sum, book) => sum + parseFloat(book.price.replace('$','')), 0)}
                  </span>
                </div>
                <button className="m-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

