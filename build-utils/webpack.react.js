module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.jsx$/,
          loader: "babel-loader"
        }
      ]
    }
  }
}
