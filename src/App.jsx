import { useState, useEffect } from 'react';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import ScrollProgress from './components/Common/ScrollProgress';
import NeuralGrid from './components/Common/NeuralGrid';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  // eslint-disable-next-line no-unused-vars
  componentDidCatch(_error, _errorInfo) {
    // Log error to reporting service
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-[#050508] text-zinc-900 dark:text-zinc-100">
          <div className="text-center">
            <h2 className="text-2xl font-display font-bold mb-4">Something went wrong.</h2>
            <pre className="bg-zinc-200 dark:bg-zinc-900 p-4 rounded-xl text-sm">{this.state.error && this.state.error.toString()}</pre>
            <button className="mt-4 px-6 py-2.5 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors" onClick={() => window.location.reload()}>Reload</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (offset || 0);
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  /* ── Loading Screen — industrial with cyan accent ── */
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-[#050508]">
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-[-8px] rounded-full bg-accent/15 blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <span className="micro-label text-zinc-500 dark:text-zinc-600">Initializing</span>
        </motion.div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <ScrollProgress />
      {/* ── Main shell — industrial dark-first palette ── */}
      <div className="min-h-screen bg-zinc-100 dark:bg-[#050508] transition-colors duration-500">
        {/* Global neural network background */}
        <NeuralGrid />
        <Navbar scrollToSection={scrollToSection} />
        <AnimatePresence mode="wait">
          {/* No overflow-hidden on main — required for sticky Projects */}
          <main>
            <section id="home">
              <Hero scrollToSection={scrollToSection} />
            </section>

            <Skills />

            {/* Projects — no z-index wrapper, sticky needs clean ancestry */}
            <Projects />

            <Contact />
          </main>
        </AnimatePresence>
        <Footer scrollToSection={scrollToSection} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
