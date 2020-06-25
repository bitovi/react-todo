import React from "react"
import { render } from "@testing-library/react"
import TodoItem from "./TodoItem"

describe('TodoItem', () => {
  test("renders", () => {
    const renderResult = render(
      <TodoItem
        todo={{text: "todo", completed: false}}
        onCancel={() => {}}
        onDestroy={() => {}}
        onEdit={() => {}}
        onSave={() => {}}
        onToggle={() => {}}
      />
    )
    expect(renderResult).toBeDefined()  
  })
})


// test("calls onEnter when enter is pressed", () => {
//   let enterPressed = false
//   const renderResult = render(
//     <TodoInput
//       initialValue="test"
//       onEnter={() => enterPressed = true}
//     />
//   )
//   const input = renderResult.getByDisplayValue('test')
//   fireEvent.keyUp(input, {key: 'Enter', keyCode: 13})
//   expect(enterPressed).toBe(true)  
// })