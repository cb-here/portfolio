import Orb from "./common/Orb";
import { HighlightCard } from "./common/Card";
import DeviceInfo from "./common/DeviceInfo";

export default function About() {
  const highlights = [
    {
      title: "Full Stack Development",
      description:
        "Building end-to-end web applications with modern technologies and best practices.",
      accentColor: "from-blue-500 to-cyan-500",
    },
    {
      title: "Problem Solver",
      description:
        "Passionate about tackling complex challenges with elegant and efficient solutions.",
      accentColor: "from-purple-500 to-pink-500",
    },
    {
      title: "Continuous Learner",
      description:
        "Always exploring new technologies and staying updated with industry trends.",
      accentColor: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-[700px] border-t border-grey overflow-hidden py-12"
    >
      <div className="hidden sm:block absolute inset-0 z-0 pointer-events-auto">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto md:px-6 px-0 pointer-events-none">
        <h2 className="text-lg mb-2 shiny-text">Get to know me</h2>
        <h3 className="text-4xl md:text-5xl font-medium text-white mb-8">
          About Me
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <p className="text-white-icon leading-relaxed text-lg shiny-text">
              Hi, I'm{" "}
              <span className="font-semibold">Chandrabhushan Vishwakarma</span>.
              I'm a dedicated Full Stack Developer with a Bachelor's degree in
              Information Technology.
            </p>
            <p className="text-white-icon leading-relaxed">
              My journey in software development has been driven by curiosity
              and a passion for solving complex problems through elegant code. I
              specialize in building scalable web applications using modern
              frameworks and databases.
            </p>
            <p className="text-white-icon leading-relaxed">
              When I'm not coding, you'll find me exploring new programming
              paradigms, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
          </div>

          <div className="pointer-events-auto">
            <DeviceInfo />
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              title={highlight.title}
              description={highlight.description}
              accentColor={highlight.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
