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
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    "semi":[1, "never"],
    "react/react-in-jsx-scope":"off", 
    "react/jsx-filename-extension": "off", 
    "no-alert": "off",
    "react/prop-types": "off",
  },
};
