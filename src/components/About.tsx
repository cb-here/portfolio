import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-gray-600">
              "I'm a passionate Full Stack Developer with a strong interest in design and user experience. I love building beautiful, functional, and scalable web applications while continuously learning and improving my skills.
              </p>
              <p className="text-gray-600">
              My journey in tech began with a curiosity about how the internet works, and now I'm dedicated to turning ideas into reality through code and creativity. I'm excited to contribute, grow, and collaborate with teams to create impactful digital experiences."
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full">
                  React
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full">
                  Express.js
                </span>
                <span className="px-4 py-2 bg-orange-100 text-yellow-600 rounded-full">
                  Mongoose
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-gray-600 rounded-full">
                  Javascript
                </span>
                <span className="px-4 py-2 bg-blue-100 text-orange-600 rounded-full">
                  Python
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}