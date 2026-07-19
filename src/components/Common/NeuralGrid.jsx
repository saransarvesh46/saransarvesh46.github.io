// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';

/* ── Neural Grid — Global ambient background ─────────────────────────
   Subtle dot grid with decorative SVG neural connection paths.
   Fixed behind all content, barely visible. Shifts with scroll.
   Creates the "AI network" atmosphere throughout the page.
   ──────────────────────────────────────────────────────────────────── */

const NeuralGrid = () => {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dot grid pattern — shifts slightly on scroll */}
      <motion.div
        className="absolute inset-[-10%] w-[120%] h-[120%] neural-dots text-zinc-400/50 dark:text-zinc-600/30"
        style={{ y: gridY }}
      />

      {/* Neural connection paths — decorative SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] dark:opacity-[0.02]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Group 1: Pulse delay 0s */}
        <g className="neural-line-pulse">
          <path
            d="M80,180 Q250,120 450,220 T900,160"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            className="text-accent"
            strokeDasharray="12 8"
          />
          {[
            [80, 180, 1.5], [450, 220, 2.0], [900, 160, 2.5], [300, 350, 1.5]
          ].map(([cx, cy, r], i) => (
            <circle
              key={`g1-${i}`}
              cx={cx}
              cy={cy}
              r={r}
              className="fill-accent"
            />
          ))}
        </g>

        {/* Group 2: Pulse delay 2s */}
        <g className="neural-line-pulse" style={{ animationDelay: '2s' }}>
          <path
            d="M0,480 Q200,420 480,530 T1000,460"
            stroke="currentColor"
            strokeWidth="0.4"
            fill="none"
            className="text-accent"
            strokeDasharray="8 12"
          />
          {[
            [0, 480, 1.5], [480, 530, 2.0], [1000, 460, 2.5], [500, 100, 2.5]
          ].map(([cx, cy, r], i) => (
            <circle
              key={`g2-${i}`}
              cx={cx}
              cy={cy}
              r={r}
              className="fill-accent"
            />
          ))}
        </g>

        {/* Group 3: Pulse delay 4s */}
        <g className="neural-line-pulse" style={{ animationDelay: '4s' }}>
          <path
            d="M150,780 Q400,720 650,810 T1000,750"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-accent"
            strokeDasharray="10 6"
          />
          {[
            [150, 780, 1.5], [650, 810, 2.0], [1000, 750, 2.5], [700, 600, 2.0]
          ].map(([cx, cy, r], i) => (
            <circle
              key={`g3-${i}`}
              cx={cx}
              cy={cy}
              r={r}
              className="fill-accent"
            />
          ))}
        </g>
      </svg>

      {/* Central radial glow — very subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/[0.015] dark:bg-accent/[0.01] blur-[200px]" />
    </div>
  );
};

export default NeuralGrid;
