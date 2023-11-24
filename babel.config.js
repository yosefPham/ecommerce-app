module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "root": ["./app"],
        "alias": {
          "test": "./test",
          "underscore": "lodash"
        }
      }]
    ]
  };
};
