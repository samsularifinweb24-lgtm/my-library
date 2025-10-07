



// import { motion } from "framer-motion";
// import { FaBookOpen, FaUsers, FaLightbulb } from "react-icons/fa";

// interface AboutProps {
//   darkMode: boolean;
// }

// export function About({ darkMode }: AboutProps) {
//   return (
//     <section
//       id="about"
//       className={`relative py-20 px-6 overflow-hidden transition-colors duration-500 ${
//         darkMode
//           ? "bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
//           : "bg-gradient-to-b from-teal-50 via-white to-gray-100 text-gray-900"
//       }`}
//     >
//       {/* Background Shape Animation */}
//       <motion.div
//         className="absolute top-0 left-0 w-72 h-72 rounded-full bg-teal-500 opacity-20 blur-3xl"
//         animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
//         transition={{ repeat: Infinity, duration: 10 }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-blue-500 opacity-20 blur-3xl"
//         animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
//         transition={{ repeat: Infinity, duration: 12 }}
//       />

//       <div className="relative z-10 max-w-5xl mx-auto text-center">
//         <motion.h2
//           className="text-4xl md:text-5xl font-extrabold mb-8 text-teal-500"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           আমাদের সম্পর্কে
//         </motion.h2>

//         <motion.p
//           className={`max-w-3xl mx-auto text-lg leading-relaxed mb-12 ${
//             darkMode ? "text-gray-300" : "text-gray-700"
//           }`}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           আমাদের লাইব্রেরি একটি আধুনিক জ্ঞানভিত্তিক প্রতিষ্ঠান যেখানে ছাত্র,
//           শিক্ষক ও গবেষকরা বিভিন্ন বিষয়ে বই, প্রবন্ধ ও গবেষণা সামগ্রী পড়তে
//           পারেন। আমরা প্রতিদিন নতুন বই সংযোজন করি, যাতে জ্ঞানের আলো সবার মাঝে
//           ছড়িয়ে পড়ে।
//         </motion.p>

//         {/* Info Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
//           {/* Card 1 */}
//           <motion.div
//             className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 ${
//               darkMode ? "bg-gray-800/70" : "bg-white"
//             }`}
//             whileHover={{ scale: 1.03 }}
//           >
//             <FaBookOpen
//               className="text-5xl mx-auto mb-4 text-teal-500"
//             />
//             <h3 className="text-xl font-semibold mb-2">বই ও জ্ঞান</h3>
//             <p
//               className={`${
//                 darkMode ? "text-gray-400" : "text-gray-600"
//               }`}
//             >
//               আমাদের লাইব্রেরিতে নানা বিষয়ের বই পাওয়া যায় — ইতিহাস, সাহিত্য,
//               বিজ্ঞান, ধর্ম, এবং আরও অনেক কিছু।
//             </p>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 ${
//               darkMode ? "bg-gray-800/70" : "bg-white"
//             }`}
//             whileHover={{ scale: 1.03 }}
//           >
//             <FaUsers
//               className="text-5xl mx-auto mb-4 text-teal-500"
//             />
//             <h3 className="text-xl font-semibold mb-2">আমাদের পাঠকবৃন্দ</h3>
//             <p
//               className={`${
//                 darkMode ? "text-gray-400" : "text-gray-600"
//               }`}
//             >
//               আমাদের সদস্যরা দেশের বিভিন্ন প্রান্ত থেকে এসে এখানে পড়াশোনা ও
//               গবেষণা করে থাকেন।
//             </p>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div
//             className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 ${
//               darkMode ? "bg-gray-800/70" : "bg-white"
//             }`}
//             whileHover={{ scale: 1.03 }}
//           >
//             <FaLightbulb
//               className="text-5xl mx-auto mb-4 text-teal-500"
//             />
//             <h3 className="text-xl font-semibold mb-2">উদ্ভাবনী মনোভাব</h3>
//             <p
//               className={`${
//                 darkMode ? "text-gray-400" : "text-gray-600"
//               }`}
//             >
//               আমরা জ্ঞান, উদ্ভাবন ও প্রযুক্তির সমন্বয়ে শিক্ষার নতুন দিগন্ত
//               উন্মোচন করতে প্রতিশ্রুতিবদ্ধ।
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { FaBookOpen, FaUsers, FaLightbulb } from "react-icons/fa";

interface AboutProps {
  darkMode: boolean;
}

export function About({ darkMode }: AboutProps) {
  return (
    <section
      id="about"
      className={`relative py-24 px-6 sm:px-10 md:px-20 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
          : "bg-gradient-to-b from-teal-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 rounded-full bg-teal-500 opacity-20 blur-3xl"
        animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl"
        animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading with gradient */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          আমাদের সম্পর্কে
        </motion.h2>

        {/* Description */}
        <motion.p
          className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          আমাদের লাইব্রেরি একটি আধুনিক জ্ঞানভিত্তিক প্রতিষ্ঠান যেখানে ছাত্র, শিক্ষক ও
          গবেষকরা বিভিন্ন বিষয়ে বই, প্রবন্ধ ও গবেষণা সামগ্রী পড়তে পারেন। আমরা প্রতিদিন
          নতুন বই সংযোজন করি, যাতে জ্ঞানের আলো সবার মাঝে ছড়িয়ে পড়ে।
        </motion.p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: FaBookOpen,
              title: "বই ও জ্ঞান",
              desc: "আমাদের লাইব্রেরিতে নানা বিষয়ের বই পাওয়া যায় — ইতিহাস, সাহিত্য, বিজ্ঞান, ধর্ম, এবং আরও অনেক কিছু।",
            },
            {
              icon: FaUsers,
              title: "আমাদের পাঠকবৃন্দ",
              desc: "আমাদের সদস্যরা দেশের বিভিন্ন প্রান্ত থেকে এসে এখানে পড়াশোনা ও গবেষণা করে থাকেন।",
            },
            {
              icon: FaLightbulb,
              title: "উদ্ভাবনী মনোভাব",
              desc: "আমরা জ্ঞান, উদ্ভাবন ও প্রযুক্তির সমন্বয়ে শিক্ষার নতুন দিগন্ত উন্মোচন করতে প্রতিশ্রুতিবদ্ধ।",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className={`p-8 rounded-3xl shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105 ${
                darkMode ? "bg-gray-800/80" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <card.icon className="text-6xl mx-auto mb-4 text-teal-500" />
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
