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
        _this.handleEvent = _this.handleEvent.bind(_this);
        return _this;
    }
    DamnationWebPlayer.prototype.sendUserData = function () {
        var user = JSON.constructor(this.props.user);
        this.unityContent.send("UserNameDisplay", "ReceiveUserData", JSON.stringify(user));
    };
    DamnationWebPlayer.prototype.handleEvent = function (e) {
        this.setState({ userDisplayLoaded: true });
    };
    ;
    DamnationWebPlayer.prototype.componentDidUpdate = function (props) {
        if (this.props.isAuthenticated === true && this.state.userDisplayLoaded) {
            this.sendUserData();
        }
    };
    DamnationWebPlayer.prototype.componentDidMount = function () {
        window.addEventListener('userDisplayLoaded', this.handleEvent);
    };
    DamnationWebPlayer.prototype.componentWillUnmount = function () {
        window.removeEventListener('userDisplayLoaded', this.handleEvent);
    };
    DamnationWebPlayer.prototype.render = function () {
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
exports.default = (DamnationWebPlayer);
//# sourceMappingURL=DamnationWebPlayer.js.map