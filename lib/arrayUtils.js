export const arrayUtils = {
  unique: (arr) => [...new Set(arr)],

  groupBy: (arr, key) => {
    return arr.reduce((result, item) => {
      const group = item[key];
      if (!result[group]) result[group] = [];
      result[group].push(item);
      return result;
    }, {});
  },

  sortBy: (arr, key, order = 'asc') => {
    return [...arr].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      return order === 'asc' ? aVal - bVal : bVal - aVal;
    });
  },

  flatten: (arr) => arr.flat(Infinity),

  chunk: (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  },
};
