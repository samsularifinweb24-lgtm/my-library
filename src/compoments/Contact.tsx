

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ তোমার বার্তা পাঠানো হয়েছে!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className={`py-20 px-6 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-b from-teal-50 to-white text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-teal-500"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          📬 যোগাযোগ করুন
        </motion.h2>
        <p
          className={`mb-10 text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          আমাদের সাথে যোগাযোগ করতে নিচের ফর্মটি পূরণ করুন — আমরা দ্রুত উত্তর দেবো।
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className={`rounded-2xl shadow-2xl p-8 space-y-6 max-w-xl mx-auto border backdrop-blur-md ${
            darkMode
              ? "bg-gray-800/80 border-gray-700"
              : "bg-white/80 border-gray-200"
          }`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }} // <- এখানে animate ব্যবহার, whileInView বাদ
          transition={{ duration: 0.6 }}
        >
          {/* Name Input */}
          <div className="relative">
            <FaUser
              className={`absolute left-4 top-3 text-lg ${
                darkMode ? "text-teal-400" : "text-teal-500"
              }`}
            />
            <input
              type="text"
              name="name"
              placeholder="নাম লিখুন"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-teal-400 transition ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-900"
              }`}
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope
              className={`absolute left-4 top-3 text-lg ${
                darkMode ? "text-teal-400" : "text-teal-500"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="ইমেইল লিখুন"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-teal-400 transition ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-900"
              }`}
            />
          </div>

          {/* Message Input */}
          <div className="relative">
            <FaCommentDots
              className={`absolute left-4 top-3 text-lg ${
                darkMode ? "text-teal-400" : "text-teal-500"
              }`}
            />
            <textarea
              name="message"
              placeholder="তোমার বার্তা লিখুন..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-teal-400 transition resize-none ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-900"
              }`}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
          >
            পাঠান ✉️
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
