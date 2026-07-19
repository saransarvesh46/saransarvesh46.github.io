import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-zinc-50 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute -left-1/4 top-10 h-96 w-96 rounded-full bg-cyan-200/20 dark:bg-accent/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Section heading */}
          <div className="lg:col-span-4">
            <span className="micro-label text-accent mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
              AI Engineer & Developer
            </h2>
            <div className="h-[2px] w-[50px] bg-accent rounded-full mb-8" />
          </div>

          {/* Description */}
          <div className="lg:col-span-8 space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-body">
            <p>
              I am a dedicated AI Developer specializing in the intersection of Deep Learning, Computer Vision, and Edge Computing. 
              My experience revolves around designing and compiling optimized object detection pipelines, real-time object tracking algorithms, and robust full-stack interfaces for production.
            </p>
            <p>
              With practical hands-on expertise building vehicle chassis inspection systems, clinical trial match engines, and audio processing intersection prioritizing nodes, 
              I design systems with measurable edge efficiencies. I look to bridge complex research ideas into lightweight, industrial deployments that function reliably under low-resource contexts.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/40 text-sm font-mono">
              <div>
                <span className="text-zinc-400 block mb-1">Focus Areas:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Object Detection, Edge AI, MLOps</span>
              </div>
              <div>
                <span className="text-zinc-400 block mb-1">Methodology:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Model Compression, Real-time Latency Optimizations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
