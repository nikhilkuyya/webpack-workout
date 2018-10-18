import setVueApp from "..";
import Vue from "vue";

xtest("simple vue render", () => {
  setVueApp();
  expect(document.getElementById('app').textContent).toBe('Vue');
});