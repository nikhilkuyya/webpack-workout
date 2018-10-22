const frameworkSelector = () =>
  import(/* webpackChunkName:"frameworkHandler"*/ "./frameworkHandler")

const ele = document.querySelector("[rel='js-change-framework']")
ele.onchange = add

function add(evt) {
  frameworkSelector().then(({ frameworkRunner: fn }) => {
    fn(evt.target.value)
  })
}
