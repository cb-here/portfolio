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
              style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}>
              Hi,&nbsp;
            </span>
            <span
              className="inline-block will-change-[transform,filter,opacity]"
              style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}>
              I'm&nbsp;
            </span>
            <span
              className="inline-block will-change-[transform,filter,opacity]"
              style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}>
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
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.48 8.5h4V24h-4V8.5zm7.52 0h3.84v2.11h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V24h-4v-7.53c0-1.8-.03-4.11-2.5-4.11-2.5 0-2.88 1.95-2.88 3.98V24h-4V8.5z"></path>
              </svg>
            </a>

            <a
              href="https://github.com/cb-here"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.92.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.69-3.88-1.54-3.88-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.74 2.67 1.23 3.32.94.1-.74.4-1.23.73-1.51-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.96 10.96 0 012.86-.39c.97 0 1.95.13 2.86.39 2.18-1.5 3.13-1.18 3.13-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.45-2.68 5.43-5.24 5.71.41.35.78 1.04.78 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.79.54A10.502 10.502 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/cbh_ere/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403.59.21 1.012.46 1.46.907.448.448.697.87.907 1.46.163.46.347 1.26.403 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.43-.21.59-.46 1.012-.907 1.46-.448.448-.87.697-1.46.907-.46.163-1.26.347-2.43.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.403-.59-.21-1.012-.46-1.46-.907-.448-.448-.697-.87-.907-1.46-.163-.46-.347-1.26-.403-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.43.21-.59.46-1.012.907-1.46.448-.448.87-.697 1.46-.907.46-.163 1.26-.347 2.43-.403C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.508.012-4.75.068-1.02.05-1.577.218-1.945.362-.49.19-.84.418-1.21.787-.37.37-.598.72-.787 1.21-.144.368-.312.925-.362 1.945C3.012 8.492 3 8.85 3 12s.012 3.508.068 4.75c.05 1.02.218 1.577.362 1.945.19.49.418.84.787 1.21.37.37.72.598 1.21.787.368.144.925.312 1.945.362 1.242.056 1.6.068 4.75.068s3.508-.012 4.75-.068c1.02-.05 1.577-.218 1.945-.362.49-.19.84-.418 1.21-.787.37-.37.598-.72.787-1.21.144-.368.312-.925.362-1.945.056-1.242.068-1.6.068-4.75s-.012-3.508-.068-4.75c-.05-1.02-.218-1.577-.362-1.945-.19-.49-.418-.84-.787-1.21-.37-.37-.72-.598-1.21-.787-.368-.144-.925-.312-1.945-.362C15.508 4.012 15.15 4 12 4zm0 3.8a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zm0 1.8a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm4.95-2.85a1 1 0 110 2 1 1 0 010-2z"></path>
              </svg>
            </a>
            <a
              href="https://www.discord.com/cbh_ere/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-[0_0_8px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 245 240"
                fill="currentColor"
                className="w-4 h-4">
                <path d="M104.4 104.6c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.3-5 10.2-11.1 0-6.1-4.6-11.1-10.2-11.1zm36.2 0c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.3-5 10.2-11.1 0-6.1-4.6-11.1-10.2-11.1z" />
                <path d="M189.5 20h-134C40.4 20 30 30.5 30 43.7v152.5C30 209.5 40.4 220 55.5 220h113.2l-5.3-18.4 12.8 11.9 12.1 11.1 21.5 18.9V43.7c0-13.2-10.4-23.7-23.3-23.7zm-38.8 135s-3.6-4.3-6.6-8.1c13.2-3.7 18.2-11.9 18.2-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-26.1-.1-5.7-1.1-10.7-2.6-14.9-4.3-2.3-.9-4.8-2-7.3-3.5-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.5-.3-2.2-1.2-3.4-2-3.4-2s4.8 8 17.6 11.8c-3 3.8-6.7 8.4-6.7 8.4-22.2-.7-30.6-15.3-30.6-15.3 0-32.4 14.5-58.7 14.5-58.7C81.1 68 93.3 68.7 93.3 68.7l1.1 1.3c-19.4 5.6-28.4 14.1-28.4 14.1s2.4-1.3 6.4-3.2c11.6-5.1 20.8-6.5 24.6-6.9.6-.1 1.2-.2 1.9-.2 6.7-.9 14.3-1.1 22.3-.2 10.5 1.2 21.7 4.4 33.2 10.8 0 0-8.5-8.1-26.8-13.7l1.6-1.8s12.2-.7 25.2 7.5c0 0 14.5 26.3 14.5 58.7 0 .1-8.5 14.6-30.8 15.3z" />
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
                className="inline-flex items-center justify-center h-8 rounded-md bg-white/3 backdrop-blur-sm shadow-sm hover:shadow-[0_0_12px_1px_rgba(255,215,0,0.15)] hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 text-white/80 space-x-2 px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4"
                  viewBox="0 0 24 24">
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
          style={{ animationDuration: "3s" }}>
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
