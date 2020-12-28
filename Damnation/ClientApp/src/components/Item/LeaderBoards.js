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
                    React.createElement("th", null, "Score"),
                    React.createElement("th", null, "Remaining Health"),
                    React.createElement("th", null, "Time Elapsed"))),
            React.createElement("tbody", null, items.map(function (item) { return (React.createElement("tr", { key: item.id },
                React.createElement("td", null, item.name),
                React.createElement("td", null, item.score),
                React.createElement("td", null, item.remainingHealth),
                React.createElement("td", null, item.timeElapsed),
                React.createElement("td", null, " - "))); }))));
    };
    Items.prototype.componentDidMount = function () {
        this.populateItemsData();
    };
    Items.prototype.populateItemsData = function () {
        var _this = this;
        axios_1.default.get("api/leaderboards").then(function (result) {
            var response = result.data;
            _this.setState({ items: response, loading: false });
        });
    };
    Items.prototype.render = function () {
        var loading = React.createElement("p", null,
            React.createElement("em", null, "Loading..."));
        var content = this.state.loading ? (loading) : (this.renderAllItemsTable(this.state.items));
        return (React.createElement("div", null,
            React.createElement("h1", null, " Leader Boards "),
            React.createElement("p", null, " Current Rankings: "),
            content));
    };
    return Items;
}(React.Component));
exports.default = Items;
//# sourceMappingURL=LeaderBoards.js.map