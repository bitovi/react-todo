import React from "react"

function ListItem({ isSelected, text, onCheck }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input type="checkbox" checked={isSelected} onChange={onCheck} />
      <div style={isSelected ? { textDecoration: "line-through" } : {}}>
        {text}
      </div>
    </div>
  )
}

export default ListItem
