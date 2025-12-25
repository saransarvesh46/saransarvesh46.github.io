import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, 
  FaHtml5, FaCss3Alt, FaGit, FaAndroid, FaChartBar, FaCode
} from 'react-icons/fa';
import { 
  SiC, SiMongodb, SiMysql, SiOracle, SiFlask, SiFastapi, SiTensorflow, 
  SiOpencv, SiPandas, SiNumpy, SiPhp, SiTailwindcss
} from 'react-icons/si';

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

const SkillItem = ({ name, icon }) => (
  <motion.div 
    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-all dark:hover:bg-white/5"
    whileHover={{ x: 5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <span className="flex items-center justify-center w-8 h-8 text-sky-600 dark:text-cyan-300">{icon}</span>
    <span className="text-slate-700 font-medium text-sm flex-1 dark:text-gray-200">{name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 text-lg dark:text-gray-300">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsByCategory.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl hover:shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] transition-all border border-slate-200/80 hover:border-sky-200 dark:bg-gray-900/70 dark:border-white/10"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-3 dark:text-white">
                <span className="text-sky-600 dark:text-cyan-300">{category.skills[0].icon}</span>
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <SkillItem
                    key={`${skill.name}-${idx}`}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.2
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 bg-white/85 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/80 dark:bg-gray-900/70 dark:border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 dark:text-white">
              Tools & Technologies
            </h3>
            <p className="text-slate-600 dark:text-gray-300">
              Development tools I use daily
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col items-center p-4 bg-slate-50 rounded-xl hover:bg-white transition-all border border-slate-200 dark:bg-white/5 dark:border-white/10"
              >
                <div className="text-sky-600 mb-2 dark:text-cyan-300">
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-slate-700 text-center dark:text-gray-200">
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
