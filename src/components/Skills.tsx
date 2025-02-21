import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
      { name: 'TypeScript', level: 85, color: 'from-blue-600 to-indigo-600' },
      { name: 'Next.js', level: 80, color: 'from-gray-700 to-gray-900' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
      { name: 'Python', level: 80, color: 'from-yellow-500 to-yellow-600' },
      { name: 'PostgreSQL', level: 75, color: 'from-blue-400 to-indigo-500' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-600' },
      { name: 'AWS', level: 70, color: 'from-yellow-600 to-orange-600' },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 + categoryIndex * 0.2 }}
                      className="relative group"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.2 + categoryIndex * 0.2 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}