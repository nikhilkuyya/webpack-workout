import { run } from "..";

test("modular dev test", () => {
  const container = document.createElement("div");
  container.appendChild(run());
  expect(container.textContent).toBe("Modular JS");
});
