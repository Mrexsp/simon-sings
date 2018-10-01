import React, { Component } from 'react';
import { Button } from "mdbreact";
import $ from "jquery";
import Navigation from "./components/navbar";
import Staff from "./components/staff";
import MediaQuery from 'react-responsive';
import NoteButton from "./components/buttons";
import { Howl } from 'howler';

class App extends Component {

  constructor(props) {
    super(props);

    this.memory = [0];
    this.currentAnswer = [0];

    this.state = {
      usingsolfege: true,
      isNoteActive: false,
      isNoteActiveId: null,
      buttonFlash: true,
      usingStaff: true,
      proMode: false,
      blackKeys: false,
    }
  }

  componentWillMount() {
    for (var i = 1; i <= 13; i++) {
      new Howl({
        src: ["/sounds/" + i + ".mp3"],
        html5: false,
        mute: true
      }).play();
    }
  }

  toggleBlackKeys = () => {
    this.setState({
      blackKeys: !this.state.blackKeys
    });
  }

  toggleProMode = () => {
    this.setState({
      buttonFlash: !this.state.buttonFlash,
      usingStaff: !this.state.usingStaff,
      proMode: !this.state.proMode,
    });
  }

  togglesolfege = () => {
    this.setState({
      usingsolfege: !this.state.usingsolfege
    });
  }

  toggleButtonFlash = () => {
    this.setState({
      buttonFlash: !this.state.buttonFlash
    });
  }

  toggleReplay = () => {
    this.currentAnswer = [0];
    this.playback();
  }

  toggleReset = () => {
    $("#start").removeClass("d-none");
    $("#level").html("Start playing!");
    this.memory = [0];
    this.currentAnswer = [0];
  }

  playback = () => {
    var temp = 500;

    for (let i = 1; i < this.memory.length; i++) {
      setTimeout(() => {
        if (this.state.buttonFlash) {
          $("#" + this.memory[i]).removeClass("btn-blue-grey");
          $("#" + this.memory[i]).addClass("btn-success");
        }

        if (this.state.usingStaff) {
          this.setState({
            isNoteActive: true,
            isNoteActiveId: this.memory[i]
          });
        }

        new Howl({
          src: ["/sounds/" + this.memory[i] + ".mp3"],
          html5: false
        }).play();

      }, 550 + temp)

      setTimeout(() => {
        if (this.state.buttonFlash) {
          $("#" + this.memory[i]).removeClass("btn-success");
          $("#" + this.memory[i]).addClass("btn-blue-grey");
        }

        if (this.state.usingStaff) {
          this.setState({
            isNoteActive: false,
            isNoteActiveId: null
          });
        }
      }, 800 + temp);

      temp += 500;
    }
  }

  newNumber = () => {
    var randomNumber = Math.floor((Math.random() * (!this.state.blackKeys ? 8 : 13)) + 1);

    if (this.state.noRepeats) {
      if (this.memory[this.memory.length - 1] === randomNumber) {
        randomNumber === (!this.state.blackKeys ? 8 : 13) ? randomNumber -= 1 : randomNumber += 1;
      }
    }

    this.memory.push(randomNumber);
    this.currentAnswer = [0];

    if (this.memory.length - 2 > 0) {
      $("#level").addClass("animated fadeIn");
      $("#level").addClass("text-success");
      setTimeout(() => {
        $("#level").removeClass("animated fadeIn");
        $("#level").removeClass("text-success");
      }, 1000)
    }

    $("#level").html(this.memory.length - 2);

    this.playback();
  }

  checkAnswer = (number) => {
    if (this.memory.length > 1) {
      this.currentAnswer.push(number);

      new Howl({
        src: ["/sounds/" + number + ".mp3"],
        html5: false
      }).play();

        this.setState({
          isNoteActive: true,
          isNoteActiveId: number,
        });

      setTimeout(() => {
        this.setState({
          isNoteActive: false,
          isNoteActiveId: null,
        });
      }, 150);

      try {
        if (this.currentAnswer[this.currentAnswer.length - 1] == this.memory[this.currentAnswer.length - 1]) {
          if (this.currentAnswer.length === this.memory.length) {
            this.newNumber();
          }
        } else {
          this.newGame();
        }
      } catch (error) {
        console.log("Error: " + error);
        alert("An error has occuured. Please refresh the borwser and try again.");
      }
    }
  }

