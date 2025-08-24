const Hero = () => {
  return (
    <main>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-20 sm:pt-24 md:pt-28">
        <div className="order-2 sm:order-1">
          <div>
            <img
              className="h-[70px] w-[70px] object-cover rounded-lg"
              src="/cbhere.gif"
              alt="Profile"
            />
          </div>
        </div>

        <div className="flex flex-col order-1 sm:order-2 text-center sm:text-left">
          <p className="blur-text text-3xl sm:text-4xl md:text-5xl text-white flex flex-wrap">
            <span
              className="inline-block will-change-[transform,filter,opacity]"
              style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
            >
              Hi,&nbsp;
            </span>
            <span
              className="inline-block will-change-[transform,filter,opacity]"
              style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
            >
              I'm&nbsp;
            </span>
            <span
              className="inline-block will-change-[transform,filter,opacity]"
              style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
            >
              CB Vishwakarma
            </span>
          </p>
          <p className="text-gray-300 text-sm sm:text-base font-light mt-2 sm:mt-3">
            A full stack web developer
          </p>
        </div>

        <div className="order-3 pb-5 px-4 sm:px-22">
          <div className="flex space-x-3">
            <a
              href="https://www.linkedin.com/in/chandrabhushan-vishwakarma-323347352/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.48 8.5h4V24h-4V8.5zm7.52 0h3.84v2.11h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V24h-4v-7.53c0-1.8-.03-4.11-2.5-4.11-2.5 0-2.88 1.95-2.88 3.98V24h-4V8.5z"></path>
              </svg>
            </a>

            <a
              href="https://github.com/cb-here"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.92.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.69-3.88-1.54-3.88-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.74 2.67 1.23 3.32.94.1-.74.4-1.23.73-1.51-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.96 10.96 0 012.86-.39c.97 0 1.95.13 2.86.39 2.18-1.5 3.13-1.18 3.13-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.45-2.68 5.43-5.24 5.71.41.35.78 1.04.78 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.79.54A10.502 10.502 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/cbh_ere/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              href="https://www.discord.com/cbh_ere/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
                  stroke-width="0.5"
                  stroke="#fff7f7"
                />
              </svg>
            </a>
          </div>

          <div className="px-6 py-2">
            <div className="flex w-full">
              <a
                href="/Chandrabhushan_Vishwakarma_Resume.pdf"
                download="Chandrabhushan_Vishwakarma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-8 rounded-md bg-white/3 backdrop-blur-sm shadow-sm hover:shadow-[0_0_12px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80 space-x-2 px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM13 9V3.5L18.5 9H13zm-1 4H8v-2h4v2zm4 4H8v-2h8v2z"></path>
                </svg>
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6">
        <div
          className="shiny-text custom-class text-white text-base sm:text-lg leading-relaxed tracking-wide mb-6 text-center sm:text-left"
          style={{ animationDuration: "3s" }}
        >
          I'm a dedicated Full Stack Developer with a Bachelor's degree in
          Information Technology. My journey in software development has been
          driven by curiosity and a passion for solving complex problems through
          elegant code.
          <br />
        </div>
      </div>
    </main>
  );
};

export default Hero;
