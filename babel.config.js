module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      'react-native-reanimated/plugin',
      ['module-resolver',
        {
          root: ['.'],
          alias: {
            '@': './src',
          }
        }]
    ],
  };
};
