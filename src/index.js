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
      currentSong: 0
    };
  }
  render() {
    return (
      <div className="App">
        <Header
          title={data.songs[this.state.currentSong].title}
          album={data.songs[this.state.currentSong].album}
        />
        <Player />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
