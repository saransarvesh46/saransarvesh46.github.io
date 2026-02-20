// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState, useRef, useCallback } from 'react';
import { 
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, 
  FaHtml5, FaCss3Alt, FaGit, FaAndroid, FaChartBar, FaCode
} from 'react-icons/fa';
import { 
  SiC, SiMongodb, SiMysql, SiOracle, SiFlask, SiFastapi, SiTensorflow, 
  SiOpencv, SiPandas, SiNumpy, SiPhp, SiTailwindcss
} from 'react-icons/si';

/* ── Skills — Industrial cards with mouse tilt + spotlight ───────────
   Grid of skill category cards with perspective tilt on mouse move.
   Staggered scroll-triggered reveals. Micro-labels and accent glow.
   ──────────────────────────────────────────────────────────────────── */

const skillsByCategory = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, icon: <FaPython className="w-6 h-6" /> },
      { name: 'Java', level: 85, icon: <FaJava className="w-6 h-6" /> },
      { name: 'C', level: 80, icon: <SiC className="w-6 h-6" /> },
      { name: 'JavaScript', level: 85, icon: <FaJs className="w-6 h-6" /> },
      { name: 'PHP', level: 75, icon: <SiPhp className="w-6 h-6" /> },
      { name: 'SQL', level: 85, icon: <FaDatabase className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 85, icon: <FaReact className="w-6 h-6" /> },
      { name: 'HTML5', level: 90, icon: <FaHtml5 className="w-6 h-6" /> },
      { name: 'CSS3', level: 85, icon: <FaCss3Alt className="w-6 h-6" /> },
      { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 80, icon: <FaNodeJs className="w-6 h-6" /> },
      { name: 'Flask', level: 75, icon: <SiFlask className="w-6 h-6" /> },
      { name: 'FastAPI', level: 70, icon: <SiFastapi className="w-6 h-6" /> },
      { name: 'MongoDB', level: 75, icon: <SiMongodb className="w-6 h-6" /> },
      { name: 'MySQL', level: 80, icon: <SiMysql className="w-6 h-6" /> },
      { name: 'Oracle', level: 70, icon: <SiOracle className="w-6 h-6" /> },
    ]
  },
  {
    category: 'AI/ML & Data Science',
    skills: [
      { name: 'TensorFlow', level: 80, icon: <SiTensorflow className="w-6 h-6" /> },
      { name: 'Data Visualization', level: 75, icon: <FaChartBar className="w-6 h-6" /> },
      { name: 'OpenCV', level: 80, icon: <SiOpencv className="w-6 h-6" /> },
      { name: 'Pandas', level: 85, icon: <SiPandas className="w-6 h-6" /> },
      { name: 'NumPy', level: 85, icon: <SiNumpy className="w-6 h-6" /> },
    ]
  }
];

const tools = [
  { name: 'GitHub', icon: <FaGithub className="w-8 h-8" /> },
  { name: 'Git', icon: <FaGit className="w-8 h-8" /> },
  { name: 'VS Code', icon: <FaCode className="w-8 h-8" /> },
  { name: 'Android Studio', icon: <FaAndroid className="w-8 h-8" /> },
  { name: 'Data Visualization', icon: <FaChartBar className="w-8 h-8" /> },
];

/* ── Skill row item with accent hover ── */
const SkillItem = ({ name, icon }) => (
  <motion.div
    className="group/item flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-zinc-200/60 hover:bg-zinc-50/50 transition-all duration-200 dark:hover:border-zinc-800 dark:hover:bg-zinc-800/30"
    whileHover={{ x: 4 }}
    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
  >
    <span className="flex items-center justify-center w-8 h-8 text-accent group-hover/item:drop-shadow-[0_0_8px_rgba(14,165,233,0.3)] transition-all duration-300">{icon}</span>
    <span className="text-zinc-600 font-medium text-sm flex-1 dark:text-zinc-400">{name}</span>
    <motion.div
      className="h-[2px] w-0 group-hover/item:w-5 bg-accent rounded-full transition-all duration-300"
    />
  </motion.div>
);

/* ── Skill card with mouse-follow tilt + spotlight ── */
const SkillCard = ({ category, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setMousePosition({ x, y });
    setTilt({
      x: ((y - centerY) / centerY) * -4,
      y: ((x - centerX) / centerX) * 4,
    });
  }, []);

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.3s ease-out',
      }}
      className={`group relative overflow-hidden rounded-2xl p-7
        bg-white/80 backdrop-blur-xl border border-zinc-200/60
        hover:border-accent/20 hover:shadow-card-hover
        transition-all duration-300 gradient-border
        dark:bg-[#0c0c14]/80 dark:border-zinc-800/60 dark:hover:border-accent/20
        ${index % 2 !== 0 ? 'md:translate-y-6' : ''}`}
    >
      {/* Cursor spotlight effect — accent tinted */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.04), transparent 40%)`,
        }}
      />
      {/* Micro-label */}
      <span className="micro-label text-zinc-400/60 dark:text-zinc-700 mb-4 block relative z-10">Tech Stack</span>

      <h3 className="text-xl font-display font-bold text-zinc-900 mb-5 flex items-center gap-3 dark:text-zinc-100 relative z-10">
        <span className="text-accent">{category.skills[0].icon}</span>
        {category.category}
      </h3>
      <div className="space-y-1 relative z-10">
        {category.skills.map((skill, idx) => (
          <SkillItem
            key={`${skill.name}-${idx}`}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-zinc-100 dark:bg-[#050508]">
      {/* Subtle ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/[0.02] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-zinc-200/20 to-transparent dark:from-zinc-900/30" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 max-w-2xl"
        >
          <span className="micro-label text-accent/50 mb-4 block">Capabilities</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-[-0.03em] text-zinc-900 mb-4 dark:text-zinc-100">
            Skills & Expertise
          </h2>
          <motion.div
            className="h-[2px] w-0 bg-accent rounded-full mb-4"
            whileInView={{ width: '60px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-zinc-500 text-lg dark:text-zinc-500">
            Technologies I work with
          </p>
        </motion.div>

        {/* Skill cards — 2-col with offset for visual rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsByCategory.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 bg-white/60 backdrop-blur-xl p-8 rounded-2xl
            border border-zinc-200/60
            dark:bg-[#0c0c14]/60 dark:border-zinc-800/40"
        >
          <div className="text-center mb-8">
            <span className="micro-label text-accent/50 mb-2 block">Workflow</span>
            <h3 className="text-2xl font-display font-bold text-zinc-900 mb-2 dark:text-zinc-100">
              Tools & Technologies
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Development tools I use daily
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-col items-center p-4 rounded-xl border border-zinc-200/60 bg-zinc-50/50 hover:bg-white hover:border-accent/20 hover:shadow-[0_0_20px_rgba(14,165,233,0.06)] transition-all duration-300 dark:bg-zinc-800/30 dark:border-zinc-800/60 dark:hover:border-accent/20 dark:hover:bg-zinc-800/50 gradient-border"
              >
                <div className="text-accent mb-2">
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-zinc-600 text-center dark:text-zinc-400">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
