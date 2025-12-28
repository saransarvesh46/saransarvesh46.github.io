import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      title: 'Email',
      value: 'saransarvesh213@gmail.com',
      icon: <FiMail className="w-6 h-6" />,
      href: 'mailto:saransarvesh213@gmail.com'
    },
    {
      id: 2,
      title: 'GitHub',
      value: 'github.com/saran887',
      icon: <FiGithub className="w-6 h-6" />,
      href: 'https://github.com/saran887',
      target: '_blank'
    },
    {
      id: 3,
      title: 'LinkedIn',
      value: 'linkedin.com/in/saran-sarvesh',
      icon: <FiLinkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/saran-sarvesh-a-g-950357285',
      target: '_blank'
    },
    {
      id: 4,
      title: 'LeetCode',
      value: 'leetcode.com/saransarvesh_51',
      icon: <SiLeetcode className="w-6 h-6" />,
      href: 'https://leetcode.com/u/saransarvesh_51',
      target: '_blank'
    },
    {
      id: 5,
      title: 'Resume',
      value: 'Download PDF',
      icon: <FiFileText className="w-6 h-6" />,
      href: 'https://drive.google.com/file/d/1e0EsSP_gfRlEdM7a2bbGbucYXNP8Jjww/view?usp=sharing',
      target: '_blank'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-slate-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Animated mesh gradients */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute left-1/4 top-20 h-96 w-96 bg-cyan-400/20 blur-3xl" 
          animate={{ 
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute right-1/4 bottom-20 h-80 w-80 bg-purple-400/20 blur-3xl" 
          animate={{ 
            x: [0, -70, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(147,51,234,0.12),transparent_32%),linear-gradient(140deg,rgba(255,255,255,0.75),transparent)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.06),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(147,51,234,0.08),transparent_32%),linear-gradient(140deg,rgba(12,19,35,0.7),transparent)]" />
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 mb-4 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto dark:text-gray-300">
            Feel free to reach out through any of the following channels
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.id}
                href={contact.href}
                target={contact.target || '_self'}
                rel={contact.target ? 'noopener noreferrer' : ''}
                download={contact.download || false}
                className="flex flex-col items-center p-6 rounded-2xl group
                  bg-white/85 backdrop-blur-2xl hover:bg-white
                  border border-slate-200/80 hover:border-sky-200
                  shadow-[0_18px_50px_-35px_rgba(15,23,42,0.45)] hover:shadow-[0_24px_70px_-40px_rgba(56,189,248,0.4)]
                  hover:-translate-y-1 transition-all duration-300
                  dark:bg-gray-900/70 dark:border-white/10 dark:hover:border-cyan-400/50 dark:hover:bg-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-600 mb-4 group-hover:bg-sky-600 group-hover:text-white transition-all dark:text-cyan-200 dark:bg-cyan-500/10">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors dark:text-white dark:group-hover:text-cyan-200">
                  {contact.title}
                </h3>
                <p className="text-sm text-slate-600 text-center break-words dark:text-gray-300">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
