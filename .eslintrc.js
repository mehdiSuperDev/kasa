module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended", // ajout de la configuration de Parsier
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"], // ajout du plugin Parsier
  rules: {
    "prettier/prettier": ["error"], // ajout de la règle Parsier
    "react/jsx-uses-react": "off", // désactivation d'une règle inutile avec les dernières versions de React
    "react/react-in-jsx-scope": "off", // désactivation d'une règle inutile avec les dernières versions de React
  },
};
