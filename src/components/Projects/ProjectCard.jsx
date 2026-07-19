import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = memo(({ project, idx }) => {
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -1.5;
    const tiltY = ((x - centerX) / centerX) * 1.5;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--tilt-x', `${tiltX}deg`);
    card.style.setProperty('--tilt-y', `${tiltY}deg`);
  }, []);

  const handleMouseLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: 'perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="group relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm hover:border-accent/30 hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between min-h-[480px]"
      >
        {/* Top Lip */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-80" />

        {/* Hover spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(14, 165, 233, 0.03), transparent 40%)',
          }}
        />

        <div className="space-y-6 relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-zinc-100 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-zinc-400 font-semibold">
              {String(idx + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Description Grid */}
          <div className="space-y-3.5 text-sm leading-relaxed font-body text-zinc-600 dark:text-zinc-400">
            <div>
              <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider block">Problem:</span>
              <p className="mt-0.5">{project.problem}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider block">Solution &amp; Impact:</span>
              <p className="mt-0.5">{project.solution}</p>
            </div>
            {project.results && (
              <div>
                <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider block">Performance Results:</span>
                <p className="mt-0.5 font-semibold text-zinc-800 dark:text-zinc-200">{project.results}</p>
              </div>
            )}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/40 dark:border-zinc-800/40 uppercase tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions buttons */}
        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/60 mt-6 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-semibold hover:border-accent hover:text-accent border border-transparent transition-all duration-300 font-mono"
            >
              <FiGithub className="w-4 h-4" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-hover shadow-glow transition-all duration-300 font-mono"
            >
              <FiExternalLink className="w-4 h-4" /> Demo
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
