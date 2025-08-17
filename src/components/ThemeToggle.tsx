import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm 
                 border border-white/20 dark:border-gray-700 
                 hover:bg-white/20 dark:hover:bg-black/30 
                 transition-all duration-300 ease-in-out
                 hover:scale-110 hover:shadow-lg
                 focus:outline-none focus:ring-2 focus:ring-purple-500/50
                 sm:p-3"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 sm:w-6 sm:h-6">
        {/* Sun Icon */}
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out transform
                     ${isDark 
                       ? 'opacity-0 scale-75 rotate-90' 
                       : 'opacity-100 scale-100 rotate-0 animate-sun-rotate'
                     }`}
        >
          <svg
            className="w-full h-full text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </div>

        {/* Moon Icon */}
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out transform
                     ${isDark 
                       ? 'opacity-100 scale-100 rotate-0 animate-moon-slide' 
                       : 'opacity-0 scale-75 -rotate-90'
                     }`}
        >
          <svg
            className="w-full h-full text-blue-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-20 
                      bg-gradient-to-r from-purple-500 to-pink-500 
                      transition-opacity duration-300"></div>
    </button>
  );
};

export default ThemeToggle;