const path = require("path");
const webpackMerge = require("webpack-merge");
const cleanwebpackPlugin = require("clean-webpack-plugin");

const frameworkConfig = framework =>
  require(`./build-utils/webpack.${framework}`)(framework);
const presetsConfig = env =>
  require(`./build-utils/presets/webpack.${env.presets}`)(env);

const myCustomPlugin = require("./build-utils/plugins/optional.chaining.webpackPlugin");

module.exports = env => {
  let commonConfig = {
    entry: "./src/js/app.js",
    output: {
      path: path.join(__dirname, "dist/"),
      filename: "index.js",
      publicPath: path.join(__dirname, "dist/"),
      chunkFilename: "[name].lazy.chunk.js"
    },
    mode: (env && env.mode) || "none",
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
    plugins: [new myCustomPlugin(), new cleanwebpackPlugin(["dist"])]
  };

  const frameworkMergeConfig = webpackMerge(
    commonConfig,
    frameworkConfig("elm"),
    frameworkConfig("react"),
    frameworkConfig("vue")
  );
  let finalConfig = frameworkMergeConfig;
  if (env !== undefined && env.presets !== undefined) {
    if (env.presets === "chart") {
      finalConfig = webpackMerge(
        {},
        frameworkConfig("react"),
        presetsConfig(env)
      );
    } else {
      finalConfig = webpackMerge({}, frameworkMergeConfig, presetsConfig(env));
    }
  }
  console.log(finalConfig);
  return finalConfig;
};
