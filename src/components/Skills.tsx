import { Code, Database, Globe, Server, Zap } from "lucide-react";

const Skills = () => {
  return (
    <div className="space-y-4">
      <div className="relative pt-4 flex items-center gap-2 justify-center sm:justify-start w-full">
        <div className="flex items-center gap-2">
          <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-red-300 via-yellow-200 to-red-300">
            Tech-Stack
          </div>
          <p className="text-gray-500 text-sm pt-1">- I work with</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" viewBox="0 0 128 128" fill="currentColor">
                <g>
                  <circle cx="64" cy="64" r="15"></circle>
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </g>
              </svg>
              <span className="text-xs sm:text-sm">React</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" viewBox="0 0 128 128" fill="currentColor">
                <path d="M0 0h128v128H0z"></path>
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
              </svg>
              <span className="text-xs sm:text-sm">TypeScript</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" viewBox="0 0 128 128" fill="currentColor">
                <path d="M0 0h128v128H0z"></path>
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path data-name="original" fill="#007acc" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
              </svg>
              <span className="text-xs sm:text-sm">Express</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 128 128" fill="currentColor">
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
                <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
              </svg>
              <span className="text-xs sm:text-sm">JavaScript</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" viewBox="0 0 128 128" fill="currentColor">
                <path d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
              </svg>
              <span className="text-xs sm:text-sm">Node.js</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-4 sm:w-8 sm:h-5 text-sky-400" viewBox="0 0 256 154" fill="currentColor">
                <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"></path>
              </svg>
              <span className="text-xs sm:text-sm">Tailwind CSS</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* MongoDB button - you'll need to replace the img with actual MongoDB icon */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              <span className="text-xs sm:text-sm">MongoDB</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* Vercel button */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 1155 1000" fill="currentColor">
                <path d="M577.5 0L1155 1000H0L577.5 0z"></path>
              </svg>
              <span className="text-xs sm:text-sm">Vercel</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* Postman button - replace img with actual Postman icon */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              <span className="text-xs sm:text-sm">Postman</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* shadcn/ui button */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-xs sm:text-sm">shadcn/ui</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* Git button */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" viewBox="0 0 128 128" fill="currentColor">
                <path fill="#F05133" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123c-3.172 3.172-3.172 8.32 0 11.497l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.498z"></path>
              </svg>
              <span className="text-xs sm:text-sm">Git</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* Rest-API button */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              <span className="text-xs sm:text-sm">Rest-API</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* Figma button */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" viewBox="0 0 128 128" fill="currentColor">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path>
                <path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path>
                <path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path>
                <path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path>
                <path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
              </svg>
              <span className="text-xs sm:text-sm">Figma</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* GitHub button */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 128 128" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
                <path fill="currentColor" d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </svg>
              <span className="text-xs sm:text-sm">GitHub</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* Framer Motion button */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              <span className="text-xs sm:text-sm">Framer Motion</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* Vite button */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" viewBox="0 0 410 404" fill="currentColor">
                <path d="M399.641 59.525l-183.996-46.68a11.963 11.963 0 00-5.697-.001L15.674 59.525c-7.516 1.909-12.78 8.772-12.78 16.483v250.772c0 8.949 6.003 16.774 14.588 18.979l184.042 46.706a12.076 12.076 0 005.711 0l183.943-46.686c8.588-2.203 14.589-10.028 14.589-18.979V76.008c0-7.711-5.264-14.574-12.777-16.483zm-192.65 271.493l-125.44-31.851V95.194l125.44 31.851v204.973zm20-204.983l125.439-31.851v203.973l-125.439 31.851V125.035zm-134.45-22.824l134.45-34.133 134.452 34.133-134.452 34.133-134.45-34.133z" fill="currentColor"></path>
              </svg>
              <span className="text-xs sm:text-sm">Vite</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>

        {/* NPM button */}
        <button className="inline-flex items-center justify-center relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out text-white group" style={{ border: "1px solid rgba(255, 255, 255, 0.06)", background: "transparent", padding: "11px 21px" }}>
          <div className="relative z-10 flex items-center gap-2 transition-all duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" viewBox="0 0 128 128" fill="currentColor">
                <path d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
              </svg>
              <span className="text-xs sm:text-sm">NPM</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default Skills;