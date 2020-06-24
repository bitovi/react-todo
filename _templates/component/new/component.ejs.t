---
to: src/components/<%= name %>/<%= name %>.js
---
import React from "react"

class <%= name %> extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {<%= props %>} = this.props
    return (<div></div>)
  }
}

export default <%= name %>
