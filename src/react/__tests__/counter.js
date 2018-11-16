import { render } from "react-testing-library"
import React from "react"
import App from "../app"

test("react counter renders", () => {
  const { container } = render(<App />)
  expect(container).toMatchSnapshot()
})
