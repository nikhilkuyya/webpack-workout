import setReactApp from "..";
test("simple render react", () => {
  const container = document.createElement("div");
  const test = setReactApp(container);
  expect(container.textContent).toMatch("React");
});