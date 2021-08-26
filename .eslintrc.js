module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': 0,
    'linebreak-style': 0,
    indent: 0,
    'react/jsx-indent': 0,
    'import/prefer-default-export': 0,
    'react/jsx-indent-props': 0
  }
};
