import React from 'react'

class Logger extends React.Component {

componentDidMount() {
  console.log(this.props.context)

}
  render () {
    return (
      <p>{this.props.context.frontmatter.title}</p>
    )
  }
}

export default Logger
