// eslint.config.js
module.exports = {
  extends: [
    'eslint:recommended',
    // Add other configurations or plugins as needed
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    // Define your custom rules here
  },
};
