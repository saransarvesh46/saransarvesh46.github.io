/**
 * requestAnimationFrame-based throttle utility.
 * Guarantees the callback is executed at most once per display refresh frame.
 */
export const rafThrottle = (fn) => {
  let locked = false;
  return (...args) => {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(() => {
      fn(...args);
      locked = false;
    });
  };
};
