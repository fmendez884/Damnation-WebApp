"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var configureStore_1 = require("./store/configureStore");
var history_1 = require("history");
var App_1 = require("./App");
var serviceWorker = require("./serviceWorker");
var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
var history = history_1.createBrowserHistory({ basename: baseUrl });
var store = configureStore_1.default(history);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(React.StrictMode, null,
        React.createElement(App_1.default, null))), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//# sourceMappingURL=index.js.map