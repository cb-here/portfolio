import Header from "../components/Header";
import About from "../components/About";
import LogoLoop from "../components/common/LogoLoop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Projects from "../components/Projects";
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

export default function Index() {
  const techLogos = [
    { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-[#e2e2e2]" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiDjango className="text-[#0C4B33]" />, title: "Django", href: "https://www.djangoproject.com" },
    { node: <SiPython className="text-[#FFD43B]" />, title: "Python", href: "https://www.python.org" },
    { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiExpress className="text-[#e2e2e2]" />, title: "Express", href: "https://expressjs.com" },
    { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
    { node: <SiNodedotjs className="text-[#68A063]" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiTailwindcss className="text-[#38BDF8]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiMongodb className="text-[#4DB33D]" />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiVercel className="text-[#ffffff]" />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiPostman className="text-[#FF6C37]" />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiGit className="text-[#F1502F]" />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub className="text-[#ffffff]" />, title: "GitHub", href: "https://github.com" },
    { node: <SiVite className="text-[#646CFF]" />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiNpm className="text-[#CB3837]" />, title: "NPM", href: "https://www.npmjs.com" },
  ];

  return (
    <>
      <Header />
      <main className="lg:mx-32 mx-6">
        <section id="home">
          <Home />
        </section>
        <div
          style={{ position: "relative", overflow: "hidden" }}
          className="max-w-5xl mx-auto py-12"
        >
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#101010"
          />
        </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
