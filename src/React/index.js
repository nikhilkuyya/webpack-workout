import React from "react";
import ReactDOM from "react-dom";

const ReactApp = () => React.createElement("div", {}, "React");

const startReactApp = () => {
  ReactDOM.render(
    React.createElement(ReactApp),
    document.getElementById("app")
  );
};
export default startReactApp;
