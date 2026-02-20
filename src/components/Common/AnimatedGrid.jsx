import { motion, useScroll, useTransform } from 'framer-motion';

/* ── Animated Grid Background ────────────────────────────────────────
   Subtle dot-grid pattern that shifts with scroll + radial glow.
   Applied globally behind the entire page for depth.
   ──────────────────────────────────────────────────────────────────── */

const AnimatedGrid = () => {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.8, 0.3]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dot grid pattern — shifts slightly on scroll */}
      <motion.div
        className="absolute inset-0 grid-dots text-stone-400/60 dark:text-neutral-600/40"
        style={{ y: gridY }}
      />

      {/* Centre radial glow — accent tinted */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          opacity: glowOpacity,
          background:
            'radial-gradient(circle, rgba(255, 77, 0, 0.03) 0%, transparent 70%)',
        }}
      />

      {/* Corner gradient washes */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-accent/[0.02] to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-stone-200/10 to-transparent dark:from-neutral-800/10" />
    </div>
  );
};

export default AnimatedGrid;
