import React from "react"
import { render } from "@testing-library/react"
import TodoApp from "./TodoApp"

test("renders TodoApp", () => {
  const renderResult = render(< TodoApp  />)
  expect(renderResult).toBeDefined()  
})
