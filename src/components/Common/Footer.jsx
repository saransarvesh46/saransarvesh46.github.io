import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-slate-200/80 bg-white/90 text-slate-600 backdrop-blur-xl dark:bg-gray-950 dark:text-gray-400 dark:border-white/10 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-2 dark:from-blue-300 dark:to-cyan-400">
              Saran Sarvesh A G
            </div>
            <p className="text-sm text-slate-500 dark:text-gray-500">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/saran887"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 transform dark:text-gray-400 dark:hover:text-blue-300 dark:hover:bg-white/5"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/saran-sarvesh-a-g-950357285"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 transform dark:text-gray-400 dark:hover:text-blue-300 dark:hover:bg-white/5"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:saransarvesh213@gmail.com"
              className="p-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 transform dark:text-gray-400 dark:hover:text-blue-300 dark:hover:bg-white/5"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-200/70 text-center dark:border-white/5">
          <p className="text-sm text-slate-500 dark:text-gray-500">
            © {currentYear} Saran Sarvesh A G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
