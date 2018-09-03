const path = require("path");
module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    noParse: [/.elm$/],
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          {
            loader: "elm-webpack-loader",
            options: {
              verbose: true,
              debug: true            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  resolve: {
    alias: {
      vue$: path.resolve(__dirname, "node_modules/vue/dist/vue.esm.js")
    }
  }
};
