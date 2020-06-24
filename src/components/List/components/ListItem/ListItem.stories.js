import React from "react"
import ListItem from "./ListItem.js"

export default {
  title: "List Item",
  component: ListItem,
}

export const WithText = () => (
  <ListItem isSelected={false} text={"Hello Text"} />
)

export const Selected = () => (
  <ListItem isSelected={true} text={"My Todo item"} />
)
