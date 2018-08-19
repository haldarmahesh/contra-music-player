import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data.json";
import Header from "./components/Header/Header.component";
import Player from "./components/Player/Player.component";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSong: 0,
      play: false
    };
  }
  handlePlayClick() {
    this.setState({
      play: !this.state.play
    })
  }
  handleChangeSong(type) {
    let newSong = 0;
    if (type === "right") {
      newSong = this.state.currentSong + 1
      if(newSong == data.songs.length) {
        newSong = 0
      }
    } else {
        newSong = this.state.currentSong - 1;
        if(newSong == -1) {
          newSong = data.songs.length - 1;
        }
    }
    this.setState({
      currentSong: newSong
    })
  }
  render() {
    let song = data.songs[this.state.currentSong];
    return (
      <div className="App dark-bg">
        <Header
          title={song.title}
          artist={song.artist}
          play={this.state.play}
          color={song.color}
        />
        <Player
          handlePlayClick={() => this.handlePlayClick()}
          handleChangeSong={(type) => this.handleChangeSong(type)}
          thumbnail={song.thumbnail}
          album={song.album}
          totalTime={song.totalTime}
          play={this.state.play}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
