import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiCpu, FiTrendingUp, FiActivity, FiLayers } from 'react-icons/fi';

const FeaturedProject = memo(({ project }) => {
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -1;
    const tiltY = ((x - centerX) / centerX) * 1;

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: 'perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="group relative overflow-hidden rounded-[2rem] p-8 md:p-12 bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/80 shadow-md hover:border-accent/40 transition-all duration-500"
      >
        {/* Top Gradient Accent Lip */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-cyan-400 to-transparent" />

        {/* Spotlight Effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(14,165,233,0.05), transparent 45%)',
          }}
        />

        <div className="grid gap-8 lg:grid-cols-12 relative z-10">
          {/* Left Column: Metadata and Case Study Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Featured Case Study
              </span>
              <span className="text-xs font-mono text-zinc-400">FPS: 30 / Latency: 12ms</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-accent transition-colors duration-500">
              {project.title}
            </h3>

            {/* Structured Specifications Grid */}
            <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-body">
              <div>
                <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">Problem:</span>
                <p className="mt-1">{project.problem}</p>
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">Proposed Solution:</span>
                <p className="mt-1">{project.solution}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200/40 dark:border-zinc-800/40 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-zinc-400 block font-semibold">DATASET SPEC:</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-bold">{project.dataset}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-zinc-400 block font-semibold">ACCURACY RATE:</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-bold">{project.accuracy}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-zinc-400 block font-semibold">EDGE TARGET HARDWARE:</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-bold">{project.hardware}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-zinc-400 block font-semibold">COMPILER PIPELINE:</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-bold">{project.model}</span>
                </div>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 pt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-zinc-800/40 uppercase tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm font-semibold border border-transparent hover:border-accent/40 hover:text-accent transition-all duration-300 font-mono"
                >
                  <FiGithub className="w-4 h-4" /> Source Code
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Diagram Mock */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/40 dark:border-zinc-800/40">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-4 block font-bold">
              Deployment Flow Diagram
            </span>
            
            {/* SVG/HTML Diagram */}
            <div className="space-y-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 flex items-center gap-3">
                <FiLayers className="text-accent w-4 h-4" />
                <div>
                  <span className="text-[10px] text-zinc-400 block">INPUT NODE:</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-semibold">1080p Undercarriage Feeds</span>
                </div>
              </div>

              <div className="w-px h-6 bg-accent/40 mx-auto" />

              <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 flex items-center gap-3">
                <FiCpu className="text-accent w-4 h-4" />
                <div>
                  <span className="text-[10px] text-zinc-400 block">MODEL DEPLOY:</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-semibold">MobileNet SSD (TensorRT)</span>
                </div>
              </div>

              <div className="w-px h-6 bg-accent/40 mx-auto" />

              <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 flex items-center gap-3">
                <FiActivity className="text-accent w-4 h-4" />
                <div>
                  <span className="text-[10px] text-zinc-400 block">OUTPUT TARGET:</span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-semibold">12ms Latency Bounding Boxes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
});

FeaturedProject.displayName = 'FeaturedProject';

export default FeaturedProject;
