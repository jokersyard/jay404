export const objectUtils = {
  pick: (obj, keys) => {
    return keys.reduce((result, key) => {
      if (key in obj) result[key] = obj[key];
      return result;
    }, {});
  },

  omit: (obj, keys) => {
    const keysSet = new Set(keys);
    return Object.keys(obj).reduce((result, key) => {
      if (!keysSet.has(key)) result[key] = obj[key];
      return result;
    }, {});
  },

  deepMerge: (target, source) => {
    return Object.keys(source).reduce((result, key) => {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = objectUtils.deepMerge(target[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
      return result;
    }, target);
  },

  isEmpty: (obj) => Object.keys(obj).length === 0,
};
