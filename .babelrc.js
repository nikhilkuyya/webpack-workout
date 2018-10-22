const isTest = String(process.env.NODE_ENV) === "test"
module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        modules: isTest
      }
    ],
    [
      "@babel/preset-env",
      {
        modules: isTest
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-modules-commonjs",
      {
        modules: isTest
      }
    ],
    "@babel/plugin-proposal-optional-chaining"
  ].filter(Boolean)
}
