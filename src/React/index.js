import React from "react"
import ReactDOM from "react-dom"

const startReactApp = node => {
  const App = require("./App").default
  ReactDOM.render(React.createElement(App), node)
}

const unmountReactApp = node => {
  ReactDOM.unmountComponentAtNode(node)
}

module.hot.accept(startReactApp)

export { startReactApp, unmountReactApp }
