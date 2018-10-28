import React from "react"
import ReactDOM from "react-dom"
// import styles from '../main.css';

const ReactApp = () =>
  React.createElement(
    "div",
    {
      className: "main"
    },
    "React"
  )

const startReactApp = node => {
  ReactDOM.render(React.createElement(ReactApp), node)
}
export default startReactApp
