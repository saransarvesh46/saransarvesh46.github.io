import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-zinc-50 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute -left-1/4 top-10 h-96 w-96 rounded-full bg-cyan-200/20 dark:bg-accent/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Section heading */}
          <div className="lg:col-span-4">
            <span className="micro-label text-accent mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
              AI Engineer & Developer
            </h2>
            <div className="h-[2px] w-[50px] bg-accent rounded-full mb-8" />
          </div>

          {/* Description */}
          <div className="lg:col-span-8 space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-body">
            <p>
              I am an AI &amp; Automation Engineer with a deep passion for Artificial Intelligence, Machine Learning, and Embedded Systems. 
              My expertise lies at the intersection of Computer Vision, Edge AI, and Full-Stack Web Development, specifically focused on creating intelligent systems for industrial automation.
            </p>
            <p>
              With hands-on experience developing automated vehicle underbody monitoring systems, IoT-based poultry climate controllers, and blockchain-integrated facial recognition voting gates, 
              I specialize in bridging the gap between hardware sensors and robust web dashboards. I am driven by continuous learning, problem solving, and team collaboration to deliver impactful industrial AI solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/40 text-sm font-mono">
              <div>
                <span className="text-zinc-400 block mb-1">Focus Areas:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Computer Vision, Edge AI, Industrial IoT</span>
              </div>
              <div>
                <span className="text-zinc-400 block mb-1">Stack Specialties:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">ESP32 &amp; Embedded C, Python, MERN Stack, Laravel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
