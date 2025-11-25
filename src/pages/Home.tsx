import Threads from "../components/common/Threads";

export default function Home() {
  return (
    <section
      id="home"
      className="fixed inset-0 w-full h-screen overflow-hidden bg-white"
    >
      <>
        <div className="absolute top-4 left-4 z-50 text-black">
          <span className="text-2xl">Chandrabhushan Vishwakarma</span>
          <ul className="mt-2 space-y-1 text-base">
            <li>
              <a
                href="mailto:cbv934@gmail.com"
                className="group flex items-center gap-1 hover:underline"
              >
                Email
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cb-here"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 hover:underline"
              >
                GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/chandrabhushan-vishwakarma-323347352"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 hover:underline"
              >
                LinkedIn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute top-4 right-4 md:block hidden z-50">
          <a
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-2 font-sans font-medium min-w-[44px] min-h-[44px] rounded-full transition-[colors,box-shadow,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none aria-disabled:pointer-events-none select-none will-change-transform bg-black text-white hover:bg-gray-800 focus-visible:ring-gray-400 px-4 py-2 text-sm whitespace-nowrap"
          >
            <span className="">Open Portfolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden z-50">
          <a
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-2 font-sans font-medium min-w-[44px] min-h-[44px] rounded-full transition-[colors,box-shadow,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none aria-disabled:pointer-events-none select-none will-change-transform bg-black text-white hover:bg-gray-800 focus-visible:ring-gray-400 px-4 py-2 text-sm whitespace-nowrap"
          >
            <span className="">Open Portfolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>

        <div style={{ width: "100%", height: "800px", position: "relative" }}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={false}
            color={[0.6, 0.3, 0.9]}
          />
        </div>
      </>
    </section>
  );
}
