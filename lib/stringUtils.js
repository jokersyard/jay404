export const stringUtils = {
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),

  camelToKebab: (str) => str.replace(/([A-Z])/g, '-$1').toLowerCase(),

  kebabToCamel: (str) => str.replace(/-([a-z])/g, g => g[1].toUpperCase()),

  truncate: (str, length = 50) => str.length > length ? `${str.slice(0, length)}...` : str,

  slugify: (str) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),

  normalizeSpace: (str) => str.trim().replace(/\s+/g, ' '),
};
