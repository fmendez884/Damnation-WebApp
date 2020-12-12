"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var PropTypes = require("prop-types");
var react_redux_1 = require("react-redux");
var LoginPage_1 = require("../LoginPage");
var PrivateRoute = function (_a) {
    var Component = _a.component, oidc = _a.oidc, rest = __rest(_a, ["component", "oidc"]);
    //console.log("rest: ", ...rest);
    //console.log("oidc", oidc);
    //debugger;
    return (React.createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) {
            if (!oidc.user) {
                return React.createElement(LoginPage_1.default, null);
            }
            else {
                return React.createElement(Component, __assign({}, props));
            }
        } })));
};
PrivateRoute.propTypes = {
    //component: PropTypes.func.isRequired,
    oidc: PropTypes.object.isRequired
};
function mapStateToProps(state) {
    //console.log(state);
    //debugger;
    return {
        oidc: state.oidc
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(PrivateRoute);
//export default PrivateRoute;
//# sourceMappingURL=PrivateRoute.js.map