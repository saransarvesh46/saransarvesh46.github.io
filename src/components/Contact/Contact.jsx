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
      href: 'https://drive.google.com/file/d/1zKLMeTualmgdJ_-k_nkSHAV_dmym1peN/view?usp=drivesdk',
      target: '_blank'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-gray-900 to-purple-950/10" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
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
                className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-gray-800/70 transition-all duration-300 border border-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-sm text-gray-400 text-center break-words">
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
