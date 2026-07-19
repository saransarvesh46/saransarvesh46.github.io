import { motion } from 'framer-motion';
import { FiDownload, FiCheck, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';

const Resume = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1e0EsSP_gfRlEdM7a2bbGbucYXNP8Jjww/view?usp=sharing';

  return (
    <section id="resume" className="py-28 relative overflow-hidden bg-zinc-50 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="micro-label text-accent mb-4 block">Qualifications</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Curriculum Vitae
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mx-auto mb-8" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left: Professional Preview Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 shadow-lg text-zinc-800 dark:text-zinc-200 space-y-6 select-none relative overflow-hidden"
            >
              {/* Design accents */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-cyan-400 to-transparent" />
              
              {/* Header Mock */}
              <div className="flex justify-between items-start border-b border-zinc-100 dark:border-zinc-800/60 pb-6">
                <div>
                  <h3 className="text-2xl font-bold font-display text-zinc-900 dark:text-zinc-100">
                    Saran Sarvesh A G
                  </h3>
                  <p className="text-xs font-mono text-accent font-semibold tracking-wider uppercase mt-1">
                    AI Engineer &amp; Full-Stack Developer
                  </p>
                </div>
                <div className="text-right text-[10px] font-mono text-zinc-400 space-y-0.5">
                  <p className="flex items-center gap-1"><FiMail className="w-3.5 h-3.5" /> saransarvesh213@gmail.com</p>
                  <p className="flex items-center gap-1"><FiMapPin className="w-3.5 h-3.5" /> Erode, TN, India</p>
                </div>
              </div>

              {/* Education Mock */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-mono text-accent font-bold">
                  Education
                </h4>
                <div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    B.Sc. Computer Technology (UG Information Systems)
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    CGPA: 7.78/10 | Coursework: ML, Computer Vision, MERN, IoT
                  </p>
                </div>
              </div>

              {/* Experience Mock */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-mono text-accent font-bold">
                  Key Experience
                </h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      <span>AI &amp; Automation Trainee / Intern</span>
                      <span className="font-mono text-xs text-zinc-400">2025 - Pres.</span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                      Deployed underbody inspection vision pipelines (94.2% mAP), environmental poultry controllers, blockchain facial-voting portals, and MERN admin dashboards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Mock */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-mono text-accent font-bold">
                  Skills Snapshot
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'React.js', 'Node.js', 'OpenCV', 'YOLO', 'ESP32', 'MySQL'].map((s) => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-zinc-800/40">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right: Download Actions */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold font-display text-zinc-900 dark:text-zinc-100">
              Get the Full Resume
            </h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-body">
              Download the comprehensive PDF for detailed credentials, certification IDs, verification credentials, and complete research descriptions.
            </p>
            
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 font-body">
              <li className="flex items-center gap-2.5">
                <FiCheck className="text-accent w-4 h-4 flex-shrink-0" />
                <span>NVIDIA TensorRT Edge metrics details</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="text-accent w-4 h-4 flex-shrink-0" />
                <span>Oracle &amp; Deep Learning credential links</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="text-accent w-4 h-4 flex-shrink-0" />
                <span>Extended IoT hardware interface specs</span>
              </li>
            </ul>

            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-white font-semibold shadow-glow hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(14,165,233,0.25)] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-zinc-50 dark:focus:ring-offset-[#030305] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiDownload className="w-5 h-5" />
              Download PDF Resume
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
