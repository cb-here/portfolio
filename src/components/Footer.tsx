"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const [likes, setLikes] = useState(42);
  const [liked, setLiked] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleLike = () => {
    const wasLiked = liked;

    if (wasLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
      setShowThanks(true);
      setTimeout(() => setShowThanks(false), 3000);
    }

    setLiked(!wasLiked);
  };

  return (
    <footer className="w-full relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/10" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        <div className="flex flex-col items-center text-center space-y-10">

          {/* Social Links with enhanced styling */}
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/cb-here"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-gray-500/20"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.11.81 2.24 0 1.62-.015 2.925-.015 3.315 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-400/0 to-gray-600/0 group-hover:from-gray-400/10 group-hover:to-gray-600/10 transition-all duration-300" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/chandrabhushan-vishwakarma-323347352"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-[#0A66C2] transition-all duration-300 hover:border-[#0A66C2]/30 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9.09h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9.09h3.564v11.362zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/10 group-hover:to-blue-600/10 transition-all duration-300" />
            </motion.a>

            <motion.a
              href="https://instagram.com/cbh_ere"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-pink-500 transition-all duration-300 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-400/0 via-purple-400/0 to-orange-400/0 group-hover:from-pink-400/10 group-hover:via-purple-400/10 group-hover:to-orange-400/10 transition-all duration-300" />
            </motion.a>
          </div>

          {/* Like Button */}
          <motion.button
            onClick={handleLike}
            whileTap={{ scale: 0.93 }}
            className={`group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 overflow-hidden ${
              liked
                ? "bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white shadow-2xl shadow-pink-500/40 border border-pink-400/50"
                : "bg-white/5 text-gray-300 backdrop-blur-md hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 shadow-lg"
            }`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <motion.div
              animate={{ scale: liked ? [1, 1.3, 1] : 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Heart
                size={20}
                className={liked ? "fill-current" : ""}
                strokeWidth={2.5}
              />
            </motion.div>

            <motion.span
              key={likes}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="font-bold text-base relative z-10"
            >
              {likes} {likes === 1 ? 'Like' : 'Likes'}
            </motion.span>
          </motion.button>

          {/* Decorative divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Tech Stack */}
          <div className="text-gray-400 text-sm">
            <p className="flex items-center gap-2 flex-wrap justify-center">
              <span>Crafted with</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <span className="font-semibold">React</span>
              </span>
              <span>+</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <span className="font-semibold">TailwindCSS</span>
              </span>
            </p>
          </div>

          <AnimatePresence>
            {showThanks && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-2xl shadow-pink-500/50 flex items-center gap-2 border border-pink-400/50"
              >
                <span>Thanks for the love!</span>
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 2 }}
                >
                  <Heart className="fill-white" size={16} />
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}
