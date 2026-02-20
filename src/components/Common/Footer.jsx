import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

/* ── Footer — Industrial minimal with system-status feel ───────────── */

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-zinc-200/60 bg-white/40 backdrop-blur-lg text-zinc-500 dark:bg-[#050508]/80 dark:text-zinc-600 dark:border-zinc-800/40 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg font-display font-bold text-zinc-900 dark:text-zinc-100 mb-1 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              Saran Sarvesh A G
            </div>
            <p className="micro-label text-zinc-400 dark:text-zinc-700 mt-1">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            {[
              { icon: <FiGithub className="w-5 h-5" />, href: 'https://github.com/saran887', label: 'GitHub' },
              { icon: <FiLinkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/saran-sarvesh-a-g-950357285', label: 'LinkedIn' },
              { icon: <FiMail className="w-5 h-5" />, href: 'mailto:saransarvesh213@gmail.com', label: 'Email' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-zinc-400 hover:text-accent hover:bg-zinc-100 transition-all duration-300 dark:text-zinc-600 dark:hover:text-accent dark:hover:bg-zinc-800/40"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-5 border-t border-zinc-200/40 dark:border-zinc-800/30 flex items-center justify-center gap-3">
          <span className="w-1 h-1 rounded-full bg-accent/40 animate-pulse" />
          <p className="micro-label text-zinc-400 dark:text-zinc-700">
            © {currentYear} Saran Sarvesh A G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
