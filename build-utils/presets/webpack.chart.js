const path = require("path");
console.log("dir", __dirname);
module.exports = env => {
  return {
    mode: env.mode || "production",
    entry: "./build-assets/chart.jsx",
    output: {
      path: path.join(__dirname, "../", "../", "build-assets/"),
      filename: "chart-bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: "json-loader"
        }
      ]
    }
  };
};
