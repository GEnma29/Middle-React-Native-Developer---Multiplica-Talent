module.exports = {
  presets: ['module:metro-react-native-babel-preset'], // existing
  // setupFiles: [require.resolve('@shopify/react-native-skia/jestSetup.js')],
  // add the following
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@components': './src/components',
        },
      },
    ],
  ],
};
