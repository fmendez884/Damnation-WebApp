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
var axios_1 = require("axios");
var react_router_1 = require("react-router");
var Create = /** @class */ (function (_super) {
    __extends(Create, _super);
    function Create(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            if (e.currentTarget.name === "name") {
                _this.setState(__assign(__assign({}, _this.state), { name: (e.currentTarget.value) }));
            }
            else if (e.currentTarget.name === "description") {
                _this.setState(__assign(__assign({}, _this.state), { description: e.currentTarget.value }));
            }
            console.log(_this.state);
        };
        _this.handleOnSubmit = function (e) {
            var itemObject = {
                name: _this.state.name,
                description: _this.state.description
            };
            axios_1.default.post("api/items/create", itemObject).then(function (res) {
                console.log(res);
                //debugger;
                _this.state.history.push('/items');
                _this.setState({ redirect: true });
                console.log(_this.state);
            });
        };
        _this.onChange = _this.onChange.bind(_this);
        _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
        _this.state = {
            name: '',
            description: '',
            history: [],
            redirect: false
        };
        return _this;
    }
    Create.prototype.render = function () {
        var _this = this;
        if (this.state.history[0] === "/items") {
            return React.createElement(react_router_1.Redirect, { to: "/items" });
        }
        if (this.state.redirect === true) {
            return React.createElement(react_router_1.Redirect, { to: "/items" });
        }
        else {
            return (React.createElement("div", { className: "item-form" },
                React.createElement("h3", null, "Add new trip"),
                React.createElement("form", { onSubmit: function (e) {
                        e.preventDefault();
                        var target = e.target;
                        var name = target.name.value;
                        var description = target.description.value;
                        _this.handleOnSubmit(e);
                    } },
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", null, "Item name:  "),
                        React.createElement("input", { type: "name", name: "name", className: "form-control", value: this.state.name, onChange: this.onChange })),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", null, "Item description: "),
                        React.createElement("textarea", { name: "description", className: "form-control", value: this.state.description, onChange: this.onChange })),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("input", { type: "submit", value: "Add item", className: "btn btn-primary" })))));
        }
    };
    return Create;
}(React.Component));
exports.default = Create;
//# sourceMappingURL=Create.js.map