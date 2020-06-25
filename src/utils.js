import { ALL_SHOWING, ACTIVE_SHOWING, COMPLETED_SHOWING } from "./constants"

export const updateTodoAtIndex = (todos, index, newTodo) => {
  return todos.map((todo, i) => (i === index ? newTodo : todo))
}

export const removeTodoAtIndex = (todos, index) => {
  return todos.filter((todo, i) => i !== index)
}

export const filterTodosByNowShowing = (todos, nowShowing) => {
  if (nowShowing === ALL_SHOWING) return todos
  else
    return todos.filter((todo) =>
      nowShowing === ACTIVE_SHOWING ? !todo.completed : todo.completed
    )
}
