import * as React from "react";
import * as ReactDom from "react-dom";

import DamnationWebPlayer from "./DamnationWebPlayer";


class GameContainer extends React.Component<any> {
    render() {
        return (
            <div className="GameContainer nes-container is-dark is-rounded">
                <DamnationWebPlayer {...this.props}></DamnationWebPlayer>
            </div>
        );
    }
}

export default GameContainer;