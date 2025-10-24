import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';
import { FiChevronDown, FiMail } from 'react-icons/fi';

const Hero = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Remove 3D Computer Model Background */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <ComputerCanvas />
      </div> */}
      <div className="absolute inset-0 bg-grid-gray-200 dark:bg-grid-gray-700/50" />
      {/* Animated vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={isInView ? { height: '100%' } : { height: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-400/30 to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={item} className="mb-6">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-lg tracking-wide">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name with interactive hover */}
          <motion.h1
            variants={item}
            whileHover={{ scale: 1.05, textShadow: '0px 4px 24px #60a5fa' }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 cursor-pointer transition-all duration-300"
          >
            {`Saran Sarvesh A G`}
          </motion.h1>

          {/* Subtitle with fade-in */}
          <motion.p
            variants={item}
      className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4"
      >
      {`Full Stack Developer & AI Enthusiast`}
      </motion.p>

      {/* Personal Introduction */}
      <motion.p
      variants={item}
      className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8"
      >
      I am a passionate technology enthusiast currently in final year of college, with a solid foundation in AI, IoT, and web development. I've worked on various real-world projects and have a strong desire to learn new technologies. My goal is to create smart, efficient solutions using AI and automation while continuously expanding my skills and taking on new challenges.
      </motion.p>

          {/* Call to Action Button with animation */}
          <motion.button
            variants={item}
            whileHover={{ scale: 1.08, backgroundColor: '#2563eb', color: '#fff' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection && scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          >
            <FiMail className="w-5 h-5" /> Contact Me
          </motion.button>

          {/* Down arrow with bounce animation */}
          <motion.div
            variants={item}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="pt-20- flex justify-center"
          >
            <button
              onClick={() => scrollToSection && scrollToSection('projects')}
              className="p-3 mt-18 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 transition-transform border border-blue-200 dark:border-gray-700"
              aria-label="Scroll to Projects"
            >
              <FiChevronDown className="w-7 h-7 text-blue-500" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
