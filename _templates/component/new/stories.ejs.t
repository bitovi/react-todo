---
to: src/components/<%= name %>/<%= name %>.stories.js
---
import React from 'react'
import <%= name %> from './<%= name %>'

export default {
  title: '<%= name %>',
  component: <%= name %>,
}

<% const passedProps = props && props.split(',').map(prop => `${prop.trim()}={\`\`}`).join(" ") -%>
export const <%= name %>Story = () => (
  <<%= name %> <%= passedProps %> />
)
