import setVueApp from "..";
import Vue from "vue";
test("simple vue render", () => {
  const container = document.createElement("div");
  container.id = "app";
  setVueApp(container);
  // console.log(container);
  // expect(container.textContent).toMatch("Vue");
});
