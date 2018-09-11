const webpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = () => {
  return {
    plugins: [new webpackBundleAnalyzer()]
  };
};
