import * as React from "react";
import * as ReactDom from "react-dom"
import { connect } from "react-redux";

import DamnationWebPlayer from "./DamnationWebPlayer";
import GobletFire from "./GobletFire";


class GameContainer extends React.Component {
    render() {
        return (
            <div className="GameContainer nes-container is-dark is-rounded">
                <DamnationWebPlayer></DamnationWebPlayer>
            </div>
        );
    }
}

export default GameContainer;