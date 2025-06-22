import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Zap,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  relative overflow-hidden text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-700"></div>

        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Circle */}
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-1 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-float group-hover:scale-110 transition-transform duration-500">
              CV
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>

            {/* Icons floating */}
            <div className="absolute -top-6 -right-6 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce delay-300">
              <Code2 size={16} className="text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-bounce delay-700">
              <Zap size={16} className="text-white" />
            </div>
            <div className="absolute top-0 -left-8 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center animate-pulse delay-500">
              <Sparkles size={12} className="text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
            Chandrabhushan
            <span className="block text-3xl sm:text-6xl mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up delay-200">
              Vishwakarma
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mt-6 animate-fade-in-up delay-300 font-light">
            <span className="text-blue-400 font-semibold">Full Stack Developer</span> &{" "}
            <span className="text-purple-400 font-semibold">Software Engineer</span>
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto my-8 leading-relaxed animate-fade-in-up delay-400">
            Crafting innovative digital solutions with{" "}
            <span className="text-blue-400 font-semibold">Python</span>,{" "}
            <span className="text-green-400 font-semibold">Java</span>,{" "}
            <span className="text-yellow-400 font-semibold">JavaScript</span>, and scalable web tech.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up delay-500">
            <a
              href="#projects"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-110 shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View My Work</span>
                <Sparkles className="group-hover:rotate-12 transition-transform duration-300" size={18} />
              </span>
            </a>

            <a
              href="#contact"
              className="group relative border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-500 transform hover:scale-110 shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get In Touch</span>
                <Mail className="group-hover:rotate-12 transition-transform duration-300" size={18} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-10 animate-fade-in-up delay-600">
            {[
              {
                icon: Github,
                href: "https://github.com/cb-here",
                color: "from-gray-700 to-gray-900",
                hoverColor: "hover:from-gray-600 hover:to-gray-800",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/chandrabhushan-vishwakarma-323347352",
                color: "from-blue-600 to-blue-800",
                hoverColor: "hover:from-blue-500 hover:to-blue-700",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:cbv934@gmail.com",
                color: "from-red-500 to-red-700",
                hoverColor: "hover:from-red-400 hover:to-red-600",
                label: "Email",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`group relative w-14 h-14 bg-gradient-to-r ${social.color} ${social.hoverColor} text-white rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-125 hover:rotate-12 shadow-lg`}
              >
                <social.icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce-slow">
            <a
              href="#about"
              className="group text-gray-400 hover:text-blue-400 transition-colors duration-300 flex flex-col items-center space-y-2"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <ChevronDown className="group-hover:scale-110 transition-transform duration-300" size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
