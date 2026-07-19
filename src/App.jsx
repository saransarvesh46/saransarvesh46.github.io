import { useState, useEffect, Suspense } from 'react';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero/Hero';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import ScrollProgress from './components/Common/ScrollProgress';
import NeuralGrid from './components/Common/NeuralGrid';
import { useLenis } from './hooks/useLenis';
import { safeLazy } from './utils/safeLazy';

// Lazy loading all components dynamically using safeLazy
const About = safeLazy(() => import('./components/About/About'));
const Experience = safeLazy(() => import('./components/Experience/Experience'));
const Skills = safeLazy(() => import('./components/Skills/Skills'));
const Projects = safeLazy(() => import('./components/Projects/Projects'));
const Research = safeLazy(() => import('./components/Research/Research'));
const Timeline = safeLazy(() => import('./components/Timeline/Timeline'));
const Resume = safeLazy(() => import('./components/Resume/Resume'));
const Education = safeLazy(() => import('./components/Education/Education'));
const Certificates = safeLazy(() => import('./components/Certificates/Certificates'));
const Achievements = safeLazy(() => import('./components/Achievements/Achievements'));
const Contact = safeLazy(() => import('./components/Contact/Contact'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, _errorInfo) {
    const errorMessage = error?.message || '';
    const isChunkLoadFailed =
      errorMessage.includes('Failed to fetch') ||
      errorMessage.includes('dynamically imported') ||
      errorMessage.includes('ChunkLoadError') ||
      errorMessage.includes('Dynamic import') ||
      error instanceof TypeError;

    if (isChunkLoadFailed) {
      const reloadKey = 'chunk-failed-reload';
      const lastReload = sessionStorage.getItem(reloadKey);
      const now = Date.now();

      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem(reloadKey, now.toString());
        window.location.reload();
      }
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-[#030305] text-zinc-900 dark:text-zinc-100">
          <div className="text-center p-6">
            <h2 className="text-2xl font-display font-bold mb-4">Something went wrong loading this component.</h2>
            <pre className="bg-zinc-200 dark:bg-zinc-900 p-4 rounded-xl text-sm mb-4 max-w-lg overflow-x-auto mx-auto">{this.state.error && this.state.error.toString()}</pre>
            <button className="px-6 py-2.5 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors" onClick={() => window.location.reload()}>Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useLenis();

  const scrollToSection = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (offset || 0);
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <ErrorBoundary>
      <ScrollProgress />
      <div className="min-h-screen bg-zinc-100 dark:bg-[#030305] transition-colors duration-500">
        <NeuralGrid />
        <Navbar scrollToSection={scrollToSection} />
        <AnimatePresence mode="wait">
          <main>
            <section id="home">
              <Hero scrollToSection={scrollToSection} />
            </section>

            <Suspense fallback={
              <div className="flex justify-center items-center py-20">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Research />
              <Timeline />
              <Resume />
              <Education />
              <Certificates />
              <Achievements />
              <Contact />
            </Suspense>
          </main>
        </AnimatePresence>
        <Footer scrollToSection={scrollToSection} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
