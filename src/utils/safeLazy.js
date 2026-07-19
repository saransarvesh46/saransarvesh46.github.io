import { lazy } from 'react';

/**
 * Enhanced dynamic import wrapper with retries, offline handling, and version mismatch recovery.
 * Catches dynamic module loading errors (usually caused by redeployments which delete old chunks)
 * and attempts recovery before performing a clean page reload.
 * 
 * @param {Function} importFunc - Function returning the dynamic import promise, e.g. () => import('./Comp')
 * @param {Object} options - Retry configurations
 * @returns {React.Component} Lazy component
 */
export function safeLazy(importFunc, options = {}) {
  const { retries = 2, delay = 1000 } = options;

  return lazy(async () => {
    let attempt = 0;

    const executeImport = async () => {
      try {
        return await importFunc();
      } catch (error) {
        attempt++;
        const errorMessage = error?.message || '';
        const isChunkLoadFailed =
          errorMessage.includes('Failed to fetch') ||
          errorMessage.includes('dynamically imported') ||
          errorMessage.includes('ChunkLoadError') ||
          errorMessage.includes('Dynamic import') ||
          error instanceof TypeError;

        if (isChunkLoadFailed) {
          // If the user's browser is offline, wait for reconnection
          if (!navigator.onLine) {
            return new Promise((resolve, reject) => {
              const handleOnline = () => {
                window.removeEventListener('online', handleOnline);
                resolve(executeImport());
              };
              window.addEventListener('online', handleOnline);
              
              // Set a timeout of 15 seconds to prevent hanging indefinitely
              setTimeout(() => {
                window.removeEventListener('online', handleOnline);
                reject(error);
              }, 15000);
            });
          }

          // Retry logic with backoff delay
          if (attempt <= retries) {
            await new Promise((resolve) => setTimeout(resolve, delay * attempt));
            return executeImport();
          }

          // Recovery via reloading with cache buster query parameter
          const reloadKey = 'app-chunk-failure-reload';
          const lastReload = sessionStorage.getItem(reloadKey);
          const now = Date.now();

          // Restrict reloading loop to once every 15 seconds
          if (!lastReload || now - parseInt(lastReload, 10) > 15000) {
            sessionStorage.setItem(reloadKey, now.toString());
            const url = new URL(window.location.href);
            url.searchParams.set('v', now.toString());
            window.location.replace(url.toString());
            return new Promise(() => {}); // Keep in pending state while reloading
          }
        }
        throw error;
      }
    };

    return executeImport();
  });
}
