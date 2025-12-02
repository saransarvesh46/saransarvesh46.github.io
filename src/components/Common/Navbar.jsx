import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
        isScrolled ? 'bg-gray-900/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }} 
              className="focus:outline-none hover:cursor-pointer focus:ring-2 focus:ring-blue-500/50 focus:ring-opacity-50 rounded-lg px-3 py-2 transition-all"
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
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl group ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                <span className="relative z-10 flex items-center">
                  {link.name}
                </span>
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavItem"
                    className="absolute inset-0 bg-blue-600/90 rounded-xl z-0 shadow-lg shadow-blue-600/30"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            ))}

            <div className="hidden md:flex items-center space-x-3 ml-6 border-l border-white/10 pl-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2 rounded-xl hover:bg-white/5 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden fixed top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="px-6 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, link.offset);
                  }}
                  className={`block w-full text-left px-6 py-3.5 rounded-xl text-base font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center space-x-8 pt-6 pb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-3 rounded-full hover:bg-gray-800/50"
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
