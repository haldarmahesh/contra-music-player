import React, { Component } from 'react'

export default class ChangeButton extends Component {
  render() {
    return (
      <div className="change-button" onClick={() => this.props.handleChangeSong(this.props.type)}>
        <i className={`fas fa-chevron-circle-${this.props.type}`}></i>
      </div>
    )
  }
}
