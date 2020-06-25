import React from "react"
import { render } from "@testing-library/react"
import TodoList from "./TodoList"

test("renders TodoList", () => {
  const renderResult = render(<TodoList />)
  expect(renderResult).toBeDefined()
})
