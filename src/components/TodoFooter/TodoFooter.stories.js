import React from "react"
import TodoFooter from "./TodoFooter"
import { withKnobs, select, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

export default {
  title: "TodoFooter",
  component: TodoFooter,
  decorators: [withKnobs],
}

export const TodoFooterStory = () => (
  <TodoFooter
    count={number("count", 10)}
    completedCount={number("completedCount", 5)}
    nowShowing={select(
      "nowShowing",
      ["All", "Active", "Completed"],
      "All",
      "nowShowing"
    )}
    onNowShowingChange={action("onNowShowingChange")}
    onClearCompleted={action("onClearCompleted")}
  />
)

// count,
// completedCount,
// nowShowing,
// onClearCompleted,
