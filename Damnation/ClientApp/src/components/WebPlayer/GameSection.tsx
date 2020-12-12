import * as React from "react";
import GobletFire from "./GobletFire";
import GameContainer from "./GameContainer";


export default class GameSection extends React.Component {
    render() {
        return (
            <div className="GameSection">
                <GobletFire></GobletFire>
                <GameContainer></GameContainer>
                <GobletFire></GobletFire>
            </div>
        );
    }
}