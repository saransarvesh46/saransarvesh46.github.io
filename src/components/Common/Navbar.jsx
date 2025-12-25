import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Navbar = ({ scrollToSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const resumeUrl = 'https://drive.google.com/file/d/1zKLMeTualmgdJ_-k_nkSHAV_dmym1peN/view?usp=drivesdk';

  const handleNavClick = (sectionId, offset = 0) => {
    if (scrollToSection) {
      scrollToSection(sectionId, offset);
    }
    setIsMobileMenuOpen(false);
    // Update URL hash without page jump
    if (window.history.pushState) {
      window.history.pushState(null, null, `#${sectionId}`);
    } else {
      window.location.hash = `#${sectionId}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Find which section is in view
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // 100px offset from top
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);
        
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          // If we're at the last section or the next section is below the current scroll position
          if (i === sections.length - 1 || scrollPosition < document.getElementById(sections[i + 1])?.offsetTop) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    // Initial check
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b1224]/90 backdrop-blur-2xl border-b border-white/10 py-3'
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 h-48 w-48 bg-cyan-500/20 blur-3xl" />
        <div className="absolute -top-24 right-1/4 h-48 w-48 bg-purple-500/20 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="focus:outline-none hover:cursor-pointer focus:ring-2 focus:ring-cyan-400/60 rounded-lg px-3 py-2 transition-all"
              aria-label="Home"
            >
              Saran Sarvesh
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id, link.offset);
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl group ${
                  activeSection === link.id ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.name}
                </span>
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavItem"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl z-0 shadow-glow"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}

            <div className="hidden md:flex items-center space-x-3 ml-4 pl-4 border-l border-white/10">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-cyan-300 hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold shadow-glow hover:scale-[1.02] active:scale-[0.99] transition-transform"
              >
                <span className="inline-flex items-center gap-2">
                  <FiDownload className="w-4 h-4" /> Resume
                </span>
              </a>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button
              className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2 rounded-xl hover:bg-white/5 transition-all"
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
            transition={{ duration: 0.28 }}
            className="md:hidden overflow-hidden fixed top-16 left-3 right-3 bg-[#0b1224]/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl"
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
                  className={`block w-full text-left px-6 py-3.5 rounded-xl text-base font-semibold transition-all ${
                    activeSection === link.id
                      ? 'bg-white/10 text-white shadow-glow'
                      : 'text-gray-200 hover:bg-white/5 hover:text-white'
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
                  className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-glow"
                >
                  <FiDownload className="w-4 h-4" /> Resume
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                </button>
              </div>
              <div className="flex justify-center space-x-6 pt-4 border-t border-white/5 mt-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-300 transition-colors p-3 rounded-xl hover:bg-white/5"
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
