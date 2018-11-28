import React from "react"
import Counter from "./counter"
import { hot } from "react-hot-loader"
import Post from "./posts"
class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">React</div>
        <Post />
      </>
    )
  }
}

export default hot(module)(App)
