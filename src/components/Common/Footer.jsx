import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-white/10 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
              Saran Sarvesh A G
            </div>
            <p className="text-sm text-gray-500">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/saran887"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/saran-sarvesh-a-g-950357285"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:saransarvesh213@gmail.com"
              className="p-3 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Saran Sarvesh A G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
