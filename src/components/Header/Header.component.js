import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="container">
      <div className="header" style={{background: '#' + this.props.color}}>
        <h2>{this.props.title}</h2>
        <div>{this.props.artist}</div> 
        <div>({this.props.play ? 'Playing...' : 'Paused...'})</div>
      </div>
      </div>
    )
  }
}
