import React from "react"
import { render } from "@testing-library/react"
import ListItem from "./ListItem"

test("renders learn react link", () => {
  const { getByText } = render(
    <ListItem text="First Todo" isSelected={false} onCheck={() => {}} />
  )
  const linkElement = getByText(/Todo/i)
  expect(linkElement).toBeInTheDocument()
})
