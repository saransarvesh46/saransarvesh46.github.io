// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

/* ── Floating 3D Geometric Shapes ────────────────────────────────────
   Pure CSS 3D wireframe shapes that float and rotate.
   Uses CSS transform-style: preserve-3d with framer-motion for drift.
   Placed as decorative background elements across sections.
   ──────────────────────────────────────────────────────────────────── */

/* ── Wireframe Cube ── */
const WireframeCube = ({ size = 60, color = 'rgba(255, 77, 0, 0.15)', className = '' }) => {
  const half = size / 2;
  const faceStyle = (transform) => ({
    position: 'absolute',
    width: size,
    height: size,
    border: `1px solid ${color}`,
    transform,
    backfaceVisibility: 'visible',
  });

  return (
    <div
      className={`shape-3d ${className}`}
      style={{ width: size, height: size, position: 'relative' }}
    >
      {/* Front */}
      <div style={faceStyle(`translateZ(${half}px)`)} />
      {/* Back */}
      <div style={faceStyle(`translateZ(${-half}px) rotateY(180deg)`)} />
      {/* Left */}
      <div style={faceStyle(`translateX(${-half}px) rotateY(-90deg)`)} />
      {/* Right */}
      <div style={faceStyle(`translateX(${half}px) rotateY(90deg)`)} />
      {/* Top */}
      <div style={faceStyle(`translateY(${-half}px) rotateX(90deg)`)} />
      {/* Bottom */}
      <div style={faceStyle(`translateY(${half}px) rotateX(-90deg)`)} />
    </div>
  );
};

