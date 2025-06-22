import {
  GraduationCap,
  Calendar,
  Award,
  Sparkles,
  Trophy,
  Target,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-up">
            <Sparkles size={16} />
            <span>About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up delay-200">
            Passionate About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-300">
            A dedicated developer with a strong foundation in computer science
            and hands-on experience in modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced Personal info */}
          <div className="space-y-8 animate-fade-in-up delay-400">
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-lg"></div>
              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Personal Information
                  </h3>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: GraduationCap,
                      title: "Education",
                      desc: "Bachelor of Science in Information Technology",
                      color: "blue",
                    },
                    {
                      icon: Award,
                      title: "Specialization",
                      desc: "Full Stack Development",
                      color: "green",
                    },
                    {
                      icon: Calendar,
                      title: "Experience",
                      desc: "1+ Years in Development",
                      color: "purple",
                    },
                    {
                      icon: Target,
                      title: "Focus",
                      desc: "Modern Web Technologies",
                      color: "orange",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105">
                      <div
                        className={`w-12 h-12 bg-${item.color}-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6`}>
                        <item.icon
                          className={`text-${item.color}-600`}
                          size={20}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </p>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Description */}
          <div className="space-y-8 animate-fade-in-up delay-500">
            <div className="prose prose-lg text-gray-600 space-y-6">
              <div className="relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-lg leading-relaxed">
                  I'm a dedicated{" "}
                  <span className="text-blue-600 font-semibold">
                    Full Stack Developer
                  </span>{" "}
                  with a Bachelor's degree in Information Technology. My journey
                  in software development has been driven by curiosity and a
                  passion for solving complex problems through{" "}
                  <span className="text-purple-600 font-semibold">
                    elegant code
                  </span>
                  .
                </p>
              </div>

              <div className="relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-lg leading-relaxed">
                  With expertise spanning both{" "}
                  <span className="text-green-600 font-semibold">frontend</span>{" "}
                  and{" "}
                  <span className="text-orange-600 font-semibold">backend</span>{" "}
                  technologies, I enjoy creating seamless user experiences while
                  ensuring robust server-side functionality. My experience
                  includes working with modern frameworks and databases to build
                  <span className="text-blue-600 font-semibold">
                    {" "}
                    scalable applications
                  </span>
                  .
                </p>
              </div>

              <div className="relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-lg leading-relaxed">
                  I'm always eager to learn new technologies and stay updated
                  with industry trends. When I'm not coding, you'll find me
                  exploring new programming paradigms or contributing to{" "}
                  <span className="text-purple-600 font-semibold">
                    open-source projects
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="group relative text-center p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    7+
                  </div>
                  <div className="text-blue-100 font-medium">Technologies</div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              </div>

              <div className="group relative text-center p-8 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    6+
                  </div>
                  <div className="text-green-100 font-medium">Projects</div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
