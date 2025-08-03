const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md py-3 z-50">
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center gap-8 text-white text-md font-medium">
          <a
            href="#projects"
            className="hover:scale-105 transition-transform duration-200 hover:text-gray-300">
            Projects
          </a>
          <a
            href="#about"
            className="hover:scale-105 transition-transform duration-200 hover:text-gray-300">
            About Me
          </a>
          <a
            href="#contact"
            className="hover:scale-105 transition-transform duration-200 hover:text-gray-300 inline-block">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
