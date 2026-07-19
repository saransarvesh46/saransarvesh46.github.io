import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase, FiLayers } from 'react-icons/fi';

const experiences = [
  {
    role: 'AI Engineer Trainee & ML Developer',
    company: 'Self-Directed / Academic Project Collaborator',
    location: 'India',
    period: '2024 - Present',
    description: 'Developed real-time computer vision pipelines and web integrations optimized for edge devices and production environments.',
    contributions: [
      {
        title: 'Chassis Object Detection Acceleration',
        detail: 'Engineered a real-time vehicle underbody monitoring pipeline using MobileNet-SSD. Integrated NVIDIA TensorRT acceleration on Jetson boards, reducing edge inference latency to 12ms and achieving 30 FPS at 94.2% mAP.',
        tools: ['TensorRT', 'MobileNet-SSD', 'NVIDIA Jetson']
      },
      {
        title: 'Clinical Trial NLP Pipeline',
        detail: 'Developed CuraLink, an AI matchmaker linking patient records with clinical trials. Designed parsing layer using Google Gemini API and structured the API using FastAPI, decreasing semantic match latency by 78%.',
        tools: ['Google Gemini API', 'FastAPI', 'React 18']
      },
      {
        title: 'Acoustic Siren Prioritization',
        detail: 'Created an emergency siren traffic prioritization node (Traffic Aid). Extracted audio Mel-Spectrogram features, classifying siren acoustics with 96.8% accuracy to dynamically control lane signaling.',
        tools: ['Python', 'Librosa', 'FCFS Logic']
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-zinc-100 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-100/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="micro-label text-accent mb-4 block">Work History</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Engineering Experience
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mb-8" />
        </motion.div>

        {/* Timeline Grid */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm relative group hover:border-accent/30 transition-all duration-300"
            >
              {/* Timeline Info Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-accent/10 text-accent">
                    <FiBriefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-base text-zinc-500 dark:text-zinc-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-body">
                {exp.description}
              </p>

              {/* Contributions Grid */}
              <div className="space-y-6">
                <h4 className="text-sm font-mono text-accent uppercase tracking-wider font-bold mb-4">
                  Key Engineering Contributions
                </h4>
                <div className="grid gap-6 md:grid-cols-3">
                  {exp.contributions.map((item, cidx) => (
                    <div key={cidx} className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/20 border border-zinc-200/40 dark:border-zinc-800/40 flex flex-col justify-between">
                      <div>
                        <h5 className="text-base font-bold text-zinc-800 dark:text-zinc-200 mb-2 font-display">
                          {item.title}
                        </h5>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-body">
                          {item.detail}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-200/30 dark:border-zinc-800/30">
                        {item.tools.map((t, tidx) => (
                          <span key={tidx} className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-200/50 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
