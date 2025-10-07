

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// interface HeroProps {
//   darkMode: boolean;
// }

// interface ApiBook {
//   key: string;
//   title: string;
//   cover_i?: number;
//   author_name?: string[];
// }

// interface Book {
//   key: string;
//   title: string;
//   cover_i?: number;
//   author_name?: string[];
// }

// interface OpenLibraryResponse {
//   docs: ApiBook[];
// }

// export function Hero({ darkMode }: HeroProps) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setBooks([]);
//       return;
//     }

//     const fetchBooks = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}&limit=20`
//         );
//         const data: OpenLibraryResponse = await res.json();

//         const formattedBooks: Book[] = data.docs
//           .filter((b) => b.title)
//           .map((b) => ({
//             key: b.key,
//             title: b.title,
//             cover_i: b.cover_i,
//             author_name: b.author_name,
//           }));

//         setBooks(formattedBooks);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const debounce = setTimeout(fetchBooks, 500);
//     return () => clearTimeout(debounce);
//   }, [searchQuery]);

//   return (
//     <section
//       id="home"
//       className={`relative min-h-screen flex flex-col items-center justify-start py-20 px-4 transition-colors duration-500 overflow-hidden ${
//         darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       <motion.h1
//         className="text-4xl md:text-6xl font-extrabold mb-10 mt-20 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
//         animate={{ y: [0, -10, 0] }}
//         transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//       >
//         📚 আমাদের বই ঘর
//       </motion.h1>

//       {/* সার্চ বক্স */}
//       <div className="w-full max-w-md mb-8 z-10">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="যে বইটি খুঁজছেন লিখুন..."
//           className={`w-full px-4 py-3 rounded-xl shadow-md border text-center text-lg focus:outline-none focus:ring-2 ${
//             darkMode
//               ? "bg-gray-800 border-gray-700 text-white focus:ring-pink-500"
//               : "bg-white border-gray-300 focus:ring-indigo-400"
//           }`}
//         />
//       </div>

//       {/* লোডিং */}
//       {loading && <p className="text-pink-400 mb-4 animate-pulse">🔎 খোঁজা হচ্ছে...</p>}

//       {/* বইয়ের লিস্ট */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-6xl z-10">
//         {!loading && books.length === 0 && searchQuery && (
//           <p className="col-span-full text-gray-400 text-center text-lg">
//             😢 কোনো বই পাওয়া যায়নি
//           </p>
//         )}

//         {books.map((book) => (
//           <motion.div
//             key={book.key}
//             className={`p-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             }`}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img
//               src={
//                 book.cover_i
//                   ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
//                   : "https://via.placeholder.com/150x220?text=No+Cover"
//               }
//               alt={book.title}
//               className="w-full h-48 object-cover rounded-lg mb-3"
//             />
//             <h3 className="font-semibold text-sm md:text-base text-center line-clamp-2">
//               {book.title}
//             </h3>
//             {book.author_name && (
//               <p className="text-xs text-gray-400 text-center mt-1">
//                 {book.author_name.join(", ")}
//               </p>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  darkMode: boolean;
}

interface ApiBook {
  key: string;
  title: string;
  cover_i?: number;
  author_name?: string[];
}

interface Book {
  key: string;
  title: string;
  cover_i?: number;
  author_name?: string[];
}

interface OpenLibraryResponse {
  docs: ApiBook[];
}

export function Hero({ darkMode }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  // ফুলের পজিশন তৈরি
  const flowers = Array.from({ length: 20 }, () => ({
    id: Math.random().toString(36).substring(2),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 20 + Math.random() * 20,
    delay: Math.random() * 5,
  }));

  // সার্চ API
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setBooks([]);
      return;
    }

    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(
            searchQuery
          )}&limit=20`
        );
        const data: OpenLibraryResponse = await res.json();

        const formattedBooks: Book[] = data.docs
          .filter((b) => b.title)
          .map((b) => ({
            key: b.key,
            title: b.title,
            cover_i: b.cover_i,
            author_name: b.author_name,
          }));

        setBooks(formattedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchBooks, 500);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col items-center justify-start py-20 px-4 transition-colors duration-500 overflow-hidden ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* ভাসমান ফুল */}
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute text-pink-400 opacity-60 select-none pointer-events-none"
          style={{
            top: `${flower.y}%`,
            left: `${flower.x}%`,
            fontSize: `${flower.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 8 + flower.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🌸
        </motion.div>
      ))}

      {/* হেডিং */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-10 mt-20 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        📚 আমাদের বই ঘর
      </motion.h1>

      {/* সার্চ বক্স */}
      <div className="w-full max-w-md mb-8 z-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="যে বইটি খুঁজছেন লিখুন..."
          className={`w-full px-4 py-3 rounded-xl shadow-md border text-center text-lg focus:outline-none focus:ring-2 ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-white focus:ring-pink-500"
              : "bg-white border-gray-300 focus:ring-indigo-400"
          }`}
        />
      </div>

      {/* লোডিং */}
      {loading && (
        <p className="text-pink-400 mb-4 animate-pulse z-10">🔎 খোঁজা হচ্ছে...</p>
      )}

      {/* বইয়ের গ্রিড */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-6xl z-10">
        {!loading && books.length === 0 && searchQuery && (
          <p className="col-span-full text-gray-400 text-center text-lg">
            😢 কোনো বই পাওয়া যায়নি
          </p>
        )}

        {books.map((book) => (
          <motion.div
            key={book.key}
            className={`p-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : "https://via.placeholder.com/150x220?text=No+Cover"
              }
              alt={book.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-sm md:text-base text-center line-clamp-2">
              {book.title}
            </h3>
            {book.author_name && (
              <p className="text-xs text-gray-400 text-center mt-1">
                {book.author_name.join(", ")}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
