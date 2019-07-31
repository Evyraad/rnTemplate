module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react-native/all',
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  plugins: ['flowtype', 'react', 'react-native'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', { code: 80 }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-underscore-dangle': ['error', {
      allow: [
        '_value',
        '__getValue',
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
      ],
    }],
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'react-native/sort-styles': ['error', 'asc', {
      ignoreStyleProperties: true,
      ignoreClassNames: true,
    }],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.js',
        '**/__tests__/**',
      ],
    }],
    'arrow-parens': ['error', 'as-needed'],
    'react/destructuring-assignment': [2, 'always', {
      ignoreClassFields: true,
    }],
  },
  env: {
    es6: true,
    jest: true,
  },
  globals: {
    __DEV__: false,
    window: {},
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ios.js', '.android.js'],
        paths: ['app'],
      },
      'babel-module': {},
    },
  },
};
