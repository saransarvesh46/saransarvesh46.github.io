import { motion } from 'framer-motion';
import { FiAward, FiStar, FiCpu, FiTrendingUp } from 'react-icons/fi';

const achievements = [
  {
    title: 'SPARK Fund Winner',
    subtitle: '₹20,000 Project Grant',
    description: 'Awarded the SPARK Fund for developing an automated vehicle underbody monitoring system using computer vision to enhance safety and obstacle check operations.',
    icon: <FiCpu className="w-5 h-5" />
  },
  {
    title: 'Website Development Competition',
    subtitle: '2nd Place (2024)',
    description: 'Secured 2nd place out of 15+ competing teams in the Inter-Department Website Development Competition by developing a responsive, high-performance web app.',
    icon: <FiAward className="w-5 h-5" />
  },
  {
    title: 'Industrial AI & IoT Deployments',
    subtitle: 'Real-world Implementations',
    description: 'Successfully developed and deployed multiple real-time edge, IoT, and full-stack projects integrated directly into industrial floor operations.',
    icon: <FiStar className="w-5 h-5" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-28 relative overflow-hidden bg-zinc-100 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="micro-label text-accent mb-4 block">Key Milestones</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Achievements &amp; Awards
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mx-auto mb-8" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm flex flex-col justify-between hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-accent/10 text-accent w-fit group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                
                <div>
                  <h3 className="text-lg font-bold font-display text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1 font-semibold">
                    {item.subtitle}
                  </p>
                </div>
                
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
              
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60 mt-6 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>VERIFIED AWARD</span>
                <FiTrendingUp className="text-accent w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
