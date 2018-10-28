const {
  join
} = require("path")
const webpackMerge = require("webpack-merge")
const cleanwebpackPlugin = require("clean-webpack-plugin")
const frameworkConfig = framework =>
  require(`./build-utils/webpack.${framework}`)(framework)
const presetsConfig = env =>
  require(`./build-utils/presets/webpack.${env.presets}`)(env)
const HtmlWebpackPlugin = require("html-webpack-plugin")
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  getIfUtils,
  removeEmpty
} = require("webpack-config-utils")

module.exports = env => {
  const {
    ifProduction,
    ifDevelopment
  } = getIfUtils(env.mode)

  const commonConfig = {
    context: join(__dirname, "src", "js"),
    entry: "./app.js",
    output: {
      path: join(__dirname, "dist"),
      filename: "index.js",
      publicPath: ifDevelopment("/dist/", join(__dirname, "dist/")),
      chunkFilename: ifDevelopment(
        "[name].[hash].chunk.js",
        "[name].[chunkhash].bundle.js"
      )
    },
    mode: (env && env.mode) || "none",
    module: {
      rules: [{
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      }, {
        test: /\.(css)$/,
        use: [
          ifProduction(MiniCssExtractPlugin.loader, 'style-loader'),
          'css-loader'
        ]
      }]
    },
    plugins: removeEmpty([
      new cleanwebpackPlugin(["dist"]),
      new HtmlWebpackPlugin({
        template: join(__dirname, "src", "index.html")
      }),
      new MiniCssExtractPlugin({
        filename: ifDevelopment("styles.[name].css", "styles.[name].[chunkhash].css")
      }),
      ifProduction(new InlineManifestWebpackPlugin())
    ]),
    optimization: {
      runtimeChunk: "single",
    }
  }

  const frameworkMergeConfig = webpackMerge(
    commonConfig,
    frameworkConfig("elm"),
    frameworkConfig("react"),
    frameworkConfig("vue"),
    frameworkConfig("react")
  )
  let finalConfig = frameworkMergeConfig
  if (env !== undefined && env.presets !== undefined) {
    if (env.presets === "chart") {
      finalConfig = webpackMerge({}, presetsConfig(env))
    } else {
      finalConfig = webpackMerge({}, frameworkMergeConfig, presetsConfig(env))
    }
  }
  return finalConfig
}