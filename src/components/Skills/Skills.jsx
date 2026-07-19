import { motion } from 'framer-motion';
import { memo, useRef, useCallback } from 'react';
import {
  FaPython, FaNodeJs, FaDatabase, FaGithub, FaGit, FaAndroid, FaCode, FaReact
} from 'react-icons/fa';
import {
  SiMongodb, SiMysql, SiFlask, SiFastapi, SiTensorflow,
  SiOpencv, SiPytorch, SiDocker, SiMediapipe, SiArduino, SiScikitlearn, SiTailwindcss
} from 'react-icons/si';

const skillsByCategory = [
  {
    category: 'Languages & Core Systems',
    skills: [
      { name: 'Python', level: 95, icon: <FaPython className="w-5 h-5" /> },
      { name: 'C++', level: 75, icon: <FaCode className="w-5 h-5" /> },
      { name: 'Java Programming', level: 80, icon: <FaCode className="w-5 h-5" /> },
      { name: 'JavaScript (ES6+)', level: 80, icon: <FaCode className="w-5 h-5" /> },
    ]
  },
  {
    category: 'AI, Deep Learning & CV',
    skills: [
      { name: 'PyTorch', level: 90, icon: <SiPytorch className="w-5 h-5" /> },
      { name: 'TensorFlow / Lite', level: 85, icon: <SiTensorflow className="w-5 h-5" /> },
      { name: 'OpenCV (Vision)', level: 90, icon: <SiOpencv className="w-5 h-5" /> },
      { name: 'MediaPipe & Tracking', level: 85, icon: <SiMediapipe className="w-5 h-5" /> },
    ]
  },
  {
    category: 'APIs & Full-Stack Systems',
    skills: [
      { name: 'FastAPI / Flask', level: 85, icon: <SiFastapi className="w-5 h-5" /> },
      { name: 'React Frontend', level: 85, icon: <FaReact className="w-5 h-5" /> },
      { name: 'Node.js Systems', level: 80, icon: <FaNodeJs className="w-5 h-5" /> },
      { name: 'MongoDB & SQL', level: 80, icon: <SiMongodb className="w-5 h-5" /> },
    ]
  },
  {
    category: 'Embedded & Infrastructure',
    skills: [
      { name: 'Arduino Prototyping', level: 90, icon: <SiArduino className="w-5 h-5" /> },
      { name: 'ESP32 / Hardware', level: 85, icon: <FaDatabase className="w-5 h-5" /> },
      { name: 'Docker Containerization', level: 75, icon: <SiDocker className="w-5 h-5" /> },
      { name: 'Git / GitHub Devops', level: 90, icon: <FaGithub className="w-5 h-5" /> },
    ]
  }
];

const SkillItem = memo(({ name, icon, level }) => (
  <div className="space-y-2 p-3.5 rounded-xl bg-zinc-50/50 dark:bg-zinc-800/10 border border-zinc-200/30 dark:border-zinc-800/40 hover:border-accent/20 transition-all duration-300">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-300">
        <span className="text-accent">{icon}</span>
        <span className="text-sm font-semibold font-body">{name}</span>
      </div>
      <span className="text-xs font-mono text-accent font-semibold">{level}%</span>
    </div>
    
    {/* Animated progress bar indicator */}
    <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full"
      />
    </div>
  </div>
));

const SkillCard = memo(({ category, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -3;
    const tiltY = ((x - centerX) / centerX) * 3;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    cardRef.current.style.setProperty('--tilt-x', `${tiltX}deg`);
    cardRef.current.style.setProperty('--tilt-y', `${tiltY}deg`);
  }, []);

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--tilt-x', '0deg');
    cardRef.current.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: 'perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
        transition: 'transform 0.3s ease-out',
      }}
      className="group relative overflow-hidden rounded-2xl p-7 bg-white/90 dark:bg-[#0c0c14]/90 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm hover:border-accent/20 transition-all duration-300"
    >
      {/* Spotlight cursor effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(14, 165, 233, 0.04), transparent 40%)',
        }}
      />
      
      <span className="micro-label text-zinc-400 dark:text-zinc-500 mb-2.5 block">AI Skill Grid</span>
      <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-6 pb-3 border-b border-zinc-100 dark:border-zinc-800/60">
        {category.category}
      </h3>
      
      <div className="space-y-3 relative z-10">
        {category.skills.map((skill, idx) => (
          <SkillItem
            key={`${skill.name}-${idx}`}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>
    </motion.div>
  );
});

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-zinc-50 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="micro-label text-accent mb-4 block">Competencies</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Skill Proficiency Matrix
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mb-6" />
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillsByCategory.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
