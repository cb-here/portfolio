import { Heart, ArrowUp, Sparkles, Code, Coffee } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-800 to-black text-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Enhanced Logo Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="group relative mb-4">
              <div className="text-3xl font-bold flex items-center justify-center md:justify-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="text-white" size={20} />
                </div>
                <span>
                  <span className="text-blue-400">cb</span>here
                </span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-gray-300 text-lg mb-4">
              Full Stack Developer & Software Engineer
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
              <Code size={16} />
              <span>Crafted with passion</span>
              <Coffee size={16} />
            </div>
          </div>

          {/* Enhanced Right Section */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            {/* Made with love */}
            <div className="flex items-center space-x-2 text-gray-300 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span>Made with</span>
              <Heart className="text-red-400 animate-pulse" size={16} />
              <span>by Chandrabhushan Vishwakarma</span>
            </div>

            {/* Enhanced Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-4 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-6 shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
              aria-label="Scroll to top">
              <ArrowUp
                size={20}
                className="group-hover:scale-110 transition-transform duration-300 relative z-10"
              />
            </button>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="relative inline-block">
            <p className="text-gray-400 text-lg">
              © {new Date().getFullYear()} cbhere.
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>Built with React & TypeScript</span>
            <span>•</span>
            <span>Styled with Tailwind CSS</span>
            <span>•</span>
            <span>Deployed with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
