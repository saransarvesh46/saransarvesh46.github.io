import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import FeaturedProject from './FeaturedProject';

const featuredProject = {
  title: 'Vehicle Underbody Monitoring System',
  problem: 'Heavy vehicle chassis blind spots present high-risk hazards for pedestrians, cargo loading zones, and terminal operations.',
  solution: 'Engineered a real-time multi-camera inspection system. Trained on a custom underview dataset to automate object localization, replacing manual logs.',
  dataset: '15,000 Custom Undercarriage Captures',
  accuracy: '94.2% mAP / 30 FPS Output',
  hardware: 'NVIDIA Jetson Edge Board / USB Camera feeds',
  model: 'MobileNet SSD + NVIDIA TensorRT Acceleration',
  technologies: ['Python', 'TensorFlow', 'OpenCV', 'MobileNet SSD', 'TensorRT', 'Edge AI'],
  github: 'https://github.com/saran887/real-time-object-detection',
};

const otherProjects = [
  {
    title: 'CuraLink — AI Clinical Trial platform',
    problem: 'Matching patients with relevant clinical trial protocols involves parsing unstructured medical literature and databases manually.',
    solution: 'Built an NLP parsing backend that scrapes PubMed and ClinicalTrials.gov, decreasing matching latencies by 78%.',
    results: '92.5% Semantic Alignment Accuracy',
    technologies: ['Google Gemini AI', 'FastAPI', 'React 18', 'Tailwind CSS', 'PubMed API', 'ClinicalTrials.gov API'],
    github: 'https://github.com/saran887/CuraLink---AI-Powered-Clinical-Trial-Research-Platform',
    demo: 'https://cura-link-ai-powered-clinical-trial-iota.vercel.app',
  },
  {
    title: 'Traffic Aid — Emergency Route Prioritization',
    problem: 'Traditional static traffic signaling lights fail to identify and prioritize emergency first responders, causing delay times.',
    solution: 'Designed an acoustic prioritization model that extracts Mel-Spectrogram features from siren sounds, overriding lanes dynamically.',
    results: '96.8% Siren Detection Accuracy',
    technologies: ['Python', 'Audio Processing', 'Machine Learning', 'Embedded Systems', 'FCFS Algorithm'],
  },
  {
    title: 'Smart Voting System',
    problem: 'Standard physical election checkpoints are highly vulnerable to registration fraud and check-in validation bottlenecks.',
    solution: 'Constructed a face verification pipeline that automates voter check-in, replacing paper validation check logs.',
    results: 'Eliminates paper logs with dual-factor facial matching',
    technologies: ['Python', 'OpenCV', 'Flask', 'MySQL'],
    github: 'https://github.com/saran887/smart-voting-system',
  },
  {
    title: 'USB Object Detection Android App',
    problem: 'Mobile robotic systems and field inspection crews lack dynamic, portable computer vision inferences on-device.',
    solution: 'Developed a native Android app running local TensorFlow Lite models using external OTG USB cameras.',
    results: '24+ FPS Real-time Inference on standard mobile CPUs',
    technologies: ['Android', 'Java', 'TensorFlow Lite', 'OpenCV', 'USB Camera'],
    github: 'https://github.com/saran887/usb-object-detection-android-app',
  },
  {
    title: 'Construction Portfolio & Portal',
    problem: 'Visual project tracking and client communication for construction projects are decentralized and fragmented.',
    solution: 'Constructed a MERN stack portal featuring responsive image galleries and secure client dashboards.',
    results: 'High-performance image load optimizations',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB'],
    github: 'https://github.com/saran887/construction-portfolio',
    demo: 'https://construction-website-teal-chi.vercel.app/',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-zinc-50 dark:bg-[#030305] py-28 overflow-hidden border-t border-zinc-200/40 dark:border-zinc-800/20"
    >
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="micro-label text-accent mb-4 block">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Engineering Projects
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mb-6" />
        </motion.div>

        {/* Featured Case Study Card */}
        <div className="mb-12">
          <FeaturedProject project={featuredProject} />
        </div>

        {/* Other Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              idx={idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
