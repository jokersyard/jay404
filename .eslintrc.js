// ESLint configuration for code quality
module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'react/display-name': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@next/next/no-img-element': 'warn',
  },
};
