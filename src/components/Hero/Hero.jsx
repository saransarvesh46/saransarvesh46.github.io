import { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiChevronDown, FiMail } from 'react-icons/fi';

/* ── Hero — Industrial AI landing with waveform + neural lines ───────
   Asymmetric grid. Staggered word reveal with blur-in. Waveform SVG.
   Neural ring decoration. "SYSTEM ACTIVE" micro-label. CTA glow.
   Right card: always-dark tech HUD with scan-line effect.
   ──────────────────────────────────────────────────────────────────── */

const Hero = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  /* Parallax for the whole hero on scroll */
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  /* Staggered word reveal for name */
  const nameWords = ['Saran', 'Sarvesh'];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-zinc-100 dark:bg-[#050508]"
    >
      {/* ── Background layers ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {/* Soft ambient gradient orbs — cold cyan tones */}
        <div className="absolute -left-32 -top-32 h-[550px] w-[550px] rounded-full bg-cyan-100/20 dark:bg-accent/[0.03] blur-[150px]" />
        <div className="absolute right-[-5%] top-10 h-[450px] w-[450px] rounded-full bg-zinc-200/40 dark:bg-zinc-800/15 blur-[130px]" />
        <div className="absolute left-1/2 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-50/30 dark:bg-accent/[0.02] blur-[120px]" />

        {/* Geometric accent lines */}
        <div className="absolute top-24 right-1/4 w-px h-28 bg-gradient-to-b from-transparent via-accent/15 to-transparent hidden lg:block" />
        <div className="absolute bottom-32 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-zinc-300/20 to-transparent dark:via-zinc-700/15 hidden lg:block" />
        <div className="absolute top-1/3 right-16 w-20 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent hidden lg:block" />

        {/* Animated neural SVG ring */}
        <motion.svg
          className="absolute top-[18%] right-[12%] hidden lg:block opacity-[0.06] dark:opacity-[0.04]"
          width="140" height="140" viewBox="0 0 140 140"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="70" cy="70" r="55" fill="none" stroke="currentColor" className="text-accent" strokeWidth="0.8" strokeDasharray="10 6" />
          <circle cx="70" cy="70" r="38" fill="none" stroke="currentColor" className="text-accent" strokeWidth="0.5" />
          <circle cx="70" cy="15" r="2" className="fill-accent" />
          <circle cx="125" cy="70" r="1.5" className="fill-accent" />
        </motion.svg>

        {/* Waveform — subtle horizontal animated wave */}
        <div className="absolute bottom-[15%] left-0 right-0 h-16 overflow-hidden opacity-[0.04] dark:opacity-[0.03] hidden md:block">
          <div className="waveform-scroll w-[200%] h-full">
            <svg viewBox="0 0 2000 60" className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M0,30 Q50,10 100,30 Q150,50 200,30 Q250,10 300,30 Q350,50 400,30 Q450,10 500,30 Q550,50 600,30 Q650,10 700,30 Q750,50 800,30 Q850,10 900,30 Q950,50 1000,30 Q1050,10 1100,30 Q1150,50 1200,30 Q1250,10 1300,30 Q1350,50 1400,30 Q1450,10 1500,30 Q1550,50 1600,30 Q1650,10 1700,30 Q1750,50 1800,30 Q1850,10 1900,30 Q1950,50 2000,30"
                fill="none"
                stroke="currentColor"
                className="text-accent"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-20">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          {/* ── Left: Text content ── */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={container}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            {/* SYSTEM ACTIVE micro-label + badge */}
            <motion.div variants={item} className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="micro-label text-accent/60">System Active</span>
              </div>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase border border-zinc-300/60 text-zinc-600 dark:border-zinc-700/60 dark:text-zinc-500">
                Hello, I&apos;m
              </span>
            </motion.div>

            {/* Name — staggered word reveal with blur-in + accent underline */}
            <motion.h1
              variants={item}
              className="text-6xl sm:text-7xl xl:text-[5.5rem] font-display font-bold tracking-[-0.03em] leading-[1.05] text-zinc-900 dark:text-zinc-100"
            >
              {nameWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-5"
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="block h-[3px] bg-accent rounded-full mt-3 origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '40%' }}
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-xl sm:text-2xl font-medium text-zinc-600 dark:text-zinc-400"
            >
              Full Stack Developer & AI Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
            >
              I am a passionate technology enthusiast currently in final year of college, with a solid foundation in AI, IoT, and web development. I've worked on various real-world projects and have a strong desire to learn new technologies. My goal is to create smart, efficient solutions using AI and automation while continuously expanding my skills and taking on new challenges.
            </motion.p>

            {/* CTA Buttons — glow effect */}
            <motion.div variants={item} className="flex items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection && scrollToSection('contact')}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-accent text-white font-semibold shadow-glow hover:bg-accent-hover hover:shadow-[0_0_50px_rgba(14,165,233,0.2)] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-zinc-100 dark:focus:ring-offset-[#050508] transition-all duration-300"
              >
                <FiMail className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                Contact Me
              </motion.button>

              <motion.button
                onClick={() => scrollToSection && scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-300/60 text-zinc-700 bg-white/50 backdrop-blur hover:border-accent hover:text-accent transition-all duration-300 dark:border-zinc-700/50 dark:bg-zinc-900/30 dark:text-zinc-300 dark:hover:border-accent dark:hover:text-accent"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Scroll to Projects"
              >
                <FiChevronDown className="w-5 h-5" />
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ── Right: Tech HUD card — always dark ── */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 40, rotateY: -6 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 40, rotateY: -6 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* Backdrop glow */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-br from-accent/[0.06] via-transparent to-cyan-500/[0.04] blur-3xl rounded-3xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative p-8 rounded-2xl bg-[#0c0c14] text-zinc-200 border border-zinc-800/60 shadow-elevated overflow-hidden gradient-border glow-border">
              {/* Scan-line effect */}
              <div className="scan-line absolute inset-0 pointer-events-none" />

              {/* Corner glow */}
              <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative space-y-6">
                {/* AI Badge + micro-label */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-mono font-bold text-sm border border-accent/20">
                      AI
                    </span>
                    <span className="text-sm font-medium text-zinc-500">Full Stack & Automation</span>
                  </div>
                  <span className="micro-label text-zinc-700">v2.0</span>
                </div>

                {/* Progress bar */}
                <div className="space-y-3">
                  <div className="h-1 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : { width: 0 }}
                      transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-gradient-to-r from-accent to-cyan-300 rounded-full"
                    />
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Full Stack Developer & AI Enthusiast
                  </p>
                </div>

                {/* Tags — animated stagger entrance */}
                <div className="grid grid-cols-2 gap-2.5">
                  {['AI', 'IoT', 'Web Dev', 'Automation'].map((tag, idx) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.8 + idx * 0.08 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/50 text-zinc-400 border border-zinc-800/80 hover:border-accent/30 transition-colors duration-300"
                    >
                      <motion.span
                        className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.3 }}
                      />
                      <span className="text-xs font-semibold tracking-wide">{tag}</span>
                    </motion.div>
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
