import React from "react"
import classNames from 'classnames'
import TodoInput from '../TodoInput/TodoInput'

const TodoItem = ({todo, onToggle, onDestroy, onEdit, editing, onSave, onCancel}) => {
    return (
        <li className={classNames({completed: todo.completed, editing: editing})}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={onToggle}
                />
                <label onDoubleClick={onEdit}>
                    {todo.text}
                </label>
                <button className="destroy" onClick={onDestroy}>X</button>
            </div>
            <TodoInput
                className="edit"
                initialValue={todo.text}
                onBlur={onSave}
                onEnter={onSave}
            />
        </li>
    )
}

export default TodoItem
