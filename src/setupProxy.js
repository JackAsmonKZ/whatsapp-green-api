const path = require("path");

module.exports = function override(config) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: "sass-loader",
        options: {
          additionalData: `@import "src/styles/variables.scss";`,
        },
      },
    ],
  });

  return config;
};
