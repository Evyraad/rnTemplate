module.exports = (api) => {
  api.cache(true);

  const presets = [
    'module:metro-react-native-babel-preset',
    '@babel/preset-flow',
  ];
  const plugins = [
    [
      'module-resolver',
      {
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          containers: './app/containers/',
          theme: './app/theme/',
          lib: './app/lib/',
        },
      },
    ],
  ];

  switch (process.env.NODE_ENV) {
    case 'test':
      plugins.push('transform-react-stateless-component-name');
      break;
    case 'production':
      plugins.push('transform-remove-console');
      break;
    default:
      break;
  }

  return { presets, plugins };
};

