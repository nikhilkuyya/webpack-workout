const isTest = String(process.env.NODE_ENV) === "test";
module.exports = {
  presets: ["@babel/preset-react"],
  plugins: ["@babel/plugin-transform-modules-commonjs"].filter(Boolean)
};
