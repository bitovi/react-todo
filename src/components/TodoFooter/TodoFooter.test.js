import React from "react"
import { render } from "@testing-library/react"
import TodoFooter from "./TodoFooter"

describe("TodoFooter", () => {
  test("doesn't show 'Clear completed' when completed count is zero", () => {
    const renderResult = render(
      <TodoFooter
        totalCount={10}
        completedCount={0}
        nowShowing={"All"}
        onClearCompleted={() => {}}
      />
    )
    expect(renderResult.queryByText("Clear completed")).toBeNull()
  })
  test("shows 'Clear completed' when completed count is greater than zero", () => {
    const renderResult = render(
      <TodoFooter
        totalCount={10}
        completedCount={1}
        nowShowing={"All"}
        onClearCompleted={() => {}}
      />
    )
    expect(renderResult.getByText("Clear completed")).toBeDefined()
  })
})
