const isTest = String(process.env.NODE_ENV) === "test";
module.exports = {
  presets: ["@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-proposal-optional-chaining"
  ].filter(Boolean)
};
