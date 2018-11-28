module.exports = ({ mode }) => {
  let devtoolConfig = null
  if (mode === "developement") {
    devtoolConfig = { devtool: "eval-source-map" }
  } else if (mode === "production") {
    devtoolConfig = { devtool: "source-map" }
  } else {
    devtoolConfig = { devtool: "source-map" }
  }
  return devtoolConfig
}
