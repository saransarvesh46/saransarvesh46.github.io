import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import FeaturedProject from './FeaturedProject';

const featuredProject = {
  title: 'Automated Vehicle Underbody Monitoring System',
  problem: 'Traditional vehicle undercarriage inspection methods using manual search mirrors are high-risk, slow, and prone to human error.',
  solution: 'Designed and deployed an Edge AI vision pipeline to automate object localization (anomalies, animals, humans) under vehicles to trigger instant safety alerts.',
  dataset: '15,000 Custom Undercarriage Captures',
  accuracy: '94.2% mAP / 12ms Edge Latency',
  hardware: 'NVIDIA Jetson Board / USB Camera Integration',
  model: 'YOLO Object Detection Pipeline',
  technologies: ['Python', 'OpenCV', 'YOLO', 'Deep Learning', 'Edge AI'],
  github: 'https://github.com/saran887/real-time-object-detection',
};

const otherProjects = [
  {
    title: 'Industrial AI Poultry Automation System',
    problem: 'Poultry health is highly sensitive to environmental fluctuations, leading to bird mortality if temperature or humidity is unregulated.',
    solution: 'Programmed ESP32 microcontrollers to poll DHT22 sensors and automatically trigger fan, sprinkler, and fogger modules via relays based on climate thresholds.',
    results: '100% automated climate control with real-time web/mobile telemetry overrides.',
    technologies: ['ESP32', 'Embedded C', 'React.js', 'Node.js', 'WebSockets', 'MySQL'],
    github: 'https://github.com/saran887',
  },
  {
    title: 'Smart Voting using Face Recognition & Blockchain',
    problem: 'Physical election check-in systems are vulnerable to voter registration fraud, check-in bottlenecks, and centralized log tampering.',
    solution: 'Built a secure web portal that verifies identity via face recognition to prevent duplicate votes, recording cryptographic vote hashes on a blockchain.',
    results: 'Eliminated double-voting via image matching and immutable hash ledgers.',
    technologies: ['Python', 'OpenCV', 'Flask', 'Blockchain', 'MySQL'],
    github: 'https://github.com/saran887/smart-voting-system',
  },
  {
    title: 'Inventory & Order Management App',
    problem: 'Small retail and warehousing operations suffer from inventory discrepancies due to manual sales, delivery, and billing logs.',
    solution: 'Developed a cross-platform mobile application using Flutter and Firebase featuring separate role-based sub-modules and real-time tracking.',
    results: 'Role-based access (Owner, Admin, Sales, Delivery) with live data sync.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Role-Based Auth'],
    github: 'https://github.com/saran887/inventory-order-app',
  },
  {
    title: 'E-Commerce Platform for IoT Components',
    problem: 'Sourcing specific microcontrollers, sensors, and hardware components is fragmented and lacks developer-oriented platforms.',
    solution: 'Built a full-stack e-commerce store with product management, secure cart checkout, and admin analytics dashboards.',
    results: 'Responsive catalog search, secure JWT sessions, and database indexes.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
    github: 'https://github.com/saran887/construction-portfolio',
  },
  {
    title: 'Smart Cane for Visually Impaired',
    problem: 'Visually impaired individuals face high navigation hazards from low-lying obstacles or hanging structures.',
    solution: 'Designed an assistive smart cane that integrates ultrasonic and infrared sensors to trigger progressive buzzer sounds and vibration warnings.',
    results: 'Real-time hazard warnings under 100ms response time.',
    technologies: ['Arduino/C++', 'Embedded Systems', 'IoT', 'Sensor Integration'],
    github: 'https://github.com/saran887',
  }
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
