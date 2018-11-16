const setBackBoneApp = () =>
  import(/* webpackChunkName:"backbone"*/ "./../backbone")
const setElmApp = () => import(/* webpackChunkName:"elm"*/ "./../elm")
const setVueApp = () => import(/* webpackChunkName:"vue"*/ "./../vue")
const setReactApp = () => import(/* webpackChunkName:"react" */ "./../react")
const setJS = () => import(/* webpackChunkName: "js" */ "./../plainJS")

let previousSelectedFramework = -1
function frameworkRunner(val) {
  if (previousSelectedFramework !== -1) {
    unMountFramework(previousSelectedFramework)
  }
  mountFramework(val)
  previousSelectedFramework = val
}

function mountFramework(selectedFramework) {
  switch (selectedFramework) {
    case "0":
      setBackBoneApp().then(({ default: fn }) => fn())
      break
    case "1":
      setReactApp().then(({ startReactApp: fn }) => {
        const root = document.getElementById("app")
        fn(root)
      })
      break
    case "2":
      setVueApp().then(({ default: fn }) => {
        fn()
      })
      break
    case "3":
      setElmApp().then(({ default: fn }) => {
        const root = document.getElementById("app")
        fn(root)
      })
      break
    case "4":
      setJS().then(({ renderByTemplateString: fn }) => {
        const root = document.getElementById("app")
        fn(root)
      })
      break
    case "-1":
      document.getElementById("app").textContent = "no framework selected"
      break
  }
}

function unMountFramework(selectedFramework) {
  switch (selectedFramework) {
    case "0":
      break
    case "1": // React
      setReactApp().then(({ unmountReactApp: fn }) => {
        const root = document.getElementById("app")
        fn(root)
      })
      break
    case "2": // Vue
      break
    case "3": // ELM
      break
    case "4":
      break
    case "-1":
      break
  }
}

export { frameworkRunner }
