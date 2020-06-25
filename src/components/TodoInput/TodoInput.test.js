import React from "react"
import { render, fireEvent } from "@testing-library/react"
import TodoInput from "./TodoInput"

describe('TodoInput', () => {
  test("typed text shows up in textbox", () => {
    const renderResult = render(<TodoInput initialValue="test"/>)
    const input = renderResult.getByDisplayValue('test')
    fireEvent.change(input, { target: { value: '123' } })
    expect(input.value).toBe('123')  
  })
})
