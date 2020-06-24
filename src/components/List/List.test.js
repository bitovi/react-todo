import React from "react"
import { render } from "@testing-library/react"
import List from "./List"

test("renders learn react link", () => {
  const { getByText } = render(<List />)
  const linkElement = getByText(/Todo/i)
  expect(linkElement).toBeInTheDocument()
})
