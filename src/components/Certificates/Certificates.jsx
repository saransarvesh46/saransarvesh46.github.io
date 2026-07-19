import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certificates = [
  {
    title: 'Oracle Certified Associate, Java Programmer',
    organization: 'Oracle',
    date: 'March 2023',
    credentialId: 'OCA-JP-88741',
    link: 'https://education.oracle.com'
  },
  {
    title: 'Deep Learning Specialization',
    organization: 'DeepLearning.AI',
    date: 'November 2023',
    credentialId: 'DL-SPEC-98242',
    link: 'https://coursera.org/verify/specialization/deep-learning'
  },
  {
    title: 'NVIDIA DLI: Fundamentals of Deep Learning',
    organization: 'NVIDIA Deep Learning Institute',
    date: 'January 2024',
    credentialId: 'NVIDIA-DLI-92812',
    link: 'https://www.nvidia.com/en-us/training/'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-28 relative overflow-hidden bg-zinc-50 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="micro-label text-accent mb-4 block">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Certifications
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mx-auto mb-8" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm flex flex-col justify-between hover:border-accent/30 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <FiAward className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    {cert.date}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-base font-bold font-display text-zinc-900 dark:text-zinc-100 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                    {cert.organization}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-400">ID: {cert.credentialId}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors font-mono"
                  aria-label={`Verify ${cert.title}`}
                >
                  Verify <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
