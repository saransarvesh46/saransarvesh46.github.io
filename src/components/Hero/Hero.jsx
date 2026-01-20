import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiChevronDown, FiMail } from 'react-icons/fi';

const Hero = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 16 } },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div 
          className="absolute -left-24 -top-24 h-96 w-96 bg-cyan-400/25 blur-3xl" 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute right-0 top-10 h-80 w-80 bg-purple-400/25 blur-3xl" 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute left-1/2 bottom-20 h-72 w-72 bg-amber-400/20 blur-3xl" 
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.12),transparent_35%),linear-gradient(120deg,rgba(255,255,255,0.65),transparent)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.05),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.08),transparent_35%),linear-gradient(120deg,rgba(12,19,35,0.6),transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={container}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.22em] uppercase bg-white/80 text-sky-700 border border-sky-100 shadow-sm dark:bg-white/5 dark:text-cyan-200 dark:border-white/10"
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              variants={item}
              className="text-6xl sm:text-7xl xl:text-8xl font-display font-extrabold tracking-tight leading-[1.05] text-slate-900 dark:text-white"
            >
              <span className="bg-gradient-to-r from-sky-600 via-blue-500 to-purple-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-purple-300">
                Saran Sarvesh
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl sm:text-2xl text-slate-600 dark:text-gray-200"
            >
              Full Stack Developer & AI Enthusiast
            </motion.p>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-slate-600/80 dark:text-gray-300 max-w-2xl leading-relaxed"
            >
              I am a passionate technology enthusiast currently in final year of college, with a solid foundation in AI, IoT, and web development. I've worked on various real-world projects and have a strong desire to learn new technologies. My goal is to create smart, efficient solutions using AI and automation while continuously expanding my skills and taking on new challenges.
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection && scrollToSection('contact')}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-sky-600 text-white font-semibold shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/35 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 transition-all"
              >
                <FiMail className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                Contact Me
              </motion.button>

              <motion.button
                variants={item}
                onClick={() => scrollToSection && scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 bg-white/70 backdrop-blur shadow-sm hover:border-sky-300 hover:text-sky-800 hover:bg-sky-50 transition-all dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:hover:border-cyan-300 dark:hover:bg-white/10 dark:hover:text-white"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Scroll to Projects"
              >
                <FiChevronDown className="w-5 h-5" />
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-sky-200/50 via-white to-purple-200/50 blur-2xl dark:from-cyan-500/10 dark:via-white/0 dark:to-purple-500/10" />
            <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl shadow-sky-500/10 dark:bg-gray-900/70 dark:border-white/10">
              <div className="absolute -top-10 right-10 h-20 w-20 rounded-full bg-gradient-to-br from-sky-400/40 to-purple-500/30 blur-xl" />
              <div className="absolute -bottom-12 left-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-400/25 to-sky-400/20 blur-2xl" />

              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-2xl bg-sky-500/10 text-sky-700 flex items-center justify-center font-semibold border border-sky-100 dark:text-cyan-200 dark:bg-cyan-500/10 dark:border-white/10">
                    AI
                  </span>
                  <span className="text-sm font-semibold text-slate-600 dark:text-gray-200">Full Stack & Automation</span>
                </div>

                <div className="space-y-3">
                  <div className="h-2 rounded-full bg-slate-200/80 overflow-hidden dark:bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500"
                    />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                    Full Stack Developer & AI Enthusiast
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {['AI', 'IoT', 'Web Dev', 'Automation'].map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100/70 text-slate-700 border border-white/70 shadow-sm dark:bg-white/5 dark:text-gray-200 dark:border-white/10"
                    >
                      <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                      <span className="text-xs font-semibold tracking-wide">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

