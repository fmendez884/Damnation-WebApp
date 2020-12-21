"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
var serviceWorker = require("./serviceWorker");
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(App_1.default, null)), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//# sourceMappingURL=index.js.map