import { useState } from "react";
import { Calendar, MapPin} from "lucide-react";

const Experience = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Remote",
      duration: "2023 - Present",
      description: [
        "Developed and maintained web applications using React.js, Node.js, and Django",
        "Built responsive user interfaces with modern CSS frameworks like Tailwind CSS",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with clients to deliver custom solutions meeting their business requirements"
      ],
      technologies: ["React.js", "Node.js", "Django", "MongoDB", "Python", "JavaScript"],
      type: "Full-time"
    },
    {
      title: "Web Development Projects",
      company: "Personal Projects",
      location: "Remote",
      duration: "2022 - Present",
      description: [
        "Created multiple full-stack applications including task management and service platforms",
        "Implemented user authentication, database design, and deployment strategies",
        "Utilized modern development tools and best practices for code quality",
        "Gained experience with version control, testing, and continuous integration"
      ],
      technologies: ["React.js", "Express.js", "MongoDB", "Vercel", "Git", "Postman"],
      type: "Projects"
    }
  ];

  return (
    <div
      id="experience"
      onMouseMove={handleMouseMove}
      className="group relative mt-4 sm:mt-6 z-10 flex flex-col w-full backdrop-blur-md rounded-2xl p-4 sm:p-6 overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20">
      <div
        className="absolute inset-0 rounded-2xl opacity-100 transition duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.12), rgba(59,130,246,0.08))",
          maskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(350px at ${position.x}px ${position.y}px, white, transparent)`,
        }}></div>

      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#43e97b] bg-clip-text text-transparent mb-6">
          Experience
        </h3>

        <div className="space-y-3 sm:space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index !== experiences.length && (
                <div className="absolute left-4 sm:left-6 top-12 w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-2 sm:left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-black"></div>
              
              <div className="ml-8 sm:ml-12 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h4>
                    <div className="flex items-center gap-2 text-blue-400 mb-1">
                      <span className="font-medium">{exp.company}</span>
                      <span className="px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end text-sm text-gray-400 mt-2 sm:mt-0">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></span>
                      <span className="shiny-text">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs text-white/70 hover:text-yellow-300 hover:border-yellow-400 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;