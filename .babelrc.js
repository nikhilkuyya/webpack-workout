const isTest = String(process.env.NODE_ENV) === "test"
module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: isTest ? "commonjs" : false
      }
    ]
  ],
  plugins: [
    isTest ? "@babel/plugin-transform-modules-commonjs" : false,
    "@babel/plugin-proposal-class-properties",
    "react-hot-loader/babel",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-optional-chaining"
  ].filter(Boolean)
}
