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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var React = require("react");
var msal_browser_1 = require("@azure/msal-browser");
var Config_1 = require("./Config");
var GraphService_1 = require("./GraphService");
function withAuthProvider(WrappedComponent) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                error: null,
                isAuthenticated: false,
                user: {}
            };
            // Initialize the MSAL application object
            _this.publicClientApplication = new msal_browser_1.PublicClientApplication({
                auth: {
                    clientId: Config_1.config.appId
                    //redirectUri: config.redirectUri
                },
                cache: {
                    cacheLocation: "sessionStorage",
                    storeAuthStateInCookie: true
                }
            });
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            // If MSAL already has an account, the user
            // is already logged in
            var accounts = this.publicClientApplication.getAllAccounts();
            if (accounts && accounts.length > 0) {
                // Enhance user object with data from Graph
                this.getUserProfile();
            }
        };
        class_1.prototype.render = function () {
            var _this = this;
            return React.createElement(WrappedComponent, __assign({ error: this.state.error, isAuthenticated: this.state.isAuthenticated, user: this.state.user, login: function () { return _this.login(); }, logout: function () { return _this.logout(); }, getAccessToken: function (scopes) { return _this.getAccessToken(scopes); }, setError: function (message, debug) { return _this.setErrorMessage(message, debug); } }, this.props));
        };
        class_1.prototype.login = function () {
            return __awaiter(this, void 0, void 0, function () {
                var err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            // Login via popup
                            return [4 /*yield*/, this.publicClientApplication.loginPopup({
                                    scopes: Config_1.config.scopes,
                                    prompt: "select_account"
                                })];
                        case 1:
                            // Login via popup
                            _a.sent();
                            // After login, get the user's profile
                            return [4 /*yield*/, this.getUserProfile()];
                        case 2:
                            // After login, get the user's profile
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            this.setState({
                                isAuthenticated: false,
                                user: {},
                                error: this.normalizeError(err_1)
                            });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        class_1.prototype.logout = function () {
            this.publicClientApplication.logout();
        };
        class_1.prototype.getAccessToken = function (scopes) {
            return __awaiter(this, void 0, void 0, function () {
                var accounts, silentResult, err_2, interactiveResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 6]);
                            accounts = this.publicClientApplication
                                .getAllAccounts();
                            if (accounts.length <= 0)
                                throw new Error('login_required');
                            return [4 /*yield*/, this.publicClientApplication
                                    .acquireTokenSilent({
                                    scopes: scopes,
                                    account: accounts[0]
                                })];
                        case 1:
                            silentResult = _a.sent();
                            return [2 /*return*/, silentResult.accessToken];
                        case 2:
                            err_2 = _a.sent();
                            if (!this.isInteractionRequired(err_2)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.publicClientApplication
                                    .acquireTokenPopup({
                                    scopes: scopes
                                })];
                        case 3:
                            interactiveResult = _a.sent();
                            return [2 /*return*/, interactiveResult.accessToken];
                        case 4: throw err_2;
                        case 5: return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        // <getUserProfileSnippet>
        class_1.prototype.getUserProfile = function () {
            return __awaiter(this, void 0, void 0, function () {
                var accessToken, user, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            return [4 /*yield*/, this.getAccessToken(Config_1.config.scopes)];
                        case 1:
                            accessToken = _a.sent();
                            if (!accessToken) return [3 /*break*/, 3];
                            return [4 /*yield*/, GraphService_1.getUserDetails(accessToken)];
                        case 2:
                            user = _a.sent();
                            this.setState({
                                isAuthenticated: true,
                                user: {
                                    displayName: user.displayName,
                                    email: user.mail || user.userPrincipalName,
                                    timeZone: user.mailboxSettings.timeZone,
                                    timeFormat: user.mailboxSettings.timeFormat
                                },
                                error: null
                            });
                            _a.label = 3;
                        case 3: return [3 /*break*/, 5];
                        case 4:
                            err_3 = _a.sent();
                            this.setState({
                                isAuthenticated: false,
                                user: {},
                                error: this.normalizeError(err_3)
                            });
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        // </getUserProfileSnippet>
        class_1.prototype.setErrorMessage = function (message, debug) {
            this.setState({
                error: { message: message, debug: debug }
            });
        };
        class_1.prototype.normalizeError = function (error) {
            var normalizedError = {};
            if (typeof (error) === 'string') {
                var errParts = error.split('|');
                normalizedError = errParts.length > 1 ?
                    { message: errParts[1], debug: errParts[0] } :
                    { message: error };
            }
            else {
                normalizedError = {
                    message: error.message,
                    debug: JSON.stringify(error)
                };
            }
            return normalizedError;
        };
        class_1.prototype.isInteractionRequired = function (error) {
            if (!error.message || error.message.length <= 0) {
                return false;
            }
            return (error.message.indexOf('consent_required') > -1 ||
                error.message.indexOf('interaction_required') > -1 ||
                error.message.indexOf('login_required') > -1 ||
                error.message.indexOf('no_account_in_silent_request') > -1);
        };
        return class_1;
    }(React.Component));
}
exports.default = withAuthProvider;
//# sourceMappingURL=AuthProvider.js.map