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
    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    whileHover={{ x: 5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <span className="flex items-center justify-center w-8 h-8 text-cyan-500 dark:text-cyan-400">{icon}</span>
    <span className="text-gray-700 dark:text-gray-200 font-medium text-base flex-1">{name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 font-medium mb-2 block">MY CAPABILITIES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-cyan-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsByCategory.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500 mr-4">
                  {category.skills[0].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.category}
                </h3>
              </div>
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
            duration: 0.6,
            delay: 0.2,
            type: 'spring',
            stiffness: 100
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Tools & Technologies
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use daily to bring ideas to life
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
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 200
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-700/50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-500 mb-2">
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
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
