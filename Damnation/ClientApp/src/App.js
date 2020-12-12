"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var Counter_1 = require("./components/Counter");
var FetchData_1 = require("./components/FetchData");
var Items_1 = require("./components/Item/Items");
var Create_1 = require("./components/Item/Create");
var PrivateRoute_1 = require("./components/common/PrivateRoute");
var LoginPage_1 = require("./components/LoginPage");
var LogoutPage_1 = require("./components/LogoutPage");
var CallbackPage_1 = require("./components/CallbackPage");
require("./App.css");
exports.default = (function () { return (React.createElement("div", { className: "App" },
    React.createElement(Layout_1.default, null,
        React.createElement(react_router_1.Route, { exact: true, path: '/', component: Home_1.default }),
        React.createElement(react_router_1.Route, { path: '/counter', component: Counter_1.default }),
        React.createElement(react_router_1.Route, { path: '/items', component: Items_1.default }),
        React.createElement(react_router_1.Route, { path: '/create', component: Create_1.default }),
        React.createElement(PrivateRoute_1.default, { path: "/fetch-data/:startDateIndex?", component: FetchData_1.default }),
        React.createElement(react_router_1.Route, { path: "/login", component: LoginPage_1.default }),
        React.createElement(react_router_1.Route, { path: "/logout", component: LogoutPage_1.default }),
        React.createElement(react_router_1.Route, { path: "/callback", component: CallbackPage_1.default })))); });
//# sourceMappingURL=App.js.map