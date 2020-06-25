import React from "react"
import classNames from "classnames"
import { ALL_SHOWING, ACTIVE_SHOWING, COMPLETED_SHOWING } from "../../constants"

const TodoFooter = ({
  count,
  completedCount,
  onNowShowingChange,
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
            className={classNames({ selected: nowShowing === ALL_SHOWING })}
            onClick={() => onNowShowingChange(ALL_SHOWING)}
          >
            All
          </a>
        </li>{" "}
        <li>
          <a
            href="#/"
            className={classNames({ selected: nowShowing === ACTIVE_SHOWING })}
            onClick={() => onNowShowingChange(ACTIVE_SHOWING)}
          >
            Active
          </a>
        </li>{" "}
        <li>
          <a
            href="#/"
            className={classNames({
              selected: nowShowing === COMPLETED_SHOWING,
            })}
            onClick={() => onNowShowingChange(COMPLETED_SHOWING)}
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
