import { Elm } from "./../elm/Main.elm"

const startElmApp = function(node) {
  Elm.Main.init({
    node
  })
}

export default startElmApp
