import React, { useState } from "react"
import classNames from "classnames"
import TodoInput from "../TodoInput/TodoInput"

const TodoItem = ({ todo, onToggle, onDestroy, onSave }) => {
  const [editing, setEditing] = useState(false)

  const saveEdits = (newTodoText) => {
    onSave(newTodoText)
    setEditing(false)
  }

  return (
    <li className={classNames({ completed: todo.completed, editing: editing })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />
        <label onDoubleClick={() => setEditing(true)}>{todo.text}</label>
        <button className="destroy" onClick={onDestroy} />
      </div>
      <TodoInput
        className="edit"
        initialValue={todo.text}
        onBlur={saveEdits}
        onEnter={saveEdits}
      />
    </li>
  )
}

export default TodoItem