  startGame = () => {
    this.newNumber();
    $("#start").addClass("d-none");
  }

  newGame = () => {
    setTimeout(() => {
      $("#start").removeClass("d-none");
      this.memory = [0];
      this.currentAnswer = [0];
      this.complimentNum = 2;

      $("#level").html("Game over");

      for (let i = 1; i <= 7; i++) {
        new Howl({
          src: ["/sounds/" + i + ".mp3"],
          html5: false
        }).play();
      }

      setTimeout(() => {
        for (let i = 3; i <= 13; i++) {
          new Howl({
            src: ["/sounds/" + i + ".mp3"],
            html5: false
          }).play();
        }
      }, 200)
    }, 600)
  }

  render() {

    return (
      <div className="text-center">
        <Navigation handleRepeats={this.toggleRepeats} handlesolfege={this.togglesolfege} handlePlayback={this.toggleReplay} handleButtonFlash={this.toggleButtonFlash} handleProMode={this.toggleProMode} handleReset={this.toggleReset} handleBlackKeys={this.toggleBlackKeys} />
        <MediaQuery minWidth={1000}>

          <h3 className="mt-5 mb-2 text-white"><b id="level">Start playing!</b></h3>
          <hr />
          <Button color="success" className="btn-lg m-3" id="start" onClick={this.startGame}>Start game</Button>

          <div>
            <Staff width="700px" height="175px" isNoteActive={this.state.isNoteActive} isNoteActiveId={this.state.isNoteActiveId} proStaff={this.state.blackKeys} />
          </div>

          <NoteButton blackKeys={this.state.blackKeys} usingsolfege={this.state.usingsolfege} checkAnswer={this.checkAnswer} small={false} />

          <p className="m-2 mt-5">Solfege is <b>{(this.state.usingsolfege ? "enabled" : "disabled")}</b>. Repeated notes are <b>{(this.state.noRepeats ? "not allowed" : "allowed")}</b> Button Flashing is <b>{(this.state.buttonFlash ? "enabled" : "disabled")}</b> pro mode is <b>{(this.state.proMode ? "enabled" : "disabled")}</b></p>
        </MediaQuery>

        <MediaQuery maxWidth={1000}>
          <MediaQuery orientation="portrait">
            <h2 className="text-white m-3">You have to be in landscape mode to use this app.</h2>
          </MediaQuery>
          <MediaQuery orientation="landscape">
            <h5 className=" mt-3 m-2 text-white"><b id="level">Start playing!</b></h5>

            <Button color="success" className="btn mt-2" id="start" onClick={this.startGame}>Start game</Button>

            <MediaQuery minWidth={650}>
              <div>
                <Staff width="700px" height="175px" isNoteActive={this.state.isNoteActive} isNoteActiveId={this.state.isNoteActiveId} proStaff={this.state.blackKeys} />
              </div>
            </MediaQuery>
            <MediaQuery maxWidth={650}>
              <div>
                <Staff width="400px" height="125px" isNoteActive={this.state.isNoteActive} isNoteActiveId={this.state.isNoteActiveId} proStaff={this.state.blackKeys} />
              </div>
            </MediaQuery>

            <NoteButton blackKeys={this.state.blackKeys} usingsolfege={this.state.usingsolfege} checkAnswer={this.checkAnswer} small={true} />

            <p className="m-2">Solfege is <b>{(this.state.usingsolfege ? "enabled" : "disabled")}</b>. Repeated notes are <b>{(this.state.noRepeats ? "not allowed" : "allowed")}</b> Button Flashing is <b>{(this.state.buttonFlash ? "enabled" : "disabled")}</b> pro mode is <b>{(this.state.proMode ? "enabled" : "disabled")}</b></p>
          </MediaQuery>
        </MediaQuery>
      </div>

    );
  }
}

export default App;
