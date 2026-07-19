import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase, FiLayers } from 'react-icons/fi';

const experiences = [
  {
    role: 'AI & Automation Trainee',
    company: 'SKM Egg Products Export',
    location: 'Erode, Tamil Nadu, India',
    period: 'June 2026 - Present',
    description: 'Engineering real-time monitoring and automation workflows combining Edge AI, computer vision, and embedded sensor systems to optimize egg processing plant floors.',
    contributions: [
      {
        title: 'Edge AI & Vision Detection',
        detail: 'Developing and optimizing computer vision models using Python and OpenCV to automate real-time floor monitoring and obstacle/defect checks.',
        tools: ['Python', 'OpenCV', 'Deep Learning', 'Edge AI']
      },
      {
        title: 'Embedded Sensor Integration',
        detail: 'Programming ESP32 microcontrollers to interface with industrial sensors for continuous environmental monitoring (temperature, humidity, etc.).',
        tools: ['ESP32', 'C/C++', 'Sensor Integration', 'Hardware Protocols']
      },
      {
        title: 'Relay Automation Logic',
        detail: 'Integrating hardware relay modules and writing automation triggers to activate floor mechanisms automatically based on sensor inputs.',
        tools: ['Relay Controls', 'Automation Logic', 'Microcontrollers']
      }
    ]
  },
  {
    role: 'Web Developer Intern',
    company: 'SKM Egg Products Export',
    location: 'Erode, Tamil Nadu, India',
    period: 'March 2026 - May 2026',
    description: 'Developed an internal intranet system containing a HR portal, employee management modules, and internal audit tracking tools.',
    contributions: [
      {
        title: 'Intranet Portal Development',
        detail: 'Designed and built employee management pages, employee portals, and tracking systems using Laravel.',
        tools: ['PHP', 'Laravel', 'Bootstrap', 'HTML/CSS']
      },
      {
        title: 'Backend & DB Logic',
        detail: 'Managed database operations, structured schemas, and optimized queries using MySQL to store staff logs securely.',
        tools: ['MySQL', 'REST APIs', 'Database Design']
      },
      {
        title: 'Internal Audit Tracking',
        detail: 'Implemented audit portals for tracking and reporting internal plant operations, optimizing reporting speed.',
        tools: ['Laravel', 'RESTful Services', 'Audit Systems']
      }
    ]
  },
  {
    role: 'IoT Intern',
    company: 'CubeAI Solutions',
    location: 'Erode, India',
    period: 'December 2025 - February 2026',
    description: 'Designed and prototyped an IoT-based poultry automation system for automated environmental control.',
    contributions: [
      {
        title: 'Poultry Automation Logic',
        detail: 'Programmed ESP32 processors to poll DHT22 environmental sensors and trigger fans, foggers, and sprinklers automatically.',
        tools: ['ESP32', 'C/C++', 'Relay Modules', 'DHT22 Sensors']
      },
      {
        title: 'Real-time Telemetry Dashboard',
        detail: 'Built web and mobile dashboards for live telemetry monitoring and manual remote overrides of device states.',
        tools: ['React.js', 'WebSockets', 'REST APIs', 'Dashboard Dev']
      },
      {
        title: 'Remote Device Control',
        detail: 'Enabled remote device management, providing live state synchronization and alerts for critical temperature spikes.',
        tools: ['IoT Networking', 'WiFi/HTTP protocols', 'Device Sync']
      }
    ]
  },
  {
    role: 'Web Developer Intern',
    company: 'Nutz Technovation Private Limited',
    location: 'Erode, India',
    period: 'August 2025 - October 2025',
    description: 'Built React-based landing pages, admin dashboards, and secure backend RESTful APIs.',
    contributions: [
      {
        title: 'React Admin Dashboard',
        detail: 'Developed fully responsive client landing interfaces and administrative panel views with state management.',
        tools: ['React.js', 'Tailwind CSS', 'Framer Motion']
      },
      {
        title: 'Backend RESTful APIs',
        detail: 'Created server-side APIs and router controllers using Node.js and Express.js, connecting frontend with database.',
        tools: ['Node.js', 'Express.js', 'REST APIs', 'JSON Web Tokens']
      },
      {
        title: 'Database Management',
        detail: 'Managed structured data storage, table schemas, and relational queries using MySQL.',
        tools: ['MySQL', 'SQL Queries', 'Relational Databases']
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-zinc-100 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-100/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="micro-label text-accent mb-4 block">Work History</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Engineering Experience
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mb-8" />
        </motion.div>

        {/* Timeline Grid */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm relative group hover:border-accent/30 transition-all duration-300"
            >
              {/* Timeline Info Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-accent/10 text-accent">
                    <FiBriefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-base text-zinc-500 dark:text-zinc-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-body">
                {exp.description}
              </p>

              {/* Contributions Grid */}
              <div className="space-y-6">
                <h4 className="text-sm font-mono text-accent uppercase tracking-wider font-bold mb-4">
                  Key Engineering Contributions
                </h4>
                <div className="grid gap-6 md:grid-cols-3">
                  {exp.contributions.map((item, cidx) => (
                    <div key={cidx} className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/20 border border-zinc-200/40 dark:border-zinc-800/40 flex flex-col justify-between">
                      <div>
                        <h5 className="text-base font-bold text-zinc-800 dark:text-zinc-200 mb-2 font-display">
                          {item.title}
                        </h5>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-body">
                          {item.detail}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-200/30 dark:border-zinc-800/30">
                        {item.tools.map((t, tidx) => (
                          <span key={tidx} className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-zinc-200/50 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
