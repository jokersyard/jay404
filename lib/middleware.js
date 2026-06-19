export const middleware = {
  logger: (fn, label) => {
    return async (...args) => {
      console.log(`[${label}] Starting...`);
      try {
        const result = await fn(...args);
        console.log(`[${label}] Completed successfully`);
        return result;
      } catch (error) {
        console.error(`[${label}] Failed:`, error);
        throw error;
      }
    };
  },

  errorHandler: (fn) => {
    return async (...args) => {
      try {
        return await fn(...args);
      } catch (error) {
        console.error('Middleware error:', error);
        return { error: error.message };
      }
    };
  },

  timeout: (fn, timeoutMs) => {
    return async (...args) => {
      return Promise.race([
        fn(...args),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Operation timed out')), timeoutMs)
        ),
      ]);
    };
  },
};
