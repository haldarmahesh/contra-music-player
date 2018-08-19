import React, { Component } from 'react'

export default class PlayButton extends Component {
  render() {
    return (
      <div className="play-button">
        <div className="container" style={{ backgroundImage: `url(${this.props.thumbnail})` }}>
          {/* <img width="100%" /> */}
          <div className="button" onClick={this.props.handleClick}>
          {
            this.props.play ? <i className="fas fa-play-circle"></i> : <i className="fas fa-pause-circle"></i>
          }
          
          </div>
        </div>
      </div>
    )
  }
}
