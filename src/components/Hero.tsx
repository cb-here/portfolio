import { motion } from 'framer-motion';
import { ArrowDown, Code, Rocket } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Tilt effect for the container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;
    containerRef.current.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, window.innerHeight],
              x: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center p-8 border-2 border-white/10 rounded-3xl backdrop-blur-lg bg-black/50 shadow-2xl"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Hi, I'm CBHere
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          Building the Future, One Line of Code at a Time
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(165, 180, 252, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg transition-all"
          >
            <Code size={20} />
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(165, 180, 252, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all"
          >
            <Rocket size={20} />
            Let's Talk
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-6 rounded-full border-2 border-purple-400 flex items-center justify-center"
          >
            <ArrowDown size={16} className="text-purple-400" />
          </motion.div>
          <span className="text-sm text-gray-400">Scroll Down</span>
        </motion.div>
      </motion.div>

      {/* Neon glow effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-radial-gradient from-purple-500/20 to-transparent opacity-50" />
      </div>
    </section>
  );
}