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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
require("@fortawesome/fontawesome-free/css/all.css");
var GameSection_1 = require("./components/WebPlayer/GameSection");
function WelcomeContent(props) {
    // If authenticated, greet the user
    if (props.isAuthenticated) {
        return (React.createElement("div", null,
            React.createElement("h4", null,
                "Welcome ",
                props.user.displayName,
                "!")));
    }
    // Not authenticated, present a sign in button
    return React.createElement("div", null);
}
var Welcome = /** @class */ (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Welcome.prototype.render = function () {
        return (React.createElement(reactstrap_1.Jumbotron, { style: { background: "black" } },
            React.createElement(WelcomeContent, { isAuthenticated: this.props.isAuthenticated, user: this.props.user, authButtonMethod: this.props.authButtonMethod }),
            React.createElement(GameSection_1.default, __assign({}, this.props))));
    };
    return Welcome;
}(React.Component));
exports.default = Welcome;
//# sourceMappingURL=Welcome.js.map