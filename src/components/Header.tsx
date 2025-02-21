import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X} from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <header className="fixed w-full top-0 z-50 bg-white backdrop-blur-lg border-b border-white/20 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            CBHere
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="relative text-gray-700 hover:text-purple-600 transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/cb-here"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/chandrabhushan-vishwakarma-323347352"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:cbv934@gmail.com"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="/Chandrabhushan_Vishwakarma_Resume.pdf"
                download = "Chandrabhushan_Vishwakarma_Resume.pdf"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-user"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 18a3 3 0 1 0-6 0"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="13" r="2"/></svg>
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4 bg-white/80 backdrop-blur-lg rounded-lg p-6 shadow-lg"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
              <a
                href="https://github.com/cb-here"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/chandrabhushan-vishwakarma-323347352"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:cbv934@gmail.com"
                className="p-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}