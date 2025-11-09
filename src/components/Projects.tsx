export default function Projects() {
  const projects = [
    {
      title: "Quickserve",
      description: "Restaurant management platform with real-time ordering system",
      status: "Deployed",
      liveUrl: "https://quickserve-v689.onrender.com/",
      githubUrl: "https://github.com/cb-here/QuickServe",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Personal Learning Path",
      description: "Personalized learning roadmap generator with progress tracking",
      status: "Deployed",
      liveUrl: "https://personal-learning-path.vercel.app/",
      githubUrl: "https://github.com/cb-here/Personal-Learning-Path",
      tags: ["Next.js", "TypeScript", "Vercel"],
    },
  ];

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-title font-semibold text-black tracking-tight">
          Projects
        </h1>
        <p className="text-subtitle text-gray-500 font-medium mb-3">
          Things I've built
        </p>
      </div>
      <div className="h-px bg-gray-200" />
      <p className="text-body text-gray-600 leading-relaxed mb-4 mt-4">
        A collection of projects I've worked on, from web applications to
        full-stack solutions.
      </p>
      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-50 border border-gray-200 rounded-3xl p-4 max-w-[450px] hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 hover:shadow-md cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-black group-hover:text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {project.status}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-600 hover:text-black transition-colors z-10"
                    aria-label="GitHub Repository"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
                    </svg>
                  </a>
                  <span
                    className="text-gray-600 group-hover:text-black transition-colors"
                    aria-label="Live Preview"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="https://github.com/cb-here?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-body text-gray-600 hover:text-black transition-colors"
        >
          <span>View all projects on GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
          </svg>
        </a>
      </div>
    </>
  );
}
