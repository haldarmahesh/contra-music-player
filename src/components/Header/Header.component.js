import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    console.log("this", this.props);
    return (
      <div>
        <h3>{this.props.title}</h3>
        <span>{this.props.album}</span>
      </div>
    )
  }
}
