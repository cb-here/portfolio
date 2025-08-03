import { ExternalLink, Github, Code, Globe } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Quickserve",
      description:
        "A web application built with Django, HTML, CSS, and JavaScript to connect service providers with end users. Features include user authentication, service listings, booking system, and role-based access.",
      technologies: ["Django", "HTML", "CSS", "JavaScript"],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Service Platform",
      icon: Globe,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      glowColors: ["rgba(59,130,246,0.2)", "rgba(6,182,212,0.2)"],
      liveUrl: "https://quickserve-v689.onrender.com/",
      githubUrl: "https://github.com/cb-here/QuickServe",
    },
    {
      title: "Task Tracer",
      description:
        "A task management application built with React.js, Node.js, Express, and MongoDB. It allows users to create, update, and track tasks efficiently, with features like status updates and deadlines.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web Application",
      icon: Code,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      glowColors: ["rgba(34,197,94,0.2)", "rgba(16,185,129,0.2)"],
      liveUrl: "https://task-tracker-kappa-lovat.vercel.app/",
      githubUrl: "https://github.com/cb-here/task-tracker",
    },
    {
      title: "Personal Learning Path",
      description:
        "A personal learning path application that helps users track their learning progress, set goals, and manage resources. Built with React.js, Node.js, Express, and MongoDB.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "XY Flow",
      ],
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web Application",
      icon: Code,
      color: "amber",
      gradient: "from-amber-400 to-yellow-500",
      glowColors: ["rgba(251,191,36,0.2)", "rgba(253,224,71,0.2)"],
      liveUrl: "https://personal-learning-path.vercel.app/",
      githubUrl: "https://github.com/cb-here/Personal-Learning-Path",
    },
  ];

  const [hoverStates, setHoverStates] = useState(
    projects.map(() => ({ x: 0, y: 0 }))
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverStates((prev) => {
      const newStates = [...prev];
      newStates[index] = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      return newStates;
    });
  };

  return (
    <div>
      <div className="pt-10 sm:pt-12 md:pt-20 pb-12 sm:pb-16">
        <div className="text-center pb-6">
          <section id="projects">
            <h2 className="text-xl font-semibold text-center text-amber-100">
              My Recent Projects
            </h2>
          </section>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseMove={(e) => handleMouseMove(e, index)}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20 w-full mx-auto max-w-4xl flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } p-4`}>
              <div
                className="absolute inset-0 pointer-events-none transition duration-500 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${project.glowColors[0]}, ${project.glowColors[1]})`,
                  maskImage: `radial-gradient(350px at ${hoverStates[index].x}px ${hoverStates[index].y}px, white, transparent)`,
                  WebkitMaskImage: `radial-gradient(350px at ${hoverStates[index].x}px ${hoverStates[index].y}px, white, transparent)`,
                }}></div>

              <div className="relative z-10 w-full md:w-1/2 h-56 md:h-auto rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                <img
                  className="object-cover w-full h-full"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="relative z-10 flex flex-col justify-between md:w-1/2 px-4 mt-4 md:mt-0">
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#43e97b] bg-clip-text text-transparent mb-2">
                    {project.title}
                  </h3>
                  <p className="shiny-text text-sm text-gray-400">
                    {project.description}
                  </p>
                  <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">
                    Tech Stack
                  </p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs text-white/70 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-white/5 px-3 py-1 rounded-md backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:text-yellow-300 text-white/70 text-xs">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="font-medium hidden md:inline text-xs">
                      Live Demo
                    </span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-white/5 px-3 py-1 rounded-md backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:text-yellow-300 text-white/70 text-xs">
                    <Github className="w-3.5 h-3.5" />
                    <span className="font-medium hidden md:inline text-xs">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
