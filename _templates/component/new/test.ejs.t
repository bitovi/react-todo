---
to: src/components/<%= name %>/<%= name %>.test.js
---
import React from "react"
import { render } from "@testing-library/react"
import <%= name %> from "./<%= name %>"

<% const passedProps = props.split(',').map(prop => `${prop.trim()}={\`\`}`).join(" ") -%>
test("renders <%= name %>", () => {
  const renderResult = render(< <%= name %> <%= passedProps %> />)
  expect(renderResult).toBeDefined()  
})
