"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var axios_1 = require("axios");
var Items = /** @class */ (function (_super) {
    __extends(Items, _super);
    function Items() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: [],
            loading: true
        };
        return _this;
    }
    Items.prototype.renderAllItemsTable = function (items) {
        return (React.createElement("table", { className: "table table-striped" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Description"),
                    React.createElement("th", null, "Completed"),
                    React.createElement("th", null, "Id"),
                    React.createElement("th", null, "Action"))),
            React.createElement("tbody", null, items.map(function (item) { return (React.createElement("tr", { key: item.id },
                React.createElement("td", null, item.name),
                React.createElement("td", null, item.description),
                React.createElement("td", null, item.completed ? "yes" : "no"),
                React.createElement("td", null, item.id),
                React.createElement("td", null, " - "))); }))));
    };
    Items.prototype.componentDidMount = function () {
        this.populateItemsData();
    };
    Items.prototype.populateItemsData = function () {
        var _this = this;
        console.log("fetch");
        axios_1.default.get("api/items").then(function (result) {
            var response = result.data;
            _this.setState({ items: response, loading: false });
            console.log(_this.state);
        });
    };
    Items.prototype.render = function () {
        var loading = React.createElement("p", null,
            React.createElement("em", null, "Loading..."));
        var content = this.state.loading ? (loading) : (this.renderAllItemsTable(this.state.items));
        return (React.createElement("div", null,
            React.createElement("h1", null, " Items "),
            React.createElement("p", null, " Here are your Items "),
            content));
    };
    return Items;
}(React.Component));
exports.default = Items;
//# sourceMappingURL=Items.js.map