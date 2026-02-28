import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import PillNav from '../PillNav/PillNav';

/* ── Navbar — PillNav (compact) + floating action bar ──────────────── */

const Navbar = ({ scrollToSection }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [activeHref, setActiveHref] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  const resumeUrl = 'https://drive.google.com/file/d/1e0EsSP_gfRlEdM7a2bbGbucYXNP8Jjww/view?usp=sharing';

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
              setActiveHref(`#${section}`);
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

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub className="w-[18px] h-[18px]" />, href: 'https://github.com/saran887' },
    { name: 'LinkedIn', icon: <FiLinkedin className="w-[18px] h-[18px]" />, href: 'https://linkedin.com/in/saran-sarvesh-a-g-950357285' },
    { name: 'Email', icon: <FiMail className="w-[18px] h-[18px]" />, href: 'mailto:saransarvesh213@gmail.com' },
  ];

  /* ── Mobile menu actions ── */
  const mobileActions = (
    <div className="flex flex-col gap-4 py-4 px-2">
      <div className="flex items-center gap-3">
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer"
          className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-accent text-white font-semibold shadow-glow">
          <FiDownload className="w-4 h-4" /> Resume
        </a>
        <button onClick={toggleTheme}
          className={`p-3 rounded-xl transition-all ${isDark ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-700'}`}
          aria-label="Toggle theme">
          {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
        </button>
      </div>
      <div className={`flex justify-center space-x-6 pt-4 border-t ${isDark ? 'border-zinc-800/60' : 'border-zinc-200'}`}>
        {socialLinks.map((s) => (
          <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
            className={`p-3 rounded-xl transition-all ${isDark ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-500 hover:text-zinc-800'}`}
            aria-label={s.name}>
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );

  /* ── Small right-side action cluster (only icons, no full social bar) ── */
  const rightActions = (
    <div className="flex items-center gap-1.5 px-1">
      <button onClick={toggleTheme}
        className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/80'}`}
        aria-label="Toggle theme">
        {theme === 'dark' ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
      </button>
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer"
        className="px-4 py-2 rounded-full bg-accent text-white text-[13px] font-semibold hover:bg-accent-hover shadow-glow active:scale-[0.97] transition-all duration-300">
        <span className="inline-flex items-center gap-1.5">
          <FiDownload className="w-3.5 h-3.5" /> Resume
        </span>
      </a>
    </div>
  );

  return (
    <>
      {/* ── Floating PillNav (compact — just nav items + theme + resume) ── */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000] pointer-events-none">
        <div className="pointer-events-auto">
          <PillNav
            logo={false}
            logoAlt="Saran"
            items={navItems}
            activeHref={activeHref}
            rightActions={rightActions}
            mobileActions={mobileActions}
            baseColor={isDark ? 'rgba(24, 24, 27, 0.5)' : 'rgba(255, 255, 255, 0.6)'}
            pillColor={isDark ? 'rgba(39, 39, 42, 0.8)' : 'rgba(244, 244, 245, 0.9)'}
            activeColor="#0ea5e9"
            pillTextColor={isDark ? '#d4d4d8' : '#3f3f46'}
            hoveredPillTextColor="#fff"
            className={`backdrop-blur-xl rounded-full transition-shadow duration-500 ${isScrolled
                ? isDark
                  ? 'shadow-[0_4px_30px_rgba(0,0,0,0.4)] border border-zinc-600/30'
                  : 'shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-zinc-200/80 bg-white/40'
                : isDark
                  ? 'shadow-lg border border-zinc-600/10'
                  : 'shadow-md border border-zinc-200/40 bg-white/20'
              }`}
          />
        </div>
      </div>

      {/* ── Floating social bar (desktop only, appears on scroll) ── */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-24 right-4 z-[999] hidden md:flex flex-col gap-2 p-2 rounded-2xl backdrop-blur-xl border ${isDark
              ? 'bg-[#0c0c14]/80 border-zinc-800/50'
              : 'bg-white/80 border-zinc-200/60'
              }`}
          >
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`p-2.5 rounded-xl transition-all ${isDark ? 'text-zinc-400 hover:text-accent hover:bg-zinc-800/60' : 'text-zinc-500 hover:text-accent hover:bg-zinc-100'
                  }`}
                aria-label={s.name}>
                {s.icon}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
