import { useState } from "react";

const About = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      id="about"
      onMouseMove={handleMouseMove}
      className="group relative mt-4 sm:mt-6 z-10 flex flex-col md:flex-row w-full backdrop-blur-md rounded-2xl p-6 overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20">
      <div
        className="absolute inset-0 rounded-2xl opacity-100 transition duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.12), rgba(59,130,246,0.08))",
          maskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
        }}></div>

      <div className="w-full md:w-[35%] flex items-center justify-center">
        <img
          className="rounded-xl object-cover w-full max-h-[300px]"
          src="/image.png"
          alt="Profile"
        />
      </div>

      <div className="hidden md:block w-px bg-white/10 mx-4"></div>

      <div className="w-full md:w-[65%] flex flex-col justify-center">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#43e97b] bg-clip-text text-transparent mb-2">
          About Me
        </h3>
        <p className="shiny-text text-sm text-gray-400 leading-relaxed p-1">
          Hi, I'm Chandrabhushan Vishwakarma. I'm a dedicated Full Stack
          Developer with a Bachelor's degree in Information Technology. My
          journey in software development has been driven by curiosity and a
          passion for solving complex problems through elegant code.
          <br />
          My experience includes working with modern frameworks and databases to
          build scalable applications. I'm always eager to learn new
          technologies and stay updated with industry trends. When I'm not
          coding, you'll find me exploring new programming paradigms or
          contributing to open-source projects.
        </p>
        <div className="flex gap-3 mt-4 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs text-white/70 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300">
            Full Stack Developer
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs text-white/70 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300">
            Software Engineer
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
