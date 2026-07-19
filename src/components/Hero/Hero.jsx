import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiChevronDown, FiMail, FiMapPin, FiBriefcase, FiCalendar, FiBookOpen, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const nameWords = ['Saran', 'Sarvesh'];
  const resumeUrl = 'https://drive.google.com/file/d/1e0EsSP_gfRlEdM7a2bbGbucYXNP8Jjww/view?usp=sharing';

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-zinc-100 dark:bg-[#030305] border-b border-zinc-200/40 dark:border-zinc-800/20"
    >
      {/* Background decoration layers */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute -left-32 -top-32 h-[550px] w-[550px] rounded-full bg-cyan-100/20 dark:bg-accent/[0.03] blur-[150px]" />
        <div className="absolute right-[-5%] top-10 h-[450px] w-[450px] rounded-full bg-zinc-200/40 dark:bg-zinc-800/15 blur-[130px]" />
        
        {/* SVG Neural Deco */}
        <motion.svg
          className="absolute top-[18%] right-[12%] hidden lg:block opacity-[0.06] dark:opacity-[0.04]"
          width="140" height="140" viewBox="0 0 140 140"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        >
          <circle cx="70" cy="70" r="55" fill="none" stroke="currentColor" className="text-accent" strokeWidth="0.8" strokeDasharray="10 6" />
          <circle cx="70" cy="70" r="38" fill="none" stroke="currentColor" className="text-accent" strokeWidth="0.5" />
          <circle cx="70" cy="15" r="2" className="fill-accent" />
          <circle cx="125" cy="70" r="1.5" className="fill-accent" />
        </motion.svg>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-28 lg:py-24 max-w-7xl">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          
          {/* Left Side: Headline & Bio Info */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={container}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            {/* System Status badges */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="micro-label text-accent">Active Trainee</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40">
                <span className="micro-label text-zinc-500 dark:text-zinc-400">Open to Opportunities</span>
              </div>
            </motion.div>

            {/* Name */}
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

            {/* Subtitle / Headline */}
            <motion.h2
              variants={item}
              className="text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-300 font-display"
            >
              AI Engineer | Computer Vision Engineer | Machine Learning Engineer
            </motion.h2>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-body"
            >
              I compile, optimize, and deploy real-time deep learning pipelines and computer vision nodes onto Edge hardware. 
              Specializing in high-throughput object detection and model optimizations, I bridge complex theoretical architectures into robust production integrations.
            </motion.p>

            {/* Metadata Info Row */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/40 text-xs font-mono text-zinc-500 dark:text-zinc-400"
            >
              <div className="space-y-1">
                <span className="flex items-center gap-1.5 text-zinc-400 font-semibold"><FiMapPin className="text-accent" /> Location</span>
                <span className="text-zinc-800 dark:text-zinc-200">India</span>
              </div>
              <div className="space-y-1">
                <span className="flex items-center gap-1.5 text-zinc-400 font-semibold"><FiBriefcase className="text-accent" /> Experience</span>
                <span className="text-zinc-800 dark:text-zinc-200">AI Trainee / &lt;1 Year</span>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="flex items-center gap-1.5 text-zinc-400 font-semibold"><FiBookOpen className="text-accent" /> Interests</span>
                <span className="text-zinc-800 dark:text-zinc-200">Edge AI, Tracking, MOT</span>
              </div>
            </motion.div>

            {/* Quick Links & CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection && scrollToSection('contact')}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-accent text-white font-semibold shadow-glow hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all duration-300"
              >
                <FiMail className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                Contact
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-300/60 text-zinc-700 bg-white/50 backdrop-blur hover:border-accent hover:text-accent transition-all duration-300 dark:border-zinc-700/50 dark:bg-zinc-900/30 dark:text-zinc-300 dark:hover:border-accent dark:hover:text-accent"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/saran887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-accent dark:text-zinc-400 dark:hover:text-accent hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/saran-sarvesh-a-g-950357285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-accent dark:text-zinc-400 dark:hover:text-accent hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual Tech HUD */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 40, rotateY: -6 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 40, rotateY: -6 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* Backdrop glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-accent/[0.06] via-transparent to-cyan-500/[0.04] blur-3xl rounded-3xl" />

            <div className="relative p-8 rounded-2xl bg-[#0c0c14] text-zinc-200 border border-zinc-800/60 shadow-elevated overflow-hidden gradient-border glow-border">
              {/* Scan-line overlay */}
              <div className="scan-line absolute inset-0 pointer-events-none" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-mono font-bold text-sm border border-accent/20">
                      AI
                    </span>
                    <span className="text-sm font-medium text-zinc-400">Hardware-Edge Integration</span>
                  </div>
                  <span className="micro-label text-zinc-700">v2.1</span>
                </div>

                <div className="space-y-3">
                  <div className="h-1 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full w-full bg-gradient-to-r from-accent to-cyan-300 rounded-full origin-left"
                    />
                  </div>
                  <p className="text-xs font-mono text-zinc-500 leading-relaxed uppercase tracking-wider">
                    Model Quantization / INT8 / FP16 Compilations Active
                  </p>
                </div>

                {/* Technical specs inside the HUD */}
                <div className="space-y-2 pt-2 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-400">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">ACCELERATION ENGINE:</span>
                    <span className="text-accent font-semibold">NVIDIA TensorRT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">EDGE CONTROLLERS:</span>
                    <span className="text-zinc-300 font-semibold">ESP32 / Jetson Nano</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">CV DEPLOYMENT STACK:</span>
                    <span className="text-zinc-300 font-semibold">PyTorch / OpenCV</span>
                  </div>
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