/* ── Wireframe Octahedron (diamond shape) ── */
const WireframeOctahedron = ({ size = 50, color = 'rgba(255, 77, 0, 0.12)' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className="shape-3d"
  >
    {/* Top pyramid */}
    <polygon
      points="50,5 90,50 10,50"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
    {/* Bottom pyramid */}
    <polygon
      points="50,95 90,50 10,50"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
    {/* Side lines for 3D illusion */}
    <line x1="50" y1="5" x2="50" y2="95" stroke={color} strokeWidth="0.8" strokeDasharray="4 4" />
    <line x1="10" y1="50" x2="90" y2="50" stroke={color} strokeWidth="0.8" strokeDasharray="4 4" />
  </svg>
);

/* ── Wireframe Ring / Torus outline ── */
const WireframeRing = ({ size = 70, color = 'rgba(255, 77, 0, 0.1)' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className="shape-3d"
  >
    <ellipse cx="50" cy="50" rx="44" ry="44" stroke={color} strokeWidth="1.5" fill="none" />
    <ellipse cx="50" cy="50" rx="44" ry="18" stroke={color} strokeWidth="1" fill="none" />
    <ellipse
      cx="50"
      cy="50"
      rx="18"
      ry="44"
      stroke={color}
      strokeWidth="0.8"
      fill="none"
      strokeDasharray="6 4"
    />
  </svg>
);

/* ── Wireframe Pyramid ── */
const WireframePyramid = ({ size = 55, color = 'rgba(255, 77, 0, 0.13)' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className="shape-3d"
  >
    {/* Base */}
    <polygon
      points="15,80 85,80 70,65 30,65"
      stroke={color}
      strokeWidth="1.2"
      fill="none"
    />
    {/* Apex lines */}
    <line x1="50" y1="15" x2="15" y2="80" stroke={color} strokeWidth="1.2" />
    <line x1="50" y1="15" x2="85" y2="80" stroke={color} strokeWidth="1.2" />
    <line x1="50" y1="15" x2="70" y2="65" stroke={color} strokeWidth="1" strokeDasharray="4 3" />
    <line x1="50" y1="15" x2="30" y2="65" stroke={color} strokeWidth="1" strokeDasharray="4 3" />
  </svg>
);

/* ── Cross / Plus shape ── */
const CrossShape = ({ size = 40, color = 'rgba(255, 77, 0, 0.12)' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <line x1="20" y1="4" x2="20" y2="36" stroke={color} strokeWidth="1.5" />
    <line x1="4" y1="20" x2="36" y2="20" stroke={color} strokeWidth="1.5" />
  </svg>
);

/* ── Main export: configurable floating shapes layer ── */
const FloatingShapes = ({ variant = 'hero' }) => {
  const configs = {
    hero: [
      {
        Shape: WireframeCube,
        props: { size: 50, color: 'rgba(255, 77, 0, 0.12)' },
        position: 'top-[15%] right-[8%]',
        spinClass: 'spin-slow',
        drift: { x: [0, 20, 0], y: [0, -15, 0] },
        driftDuration: 14,
      },
      {
        Shape: WireframeOctahedron,
        props: { size: 45, color: 'rgba(255, 77, 0, 0.1)' },
        position: 'bottom-[25%] right-[15%]',
        spinClass: 'spin-reverse',
        drift: { x: [0, -15, 0], y: [0, 20, 0] },
        driftDuration: 18,
      },
      {
        Shape: WireframeRing,
        props: { size: 65, color: 'rgba(255, 77, 0, 0.08)' },
        position: 'top-[35%] left-[5%]',
        spinClass: 'spin-slow',
        drift: { x: [0, 25, 0], y: [0, -10, 0] },
        driftDuration: 22,
      },
      {
        Shape: CrossShape,
        props: { size: 30 },
        position: 'top-[55%] right-[25%]',
        spinClass: '',
        drift: { rotate: [0, 180, 360] },
        driftDuration: 16,
      },
      {
        Shape: WireframePyramid,
        props: { size: 40, color: 'rgba(255, 77, 0, 0.1)' },
        position: 'bottom-[15%] left-[20%]',
        spinClass: 'spin-reverse',
        drift: { x: [0, 12, 0], y: [0, -18, 0] },
        driftDuration: 20,
      },
    ],
    skills: [
      {
        Shape: WireframeCube,
        props: { size: 35, color: 'rgba(255, 77, 0, 0.08)' },
        position: 'top-[10%] right-[5%]',
        spinClass: 'spin-slow',
        drift: { y: [0, -12, 0] },
        driftDuration: 16,
      },
      {
        Shape: WireframeRing,
        props: { size: 50, color: 'rgba(255, 77, 0, 0.06)' },
        position: 'bottom-[20%] left-[8%]',
        spinClass: 'spin-reverse',
        drift: { x: [0, 15, 0] },
        driftDuration: 20,
      },
      {
        Shape: CrossShape,
        props: { size: 24 },
        position: 'top-[45%] left-[3%]',
        spinClass: '',
        drift: { rotate: [0, 360] },
        driftDuration: 12,
      },
    ],
    projects: [
      {
        Shape: WireframeOctahedron,
        props: { size: 40, color: 'rgba(255, 77, 0, 0.08)' },
        position: 'top-[8%] left-[6%]',
        spinClass: 'spin-slow',
        drift: { x: [0, 18, 0], y: [0, -12, 0] },
        driftDuration: 18,
      },
      {
        Shape: WireframePyramid,
        props: { size: 35, color: 'rgba(255, 77, 0, 0.07)' },
        position: 'bottom-[15%] right-[8%]',
        spinClass: 'spin-reverse',
        drift: { y: [0, 15, 0] },
        driftDuration: 22,
      },
    ],
    contact: [
      {
        Shape: WireframeCube,
        props: { size: 40, color: 'rgba(255, 77, 0, 0.08)' },
        position: 'top-[20%] right-[10%]',
        spinClass: 'spin-slow',
        drift: { x: [0, 14, 0], y: [0, -10, 0] },
        driftDuration: 17,
      },
      {
        Shape: WireframeRing,
        props: { size: 55, color: 'rgba(255, 77, 0, 0.06)' },
        position: 'bottom-[25%] left-[5%]',
        spinClass: 'spin-reverse',
        drift: { x: [0, -10, 0] },
        driftDuration: 24,
      },
    ],
  };

  const shapes = configs[variant] || configs.hero;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden perspective-container">
      {shapes.map((config, i) => {
        const { Shape, props, position, spinClass, drift, driftDuration } = config;
        return (
          <motion.div
            key={`shape-${variant}-${i}`}
            className={`absolute ${position}`}
            animate={drift}
            transition={{
              duration: driftDuration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className={spinClass}>
              <Shape {...props} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingShapes;
