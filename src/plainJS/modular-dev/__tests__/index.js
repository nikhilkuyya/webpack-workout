import { renderByTemplateString } from "..";

test("modular dev test", () => {
  const container = document.createElement("div");
  container.appendChild(renderByTemplateString());
  expect(container.textContent).toBe("Modular JS");
});
