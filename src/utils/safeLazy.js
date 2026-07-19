import { lazy } from 'react';

/**
 * A robust wrapper around React.lazy to handle dynamic import loading failures gracefully.
 * When a dynamic chunk fails to load (typically due to a redeployment that removes older hashed chunks),
 * this wrapper catches the error and triggers a page reload to fetch the latest index.html and assets.
 * 
 * @param {Function} importFunc - The function returning the dynamic import promise, e.g. () => import('./Component')
 * @returns {React.Component} A lazy-loaded component wrapper
 */
export function safeLazy(importFunc) {
  return lazy(async () => {
    try {
      return await importFunc();
    } catch (error) {
      // Standard dynamic import failures result in a TypeError or specific chunk load errors
      const errorMessage = error?.message || '';
      const isChunkLoadFailed =
        errorMessage.includes('Failed to fetch dynamically imported module') ||
        errorMessage.includes('error loading dynamically imported module') ||
        errorMessage.includes('ChunkLoadError') ||
        errorMessage.includes('Dynamic import') ||
        error instanceof TypeError;

      if (isChunkLoadFailed) {
        const reloadKey = 'chunk-failed-reload';
        const lastReload = sessionStorage.getItem(reloadKey);
        const now = Date.now();

        // Prevent infinite reloads (e.g. if the user has no internet access or the server is down)
        // We only trigger auto-reload if there has not been a reload in the past 10 seconds.
        if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
          sessionStorage.setItem(reloadKey, now.toString());
          window.location.reload();
          
          // Return a pending promise to prevent rendering a broken state in the UI while reloading
          return new Promise(() => {});
        }
      }
      
      // If it is another kind of error, throw it so the app's regular ErrorBoundary can handle it
      throw error;
    }
  });
}
