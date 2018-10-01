import React from "react";
import { Button } from "mdbreact";

export default class NoteButton extends React.Component {
    render() {
        if (!this.props.blackKeys) {
            return (
                <div className="w-100 mt-1">
                    <Button color="blue-grey" className={"btn" + (!this.props.small ? "-lg" : null) + " m-1"} id="1" onClick={() => this.props.checkAnswer('1')}>{(this.props.usingsolfege === true ? "Do" : "C")}</Button>
                    <Button color="blue-grey" className={"btn" + (!this.props.small ? "-lg" : null) + " m-1"} id="2" onClick={() => this.props.checkAnswer('2')}>{(this.props.usingsolfege === true ? "Re" : "D")}</Button>
                    <Button color="blue-grey" className={"btn" + (!this.props.small ? "-lg" : null) + " m-1"} id="3" onClick={() => this.props.checkAnswer('3')}>{(this.props.usingsolfege === true ? "Mi" : "E")}</Button>
                    <Button color="blue-grey" className={"btn" + (!this.props.small ? "-lg" : null) + " m-1"} id="4" onClick={() => this.props.checkAnswer('4')}>{(this.props.usingsolfege === true ? "Fa" : "F")}</Button>
                    <Button color="blue-grey" className={"btn" + (!this.props.small ? "-lg" : null) + " m-1"} id="5" onClick={() => this.props.checkAnswer('5')}>{(this.props.usingsolfege === true ? "Sol" : "G")}</Button>
                    <Button color="blue-grey" className={"btn" + (!this.props.small ? "-lg" : null) + " m-1"} id="6" onClick={() => this.props.checkAnswer('6')}>{(this.props.usingsolfege === true ? "La" : "A")}</Button>
                    <Button color="blue-grey" className={"btn" + (!this.props.small ? "-lg" : null) + " m-1"} id="7" onClick={() => this.props.checkAnswer('7')}>{(this.props.usingsolfege === true ? "Ti" : "B")}</Button>
                    <Button color="blue-grey" className={"btn" + (!this.props.small ? "-lg" : null) + " m-1"} id="8" onClick={() => this.props.checkAnswer('8')}>{(this.props.usingsolfege === true ? "Do" : "C")}</Button>
                </div>
            );
        } else {
            return (
                <div className="w-100 mt-1">
                    <Button color="blue-grey" className="btn m-1" id="1" onClick={() => this.props.checkAnswer('1')}>{(this.props.usingsolfege === true ? "Do" : "C")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="9" onClick={() => this.props.checkAnswer('9')}>{(this.props.usingsolfege === true ? "Di" : "C#")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="2" onClick={() => this.props.checkAnswer('2')}>{(this.props.usingsolfege === true ? "Re" : "D")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="10" onClick={() => this.props.checkAnswer('10')}>{(this.props.usingsolfege === true ? "Ri" : "D#")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="3" onClick={() => this.props.checkAnswer('3')}>{(this.props.usingsolfege === true ? "Mi" : "E")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="4" onClick={() => this.props.checkAnswer('4')}>{(this.props.usingsolfege === true ? "Fa" : "F")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="11" onClick={() => this.props.checkAnswer('11')}>{(this.props.usingsolfege === true ? "Fi" : "F#")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="5" onClick={() => this.props.checkAnswer('5')}>{(this.props.usingsolfege === true ? "Sol" : "G")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="12" onClick={() => this.props.checkAnswer('12')}>{(this.props.usingsolfege === true ? "Si" : "G#")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="6" onClick={() => this.props.checkAnswer('6')}>{(this.props.usingsolfege === true ? "La" : "A")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="13" onClick={() => this.props.checkAnswer('13')}>{(this.props.usingsolfege === true ? "Li" : "A#")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="7" onClick={() => this.props.checkAnswer('7')}>{(this.props.usingsolfege === true ? "Ti" : "B")}</Button>
                    <Button color="blue-grey" className="btn m-1" id="8" onClick={() => this.props.checkAnswer('8')}>{(this.props.usingsolfege === true ? "Do" : "C")}</Button>
                </div>
            );
        }
    }
} 
