module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react-native/all',
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  plugins: ['flowtype', 'prettier', 'react', 'react-native'],
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
    'no-underscore-dangle': ['error', { allow: ['_value', '__getValue'] }],
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'react-native/sort-styles': ['error', 'asc', {
      ignoreStyleProperties: true,
      ignoreClassNames: true,
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.js',
      ],
    }],
    'prettier/prettier': ['error', {
      'singleQuote': true,
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
        extensions: ['.js', '.ios.js', '.android.js'],
        paths: ['app'],
      },
      'babel-module': {},
    },
  }
};
