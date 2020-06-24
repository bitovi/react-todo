import React from "react"
import ListItem from "./components/ListItem/ListItem.js"

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: props.todos || [],
      value: "",
    }
  }

  onCheck = (id) => {
    let todos = this.state.todos
    todos.forEach((el) => {
      if (el.id === id) {
        el.isSelected = !el.isSelected
      }
    })
    this.setState({ todos })
  }

  addTodo = () => {
    let todos = this.state.todos
    todos.push({
      isSelected: false,
      text: this.state.value,
      id: String(Math.random()),
    })
    // Obviously there will prob be ids coming from a db table in a real app
    this.setState({ todos, value: "" })
  }

  render() {
    return (
      <div>
        <div style={{ fontSize: "50px" }}>Todo List</div>
        <div style={{ display: "flex" }}>
          <input
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>

        {this.state.todos.map((el) => (
          <ListItem
            key={el.id}
            isSelected={el.isSelected}
            text={el.text}
            onCheck={() => this.onCheck(el.id)}
          />
        ))}
      </div>
    )
  }
}

export default List
