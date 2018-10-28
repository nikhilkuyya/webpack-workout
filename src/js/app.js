const frameworkSelector = () =>
  import( /* webpackChunkName:"frameworkHandler"*/ "./frameworkHandler")
import frameworks from "./../test";

function init() {
  const selectNode = document.querySelector("[rel='js-change-framework']")
  Object.keys(frameworks).map(key => {
    const optionNode = document.createElement("option")
    optionNode.setAttribute("value", key)
    optionNode.textContent = frameworks[key]
    return selectNode.appendChild(optionNode)
  })
  selectNode.onchange = add
  selectNode.value = -1
}

function add(evt) {
  frameworkSelector().then(({
    frameworkRunner: fn
  }) => {
    fn(evt.target.value)
  })
}

init()