export default function About() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-title font-semibold text-black tracking-tight">
          About Me
        </h1>
        <p className="text-subtitle text-gray-500 font-medium mb-3">
          Hi, I'm Chandrabhushan
        </p>
      </div>
      <div className="h-px bg-gray-200" />
      <p className="text-body text-gray-600 leading-relaxed mb-4 mt-4">
        A passionate Full Stack Developer with a Bachelor's degree in Information Technology. I transform ideas into powerful web applications.
      </p>
      <div className="space-y-2">
        <h2 className="text-heading font-medium text-black">My Journey</h2>
        <ul className="space-y-2 list-disc ml-6 mb-4">
          <li className="text-body text-gray-600">
            My journey in software development is fueled by curiosity and a love for clean, efficient code
          </li>
          <li className="text-body text-gray-600">
            I thrive on building scalable solutions that make a real impact
          </li>
        </ul>
        <div className="space-y-2">
          <h2 className="text-heading font-medium text-black">
            Beyond Coding
          </h2>
          <ul className="space-y-2 list-disc ml-6 mb-4">
            <li className="text-body text-gray-600">
              I contribute to open-source projects
            </li>
            <li className="text-body text-gray-600">
              Experiment with emerging technologies
            </li>
            <li className="text-body text-gray-600">
              Share knowledge with the developer community
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
