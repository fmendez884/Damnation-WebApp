import * as React from "react";
import * as ReactDom from "react-dom"
//import { connect } from "react-redux";

import gobletFire from "../images/goblet-fire.gif";

export default class GobletFire extends React.Component {
    render() {
        return (
            <div>
                <img className="gobletFireImage" src={gobletFire}></img>
            </div>
        );
    }
}