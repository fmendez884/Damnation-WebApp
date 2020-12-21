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
var react_router_dom_1 = require("react-router-dom");
var reactstrap_1 = require("reactstrap");
require("@fortawesome/fontawesome-free/css/all.css");
function UserAvatar(props) {
    // If a user avatar is available, return an img tag with the pic
    if (props.user.avatar) {
        return React.createElement("img", { src: props.user.avatar, alt: "user", className: "rounded-circle align-self-center mr-2", style: { width: '32px' } });
    }
    // No avatar available, return a default icon
    return React.createElement("i", { className: "far fa-user-circle fa-lg rounded-circle align-self-center mr-2", style: { width: '32px' } });
}
function AuthNavItem(props) {
    // If authenticated, return a dropdown with the user's info and a
    // sign out button
    if (props.isAuthenticated) {
        return (React.createElement(reactstrap_1.UncontrolledDropdown, null,
            React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true },
                React.createElement(UserAvatar, { user: props.user })),
            React.createElement(reactstrap_1.DropdownMenu, { right: true },
                React.createElement("h5", { className: "dropdown-item-text mb-0" }, props.user.displayName),
                React.createElement("p", { className: "dropdown-item-text text-muted mb-0" }, props.user.email),
                React.createElement(reactstrap_1.DropdownItem, { divider: true }),
                React.createElement(reactstrap_1.DropdownItem, { onClick: props.authButtonMethod }, "Sign Out"))));
    }
    // Not authenticated, return a sign in link
    return (React.createElement(reactstrap_1.NavItem, null,
        React.createElement(reactstrap_1.Button, { onClick: props.authButtonMethod, className: "btn-link nav-link border-0", color: "link" }, "Sign In")));
}
var NavBar = /** @class */ (function (_super) {
    __extends(NavBar, _super);
    function NavBar(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    NavBar.prototype.toggle = function () {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    NavBar.prototype.render = function () {
        return (React.createElement(reactstrap_1.Navbar, { color: "dark", dark: true, expand: "md", fixed: "top", className: "nes-container is-dark is-rounded" },
            React.createElement(reactstrap_1.Container, null,
                React.createElement(reactstrap_1.NavbarBrand, { href: "/" }, "Damnation"),
                React.createElement(reactstrap_1.NavbarToggler, { onClick: this.toggle }),
                React.createElement(reactstrap_1.Collapse, { isOpen: this.state.isOpen, navbar: true },
                    React.createElement(reactstrap_1.Nav, { className: "mr-auto", navbar: true },
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(react_router_dom_1.NavLink, { to: "/", className: "nav-link", exact: true }, "Home"))),
                    React.createElement(reactstrap_1.Nav, { className: "justify-content-end", navbar: true },
                        React.createElement(AuthNavItem, { isAuthenticated: this.props.isAuthenticated, authButtonMethod: this.props.authButtonMethod, user: this.props.user }))))));
    };
    return NavBar;
}(React.Component));
exports.default = NavBar;
// </NavBarSnippet>
//# sourceMappingURL=NavBar.js.map