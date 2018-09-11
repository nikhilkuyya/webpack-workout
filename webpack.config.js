const path = require("path");
const webpackMerge = require("webpack-merge");

const frameworkConfig = framework =>
  require(`./build-utils/webpack.${framework}`)(framework);
const presetsConfig = env =>
  require(`./build-utils/presets/webpack.${env.presets}`)(env);

module.exports = env => {
  let commonConfig = {
    entry: "./src/js/app.js",
    output: {
      path: path.join(__dirname, "dist/"),
      filename: "index.js",
      publicPath: path.join(__dirname, "dist/")
    },
    mode: (env && env.mode) || "development",
    module: {
      rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: "html-loader"
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "dist/"),
      port: 4464,
      hot: true,
      lazy: true,
      publicPath: path.join(__dirname, "dist/")
    }
  };

  const frameworkMergeConfig = webpackMerge(
    commonConfig,
    frameworkConfig("elm"),
    frameworkConfig("react"),
    frameworkConfig("vue")
  );
  let finalConfig = frameworkMergeConfig;
  if (env !== undefined && env.presets !== undefined) {
    finalConfig = webpackMerge({}, frameworkMergeConfig, presetsConfig(env));
  }
  return finalConfig;
};
