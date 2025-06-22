import  { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Mail, Sparkles, FileHeart } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
    { name: 'Resume', href: '/Chandrabhushan_Vishwakarma_Resume.pdf', icon: FileHeart, download: true },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-2xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="group relative">
            <div className="text-2xl font-bold text-gray-800 flex items-center space-x-2 group-hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="text-white" size={16} />
              </div>
              <span>
                <span className="text-blue-600">cb</span>here
              </span>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                download={item.download || false}
                className="group relative text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-blue-50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon size={16} className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <span className="font-medium">{item.name}</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-center rounded-full hover:bg-blue-50"
          >
            <div className="relative">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl animate-fade-in-up">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                download={item.download || false}
                onClick={() => setIsOpen(false)}
                className="group flex items-center space-x-3 py-3 px-6 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-xl mx-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 bg-gray-100 group-hover:bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <item.icon size={16} />
                </div>
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;