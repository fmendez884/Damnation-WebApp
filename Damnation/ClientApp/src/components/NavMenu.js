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
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var LoginPage_1 = require("./LoginPage");
var LogoutPage_1 = require("./LogoutPage");
var NavMenu = /** @class */ (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false
        };
        _this.toggle = function () {
            _this.setState({
                isOpen: !_this.state.isOpen
            });
        };
        return _this;
        //debugger;
    }
    //Navigation = (props: any) => {
    //    const { oidc } = props;
    //    const userLoggedIn = oidc.user;
    //};
    //oidc = this.props;
    //userLoggedIn = this.props.oidc.user;
    //oidc  = this.props;
    //   const userLoggedIn = this.oidc.oidc.user;
    NavMenu.prototype.render = function () {
        //console.log(this.props.oidc);
        return (React.createElement("header", null,
            React.createElement(reactstrap_1.Navbar, { className: "navbar-dark bg-dark navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 nes-container is-dark", light: true },
                React.createElement(reactstrap_1.Container, null,
                    React.createElement(reactstrap_1.NavbarBrand, { tag: react_router_dom_1.Link, to: "/", style: { color: "white" } }, "-Damnation-"),
                    React.createElement(reactstrap_1.NavbarToggler, { onClick: this.toggle, className: "mr-2" }),
                    this.props.oidc.user ? (React.createElement(reactstrap_1.Collapse, { className: "justify-content-center" },
                        React.createElement("div", null,
                            "Signed in as:",
                            " ",
                            React.createElement("a", { href: "#login" }, this.props.oidc.user ? this.props.oidc.user.profile.unique_name : "")))) : null,
                    React.createElement(reactstrap_1.Collapse, { className: "d-sm-inline-flex flex-sm-row-reverse", isOpen: this.state.isOpen, navbar: true },
                        React.createElement("ul", { className: "navbar-nav flex-grow" },
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-light", to: "/" }, "Home")),
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-light", to: "/counter" }, "Counter")),
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-light", to: "/fetch-data" }, "Fetch Data")),
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-light", to: "/items" }, "Items")),
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-light", to: "/create" }, "Create")),
                            !this.props.oidc.user ? (React.createElement(LoginPage_1.default, null)) : (React.createElement(LogoutPage_1.default, null))))))));
    };
    return NavMenu;
}(React.Component));
function mapStateToProps(state) {
    return {
        oidc: state.oidc
    };
}
;
exports.default = react_redux_1.connect(mapStateToProps)(NavMenu);
//export default NavMenu;
//# sourceMappingURL=NavMenu.js.map