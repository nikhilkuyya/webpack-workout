const path = require("path");
const webpackMerge = require("webpack-merge");
const frameworkConfig = framework =>
  require(`./build-utils/webpack.${framework}`)(framework);

module.exports = () => {
  let commonConfig = {
    entry: "./src/js/app.js",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js"
    },
    devtool: "source-map ",
    module: {
      rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: "html-loader"
          }
        }
      ]
    }
  };

  return webpackMerge(
    commonConfig,
    frameworkConfig("elm"),
    frameworkConfig("react"),
    frameworkConfig("vue")
  );
};
