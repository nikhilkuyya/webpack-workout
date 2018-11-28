import React from "react"

class Post extends React.Component {
  state = { posts: [] }
  componentDidMount() {}

  render() {
    return <>{this.state.posts.map(post => JSON.stringify(post))}</>
  }
}

export default Post
