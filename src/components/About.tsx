import { motion } from "framer-motion";
import { Terminal, Boxes } from "lucide-react";
import Orb from "./common/Orb";

export default function About() {
  const skills = {
    frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
    ],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    tools: ["Git", "Docker", "VS Code", "Postman", "GitHub"],
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen border-t border-grey overflow-hidden py-20 md:py-24"
    >
      <div className="hidden sm:block absolute inset-0 z-0 pointer-events-auto">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pointer-events-none">
        <h2 className="text-sm sm:text-base md:text-lg mb-2 shiny-text">
          Get Me Know
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8 text-white">
          About Me
        </h3>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 mb-16">
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 pointer-events-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 group-hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 break-words">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Chandrabhushan
                  </span>
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  A passionate{" "}
                  <span className="text-white font-semibold">
                    Full Stack Developer
                  </span>{" "}
                  with a Bachelor's degree in Information Technology. I
                  transform ideas into powerful web applications.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                  My journey in software development is fueled by curiosity and
                  a love for clean, efficient code. I thrive on building
                  scalable solutions that make a real impact.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Beyond coding, I contribute to open-source projects,
                  experiment with emerging technologies, and share knowledge
                  with the developer community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pointer-events-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl blur-2xl" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 group-hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">
                  Technical Arsenal
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {Object.entries(skills).map(([category, items], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Boxes className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                      <h4 className="text-base sm:text-lg font-semibold text-white capitalize">
                        {category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-gray-300 hover:text-white hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 cursor-default backdrop-blur-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
