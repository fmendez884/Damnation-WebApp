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
var react_router_dom_1 = require("react-router-dom");
var reactstrap_1 = require("reactstrap");
var AuthProvider_1 = require("./AuthProvider");
var NavBar_1 = require("./NavBar");
var ErrorMessage_1 = require("./ErrorMessage");
var Welcome_1 = require("./Welcome");
require("bootstrap/dist/css/bootstrap.css");
require("./App.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var _this = this;
        var error = null;
        if (this.props.error) {
            error = React.createElement(ErrorMessage_1.default, { message: this.props.error.message, debug: this.props.error.debug });
        }
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement(NavBar_1.default, { isAuthenticated: this.props.isAuthenticated, authButtonMethod: this.props.isAuthenticated ? this.props.logout : this.props.login, user: this.props.user }),
                React.createElement(reactstrap_1.Container, null,
                    error,
                    React.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function (props) {
                            return React.createElement(Welcome_1.default, __assign({}, props, { isAuthenticated: _this.props.isAuthenticated, user: _this.props.user, authButtonMethod: _this.props.login }));
                        } })))));
    };
    return App;
}(React.Component));
exports.default = AuthProvider_1.default(App);
//# sourceMappingURL=App.js.map