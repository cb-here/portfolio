import { useEffect, useRef, useState } from "react";
import TextType from "./common/TypeText";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-5xl mx-auto space-y-8 pt-24 md:pt-36">
      <div className="text-left space-y-4">
        <p className="text-md md:text-lg shiny-text">
          Hi, I'm Chandrabhushan Vishwakarma
        </p>
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-8 md:gap-4">
          {isVisible && (
            <TextType
              text={[
                "Frontend Developer",
                "Backend Developer",
                "FullStack Developer",
              ]}
              typingSpeed={150}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="█"
              className="text-5xl md:text-6xl font-bold"
            />
          )}
          {!isVisible && (
            <div className="text-5xl md:text-6xl font-bold text-white">
              FullStack Developer
            </div>
          )}
          <p className="mt-6 text-lg text-white">
            I'm a dedicated Full Stack Developer with a Bachelor's degree in
            Information Technology. My journey in software development has been
            driven by curiosity and a passion for solving complex problems
            through elegant code.
          </p>
        </div>
        <div className="flex justify-start gap-2 pt-3 md:pt-6">
          <a
            href="https://www.linkedin.com/in/chandrabhushan-vishwakarma-323347352/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.48 8.5h4V24h-4V8.5zm7.52 0h3.84v2.11h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V24h-4v-7.53c0-1.8-.03-4.11-2.5-4.11-2.5 0-2.88 1.95-2.88 3.98V24h-4V8.5z"></path>
            </svg>
          </a>

          <a
            href="https://github.com/cb-here"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.92.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.69-3.88-1.54-3.88-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.74 2.67 1.23 3.32.94.1-.74.4-1.23.73-1.51-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.96 10.96 0 012.86-.39c.97 0 1.95.13 2.86.39 2.18-1.5 3.13-1.18 3.13-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.45-2.68 5.43-5.24 5.71.41.35.78 1.04.78 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.79.54A10.502 10.502 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/cbh_ere/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle cx="17" cy="7" r="1.5" fill="#fff7f7" fill-opacity="0">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.3s"
                  dur="0.15s"
                  values="0;1"
                />
              </circle>
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="72"
                  stroke-dashoffset="72"
                  d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="72;0"
                  />
                </path>
                <path
                  stroke-dasharray="28"
                  stroke-dashoffset="28"
                  d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.6s"
                    values="28;0"
                  />
                </path>
              </g>
            </svg>
          </a>
          <a
            href="/Chandrabhushan_Vishwakarma_Resume.pdf"
            download="Chandrabhushan_Vishwakarma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-white/3 backdrop-blur-sm shadow-sm hover:shadow-[0_0_12px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80 space-x-2 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM13 9V3.5L18.5 9H13zm-1 4H8v-2h4v2zm4 4H8v-2h8v2z"></path>
            </svg>
            
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8"></div>
    </div>
  );
}
