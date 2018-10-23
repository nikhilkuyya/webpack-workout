import hyperx from "hyperx";
import vdom from "virtual-dom";
import main from "main-loop";
const hx = hyperx(vdom.h);

function render(state) {
  const tree = hx `<div class="main">${state.whoami}</div>`;
  return tree;
}

function renderByTemplateString() {
  const whoami = "Modular JS";
  const loop = main({
    whoami
  }, render, vdom);
  return loop.target;
}

export {
  renderByTemplateString
};