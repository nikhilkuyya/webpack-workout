import { render } from "react-testing-library"
import React from "react"
import App from "../app"

test("react app renders", () => {
  const { container } = render(<App />)
  expect(container).toMatchSnapshot()
})
