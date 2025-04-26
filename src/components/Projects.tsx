import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'QuickServe',
    description: 'A web application to which provides the household services to end users.',
    image: 'quickserve.png',
    github: 'https://github.com/cb-here/QuickServe',
    live: 'https://quickserve-v689.onrender.com/',
    tags: ['HTML', 'Javascript', 'TailwindCSS', 'Django', 'Firebase'],
    color: 'from-purple-500 to-blue-500',
  },
  {
    title: 'Notes Taker',
    description: 'A personal note taking app built in the MERN',
    image: '/noter.png',
    github: 'https://github.com/cb-here/noter-rest-api',
    live: 'https://www.linkedin.com/in/chandrabhushan-vishwakarma-323347352/',
    tags: ['React.js', 'Node.js', 'Express.js', 'Mongoose'],
    color: 'from-blue-500 to-teal-500',
  },
  {
    title: 'Personalized Path Generator',
    description: 'An interactive web application that empowers users to create, explore, and manage personalized learning journeys. Users can share knowledge with the community, making learning a collaborative experience.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    github: 'https://github.com/cb-here/Personal-Learning-Path',
    live: 'https://personal-learning-path.vercel.app/',
    tags: ['React.js', 'Express.js', 'Node.js', 'JWT', 'Mongoose', 'Tailwind CSS'],
    color: 'from-teal-500 to-emerald-500',
  }
  
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image with Gradient Overlay */}
                <div className="relative overflow-hidden h-60">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
                  </motion.div>

                  {/* Live and GitHub Links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white p-3 rounded-full shadow-lg"
                    >
                      <Github className="w-6 h-6 text-gray-800" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white p-3 rounded-full shadow-lg"
                    >
                      <ExternalLink className="w-6 h-6 text-gray-800" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-sm`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}