import {
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiPython,
  SiTypescript,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiVercel,
  SiPostman,
  SiGit,
  SiGithub,
  SiVite,
  SiNpm,
} from "react-icons/si";

const skillCategories = {
  frontend: [
    { node: <SiReact className="text-[#61DAFB]" />, title: "React" },
    { node: <SiNextdotjs className="text-[#000]" />, title: "Next.js" },
    { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript" },
    { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript" },
    { node: <SiTailwindcss className="text-[#38BDF8]" />, title: "Tailwind CSS" },
    { node: <SiVite className="text-[#646CFF]" />, title: "Vite" },
  ],
  backend: [
    { node: <SiNodedotjs className="text-[#68A063]" />, title: "Node.js" },
    { node: <SiExpress className="text-[#000]" />, title: "Express" },
    { node: <SiDjango className="text-[#0C4B33]" />, title: "Django" },
    { node: <SiPython className="text-[#FFD43B]" />, title: "Python" },
    { node: <SiMongodb className="text-[#4DB33D]" />, title: "MongoDB" },
  ],
  tools: [
    { node: <SiGit className="text-[#F1502F]" />, title: "Git" },
    { node: <SiGithub className="text-[#000]" />, title: "GitHub" },
    { node: <SiVercel className="text-[#000]" />, title: "Vercel" },
    { node: <SiPostman className="text-[#FF6C37]" />, title: "Postman" },
    { node: <SiNpm className="text-[#CB3837]" />, title: "NPM" },
  ],
};

export default function Skills() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-title font-semibold text-black tracking-tight">
          Skills &amp; Technologies
        </h1>
        <p className="text-subtitle text-gray-500 font-medium mb-3">
          What I use to build things
        </p>
      </div>
      <div className="h-px bg-gray-200" />
      <p className="text-body text-gray-600 leading-relaxed mb-4 mt-4">
        Here are some of the technologies and tools I work with.
      </p>

      <div className="space-y-6">
        {/* Frontend */}
        <div>
          <h2 className="text-heading font-medium text-black mb-3">Frontend</h2>
          <div className="flex flex-wrap gap-2">
            {skillCategories.frontend.map((skill) => (
              <div
                key={skill.title}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700"
              >
                <span className="text-base">{skill.node}</span>
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h2 className="text-heading font-medium text-black mb-3">Backend</h2>
          <div className="flex flex-wrap gap-2">
            {skillCategories.backend.map((skill) => (
              <div
                key={skill.title}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700"
              >
                <span className="text-base">{skill.node}</span>
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-heading font-medium text-black mb-3">Tools &amp; Deployment</h2>
          <div className="flex flex-wrap gap-2">
            {skillCategories.tools.map((skill) => (
              <div
                key={skill.title}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700"
              >
                <span className="text-base">{skill.node}</span>
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
