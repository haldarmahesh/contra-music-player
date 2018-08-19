import React, { Component } from 'react'
import ChangeButton from '../ChangeButton/ChangeButton';
import PlayButton from '../PlayButton/PlayButton.component';
export default class ButtonController extends Component {
  render() {
    return (<div className="button-container clear">
        <ChangeButton handleChangeSong={this.props.handleChangeSong} type="left"/>
        <PlayButton
          handleClick={this.props.handlePlayClick}
          thumbnail={this.props.thumbnail}
          play={this.props.play}/>
        <ChangeButton handleChangeSong={this.props.handleChangeSong} type="right"/>
    </div>);
  }
}
