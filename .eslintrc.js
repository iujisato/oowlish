const jsRules = {
  'react/jsx-filename-extension': 0,
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  curly: [2, 'all'],
  'comma-dangle': [2, 'always-multiline'],
  'no-console': 'error',
  'react/state-in-constructor': 0,
  'react/jsx-fragments': 0,
  'react/jsx-props-no-spreading': 0,
  'react/prop-types': 0,
  'react/no-unescaped-entities': 0,
};

module.exports = {
  root: true,
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: jsRules,
};
