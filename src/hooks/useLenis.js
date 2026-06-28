import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';

/**
 * Hook to initialize Lenis smooth scrolling and synchronize it with the GSAP Ticker.
 * Respects users' accessibility settings for reduced motion.
 */
export const useLenis = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Accessibility check: disable smooth scrolling if motion is reduced
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo easeOut
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis scroll execution directly to GSAP ticker for frame synchronization
    const updateGsapTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGsapTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateGsapTicker);
      lenis.destroy();
    };
  }, []);

  return lenisRef;
};
