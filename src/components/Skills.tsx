import { Code, Database, Globe, Server, Zap, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: ["Python", "Java", "C", "C++", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "green",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "purple",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication"],
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "orange",
      skills: ["MongoDB", "Mongoose", "Git", "npm", "Vite"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* background particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-60 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-up backdrop-blur-sm border border-blue-500/30">
            <Zap size={16} />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up delay-200">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-300">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-white/20 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              ></div>

              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full animate-ping delay-500"></div>

              <div
                className={`relative w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
              >
                <category.icon className="text-white" size={28} />
                <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="group/skill relative px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-700 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-gray-900 cursor-default overflow-hidden"
                    style={{
                      animationDelay: `${index * 100 + skillIndex * 50}ms`,
                    }}
                  >
                    <span className="relative z-10">{skill}</span>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency section */}
        <div className="relative bg-white/10 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20 animate-fade-in-up delay-600">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-500 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-purple-400/30">
                <Cpu size={16} />
                <span>Proficiency Level</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">
                Technical Expertise
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  skill: "JavaScript/React",
                  level: 90,
                  color: "from-yellow-400 to-orange-500",
                },
                {
                  skill: "Python",
                  level: 85,
                  color: "from-blue-400 to-blue-600",
                },
                {
                  skill: "Node.js/Express",
                  level: 80,
                  color: "from-green-400 to-green-600",
                },
                { skill: "Java", level: 75, color: "from-red-400 to-red-600" },
                {
                  skill: "MongoDB/Mongoose",
                  level: 85,
                  color: "from-green-500 to-emerald-600",
                },
                {
                  skill: "C/C++",
                  level: 70,
                  color: "from-purple-400 to-purple-600",
                },
              ].map((item) => (
                <div
                  key={item.skill}
                  className="group space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {item.skill}
                    </span>
                    <span className="text-blue-500 font-bold text-lg">
                      {item.level}%
                    </span>
                  </div>
                  <div className="relative w-full bg-white/10 rounded-full h-4 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${item.color} h-4 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ width: `${item.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
