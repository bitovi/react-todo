import React, {useState} from "react"

const TodoInput = ({initialValue = "", onEnter, onBlur, className}) => {
    const [value, setValue] = useState(initialValue)
    return (
        <input
            type="text"
            className={className}
            value={value}
            onChange={e => setValue(e.target.value)}
            onBlur={e => onBlur()}
            onKeyUp={e => {if(e.keyCode === 13) onEnter()}}
        />
    )
}

export default TodoInput
