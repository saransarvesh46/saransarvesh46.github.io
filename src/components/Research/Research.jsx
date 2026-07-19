import { motion } from 'framer-motion';
import { FiBookOpen, FiCpu, FiTrendingUp, FiSettings } from 'react-icons/fi';

const researchTopics = [
  {
    topic: 'Computer Vision & Multi-Object Tracking',
    icon: <FiBookOpen className="w-5 h-5" />,
    detail: 'Researching multi-camera alignment methods and low-overhead object trackers (e.g. ByteTrack, DeepSORT). Focus is on reducing ID-switch frequencies and handling occlusions during real-time edge streaming.'
  },
  {
    topic: 'Edge AI & Hardware-Aware Optimization',
    icon: <FiCpu className="w-5 h-5" />,
    detail: 'Optimizing standard deep networks for edge microcontrollers (ESP32) and specialized accelerators (NVIDIA Jetson, TensorRT). Investigating layer pruning and INT8 post-training quantization.'
  },
  {
    topic: 'Vision Transformers (ViTs) on Edge Hardware',
    icon: <FiTrendingUp className="w-5 h-5" />,
    detail: 'Exploring lightweight attention architectures to run spatial Vision Transformers on resource-constrained platforms, aiming to bypass the standard quadratic latency penalty of global self-attention.'
  },
  {
    topic: 'Autonomy & Robotics Vision Systems',
    icon: <FiSettings className="w-5 h-5" />,
    detail: 'Developing robust visual SLAM (Simultaneous Localization and Mapping) frameworks that execute under variable lighting and dusty environments, catering specifically to automated vehicular inspections.'
  }
];

const Research = () => {
  return (
    <section id="research" className="py-28 relative overflow-hidden bg-zinc-50 dark:bg-[#030305] border-t border-zinc-200/40 dark:border-zinc-800/20">
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute left-1/3 bottom-10 h-72 w-72 rounded-full bg-cyan-100/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="micro-label text-accent mb-4 block">Scientific Interests</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 mb-6">
            Research &amp; Future Interests
          </h2>
          <div className="h-[2px] w-[50px] bg-accent rounded-full mx-auto mb-8" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Focused on bridging modern theoretical architectures with hardware constraints to build reliable real-time Edge systems.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {researchTopics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white dark:bg-[#0c0c14] border border-zinc-200/60 dark:border-zinc-800/60 flex gap-4 hover:border-accent/30 transition-all duration-300 shadow-sm"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent h-fit">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-2 font-display">
                  {item.topic}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-body">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
