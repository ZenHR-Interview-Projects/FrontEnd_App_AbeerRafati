module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {  //test:according this doc "https://callstack.github.io/react-native-paper/getting-started.html"
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
