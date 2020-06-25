import React from "react"
import classNames from "classnames"

const TodoFooter = ({
  count,
  completedCount,
  nowShowing,
  onClearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> todos left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={classNames({ selected: nowShowing === "All" })}
          >
            All
          </a>
        </li>{" "}
        <li>
          <a
            href="#/active"
            className={classNames({ selected: nowShowing === "Active" })}
          >
            Active
          </a>
        </li>{" "}
        <li>
          <a
            href="#/completed"
            className={classNames({ selected: nowShowing === "Completed" })}
          >
            Completed
          </a>
        </li>
      </ul>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={() => onClearCompleted()}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default TodoFooter
