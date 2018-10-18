module.exports = class OptionalChainingWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tapAsync(
      "OptionalChainingWebpackPlugin",
      (stats, cb) => {
        debugger;
        cb();
      }
    );
  }
};
