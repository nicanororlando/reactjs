// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: 1,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 0,
    eqeqeq: 'error',
    semi: ['off', 'never'],
  },
};
