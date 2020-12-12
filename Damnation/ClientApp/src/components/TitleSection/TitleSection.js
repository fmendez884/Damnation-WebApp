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
var UserGreeting_1 = require("./UserGreeting");
var TitleSection = /** @class */ (function (_super) {
    __extends(TitleSection, _super);
    function TitleSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleSection.prototype.render = function () {
        return (React.createElement("div", { className: "title-section container" },
            React.createElement("h1", { className: "title box" }, "-DAMNATION-"),
            React.createElement("div", { className: "nested-item-container" },
                React.createElement(UserGreeting_1.default, null))));
    };
    ;
    return TitleSection;
}(React.Component));
exports.default = TitleSection;
//# sourceMappingURL=TitleSection.js.map