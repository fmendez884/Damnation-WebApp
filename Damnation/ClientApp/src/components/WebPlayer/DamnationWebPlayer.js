"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
//import { connect } from "react-redux";
var react_unity_webgl_1 = require("react-unity-webgl");
var DamnationWebPlayer = /** @class */ (function (_super) {
    __extends(DamnationWebPlayer, _super);
    function DamnationWebPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.unityContent = new react_unity_webgl_1.UnityContent("./Build/damnation-rpg-webgl-build.json", "./Build/UnityLoader.js", {
            adjustOnWindowResize: true
        });
        _this.webPlayerWidth = 1000;
        _this.state = {
            userDisplayLoaded: false
        };
        _this.sendUserData = _this.sendUserData.bind(_this);
        return _this;
        //console.log(this);
    }
    DamnationWebPlayer.prototype.sendUserData = function (e) {
        //debugger;
        //var oidc = JSON.constructor(this.props.oidc)
        var user = JSON.constructor(this.props.user);
        //oidc.user = user
        var profile = JSON.constructor(this.props.user.profile);
        user.profile = profile;
        this.unityContent.send("UserNameDisplay", "ReceiveUserData", JSON.stringify(this.props.user));
    };
    DamnationWebPlayer.prototype.componentDidUpdate = function (props) {
        if (this.props.isAuthenticated === true) {
            //debugger;
            console.log(this.props);
            console.log(JSON.stringify(this.props.user));
        }
    };
    DamnationWebPlayer.prototype.componentDidMount = function () {
        window.addEventListener('userDisplayLoaded', this.sendUserData);
    };
    DamnationWebPlayer.prototype.componentWillUnmount = function () {
        window.removeEventListener('userDisplayLoaded', this.sendUserData);
    };
    DamnationWebPlayer.prototype.render = function () {
        // Finally render the Unity component and pass 
        // the Unity content through the props.
        //debugger;
        this.sendUserData(this.props);
        return (React.createElement("div", { className: "WebPlayer", style: { width: this.webPlayerWidth } }, React.createElement(react_unity_webgl_1.default, { unityContent: this.unityContent })));
    };
    return DamnationWebPlayer;
}(React.Component));
function mapStateToProps(state) {
    return {
        oidc: state.oidc
    };
}
;
//export default connect(mapStateToProps)(DamnationWebPlayer);
exports.default = (DamnationWebPlayer);
//# sourceMappingURL=DamnationWebPlayer.js.map