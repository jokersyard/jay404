export const performance = {
  measureTime: (fn, label) => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${label}: ${end - start}ms`);
    return result;
  },

  debounceLeading: (fn, delay) => {
    let timeout;
    return (...args) => {
      if (!timeout) fn(...args);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    };
  },

  throttleTrailing: (fn, delay) => {
    let lastCall = 0;
    let timeout;
    return (...args) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        fn(...args);
        lastCall = now;
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn(...args);
          lastCall = Date.now();
        }, delay - (now - lastCall));
      }
    };
  },

  requestIdleCallback: (callback) => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      return window.requestIdleCallback(callback);
    }
    return setTimeout(callback, 1);
  },
};
