import { Elm } from "./../elm/Main.elm";
import { vm } from "./../vue/index";
import Vue from "vue";
import ReactDOM from "react-dom";
import { ReactApp } from "./../react/index";
import React from "react";
import BackboneApp from "./../backbone/index";
const frameworkRunnerObj = (function() {
  return {
    runElm: function(framework) {
      Elm.Main.init({
        node: document.getElementById("app")
      });
    },
    runVue: () => {
      new Vue(vm);
    },
    runReact: () => {
      ReactDOM.render(
        React.createElement(ReactApp),
        document.getElementById("app")
      );
    },
    runBackbone: () => {
      new BackboneApp();
    }
  };
})();

function frameworkRunner(val) {
  switch (val) {
    case "0":
      frameworkRunnerObj.runBackbone();
      break;
    case "1":
      frameworkRunnerObj.runReact();
      break;
    case "2":
      frameworkRunnerObj.runVue();
      break;
    case "3":
      frameworkRunnerObj.runElm();
      break;
  }
}

export { frameworkRunner };
