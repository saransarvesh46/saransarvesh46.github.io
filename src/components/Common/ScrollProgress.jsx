import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

/* ── Vertical Scroll Progress — Industrial AI Style ──────────────────
   Desktop: Glowing vertical line with section markers + status label.
   Mobile:  Thin horizontal accent bar at top.
   "Active" micro-label with pulsing indicator dot.
   ──────────────────────────────────────────────────────────────────── */

const sections = ['home', 'skills', 'projects', 'contact'];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });
  const fillHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveIdx(i);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop: Vertical progress on left ── */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3">
        {/* SYSTEM ACTIVE micro-label */}
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
          <span className="micro-label text-accent/50">Active</span>
        </div>

        {/* Glow track + fill */}
        <div className="relative w-[1.5px] h-36 bg-zinc-300/20 dark:bg-zinc-700/15 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 rounded-full bg-accent/15 blur-sm"
            style={{ height: fillHeight }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full rounded-full bg-accent"
            style={{ height: fillHeight }}
          />
        </div>

        {/* Section markers */}
        <div className="flex flex-col items-center gap-3 mt-1">
          {sections.map((section, i) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center justify-center w-11 h-11"
              aria-label={`Go to ${section}`}
            >
              <div
                className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${
                  activeIdx === i
                    ? 'bg-accent shadow-[0_0_8px_rgba(14,165,233,0.5)] scale-125'
                    : 'bg-zinc-400/30 dark:bg-zinc-600/25 group-hover:bg-accent/50'
                }`}
              />
              <span className="absolute left-6 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 micro-label text-zinc-500 dark:text-zinc-600 capitalize pointer-events-none">
                {section}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Mobile: Horizontal bar at top ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-accent origin-left z-[100] lg:hidden"
        style={{ scaleX: smoothProgress }}
      />
    </>
  );
};

export default ScrollProgress;
