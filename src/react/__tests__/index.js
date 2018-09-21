import setReactApp from "..";
import ReactDOM from "react-dom";
test("simple render react", () => {
  const container = document.createElement("div");
  const test = setReactApp(container);
  expect(container.textContent).toMatch("React");
});
