import { useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

/* ── Particle Field ──────────────────────────────────────────────────
   Floating accent-colored dots that drift randomly.
   Lightweight — uses framer-motion for animation, no canvas.
   Each particle gets randomized position, size, opacity, and path.
   ──────────────────────────────────────────────────────────────────── */

const ParticleField = ({ count = 25, className = '' }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.3 + 0.05,
      driftX: (Math.random() - 0.5) * 60,
      driftY: (Math.random() - 0.5) * 60,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            x: [0, p.driftX, -p.driftX * 0.5, 0],
            y: [0, p.driftY, -p.driftY * 0.3, 0],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity * 0.6, p.opacity],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
