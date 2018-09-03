import { Elm } from "./../elm/Main.elm";
import { vm } from "./../vue/index";
import Vue from "vue";
import ReactDOM from "react-dom";
import { ReactApp } from "./../react/index";
import React from "react";

const frameworkRunnerObj = (function() {
  return {
    runElm: function(framework) {
      Elm.Main.init({
        node: document.getElementById("app")
      });
    },
    runVue: Vue,
    runReact: () => {
      ReactDOM.render(
        React.createElement(ReactApp),
        document.getElementById("app")
      );
    }
  };
})();

function frameworkRunner(val) {
  switch (val) {
    case "ELM":
      frameworkRunnerObj.runElm();
      break;
    case "Vue":
      new frameworkRunnerObj.runVue(vm);
      break;
    case "React":
      frameworkRunnerObj.runReact();
      break;
    case "Angular":
      console.log("Angular");
      break;
  }
}

export { frameworkRunner };
