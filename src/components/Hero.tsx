import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Layout, Server, Terminal, Database, Cpu, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';

const skills = [
  { icon: <Layout className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500" />, text: 'Frontend', color: 'from-pink-500 to-rose-500' },
  { icon: <Server className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500" />, text: 'Backend', color: 'from-blue-500 to-cyan-500' },
  { icon: <Database className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500" />, text: 'Database', color: 'from-green-500 to-emerald-500' },
  { icon: <Cloud className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500" />, text: 'Cloud', color: 'from-purple-500 to-indigo-500' },
  { icon: <Terminal className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500" />, text: 'DevOps', color: 'from-orange-500 to-amber-500' },
  { icon: <Cpu className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500" />, text: 'Systems', color: 'from-teal-500 to-cyan-500' },
];

const ParticleField = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

const GlowingOrb = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('orb')?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / 30);
        mouseY.set((e.clientY - centerY) / 30);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      id="orb"
      className="relative w-48 h-48 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-1"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 blur-xl opacity-50" />
      <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.span 
          className="text-6xl font-bold text-white relative z-10"
          animate={{ 
            textShadow: [
              '0 0 20px rgba(139, 92, 246, 0.5)',
              '0 0 40px rgba(59, 130, 246, 0.5)',
              '0 0 20px rgba(139, 92, 246, 0.5)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          CB
        </motion.span>
      </div>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-white"
          style={{
            top: '50%',
            left: '50%',
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1,
          }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            style={{
              transformOrigin: `${96 + i * 16}px 50%`,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const backgroundY = useTransform(scrollY, [0, 300], [0, 150]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black pt-16 overflow-hidden">
      <ParticleField />
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,rgba(0,0,0,0)_100%)]" 
      />
      
      <motion.div 
        style={{ y, scale, opacity }}
        className="container mx-auto px-6 py-12 relative z-10 text-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-12"
        >
          <GlowingOrb />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-7xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 bg-[length:200%_auto] animate-gradient"
        >
          Hi, I'm CBHere
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto"
        >
          Transforming ideas into digital reality through innovative code and creative solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.text}
              className="relative group"
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} p-[2px] rounded-2xl`}
                animate={{
                  scale: activeIndex === index ? [1, 1.02, 1] : 1,
                }}
                transition={{ duration: 1, repeat: activeIndex === index ? Infinity : undefined }}
              >
                <div className="bg-black h-full rounded-2xl p-6">
                  <motion.div
                    animate={{
                      rotate: activeIndex === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`mb-4`}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-white font-semibold">{skill.text}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative text-white font-medium">Explore Projects</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="relative px-8 py-4 rounded-xl overflow-hidden border-2 border-purple-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative text-purple-500 font-medium">Get in Touch</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mt-16"
        >
          <ArrowDown className="mx-auto text-purple-500" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}