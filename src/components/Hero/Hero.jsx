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
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-gray-950 to-purple-950/20" />
      
      {/* Animated accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent pointer-events-none origin-top"
        style={{ zIndex: 1 }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-24 text-center max-w-5xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={item} className="mb-8">
            <span className="text-blue-400 font-semibold text-sm tracking-[0.2em] uppercase">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name with subtle hover */}
          <motion.h1
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6 leading-tight"
          >
            Saran Sarvesh A G
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-2xl md:text-3xl text-gray-300 font-light mb-8 tracking-wide"
          >
            Full Stack Developer & AI Enthusiast
          </motion.p>

          {/* Personal Introduction */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            I am a passionate technology enthusiast currently in final year of college, with a solid foundation in AI, IoT, and web development. I've worked on various real-world projects and have a strong desire to learn new technologies. My goal is to create smart, efficient solutions using AI and automation while continuously expanding my skills and taking on new challenges.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div variants={item} className="mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection && scrollToSection('contact')}
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-blue-600 text-white font-semibold shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 transition-all duration-300"
            >
              <FiMail className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 
              Contact Me
            </motion.button>
          </motion.div>

          {/* Down arrow with smooth bounce */}
          <motion.div
            variants={item}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="pt-8 flex justify-center"
          >
            <button
              onClick={() => scrollToSection && scrollToSection('projects')}
              className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 group"
              aria-label="Scroll to Projects"
            >
              <FiChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
