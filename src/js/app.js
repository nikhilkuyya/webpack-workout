import { frameworkRunner } from "./frameworkHandler"
import frameworks from "./../test"

function init() {
  const selectNode = document.querySelector("[rel='js-change-framework']")
  const optionNodes = getOptionNodes(frameworks)
  optionNodes.forEach(ele => selectNode.appendChild(ele))
  selectNode.onchange = add
  selectNode.value = -1
}

function getOptionNodes(frameworks) {
  return Object.keys(frameworks).map(key => {
    const optionNode = document.createElement("option")
    optionNode.setAttribute("value", key)
    optionNode.textContent = frameworks[key]
    return optionNode
  })
}

function add(evt) {
  evt.stopPropagation()
  frameworkRunner(evt.target.value)
}

init()
