import { useState, useEffect } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import ScrollProgress from './components/Common/ScrollProgress';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // You can log errorInfo to an error reporting service here
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <div>
            <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
            <pre className="bg-gray-800 p-4 rounded">{this.state.error && this.state.error.toString()}</pre>
            <button className="mt-4 px-4 py-2 bg-blue-600 rounded" onClick={() => window.location.reload()}>Reload</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (offset || 0);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <motion.div
          className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <ScrollProgress />
      <div className="min-h-screen bg-gradient-to-br from-blue-100/60 via-purple-100/60 to-cyan-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        <div className="absolute inset-0 z-0 backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 pointer-events-none" />
        <Navbar scrollToSection={scrollToSection} />
        <AnimatePresence mode="wait">
          <main className="overflow-hidden">
            <section id="home">
              <Hero scrollToSection={scrollToSection} />
            </section>
            <section id="skills" className="py-20">
              <div className="container mx-auto px-4">
                <Skills />
              </div>
            </section>
            <section id="projects" className="py-20">
              <div className="container mx-auto px-4">
                <Projects />
              </div>
            </section>
            <section id="contact" className="py-20">
              <div className="container mx-auto px-4">
                <Contact />
              </div>
            </section>
          </main>
        </AnimatePresence>
        <Footer scrollToSection={scrollToSection} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
