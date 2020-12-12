"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.css");
//import "./index.css";
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var connected_react_router_1 = require("connected-react-router");
var history_1 = require("history");
var configureStore_1 = require("./store/configureStore");
var App_1 = require("./App");
var registerServiceWorker_1 = require("./registerServiceWorker");
var redux_oidc_1 = require("redux-oidc");
var userManager_1 = require("./util/userManager");
// Create browser history to use in the Redux store
var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
var history = history_1.createBrowserHistory({ basename: baseUrl });
// Get the application-wide store instance, prepopulating with state from the server where available.
//const initialState = window.initialReduxState;
var store = configureStore_1.default(history);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(redux_oidc_1.OidcProvider, { store: store, userManager: userManager_1.default },
        React.createElement(connected_react_router_1.ConnectedRouter, { history: history },
            React.createElement(App_1.default, null)))), document.getElementById('root'));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map