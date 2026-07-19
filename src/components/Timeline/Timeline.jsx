import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiGitPullRequest, FiActivity, FiBriefcase, FiBookOpen } from 'react-icons/fi';

const timelineEvents = [
  {
    year: '2020',
    title: 'Secondary Academic Foundation',
    category: 'Education',
    icon: <FiBookOpen className="w-5 h-5" />,
    short: 'Completed secondary schooling with strong foundations in Mathematics and Sciences.',
    details: 'Acquired core competencies in physics, calculus, and computing fundamentals, paving the interest path for algorithms and embedded hardware prototyping.'
  },
  {
    year: '2021 - 2024',
    title: 'Undergraduate Engineering Studies',
    category: 'Education',
    icon: <FiBookOpen className="w-5 h-5" />,
    short: 'Pursued Bachelor of Engineering with focus on machine learning and computational logic.',
    details: 'Maintained a strong academic record (CGPA: 8.44/10). Completed key coursework in Deep Learning, Data Structures & Algorithms, Systems Programming, and Linear Algebra.'
  },
  {
    year: '2023',
    title: 'ML Research & Hackathons (Project Expo Winner)',
    category: 'Achievements',
    icon: <FiActivity className="w-5 h-5" />,
    short: 'Won multiple project awards including the Project Expo Winner title.',
    details: 'Designed autonomous voter checkpoint solutions and emergency priority routing systems. Secured initial project funding (Spark Fund) for embedded engineering prototypes.'
  },
  {
    year: '2024 - Present',
    title: 'AI Trainee & MLOps Developer',
    category: 'Experience',
    icon: <FiBriefcase className="w-5 h-5" />,
    short: 'Engaging in self-directed model optimizations and MLOps deployments.',
    details: 'Compiling YOLO and MobileNet edge nodes, optimizing pipelines for low-power NVIDIA Jetson platforms, and integrating FastAPI data backends.'
  },
  {
    year: 'Future Focus',
    title: 'Edge AI Research & Academic Pathways',
    category: 'Future Goals',
    icon: <FiGitPullRequest className="w-5 h-5" />,
    short: 'Aiming to advance research in hardware-efficient vision architectures.',
    details: 'Seeking research opportunities at world-class universities to specialize in real-time tracking pipelines, vision transformers, and autonomous vehicle vision systems.'
  }
];

const Timeline = () => {
  const [selectedIdx, setSelectedIdx] = useState(3); // Start with active/latest selected

  return (
    <section id="timeline" className="py-28 relative overflow-hidden bg-zinc-100 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="micro-label text-accent mb-4 block">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Interactive Career Timeline
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mb-8" />
        </motion.div>

        {/* Timeline Layout */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left: Interactive list of points */}
          <div className="lg:col-span-5 relative border-l border-zinc-200 dark:border-zinc-800 ml-4 lg:ml-0 pl-6 space-y-8">
            {timelineEvents.map((evt, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className="relative group cursor-pointer"
                >
                  {/* Indicator Dot */}
                  <div
                    className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#f4f4f5] dark:bg-[#030305] transition-all duration-300 ${
                      isSelected
                        ? 'border-accent scale-125 shadow-[0_0_8px_rgba(14,165,233,0.4)]'
                        : 'border-zinc-300 dark:border-zinc-700 group-hover:border-accent/60'
                    }`}
                  />
                  
                  {/* Summary Text */}
                  <div className="space-y-1">
                    <span className={`font-mono text-xs tracking-wider uppercase font-semibold ${isSelected ? 'text-accent' : 'text-zinc-400'}`}>
                      {evt.year}
                    </span>
                    <h3 className={`text-base font-bold font-display transition-colors duration-300 ${isSelected ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-400'}`}>
                      {evt.title}
                    </h3>
                    <span className="inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-200/50 text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-500">
                      {evt.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Card */}
          <div className="lg:col-span-7 h-full min-h-[300px]">
            <AnimatePresence mode="wait">
              {selectedIdx !== null && (
                <motion.div
                  key={selectedIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-2xl bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm space-y-6 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-xl bg-accent/10 text-accent">
                        {timelineEvents[selectedIdx].icon}
                      </div>
                      <div>
                        <span className="font-mono text-sm font-semibold text-accent block">
                          {timelineEvents[selectedIdx].year}
                        </span>
                        <h4 className="text-xl font-bold font-display text-zinc-900 dark:text-zinc-100">
                          {timelineEvents[selectedIdx].title}
                        </h4>
                      </div>
                    </div>
                    
                    <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed font-body">
                      {timelineEvents[selectedIdx].short}
                    </p>
                    
                    <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-body">
                      {timelineEvents[selectedIdx].details}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span>SELECTION INDEX: {String(selectedIdx + 1).padStart(2, '0')}</span>
                    <span className="flex items-center gap-1">
                      Explore next <FiChevronRight />
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
