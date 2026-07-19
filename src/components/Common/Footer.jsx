import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiBriefcase, FiDownload } from 'react-icons/fi';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();
  const resumeUrl = 'https://drive.google.com/file/d/1e0EsSP_gfRlEdM7a2bbGbucYXNP8Jjww/view?usp=sharing';

  const links = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Experience', target: 'experience' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Research', target: 'research' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <footer className="py-16 border-t border-zinc-200/60 bg-white/60 backdrop-blur-lg text-zinc-600 dark:bg-[#030305]/80 dark:text-zinc-400 dark:border-zinc-800/40 transition-colors duration-500 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Column 1: Info */}
          <div className="space-y-4">
            <div>
              <div className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                Saran Sarvesh A G
              </div>
              <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                AI Engineer &amp; Full-Stack Developer
              </p>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 font-body">
              Bridging Edge hardware constraints with high-throughput neural architectures. Deployed in production edge environments.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              {links.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollToSection && scrollToSection(link.target)}
                    className="hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Meta details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              Verification &amp; Links
            </h4>
            <div className="space-y-2 text-xs font-mono text-zinc-650 dark:text-zinc-400">
              <p className="flex items-center gap-2"><FiMapPin className="text-accent" aria-hidden="true" /> India</p>
              <p className="flex items-center gap-2"><FiBriefcase className="text-accent" aria-hidden="true" /> Status: Open for Role</p>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Download Resume PDF" className="flex items-center gap-2 hover:text-accent transition-colors">
                <FiDownload className="text-accent" aria-hidden="true" /> Resume PDF
              </a>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              {[
                { icon: <FiGithub className="w-4 h-4" />, href: 'https://github.com/saran887', label: 'GitHub' },
                { icon: <FiLinkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/saransarvesh/', label: 'LinkedIn' },
                { icon: <FiMail className="w-4 h-4" />, href: 'mailto:saransarvesh213@gmail.com', label: 'Email' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-zinc-600 hover:text-accent hover:bg-zinc-150 transition-all duration-300 dark:text-zinc-400 dark:hover:text-accent dark:hover:bg-zinc-800/40 border border-zinc-200/40 dark:border-zinc-800/40 bg-zinc-50/50 dark:bg-zinc-950/20"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-200/40 dark:border-zinc-800/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent/40 animate-pulse" />
            <p>© {currentYear} Saran Sarvesh A G. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <span>VERSION: v2.1.0</span>
            <span>LAST UPDATED: 2026-07-19</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
