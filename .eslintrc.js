module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react-native/all',
    'airbnb',
    'plugin:flowtype/recommended',
    '@react-native-community',
  ],
  plugins: ['flowtype', 'react', 'react-native'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
    ecmaVersion: 9,
  },
  globals: {
    __DEV__: false,
    window: false,
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
  rules: {
    'max-len': ['error', { code: 80 }],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-underscore-dangle': ['error', {
      allow: [
        '_value',
        '__getValue',
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
      ],
    }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 'react/destructuring-assignment': [2, 'always', {
    //    ignoreClassFields: true,
    // }],
    'react/jsx-props-no-spreading': 'off',
    'react-native/sort-styles': ['error', 'asc', {
      ignoreStyleProperties: true,
      ignoreClassNames: true,
    }],
    'react/prop-types': 2,
    'react/state-in-constructor': ['error', 'always'],
    'prettier/prettier': 'off',
    // 'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.js',
        '**/__tests__/**',
      ],
    }],
    'arrow-parens': ['error', 'as-needed'],
    // 'react/static-property-placement': true,
  },
};
