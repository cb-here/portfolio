import { useState } from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import { FileUser } from "lucide-react";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePageChange = (page: number) => {
    if (page > currentPage) {
      setDirection("right");
    } else {
      setDirection("left");
    }
    setCurrentPage(page);
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-white flex items-start justify-center pt-16 md:pt-32 p-8 pb-16"
    >
      <div className="text-left space-y-4 w-full max-w-md">
        <div
          data-slot="avatar-group"
          className="flex flex-row items-center h-8 z-50 gap-2 justify-between"
        >
          <div className="flex flex-row -space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <div
                key={page}
                data-slot="tooltip-trigger"
                className="relative"
                data-state="closed"
                data-side="top"
                data-align="center"
                tabIndex={0}
                style={{ zIndex: page - 1 }}
              >
                <div style={{ transform: "none" }}>
                  <button
                    onClick={() => handlePageChange(page)}
                    className="group"
                  >
                    <span
                      data-slot="avatar"
                      className={`relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8 transition-all duration-300 cursor-pointer border-2 ${
                        currentPage === page
                          ? "bg-black text-white border-black scale-110 shadow-lg"
                          : "bg-white text-gray-600 border-gray-300 hover:border-gray-400 hover:scale-105"
                      }`}
                    >
                      <span
                        data-slot="avatar-fallback"
                        className={`flex size-full items-center justify-center rounded-full text-sm transition-all duration-300 ${
                          currentPage === page
                            ? "bg-black text-white font-semibold"
                            : "bg-white text-gray-600 group-hover:text-gray-800"
                        }`}
                      >
                        {page}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/Chandrabhushan_Vishwakarma_Resume.pdf"
            download="Chandrabhushan_Vishwakarma_Resume.pdf"
            className="inline-flex items-center justify-center font-sans font-medium size-8 rounded-full transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 select-none will-change-transform bg-black text-white hover:bg-gray-800 hover:shadow-lg focus-visible:ring-gray-400 active:scale-95"
            title="Download Resume"
          >
            <FileUser className="w-4 h-4" />
          </a>
        </div>

        <div className="relative overflow-hidden">
          <div
            key={currentPage}
            className={`animate-in fade-in-0 ${
              direction === "right"
                ? "slide-in-from-right-5"
                : "slide-in-from-left-5"
            } duration-300`}
          >
            {currentPage === 1 && (
              <>
                <div className="space-y-2">
                  <h1 className="text-title font-semibold text-black tracking-tight">
                    Hi, I'm Chandrabhushan
                  </h1>
                  <p className="text-subtitle text-gray-500 font-medium mb-3">
                    Full Stack Developer
                  </p>
                </div>
                <div className="h-px bg-gray-200" />
                <p className="text-body text-gray-600 leading-relaxed mb-4 mt-4">
                  A passionate Full Stack Developer with a Bachelor's degree in
                  Information Technology. I transform ideas into powerful web
                  applications.
                </p>
                <div className="space-y-2">
                  <h2 className="text-heading font-medium text-black">
                    What I Can Do
                  </h2>
                  <ul className="space-y-2 list-disc ml-6 mb-4">
                    <li className="text-body text-gray-600">
                      Build responsive and scalable web applications with React
                      and Next.js
                    </li>
                    <li className="text-body text-gray-600">
                      Design and develop robust backend systems with Node.js,
                      Express, and Django
                    </li>
                    <li className="text-body text-gray-600">
                      Work with databases including MongoDB and modern ORMs
                    </li>
                    <li className="text-body text-gray-600">
                      Create clean, maintainable code with TypeScript and Python
                    </li>
                  </ul>
                </div>
              </>
            )}

            {currentPage === 3 && <Projects />}
            {currentPage === 2 && <About />}
            {currentPage === 4 && <Skills />}
            {currentPage === 5 && <Contact />}
          </div>
        </div>
      </div>
    </section>
  );
}
