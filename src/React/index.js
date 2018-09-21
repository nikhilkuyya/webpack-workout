import React from "react";
import ReactDOM from "react-dom";

const ReactApp = () => React.createElement("div", {}, "React");

const startReactApp = node => {
  ReactDOM.render(React.createElement(ReactApp), node);
};
export default startReactApp;
