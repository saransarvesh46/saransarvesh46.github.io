// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

/* ── Contact — Clean centered layout, proper light/dark mode ─────────
   Centered heading + description. Cards in a flex-wrap row that
   auto-centers the last partial row. Solid card backgrounds that
   stand out on both light and dark backgrounds.
   ──────────────────────────────────────────────────────────────────── */

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      title: 'Email',
      value: 'saransarvesh213@gmail.com',
      icon: <FiMail className="w-6 h-6" />,
      href: 'mailto:saransarvesh213@gmail.com',
    },
    {
      id: 2,
      title: 'GitHub',
      value: 'github.com/saran887',
      icon: <FiGithub className="w-6 h-6" />,
      href: 'https://github.com/saran887',
      target: '_blank',
    },
    {
      id: 3,
      title: 'LinkedIn',
      value: 'linkedin.com/in/saran-sarvesh',
      icon: <FiLinkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/saran-sarvesh-a-g-950357285',
      target: '_blank',
    },
    {
      id: 4,
      title: 'LeetCode',
      value: 'leetcode.com/saransarvesh_51',
      icon: <SiLeetcode className="w-6 h-6" />,
      href: 'https://leetcode.com/u/saransarvesh_51',
      target: '_blank',
    },
    {
      id: 5,
      title: 'Resume',
      value: 'Download PDF',
      icon: <FiFileText className="w-6 h-6" />,
      href: 'https://drive.google.com/file/d/1e0EsSP_gfRlEdM7a2bbGbucYXNP8Jjww/view?usp=sharing',
      target: '_blank',
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden bg-zinc-50 dark:bg-[#050508]"
    >
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-100/40 dark:bg-accent/[0.03] blur-[120px]" />
        <div className="absolute right-1/4 bottom-20 h-60 w-60 rounded-full bg-zinc-200/50 dark:bg-zinc-800/20 blur-[100px]" />
      </div>

      {/* Accent lines */}
      <div className="absolute top-16 left-12 w-px h-16 bg-gradient-to-b from-transparent via-accent/15 to-transparent hidden lg:block" />
      <div className="absolute bottom-24 right-16 w-14 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent hidden lg:block" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* ── Centered heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="micro-label text-accent/60 mb-4 block">Connect</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-[-0.03em] text-zinc-900 dark:text-zinc-100 mb-4">
            Get In Touch
          </h2>
          <motion.div
            className="h-[2px] bg-accent rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Feel free to reach out through any of the following channels
          </p>
        </motion.div>

        {/* ── Cards — flex-wrap so 5th card auto-centers ── */}
        <div className="flex flex-wrap justify-center gap-5">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.id}
              href={contact.href}
              target={contact.target || '_self'}
              rel={contact.target ? 'noopener noreferrer' : ''}
              className="relative flex flex-col items-center p-7 rounded-2xl group
                w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]
                bg-white border border-zinc-200 hover:border-accent/30
                shadow-sm hover:shadow-md
                hover:-translate-y-1.5 transition-all duration-300
                dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-accent/30
                dark:hover:bg-zinc-800/80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              {/* Scan-line on hover */}
              <div className="scan-line absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl mb-4
                bg-zinc-100 text-zinc-500
                group-hover:bg-accent group-hover:text-white
                transition-all duration-300
                dark:bg-zinc-800 dark:text-zinc-400
                dark:group-hover:bg-accent dark:group-hover:text-white">
                {contact.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-display font-bold mb-1.5
                text-zinc-800 group-hover:text-accent transition-colors duration-300
                dark:text-zinc-100 dark:group-hover:text-accent">
                {contact.title}
              </h3>

              {/* Value */}
              <p className="text-sm text-center break-all leading-relaxed
                text-zinc-500 dark:text-zinc-400">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
