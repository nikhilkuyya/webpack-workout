const setBackBoneApp = () =>
  import(/* webpackChunkName:"backbone"*/ "./../backbone");
const setElmApp = () => import(/* webpackChunkName:"elm"*/ "./../elm");
const setVueApp = () => import(/* webpackChunkName:"vue"*/ "./../vue");
const setReactApp = () => import(/* webpackChunkName:"react" */ "./../react");
const setJS = () => import(/* webpackChunkName: "js" */ "./../plainJS");

function frameworkRunner(val) {
  switch (val) {
    case "0":
      setBackBoneApp().then(({ default: fn }) => fn());
      break;
    case "1":
      setReactApp().then(({ default: fn }) => {
        const root = document.getElementById("app");
        fn(root);
      });
      break;
    case "2":
      setVueApp().then(({ default: fn }) => {
        fn();
      });
      break;
    case "3":
      setElmApp().then(({ default: fn }) => {
        fn();
      });
      break;
    case "4":
      setJS().then(({ renderByTemplateString: fn }) => {
        const root = document.getElementById("app");
        fn(root);
      });
      break;
  }
}

export { frameworkRunner };
