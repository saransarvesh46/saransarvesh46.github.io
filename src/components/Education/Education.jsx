import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const coursework = [
    'Machine Learning',
    'Deep Learning Basics',
    'Computer Vision',
    'MERN Stack Development',
    'Embedded Systems & IoT',
    'Data Structures & Algorithms',
    'Relational Databases (MySQL)'
  ];

  return (
    <section id="education" className="py-28 relative overflow-hidden bg-zinc-100 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="micro-label text-accent mb-4 block">Academic Journey</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Education
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mx-auto mb-8" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-12 items-stretch">
          
          {/* Main degree card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-8 p-8 rounded-2xl bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <FiBookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold text-accent block">
                    Bachelor of Science (B.Sc.)
                  </span>
                  <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-zinc-100">
                    Computer Technology — UG (Information Systems)
                  </h3>
                </div>
              </div>
              
              <div className="text-base text-zinc-600 dark:text-zinc-400 font-medium space-y-3 font-body">
                <p>
                  Studied at <strong>Kongu Engineering College</strong> (Perundurai, Erode). Focused on real-world AI applications, web application architectures, embedded systems programming, and database administration.
                </p>
                <p className="text-sm">
                  <strong>Academic Projects:</strong> Automated Vehicle Underbody Monitoring System, IoT Poultry Farm Automation System, Blockchain Smart Voting.
                </p>
              </div>
              
              {/* Coursework list */}
              <div className="pt-4 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-zinc-600 dark:text-zinc-400 block font-bold">
                  Core &amp; Specialized Coursework:
                </span>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span key={course} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200/60 dark:bg-zinc-800/40 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/60 mt-6 flex items-center justify-between text-sm text-zinc-650 dark:text-zinc-400">
              <span>Saran Sarvesh A G</span>
              <span className="font-mono font-semibold text-accent">Batch of 2023 - 2026</span>
            </div>
          </motion.div>

          {/* CGPA & Schooling card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-4 p-8 rounded-2xl bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm flex flex-col justify-between text-center"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-600 dark:text-zinc-400 block font-bold">
                Academic Standing
              </span>
              <div className="relative py-2">
                <span className="text-6xl font-display font-bold text-zinc-900 dark:text-zinc-100">
                  7.78
                </span>
                <span className="text-base font-mono text-zinc-650 dark:text-zinc-400 block mt-1">
                  / 10 CGPA
                </span>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-200/30 dark:border-zinc-800/30 text-left space-y-2 mt-4">
              <span className="text-[10px] font-mono text-sky-700 dark:text-accent font-bold uppercase tracking-wider block">Higher Secondary</span>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Kongu National Matric Hr Sec School</h4>
              <div className="flex justify-between items-center text-xs text-zinc-650 dark:text-zinc-400">
                <span>Score: <strong>79%</strong></span>
                <span>Year: <strong>2023</strong></span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
