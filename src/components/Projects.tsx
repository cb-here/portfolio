import {
  ExternalLink,
  Github,
  Code,
  Globe,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";

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
      liveUrl: "https://task-tracker-kappa-lovat.vercel.app/",
      githubUrl: "https://github.com/cb-here/task-tracker",
    },
    {
      title: "Personal Learning Path",
      description:
        "A personal learning path application that helps users track their learning progress, set goals, and manage resources. Built with React.js, Node.js, Express, and MongoDB.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "XY Flow"],
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web Application",
      icon: Code,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      liveUrl: "https://personal-learning-path.vercel.app/",
      githubUrl: "https://github.com/cb-here/Personal-Learning-Path",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/10 to-blue-200/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-up">
            <Star size={16} />
            <span>Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up delay-200">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-300">
            A showcase of my recent work and the technologies I'm passionate
            about
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 overflow-hidden border border-white/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}>
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-500"></div>

                {/* Category badge */}
                <div
                  className={`absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-semibold border border-white/20 flex items-center space-x-2 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon size={14} />
                  <span>{project.category}</span>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <Sparkles size={16} className="text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 cursor-default"
                      style={{
                        animationDelay: `${index * 200 + techIndex * 100}ms`,
                      }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
                    <ExternalLink
                      size={16}
                      className="group-hover/btn:rotate-12 transition-transform duration-300"
                    />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-2xl hover:border-gray-800 hover:text-gray-800 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <Github
                      size={16}
                      className="group-hover/btn:rotate-12 transition-transform duration-300"
                    />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Enhanced View More Projects Button */}
        <div className="text-center mt-16 animate-fade-in-up delay-800">
          <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2 font-semibold">
              <span>View All Projects</span>
              <Zap
                size={18}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
