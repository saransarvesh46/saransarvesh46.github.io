import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

/* ── Navbar — Industrial precision navigation ────────────────────────
   Cold precision palette with cyan accent highlights.
   Floating glass effect on scroll. Clean micro-details.
   ──────────────────────────────────────────────────────────────────── */

const Navbar = ({ scrollToSection }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const resumeUrl = 'https://drive.google.com/file/d/1e0EsSP_gfRlEdM7a2bbGbucYXNP8Jjww/view?usp=sharing';

  const handleNavClick = (sectionId, offset = 0) => {
    if (scrollToSection) {
      scrollToSection(sectionId, offset);
    }
    setIsMobileMenuOpen(false);
    if (window.history.pushState) {
      window.history.pushState(null, null, `#${sectionId}`);
    } else {
      window.location.hash = `#${sectionId}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);
        
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          if (i === sections.length - 1 || scrollPosition < document.getElementById(sections[i + 1])?.offsetTop) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', offset: -80 },
    { name: 'Skills', id: 'skills', offset: -40 },
    { name: 'Projects', id: 'projects', offset: -40 },
    { name: 'Contact', id: 'contact', offset: -40 },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="w-5 h-5" />,
      href: 'https://github.com/saran887',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/saran-sarvesh-a-g-950357285',
    },
    {
      name: 'Email',
      icon: <FiMail className="w-5 h-5" />,
      href: 'mailto:saransarvesh213@gmail.com',
    },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? isDark
            ? 'bg-[#050508]/85 backdrop-blur-2xl border-b border-zinc-800/40 shadow-[0_1px_30px_rgba(0,0,0,0.3)] py-3'
            : 'bg-white/80 backdrop-blur-2xl border-b border-zinc-200/60 shadow-[0_1px_30px_rgba(0,0,0,0.04)] py-3'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center gap-4">
          {/* Logo — industrial style with accent dot */}
          <motion.div
            className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-lg px-1 py-1 transition-all inline-flex items-center gap-2"
              aria-label="Home"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              Saran Sarvesh
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id, link.offset);
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === link.id
                    ? 'text-accent'
                    : isDark
                      ? 'text-zinc-500 hover:text-zinc-200'
                      : 'text-zinc-400 hover:text-zinc-800'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavItem"
                    className="absolute inset-0 rounded-lg bg-accent/[0.07] z-0"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Divider + social/controls */}
            <div className={`hidden md:flex items-center space-x-2 ml-4 pl-4 border-l ${
              isDark ? 'border-zinc-800' : 'border-zinc-200'
            }`}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isDark
                      ? 'text-zinc-600 hover:text-zinc-200 hover:bg-zinc-800/60'
                      : 'text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100'
                  }`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60'
                    : 'text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
              {/* Resume CTA — accent colored with cyan glow */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover shadow-glow hover:shadow-[0_0_50px_rgba(14,165,233,0.2)] active:scale-[0.98] transition-all duration-300"
              >
                <span className="inline-flex items-center gap-2">
                  <FiDownload className="w-4 h-4" /> Resume
                </span>
              </a>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button
              className={`md:hidden focus:outline-none p-2.5 rounded-lg transition-all ${
                isDark
                  ? 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden overflow-hidden fixed top-16 left-3 right-3 backdrop-blur-2xl shadow-elevated rounded-2xl border ${
              isDark
                ? 'bg-[#050508]/95 border-zinc-800/60'
                : 'bg-white/95 border-zinc-200/80'
            }`}
          >
            <div className="px-5 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, link.offset);
                  }}
                  className={`block w-full text-left px-5 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                    activeSection === link.id
                      ? isDark
                        ? 'bg-accent/10 text-accent'
                        : 'bg-accent/[0.07] text-accent'
                      : isDark
                        ? 'text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-accent text-white font-semibold shadow-glow"
                >
                  <FiDownload className="w-4 h-4" /> Resume
                </a>
                <button
                  onClick={toggleTheme}
                  className={`p-3 rounded-xl transition-all ${
                    isDark
                      ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                </button>
              </div>
              <div className={`flex justify-center space-x-6 pt-4 mt-3 border-t ${
                isDark ? 'border-zinc-800/60' : 'border-zinc-200'
              }`}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all ${
                      isDark
                        ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                        : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100'
                    }`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
