import { Elm } from "./../elm/Main.elm";

const startElmApp = function() {
  Elm.Main.init({
    node: document.getElementById("app")
  });
};

export default startElmApp;
