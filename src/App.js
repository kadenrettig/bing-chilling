import React, { Component } from "react";
import Chilling from "./assets/Chilling.mp4";
import Header from "./components/Header.js";
import { Howl, Howler } from "howler";

const audioClips = [{ sound: Chilling, label: "Chill" }];

class App extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  RenderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button
          key={index}
          className="m-3 font-bold rounded-full text-xl shadow bg-red-800 px-4 py-2 text-white hover:bg-red-400"
          onClick={() => this.SoundPlay(soundObj.sound)}
        >
          BING CHILLING!
        </button>
      );
    });
  };

  render() {
    Howler.volume(1.0);
    return (
      <div>
        <Header />
        <div className="bg-bing-chilling w-full h-screen flex flex-row justify-center">
          <div className="flex flex-col justify-center">
            <div className="App">{this.RenderButtonAndSound()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
