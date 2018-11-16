module.exports = () => {
  return {
    module: {
      noParse: [/.elm$/],
      rules: [
        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          use: [
            {
              loader: "elm-hot-webpack-loader"
            },
            {
              loader: "elm-webpack-loader",
              options: {
                verbose: true,
                debug: true
              }
            }
          ]
        }
      ]
    }
  }
}
