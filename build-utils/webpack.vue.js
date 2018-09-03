const path = require("path");

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        }
      ]
    },
    resolve: {
      alias: {
        vue$: path.resolve(__dirname, "..","node_modules/vue/dist/vue.esm.js")
      }
    }
  };
};
