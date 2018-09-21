import { renderByTemplateString as modularTemplate } from "./modular-dev";

function renderBytemplate(node) {
  const template = document.getElementById("js-render-1");
  const content = template.cloneNode(true).content;
  renderJS(node, content);
}

function renderByTemplateString(node) {
  const template = modularTemplate();
  renderJS(node, template);
}

function renderJS(node, template) {
  node.innerHTML = null;
  if (typeof template === "string") {
    node.append(template);
  } else {
    node.appendChild(template);
  }
}
export { renderBytemplate, renderByTemplateString };
