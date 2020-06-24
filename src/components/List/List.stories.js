import React from "react"
import List from "./List.js"
export default {
  title: "List",
  component: List,
}

export const SimpleList = () => (
  <List
    todos={[
      { id: 1, text: "First", isSelected: true },
      { id: 2, text: "Second", isSelected: false },
    ]}
  />
)
