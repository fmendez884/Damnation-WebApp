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
var react_redux_1 = require("react-redux");
var UserGreeting = /** @class */ (function (_super) {
    __extends(UserGreeting, _super);
    function UserGreeting(props) {
        return _super.call(this, props) || this;
    }
    UserGreeting.prototype.render = function () {
        console.log(this.props.oidc.user);
        return (React.createElement("div", null, this.props.oidc.user != null ? (React.createElement("div", { className: "nes-container from-left is-dark is-rounded is-small user-greeting box" },
            "Signed in as:",
            " ",
            React.createElement("a", { href: "#login" }, this.props.oidc.user ? this.props.oidc.user.profile.unique_name : ""))) : null));
    };
    ;
    return UserGreeting;
}(React.Component));
function mapStateToProps(state) {
    return {
        oidc: state.oidc
    };
}
;
exports.default = react_redux_1.connect(mapStateToProps)(UserGreeting);
//# sourceMappingURL=UserGreeting.js.map