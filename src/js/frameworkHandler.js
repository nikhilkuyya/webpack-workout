const setBackBoneApp = () => import("./../backbone");
const setElmApp = () => import("./../elm");
const setVueApp = () => import("./../vue");
const setReactApp = () => import("./../react");

// const frameworkRunnerObj = (function() {
//   return {
//     runElm: function() {
//       Elm.Main.init({
//         node: document.getElementById("app")
//       });
//     },
//     // runVue: () => {
//     //   new Vue(vm);
//     // },
//     // runReact: () => {
//     //   ReactDOM.render(
//     //     React.createElement(ReactApp),
//     //     document.getElementById("app")
//     //   );
//     // },
//     runBackbone: () => {
//       new BackboneApp();
//     }
//   };
// })();

function frameworkRunner(val) {
  debugger;
  switch (val) {
    case "0":
      setBackBoneApp().then(({ default: fn }) => fn());
      break;
    case "1":
      setReactApp().then(({ default: fn }) => fn());
      break;
    case "2":
      setVueApp().then(({ default: fn }) => fn());
      break;
    case "3":
      setElmApp().then(({ default: fn }) => fn());
      break;
  }
}

export { frameworkRunner };
