const {
  resolve,
  join
} = require("path");
const webpackMerge = require("webpack-merge");
const cleanwebpackPlugin = require("clean-webpack-plugin");

const frameworkConfig = framework =>
  require(`./build-utils/webpack.${framework}`)(framework);
const presetsConfig = env =>
  require(`./build-utils/presets/webpack.${env.presets}`)(env);

// test plugin creation.
// const myCustomPlugin = require("./build-utils/plugins/optional.chaining.webpackPlugin");

module.exports = env => {
  console.log(__dirname, 'dir')
  const commonConfig = {
    context: join(__dirname, "src", "js"),
    entry: "./app.js",
    output: {
      path: join(__dirname, "dist"),
      filename: "index.js",
      publicPath: env.mode === "developement" ? "/dist/" : join(__dirname, "dist/"),
      chunkFilename: "[name].lazy.chunk.js"
    },
    mode: (env && env.mode) || "none",
    module: {
      rules: [{
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      }]
    },
    plugins: [new cleanwebpackPlugin(["dist"])]
  };

  const frameworkMergeConfig = webpackMerge(
    commonConfig,
    frameworkConfig("elm"),
    frameworkConfig("react"),
    frameworkConfig("vue"),
    frameworkConfig("react"),
  );
  let finalConfig = frameworkMergeConfig;
  if (env !== undefined && env.presets !== undefined) {
    if (env.presets === "chart") {
      finalConfig = webpackMerge({},
        presetsConfig(env)
      );
    } else {
      finalConfig = webpackMerge({}, frameworkMergeConfig, presetsConfig(env));
    }
  }
  return finalConfig;
};