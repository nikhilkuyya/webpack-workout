import React from "react"
import Counter from "./counter"
import { hot } from "react-hot-loader"
class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">React</div>
        <Counter />
      </>
    )
  }
}

export default hot(module)(App)
