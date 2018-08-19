import React, { Component } from 'react';
import PlayButton from '../PlayButton/PlayButton.component';
import ChangeButton from '../ChangeButton/ChangeButton';
import ButtonController  from '../ButtonController/ButtonController.component';

export default class Player extends Component {
  render() {
    return (
      <div className="player-body">
        <div className="album float-right">{this.props.album}</div>
        <div className="current-time clear float-right">
          <span>01:45</span> / 
          <span> {this.props.totalTime}</span>
        </div>
        <ButtonController
          handleChangeSong={this.props.handleChangeSong}
          handlePlayClick={this.props.handlePlayClick}
          thumbnail= {this.props.thumbnail}
          play={this.props.play}/>
      </div>
    )
  }
}
