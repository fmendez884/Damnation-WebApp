import * as React from "react";
import GobletFire from "./GobletFire";
import GameContainer from "./GameContainer";


export default class GameSection extends React.Component<any> {
    render() {
        return (
            <div className="GameSection">
                <GobletFire></GobletFire>
                <GameContainer {...this.props}></GameContainer>
                <GobletFire></GobletFire>
            </div>
        );
    }
}