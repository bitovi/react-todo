import React, { useState } from "react"
import TodoInput from "../TodoInput/TodoInput"
import TodoFooter from "../TodoFooter/TodoFooter"
import TodoItem from "../TodoItem/TodoItem"
import {
  updateTodoAtIndex,
  removeTodoAtIndex,
  filterTodosByNowShowing,
} from "../../utils"
import { ALL_SHOWING } from "../../constants"

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [nowShowing, setNowShowing] = useState(ALL_SHOWING)

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoInput
          className="new-todo"
          onEnter={(text) => setTodos([{ text, completed: false }, ...todos])}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onClick={() =>
            todos.forEach((todo, i) =>
              updateTodoAtIndex(todos, i, { text: todo.text, completed: true })
            )
          }
        />
        <label htmlFor="toggle-all" />
        <ul className="todo-list">
          {filterTodosByNowShowing(todos, nowShowing).map((todo, i) => (
            <TodoItem
              key={todo.text}
              todo={todo}
              onToggle={() =>
                setTodos(
                  updateTodoAtIndex(todos, i, {
                    text: todo.text,
                    completed: !todo.completed,
                  })
                )
              }
              onDestroy={() => setTodos(removeTodoAtIndex(todos, i))}
              onSave={(newTodoText) =>
                setTodos(
                  updateTodoAtIndex(todos, i, {
                    text: newTodoText || todo.text,
                    completed: todo.completed,
                  })
                )
              }
            />
          ))}
        </ul>
      </section>
      <TodoFooter
        count={todos.length}
        completedCount={todos.filter((t) => t.completed).length}
        nowShowing={nowShowing}
        onNowShowingChange={(newNowShowing) => setNowShowing(newNowShowing)}
        onClearCompleted={() =>
          setTodos(todos.filter((todo) => !todo.completed))
        }
      />
    </section>
  )
}

export default TodoList
