import React, { useState } from "react"

const TodoInput = ({
  initialValue = "",
  onEnter,
  onBlur = () => {},
  className,
}) => {
  const [value, setValue] = useState(initialValue)
  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      className={className}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={(e) => onBlur(e.target.value)}
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          onEnter(e.target.value)
          setValue("")
        }
      }}
    />
  )
}

export default TodoInput
